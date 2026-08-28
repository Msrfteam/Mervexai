import { join } from "path";
import { homedir } from "os";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";

const CONFIG_DIR = join(homedir(), ".mervex");
const CONFIG_FILE = join(CONFIG_DIR, "config.json");

const DEFAULT_CONFIG = {
  apiKey: "",
  model: "Msrfteam/Mervex-ai-v0.1-lite",
  baseUrl: "https://api.mervex.cc.cd",
};

export function loadConfig() {
  try {
    if (existsSync(CONFIG_FILE)) {
      const data = JSON.parse(readFileSync(CONFIG_FILE, "utf8"));
      return { ...DEFAULT_CONFIG, ...data };
    }
  } catch (e) {
    // ignore corrupted config
  }
  return { ...DEFAULT_CONFIG };
}

export function saveConfig(config) {
  if (!existsSync(CONFIG_DIR)) mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  return config;
}

export function getApiKey(override) {
  const config = loadConfig();
  const key = override || config.apiKey || process.env.MERVEX_API_KEY;
  if (!key) {
    console.error("\n\x1b[31mError: No API key configured.\x1b[0m");
    console.error("  \x1b[90mRun \x1b[36mmervex init\x1b[0m\x1b[90m to set up, or set MERVEX_API_KEY env var.\x1b[0m");
    console.error("  \x1b[90mGet your free key: https://mervexai.cc.cd/auth\x1b[0m\n");
    process.exit(1);
  }
  return key;
}

export function getBaseUrl(override) {
  const config = loadConfig();
  return override || config.baseUrl || process.env.MERVEX_BASE_URL || "https://api.mervex.cc.cd";
}

export function getModel(override) {
  const config = loadConfig();
  return override || config.model || "Msrfteam/Mervex-ai-v0.1-lite";
}
