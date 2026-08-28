import { getApiKey, getBaseUrl, getModel } from "../config-store.js";

/**
 * Call Mervex Ai chat completion endpoint.
 * OpenAI-compatible: POST /v1/chat/completions
 * Supports streaming (SSE) when stream=true.
 */
export async function callMervex({ apiKey, baseUrl, model, messages, stream = true }) {
  const url = `${baseUrl.replace(/\/$/, "")}/v1/chat/completions`;
  const body = JSON.stringify({ model, messages, stream });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let msg = `HTTP ${res.status}`;
    try {
      const j = JSON.parse(text);
      msg = j.error?.message || j.message || msg;
    } catch {
      if (text) msg = text.slice(0, 200);
    }
    if (res.status === 401) msg = "Invalid API key. Run 'mervex config --set-key <key>'.";
    if (res.status === 429) msg = "Rate limit or daily credit quota exceeded.";
    if (res.status === 402) msg = "Premium model — upgrade your plan to use this model.";
    throw new Error(msg);
  }

  if (!stream) {
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  }

  // Streaming SSE
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let full = "";
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith("data:")) continue;
      const data = trimmed.slice(5).trim();
      if (data === "[DONE]") continue;
      try {
        const json = JSON.parse(data);
        const delta = json.choices?.[0]?.delta?.content || "";
        if (delta) {
          process.stdout.write(delta);
          full += delta;
        }
      } catch {
        // skip non-JSON keepalive lines
      }
    }
  }
  return full;
}
