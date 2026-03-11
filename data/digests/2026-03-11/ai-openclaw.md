# 🦞 OpenClaw 生态系统 日报 — 2026-03-11

## 横向对比

好的，这是一份基于您提供的数据的 OpenClaw 生态系统横向技术日报，包含全景概览、活跃度对比、共同趋势、以及今日最值得关注的亮点。

---

# OpenClaw 生态系统 横向对比分析

**日期**: 2026-03-11

## 1. 生态全景

今日 OpenClaw 生态系统呈现出 **强劲的活跃度与快速迭代的势头**。从大型框架如 [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 和 [OpenClaw](https://github.com/openclaw/openclaw) 到更轻量级或模块化的项目如 [NanoBot](https://github.com/HKUDS/nanobot)、[PicoClaw](https://github.com/sipeed/picoclaw)、[NanoClaw](https://github.com/qwibitai/nanoclaw)、[IronClaw](https://github.com/nearai/ironclaw)、[TinyClaw](https://github.com/TinyAGI/tinyclaw) 和 [LobsterAI](https://github.com/netease-youdao/LobsterAI)，社区都在围绕 **LLM 集成、多平台通信、Agent 核心功能增强、安全性与稳定性** 等方向积极贡献。近期发布的版本（如 OpenClaw v2026.3.8）引发了一些回归 Bug 的讨论，但社区响应迅速，大量 PRs 专注于修复和功能迭代。本地模型支持（如 Ollama）和开发者体验的提升（如 CLI 工具改进）是多个项目共同关注的热点。

## 2. 活跃度对比

| 项目名称                                                                | GitHub URL                                 | 今日 Issues (新增/更新) | 今日 Pull Requests (新增/更新) |
| :---------------------------------------------------------------------- | :----------------------------------------- | :---------------------- | :----------------------------- |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)                       | https://github.com/zeroclaw-labs/zeroclaw      | 5 / 5                   | 5 / 5                          |
| [OpenClaw](https://github.com/openclaw/openclaw)                         | https://github.com/openclaw/openclaw         | 30+ / 30+               | 20+ / 20+                      |
| [NanoBot](https://github.com/HKUDS/nanobot)                             | https://github.com/HKUDS/nanobot             | 26 / 26                 | 20 / 20                        |
| [PicoClaw](https://github.com/sipeed/picoclaw)                            | https://github.com/sipeed/picoclaw             | 15+ / 15+               | 10+ / 10+                      |
| [NanoClaw](https://github.com/qwibitai/nanoclaw)                         | https://github.com/qwibitai/nanoclaw         | 10+ / 10+               | 10+ / 10+                      |
| [IronClaw](https://github.com/nearai/ironclaw)                           | https://github.com/nearai/ironclaw           | 30+ / 30+               | 15+ / 15+                      |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw)                         | https://github.com/TinyAGI/tinyclaw         | 5+ / 5+                 | 5+ / 5+                        |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI)                 | https://github.com/netease-youdao/LobsterAI | 7 / 7                   | 8 / 8                          |

*注：Issues 和 Pull Requests 数量为今日新增（New）或有更新（Updated）的粗略统计，具体数据可能因 GitHub API 限制和统计方式略有差异。*

## 3. 共同趋势

多个项目在本报告期内展现了相似的技术方向和用户需求：

*   **多平台 IM 集成与通信能力增强**: [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) (Slack), [OpenClaw](https://github.com/openclaw/openclaw) (Cron 任务稳定性，Gateway), [NanoBot](https://github.com/HKUDS/nanobot) (DingTalk, Slack, Matrix), [PicoClaw](https://github.com/sipeed/picoclaw) (QQ, Telegram, Feishu, IRC, Mattermost, WeCom), [NanoClaw](https://github.com/qwibitai/nanoclaw) (Telegram, WhatsApp), [LobsterAI](https://github.com/netease-youdao/LobsterAI) (Feishu, Discord, Telegram, WeCom) 等项目，都投入了大量精力去支持和优化各种即时通讯和协作平台的集成。
*   **本地模型支持与 Ollama 集成**: [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) (Ollama + Qwen), [NanoBot](https://github.com/HKUDS/nanobot) (Ollama), [LobsterAI](https://github.com/netease-youdao/LobsterAI) (Qwen, LM Studio, 腾讯 CodePlan) 等项目，都强调或新增了对本地 LLM 模型的支持，尤其是通过 Ollama，这反映了降低成本、增强隐私性、以及利用开源模型的趋势。
*   **Agent 核心能力与工具调用**: [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) (Tool usage, Agent features), [OpenClaw](https://github.com/openclaw/openclaw) (Tool integration, Gateway), [NanoBot](https://github.com/HKUDS/nanobot) (Tool usage, Subagent), [PicoClaw](https://github.com/sipeed/picoclaw) (Subagent tool access), [NanoClaw](https://github.com/qwibitai/nanoclaw) (Learning System, Skill discovery), [IronClaw](https://github.com/nearai/ironclaw) (CLI Skills management, LLM parameters), [TinyClaw](https://github.com/TinyAGI/tinyclaw) (Core, Teams, Channels), [LobsterAI](https://github.com/netease-youdao/LobsterAI) (Agent concurrency) 等所有项目都在不断优化 Agent 的智能、工具使用、记忆能力以及执行效率。
*   **安全性与稳定性修复**: [OpenClaw](https://github.com/openclaw/openclaw) (v2026.3.8 回归 Bug), [NanoBot](https://github.com/HKUDS/nanobot) (Security, Stability), [PicoClaw](https://github.com/sipeed/picoclaw) (Feishu auth, IRC bug), [NanoClaw](https://github.com/qwibitai/nanoclaw) (Container security, OAuth refresh), [IronClaw](https://github.com/nearai/ironclaw) (Critical security issues, Race conditions, Path traversal) 和 [TinyClaw](https://github.com/TinyAGI/tinyclaw) (Build system, Dependency order) 都通过大量的 Issues 和 PRs 积极处理 Bug 和安全问题，特别是 [IronClaw](https://github.com/nearai/ironclaw) 今日涌现出的高风险安全 Bug 值得关注。
*   **开发者体验与代码结构优化**: [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) (UX/UI improvements), [NanoBot](https://github.com/HKUDS/nanobot) (Endpoint Channel), [PicoClaw](https://github.com/sipeed/picoclaw) (CLI, Agent refactor), [NanoClaw](https://github.com/qwibitai/nanoclaw) (Admin mode, Learning System), [IronClaw](https://github.com/nearai/ironclaw) (CLI Skills, i18n), [TinyClaw](https://github.com/TinyAGI/tinyclaw) (Monorepo, SQLite queue, CLI prompts), [LobsterAI](https://github.com/netease-youdao/LobsterAI) (UI, ESLint) 等项目都在通过重构、引入新工具、优化 CLI 和 UI 来提升开发者和最终用户的体验。

## 4. 值得关注

1.  **[OpenClaw](https://github.com/openclaw/openclaw) v2026.3.8 版本的多项回归 Bug 集中爆发**: 尤其是在**Kimi-coding 提供商的配置与工具调用问题**（Issues [#41690](https://github.com/openclaw/openclaw/issues/41690), [#41445](https://github.com/openclaw/openclaw/issues/41445), [#40911](https://github.com/openclaw/openclaw/issues/40911)）和**Cron 任务稳定性问题**（Issues [#41798](https://github.com/openclaw/openclaw/issues/41798), [#40868](https://github.com/openclaw/openclaw/issues/40868), [#42152](https://github.com/openclaw/openclaw/issues/42152)）上，社区反馈和修复 PRs（如 [#42784](https://github.com/openclaw/openclaw/pull/42784), [#42796](https://github.com/openclaw/openclaw/pull/42796)）的活跃度极高，表明最新版本的稳定性是当前用户最关心的焦点。
2.  **[IronClaw](https://github.com/nearai/ironclaw) 大量高风险安全 Issues 的涌现**: 今日新增了数十个 **[CRITICAL]** 和 **[HIGH]** 级别的安全 Bug Issue（如 [#868](https://github.com/nearai/ironclaw/issues/868) 竞态条件，[#824](https://github.com/nearai/ironclaw/issues/824) 路径遍历），并伴随大量修复 PRs。这预示着项目正经历一个密集的安全加固阶段，对于保证长期稳定运行至关重要。
3.  **[NanoBot](https://github.com/HKUDS/nanobot) 集成 Ollama 作为本地 LLM Provider**: PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) 的成功合并，进一步降低了用户使用本地开源 LLM 的门槛，并为 NanoBot 带来了更广泛的部署灵活性。这一趋势在生态系统中具有代表性。

---

## 各工具详细报告

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw (zeroclaw-labs/zeroclaw) 技术日报 - 2026-03-11

## 概述

今日 Zeroclaw 生态系统在 **Issues** 和 **Pull Requests** 方面都呈现出活跃的景象。社区用户积极反馈 Bug、提出新功能需求，同时贡献者也提交了多项改进和新功能。值得注意的是，关于 Ollama、Provider 配置、Channel 集成以及 Agent 功能的讨论和开发是本周的焦点。

## 最新动态与社区关注点

### 1. **GLIBC 版本错误引发运行时问题**

用户 @heartacker 在 Issue [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) 中报告了一个严重的 **Bug**，指出 Zeroclaw 运行时依赖的 `GLIBC_2.39` 版本未找到，这直接导致程序无法启动。此问题被标记为 S0 级别（数据丢失/安全风险），由 `@zeroclaw-labs/zeroclaw` 维护者 @heartacker 在 3 月 9 日提出，并在 3 月 11 日有最新更新。尽管该 Issue 尚未关闭，但其影响范围和潜在风险是当前最值得关注的问题之一。

### 2. **Ollama + Qwen 工具调用回归问题**

Issue [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) 由 @G7CNF 提交，指出了使用 Ollama provider 配合 Qwen 模型时出现的 **工具调用回归 (regression)**。该问题导致模型只输出推理文本，无法正确调用工具，进而丢失了重要操作。该 Bug 于 3 月 9 日提交，3 月 10 日有更新，显示社区对这一问题的关注度较高（3 条评论）。

### 3. **多项功能增强与集成开发**

- **按需加载 MCP 工具**: Issue [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) 由 @richin13 提出，旨在通过 `tool_search` 实现 **MCP 工具的按需加载**，从而优化系统提示词（System Prompt）的长度和上下文使用。此功能性需求于 3 月 10 日被提交，并已获得 2 条评论，显示了对提升系统效率的期望。
- **Slack 适配器线程消息缺失**: Issue [#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084) 报告了 Slack 适配器未能订阅线程消息事件，导致遗漏了内联回复。该 Bug 于 3 月 9 日提出，3 月 10 日有更新，表明了对多渠道集成稳定性的持续关注。
- **Anthropic Provider]]: 添加视觉支持**: PR [#3163](https://github.com/zeroclaw-labs/zeroclaw/pull/3163) 是一个 **新建的功能性 PR**，由 @openchung 在 3 月 11 日提交，旨在为 Anthropic Provider 添加视觉支持，解决通过 Telegram 发送图像时模型无法识别的问题。
- **Bailian (Aliyun) Provider 支持**: PR [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158) 是一个 **新建的功能性 PR**，由 @Sagit-chu 在 3 月 11 日提交，增加了对阿里云百炼（Bailian）Coding Plan Provider 的支持，为用户提供了新的模型选择。

## 活跃 Pull Requests 分析

本周合并的 Pull Requests 集中在以下几个方面：

*   **Provider 支持扩展**: 新增了对 Bailian (Aliyun) 的支持 (PR [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158))，并计划添加 Notion 集成 (PR [#3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157))。
*   **UX/UI 改进**:
    *   Web 界面支持自动扩展聊天输入框 (PR [#3144](https://github.com/zeroclaw-labs/zeroclaw/pull/3144))，以及 Web Chat 的消息复制功能 (Issue [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120))，提升了用户交互体验。
    *   Onboarding 流程改进，显示正确的自定义模型命令 (PR [#3103](https://github.com/zeroclaw-labs/zeroclaw/pull/3103))，并增加了 `--reinit` 标志以防止意外覆盖配置 (PR [#3102](https://github.com/zeroclaw-labs/zeroclaw/pull/3102))。
*   **工具/Agent 功能优化**:
    *   解决工具调用时的可见性问题，确保代理能调用原生工具 (Issue [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069))。
    *   CLI 输出中隐藏工具调用的原始负载 (PR [#3159](https://github.com/zeroclaw-labs/zeroclaw/pull/3159))。
    *   为 Agent 添加操作技能，便于 CLI 和 REST API 使用 (PR [#3147](https://github.com/zeroclaw-labs/zeroclaw/pull/3147))。

## 本日最值得关注的动态

1.  **GLIBC 版本错误 (#3070)**: 严重运行时 Bug，阻碍了部分用户的 Zeroclaw 使用，急需关注和修复。
2.  **Ollama + Qwen 工具调用回归 (#3079)**: 影响了特定模型和 Provider 的核心功能，是社区关注的热点 Bug。
3.  **新增 Bailian (Aliyun) Provider 支持 (#3158)**: 标志着 Zeroclaw 在支持更多云厂商 LLM 服务方面迈出了重要一步，为用户提供了更多选择。

## 参考链接

### Issues
*   [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) - [Bug]: version `GLIBC_2.39' not found
*   [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) - [Bug]: Ollama+Qwen tool-calling regression: thinking-only output, malformed <tool_call>, dropped actions
*   [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) - [Feature]: on-demand MCP tool loading via `tool_search` (deferred tool activation)
*   [#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084) - [Bug]: Slack adapter doesn't subscribe to thread message events, missing inline thread replies
*   [#3163](https://github.com/zeroclaw-labs/zeroclaw/issues/3163) - feat: Add vision support for Anthropic provider
*   [#3158](https://github.com/zeroclaw-labs/zeroclaw/issues/3158) - [Feature]: zeroclaw agent support mcp
*   [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) - [Feature]: zeroclaw agent support mcp
*   [#3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146) - [Feature]: Ease tool usage approval on channels
*   [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120) - [Feature]: Web chat message copy action on hover (OpenClaw parity)

### Pull Requests
*   [#3162](https://github.com/zeroclaw-labs/zeroclaw/pull/3162) - fix(onboard): correct custom model rerun command
*   [#3103](https://github.com/zeroclaw-labs/zeroclaw/pull/3103) - fix(onboard): show correct command with custom model in summary
*   [#3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157) - feat(notion): add Notion channel and tool integration
*   [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158) - feat: add Bailian (Aliyun) provider support
*   [#3159](https://github.com/zeroclaw-labs/zeroclaw/pull/3159) - fix(cli): hide raw tool-call payloads during tool turns
*   [#3144](https://github.com/zeroclaw-labs/zeroclaw/pull/3144) - feat(web): auto-expand chat composer
*   [#3102](https://github.com/zeroclaw-labs/zeroclaw/pull/3102) - feat(onboard): add --reinit flag to prevent accidental config overwrite

</details>

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw (openclaw/openclaw) 技术日报

**日期:** 2026-03-11 | **分组:** OpenClaw 生态系统

## 核心动态概览

今日 OpenClaw 生态系统展现出活跃的开发和用户反馈景象。**版本 v2026.3.8** 的发布似乎是近期社区关注的焦点，引发了一系列与配置、工具调用和会话管理相关的 Bug 回报。值得注意的是，多个 Issues 反映了 **Kimi-coding** 提供商在 v2026.3.8 版本中出现的配置验证失败和工具调用问题，这表明该特定集成点可能需要进一步的修复。

在 **Issue** 方面，**Kimi-coding** 的配置问题 (#41690, #41445, #40911) 依然是热门讨论话题，多个用户报告了 `requiresOpenAiAnthropicToolPayload` 错误，显示这是一个影响广泛的回归问题。此外，**Cron 任务** 在 v2026.3.8 版本下的稳定性问题 (#41798, #40868, #42152, #42632, #42536, #42579) 也是用户普遍关注的焦点，尤其是在 `sessionTarget="isolated"` 配置下。**macOS 平台** 的 Gateway 管理和启动问题 (#41315, #41570, #41407, #41815, #42784) 也持续收到用户反馈。

**Pull Request** 方面，社区贡献者正积极修复 v2026.3.8 版本引入的各种问题。如 #42425 修复了工作空间 Hooks 加载问题，#42269 解决了并发环境中环境变量污染问题，#42796 改进了 Gateway Cron 任务的隔离性，以解决 #42635 的阻塞问题。

---

## 今日关键洞察

1.  **v2026.3.8 版本回归问题集中爆发，Kimi-coding 配置及工具调用受影响**
    多个用户报告在 OpenClaw v2026.3.8 版本中，使用 `kimi-coding` 提供商时，配置验证失败，出现 `Unrecognized key: "requiresOpenAiAnthropicToolPayload"` 错误。这导致了 Kimi 模型无法正常配置和使用。涉及的 Issues 包括 #41690, #41445, #40911。此外，#41852 和 #41475 指出 `kimi-coding` 提供商被硬编码并强制使用 OpenAI 的工具格式，这与 Kimi API 的实际格式不符，导致工具调用超时或失败。

2.  **Cron 任务稳定性成为 v2026.3.8 版本下的普遍痛点**
    升级到 v2026.3.8 版本后，大量用户反馈 Cron 任务，特别是使用 `sessionTarget="isolated"` 的任务，出现执行超时、无法执行或卡在“运行中”状态的问题。这影响了自动化任务的可靠性。相关 Issues 包括 #41798, #40868, #42152, #42632, #42536, #42579，表明 Cron 任务调度和隔离机制在最新版本中存在显著问题。

3.  **macOS 平台 Gateway 管理的稳定性问题持续存在**
    macOS 用户报告了 `openclaw gateway restart` 命令在不同场景下失败，导致服务未加载或反复重连的问题。Issues #41315, #41570, #41407, #41815 指出，Gateway 的重启、安装及认证令牌管理存在稳定性隐患，影响了 macOS 用户的日常使用。PR #42784 尝试通过 `kickstart -kp` 解决 #42775 中提到的 macOS 平台 Gateway 无法原子重启注册的问题。

---

## 社区焦点分析

### 热门 Issues

*   **Kimi-coding 配置问题**：`#41690`, `#41445`, `#40911` (已关闭) 详细描述了 `kimi-coding` 提供商在 v2026.3.8 版本中的配置验证失败，特别是 `requiresOpenAiAnthropicToolPayload` 这一未知键，表明这是一个影响多位用户的回归 Bug。
*   **Cron 任务稳定性**：`#41798` (已关闭), `#40868` (已关闭), `#42152` (已关闭), `#42632`, `#42536` (已关闭), `#42579` (已关闭) 共同揭示了 v2026.3.8 版本中 Cron 任务（尤其是孤立会话）的执行不稳定性，包括超时、无法触发执行等问题。
*   **macOS Gateway 管理**：`#41315` (已关闭), `#41570` (已关闭), `#41407` (已关闭), `#41815` (待处理) 反映了 macOS 上 Gateway 重启和管理的不便，以及认证令牌变化带来的问题。

### 热门 Pull Requests

*   **Gateway Cron 任务隔离**：`#42796` 旨在通过为每个孤立的 Cron 作业分配独立的 Command Lane 来解决 Cron 任务互相阻塞的问题，直接回应了 #42635。
*   **macOS Gateway 重启修复**：`#42784` 尝试修复 macOS 下 `openclaw gateway restart` 命令失败导致 LaunchAgent 未能重新注册的问题，是针对 #42775 中用户反馈的解决方案。
*   **Workspace Hooks 加载**：`#42425` 解决了 #42072 中提出的，Gateway 启动时未能正确加载非默认代理的工作空间 Hooks 的问题。
*   **Browser Profile 和 Proxy 支持**：`#42806` 引入了对每个 Profile 的代理支持和 Agent 绑定的默认 Profile，增强了浏览器工具的灵活性和隔离性。

---

## 本日最值得关注的动态

1.  **OpenClaw v2026.3.8 版本带来的多项回归 Bug 受到用户高度关注**：
    *   **Kimi-coding 配置与工具调用问题**: Issues #41690 (已关闭), #41445 (已关闭), #40911 (已关闭), #41852, #41475 (已关闭) 集体反映了 Kimi 提供商在最新版本中的配置和集成问题，这是当前用户面临的突出痛点。
    *   **Cron 任务稳定性下降**: Issues #41798 (已关闭), #40868 (已关闭), #42152 (已关闭), #42632, #42536 (已关闭), #42579 (已关闭) 揭示了 v2026.3.8 版本对 Cron 任务调度带来的负面影响，影响了自动化场景。

2.  **社区积极贡献修复性 PR，解决核心稳定性与功能问题**：
    *   PR `#42784` 尝试解决 macOS 平台 Gateway 重启的疑难杂症，针对 Issue #42775。
    *   PR `#42796` 改进了 Gateway Cron 任务的隔离机制，直接回应了 #42635 中用户反映的阻塞问题。
    *   PR `#42425` 修复了工作空间 Hooks 的加载问题，也是对 Issue #42072 的响应。

---

## 参考链接

*   **Issues:**
    *   [#41690](https://github.com/openclaw/openclaw/issues/41690)
    *   [#41445](https://github.com/openclaw/openclaw/issues/41445)
    *   [#40911](https://github.com/openclaw/openclaw/issues/40911)
    *   [#42270](https://github.com/openclaw/openclaw/issues/42270)
    *   [#41885](https://github.com/openclaw/openclaw/issues/41885)
    *   [#41798](https://github.com/openclaw/openclaw/issues/41798)
    *   [#41852](https://github.com/openclaw/openclaw/issues/41852)
    *   [#41315](https://github.com/openclaw/openclaw/issues/41315)
    *   [#41577](https://github.com/openclaw/openclaw/issues/41577)
    *   [#41462](https://github.com/openclaw/openclaw/issues/41462)
    *   [#41114](https://github.com/openclaw/openclaw/issues/41114)
    *   [#41652](https://github.com/openclaw/openclaw/issues/41652)
    *   [#41297](https://github.com/openclaw/openclaw/issues/41297)
    *   [#40868](https://github.com/openclaw/openclaw/issues/40868)
    *   [#41570](https://github.com/openclaw/openclaw/issues/41570)
    *   [#41407](https://github.com/openclaw/openclaw/issues/41407)
    *   [#42152](https://github.com/openclaw/openclaw/issues/42152)
    *   [#42632](https://github.com/openclaw/openclaw/issues/42632)
    *   [#41905](https://github.com/openclaw/openclaw/issues/41905)
    *   [#42067](https://github.com/openclaw/openclaw/issues/42067)
    *   [#42536](https://github.com/openclaw/openclaw/issues/42536)
    *   [#42530](https://github.com/openclaw/openclaw/issues/42530)
    *   [#41815](https://github.com/openclaw/openclaw/issues/41815)
    *   [#41475](https://github.com/openclaw/openclaw/issues/41475)
    *   [#42494](https://github.com/openclaw/openclaw/issues/42494)
    *   [#42579](https://github.com/openclaw/openclaw/issues/42579)
    *   [#42463](https://github.com/openclaw/openclaw/issues/42463)
    *   [#41224](https://github.com/openclaw/openclaw/issues/41224)
    *   [#41784](https://github.com/openclaw/openclaw/issues/41784)
    *   [#41673](https://github.com/openclaw/openclaw/issues/41673)
*   **Pull Requests:**
    *   [#42425](https://github.com/openclaw/openclaw/pull/42425)
    *   [#42807](https://github.com/openclaw/openclaw/pull/42807)
    *   [#42806](https://github.com/openclaw/openclaw/pull/42806)
    *   [#42799](https://github.com/openclaw/openclaw/pull/42799)
    *   [#42805](https://github.com/openclaw/openclaw/pull/42805)
    *   [#42269](https://github.com/openclaw/openclaw/pull/42269)
    *   [#42796](https://github.com/openclaw/openclaw/pull/42796)
    *   [#42781](https://github.com/openclaw/openclaw/pull/42781)
    *   [#42003](https://github.com/openclaw/openclaw/pull/42003)
    *   [#40658](https://github.com/openclaw/openclaw/pull/40658)
    *   [#41958](https://github.com/openclaw/openclaw/pull/41958)
    *   [#42096](https://github.com/openclaw/openclaw/pull/42096)
    *   [#42797](https://github.com/openclaw/openclaw/pull/42797)
    *   [#42489](https://github.com/openclaw/openclaw/pull/42489)
    *   [#42784](https://github.com/openclaw/openclaw/pull/42784)
    *   [#42779](https://github.com/openclaw/openclaw/pull/42779)
    *   [#42749](https://github.com/openclaw/openclaw/pull/42749)
    *   [#42793](https://github.com/openclaw/openclaw/pull/42793)
    *   [#42636](https://github.com/openclaw/openclaw/pull/42636)
    *   [#42320](https://github.com/openclaw/openclaw/pull/42320)

---
**GitHub 仓库:** [openclaw/openclaw](https://github.com/openclaw/openclaw)

</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报

**日期:** 2026-03-11
**分组:** OpenClaw 生态系统

## 概览

今日 NanoBot 生态系统活跃度显著，共有 **26 个 Issues**（其中 19 个为新建）和 **20 个 Pull Requests**（其中 16 个为新建）进行了更新或提交。社区积极参与讨论，围绕着功能增强、Bug 修复以及本地模型支持等方面展开。

## 版本亮点

**今日无新版本发布**。

## 社区焦点与趋势分析

### 热门 Issues / PRs 反映的社区关注点

*   **本地模型支持与集成**: 多个 Issue 和 PR 集中关注了对本地 LLM 模型的支持，特别是 **Ollama**。PR [#1863] 明确增加了对 Ollama 作为本地 LLM provider 的支持，允许用户无需 API 密钥即可使用本地模型。这表明社区对降低使用门槛、提升本地化部署能力有强烈的需求。
*   **多渠道集成与增强**: 社区对集成新渠道和增强现有渠道支持表现出浓厚兴趣。`DingTalk` 语音识别文本支持（PR [#1859]）、`Slack` 任务完成后的反应表情更新（PR [#1852]）以及对 `<Ollama api support?>`(#193) 的持续关注，都体现了用户希望 NanoBot 能够更广泛地融入各类通讯和协作平台。
*   **安全性与稳定性**: 安全性问题持续受到关注，Issue [#1817] 报告了 `restrictToWorkspace` 功能可能存在的安全漏洞，PR [#1845] 提交了修复方案。同时，稳定性方面，对于 cron job 执行记录的增强（Issue [#1837]）、代理端点轮换与冷却（PR [#1849]）以及内存合并时的配置继承（Issue [#1823] 与 PR [#1825]）等改进，都指向了提升系统健壮性和可靠性的方向。
*   **内存管理与持久化**: 关于内存管理机制的讨论依然活跃。Issue [#1774] 提出了关于长期记忆维护和纯文本存储的担忧，而 Issue [#1831] 则探讨了禁用 `MEMORY.md` 的方式。这表明用户在追求更高效、更可靠的记忆存储与访问方案。
*   **工具调用与代理行为**: 针对模型调用（如 Deepseek Reasoner）时缺失字段的问题（Issue [#1834]、PR [#1848]），以及子代理在处理消息时的行为（PR [#1846]），都反映出社区对代理内部逻辑的细节优化和兼容性问题的重视。

### 今日最值得关注的动态

1.  **Ollama 本地模型支持集成**: PR [#1863] 引入了对 Ollama 作为本地 LLM provider 的原生支持。这一更新极大地方便了用户在本地环境中部署和使用各种开源 LLM 模型，例如 `nemotron-3-nano`，无需额外的 API 密钥配置。这是降低 NanoBot 使用门槛、增强本地部署灵活性的一项重要进展。
    *   [feat: add Ollama as a local LLM provider](https://github.com/HKUDS/nanobot/pull/1863)

2.  **Endpoint Channel 增强 OpenAI 兼容接口**: PR [#1861] 提交了一个新的 `EndpointChannel`，为外部应用提供了兼容 OpenAI 的 API 访问接口（`/v1/responses`）。这项功能使得其他应用程序能够通过标准接口与 NanoBot 进行交互，也为自定义 Web Chat 等场景的集成奠定了基础，增加了 NanoBot 的可扩展性和应用场景。
    *   [Endpoint channel](https://github.com/HKUDS/nanobot/pull/1861)

3.  **Cron Job 执行历史追踪增强**: Issue [#1837] 提出了一项关于增强 `nanobot cron` 作业执行历史追踪的功能。目前的 cron job 仅记录最后一次运行的状态，而社区希望能够追踪更详细的运行历史，以便于调试、监控和分析。如果此功能被采纳并实现，将显著提升 cron job 的可维护性和可靠性。
    *   [feat(cron): Add run history tracking for cron jobs](https://github.com/HKUDS/nanobot/issues/1837)

---

## 参考链接

### Issues
*   [#1862 "feat: Support media path access and auto-nesting when restrictToWorkspace is enabled"](https://github.com/HKUDS/nanobot/issues/1862)
*   [#1834 "[Bug] Spawn/subagent 工具在 Deepseek Reasoner 下报错：缺少 `reasoning_content` 字段"](https://github.com/HKUDS/nanobot/issues/1834)
*   [#193 "Ollama api support?"](https://github.com/HKUDS/nanobot/issues/193)
*   [#1860 "建议增加结果流式输出"](https://github.com/HKUDS/nanobot/issues/1860)
*   [#1828 "How does cron work"](https://github.com/HKUDS/nanobot/issues/1828)
*   [#1461 "[Feature Enhancement] Provide a unified daemon gateway semantic layer for multi-platform users"](https://github.com/HKUDS/nanobot/issues/1461)
*   [#1851 "Matrix: auth error spams the server"](https://github.com/HKUDS/nanobot/issues/1851)
*   [#1692 "The telegram bot answers twice."](https://github.com/HKUDS/nanobot/issues/1692)
*   [#1617 "说明文档无中文"](https://github.com/HKUDS/nanobot/issues/1617)
*   [#1819 "好项目，但建议增加对微信（Wechat）APP的支持"](https://github.com/HKUDS/nanobot/issues/1819)
*   [#1783 "Codex provider: hardcoded 60s timeout causes silent failures, no retry"](https://github.com/HKUDS/nanobot/issues/1783)
*   [#1300 "Matrix channel does not work"](https://github.com/HKUDS/nanobot/issues/1300)
*   [#1774 "长期记忆什么时候能够比较好的维护？我看很多都用SQLite 处理的，纯文本是不是很容易造成记忆混乱"](https://github.com/HKUDS/nanobot/issues/1774)
*   [#1833 "Received SIGTERM, goodbye!"](https://github.com/HKUDS/nanobot/issues/1833)
*   [#1815 "是否支持飞书云文档、知识库相关？"](https://github.com/HKUDS/nanobot/issues/1815)
*   [#1837 "feat(cron): Add run history tracking for cron jobs"](https://github.com/HKUDS/nanobot/issues/1837)
*   [#1831 "toggle MEMORY.md on/off"](https://github.com/HKUDS/nanobot/issues/1831)
*   [#640 "I've completed processing but have no response to give."](https://github.com/HKUDS/nanobot/issues/640)
*   [#1230 "nanobot 连接modelscope-mcp-server失败"](https://github.com/HKUDS/nanobot/issues/1230)
*   [#1633 "BUG: Command "nanobot gateway --w" or "nanobot gateway --workspace" doesn't work."](https://github.com/HKUDS/nanobot/issues/1633)
*   [#1826 "ssh can't connect after docker compose run"](https://github.com/HKUDS/nanobot/issues/1826)
*   [#1829 "Commands do not work after adding"](https://github.com/HKUDS/nanobot/issues/1829)
*   [#1818 "[建议]可以使用类似 SimpleMem 工具改善记忆功能"](https://github.com/HKUDS/nanobot/issues/1818)
*   [#1823 "Memory consolidation does not inherit agent temperature and maxTokens configuration"](https://github.com/HKUDS/nanobot/issues/1823)
*   [#1822 "supports many models"](https://github.com/HKUDS/nanobot/issues/1822)
*   [#1556 "How to supported Aliyun coding plan https://help.aliyun.com/zh/model-studio/coding-plan?spm=5176.44390736.0.0.645333a64pjE3H"](https://github.com/HKUDS/nanobot/issues/1556)
*   [#1821 "SubagentManager ignores per-agent model config from config.json"](https://github.com/HKUDS/nanobot/issues/1821)
*   [#1411 "如果能接入类型小米音响之类就更有意思了"](https://github.com/HKUDS/nanobot/issues/1411)
*   [#1817 "🔒 Security: restrictToWorkspace bypass using ~ paths (file access bypass)"](https://github.com/HKUDS/nanobot/issues/1817)
*   [#1816 "Bug: 'nanobot cron' commands removed in v0.1.4.post4"](https://github.com/HKUDS/nanobot/issues/1816)

### Pull Requests
*   [#1863 "feat: add Ollama as a local LLM provider"](https://github.com/HKUDS/nanobot/pull/1863)
*   [#1861 "Endpoint channel"](https://github.com/HKUDS/nanobot/pull/1861)
*   [#1847 "fix: pass agent config to memory consolidation LLM calls"](https://github.com/HKUDS/nanobot/pull/1847)
*   [#1856 "fix: exclude hidden files when syncing workspace templates"](https://github.com/HKUDS/nanobot/pull/1856)
*   [#1848 "fix(subagent): preserve reasoning_content in assistant messages"](https://github.com/HKUDS/nanobot/pull/1848)
*   [#1859 "feat: support retrieving DingTalk voice recognition text"](https://github.com/HKUDS/nanobot/pull/1859)
*   [#1855 "fix: bump litellm version to 1.82.1 for Moonshot provider support"](https://github.com/HKUDS/nanobot/pull/1855)
*   [#1858 "feat: add deduplication mechanisms to prevent loops and duplicates"](https://github.com/HKUDS/nanobot/pull/1858)
*   [#1857 "fix: resolve PR #1836 merge conflicts"](https://github.com/HKUDS/nanobot/pull/1857)
*   [#1854 "[Feature Enhancement] Provide a unified daemon gateway semantic layer for multi-platform users  #1461"](https://github.com/HKUDS/nanobot/pull/1854)
*   [#1853 "Adding nvidia escalation tool"](https://github.com/HKUDS/nanobot/pull/1853)
*   [#1852 "feat(slack): update reaction emoji on task completion"](https://github.com/HKUDS/nanobot/pull/1852)
*   [#1825 "fix(memory): pass agent generation settings to consolidation"](https://github.com/HKUDS/nanobot/pull/1825)
*   [#1849 "feat: Provider endpoint rotation with cooldown failover "](https://github.com/HKUDS/nanobot/pull/1849)
*   [#1846 "fix: include reasoning_content in subagent assistant messages"](https://github.com/HKUDS/nanobot/pull/1846)
*   [#1845 "fix: detect tilde paths in restrictToWorkspace shell guard"](https://github.com/HKUDS/nanobot/pull/1845)
*   [#1844 "feat: smarter Phase 1 heartbeat scheduling — datetime-aware + configurable last-run tracking"](https://github.com/HKUDS/nanobot/pull/1844)
*   [#1836 "fix: preserve tool_choice across provider implementations"](https://github.com/HKUDS/nanobot/pull/1836)
*   [#1843 "Check if the content is empty?"](https://github.com/HKUDS/nanobot/pull/1843)
*   [#1799 "fix(cli): support forced Codex OAuth re-login"](https://github.com/HKUDS/nanobot/pull/1799)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报 - 2026-03-11

## 版本动态

### **v0.2.1-nightly.20260311.9cd2d218 发布**
今日，PicoClaw 发布了 `v0.2.1-nightly.20260311.9cd2d218` 版本。本次更新包含了多个重要的功能增强和问题修复：

*   **QQ 频道增强**：增强了 QQ 频道的 `feat(channels): enhance QQ channel with group/typing/media support and URL sanitization` 功能，支持群组、输入状态、媒体内容，并进行了 URL 安全性处理。
*   **Telegram 论坛主题支持**：通过 `Merge pull request #1291 from statxc/feat/telegram-forum-topics`，集成了对 Telegram 论坛主题（Threads）的支持，提升了会话管理的组织能力。
*   **Docker 启动器**：新增了 `feat(docker): add launcher bun`，为 Docker 环境下的启动添加了 Bun 启动器支持。
*   **调试模式优化**：`debug doc` 的更新优化了调试文档。

本次夜间构建（Nightly Build）版本为 `v0.2.1-nightly.20260311.9cd2d218`，旨在提供最新的功能和 bug 修复，但可能存在不稳定性，建议谨慎使用。

---

## 社区关注点：Issues & Pull Requests 分析

### **热门 Issues 概览**

本期 Issues 集中在 **Channel 集成**、**Agent 行为** 和 **Provider 支持** 三个主要领域。

**Channel 相关**：
*   **Telegram 论坛主题支持**：`#1270` [Feature] Telegram Forum Topics Support for PicoClaw 是一个高优先级的功能需求，旨在将 OpenClaw 中强大的会话组织能力引入 PicoClaw。
*   **Feishu (飞书) 问题**：`#1281` [BUG] Feishu messages doesn't show user_id of @ and msg sender 和 `#1307` [BUG] feishu(飞书) auth expired after 12h 指出了飞书渠道在用户 ID 显示和身份验证方面的 Bug。
*   **IRC 问题**：`#1280` [BUG] About IRC -Allow From 和 `#1279` [BUG] About IRC -auto join channels 报告了 IRC 频道在配置和频道加入方面的 Bug。
*   **Telegram 交互优化**：`#1328` [Feature] Native Telegram reactions for low-noise acknowledgements 提出了使用 Telegram 原生表情符号进行低噪音确认的增强功能。

**Agent 相关**：
*   **Subagent 工具访问**：`#1278` [Feature] Subagent support for tool access and inheritance (read\_file, write\_file, exec, etc.) 是一个关键的功能增强，允许子 Agent 拥有明确的工具访问和继承能力，对于自动化工作流至关重要。
*   **Agent Loop 重构**：`#1316` [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering 提议对 Agent Loop 进行事件驱动重构，以提高可观测性、可 hook 性、可中断性和可追加性。
*   **模型路由 Bug**：`#1297` [BUG]light模型路由bug，应该和model\_list里面的匹配后再返回 指出 light 模型路由存在 Bug。
*   **Spawn 行为问题**：`#1322` [BUG] spawn ignores target agent model and always uses caller model 报告了 `spawn` 命令在子 Agent 模型选择上的问题。

**Provider 相关**：
*   **Kimi Coding Provider 支持**：`#1293` Feature: Add Kimi Coding Provider Support 旨在为 Kimi 代码计划提供独立的 Endpoint 支持。
*   **MiniMax Provider 支持**：`#1320` [BUG] MiniMax official endpoint not supportted! 指出 MiniMax 官方 Endpoint 未得到支持。

---

### **近期热门 Pull Requests**

**新增 Channel 支持**和**Provider 集成**是本期 PR 的亮点：

*   **Mattermost 和 WeCom 支持**：`#1288` feat(channels): add Mattermost channel support 和 `#1338` feat(channels): add wecom\_ws (WeCom WebSocket) channel support 分别为 Mattermost 和企业微信（WeCom）新增了 Channel 支持，进一步扩展了 PicoClaw 的多平台集成能力。
*   **Kimi Coding Provider 集成**：`#1284` feat: add anthropic-messages protocol for native Anthropic Messages API support 实现了对 Anthropic Messages API 的原生支持，并兼容OpenClaw的配置模式，为使用 Kimi 等兼容模型提供了更 robust 的途径。
*   **QQ 媒体支持**：`#1336` feat(qq): support replay markdown/image/audio/video/files 增强了 QQ 频道对 Markdown、图片、音视频及文件的支持，提升了用户体验。
*   **Feishu Token 缓存修复**：`#1318` fix(feishu): invalidate cached token on auth error to enable retry recovery 修复了飞书渠道认证 Token 缓存问题，提高了集成稳定性。
*   **Agent 工具调试**：`#1332` feat(tool): debug tool usage via channels 引入了实时工具反馈功能，增强了 Agent 执行工具时的透明度和用户体验。
*   **Gateway 启动修复**：`#1337` fix: resolve gateway binary path, pass --config flag, and clarify emp… 解决了 Gateway 启动时二进制文件路径解析和配置传递的问题。

---

## 本日最值得关注的动态

1.  **PicoClaw 快速迭代，支持多平台通信和 LLM 集成**：
    *   **版本更新**：`v0.2.1-nightly.20260311.9cd2d218` 的发布，带来了 QQ 频道增强、Telegram 论坛主题支持，展现了项目快速集成和迭代的能力。
    *   **新 PR 贡献**：`#1338` feat(channels): add wecom\_ws (WeCom WebSocket) channel support 为企业微信新增了 WebSocket channel 支持，`#1288` feat(channels): add Mattermost channel support 增加了 Mattermost 集成，标志着 PicoClaw 在跨平台通信能力上持续发力。

2.  **Agent 核心功能持续优化和重构**：
    *   **子 Agent 功能增强**：`#1278` [Feature] Subagent support for tool access and inheritance 是一个重要的功能提升，使得 Agent 能够更灵活地管理和使用工具，为复杂的自动化任务打下基础。
    *   **Agent Loop 架构重构**：`#1316` [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering 的提议预示着 PicoClaw 将在 Agent 的内部运行机制上进行深度优化，提升其灵活性和可控性。

---

## 参考链接

*   **Releases**
    *   [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
    *   [Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)
*   **Issues**
    *   [#1270](https://github.com/sipeed/picoclaw/issues/1270)
    *   [#1278](https://github.com/sipeed/picoclaw/issues/1278)
    *   [#1280](https://github.com/sipeed/picoclaw/issues/1280)
    *   [#1281](https://github.com/sipeed/picoclaw/issues/1281)
    *   [#1316](https://github.com/sipeed/picoclaw/issues/1316)
    *   [#1298](https://github.com/sipeed/picoclaw/issues/1298)
    *   [#1287](https://github.com/sipeed/picoclaw/issues/1287)
    *   [#1328](https://github.com/sipeed/picoclaw/issues/1328)
    *   [#1307](https://github.com/sipeed/picoclaw/issues/1307)
    *   [#1290](https://github.com/sipeed/picoclaw/issues/1290)
    *   [#1276](https://github.com/sipeed/picoclaw/issues/1276)
    *   [#1279](https://github.com/sipeed/picoclaw/issues/1279)
    *   [#1293](https://github.com/sipeed/picoclaw/issues/1293)
    *   [#1297](https://github.com/sipeed/picoclaw/issues/1297)
    *   [#1299](https://github.com/sipeed/picoclaw/issues/1299)
    *   [#1305](https://github.com/sipeed/picoclaw/issues/1305)
    *   [#1310](https://github.com/sipeed/picoclaw/issues/1310)
    *   [#1315](https://github.com/sipeed/picoclaw/issues/1315)
    *   [#1320](https://github.com/sipeed/picoclaw/issues/1320)
    *   [#1322](https://github.com/sipeed/picoclaw/issues/1322)
    *   [#1323](https://github.com/sipeed/picoclaw/issues/1323)
    *   [#1333](https://github.com/sipeed/picoclaw/issues/1333)
    *   [#1329](https://github.com/sipeed/picoclaw/issues/1329)
    *   [#1161](https://github.com/sipeed/picoclaw/issues/1161)
    *   [#1218](https://github.com/sipeed/picoclaw/issues/1218)
    *   [#297](https://github.com/sipeed/picoclaw/issues/297)
    *   [#62](https://github.com/sipeed/picoclaw/issues/62)
    *   [#292](https://github.com/sipeed/picoclaw/issues/292)
    *   [#906](https://github.com/sipeed/picoclaw/issues/906)
    *   [#657](https://github.com/sipeed/picoclaw/issues/657)
*   **Pull Requests**
    *   [#1317](https://github.com/sipeed/picoclaw/pull/1317)
    *   [#1337](https://github.com/sipeed/picoclaw/pull/1337)
    *   [#1288](https://github.com/sipeed/picoclaw/pull/1288)
    *   [#1338](https://github.com/sipeed/picoclaw/pull/1338)
    *   [#1318](https://github.com/sipeed/picoclaw/pull/1318)
    *   [#1330](https://github.com/sipeed/picoclaw/pull/1330)
    *   [#1332](https://github.com/sipeed/picoclaw/pull/1332)
    *   [#1284](https://github.com/sipeed/picoclaw/pull/1284)
    *   [#1336](https://github.com/sipeed/picoclaw/pull/1336)
    *   [#1301](https://github.com/sipeed/picoclaw/pull/1301)
    *   [#1268](https://github.com/sipeed/picoclaw/pull/1268)
    *   [#1302](https://github.com/sipeed/picoclaw/pull/1302)
    *   [#1304](https://github.com/sipeed/picoclaw/pull/1304)
    *   [#1296](https://github.com/sipeed/picoclaw/pull/1296)
    *   [#1308](https://github.com/sipeed/picoclaw/pull/1308)
    *   [#1331](https://github.com/sipeed/picoclaw/pull/1331)
    *   [#1292](https://github.com/sipeed/picoclaw/pull/1292)
    *   [#1303](https://github.com/sipeed/picoclaw/pull/1303)
    *   [#1306](https://github.com/sipeed/picoclaw/pull/1306)
    *   [#1311](https://github.com/sipeed/picoclaw/pull/1311)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报

**日期**: 2026-03-11
**分组**: OpenClaw 生态系统

## 摘要

本日报聚焦于 NanoClaw 项目在 2026 年 3 月 11 日的活动，重点关注社区焦点、新动态以及近期值得关注的进展。过去一天，社区在提升代理的自主学习能力、安全性和多平台集成方面表现出高度活跃。

### 社区焦点与热门动态

1.  **持续稳定的安全与集成改进**: `Fix` 类型的 Pull Request 依然是近期社区关注的焦点。特别是 `kianwoon` 贡献了多项关键修复，包括 [#928](https://github.com/qwibitai/nanoclaw/pull/928) 解决因会话文件过大导致的容器超时问题，以及 [#930](https://github.com/qwibitai/nanoclaw/pull/930) 自动刷新过期的 OAuth 令牌，解决了跨时区使用时遇到的认证中断问题。此外，[#942](https://github.com/qwibitai/nanoclaw/pull/942) 解决了主机以 root 权限运行时可能出现的容器权限错误，这对于部署在服务器环境（如 VPS）的用户尤为重要。这些 PR 的集中出现表明社区正在努力提升 NanoClaw 在各种运行环境下的稳定性和安全性。

2.  **自主学习系统（Learning System）的快速推进**: 以 `@matt-carvalho` 为主导的多个 Enhancements 类型 Issues 正围绕着“自主学习系统”这一大型 Epic [#907](https://github.com/qwibitai/nanoclaw/issues/907) 展开。其中，[#908](https://github.com/qwibitai/nanoclaw/issues/908) 提出的 FTS5 对话索引与搜索功能，以及 [#910](https://github.com/qwibitai/nanoclaw/issues/910) 的结构化内存（USER.md 和字符限制）是实现代理“记忆”和“学习”的关键组件。#911 提出的技能自发现 IPC 处理及其安全扫描机制，更是将代理的能力扩展到了自主生成新技能的层面。这些功能共同构成了 NanoClaw 实现更高级自主性的重要基石。

3.  **新用户体验与多渠道支持的涌现**:
    *   新建 Issue [#926](https://github.com/qwibitai/nanoclaw/issues/926) 提出了“Admin mode”，旨在通过 `/capabilities` 命令实现只读的管理能力，这是对系统可管理性的一次重要探索。
    *   Pull Request [#949](https://github.com/qwibitai/nanoclaw/pull/949) 及其相关的 [#946](https://github.com/qwibitai/nanoclaw/pull/946) 和 [#917](https://github.com/qwibitai/nanoclaw/pull/917) 展示了社区在新渠道（如 Telegram, WhatsApp, Gmail）上的集成工作，以及对图像视觉、语音转写、PDF 处理等新技能的扩展。这些努力极大地丰富了 NanoClaw 的应用场景和用户交互方式。

### 最值得关注的动态

1.  **自主学习系统 Epic [#907](https://github.com/qwibitai/nanoclaw/issues/907) 的多项关键功能开发**: **FTS5 对话索引 [#908](https://github.com/qwibitai/nanoclaw/issues/908)** 和**结构化内存 [#910](https://github.com/qwibitai/nanoclaw/issues/910)** 等 Issues 的出现，标志着 NanoClaw 在提升代理记忆和学习能力上迈出了重要步伐。
2.  **容器安全与稳定性修复集中涌现**: 以 [#928](https://github.com/qwibitai/nanoclaw/pull/928), [#930](https://github.com/qwibitai/nanoclaw/pull/930), [#942](https://github.com/qwibitai/nanoclaw/pull/942) 为代表的修复类 PR，强力证明了社区对 NanoClaw 底层稳定性和安全性的持续投入，尤其关注了在不同部署环境下的兼容性问题。
3.  **多渠道与新技能的集成加速**: Pull Request [#949](https://github.com/qwibitai/nanoclaw/pull/949) 展示了集成 **Telegram** 渠道和修复 **VPS** 环境问题的进展，同时 [#917](https://github.com/qwibitai/nanoclaw/pull/917) 预示着 **WhatsApp** 集成、**语音/视觉**能力以及 **PDF** 等格式处理技能的到来，显著扩展了 NanoClaw 的生态能力。

### 旧 Issue/PR 近期更新

*   **Merge-forward 失败问题持续存在**: Issues [#898](https://github.com/qwibitai/nanoclaw/issues/898), [#897](https://github.com/qwibitai/nanoclaw/issues/897), [#896](https://github.com/qwibitai/nanoclaw/issues/896), [#895](https://github.com/qwibitai/nanoclaw/issues/895), [#893](https://github.com/qwibitai/nanoclaw/issues/893), [#892](https://github.com/qwibitai/nanoclaw/issues/892) 均报告了 `skill-maintenance` 相关的 `merge-forward` 工作流失败。这些 Issue 在最近 1-3 天内多次更新并关闭，表明集成维护方面可能正经历一些挑战，需要开发团队持续关注。
*   **关键 Bug 修复的持续讨论**: Issue [#825](https://github.com/qwibitai/nanoclaw/issues/825) (scheduler `once-task` race condition) 虽然建立较早，但在近 3 天内有更新。此 Bug 被标记为 `Critical` 优先级，并且与一次“faking tool calls”事件的根源相关，其解决进展值得密切关注。

---

## 参考链接

**Issues:**
*   [#898](https://github.com/qwibitai/nanoclaw/issues/898)
*   [#897](https://github.com/qwibitai/nanoclaw/issues/897)
*   [#896](https://github.com/qwibitai/nanoclaw/issues/896)
*   [#895](https://github.com/qwibitai/nanoclaw/issues/895)
*   [#893](https://github.com/qwibitai/nanoclaw/issues/893)
*   [#892](https://github.com/qwibitai/nanoclaw/issues/892)
*   [#926](https://github.com/qwibitai/nanoclaw/issues/926)
*   [#941](https://github.com/qwibitai/nanoclaw/issues/941)
*   [#910](https://github.com/qwibitai/nanoclaw/issues/910)
*   [#911](https://github.com/qwibitai/nanoclaw/issues/911)
*   [#912](https://github.com/qwibitai/nanoclaw/issues/912)
*   [#913](https://github.com/qwibitai/nanoclaw/issues/913)
*   [#825](https://github.com/qwibitai/nanoclaw/issues/825)
*   [#934](https://github.com/qwibitai/nanoclaw/issues/934)
*   [#935](https://github.com/qwibitai/nanoclaw/issues/935)
*   [#933](https://github.com/qwibitai/nanoclaw/issues/933)
*   [#924](https://github.com/qwibitai/nanoclaw/issues/924)
*   [#865](https://github.com/qwibitai/nanoclaw/issues/865)
*   [#909](https://github.com/qwibitai/nanoclaw/issues/909)
*   [#908](https://github.com/qwibitai/nanoclaw/issues/908)
*   [#907](https://github.com/qwibitai/nanoclaw/issues/907)

**Pull Requests:**
*   [#928](https://github.com/qwibitai/nanoclaw/pull/928)
*   [#930](https://github.com/qwibitai/nanoclaw/pull/930)
*   [#940](https://github.com/qwibitai/nanoclaw/pull/940)
*   [#942](https://github.com/qwibitai/nanoclaw/pull/942)
*   [#925](https://github.com/qwibitai/nanoclaw/pull/925)
*   [#949](https://github.com/qwibitai/nanoclaw/pull/949)
*   [#946](https://github.com/qwibitai/nanoclaw/pull/946)
*   [#861](https://github.com/qwibitai/nanoclaw/pull/861)
*   [#871](https://github.com/qwibitai/nanoclaw/pull/871)
*   [#947](https://github.com/qwibitai/nanoclaw/pull/947)
*   [#917](https://github.com/qwibitai/nanoclaw/pull/917)
*   [#932](https://github.com/qwibitai/nanoclaw/pull/932)
*   [#943](https://github.com/qwibitai/nanoclaw/pull/943)
*   [#944](https://github.com/qwibitai/nanoclaw/pull/944)
*   [#945](https://github.com/qwibitai/nanoclaw/pull/945)
*   [#868](https://github.com/qwibitai/nanoclaw/pull/868)
*   [#936](https://github.com/qwibitai/nanoclaw/pull/936)
*   [#939](https://github.com/qwibitai/nanoclaw/pull/939)
*   [#938](https://github.com/qwibitai/nanoclaw/pull/938)
*   [#937](https://github.com/qwibitai/nanoclaw/pull/937)

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 植物日报

**日期:** 2026-03-11 | **分组:** OpenClaw 生态系统

## 🌟 今日亮点

*   **[v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0) 版本发布**：本次更新引入了多项关键改进，包括 LLM 参数过滤、持久化用户 ID、CI 流程优化以及 Docker 容器的后台清理机制。
*   **大量新的安全和 bug Issue 涌现**：昨天新创建和更新了数十个 Issue，其中不乏 **[CRITICAL]** 和 **[HIGH]** 级别的安全隐患和 bug，例如竞态条件、环境变量修改漏洞、N+1 查询、路径遍历风险以及 token 预算强制执行不完整等，显示出开发团队对代码质量和安全性的高度重视。
*   **[#918](https://github.com/nearai/ironclaw/pull/918) 引入 CLI Skills 管理**：新增了 `skills list/search/info` 等 CLI 子命令，允许用户无需启动 Agent 即可管理和查看技能，极大地提升了 CLI 用户的操作便捷性。

---

## 🚀 版本发布

### **v0.17.0 "0.17.0 - 2026-03-10"**
本次发布的 **[v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)** 版本包含以下重要更新：

*   **LLM 参数过滤**：支持按 Provider 对不支持的参数进行过滤（#749, #728），增强了 LLM 集成的灵活性和健壮性。
*   **持久化 Job ID**：`user_id` 被持久化到 `save_job` 中，并在例行运行时暴露 `job_id`（#709），便于任务追踪和管理。
*   **CI 流程优化**：通过多 Agent Claude 评审实现了链式 promotion PRs（#776）。
*   **Docker 容器管理**：增加了对孤立 Docker 容器的后台清理器（#634）。

---

## 📢 社区关注点（Issues & Pull Requests）

### **Issues (近期高热度 & 新建)**

*   **安全与稳定性问题成为焦点**： yesterday, a significant number of new issues, many tagged as **[CRITICAL]** and **[HIGH]** risk, were opened. These address critical vulnerabilities such as race conditions in environment variable modification ([#868](https://github.com/nearai/ironclaw/issues/868)), invalid default model configurations ([#867](https://github.com/nearai/ironclaw/issues/867)), TOCTOU race conditions in job updates ([#812](https://github.com/nearai/ironclaw/issues/812)), path traversal vulnerabilities ([#824](https://github.com/nearai/ironclaw/issues/824)), and issues with token budget enforcement ([#816](https://github.com/nearai/ironclaw/issues/815), [#814](https://github.com/nearai/ironclaw/issues/814)). These highlight the ongoing effort to fortify the platform's security and reliability.
*   **新用户安装问题**：[#840](https://github.com/nearai/ironclaw/issues/840) 报告了新安装的 WASM 工具可能与当前 Host 版本不兼容的问题，影响了新用户快速上手。
*   **功能请求**：[#761](https://github.com/nearai/ironclaw/issues/761) 请求为 Web Gateway 添加浅色主题，以提升用户体验。

### **Pull Requests (近期高热度 & 新建)**

*   **[#918](https://github.com/nearai/ironclaw/pull/918) 引入 CLI Skills 管理**：这是一个新 PR，旨在为 `ironclaw` CLI 添加 `skills list/search/info` 子命令。此功能允许用户直接在命令行中管理和查看技能（SKILL.md），极大地增强了 CLI 的易用性，特别适合脚本和自动化场景。
*   **[#865](https://github.com/nearai/ironclaw/pull/865) 自动化 Staging to Main Promotion**：这是一个大型的自动化 PR，旨在将 `staging` 分支的内容提升到 `main` 分支。其包含的众多 Scope（agent, channel, tools, db, safety, llm, workspace等）表明这次 promotion 涉及了系统的多个核心模块，并且由于其 `risk: high` 标签，可能包含一些潜在的改动需要详细审查。
*   **[#896](https://github.com/nearai/ironclaw/pull/896) 国际化支持 - 中文与英文**：该 PR 为 IronClaw 添加了国际化（i18n）支持，并初步实现了中文（zh-CN）和英文（en）的语言包。这对于扩大用户群体和提升多语言用户体验至关重要。
*   **[#760](https://github.com/nearai/ironclaw/pull/760) 修复 Thread ID 导致的跨用户上下文污染**：此 PR 解决了 Agent 层一个高风险的安全问题，即客户端发送伪造的 `thread_id` 可能导致跨用户对话污染。

---

## 💡 本日最值得关注

1.  **安全与稳定性修复的爆发**：由 `@ironclaw-ci[bot]` 和 `@henrypark133` 等用户提交的数十个 **[CRITICAL]** 和 **[HIGH]** 级别的 Issues，集中反映了对系统安全性和稳定性的深度审查和修复工作。这些 Issue 涵盖了从竞态条件、内存溢出到路径遍历等多种潜在风险，表明项目正在经历一个重要的安全加固阶段。
2.  **CLI 功能扩展**：[#918](https://github.com/nearai/ironclaw/pull/918) 提出的 CLI Skills 管理功能，为开发者和高级用户提供了更便捷的工具链操作方式，是提升开发者体验的重要一步。
3.  **多语言支持的初步落地**：[#896](https://github.com/nearai/ironclaw/pull/896) 引入的国际化支持，特别是中文和英文包的加入，预示着 IronClaw 在全球化推广方面迈出了坚实的一步。

---

## ✨ 参考链接

**Releases:**
*   [v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)

**Issues:**
*   [#749](https://github.com/nearai/ironclaw/issues/749)
*   [#728](https://github.com/nearai/ironclaw/issues/728)
*   [#709](https://github.com/nearai/ironclaw/issues/709)
*   [#776](https://github.com/nearai/ironclaw/issues/776)
*   [#634](https://github.com/nearai/ironclaw/issues/634)
*   [#806](https://github.com/nearai/ironclaw/issues/806)
*   [#840](https://github.com/nearai/ironclaw/issues/840)
*   [#868](https://github.com/nearai/ironclaw/issues/868)
*   [#867](https://github.com/nearai/ironclaw/issues/867)
*   [#761](https://github.com/nearai/ironclaw/issues/761)
*   [#766](https://github.com/nearai/ironclaw/issues/766)
*   [#811](https://github.com/nearai/ironclaw/issues/811)
*   [#859](https://github.com/nearai/ironclaw/issues/859)
*   [#858](https://github.com/nearai/ironclaw/issues/858)
*   [#819](https://github.com/nearai/ironclaw/issues/819)
*   [#816](https://github.com/nearai/ironclaw/issues/816)
*   [#815](https://github.com/nearai/ironclaw/issues/815)
*   [#814](https://github.com/nearai/ironclaw/issues/814)
*   [#813](https://github.com/nearai/ironclaw/issues/813)
*   [#828](https://github.com/nearai/ironclaw/issues/828)
*   [#827](https://github.com/nearai/ironclaw/issues/827)
*   [#826](https://github.com/nearai/ironclaw/issues/826)
*   [#825](https://github.com/nearai/ironclaw/issues/825)
*   [#823](https://github.com/nearai/ironclaw/issues/823)
*   [#873](https://github.com/nearai/ironclaw/issues/873)
*   [#872](https://github.com/nearai/ironclaw/issues/872)
*   [#871](https://github.com/nearai/ironclaw/issues/871)
*   [#870](https://github.com/nearai/ironclaw/issues/870)
*   [#869](https://github.com/nearai/ironclaw/issues/869)
*   [#817](https://github.com/nearai/ironclaw/issues/817)
*   [#812](https://github.com/nearai/ironclaw/issues/812)
*   [#860](https://github.com/nearai/ironclaw/issues/860)
*   [#818](https://github.com/nearai/ironclaw/issues/818)
*   [#824](https://github.com/nearai/ironclaw/issues/824)
*   [#866](https://github.com/nearai/ironclaw/issues/866)

**Pull Requests:**
*   [#865](https://github.com/nearai/ironclaw/pull/865)
*   [#918](https://github.com/nearai/ironclaw/pull/918)
*   [#896](https://github.com/nearai/ironclaw/pull/896)
*   [#917](https://github.com/nearai/ironclaw/pull/917)
*   [#885](https://github.com/nearai/ironclaw/pull/885)
*   [#822](https://github.com/nearai/ironclaw/pull/822)
*   [#760](https://github.com/nearai/ironclaw/pull/760)
*   [#915](https://github.com/nearai/ironclaw/pull/915)
*   [#831](https://github.com/nearai/ironclaw/pull/831)
*   [#911](https://github.com/nearai/ironclaw/pull/911)
*   [#905](https://github.com/nearai/ironclaw/pull/905)
*   [#850](https://github.com/nearai/ironclaw/pull/850)
*   [#851](https://github.com/nearai/ironclaw/pull/851)
*   [#796](https://github.com/nearai/ironclaw/pull/796)
*   [#844](https://github.com/nearai/ironclaw/pull/844)
*   [#853](https://github.com/nearai/ironclaw/pull/853)
*   [#839](https://github.com/nearai/ironclaw/pull/839)
*   [#758](https://github.com/nearai/ironclaw/pull/758)
*   [#757](https://github.com/nearai/ironclaw/pull/757)
*   [#916](https://github.com/nearai/ironclaw/pull/916)

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 技术日报

**日期**: 2026-03-11
**分类**: OpenClaw 生态系统

## 核心动态摘要

今日 OpenClaw 生态系统在重构和优化方面取得了显著进展。开发者 @jlia0 贡献了多项重要更新，特别是将项目重构为 npm workspaces monorepo 架构，并采用 SQLite 取代 BullMQ/Redis 作为任务队列，极大地提升了项目结构性和效率。同时，CLI 交互体验也得到增强，通过引入 `@clack/prompts` 提升了用户交互的友好度。

---

## 今日重点关注

### 1. **架构重构与性能优化：Monorepo 与 SQLite 整合**

@jlia0 提交了 PR [#186]，对 TinyClaw 的核心架构进行了大刀阔斧的重构。项目被拆分为 5 个 npm workspace 包：`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`。更重要的是，原先复杂的 BullMQ/Redis 任务队列被一个简化的、约 160 行代码的 SQLite 队列（使用 `better-sqlite3` 并启用 WAL 模式）所取代。这一改变显著简化了代码库，并有望提升队列处理效率和部署便捷性。此 PR 已被成功 `closed`。

### 2. **CLI 用户体验升级：引入 `@clack/prompts`**

PR [#185] 由 @jlia0 提交，旨在全面迁移 CLI 的交互式提示。通过引入 `@clack/prompts` 库，原先基于 bash `read` 的 1500+ 行代码被替换为更现代、更安全、更具交互性的 TypeScript 模块。这将带来更好的输入验证、彩色的输出以及结构化的交互流程，显著改善开发者在使用 CLI 工具时的体验。此 PR 仍在 `open` 状态，属于开发者近期持续优化的一部分。

### 3. **构建系统优化与 Git 忽略规则更新**

为了配合 Monorepo 的重构，PR [#187]（已 `closed`，由 @jlia0 提交）修复了由于并行构建导致的 TS 依赖问题，通过使用 `tsc --build` 来正确遵循项目依赖顺序。此外，PR [#188]（已 `closed`，由 @jlia0 提交）向 `.gitignore` 添加了 `*.tsbuildinfo`，这是 TypeScript 增量编译产生的缓存文件，不应被纳入版本控制，进一步保持了代码库的整洁。

---

## 持续讨论与近期更新

*   **模块化通道与 TUI 示例**: PR [#172]（`open` 状态，由 @dagelf 提交）进一步推进了通道的模块化工作，并添加了一个 TUI 通道的示例，显示了社区在扩展和完善系统功能方面的持续努力。
*   **UI 简化与事件优化**: PR [#183]（`open` 状态，由 @jlia0 提交）移除冗余的 `message_received` 事件，并简化了 Office UI，使其只显示必要的聊天信息。这一微调旨在提升 UI 的清晰度和效率。
*   **任务自动化**: PR [#182]（`open` 状态，由 @jlia0 提交）实现了将任务拖拽至“In Progress”列时自动触发代理的功能，消除了之前需要手动点击“Send”按钮的额外步骤，优化了工作流程。

---

## 社区关注点分析

从近期的 PR 活动来看，社区（主要由贡献者 @jlia0 主导）正聚焦于以下几个关键领域：

1.  **代码结构与可维护性**: Monorepo 的引入和模块化是近期最显著的趋势，旨在提升项目的可维护性和团队协作效率。
2.  **开发效率与用户体验**: 对 CLI 工具的现代化改造（如使用 `@clack/prompts`）和工作流程的自动化（如任务自动触发）反映了对开发者和用户体验的重视。
3.  **性能与资源优化**: 将任务队列从 Redis/BullMQ 迁移到 SQLite 预示着对资源占用和部署复杂性的考量，尤其适合轻量级或对基础设施要求不高的场景。

---

## 参考链接

*   PR [#186]: [refactor: split monolith into npm workspaces monorepo with SQLite queue](https://github.com/TinyAGI/tinyclaw/pull/186)
*   PR [#172]: [Modularized channels and added a TUI channel as example](https://github.com/TinyAGI/tinyclaw/pull/172)
*   PR [#185]: [refactor(cli): migrate interactive prompts to @clack/prompts](https://github.com/TinyAGI/tinyclaw/pull/185)
*   PR [#188]: [chore: gitignore tsbuildinfo files](https://github.com/TinyAGI/tinyclaw/pull/188)
*   PR [#187]: [fix(build): use tsc --build to respect dependency order in monorepo](https://github.com/TinyAGI/tinyclaw/pull/187)
*   PR [#183]: [Remove message_received event and simplify office UI](https://github.com/TinyAGI/tinyclaw/pull/183)
*   PR [#182]: [Auto-trigger agent when task moves to in progress](https://github.com/TinyAGI/tinyclaw/pull/182)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报 (2026-03-11)

## 摘要

今日 LobsterAI 项目社区活跃，**新增 7 个 Issues**，主要围绕本地模型调用、IM 平台通知、以及特定环境下的功能缺失和 Bug 反馈。在 **Pull Requests 方面，新增 8 个 PR**，其中多项 PR 涉及 IM 平台集成（飞书、Discord、Telegram）以及核心功能优化，如异步消息处理和多文件上传支持，显示出项目在集成性和稳定性方面持续推进。

## 今日最值得关注的动态

1.  **IM 平台集成与优化加速：** 今日新增多个 PR，如 [#364](https://github.com/netease-youdao/LobsterAI/pull/364)（飞书 IM 支持）、[#363](https://github.com/netease-youdao/LobsterAI/pull/363)（Discord 使用 OpenClaw 实现）、[#359](https://github.com/netease-youdao/LobsterAI/pull/359)（Telegram Bug 修复）和 [#356](https://github.com/netease-youdao/LobsterAI/pull/356)（Telegram 集成）。同时，PR [#374](https://github.com/netease-youdao/LobsterAI/pull/374)（及同系列 PR [#373](https://github.com/netease-youdao/LobsterAI/pull/373)，[#372](https://github.com/netease-youdao/LobsterAI/pull/372)）提出使用异步消息处理以防止 IM 平台超时，这表明社区在提升多平台互联的稳定性和用户体验方面投入了大量精力。
2.  **本地模型调用及环境问题反馈：** 新建的 Issues [#370](https://github.com/netease-youdao/LobsterAI/issues/370) 报告了因输入 token 数超过模型限制导致的 API 错误，以及 [#368](https://github.com/netease-youdao/LobsterAI/issues/368) 指出了在 Ubuntu 24.04 LTS 环境下自带安装包打不开的问题。此外，[#360](https://github.com/netease-youdao/LobsterAI/issues/360) 反映了本地部署的 Qwen 模型调用出现 502 错误，这些都显示了用户在配置和使用本地模型时遇到的挑战。
3.  **核心功能增强：** PR [#371](https://github.com/netease-youdon/LobsterAI/pull/371) 提出了“主界面附件支持多文件选择”的功能增强，这有望提升用户在处理文件时的便捷性。

## 社区关注点分析

**Issue 活跃区：**

*   **本地模型集成挑战（Issues #370, #360, #365, #362）：** 用户对本地模型的配置、调用及与不同类型模型（如 LM Studio, 腾讯 CodePaln）的兼容性提出了疑问和反馈。特别是 token 超限和 502 错误是用户体验的直接障碍。
*   **IM 和通知问题（Issues #369）：** 定时任务的通知功能缺失以及 IM 机器人配置问题是用户关注的痛点，这直接影响了 LobsterAI 作为助手工具的及时反馈能力。
*   **特定平台/环境 Bug（Issues #368, #361）：** Ubuntu 24.04 下安装包无法打开，以及聊天界面图片显示异常，表明在不同操作系统和使用场景下仍存在兼容性问题。
*   **功能请求（Issues #365, #362, #120, #320）：** 支持 LM Studio、腾讯 CodePaln，以及企业微信渠道的需求持续出现，反映了用户对 LobsterAI 扩展性和集成性的期待。

**Pull Request 熱點：**

*   **IM 平台多渠道支持（PRs #364, #363, #359, #356）：** 社区贡献者显著推进了对飞书、Discord、Telegram 等 IM 平台的集成和优化。
*   **核心功能改进（PRs #374, #371, #367）：** 异步消息处理以提升 IM 平台稳定性，附件多文件选择，以及对 streamable HTTP 配置的标准化，展示了对产品核心体验的持续打磨。
*   **代码质量与规范（PR #5）：** ESLint 配置和问题的修复，显示了项目对代码规范和维护的重视。

## 近期更新与持续讨论

*   Issue **[#120](https://github.com/netease-youdao/LobsterAI/issues/120) "需要企业微信渠道"** 在 2026-03-10 有更新（评论），表明此功能需求仍在活跃讨论中。
*   Issue **[#320](https://github.com/netease-youdao/LobsterAI/issues/320) "请问能否配置出龙虾军团呢?"** 在 2026-03-10 有更新（评论），该 Issue 讨论了本地运行多个 Agent 的可能性。
*   Pull Request **[#5](https://github.com/netease-youdao/LobsterAI/pull/5) "fix: 配置 ESLint 规则并修复未使用变量问题"** 在 2026-03-10 有更新（状态变更为 open），显示代码质量相关的 PR 正在推进中。

---

## 参考链接

**Issues:**

*   [#370](https://github.com/netease-youdao/LobsterAI/issues/370)
*   [#369](https://github.com/netease-youdao/LobsterAI/issues/369)
*   [#368](https://github.com/netease-youdao/LobsterAI/issues/368)
*   [#366](https://github.com/netease-youdao/LobsterAI/issues/366)
*   [#365](https://github.com/netease-youdao/LobsterAI/issues/365)
*   [#362](https://github.com/netease-youdao/LobsterAI/issues/362)
*   [#360](https://github.com/netease-youdao/LobsterAI/issues/360)
*   [#361](https://github.com/netease-youdao/LobsterAI/issues/361)
*   [#120](https://github.com/netease-youdao/LobsterAI/issues/120)
*   [#320](https://github.com/netease-youdao/LobsterAI/issues/320)
*   [#357](https://github.com/netease-youdao/LobsterAI/issues/357)
*   [#358](https://github.com/netease-youdao/LobsterAI/issues/358)

**Pull Requests:**

*   [#375](https://github.com/netease-youdao/LobsterAI/pull/375)
*   [#374](https://github.com/netease-youdao/LobsterAI/pull/374)
*   [#373](https://github.com/netease-youdao/LobsterAI/pull/373)
*   [#372](https://github.com/netease-youdao/LobsterAI/pull/372)
*   [#371](https://github.com/netease-youdao/LobsterAI/pull/371)
*   [#5](https://github.com/netease-youdao/LobsterAI/pull/5)
*   [#367](https://github.com/netease-youdao/LobsterAI/pull/367)
*   [#364](https://github.com/netease-youdao/LobsterAI/pull/364)
*   [#363](https://github.com/netease-youdao/LobsterAI/pull/363)
*   [#359](https://github.com/netease-youdao/LobsterAI/pull/359)
*   [#356](https://github.com/netease-youdao/LobsterAI/pull/356)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:59:23.219Z