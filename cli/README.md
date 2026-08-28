<div align="center">

# 🧠 Mervex Ai CLI

### Powerful AI coding assistant for your terminal

**Built by Msr F Team**

[![npm version](https://img.shields.io/badge/npm-mervexai-CC0000?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/mervexai)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Website](https://img.shields.io/badge/Website-mervexai.cc.cd-00C9FF?style=flat-square)](https://mervexai.cc.cd)

**Like Claude Code and OpenCode — but powered by Mervex Ai.**

</div>

---

## 📖 About

**Mervex Ai CLI** is a command-line AI coding assistant built by **Msr F Team**. It connects directly to the [Mervex Ai Platform](https://mervexai.cc.cd) API, giving you access to all Mervex Ai models from your terminal — chat, ask one-shot questions, and build code with AI.

No middleware. Your requests go straight to the Mervex Ai API using your own free API key.

---

## 🚀 Installation

### Global install (recommended)

```bash
npm install -g mervexai
```

Or with yarn / pnpm / bun:

```bash
yarn global add mervexai
pnpm add -g mervexai
bun add -g mervexai
```

### Run without installing (npx)

```bash
npx mervexai chat
```

After installing, two commands are available: `mervex` and `mervexai`.

---

## 🔧 Setup (one time)

### Option A — Interactive setup

```bash
mervex init
```

This will ask for your API key and preferred model.

### Option B — Manual config

```bash
mervex config --set-key YOUR_API_KEY
mervex config --set-model Msrfteam/Mervex-ai-v0.2
```

### Option C — Environment variable

```bash
export MERVEX_API_KEY="your-api-key"
```

> Get your **free API key**: https://mervexai.cc.cd/auth

---

## 📖 Commands

### `mervex chat` — Interactive AI chat session

```bash
mervex chat
mervex chat --model Msrfteam/Mervex-ai-v0.2
mervex chat --system "You are a senior React developer"
```

Starts a multi-turn conversation in your terminal. Type `exit` to quit, `clear` to reset context.

### `mervex ask "<prompt>"` — One-shot question

```bash
mervex ask "Explain async/await in JavaScript"
mervex ask "Write a Python function to reverse a string" --model Msrfteam/Mervex-ai-v0.2
```

### `mervex models` — List available models

```bash
mervex models
```

### `mervex config` — Manage configuration

```bash
mervex config --show
mervex config --set-key YOUR_API_KEY
mervex config --set-model Msrfteam/Mervex-ai-v0.1
mervex config --set-url https://api.mervex.cc.cd
```

### `mervex init` — Guided setup

```bash
mervex init
```

### Global options

| Flag | Description |
|------|-------------|
| `-m, --model <model>` | Override the default model |
| `-k, --api-key <key>` | Override the API key |
| `-b, --base-url <url>` | Override the API base URL |
| `-v, --version` | Show CLI version |
| `-h, --help` | Show help |

---

## 🤖 Models

| Model | Use Case | Speed | Credit Multiplier | Access |
|-------|----------|-------|:-----------------:|:------:|
| `Msrfteam/Mervex-ai-v0.1-lite` | Fast / General chat | ⚡ Fastest | x1 | Free |
| `Msrfteam/Mervex-ai-v0.1` | Creative / Complex tasks | 🟢 Medium | x2 | Free |
| `Msrfteam/Mervex-ai-v0.2` | Power / Advanced reasoning | 🔴 Powerful | x6 | Free |
| `Msrfteam/Mervex-ai-v0.2-pro` | Ultra High Reasoning (thinking) | 🧠 Deep | x6 | VIP / Pro+ |

> **1 credit = 1,000 tokens.** Stronger models consume more credits per request (x1 / x2 / x6).

---

## 💳 Plans & Limits

| Plan | Credits / day | Rate (min / day) | API Keys | Vision / month | Price |
|------|:------------:|:----------------:|:--------:|:--------------:|:-----:|
| **Free** | 1,000 | 5 / 50 | 2 | 10 | $0 |
| **Plus** | 3,000 | 10 / 200 | 4 | 20 | $5 |
| **Pro** | 6,000 | 20 / 500 | 10 | 40 | $15 |
| **Premium** | 10,000 | 40 / 1,000 | 20 | 60 | $30 |

🔗 **Full pricing:** https://mervexai.cc.cd/pricing

---

## 💡 Examples

### Quick chat
```bash
$ mervex chat
  Model: V0.1 Lite  (Msrfteam/Mervex-ai-v0.1-lite)

you> Hello, who are you?
Mervex> I'm Mervex Ai, an AI assistant built by Msr F Team...

you> exit
  Goodbye! 👋
```

### One-shot code generation
```bash
mervex ask "Create a React component for a todo list with add and delete" --model Msrfteam/Mervex-ai-v0.2
```

### With a system prompt
```bash
mervex chat --system "You are a helpful coding assistant. Always respond with code."
```

---

## 🔌 API Compatibility

Mervex Ai CLI uses the **OpenAI-compatible** `/v1/chat/completions` endpoint. You can use the same API key with any OpenAI-compatible client:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.mervex.cc.cd/v1",
    api_key="YOUR_API_KEY",
)
response = client.chat.completions.create(
    model="Msrfteam/Mervex-ai-v0.1-lite",
    messages=[{"role": "user", "content": "Hello!"}],
)
```

---

## 🔧 Configuration

Config is stored at `~/.mervex/config.json`:

```json
{
  "apiKey": "mervex-xxxxx",
  "model": "Msrfteam/Mervex-ai-v0.1-lite",
  "baseUrl": "https://mervexai.cc.cd"
}
```

Priority order (highest first):
1. Command-line flags (`--api-key`, `--model`, `--base-url`)
2. Environment variables (`MERVEX_API_KEY`, `MERVEX_BASE_URL`)
3. Config file (`~/.mervex/config.json`)

---

## 📊 Requirements

- Node.js >= 18.0.0
- A Mervex Ai API key (free) → https://mervexai.cc.cd/auth

---

## 💬 Support

| Channel | Link |
|---------|------|
| 📨 Telegram | https://t.me/Msrfteam |
| ✉️ Email | msrfteamofficial@gmail.com |
| 🌐 Website | https://mervexai.cc.cd |
| 🐙 GitHub | https://github.com/Msrfteam/Mervexai |
| 📋 API Docs | https://mervexai.cc.cd/api-docs |

---

## 🏢 About Msr F Team

**Msr F Team** builds high-precision websites, mobile apps, Telegram Mini Apps, and AI neural network systems.

> 🇺🇿 Made in Uzbekistan · 🌍 Available in English, Uzbek & Russian

---

## 📄 License

MIT © 2024-2026 [Msr F Team](https://mervexai.cc.cd)

---

<div align="center">

**⭐ Star the repo if Mervex Ai CLI helped you.**

[Website](https://mervexai.cc.cd) · [Get API Key](https://mervexai.cc.cd/auth) · [Telegram](https://t.me/Msrfteam)

</div>
