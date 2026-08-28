<div align="center">

# 🚀 Mervex Ai — Free AI Platform

**Link:** https://mervexai.cc.cd

### Free AI Services & Free AI Models

<p>
  <a href="https://mervexai.cc.cd/"><img src="https://img.shields.io/badge/Website-mervexai.cc.cd-00C9FF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website"></a>
  <a href="https://mervexai.cc.cd/playground"><img src="https://img.shields.io/badge/Playground-Live-8B5CF6?style=for-the-badge&logo=playstation&logoColor=white" alt="Playground"></a>
  <a href="https://mervexai.cc.cd/auth"><img src="https://img.shields.io/badge/Get_API_Key-Free-success?style=for-the-badge&logo=keycdn&logoColor=white" alt="API Key"></a>
  <a href="https://t.me/Msrfteam"><img src="https://img.shields.io/badge/Support-Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Support"></a>
</p>

**Official Product: Msr F Team**

</div>

---

## 📖 About

**Mervex Ai** is a free AI platform built by **Msr F Team**. It gives every registered user a free API key to access all Mervex Ai models, a built-in AI chat playground, and **VibeCoder** — an AI builder that generates production-ready apps from a single prompt.

No paid plan is required to start. Free users get real access to real models with real daily limits.

---

## 🤖 AI Models

All models are accessible through a single platform API key.

| Model | Use Case | Speed | Credit Multiplier | Access |
|-------|----------|-------|:-----------------:|:-----:|
| **Mervex Ai V0.1 Lite** | Fast / General chat | ⚡ Fastest | x1 | Free |
| **Mervex Ai V0.1** | Creative / Complex tasks | 🟢 Medium | x2 | Free |
| **Mervex Ai V0.2** | Power / Advanced reasoning | 🔴 Powerful | x4 | Free |
| **Mervex Ai V0.2 Pro** | Ultra High Reasoning (thinking) | 🧠 Deep | x8 | VIP / Pro+ |

> **Vision (image input):** Supported on **Mervex Ai V0.2** only. V0.2 Pro is text-only reasoning.
> **Credit system:** 1 credit = 1,000 tokens. Stronger models consume more credits per request (x1 / x2 / x4 / x8).

---

## 🛠️ Free Services

### 1. AI Chat Playground
A built-in web playground to chat with every Mervex Ai model — no setup, no code.
🔗 **https://mervexai.cc.cd/playground**

### 2. VibeCoder — AI App Builder
Describe an idea, get a full working app. React + Tailwind + Node.js full-stack code, live preview, one-click publish to GitHub or ZIP download.
🔗 **https://mervexai.cc.cd/** → AI Builder tab

### 3. Free API Key + OpenAI-compatible API
Every registered user gets a free API key. Use any OpenAI-compatible client (curl, Python, Node.js, Postman) with the Mervex endpoint.

**List available models:**
```bash
curl https://api.mervex.cc.cd/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Chat completion:**
```bash
curl https://api.mervex.cc.cd/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Msrfteam/Mervex-ai-v0.1-lite",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

> 💡 External tools (Open WebUI, LibreChat, LangChain, Cursor) can auto-discover Mervex models via `GET /v1/models`. Set `base_url=https://api.mervex.cc.cd/v1` and your API key.

🔗 **Get your key:** https://mervexai.cc.cd/auth
🔗 **API Docs:** https://mervexai.cc.cd/api-docs

### 4. AI Cyber Security & Defense
Neural network for security audits, code vulnerability scanning, and OWASP Top 10 penetration testing.

### 5. Deep System Thinking
Multi-step reasoning for architecture planning, database schemas, and complex algorithm design.

---

## 💳 Plans & Limits

All plans include access to all free models and the VibeCoder builder. Plans differ by daily credits, rate limits, and API key count.

| Plan | Credits / day | Rate (min / day) | API Keys | Vision / month | Price |
|------|:------------:|:----------------:|:--------:|:--------------:|:-----:|
| **Free** | 1,000 | 5 / 50 | 2 | 10 | $0 |
| **Plus** | 3,000 | 10 / 200 | 4 | 20 | $5 |
| **Pro** | 6,000 | 20 / 500 | 10 | 40 | $15 |
| **Premium** | 10,000 | 40 / 1,000 | 20 | 60 | $30 |

> 💎 **Admin** accounts are unlimited.
> 💰 Credits are **per-token**, not per-request. A V0.2 Pro (x8) request costs 8× more credits than a Lite (x1) request, so choosing the right model stretches your daily budget.

🔗 **Full pricing:** https://mervexai.cc.cd/pricing

---

## 🔑 Getting Started (3 steps)

1. **Create an account** → https://mervexai.cc.cd/auth
2. **Get your free API key** from your dashboard
3. **Start building** — chat in the Playground or use the API

```python
# Python example (OpenAI SDK)
from openai import OpenAI

client = OpenAI(
    base_url="https://api.mervex.cc.cd/v1",
    api_key="YOUR_API_KEY",
)

response = client.chat.completions.create(
    model="Msrfteam/Mervex-ai-v0.1-lite",
    messages=[{"role": "user", "content": "Hello, Mervex!"}],
)
print(response.choices[0].message.content)
```

---

## 🌐 Links

| | |
|---|---|
| 🌍 **Website** | https://mervexai.cc.cd |
| 🎮 **Playground** | https://mervexai.cc.cd/playground |
| 🔑 **Get API Key** | https://mervexai.cc.cd/auth |
| 📄 **API Docs** | https://mervexai.cc.cd/api-docs |
| 💳 **Pricing** | https://mervexai.cc.cd/pricing |
| 🖥️ **Models** | https://mervexai.cc.cd/models |
| 🔧 **CLI Guide** | https://mervexai.cc.cd/cli |

---

## 🖥️ Mervex Ai CLI — Terminal AI Assistant

**Like Claude Code and OpenCode — but powered by Mervex Ai.**

A powerful command-line AI coding assistant built by Msr F Team. Chat with Mervex models, generate code, and build projects — all from your terminal.

### Install

```bash
npm install -g mervexai
```

### Quick start

```bash
mervex init                    # Set up API key + model (one time)
mervex chat                    # Start interactive AI chat
mervex ask "Hello"             # One-shot question
mervex models                  # List available models
mervex config --show           # Show configuration
```

> Get your free API key: https://mervexai.cc.cd/auth

🔗 **CLI Guide:** https://mervexai.cc.cd/cli
🔗 **npm:** https://www.npmjs.com/package/mervexai

---

## 💬 Support

Questions, bugs, or feature requests? We reply within minutes.

| Channel | Link |
|---------|------|
| 📨 **Telegram** | https://t.me/Msrfteam |
| ✉️ **Email** | msrfteamofficial@gmail.com |
| 🐙 **GitHub** | https://github.com/msrabubakr |

---

## 🏢 About Msr F Team

**Msr F Team** builds high-precision websites, mobile apps, Telegram Mini Apps, and AI neural network systems.

> 🇺🇿 Made in Uzbekistan · 🌍 Available in English, Uzbek & Russian

---

<div align="center">

**⭐ If Mervex Ai helped you, star the repo and share it — it helps others find us.**

[Website](https://mervexai.cc.cd) · [Playground](https://mervexai.cc.cd/playground) · [Get API Key](https://mervexai.cc.cd/auth) · [Telegram](https://t.me/Msrfteam)

</div>
