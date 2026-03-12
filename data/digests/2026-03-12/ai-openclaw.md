# 🦞 OpenClaw 生态系统 日报 — 2026-03-12

## 横向对比

好的，这是一份基于您提供数据的 OpenClaw 生态系统横向对比分析报告。

# OpenClaw 生态系统 横向对比分析

**日期**: 2026-03-12

## 1. 生态全景

今日 OpenClaw 生态系统整体呈现出**活跃而又充满挑战**的状态。一方面，多个项目（尤其 OpenClaw 本身）正积极处理近期版本带来的 Bug 和稳定性问题，同时也展现出对**安全性、多渠道集成、AI Agent 能力增强**以及**用户体验优化**等方向的持续投入。社区对新功能的需求（如 Docker 部署、Cron Jobs 稳定性、多实例支持）和对现有功能的深度打磨（如 Agent 架构、内存持久化、Web UI 交互）并行不悖，预示着该生态正在向更健壮、更安全、更易用的方向演进。

## 2. 活跃度对比

| 项目名称                                | 今日主要动态                                                                                                                                                                                          | Issues 活跃度 | PR 活跃度 |
| :-------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :-------- |
| [OpenClaw](https://github.com/openclaw/openclaw) | **版本 `2026.3.8` 出现大量回归 Bug**，社区集中反馈 Cron Jobs、模型集成（Kimi, MiniMax）及 macOS Gateway 问题；涌现 AI 相亲交友平台等新兴应用探索。                                                               | 高            | 高        |
| [NanoBot](https://github.com/HKUDS/nanobot) | 社区聚焦**安全性加固**（`restrictToWorkspace` 绕过），**Telegram 回复支持**，以及 WhatsApp QR 码生成问题。流式输出和环境变量配置也是关注点。                                                               | 高            | 高        |
| [PicoClaw](https://github.com/sipeed/picoclaw) | 发布 **v0.2.2**，支持 Web 设置远程执行配置，Webhook 集成。Agent 概念重构、工具调用 Bug 及 Web UI 交互体验优化是社区讨论焦点。                                                                             | 中            | 高        |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 发布 **v0.1.7-beta.30** 和 **v0.1.7-beta.28**，通过 CI/CD 优化和主分支模型更新。重点是 Azure OpenAI 支持、OpenClaw 功能对齐、Windows 兼容性、以及安全性（敏感信息加密/解密）问题。                          | 高            | 高        |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI) | 发布 **v0.2.3**，支持多文件附件上传，修复 Mac 端 Node 环境污染。社区急切关注点包括内存能力、中文字符空格 Bug、图片读取卡死、Shell 执行效率，及 Docker 部署、环境变量配置等功能需求。                               | 高            | 中        |
| [NanoClaw](https://github.com/qwibitai/nanoclaw) | 持续集成 LanceDB 实现**持久化内存**，并支持**多实例运行**。GitHub MCP 服务器和 Feishu/Lark 集成是亮点。认证问题、响应稳定性及安全性持续被关注。                                                        | 高            | 高        |
| [IronClaw](https://github.com/nearai/ironclaw) | 发布 **v0.18.0**，更新 staging 版本。大量 Issues 集中于 Telegram、Google Sheets 集成问题，及 WASM 插件兼容性。PRs 聚焦对话式 Onboarding、Routine Advisor，及 CI/CD 流程优化。                  | 极高          | 高        |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw) | 发布 **v0.0.10**，简化日志，优化心跳和 Telegram Watchdog。项目正进行**品牌重塑为 TinyAGI**，并将 Monolith 重构为 Monorepo，引入 SQLite 队列。TinyOffice Web UI 增强是关注焦点。 | 高            | 高        |

## 3. 共同趋势

多个项目（尤其是 OpenClaw, NanoBot, Zeroclaw, NanoClaw, IronClaw）都反映了以下共同的技术方向和用户需求：

*   **稳定性与 Bug 修复**：近期版本发布后，Bug 反馈和修复成为社区关注的重中之重。特别是在 OpenClaw 本身，`2026.3.8` 版本引发了大量回归，这促使所有项目都在审视自身的稳定性和向后兼容性。
*   **安全性与隐私**：涉及敏感信息管理（如密钥、 tokens）、访问控制 (`restrictToWorkspace`)、及容器安全等问题被多个项目（NanoBot, Zeroclaw, NanoClaw, IronClaw）提及，显示出社区对 AI Agent 系统安全性的日益重视。
*   **多渠道集成与扩展**：Telegram、Discord、Feishu/Lark、QQ、WhatsApp 等即时通讯和协作平台的集成是多个项目（NanoClaw, IronClaw, PicoClaw, TinyClaw）持续努力的方向，增加了 AI Agent 的可用性和触达范围。
*   **AI Agent 能力深化**：包括 **内存持久化**（NanoClaw 集成 LanceDB）、**工具调用**（PicoClaw, Zeroclaw）、**Agent 架构设计**（PicoClaw, TinyClaw 的 TinyAGI 化）以及**多模态能力**（NanoClaw Discord 集成图像/语音）都在被积极探索和实现。
*   **用户体验与易用性**：Web UI 的互动性（PicoClaw, TinyClaw）、Onboarding 流程（IronClaw）、配置管理（Zeroclaw, LobsterAI）以及部署便利性（LobsterAI 的 Docker 需求）是提升用户满意度的关键因素。

## 4. 值得关注

1.  **OpenClaw `2026.3.8` 版本 Bug 潮显示出的生态依赖与挑战**：OpenClaw 本身出现的大量回归 Bug，几乎影响了整个生态中与之强依赖的项目（如 Zeroclaw, LobsterAI）的稳定性和部分功能。这凸显了 OpenClaw 作为基础框架的重要性，以及其版本发布的稳定性对整个生态系统的巨大影响。社区对后续补丁的期待将非常高。
2.  **NanoClaw 在 Agent 内存持久化与多实例支持上的技术突破**：NanoClaw 项目在集成 LanceDB 实现持久化内存，以及支持同一机器运行多个实例这两个方向上的进展，代表了 AI Agent 向更高级、更场景化应用迈进的重要技术方向。这可能为其他项目提供借鉴，推动 Agent 技术在长期记忆和并发处理上的发展。
3.  **TinyClaw 的品牌重塑为 TinyAGI 及架构演进**：TinyClaw 更名为 TinyAGI，并进行 Monolith 到 Monorepo 的重构，引入 SQLite 队列，是项目发展的一个重要的里程碑。这不仅仅是名称的改变，更预示着项目在战略方向、技术栈以及生态扩展上的全面升级，值得长期关注其发展轨迹。

## 各工具详细报告

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw 生态系统日报
**日期**: 2026-03-12

**概述**: 本日 OpenClaw 生态系统报告聚焦于多个近期发现的 Bug，特别是在 `2026.3.8` 版本发布后出现的回归问题。同时，社区在新兴AI应用领域展现出活跃度，并有多项 PR 正在推进中，涉及性能优化、功能修复与新特性添加。

---

## 版本更新亮点

*   **未检测到新版本发布**。近期发现的多数 Bug 均指向 `2026.3.8`，表明此版本是当前社区关注的焦点，也预示着可能正在酝酿下一个补丁或小版本更新。

---

## 社区关注点分析

### 热门 Issues

本日 Issues 聚焦于 **版本 `2026.3.8` 引起的大量回归 Bug**，尤其是与 Cron Jobs、模型提供商集成（如 Kimi、MiniMax、Bailian）以及 macOS 平台下的 Gateway 服务部署和管理相关的问题。

*   **Cron Job 相关问题**:
    *   `#42883` ([Bug]: Cron jobs broken after update to 2026.3.8): 用户反馈 `2026.3.8` 版本后 Cron Jobs 无法运行。
    *   `#42579` (Cron lane self-deadlock: isolated agentTurn jobs never execute with default maxConcurrentRuns): 描述了 `agentTurn` 类型的 Cron Job 在默认配置下可能出现的死锁问题。
    *   `#42632` (cron `sessionTarget="isolated"` + `agentTurn` can time out on a minimal prompt): 报告了特定配置下的 Cron Job 超时问题。
    *   `#43185` ([Bug] Cron isolated session never starts - lane wait exceeded): 报告隔离模式下的 Cron Session 启动失败。
*   **模型提供商集成问题**:
    *   `#41690` ([Bug]: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload"): Kimi-coding 模型提供商配置验证失败。
    *   `#42270` ([Bug]: OpenClaw 2026.3.8 regression: empty agent payloads + websocket 1006 closures with local LM Studio backend): LM Studio 后端集成问题，表现为空 Agent Payload 及 WebSocket 错误。
    *   `#41852` (kimi-coding provider forces OpenAI tool format, breaks Kimi k2p5 tool\_use): Kimi-coding 适配器强制使用 OpenAI 工具格式，影响了 Kimi API 的正确使用。
    *   `#41905` (Streaming usage not captured for Bailian/OpenAI-compatible providers — token counter stuck at 0): Bailian/OpenAI 兼容提供商的流式 Token 使用量未被正确捕获。
    *   `#43490` ([Bug]: MiniMax token usage always returns zeros in 2026.3.8): MiniMax 提供商的 Token 使用量报告错误。
*   **macOS 平台 Gateway 问题**:
    *   `#41978` (Gateway restart from agent session breaks LaunchAgent (macOS)): Agent 执行 Gateway 重启导致 macOS LaunchAgent 失效。
    *   `#41815` (macOS LaunchAgent restart should use kickstart first and detach when invoked from the managed gateway process tree): macOS Gateway 重启机制的优化建议。
    *   `#41845` (Bug: macOS gateway start/restart fail after gateway stop unloads LaunchAgent): macOS 下 Gateway 停止后启动/重启失败。

*   **新兴应用探索**:
    *   `#42938` ("🦞 虾缘 - AI相亲交友平台欢迎测试"): 一个使用 OpenClaw 构建的 AI 相亲交友平台项目，显示了社区在 AI 社交应用领域的探索。

### 热门 Pull Requests

PRs 主要集中在修复 Bug、提升性能和渠道支持。

*   **核心修复与优化**:
    *   `#41684` (perf: optimize command execution hot paths): 对命令执行热点路径进行性能优化。
    *   `#42497` (fix: route embedded tool calls through in-process dispatch (#40237)): 修复了内嵌工具调用时可能产生的 WebSocket 连接问题。
    *   `#41745` (fix(session): defer systemSent persistence until LLM response succeeds): 修复了 LLM 调用失败时，系统 Prompt 持久化策略的问题。
    *   `#42482` (fix(cron): per-attempt AbortControllers and deferred execution timeout): 针对 Cron Job 的死锁和超时问题进行修复。
*   **渠道和集成修复**:
    *   `#42602` (fix(discord): restore triage reactions for guild\_id-only reaction payloads): 修复 Discord 频道响应处理的 Bug。
    *   `#43546` (fix: move @whiskeysockets/baileys to optionalDependencies to unblock git-free installs): 解决 WhatsApp 频道安装依赖的问题，支持无 Git 环境的安装。
    *   `#43514` (fix(daemon): replace bootout with kickstart -k for launchd restarts on macOS): 改进 macOS 下 Gateway 的启动/重启机制。
*   **新功能与改进**:
    *   `#43542` (feat(whatsapp): add onWhatsApp() number check + message ACK status (#43522)): 为 WhatsApp 频道增加了号码验证和消息 ACK 状态功能。
    *   `#43515` (feat(plugins): add thinking override hook and adaptive-thinking extension): 引入新的思考模式控制钩子和自适应思考扩展。

---

## 本日最值得关注的动态 (Top 1-3)

1.  **版本 `2026.3.8` 聚焦大量回归 Bug，社区反馈集中**:
    *   多个关键功能（如 Cron Jobs、模型集成、macOS Gateway 管理）在 `2026.3.8` 版本中出现严重回归。Issues `#42883`、`#41690`、`#42270` 和 `#41978` 等均显示了社区对这些问题的担忧和急切需求。这表明 `2026.3.8` 版本可能存在一些深层次的兼容性或稳定性问题，后续的补丁更新至关重要。
2.  **AI 社交应用探索：“虾缘”项目展现 OpenClaw 的应用潜力**:
    *   新建 Issue `#42938` 介绍了“虾缘”（🦞 虾缘 - AI相亲交友平台）项目，这是一个利用 OpenClaw 构建的 AI Agent 相亲交友平台。该项目不仅展示了 OpenClaw 在构建复杂 AI 应用（如社交、婚恋）方面的能力，也体现了社区在探索 AI Agent 跨界应用上的创新活力。
3.  **macOS Gateway 部署问题持续引起关注**:
    *    Issues `#41978`、`#41815`、`#41845` 以及 PR `#43514` 都指向了 macOS 平台下 OpenClaw Gateway 的启动、重启和管理机制存在问题。特别是 LaunchAgent 的加载和卸载问题，对 macOS 用户的使用体验造成了显著影响。社区和开发者正在积极协作，通过 PR `#43514` 等方式尝试解决此问题。

---

## 参考链接

**Issues:**

*   [#41690](https://github.com/openclaw/openclaw/issues/41690) - [Bug]: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload"
*   [#42270](https://github.com/openclaw/openclaw/issues/42270) - [Bug]: OpenClaw 2026.3.8 regression: empty agent payloads + websocket 1006 closures with local LM Studio backend
*   [#42938](https://github.com/openclaw/openclaw/issues/42938) - 🦞 虾缘 - AI相亲交友平台欢迎测试
*   [#42883](https://github.com/openclaw/openclaw/issues/42883) - [Bug]: Cron jobs broken after update to 2026.3.8
*   [#42579](https://github.com/openclaw/openclaw/issues/42579) - Cron lane self-deadlock: isolated agentTurn jobs never execute with default maxConcurrentRuns
*   [#42632](https://github.com/openclaw/openclaw/issues/42632) - cron `sessionTarget="isolated"` + `agentTurn` can time out on a minimal prompt
*   [#41950](https://github.com/openclaw/openclaw/issues/41950) - [Bug]: No active WhatsApp Web listener
*   [#41577](https://github.com/openclaw/openclaw/issues/41577) - Spawned subagents don't receive browser/web tools despite allowlists, running browser service, and working main agent
*   [#41852](https://github.com/openclaw/openclaw/issues/41852) - kimi-coding provider forces OpenAI tool format, breaks Kimi k2p5 tool\_use
*   [#41978](https://github.com/openclaw/openclaw/issues/41978) - Gateway restart from agent session breaks LaunchAgent (macOS)
*   [#41874](https://github.com/openclaw/openclaw/issues/41874) - openclaw models status --probe returns LLM request timed out on 2026.3.8
*   [#41815](https://github.com/openclaw/openclaw/issues/41815) - macOS LaunchAgent restart should use kickstart first and detach when invoked from the managed gateway process tree
*   [#41652](https://github.com/openclaw/openclaw/issues/41652) - [Bug]: openclaw v2026.2.26 continuously report device-id-mismatch error
*   [#43185](https://github.com/openclaw/openclaw/issues/43185) - [Bug] Cron isolated session never starts - lane wait exceeded
*   [#41844](https://github.com/openclaw/openclaw/issues/41844) - [Bug]: Discord leaks raw `to=cron` tool-call text instead of executing cron scheduling
*   [#42117](https://github.com/openclaw/openclaw/issues/42117) - [Bug][2026.3.8] Kimi/Moonshot adapter leaks tool calls as plaintext
*   [#41905](https://github.com/openclaw/openclaw/issues/41905) - Streaming usage not captured for Bailian/OpenAI-compatible providers — token counter stuck at 0
*   [#41751](https://github.com/openclaw/openclaw/issues/41751) - v2026.3.8 regression: ACP sessions\_spawn fails — spawnedBy rejected for acp:\* session keys
*   [#43490](https://github.com/openclaw/openclaw/issues/43490) - [Bug]: MiniMax token usage always returns zeros in 2026.3.8
*   [#42234](https://github.com/openclaw/openclaw/issues/42234) - [Bug]: Matrix channel fails behind HTTP proxy although Matrix /sync works via Node + proxy
*   [#43381](https://github.com/openclaw/openclaw/issues/43381) - [Bug]: Gateway shows running, health check says disconnected (1006)
*   [#43057](https://github.com/openclaw/openclaw/issues/43057) - [Bug]: openai-codex OAuth succeeds in browser but OpenClaw ends with TypeError: fetch failed and auth\_permanent
*   [#43050](https://github.com/openclaw/openclaw/issues/43050) - [Bug]: openclaw onboard ERROR: Error: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload"
*   [#42712](https://github.com/openclaw/openclaw/issues/42712) - sessions\_spawn subagent inherits parent agent's cwd instead of using target agent's workspace
*   [#43037](https://github.com/openclaw/openclaw/issues/43037) - Control UI loses gateway token when switching between agent sessions
*   [#41845](https://github.com/openclaw/openclaw/issues/41845) - Bug: macOS gateway start/restart fail after gateway stop unloads LaunchAgent
*   [#41819](https://github.com/openclaw/openclaw/issues/41819) - [Bug]: Error occurred while installing OpenClaw:error [node-llama-cpp] Failed to build llama.cpp with no GPU support.
*   [#42471](https://github.com/openclaw/openclaw/issues/42471) - /tools/invoke sessions\_spawn can inherit workspaceDir="/" and bootstrap /AGENTS.md
*   [#42870](https://github.com/openclaw/openclaw/issues/42870) - [Bug]: Custom OpenAI-compatible baseUrl returns Cloudflare 403 when messages contain backticks
*   [#42792](https://github.com/openclaw/openclaw/issues/42792) - node run: add --header flag for Cloudflare Zero Trust service tokens

**Pull Requests:**

*   [#41684](https://github.com/openclaw/openclaw/pull/41684) - perf: optimize command execution hot paths
*   [#42602](https://github.com/openclaw/openclaw/pull/42602) - fix(discord): restore triage reactions for guild\_id-only reaction payloads
*   [#43489](https://github.com/openclaw/openclaw/pull/43489) - fix: preserve image input capabilities in model catalog resolution
*   [#43539](https://github.com/openclaw/openclaw/pull/43539) - fix(whatsapp): trim leading whitespace in direct outbound sends
*   [#43541](https://github.com/openclaw/openclaw/pull/43541) - fix(agents): decouple completion/session wait paths for top-level runs
*   [#43543](https://github.com/openclaw/openclaw/pull/43543) - fix(agents): enforce retry-start ordering for post-compaction continuation
*   [#42932](https://github.com/openclaw/openclaw/pull/42932) - mark homepage
*   [#43546](https://github.com/openclaw/openclaw/pull/43546) - fix: move @whiskeysockets/baileys to optionalDependencies to unblock git-free installs
*   [#43545](https://github.com/openclaw/openclaw/pull/43545) - fix(agents): truncate tool call IDs for OpenAI-compat proxies
*   [#43514](https://github.com/openclaw/openclaw/pull/43514) - fix(daemon): replace bootout with kickstart -k for launchd restarts on macOS
*   [#42497](https://github.com/openclaw/openclaw/pull/42497) - fix: route embedded tool calls through in-process dispatch (#40237)
*   [#43236](https://github.com/openclaw/openclaw/pull/43236) - fix(telegram): deliver verbose tool summaries in forum topic sessions
*   [#43542](https://github.com/openclaw/openclaw/pull/43542) - feat(whatsapp): add onWhatsApp() number check + message ACK status (#43522)
*   [#41745](https://github.com/openclaw/openclaw/pull/41745) - fix(session): defer systemSent persistence until LLM response succeeds
*   [#42482](https://github.com/openclaw/openclaw/pull/42482) - fix(cron): per-attempt AbortControllers and deferred execution timeout
*   [#43498](https://github.com/openclaw/openclaw/pull/43498) - feat(memory-lancedb): add memory\_refresh tool for atomic replace and conflict preview
*   [#42907](https://github.com/openclaw/openclaw/pull/42907) - feat(web-search): make Brave Search base URL configurable


</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报

**日期:** 2026-03-12 | **数据源:** GitHub Issues & Pull Requests

## 摘要

今日，NanoBot 项目社区活跃，尤其在 **安全性改进**、**多渠道支持扩展** 以及 **功能增强** 方面涌现了大量讨论和开发活动。特别值得关注的是，一个关于 `restrictToWorkspace` 安全机制绕过的 **新建 Issue** 引起了广泛讨论，并迅速有 **PR** 提出修复。此外，**Telegram 消息回复支持** 和 **WhatsApp QR 码生成问题** 也是用户关注的热点。

## 今日焦点

### 1. **安全加固：`restrictToWorkspace` 机制面临挑战，社区迅速响应**

今日新建的 Issue **#1873** 提出了 NanoBot 在安全性方面的一个潜在漏洞，即 **`config.json` 无法被安全隔离，可能导致敏感密钥泄露**。用户建议通过让核心代理循环以不同用户运行来解决此问题，以防止其访问 `config.yaml`。

紧随其后，Pull Request **#1845** 和 **#1827** 均旨在 **修复 `restrictToWorkspace` 功能中对 `~` 路径（用户主目录）的绕过问题**。PR **#1845** 明确提出检测并修复路径包含 `~` 的情况，而 PR **#1827** 则通过 `expanduser()` 函数来处理主目录展开后的路径，并添加了回归测试。这表明社区对提高 NanoBot 的安全性和健壮性高度重视。

### 2. **多渠道集成：Telegram 回复支持及 WhatsApp 问题**

社区对 NanoBot 在不同通讯渠道的支持表现出持续的兴趣。
- Pull Request **#1900** 响应了 Issue **#1875** 的需求，**实现了对 Telegram `reply_to_message` 内容的支持**，这将显著提升用户在 Telegram 中与 NanoBot 交互时的上下文理解能力，尤其是在引用回复时。
- 另一方面，Issue **#1879** 反映了用户在 **WhatsApp 渠道中遇到 QR 码生成错误**，这可能影响到 WhatsApp 的集成和使用。

### 3. **功能增强与优化：流式输出、环境配置及 WebSocket 错误修复**

*   **流式输出** 是开发者关注的另一个重要方向。Issue **#1860** 建议**增加结果的流式输出**，以提供即时模型响应，以及 PR **#1839** 正在实现 LLM **响应的流式传输能力**。
*   Issue **#1871** 提出了关于 `exec` 命令输出截断的 **环境变量配置需求**，并已有 Pull Request **#1896** 进行了实现，允许通过环境变量配置输出截断的长度和模式（头部或尾部）。
*   值得注意的是，Issue **#1557** 提到了“**main 分支最新代码飞书无法正常工作**，报 ‘This event loop is already running’ 错误”，这表明在特定环境下，飞书渠道**集成的 WebSocket 部分可能存在问题**，需要进一步排查。

## 热门 Issues & PRs 分析

**Issues:**

*   **安全是核心焦点：** Issue **#1873**（密钥泄露风险）和 **#1817**（`restrictToWorkspace` 绕过）突显了社区对系统安全性的高度关注。
*   **渠道功能细化：** 用户对微信支持（**#1819**）、Telegram 回复（**#1875**）、WhatsApp 问题（**#1879**）等渠道特定功能提出了需求和反馈。
*   **稳定性与易用性：** Issue **#1833**（`SIGTERM` 错误）和 **#1828**（`cron` 任务失效）反映了用户在使用中遇到的稳定性问题。
*   **模型集成与API支持：** 对 Claude（**#1872**）、Z.AI（**#2**）和 Ollama（**#193**）等模型及 API 的支持讨论仍在持续。
*   **文档与本地化：** **#1617**（说明文档无中文）反映了部分用户对中文文档的期待。

**Pull Requests:**

*   **安全性修复领先：** PR **#1845** 和 **#1827** 积极响应了 `restrictToWorkspace` 安全问题。
*   **渠道功能实现：** PR **#1900** 兑现了 Telegram `reply_to_message` 支持，PR **#1861** 提出了 `EndpointChannel` 以支持 OpenAI 兼容 API。
*   **通用功能优化：** PR **#1839**（流式输出）、PR **#1896**（输出截断配置）和 PR **#1895**（文件系统与 Shell 工具增强）展示了对核心功能进行迭代优化的努力。
*   **Bug 修复：** PR **#1892** 和 **#1901** 致力于解决非视觉模型处理 `image_url` 的问题。PR **#1893** 和 **#1894** 修复了 `get_history` 方法中的 slice bug。

## 最值得关注的动态

1.  **安全漏洞与修复进展：** 针对 **NanoBot 密钥泄露风险** (**#1873**) 和 **`restrictToWorkspace` 绕过** (**#1817**) 的讨论，以及相关的修复 PR **#1845** 和 **#1827**，显示了项目在安全方面的紧迫性和社区的快速响应能力。
2.  **Telegram 消息回复支持落地：** Pull Request **#1900** 实现了对 Telegram **回复消息的上下文支持**，这是用户（如 Issue **#1875**）期待已久的功能，将极大地改善用户体验。
3.  **多渠道集成与问题修复：** WhatsApp QR 码生成问题 (**#1879**) 和飞书 WebSocket 错误 (**#1557**) 反映了用户在使用不同集成渠道时遇到的具体问题，需要项目维护者关注和解决。

## 参考链接

**Issues:**

*   [#1873 "Nanobot currently cannot be secured from accessing it's own config.json (and leaking keys)"](https://github.com/HKUDS/nanobot/issues/1873)
*   [#1817 "🔒 Security: restrictToWorkspace bypass using ~ paths (file access bypass)"](https://github.com/HKUDS/nanobot/issues/1817)
*   [#1875 "Feature Request: Support reading Telegram reply_to_message content"](https://github.com/HKUDS/nanobot/issues/1875)
*   [#1879 "WhatsApp Channel error - No QRcode"](https://github.com/HKUDS/nanobot/issues/1879)
*   [#1860 "建议增加结果流式输出"](https://github.com/HKUDS/nanobot/issues/1860)
*   [#1871 "执行exec命令获取输出内容，能不能加个环境变量配置？私以为最后部分的输出更有用。"](https://github.com/HKUDS/nanobot/issues/1871)
*   [#1557 "main分支最新代码飞书无法正常工作"](https://github.com/HKUDS/nanobot/issues/1557)
*   [#1833 "Received SIGTERM, goodbye!"](https://github.com/HKUDS/nanobot/issues/1833)
*   [#1828 "How does cron work"](https://github.com/HKUDS/nanobot/issues/1828)
*   [#1819 "好项目，但建议增加对微信（Wechat）APP的支持"](https://github.com/HKUDS/nanobot/issues/1819)
*   [#2 "Feature Request: Native Support for Z.AI (Zhipu AI) API & Latest GLM Models"](https://github.com/HKUDS/nanobot/issues/2)
*   [#193 "Ollama api support?"](https://github.com/HKUDS/nanobot/issues/193)
*   [#1617 "说明文档无中文"](https://github.com/HKUDS/nanobot/issues/1617)

**Pull Requests:**

*   [#1845 "fix: detect tilde paths in restrictToWorkspace shell guard"](https://github.com/HKUDS/nanobot/pull/1845)
*   [#1827 "fix(exec): enforce workspace guard for home-expanded paths"](https://github.com/HKUDS/nanobot/pull/1827)
*   [#1900 "feat(telegram): support reply-to-message context (text and media)"](https://github.com/HKUDS/nanobot/pull/1900)
*   [#1879 "WhatsApp Channel error - No QRcode"](https://github.com/HKUDS/nanobot/issues/1879) (Related Issue)
*   [#1875 "Feature Request: Support reading Telegram reply_to_message content"](https://github.com/HKUDS/nanobot/issues/1875) (Related Issue)
*   [#1860 "建议增加结果流式输出"](https://github.com/HKUDS/nanobot/issues/1860) (Related Issue)
*   [#1839 "feat(providers): add streaming support for LLM responses"](https://github.com/HKUDS/nanobot/pull/1839)
*   [#1896 "feat(shell): add environment variables for configurable output truncation"](https://github.com/HKUDS/nanobot/pull/1896)
*   [#1895 "enhance: improve filesystem & shell tools with pagination, fallback matching, and smarter output"](https://github.com/HKUDS/nanobot/pull/1895)
*   [#1871 "执行exec命令获取输出内容，能不能加个环境变量配置？私以为最后部分的输出更有用。"](https://github.com/HKUDS/nanobot/issues/1871) (Related Issue)
*   [#1557 "main分支最新代码飞书无法正常工作"](https://github.com/HKUDS/nanobot/issues/1557) (Related Issue)
*   [#1892 "fix: filter image_url from session history for non-vision models"](https://github.com/HKUDS/nanobot/pull/1892)
*   [#1901 "fix: filter image_url for non-vision models at provider layer"](https://github.com/HKUDS/nanobot/pull/1901)
*   [#1893 "fix: correct get_history slice behavior for max_messages=0"](https://github.com/HKUDS/nanobot/pull/1893)
*   [#1894 "fix: correct get_history slice behavior for max_messages=0"](https://github.com/HKUDS/nanobot/pull/1894)
*   [#1861 "Endpoint channel"](https://github.com/HKUDS/nanobot/pull/1861)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报 - 2026-03-12

## 版本更新亮点

今天 **PicoClaw** 发布了 v0.2.2 版本，主要亮点包括：

*   **Web 设置支持远程执行配置**: 新版本允许用户在 Web 设置中配置远程执行（`exec allow_remote`），增强了 PicoClaw 的远程部署和管理能力。
*   **Echo Voice 音频转录支持**: 集成了 `#1214` 的功能，支持 Echo Voice 音频转录，为语音交互场景提供了更多可能性。
*   **修复会话密钥斜杠问题**: #1330 的修复解决了会话密钥中的斜杠处理问题，提升了安全性与稳定性。

同时，昨晚还发布了 v0.2.1-nightly.20260311.9cd2d218 版本的夜间构建，并提供了 `nightly` 构建的链接，用于收集最新的开发进展和测试。

## 社区关注焦点

### 热门 Issues

*   **Agent 概念重构与讨论**: `#1218` [Agent refactor]what an Agent is  issue 持续进行中，由 `alexhoshina` 提出，旨在通过定义 `SOUL.md` 和 `AGENT.md` 文件来更清晰地界定 Agent 的个性、价值观等，该 issue 已有 13 条评论，显示了社区对 Agent 架构和可扩展性的高度关注。
*   **工具调用（Tool Calling）相关 Bug**:
    *   `#1287` [BUG] Tool calling fails：反映了工具调用失败的问题，并提供了详细的错误日志，已关闭；
    *   `#748` [BUG] Groq API compatibility: tool call format error...：针对 Groq API 的工具调用格式错误进行了讨论，该 issue 仍处于 open 状态，显示了 Provider 兼容性仍是社区关注的重点。
*   **Web 交互与配置 Bug**:
    *   `#1373` [BUG]在web对话页面，每次点击对话项目都是默认显示新的对话。希望修改为默认显示上次的对话内容。：用户反馈 Web 聊天页面点击对话项目时无法显示上次的对话内容，为新建 issue。
    *   `#1369` 新的web页面在编辑原始json的时候无法左右滑动 和 `#1364` [BUG] UI Bug: Raw JSON configuration textarea height collapses in Firefox：分别报告了 Web UI 在编辑 JSON 时的滑动和 Firefox 下的布局问题，均是新建 issue，表明 Web UI 的细节打磨仍在进行。

### 热门 Pull Requests

*   **Web UI 修复与优化**:
    *   `#1385` fix(web): restore the last active chat session：修复了 Web 聊天页面无法恢复上次活动会话的问题，与 issue `#1373` 相关。
    *   `#1386` fix(web): allow horizontal scrolling in raw json editor：解决了 Web UI 中 Raw JSON 编辑器无法左右滑动的问题，与 issue `#1369` 相关。
*   **Agent 与 Provider 改进**:
    *   `#1389` feat(skills): implement per-agent SkillsFilter：为 Agent 引入了 `SkillsFilter`，允许为每个 Agent 指定独立的技能集，提升了 Agent 的灵活性和安全性。
    *   `#1390` fix(telegram): stop typing indicator when LLM fails or hangs：修复了 Telegram 频道在 LLM 失败或无响应时，输入指示器（typing indicator）仍然持续显示的问题。
    *   `#1379` fix: accept object tool arguments in openai compat：该 PR（与 PR `#1292` 类似）解决了 OpenAI 兼容模式下，`tool_calls.function.arguments` 被接受为 JSON 字符串或对象的问题，直接修复了 issue `#1287`。

## 今日最值得关注的动态

1.  **[v0.2.2 版本发布，Web 设置增强](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)**: 本次发布最重要的更新是 **Web 设置中增加了 `exec allow_remote` 配置支持**，这对于远程部署和管理 PicoClaw 提供了便利。同时，与 Echo Voice 集成的改进也为多模态应用场景增添了动力。
2.  **Agent 架构深度重构与 Agent Skill Filter 落地**: `#1218` [Agent refactor]what an Agent is 这个长期讨论的 Agent 概念重构 issue 持续获得高关注度，同时 `#1389` feat(skills): implement per-agent SkillsFilter PR 的合并，标志着 **Agent 层面能力控制的进一步细化**，允许为不同 Agent 分配特定的技能集，这是 Agent 体系化和安全性的重要一步。
3.  **Web UI 交互体验持续打磨**: 新建的 issue `#1373`、`#1369` 和 `#1364` 以及相关的 PR `#1385` 和 `#1386`，反映出社区对 Web 界面的可用性依然高度关注。特别是 **恢复上次聊天会话** 和 **JSON 编辑器滑动支持** 的修复，直接提升了用户在 Web 界面的日常使用体验。

---
## 参考链接

*   **Releases**:
    *   [v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)
    *   [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
*   **Issues**:
    *   [#1218](https://github.com/sipeed/picoclaw/issues/1218)
    *   [#1287](https://github.com/sipeed/picoclaw/issues/1287)
    *   [#748](https://github.com/sipeed/picoclaw/issues/748)
    *   [#1373](https://github.com/sipeed/picoclaw/issues/1373)
    *   [#1369](https://github.com/sipeed/picoclaw/issues/1369)
    *   [#1364](https://github.com/sipeed/picoclaw/issues/1364)
*   **Pull Requests**:
    *   [#1389](https://github.com/sipeed/picoclaw/pull/1389)
    *   [#1385](https://github.com/sipeed/picoclaw/pull/1385)
    *   [#1386](https://github.com/sipeed/picoclaw/pull/1386)
    *   [#1379](https://github.com/sipeed/picoclaw/pull/1379)
    *   [#1390](https://github.com/sipeed/picoclaw/pull/1390)
    *   [#1332](https://github.com/sipeed/picoclaw/pull/1332)
    *   [#1292](https://github.com/sipeed/picoclaw/pull/1292)

---
**项目地址**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 技术日报 (2026-03-12)

## 概览

今日 Zeroclaw 项目在持续迭代中发布了两个新版本：`v0.1.7-beta.30` 和 `v0.1.7-beta.28`，均包含 CI/CD 流程优化、主分支模型更新以及对通用配置的改进。社区在 Issues 和 Pull Requests 方面表现活跃，主要围绕 Azure OpenAI 支持、国际化、OpenClaw 功能对齐、Windows 平台兼容性以及安全性等方面展开讨论和贡献。

## 版本亮点

*   **v0.1.7-beta.30** 发布，本次更新在 **CI/CD 流程优化** 方面最为显著，通过简化 CI/CD 管道提升了自动化效率。同时，项目迁移至了**单一主分支模型**，并更新了维护者信息，这标志着项目在代码管理和协作模式上的一个重要调整。此外，还修复了未使用的导入警告，并更新了 `.gitignore`、`CODEOWNERS` 和 `dependabot` 配置，为标准化 GitHub 工作流奠定了基础。
*   **v0.1.7-beta.28** 与 `v0.1.7-beta.30` 共享了大部分变更内容，也体现了项目在 CI/CD 流程和代码管理上的标准化工作。

## 社区焦点

### 新增功能与集成

*   **Azure OpenAI 支持**：Issue [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) 提出，希望为 Azure OpenAI Provider 添加支持，以便用户利用 Azure 订阅访问 OpenAI 模型。
*   **零碎功能对齐 OpenClaw**：多项 Issues 和 PRs 旨在将 Zeroclaw 的功能与 OpenClaw 对齐，包括：
    *   Issue [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120) 提出了在 Web UI 中实现**消息悬停复制**功能。
    *   Issue [#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119) 建议实现**多行聊天输入框自动展开**。
    *   PR [#3243](https://github.com/zeroclaw-labs/zeroclaw/pull/3243) 已合并，实现了上述两项功能。
*   **MCP 工具支持与加载**：Issue [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) 关注 Zeroclaw Agent 对 MCP (Meta-Controller-Protocol) 的支持；PR [#3209](https://github.com/zeroclaw-labs/zeroclaw/pull/3209) 已提交，旨在将 Codex MCP 配置转发给 Responses。Issue [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) 讨论了通过 `tool_search` 按需加载 MCP 工具，以优化系统提示。
*   **国际化支持**：Issue [#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152) 提到了对中文的支持需求，以改进 Gateway WebUI 的用户体验。

### Bug 修复与兼容性

*   **Windows 平台兼容性**：Issue [#3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207) 报告了在 Rust 升级后，Dockerfile 构建在 Windows 上失败的问题。Issue [#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135) 指出，Windows 上的 `cargo clippy` 预提交钩子因平台无关的 `sync_directory` 调用而失败。
*   **安全性与配置问题**：
    *   Issue [#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126) 和 Issue [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175) 强调了当 `secrets.encrypt = true` 时，`bot_token` 等敏感信息在加密后未被正确解密，导致服务重启后通道静默失败。PR [#3240](https://github.com/zeroclaw-labs/zeroclaw/pull/3240) 添加了相关测试来验证修复。
    *   Issue [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173) 指出 `paired_tokens` 在配置加载时未解密，导致 WebSocket 认证失败。
*   **LLM 模型集成问题**：Issue [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) 反映了 Ollama providers (如 Qwen) 在工具调用方面出现的回归，表现为仅输出思考文本、工具调用格式错误、动作丢失。PR [#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241) 已提交，旨在解决此问题。Issue [#3183](https://github.com/zeroclaw-labs/zeroclaw/issues/3183) 报告了 `reasoning_enabled` 选项未生效的问题。
*   **分支模型统一**：仓库近期进行了主分支模型更新，从 `main` 迁移到 `master`。多项 PRs 如 [#3238](https://github.com/zeroclaw-labs/zeroclaw/pull/3238)、[#3237](https://github.com/zeroclaw-labs/zeroclaw/pull/3237) 和 [#3194](https://github.com/zeroclaw-labs/zeroclaw/pull/3194) 都在努力统一代码库和文档中的分支引用，以消除混淆。

## 本日最值得关注的动态

1.  **多项 Pull Requests 集中解决关键 Bug 与功能对齐**：今日 PR 提交活跃，尤其是在解决安全性问题（如敏感信息加密/解密问题，[#3240](https://github.com/zeroclaw-labs/zeroclaw/pull/3240)）和提升用户体验（如 Web UI 功能对齐 OpenClaw，[#3243](https://github.com/zeroclaw-labs/zeroclaw/pull/3243)）方面。同时，对 Ollama 模型工具调用回归的修复（[#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241)）是解决 LLM 集成中关键痛点的体现。
2.  **主动推进主分支模型统一**：随着项目从 `main` 迁移到 `master`，多项 PRs（如 [#3238](https://github.com/zeroclaw-labs/zeroclaw/pull/3238)，[#3237](https://github.com/zeroclaw-labs/zeroclaw/pull/3237)，[#3194](https://github.com/zeroclaw-labs/zeroclaw/pull/3194)）正在积极整理和更新相关的脚本、文档和配置，以确保开发流程的顺畅和一致性，这是保证项目健康发展的重要基础工作。
3.  **扩展 AI Provider 支持**：Issue [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176) 提出的 Azure OpenAI Provider 支持，以及对 MCP 工具的进一步集成（[#3209](https://github.com/zeroclaw-labs/zeroclaw/pull/3209)），显示了项目在接入更多主流和新兴 AI 服务方面的持续努力。

---
## 参考链接

*   **Releases**:
    *   [v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)
    *   [v0.1.7-beta.28](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.28)
*   **Issues**:
    *   [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176)
    *   [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)
    *   [#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)
    *   [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)
    *   [#3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207)
    *   [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093)
    *   [#3169](https://github.com/zeroclaw-labs/zeroclaw/issues/3169)
    *   [#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135)
    *   [#3132](https://github.com/zeroclaw-labs/zeroclaw/issues/3132)
    *   [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120)
    *   [#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119)
    *   [#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126)
    *   [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175)
    *   [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173)
    *   [#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)
    *   [#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)
    *   [#3183](https://github.com/zeroclaw-labs/zeroclaw/issues/3183)
    *   [#3189](https://github.com/zeroclaw-labs/zeroclaw/issues/3189)
    *   [#3174](https://github.com/zeroclaw-labs/zeroclaw/issues/3174)
    *   [#3163](https://github.com/zeroclaw-labs/zeroclaw/issues/3163)
    *   [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
    *   [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)
    *   [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355)
    *   [#850](https://github.com/zeroclaw-labs/zeroclaw/issues/850)
    *   [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)
    *   [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)
    *   [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033)
    *   [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)
    *   [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)
    *   [#3082](https://github.com/zeroclaw-labs/zeroclaw/issues/3082)
*   **Pull Requests**:
    *   [#3238](https://github.com/zeroclaw-labs/zeroclaw/pull/3238)
    *   [#3228](https://github.com/zeroclaw-labs/zeroclaw/pull/3228)
    *   [#3237](https://github.com/zeroclaw-labs/zeroclaw/pull/3237)
    *   [#3241](https://github.com/zeroclaw-labs/zeroclaw/pull/3241)
    *   [#3242](https://github.com/zeroclaw-labs/zeroclaw/pull/3242)
    *   [#3243](https://github.com/zeroclaw-labs/zeroclaw/pull/3243)
    *   [#3240](https://github.com/zeroclaw-labs/zeroclaw/pull/3240)
    *   [#3239](https://github.com/zeroclaw-labs/zeroclaw/pull/3239)
    *   [#3194](https://github.com/zeroclaw-labs/zeroclaw/pull/3194)
    *   [#3122](https://github.com/zeroclaw-labs/zeroclaw/pull/3122)
    *   [#3127](https://github.com/zeroclaw-labs/zeroclaw/pull/3127)
    *   [#3206](https://github.com/zeroclaw-labs/zeroclaw/pull/3206)
    *   [#3209](https://github.com/zeroclaw-labs/zeroclaw/pull/3209)
    *   [#3212](https://github.com/zeroclaw-labs/zeroclaw/pull/3212)
    *   [#3231](https://github.com/zeroclaw-labs/zeroclaw/pull/3231)
    *   [#3236](https://github.com/zeroclaw-labs/zeroclaw/pull/3236)
    *   [#3235](https://github.com/zeroclaw-labs/zeroclaw/pull/3235)
    *   [#3045](https://github.com/zeroclaw-labs/zeroclaw/pull/3045)
    *   [#2540](https://github.com/zeroclaw-labs/zeroclaw/pull/2540)
    *   [#2955](https://github.com/zeroclaw-labs/zeroclaw/pull/2955)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报

**日期**: 2026-03-12 | **分组**: OpenClaw 生态系统

## 💎 版本亮点

今日，LobsterAI 发布了 **[v0.2.3 "v0.2.3"](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)** 版本。本次更新聚焦于用户体验和稳定性改进，主要包括：

*   **主界面附件支持多文件选择**：用户现在可以一次性选择并上传多个文件，大大提升了文件处理的效率。
*   **修复 Mac 端 Node 环境污染问题**：解决了在 macOS 环境下可能出现的 Node.js 环境冲突问题，提高了跨平台兼容性。
*   **修复聊天分页问题**：对聊天记录的分页功能进行了优化。
*   **修复 QQ 消息集成问题**：解决了 QQ 消息相关的集成 bug。

## 🚀 社区焦点与动态

### 热门 Issues & 社区关注点

今日社区用户反馈踊跃，多个 Issue 集中反映了 LobsterAI 在稳定性、功能扩展性和易用性方面可以改进的方向：

*   **老问题持续讨论**：
    *   **#186 "记忆能力很差，换了好几个模型都不行，不如原版的openclaw"** 这个问题依旧是用户关心的问题，表明模型记忆能力方面的体验亟待提升。
    *   **#344 "官方大大们，啥时候修复这个自动在字符串中加空格的问题啊！！急！！"** 该 Issue 反映了一个影响中文+数字字符串格式的严重 BUG，用户表示此问题阻碍了 LobsterAI 替代 OpenClaw。
    *   **#357 "每次让ai读取图片都会出现卡死情况"** 图片读取功能出现卡死现象，影响了多模态的使用体验。
    *   **#350 "bash执行太慢了，卡好久"** 用户反映 shell 命令执行响应过慢，影响了自动化脚本的效率。

*   **新需求与功能建议**：
    *   **#386 "希望能支持docker容器部署"** 用户提交了 Docker 部署的需求，这将极大地便利项目的部署和扩展。
    *   **#384 "希望更新claude agent sdk版本以增加agent teams功能"** 社区希望通过更新 SDK 来支持 Agent Teams 功能，以增强 Agent 的协作能力。
    *   **#377 "希望添加环境变量的配置项"** 用户需要为 AI Skill 提供配置环境变量的能力，以便安全地管理 API Key 等敏感信息。
    *   **#379 "希望加个新功能"** 用户希望能增加一个功能，使得对话中出现的“文件”链接可以直接点击打开文件所在路径。

### 活跃 Pull Requests

今日有多个 Pull Request 提交，显示了开发者社区的活跃度：

*   **#376 "feat: add hourly schedule mode for scheduled tasks"** 这是一个新添加的功能，支持按小时调度任务，增加了任务调度的灵活性。
*   **#380 "feat: add support for custom URI protocols in markdown links"** 该 PR 允许通过自定义 URI 协议（如 `obsidian://`, `vscode://`）从 Markdown 链接打开外部应用，增强了与其他工具的互联互通能力。
*   **#240 "Feat/workflow enhancement"** 这是一个持续进行的 PR，旨在通过引入 Workflow 新功能，让 Agent 各司其职，并具备专属的 soul.md，实现更精细化的任务处理和协作。
*   **#383, #381, #378** 这三个 PR 分别为企微、QQ、钉钉机器人添加了 OpenClaw 支持，显示了项目在即时通讯集成方面的积极进展（尽管这些 PR 今日被标记为 `closed`，可能意味着合并或有其他处理）。

## ⭐ 今日最值得关注

1.  **[v0.2.3 "v0.2.3"](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)** 版本发布，其中 **主界面附件支持多文件选择** 是一项显著的用户体验提升。
2.  **#344 "官方大大们，啥时候修复这个自动在字符串中加空格的问题啊！！急！！"** 这个问题已影响用户将 LobsterAI 作为 OpenClaw 的替代品，其修复优先级较高，直接关系到项目的核心竞争力。
3.  **#386 "希望能支持docker容器部署"** 和 **#377 "希望添加环境变量的配置项"** 代表了社区对于项目部署便捷性和安全性的重要需求，这些功能的实现将有助于 LobsterAI 的推广和生产环境应用。

---

## 参考链接

*   **Releases**:
    *   [v0.2.3 "v0.2.3"](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)
*   **Issues**:
    *   [#186](https://github.com/netease-youdao/LobsterAI/issues/186)
    *   [#273](https://github.com/netease-youdao/LobsterAI/issues/273)
    *   [#350](https://github.com/netease-youdao/LobsterAI/issues/350)
    *   [#386](https://github.com/netease-youdao/LobsterAI/issues/386)
    *   [#344](https://github.com/netease-youdao/LobsterAI/issues/344)
    *   [#357](https://github.com/netease-youdao/LobsterAI/issues/357)
    *   [#382](https://github.com/netease-youdao/LobsterAI/issues/382)
    *   [#385](https://github.com/netease-youdao/LobsterAI/issues/385)
    *   [#384](https://github.com/netease-youdao/LobsterAI/issues/384)
    *   [#379](https://github.com/netease-youdao/LobsterAI/issues/379)
    *   [#377](https://github.com/netease-youdao/LobsterAI/issues/377)
    *   [#370](https://github.com/netease-youdao/LobsterAI/issues/370)
*   **Pull Requests**:
    *   [#376](https://github.com/netease-youdao/LobsterAI/pull/376)
    *   [#380](https://github.com/netease-youdao/LobsterAI/pull/380)
    *   [#240](https://github.com/netease-youdao/LobsterAI/pull/240)
    *   [#383](https://github.com/netease-youdao/LobsterAI/pull/383)
    *   [#381](https://github.com/netease-youdao/LobsterAI/pull/381)
    *   [#378](https://github.com/netease-youdao/LobsterAI/pull/378)
    *   [#375](https://github.com/netease-youdao/LobsterAI/pull/375)
    *   [#374](https://github.com/netease-youdao/LobsterAI/pull/374)
    *   [#373](https://github.com/netease-youdao/LobsterAI/pull/373)
    *   [#372](https://github.com/netease-youdao/LobsterAI/pull/372)
    *   [#371](https://github.com/netease-youdao/LobsterAI/pull/371)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 技术日报 (2026-03-12)

## 摘要

今日 NanoClaw 项目持续活跃，社区围绕**多实例支持、持久化内存集成、以及增强的 GitHub 和 Discord/Feishu 集成**展开了多项开发。值得关注的是，多个 PR 旨在提升**安全性、稳定性和用户体验**，包括解决认证问题、优化文件处理以及支持新的通讯渠道。

## 本日最值得关注的动态

1.  **多实例支持与安全性增强**：PR [#970](https://github.com/qwibitai/nanoclaw/pull/970) 引入了 `NANOCLAW_INSTANCE` 环境变量，允许在同一台机器上运行多个 NanoClaw 实例，并通过命名空间化共享资源来提升隔离性。同时，PR [#865](https://github.com/qwibitai/nanoclaw/issues/865) 和 PR [#709](https://github.com/qwibitai/nanoclaw/issues/709) 继续聚焦容器安全和敏感信息管理，强调不应过度信任容器，要加强对脚本和环境变量的审计。
2.  **集成 LanceDB 实现持久化内存**：PR [#979](https://github.com/qwibitai/nanoclaw/pull/979) 和 PR [#977](https://github.com/qwibitai/nanoclaw/pull/977) 成功集成了 **LanceDB**，为容器代理提供了持久化的语义内存能力，支持 `memory_store`, `memory_search`, `memory_delete`, `memory_count` 等 MCP 工具，并利用 Gemini `embedding-001` 进行向量存储，这标志着代理在长期记忆和上下文理解方面迈出了重要一步。
3.  **平台与渠道集成扩展**：项目在整合平台能力方面进展迅速。PR [#976](https://github.com/qwibitai/nanoclaw/pull/976) 和 PR [#975](https://github.com/qwibitai/nanoclaw/pull/975) 提供了官方的 **GitHub MCP 服务器集成**，使代理能够直接使用结构化的 GitHub 工具（如创建 issue、pull request）。此外，PR [#974](https://github.com/qwibitai/nanoclaw/pull/974) 为 Discord 增加了**图像视觉能力和语音转录**，PR [#964](https://github.com/qwibitai/nanoclaw/pull/964) 添加了对 **Feishu/Lark** 的支持，极大地丰富了 NanoClaw 的应用场景和多模态能力。

## 热门 Issues & PRs 分析

### Issues (社区关注点)

*   **安装与认证问题**：新出现的 Issue [#973](https://github.com/qwibitai/nanoclaw/issues/973) 反映了安装过程缓慢的问题，而 Issue [#853](https://github.com/qwibitai/nanoclaw/issues/853) 和 Issue [#960](https://github.com/qwibitai/nanoclaw/issues/960) 则指向了认证令牌（`ANTHROPIC_AUTH_TOKEN`、MCP 环境变量）在设置和代理迁移过程中未能正确识别和传递的问题，显示社区对**安装集成和认证流程的顺畅性**有较高期望。
*   **响应与稳定性**：Issue [#958](https://github.com/qwibitai/nanoclaw/issues/958) 报告了代理无响应的问题，Issue [#732](https://github.com/qwibitai/nanoclaw/issues/732) 指出了在流式输出时信息重复发送导致消息泛滥的问题。这些都表明社区非常关注**代理的响应速度、可靠性以及消息处理的规范性**。
*   **安全性与架构**：Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 和 [#709](https://github.com/qwibitai/nanoclaw/issues/709) 持续引发对**安全加固和架构设计**的讨论，尤其是关于容器信任模型和敏感信息管理策略。
*   **易用性与扩展性**：Issue [#957](https://github.com/qwibitai/nanoclaw/issues/957) 提议支持 **Podman 作为 Docker 的替代方案**，反映了社区对环境兼容性和部署灵活性的需求。Issue [#955](https://github.com/qwibitai/nanoclaw/issues/955) 推出了一个**卸载工具**，展示了社区在提升整体生态工具的便利性方面的贡献。

### Pull Requests (开发动态)

*   **功能扩展显著**：本周新建的 PR 数量持续增长，集中在**集成新技能和渠道**。最突出的包括 LanceDB 内存集成（#979, #977）、GitHub MCP 集成（#976, #975）、Discord 的多模态能力（#974）、Feishu/Lark 集成（#964）、以及 QQ Bot 集成（#966）。
*   **认证与会话稳定性修复**：PR [#930](https://github.com/qwibitai/nanoclaw/pull/930) 和 [#969](https://github.com/qwibitai/nanoclaw/pull/969) 解决了 **OAuth 令牌刷新和锁定问题**，提升了认证的稳定性。PR [#928](https://github.com/qwibitai/nanoclaw/pull/928) 通过**轮换过大的会话文件**来防止容器超时，增强了会话处理的健壮性。PR [#967](https://github.com/qwibitai/nanoclaw/pull/967) 进一步提高了**卡住会话和 runner 轮次**的可靠性。
*   **体验优化与 Bug 修复**：PR [#965](https://github.com/qwibitai/nanoclaw/pull/965) 解决了 Issue [#732](https://github.com/qwibitai/nanoclaw/issues/732) 中提到的消息泛滥问题，通过**缓冲流式输出**实现一次性发送。PR [#978](https://github.com/qwibitai/nanoclaw/pull/978) 确保了 `agent-runner` 源文件能够同步到现有会话目录，修复了 Issue [#905](https://github.com/qwibitai/nanoclaw/issues/905)。PR [#972](https://github.com/qwibitai/nanoclaw/pull/972) 修复了 **Apple Container 网络**相关问题，PR [#942](https://github.com/qwibitai/nanoclaw/pull/942) 解决了**容器在 root 用户下运行时的权限问题**。

## 参考链接

*   **Issues**
    *   [#973 "Setup takes ages"](https://github.com/qwibitai/nanoclaw/issues/973)
    *   [#853 "Support ANTHROPIC_AUTH_TOKEN in setup verification"](https://github.com/qwibitai/nanoclaw/issues/853)
    *   [#958 "Can not get a response from NanoClaw"](https://github.com/qwibitai/nanoclaw/issues/958)
    *   [#865 "Using containers alone doesn't make you more secure"](https://github.com/qwibitai/nanoclaw/issues/865)
    *   [#709 "Risk of secret env var management behavior diverging between the container allowlist and the Bash subprocess blocklist"](https://github.com/qwibitai/nanoclaw/issues/709)
    *   [#732 "Send message after agent completes, not during streaming"](https://github.com/qwibitai/nanoclaw/issues/732)
    *   [#960 "MCP env vars not passed to containers after credential proxy migration"](https://github.com/qwibitai/nanoclaw/issues/960)
    *   [#957 "Suggest supporting Podman as an alternative to Docker"](https://github.com/qwibitai/nanoclaw/issues/957)
    *   [#955 "🧹 ByeByeClaw — Clean uninstall tool for NanoClaw and Claw-family tools"](https://github.com/qwibitai/nanoclaw/issues/955) (已关闭)
*   **Pull Requests**
    *   [#979 "feat: add lancedb-memory skill"](https://github.com/qwibitai/nanoclaw/pull/979)
    *   [#978 "fix: sync agent-runner source to existing session directories"](https://github.com/qwibitai/nanoclaw/pull/978)
    *   [#977 "feat: semantic memory with LanceDB + Gemini embeddings"](https://github.com/qwibitai/nanoclaw/pull/977) (已关闭)
    *   [#976 "feat: add GitHub MCP server to container agents"](https://github.com/qwibitai/nanoclaw/pull/976)
    *   [#970 "feat: support multiple instances on the same machine"](https://github.com/qwibitai/nanoclaw/pull/970)
    *   [#975 "feat: add GitHub MCP server to container agents"](https://github.com/qwibitai/nanoclaw/pull/975) (已关闭)
    *   [#971 "feat: admin command interception + /capabilities "](https://github.com/qwibitai/nanoclaw/pull/971)
    *   [#972 "fix: Apple Container networking — bridge IP for proxy and gateway"](https://github.com/qwibitai/nanoclaw/pull/972)
    *   [#974 "feat: add image vision and voice transcription for Discord"](https://github.com/qwibitai/nanoclaw/pull/974)
    *   [#963 "feat: add OpenAI Codex SDK as opt-in alternative agent engine"](https://github.com/qwibitai/nanoclaw/pull/963)
    *   [#930 "fix: automatically refresh expired OAuth tokens from Claude Code credentials"](https://github.com/qwibitai/nanoclaw/pull/930)
    *   [#969 "fix(oauth): fix token refresh locking and add in-memory cache"](https://github.com/qwibitai/nanoclaw/pull/969)
    *   [#968 "docs: correct main CLAUDE.md write permissions"](https://github.com/qwibitai/nanoclaw/pull/968)
    *   [#967 "Improve reliability for stuck sessions and runner turns"](https://github.com/qwibitai/nanoclaw/pull/967)
    *   [#966 "feat: add qq-bot skill"](https://github.com/qwibitai/nanoclaw/pull/966)
    *   [#965 "fix(streaming): send message after agent completes, not during streaming"](https://github.com/qwibitai/nanoclaw/pull/965)
    *   [#921 "feat(github): add autonomous governance self-healing lanes"](https://github.com/qwibitai/nanoclaw/pull/921)
    *   [#964 "feat: add Feishu/Lark channel"](https://github.com/qwibitai/nanoclaw/pull/964)
    *   [#928 "fix: rotate oversized session files to prevent container timeouts"](https://github.com/qwibitai/nanoclaw/pull/928)
    *   [#942 "fix: container EACCES/ENOENT when host runs as root"](https://github.com/qwibitai/nanoclaw/pull/942)

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 技术日报

**日期**: 2026-03-12 | **分组**: OpenClaw 生态系统

## 今日焦点

*   **新版本 v0.18.0 发布**: 带来了 staging 环境的稳定更新，并修复了 WASM 插件校验问题。
*   **大量 Issues 涌现，集中于集成与稳定性**: 今日新增了大量关于 Telegram 集成、Google Sheets 工具、配置语义、以及部分安全风险的 Issue，显示社区对 IronClaw 核心功能稳定性和安全性的关注度极高。
*   **PR 活跃，聚焦功能增强与问题修复**: 近期 PR 集中在提升聊天交互体验（如对话式 Onboarding）、修复内存管理和 CLI 交互问题，以及 CI/CD 流程的优化。

---

## 版本动态

### v0.18.0 发布

近日，IronClaw 发布了新版本 **v0.18.0**。此次发布主要包含了将 staging 环境稳定版本提升到 main 分支，并更新了 WASM 插件的 SHA256 校验和，增强了部署的安全性与可靠性。

[v0.18.0](https://github.com/nearai/ironclaw/releases/tag/v0.18.0)

---

## 社区关注点

### 热门 Issues (近期活跃/新建)

今日 Issues 板块异常活跃，涌现大量新报告和社区反馈。重点关注以下几个方面：

*   **集成与兼容性问题**:
    *   `#840` 报告了新安装的 WASM 插件与当前主机 WIT 版本不兼容的问题，导致工具启动失败。
    *   `#875` 反映 `ironclaw onboard` 在下载工具时 checksum 校验失败。
    *   `#942` 指出部分 LLM 服务需要 `User-Agent` 请求头，而 IronClaw 未提供，可能导致调用失败。
    *   `#1001` 描述了 Telegram 绑定流程中的问题，如旧 Bot 需手动激活，以及配对跳过。
    *   `#999` 和 `#992` 指出 Google Sheets 工具在 OAuth 认证后出现 `PERMISSION_DENIED` 错误，以及 Google OAuth URL 生成错误。
    *   `#991` 报告 Telegram Bot Token 验证不稳定，偶发 404。

*   **用户体验与界面问题**:
    *   `#997` 认为“等待批准”的 UI 消息带有“Error”前缀，易引起用户误解。
    *   `#996` 指出需要页面刷新才能看到工具批准模态框。

*   **功能稳定性与Bug**:
    *   `#1000` 报告了速率限制器返回 `retry after None`，未能正确提取重试时长。
    *   `#998` 指出 `routine_update` 在非 cron 例行程序上修改计划/类型时报错。
    *   `#995` 和 `#994` 反映了例行程序（Routines）在不同频道（Web vs Telegram）间同步或通知存在问题。
    *   `#993` 指出 `google-sheets` 工具将 `values` 参数错误地作为 JSON 字符串而非数组传递。
    *   `#890` 提到 Stdio MCP transport 在某些情况下会跳过初始化握手。

*   **潜在安全风险与代码质量**:
    *   多条由 `ironclaw-ci[bot]` 报告的 Issues，如 `#990`, `#989`, `#988`, `#977`, `#976`, `#975`, `#974`, `#963`，指出了配置不清晰、硬编码、参数和描述字符串未做限制、以及递归存在安全风险等问题。

### 热门 Pull Requests (近期活跃/新建)

近期 PR 数量众多，主要围绕以下几个核心方向：

*   **功能增强与重构**:
    *   `#927` **(XL, High Risk)** 提出用对话式 LLM 替代交互式 Onboarding，并引入 Routine Advisor，大幅提升首次用户体验。
    *   `#844` **(XL, Low Risk)** 增加了用于管理计划例程的 CLI 子命令，方便非 TUI/Web 环境下的自动化管理。
    *   `#987` **(M, High Risk)** 修复了设置向导中，重新运行设置时模型选择丢失的问题，增强了用户配置的持续性。
    *   `#986` **(M, Medium Risk)** 为非 OAuth HTTP 客户端添加了 session manager，修复了 MCP 相关的连接问题。

*   **Bug 修复与稳定性**:
    *   `#905` **(L, Medium Risk)** 修复了一个关键的同步锁问题，该问题可能导致 Webhook 处理阻塞。
    *   `#934` **(M, Medium Risk)** 修复了在路由到内存工具时，绝对文件路径被错误处理的问题。
    *   `#960` **(S, Low Risk)** 修复了 v0.18.0 版本中 Google 工具安装因引用旧文件名而导致的 404 错误。
    *   `#935` **(M, Medium Risk)** 修复了 stdio/unix transport 在某些情况下跳过 MCP 初始化握手的问题。
    *   `#949` **(S, High Risk)** 解决了 Windows 下 `onboard` 交互式提示按键被注册两次的问题。

*   **CI/CD 与发布流程**:
    *   `#945` **(M, Medium Risk)** 修复了 CI 中当工具和频道共享文件名时，补丁文件不正确的问题。
    *   `#961` **(M, Medium Risk)** 增加了对注册表 artifact URL 和 checksum 有效性的检查，提升了发布质量。
    *   `#964` **(L, Medium Risk)** 通过添加前缀来区分 WASM bundle 文件名，防止工具和频道命名冲突。
    *   连续多个 `chore: promote staging to main` PR (如 `#985`, `#984`, `#983`, `#982`, `#981`) 表明项目正积极将 `staging` 分支的更新合并到 `main` 分支，保持开发与发布同步。

---

## 本日最值得关注

1.  **大量集成与稳定性 Issue 涌现**：今日新增 Issue 数量激增，显示社区用户在实际使用中遇到了不少关于 **Telegram 集成、Google 工具（Sheets, OAuth）、LLM 调用（User-Agent）、以及 WASM 插件兼容性**等方面的问题。这些 Issue 集中反映了 IronClaw 在跨服务集成和核心功能稳定性上仍需持续打磨。
2.  **对话式 Onboarding 与 Routine Advisor PR 提案**：PR `#927` 提出了一项重要的功能改进，旨在用更智能、更自然的对话方式取代现有的交互式 Onboarding 流程，并引入 Routine Advisor。这项改动若成功合并，将极大地提升新用户的上手体验和 IronClaw 的智能化助手能力。
3.  **CI/CD 与发布流程的持续优化**：多项 PR（如 `#945`, `#961`, `#964`）集中解决 CI/CD 过程中可能出现的命名冲突、校验不准确等问题，同时多个 `chore: promote staging to main` PR 的出现，意味着项目正处于一个快速迭代和版本发布的活跃期，确保了最新稳定功能能够及时到达用户。

---

## 参考链接

*   [v0.18.0](https://github.com/nearai/ironclaw/releases/tag/v0.18.0)
*   [#840](https://github.com/nearai/ironclaw/issues/840)
*   [#875](https://github.com/nearai/ironclaw/issues/875)
*   [#942](https://github.com/nearai/ironclaw/issues/942)
*   [#1001](https://github.com/nearai/ironclaw/issues/1001)
*   [#999](https://github.com/nearai/ironclaw/issues/999)
*   [#992](https://github.com/nearai/ironclaw/issues/992)
*   [#991](https://github.com/nearai/ironclaw/issues/991)
*   [#1000](https://github.com/nearai/ironclaw/issues/1000)
*   [#998](https://github.com/nearai/ironclaw/issues/998)
*   [#995](https://github.com/nearai/ironclaw/issues/995)
*   [#994](https://github.com/nearai/ironclaw/issues/994)
*   [#993](https://github.com/nearai/ironclaw/issues/993)
*   [#890](https://github.com/nearai/ironclaw/issues/890)
*   [#990](https://github.com/nearai/ironclaw/issues/990)
*   [#989](https://github.com/nearai/ironclaw/issues/989)
*   [#988](https://github.com/nearai/ironclaw/issues/988)
*   [#977](https://github.com/nearai/ironclaw/issues/977)
*   [#976](https://github.com/nearai/ironclaw/issues/976)
*   [#975](https://github.com/nearai/ironclaw/issues/975)
*   [#974](https://github.com/nearai/ironclaw/issues/974)
*   [#963](https://github.com/nearai/ironclaw/issues/963)
*   [#905](https://github.com/nearai/ironclaw/pull/905)
*   [#927](https://github.com/nearai/ironclaw/pull/927)
*   [#844](https://github.com/nearai/ironclaw/pull/844)
*   [#987](https://github.com/nearai/ironclaw/pull/987)
*   [#986](https://github.com/nearai/ironclaw/pull/986)
*   [#945](https://github.com/nearai/ironclaw/pull/945)
*   [#961](https://github.com/nearai/ironclaw/pull/961)
*   [#964](https://github.com/nearai/ironclaw/pull/964)
*   [#960](https://github.com/nearai/ironclaw/pull/960)
*   [#935](https://github.com/nearai/ironclaw/pull/935)
*   [#949](https://github.com/nearai/ironclaw/pull/949)
*   [#985](https://github.com/nearai/ironclaw/pull/985)
*   [#984](https://github.com/nearai/ironclaw/pull/984)
*   [#983](https://github.com/nearai/ironclaw/pull/983)
*   [#982](https://github.com/nearai/ironclaw/pull/982)
*   [#981](https://github.com/nearai/ironclaw/pull/981)

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI) 技术日报 - 2026年03月12日

## 摘要

今日，TinyClaw (现已开始向 TinyAGI 品牌迁移) 发布了 v0.0.10 版本，重点在于简化日志系统、改进心跳检测、更新 Telegram Watchdog 以及优化任务类型的定位。社区方面，围绕 TinyOffice 的用户体验和功能增强是今日的焦点，多项新 Issue 均指向该方向，包括一个用于在 Web 端进行守护进程、队列、心跳和频道运行时控制面板的提议，以及针对现有聊天会话的 UX 改进和首次运行 Web 引导。

## 新版本发布

### v0.0.10 "v0.0.10"

TinyClaw 发布了 v0.0.10 版本，此次更新带来了多项改进：
*   **简化日志面板**：移除了 `tmux` 会话中的专用日志面板，使日志输出更加精简。
*   **优化心跳检测**：简化了 `heartbeat-cron.sh` 中 `TINYCLAW_HOME` 的检测方式。
*   **增强 Telegram Watchdog**：增加了 Telegram 轮询的 Watchdog 超时时间，从 2 分钟提升至 5 分钟，提高了消息处理的稳定性。
*   **任务类型模块化**：将 `Task/TaskStatus` 类型从核心模块迁移到 `server/routes/tasks.ts`，有助于代码的组织和维护。
*   **更新 README**：包含了 `tinyclaw office` 命令的使用说明。

## 社区关注点分析

### TinyOffice 功能增强与用户体验优化

今日新建的 Issues 高度集中在 TinyOffice 的 Web 用户界面改进上。
*   **[#194] TinyOffice 运行时控制面板**：社区提议在 TinyOffice 中增加一个运行时控制面板，用于管理守护进程、队列、心跳和频道，这将极大增强用户对运行系统的实时控制能力，而无需依赖 CLI。
*   **[#192] TinyOffice UX 建议**：针对当前 TinyOffice 在处理新聊天时的临时性问题，提出了 UX 改进建议，旨在允许用户重新打开过去的聊天会话，提升了用户体验的连续性。
*   **[#193] TinyOffice Web 首次运行引导**：为了简化首次安装和配置流程，社区建议在 TinyOffice 中加入 Web 引导功能，减少对命令行操作的依赖，使新用户上手更加便捷。

### 项目品牌重塑与架构演进

*   **[#191] TinyClaw 重命名为 TinyAGI**：一个重要的 Pull Request 正在进行代码库的全面品牌重塑，将项目从 "TinyClaw" 更名为 "TinyAGI"，并同步更新了包名、环境变量、CLI 命令、配置目录和文档。这标志着项目迈向新的发展阶段。
*   **[#186] Monolith 拆分为 Monorepo，引入 SQLite 队列**：另一项重要的 Pull Request 已经合入，它将原有的单一代码结构重构为多个 npm workspace 包（`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`），并用 `better-sqlite3` 实现了 SQLite 队列，替换了之前的 BullMQ/Redis 方案，这预示着项目在模块化和技术栈上进一步优化。

### 其他值得关注的更新

*   **[#111] 支持 Ollama 和本地模型**：该 Issue 在近期被关闭，表明社区对支持本地模型（如通过 Ollama）的需求已被纳入考量，并可能通过其他 PRs 或后续开发实现。
*   **[#189] ByeByeClaw 卸载工具**：一个独立的卸载工具 `ByeByeClaw` 被提及，旨在提供一键式的 TinyClaw 及相关工具的清理卸载方案。

## 今日最值得关注的动态

1.  **TinyAGI 品牌重塑启动 ([#191](https://github.com/TinyAGI/tinyclaw/pull/191))**：随着 `#191` PR 的开启，TinyClaw 正式迈入 TinyAGI 时代，这将影响项目的后续发展方向和生态建设。
2.  **TinyOffice 功能聚焦 ([#194](https://github.com/TinyAGI/tinyclaw/issues/194), [#192](https://github.com/TinyAGI/tinyclaw/issues/192), [#193](https://github.com/TinyAGI/tinyclaw/issues/193))**：社区对 TinyOffice 的热情持续高涨，新提出的运行时控制面板、聊天会话持久化和 Web 引导等功能，将显著提升产品的易用性和用户体验。
3.  **架构优化与技术栈更新 ([#186](https://github.com/TinyAGI/tinyclaw/pull/186))**：将 monolith 重构为 monorepo 并引入 SQLite 队列，是项目在代码管理和后台能力上的重大技术演进，有望带来更高的开发效率和更轻量的部署方案。

---

## 参考链接

*   [v0.0.10](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10)
*   [#194](https://github.com/TinyAGI/tinyclaw/issues/194)
*   [#192](https://github.com/TinyAGI/tinyclaw/issues/192)
*   [#193](https://github.com/TinyAGI/tinyclaw/issues/193)
*   [#111](https://github.com/TinyAGI/tinyclaw/issues/111)
*   [#189](https://github.com/TinyAGI/tinyclaw/issues/189)
*   [#191](https://github.com/TinyAGI/tinyclaw/pull/191)
*   [#190](https://github.com/TinyAGI/tinyclaw/pull/190)
*   [#183](https://github.com/TinyAGI/tinyclaw/pull/183)
*   [#182](https://github.com/TinyAGI/tinyclaw/pull/182)
*   [#185](https://github.com/TinyAGI/tinyclaw/pull/185)
*   [#143](https://github.com/TinyAGI/tinyclaw/pull/143)
*   [#186](https://github.com/TinyAGI/tinyclaw/pull/186)
*   [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-12T00:46:08.417Z