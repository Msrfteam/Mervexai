import { createInterface } from "readline";
import { getApiKey, getBaseUrl, getModel } from "../config-store.js";
import { callMervex } from "./api.js";

const MODEL_NAMES = {
  "Msrfteam/Mervex-ai-v0.1-lite": "V0.1 Lite",
  "Msrfteam/Mervex-ai-v0.1": "V0.1",
  "Msrfteam/Mervex-ai-v0.2": "V0.2",
  "Msrfteam/Mervex-ai-v0.2-pro": "V0.2 Pro",
};

export async function chatCommand(opts) {
  const apiKey = getApiKey(opts.apiKey);
  const baseUrl = getBaseUrl(opts.baseUrl);
  const model = getModel(opts.model);
  const modelName = MODEL_NAMES[model] || model;

  const messages = [];
  if (opts.system) {
    messages.push({ role: "system", content: opts.system });
  }

  console.log(`  Model: \x1b[36m${modelName}\x1b[0m  \x1b[90m(${model})\x1b[0m`);
  console.log(`  \x1b[90mType your message. 'exit' or Ctrl+C to quit. 'clear' to reset.\x1b[0m\n`);
  console.log("  \x1b[90m──────────────────────────────────────────────────\x1b[0m\n");

  const rl = createInterface({ input: process.stdin, output: process.stdout });

  const ask = () => {
    rl.question("\x1b[32m\x1b[1myou>\x1b[0m ", async (input) => {
      const trimmed = input.trim();
      if (!trimmed) return ask();
      if (trimmed.toLowerCase() === "exit" || trimmed.toLowerCase() === "quit") {
        console.log("\n  \x1b[90mGoodbye! 👋\x1b[0m\n");
        rl.close();
        return;
      }
      if (trimmed.toLowerCase() === "clear") {
        messages.length = 0;
        console.log("\n  \x1b[90mConversation cleared.\x1b[0m\n");
        return ask();
      }

      messages.push({ role: "user", content: trimmed });

      console.log("\x1b[36m\x1b[1mMervex>\x1b[0m ");
      try {
        const reply = await callMervex({
          apiKey, baseUrl, model, messages,
          stream: opts.stream !== false,
        });
        console.log("\n");
        messages.push({ role: "assistant", content: reply });
      } catch (e) {
        console.log(`\n  \x1b[31m✗ Error: ${e.message}\x1b[0m\n`);
      }
      ask();
    });
  };

  ask();
}
