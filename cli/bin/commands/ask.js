import { getApiKey, getBaseUrl, getModel } from "../config-store.js";
import { callMervex } from "./api.js";

const MODEL_NAMES = {
  "Msrfteam/Mervex-ai-v0.1-lite": "V0.1 Lite",
  "Msrfteam/Mervex-ai-v0.1": "V0.1",
  "Msrfteam/Mervex-ai-v0.2": "V0.2",
  "Msrfteam/Mervex-ai-v0.2-pro": "V0.2 Pro",
};

export async function askCommand(prompt, opts) {
  const apiKey = getApiKey(opts.apiKey);
  const baseUrl = getBaseUrl(opts.baseUrl);
  const model = getModel(opts.model);
  const modelName = MODEL_NAMES[model] || model;

  const messages = [];
  if (opts.system) {
    messages.push({ role: "system", content: opts.system });
  }
  messages.push({ role: "user", content: prompt });

  process.stdout.write(`\x1b[36m\x1b[1mMervex>\x1b[0m `);
  try {
    await callMervex({
      apiKey, baseUrl, model, messages,
      stream: true,
    });
    console.log("\n");
  } catch (e) {
    console.log(`\n  \x1b[31m✗ Error: ${e.message}\x1b[0m\n`);
    process.exit(1);
  }
}
