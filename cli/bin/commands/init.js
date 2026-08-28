import { createInterface } from "readline";
import { loadConfig, saveConfig } from "../config-store.js";

export function initCommand(program) {
  const config = loadConfig();
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  console.log("  \x1b[1mWelcome to Mervex Ai CLI setup!\x1b[0m\n");
  console.log("  \x1b[90mGet your free API key: https://mervexai.cc.cd/auth\x1b[0m\n");

  const ask = (q) => new Promise((res) => rl.question(q, res));

  (async () => {
    // API Key
    const existingKey = config.apiKey ? ` [\x1b[32m${config.apiKey.slice(0, 8)}...\x1b[0m]` : "";
    let apiKey = await ask(`  \x1b[36m? API Key${existingKey} (press Enter to keep): \x1b[0m`);
    apiKey = apiKey.trim();
    if (apiKey) config.apiKey = apiKey;
    else if (!config.apiKey) {
      console.log("\n  \x1b[31m✗ API key is required. Run \x1b[36mmervex init\x1b[31m again with your key.\x1b[0m\n");
      rl.close();
      process.exit(1);
    }

    // Model
    console.log("\n  \x1b[90mAvailable models:\x1b[0m");
    console.log("    1. Mervex Ai V0.1 Lite  (Fast / General)     \x1b[90mMsrfteam/Mervex-ai-v0.1-lite\x1b[0m");
    console.log("    2. Mervex Ai V0.1       (Creative / Complex) \x1b[90mMsrfteam/Mervex-ai-v0.1\x1b[0m");
    console.log("    3. Mervex Ai V0.2       (Power / Advanced)   \x1b[90mMsrfteam/Mervex-ai-v0.2\x1b[0m");
    console.log("    4. Mervex Ai V0.2 Pro   (Ultra Reasoning)    \x1b[90mMsrfteam/Mervex-ai-v0.2-pro\x1b[0m  \x1b[33mVIP\x1b[0m");
    const modelNum = await ask(`\n  \x1b[36m? Select model (1-4, default 1): \x1b[0m`);
    const models = {
      "1": "Msrfteam/Mervex-ai-v0.1-lite",
      "2": "Msrfteam/Mervex-ai-v0.1",
      "3": "Msrfteam/Mervex-ai-v0.2",
      "4": "Msrfteam/Mervex-ai-v0.2-pro",
    };
    config.model = models[modelNum.trim()] || config.model || "Msrfteam/Mervex-ai-v0.1-lite";

    saveConfig(config);
    console.log("\n  \x1b[32m✓ Configuration saved!\x1b[0m\n");
    console.log("  \x1b[1mYou're all set. Now try:\x1b[0m");
    console.log("    \x1b[36mmervex chat\x1b[0m      Start interactive chat");
    console.log('    \x1b[36mmervex ask "Hello"\x1b[0m  One-shot question');
    console.log("    \x1b[36mmervex models\x1b[0m   List all models\n");
    rl.close();
  })();
}
