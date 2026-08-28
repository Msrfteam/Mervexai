#!/usr/bin/env node

/**
 * Mervex Ai CLI — Powerful AI coding assistant for your terminal.
 * Built by Msr F Team.
 * https://mervexai.cc.cd
 */

import { program } from "commander";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf8"));

import { chatCommand } from "./commands/chat.js";
import { configCommand } from "./commands/config.js";
import { modelsCommand } from "./commands/models.js";
import { askCommand } from "./commands/ask.js";
import { initCommand } from "./commands/init.js";

const ASCII_BANNER = String.raw`
  __  __ __  __  _  __  __
 |  \/  |  \/  |/ \|  \/  |
 | |\/| | |\/| |   | |\/| |
 | |  | | |  | | |_| |  | |
 |_|  |_|_|  |_|\___|_|  |_|
`;

function banner() {
  console.log("\n" + "\x1b[36m" + ASCII_BANNER + "\x1b[0m");
  console.log("  \x1b[90mMervex Ai CLI — AI Coding Assistant | Msr F Team\x1b[0m");
  console.log("  \x1b[90mv" + pkg.version + " · https://mervexai.cc.cd\x1b[0m\n");
}

program
  .name("mervex")
  .description("Mervex Ai CLI — Powerful AI coding assistant for your terminal.")
  .version(pkg.version, "-v, --version", "Show CLI version")
  .option("-m, --model <model>", "Mervex model to use", "Msrfteam/Mervex-ai-v0.1-lite")
  .option("-k, --api-key <key>", "Override Mervex API key")
  .option("-b, --base-url <url>", "Override API base URL", "https://api.mervex.cc.cd");

program
  .command("init")
  .description("Set up Mervex CLI — login, configure API key, model")
  .action(() => { banner(); initCommand(program); });

program
  .command("chat")
  .description("Start an interactive AI chat session")
  .option("-s, --system <prompt>", "System prompt")
  .option("--no-stream", "Disable streaming output")
  .action((opts) => { banner(); chatCommand({ ...program.opts(), ...opts }); });

program
  .command("ask <prompt>")
  .description("Ask a one-shot question")
  .option("-s, --system <prompt>", "System prompt")
  .action((prompt, opts) => { askCommand(prompt, { ...program.opts(), ...opts }); });

program
  .command("models")
  .description("List available Mervex Ai models")
  .action(() => { modelsCommand(program.opts()); });

program
  .command("config")
  .description("Show or manage CLI configuration")
  .option("--set-key <key>", "Set your Mervex API key")
  .option("--set-model <model>", "Set default model")
  .option("--set-url <url>", "Set API base URL")
  .option("--show", "Show current config")
  .action((opts) => { configCommand(opts); });

// Default action: show banner + help
if (process.argv.length <= 2) {
  banner();
  program.outputHelp();
  console.log("\n  \x1b[90mGet started: \x1b[36mmervex init\x1b[0m");
  console.log("  \x1b[90mQuick chat: \x1b[36mmervex chat\x1b[0m\n");
}

program.parse(process.argv);
