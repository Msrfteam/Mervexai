import { getModel } from "../config-store.js";

const MODELS = [
  { id: "Msrfteam/Mervex-ai-v0.1-lite", name: "Mervex Ai V0.1 Lite", tier: "Lite (x1)", desc: "Fast / General chat", access: "Free", vision: false },
  { id: "Msrfteam/Mervex-ai-v0.1", name: "Mervex Ai V0.1", tier: "Medium (x2)", desc: "Creative / Complex tasks", access: "Free", vision: false },
  { id: "Msrfteam/Mervex-ai-v0.2", name: "Mervex Ai V0.2", tier: "Max (x6)", desc: "Power / Advanced reasoning", access: "Free", vision: true },
  { id: "Msrfteam/Mervex-ai-v0.2-pro", name: "Mervex Ai V0.2 Pro", tier: "Max (x6)", desc: "Ultra High Reasoning (thinking)", access: "VIP / Pro+", vision: false },
];

export function modelsCommand(opts) {
  console.log("\n\x1b[36m╔══════════════════════════════════════════════════════════════╗\x1b[0m");
  console.log("\x1b[36m║\x1b[0m            \x1b[1mAvailable Mervex Ai Models\x1b[0m                         \x1b[36m║\x1b[0m");
  console.log("\x1b[36m╚══════════════════════════════════════════════════════════════╝\x1b[0m\n");
  const current = getModel(opts.model);
  for (const m of MODELS) {
    const marker = m.id === current ? "\x1b[32m●\x1b[0m" : "\x1b[90m○\x1b[0m";
    const access = m.access === "Free" ? "\x1b[32mFree\x1b[0m" : "\x1b[33mVIP/Pro+\x1b[0m";
    const vision = m.vision ? "\x1b[35m+vision\x1b[0m" : "";
    console.log(`  ${marker} \x1b[1m${m.name}\x1b[0m  \x1b[90m[${m.tier}]\x1b[0m  ${access} ${vision}`);
    console.log(`    \x1b[90m${m.id}\x1b[0m`);
    console.log(`    \x1b[2m${m.desc}\x1b[0m\n`);
  }
  console.log("  \x1b[90m1 credit = 1,000 tokens. Stronger models cost more credits per request.\x1b[0m");
  console.log("  \x1b[90mGet your free API key: https://mervexai.cc.cd/auth\x1b[0m\n");
}
