import { loadConfig, saveConfig } from "../config-store.js";

export function configCommand(opts) {
  const config = loadConfig();

  if (opts.setKey) {
    config.apiKey = opts.setKey;
    saveConfig(config);
    console.log("\n  \x1b[32m✓ API key saved.\x1b[0m");
    console.log("  \x1b[90mStored at ~/.mervex/config.json\x1b[0m\n");
    return;
  }

  if (opts.setModel) {
    config.model = opts.setModel;
    saveConfig(config);
    console.log(`\n  \x1b[32m✓ Default model set to:\x1b[0m \x1b[1m${opts.setModel}\x1b[0m\n`);
    return;
  }

  if (opts.setUrl) {
    config.baseUrl = opts.setUrl;
    saveConfig(config);
    console.log(`\n  \x1b[32m✓ API base URL set to:\x1b[0m \x1b[1m${opts.setUrl}\x1b[0m\n`);
    return;
  }

  // Default: show config
  console.log("\n  \x1b[1mMervex CLI Configuration\x1b[0m\n");
  console.log(`  API Key:  ${config.apiKey ? "\x1b[32m" + config.apiKey.slice(0, 8) + "..." + config.apiKey.slice(-4) + "\x1b[0m" : "\x1b[31mnot set\x1b[0m"}`);
  console.log(`  Model:    \x1b[36m${config.model}\x1b[0m`);
  console.log(`  Base URL:  \x1b[2m${config.baseUrl}\x1b[0m`);
  console.log(`  Config:    \x1b[2m~/.mervex/config.json\x1b[0m`);

  console.log("  \x1b[90mUsage:\x1b[0m");
  console.log("  \x1b[36mmervex config --set-key <key>\x1b[0m     Set your API key");
  console.log("  \x1b[36mmervex config --set-model <model>\x1b[0m  Set default model");
  console.log("  \x1b[36mmervex config --set-url <url>\x1b[0m     Set API base URL\n");
}

