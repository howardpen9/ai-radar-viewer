# 🦞 OpenClaw 生态系统 日报 — 2026-03-11

## 横向对比

好的，这是一份基于您提供的 GitHub 动态的 OpenClaw 生态系统横向对比分析技术日报：

# OpenClaw 生态系统 横向对比分析日报

**日期**: 2026-03-11

## 1. 生态全景

今日 OpenClaw 生态系统整体呈现出**活跃的开发、功能拓展与稳定性修复并行的态势**。尽管部分项目（如 OpenClaw 本身）正在经历版本回归带来的阵痛，但整个生态仍然在积极拥抱新模型、新渠道、优化开发者体验以及提升安全性和可靠性。**多项目对 LLM 普及至关重要的本地模型支持、跨平台通信渠道的集成、以及 Agent 智能化的深入探索，构成了当前生态发展的主旋律。**

## 2. 活跃度对比

| 项目名称           | GitHub URL                               | 今日新增 Issues / PRs (约计) | 关键关注点                                                                                                                            |
| :----------------- | :--------------------------------------- | :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | https://github.com/zeroclaw-labs/zeroclaw  | 15+                          | 扩展 Provider（Bailian）、Channel（Notion）、CLI/Web 交互优化、GLIBC 兼容性 Bug 修复。                                                                 |
| [OpenClaw](https://github.com/openclaw/openclaw) | https://github.com/openclaw/openclaw     | 20+                          | **版本回归 (Cron, Kimi K2.5)**、OAuth 流程问题、UI 优化 (Dashboard v2)、macOS 稳定性。                                                                   |
| [PicoClaw](https://github.com/sipeed/picoclaw) | https://github.com/sipeed/picoclaw       | 15+                          | 多渠道 (QQ, Telegram, Mattermost, 飞书, 企业微信) 集成增强、Agent 核心重构、Telegram 论坛话题支持、核心功能 Bug 修复。                                                |
| [NanoBot](https://github.com/HKUDS/nanobot) | https://github.com/HKUDS/nanobot       | 10+                          | **Ollama 本地模型支持**、`restrictToWorkspace` 安全修复、Deepseek Reasoner 兼容性、安全性加固、Endpoint Channel 引入。                                                |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI) | https://github.com/netease-youdao/LobsterAI | 10+                          | IM 通知效率优化（异步处理）、本地模型调用问题（qwen3_235b, LM-Studio）、飞书/Discord 集成、Token 超限问题、部署兼容性。                                                  |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw) | https://github.com/TinyAGI/tinyclaw     | 5+                           | **架构重构** (Monorepo + SQLite Queue)、CLI 体验升级 (`@clack/prompts`)、构建优化、核心功能优化（TUI Channel, Auto-trigger agent）。                                       |
| [IronClaw](https://github.com/nearai/ironclaw) | https://github.com/nearai/ironclaw     | 15+                          | **安全风险高发** (SIGHUP, N+1, WASM 兼容性)、LLM 参数处理、CI/CD 优化 (AI 审查)、国际化支持、CLI/Web 功能增强。                                                        |
| [NanoClaw](https://github.com/qwibitai/nanoclaw) | https://github.com/qwibitai/nanoclaw     | 20+                          | **Agent 学习系统 Epic**、多渠道集成 (WhatsApp, Gmail, Telegram)、安全性加固 (凭证代理, 容器权限)、Telegram 论坛话题、CLI 交互改进。                                         |

*注：新增 Issues/PRs 数量为该日报覆盖时间段内（约近 24-72 小时）代码仓库活动量的粗略估计，侧重于活跃度较高的项目。*

## 3. 共同趋势

*   **多渠道集成与互操作性**: 几乎所有项目都在积极拓展支持的通讯渠道（IM、社交媒体、邮件等），如 PicoClaw 集成 Mattermost/企业微信，NanoBot/NanoClaw/LobsterAI/Zeroclaw 均有涉及 IM 或第三方服务集成。
*   **本地模型支持与兼容性**: NanoBot 引入 Ollama 支持，LobsterAI/OpenClaw 修复/支持特定模型（如 Qwen, Kimi），IronClaw/Zeroclaw 优化 LLM 参数处理，都表明了对用户在本地或多样化 LLM 部署需求的积极响应。
*   **Agent 智能化与自主性**: PicoClaw 计划重构 Agent 核心循环，NanoClaw 启动“学习系统” Epic，IronClaw/Zeroclaw 也在围绕 Agent 能力进行功能增强，显示了将 Agent 往更智能、更自主方向发展的趋势。
*   **开发者体验与工程化**: TinyClaw 的 Monorepo 迁移、CLI 现代化，Zeroclaw/IronClaw 对 CLI/Web 交互的优化，以及 IronClaw/NanoClaw 对 CI/CD 和构建流程的改进，都体现了对提升开发效率和项目可维护性的重视。
*   **安全与稳定性**: IronClaw 报告一系列高危安全 Bug，NanoBot 修复安全漏洞，OpenClaw 集中修复回归 Bug，NanoClaw 提升容器安全性，都表明了在基础稳定性和安全性上的持续投入。

## 4. 值得关注

1.  **OpenClaw 2026.3.8 版本回归 Bug 的影响范围与修复速度**: OpenClaw 本身作为核心项目，其 `cron` 功能、Kimi 模型配置等 Bug 是生态中的“重灾区”，其修复进展将直接影响到依赖 OpenClaw 的其他项目（潜在或实际）以及用户体验。**社区的反馈热烈且集中，需要密切关注其进展。**
2.  **NanoClaw 的“学习系统” Epic 与 Agent 智能化飞跃**: NanoClaw [#907](https://github.com/qwibitai/nanoclaw/issues/907) 启动的 Agent 学习系统，包括 FTS5 搜索、结构化内存、技能自创建等，是**向更高级 Agent 演进的明确信号。**如果成功实现，将显著提升 NanoClaw 及相关 AI Agent 应用的能力边界。
3.  **TinyClaw 的架构重构与工程化迈进**: TinyClaw [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 的 Monorepo 迁移和 SQLite 队列引入，标志着该项目在**工程化和可扩展性方面跨越式发展。**这种重构模式可能为 OpenClaw 生态中的其他小型项目提供借鉴。

---

## 各工具详细报告

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw (zeroclaw-labs/zeroclaw) 技术日报 (2026-03-11)

## 概览

今日 Zeroclaw 项目围绕 **稳定性修复**、**新功能集成** 和 **开发者体验提升** 展开。多项 **[🆕 新建]** 的 Issue 和 Pull Request（PR）预示着社区对项目持续的贡献和关注。特别是围绕 **Provider 支持**、**Channel 集成** 以及 **CLI/Web 交互优化** 的议题受到了广泛关注。

## 社区焦点与热门动态

### 1. 提升 CLI 和 Web 交互体验 (多项 PRs)

社区近期提交了多项 PR，旨在优化用户与 Zeroclaw 的交互方式。
*   `#3147 [Feature]: add zeroclaw operational skill for CLI and REST API usage` 旨在为 Claude Code 用户提供专用的技能，以便更便捷地探索 CLI 命令和 API 端点，这将显著提升使用效率。
*   `#3144 [Feature]: auto-expand chat composer` 提案通过实现可自动扩展的聊天输入框，解决了长文本输入时编辑不便的问题，提升了 Web 界面的用户体验。
*   `#3101 [Feature]: add restart and get-paircode subcommands` 新增了 Gateway 的 `restart` 和 `get-paircode` 子命令，用户无需停止 Gateway 即可进行管理操作，进一步优化了 Gateway 的运维体验。

### 2. 扩展 Provider 生态与集成 (多项 PRs & Issues)

Zeroclaw 持续拓展其支持的 LLM Provider 和集成能力。
*   `#3158 [Feature]: add Bailian (Aliyun) provider support` 引入了对 Alibaba Cloud Bailian (百炼) 的支持，为用户提供了更多云服务集成选项。
*   `#3157 [Feature]: add Notion channel and tool integration` 提案实现了 Notion Channel 和相关工具的集成，支持 Notion 页面的读写操作，将 LLM 能力与 Notion 工作流深度结合。
*   虽然 [#3059] 提到“cannot use ali yun bailian coding plan”，但 `#3158` 的 PR 预示着对该问题的积极解决。

### 3. 稳定性与安全性修复 (多项 Issues)

项目也积极响应并处理用户报告的 Bug 和安全问题。
*   `#3070 [Bug]: version GLIBC_2.39' not found` 是一个影响运行时环境的严重 Bug，与 GLIBC 版本不兼容相关，已引起社区高度关注（7 条评论）。
*   `#3079 [Bug]: Ollama+Qwen tool-calling regression: thinking-only output, malformed <tool_call>, dropped actions` 反映了 Ollama 和 Qwen Providers 在工具调用方面出现的回归问题，影响了核心功能。
*   `#3098 [Bug]: too many build error for channel-lark` 指出了 Lark channel 在构建过程中遇到的错误，影响了该渠道的可用性。
*   `#3135 [Bug]: cargo clippy pre-push hook fails on Windows due to platform-unaware sync_directory calls` 这是一个在 Windows 上影响开发者工作流的构建问题。

## 今日最值得关注的动态

1.  **Provider 生态扩展与核心功能优化**
    *   `#3158 [Feature]: add Bailian (Aliyun) provider support` 和 `#3157 [Feature]: add Notion channel and tool integration` 的 **[🆕 新建]** PR，分别代表了对云服务 LLM（Bailian）和 Notion 工作流集成的重大进展，显著扩展了 Zeroclaw 的潜在应用场景。
    *   `#3079 [Bug]: Ollama+Qwen tool-calling regression` 是一个高优先级 Bug，因为它直接影响了部分 LLM Provider 的核心工具调用能力。

2.  **开发者体验与易用性提升**
    *   `#3144 [Feature]: auto-expand chat composer` 和 `#3147 [Feature]: add zeroclaw operational skill for CLI and REST API usage` **[🆕 新建]** 的 PR，分别聚焦于提升 Web 界面的输入体验和为开发者（Claude Code 用户）提供专门的辅助技能，体现了项目对开发者和终端用户体验的重视。

3.  **关键 Bug 修复与稳定性保障**
    *   `#3070 [Bug]: version GLIBC_2.39' not found` 作为一个高严重性的运行时 Bug，其解决进展将直接影响用户部署和运行 Zeroclaw 的能力。

## 持续讨论与近期更新

*   **[持续讨论]** `#3070 [Bug]: version GLIBC_2.39' not found`：此 Bug 占据了今日 Issue 榜首（共 7 条评论），表明其影响广泛且社区正在积极寻求解决方案。
*   **[近期更新]** `#1478 "[Feature]: 除了安全,什么功能也没有."`：该 Issue 尽管建立时间较早，但在 2026-03-10 有更新，反映了用户对于 Zeroclaw 安全限制与可用性之间平衡的持续关注和讨论。

## 参考链接

**Issues:**
*   `#3070`: [Bug]: version `GLIBC_2.39' not found](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
*   `#3079`: [Bug]: Ollama+Qwen tool-calling regression: thinking-only output, malformed <tool_call>, dropped actions](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)
*   `#3098`: [Bug]: too many build error for channel-lark](https://github.com/zeroclaw-labs/zeroclaw/issues/3098)
*   `#3059`: [Feature]: can not use  ali yun  bailian  coding plan ,](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)
*   `#3147`: [Feature]: add zeroclaw operational skill for CLI and REST API usage](https://github.com/zeroclaw-labs/zeroclaw/issues/3147)
*   `#3144`: [Feature]: auto-expand chat composer](https://github.com/zeroclaw-labs/zeroclaw/issues/3144)
*   `#1478`: [Feature]: 除了安全,什么功能也没有.](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)

**Pull Requests:**
*   `#3158`: [feat: add Bailian (Aliyun) provider support](https://github.com/zeroclaw-labs/zeroclaw/pull/3158)
*   `#3157`: [feat(notion): add Notion channel and tool integration](https://github.com/zeroclaw-labs/zeroclaw/pull/3157)
*   `#3147`: [feat(skills): add zeroclaw operational skill for CLI and REST API usage](https://github.com/zeroclaw-labs/zeroclaw/pull/3147)
*   `#3144`: [feat(web): auto-expand chat composer](https://github.com/zeroclaw-labs/zeroclaw/pull/3144)
*   `#3101`: [feat(gateway): add restart and get-paircode subcommands](https://github.com/zeroclaw-labs/zeroclaw/pull/3101)

</details>

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw 生态系统日报 (2026-03-11)

## 核心动态

### 1. **版本 2026.3.8 引入回归 Bug，多个核心功能受影响**

近期发布的 OpenClaw 2026.3.8 版本似乎引入了一系列回归性 (regression) Bug，引发了社区的高度关注。多个 Issue 反映了 `cron` 功能异常（#41798, #40868, #42270, #42632, #42152, #42536, #42579, #42335），包括无法执行、超时以及与 `sessionTarget="isolated"` 结合时出现的问题。此外，Kimi K2.5 配置验证失败 (#41445, #41690) 以及工具调用回归 (#41462, #41297, #42117) 也是普遍存在的问题。OpenAI Codex 远程 OAuth 流程中断 (#41885) 和 macOS 应用重启稳定性问题 (#41315, #41570, #42530) 也被用户报告。详细的回归分析和修复工作正在进行中。

### 2. **工具链与配置问题成为焦点：Kimi K2.5、OAuth 及依赖管理**

多个新建 Issue 集中反映了与特定模型适配器、远程认证流程以及依赖安装相关的问题。

*   **Kimi K2.5 配置与工具调用**：Issue #41445 和 #41690 详细描述了在使用 Kimi K2.5 模型时遇到的配置验证错误，具体表现为 `requiresOpenAiAnthropicToolPayload` 键未知。同时，Issue #41297 和 #42117 指出 Kimi/Moonshot 适配器在 v2026.3.7 和 v2026.3.8 版本中存在工具调用回归，模型将工具调用以纯文本而非结构化 `tool_use` 内容输出。
*   **OAuth 认证问题**：Issue #41885 报告了 OpenAI Codex 远程 OAuth 流程在 VPS/SSH 环境下出现挂起问题，用户在粘贴重定向 URL 后无法完成认证。
*   **安装与依赖**：Issue #42494 反映了在安装 OpenClaw 时遇到的困难，npm 和 pnpm 进程被意外终止。

### 3. **UI 与开发者体验持续优化，但仍有待完善**

Pull Request 方面，社区在 UI 优化和核心功能改进上持续发力。

*   **Dashboard v2 重构**：PR #41503 是 dashboard-v2 视图重构的最后一部分，完成了视图重构和应用连接，旨在提升用户界面体验。
*   **Gateway 服务管理**：PR #42787 修复了 daemon 安装的 gateway 服务会丢失 `gateway.bind` 配置的问题，解决了用户自定义绑定地址后的服务启动问题。PR #42784 则改进了 macOS LaunchAgent 重启机制，解决了 gateway `restart` 命令可能导致的静默失败。
*   **安全性与权限**：PR #42780 引入了针对 `exec` 和文件工具的路径范围可读写执行 (RWX) 权限控制，以增强安全性。

## 近期更新与社区关注点

*   **Cron 功能稳定性**：大量 Issue 集中在 2026.3.8 版本中 `cron` 功能出现的稳定性问题，包括执行失败、超时和无响应。这表明 `cron` 功能在近期更新后遇到了严重的回归，社区正在积极反馈和寻求解决方案。
*   **模型适配器兼容性**：Kimi K2.5 和 Moonshot 适配器的问题是近期关于模型整合的核心痛点，用户期望更稳定的模型接入和工具调用能力。
*   **macOS 用户体验**：macOS 平台的网关服务管理和应用稳定性问题（如应用强制终止网关、LaunchAgent 重启失败）是 Mac 用户关注的焦点，影响了日常使用。
*   **OAuth 认证流程**：远程开发环境下的 OAuth 认证流程问题，是远程工作和跨平台使用 OpenClaw 的用户面临的挑战。

## 今日重点关注

1.  **OpenClaw 2026.3.8 回归 Bug：Cron 功能集体失效，Kimi 模型配置异常** - 多个新建 Issue (#41798, #40868, #41445, #41690) 指出 2026.3.8 版本在 `cron` 功能和 Kimi 模型配置方面存在严重回归，影响用户正常使用。
2.  **远程 OAuth 流程中断** - Issue #41885 报告了 OpenAI Codex OAuth 认证在远程环境下的挂起问题，阻碍了部分用户远程配置和使用。
3.  **UI 优化与 Dashboard v2 重构** - PR #41503 的完成标志着 Dashboard v2 视图重构的重要里程碑，预示着用户界面的持续改进。

---

## 参考链接

### Issues
*   [#41445 Kimi K2.5 config validation fails - unrecognized key 'requiresOpenAiAnthropicToolPayload'](https://github.com/openclaw/openclaw/issues/41445)
*   [#41690 Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload"](https://github.com/openclaw/openclaw/issues/41690)
*   [#42270 OpenClaw 2026.3.8 regression: empty agent payloads + websocket 1006 closures with local LM Studio backend](https://github.com/openclaw/openclaw/issues/42270)
*   [#41885 OpenAI Codex remote OAuth hangs after pasting redirect URL in VPS/SSH flow](https://github.com/openclaw/openclaw/issues/41885)
*   [#41798 Cron isolated session not executing in v2026.3.8](https://github.com/openclaw/openclaw/issues/41798)
*   [#41315 macOS LaunchAgent restart instability: gateway restart often leaves service not loaded; install+restart required](https://github.com/openclaw/openclaw/issues/41315)
*   [#41462 Regression in tool dispatching between 2026.3.1 → 2026.3.2.](https://github.com/openclaw/openclaw/issues/41462)
*   [#41297 kimi-coding/k2p5 tool calling regression persists in v2026.3.8 — workaround: downgrade to v2026.3.2](https://github.com/openclaw/openclaw/issues/41297)
*   [#42117 [2026.3.8] Kimi/Moonshot adapter leaks tool calls as plaintext](https://github.com/openclaw/openclaw/issues/42117)
*   [#42494 Can't install, npm and pnpm keep getting killed](https://github.com/openclaw/openclaw/issues/42494)
*   [#41570 gateway restart fails - launchd service not found](https://github.com/openclaw/openclaw/issues/41570)
*   [#42530 Mac app kills running gateway on launch despite disable-launchagent sentinel](https://github.com/openclaw/openclaw/issues/42530)
*   [#40868 Cron isolated sessions timing out after 2026.3.8 update](https://github.com/openclaw/openclaw/issues/40868)
*   [#42632 cron `sessionTarget="isolated"` + `agentTurn` can time out on a minimal prompt](https://github.com/openclaw/openclaw/issues/42632)
*   [#42152 cron run returns enqueued but never executes](https://github.com/openclaw/openclaw/issues/42152)
*   [#42335 Cron jobs fail to execute via web UI manual trigger in v2026.3.8 (regression from v2026.3.7)](https://github.com/openclaw/openclaw/issues/42335)

### Pull Requests
*   [#41858 fix: add depth limits to chokidar watchers to prevent FD exhaustion](https://github.com/openclaw/openclaw/pull/41858)
*   [#41503 feat(ui): dashboard-v2 views refactor (slice 3/3 of dashboard-v2)](https://github.com/openclaw/openclaw/pull/41503)
*   [#42787 Daemon: preserve gateway bind mode in service args](https://github.com/openclaw/openclaw/pull/42787)
*   [#42784 fix(daemon): use kickstart -kp for atomic LaunchAgent restart](https://github.com/openclaw/openclaw/pull/42784)
*   [#42780 Security: add path-scoped RWX permissions for exec and file tools](https://github.com/openclaw/openclaw/pull/42780)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报

**日期**: 2026-03-11

## 版本发布亮点

今天，PicoClaw 发布了 `v0.2.1-nightly.20260311.9cd2d218` 版本。此夜间构建包含了多项重要更新，尤其值得关注的是：

*   **QQ 频道增强 (#1208)**：增强了 QQ 频道的功能，增加了对群组、输入状态、媒体支持的支持，并对 URL 进行了净化处理。
*   **Docker 启动器**：引入了 `launcher bun`，简化了 Docker 环境下的启动流程。
*   **Telegram Forum Topics 支持 (#1291)**：整合了对 Telegram 论坛话题（Threads）的支持，提升了在 Telegram 频道中的对话组织能力。
*   **调试模式增强 (#1207)**：改进了调试模式，增加了 `--debug-mode-no-truncate` 选项，允许在调试时更多地保留信息，避免截断。

## 社区关注点分析

### 热门 Issues

*   **Telegram 功能增强与 Bug 修复**：
    *   `#1270` [Feature] Telegram Forum Topics Support for PicoClaw：社区热切期待为 Telegram 频道加入论坛话题支持，以改善对话的组织性。
    *   `#1328` [Feature] Native Telegram reactions for low-noise acknowledgements：用户希望通过 Telegram 原生表情回应来简化低噪音的交互确认。
    *   `#1298` [BUG] Telegram slash command (/help /model etc) broken：用户报告 Telegram 斜杠命令失效的问题。
    *   `#1280` [BUG] About IRC -Allow From：IRC 频道配置中，允许来源（allow\_from）字段使用了中文逗号，导致配置错误。
    *   `#1279` [BUG] About IRC -auto join channels：IRC 频道自动加入频道功能存在 Bug，API 返回 400 错误。
*   **Agent 核心能力提升**：
    *   `#1316` [Agent refactor] Event-driven agent loop with hooks, interrupts, and steering：这是对 Agent 核心循环的重大重构提案，旨在使其更具可观测性、可中断性和可扩展性。
    *   `#1278` [Feature] Subagent support for tool access and inheritance (read\_file, write\_file, exec, etc.)：允许子 Agent 明确配置对工具的访问权限，这对于自动化工作流至关重要。
*   **多渠道兼容性与 Bug 修复**：
    *   `#1281` [BUG] Feishu messages doesn't show user\_id of @ and msg sender：飞书频道消息无法显示被 `@` 用户和发送者的 `user_id`。
    *   `#1307` [BUG] feishu(飞书) auth expired after 12h：飞书认证凭证在 12 小时后过期，导致 API 调用失败。
    *   `#1276` 对接企业微信新出的【智能机器人长链接模式】：社区希望支持企业微信智能机器人长链接模式，以方便内网使用。

### 热门 Pull Requests

*   **多渠道集成与优化**：
    *   `#1288` feat(channels): add Mattermost channel support：新增对 Mattermost 频道的支持，并优化了线程识别和自动重连。
    *   `#1338` feat(channels): add wecom\_ws (WeCom WebSocket) channel support：新增企业微信 WebSocket (wecom\_ws) 频道支持，支持多种消息类型和群组策略。
    *   `#1336` feat(qq): support replay markdown/image/audio/video/files：为 QQ 频道增加了对 Markdown、图片、音频、视频和文件的发送及解析支持。
*   **核心功能 Bug 修复与增强**：
    *   `#1318` fix(feishu): invalidate cached token on auth error to enable retry recovery：修复了飞书认证 Token 失效后无法自动恢复的问题。
    *   `#1330` fix(session): sanitize '/' and '\' in session keys so forum topic key…：修复了在 Telegram 论坛话题等场景下，Session 键名中包含 `/` 或 `\` 导致的会话管理问题。
    *   `#1332` feat(tool): debug tool usage via channels：引入了通过频道实时反馈工具调用状态的功能，提高透明度。
    *   `#1284` feat: add anthropic-messages protocol for native Anthropic Messages API support：新增对 Anthropic Messages API 的原生支持，兼容 OpenCLaw 的配置模式。
*   **配置与构建优化**：
    *   `#1301` fix(config): support Chinese comma separator in allow\_from environment variables：修复了 `allow_from` 配置项在环境变量中使用中文逗号分隔符时失效的问题。
    *   `#1337` fix: resolve gateway binary path, pass --config flag, and clarify emp…：修复了网关启动过程中的二进制文件路径解析问题，以及配置 flag 的传递问题。

## 本日最值得关注的动态

1.  **多渠道集成持续推进**：今日发布了 `v0.2.1-nightly.20260311.9cd2d218` 夜间构建，其中包含了对 QQ 频道的多媒体和 URL 净化支持，同时社区 PR `1288` 增加了 Mattermost 支持，PR `1338` 更是带来了企业微信 WebSocket 支持，显示了 PicoClaw 在多平台通信方面的强大扩展能力。
2.  **Agent 核心架构重构提上日程**：Issue `#1316` 提出的“事件驱动 Agent 循环”是对 PicoClaw Agent 核心引擎的一次深度重构，预示着未来 Agent 将更加灵活、强大，并易于定制和扩展。
3.  **核心功能 Bug 修复与用户体验优化**：今日发布的夜间构建包含多项 Bug 修复，例如 QQ 频道特性增强、调试模式改进。同时，社区 PR `1318` 解决了飞书认证 Token 失效的问题，PR `1301` 修复了配置中的逗号分隔符问题，PR `1332` 引入的工具调用实时反馈功能，都直接提升了用户在使用 PicoClaw 时的稳定性和便捷性。

---

**参考链接**:

*   **Release**:
    *   [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
    *   [Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)
*   **Issues**:
    *   [#1270](https://github.com/sipeed/picoclaw/issues/1270)
    *   [#1328](https://github.com/sipeed/picoclaw/issues/1328)
    *   [#1298](https://github.com/sipeed/picoclaw/issues/1298)
    *   [#1280](https://github.com/sipeed/picoclaw/issues/1280)
    *   [#1279](https://github.com/sipeed/picoclaw/issues/1279)
    *   [#1316](https://github.com/sipeed/picoclaw/issues/1316)
    *   [#1278](https://github.com/sipeed/picoclaw/issues/1278)
    *   [#1281](https://github.com/sipeed/picoclaw/issues/1281)
    *   [#1307](https://github.com/sipeed/picoclaw/issues/1307)
    *   [#1276](https://github.com/sipeed/picoclaw/issues/1276)
    *   [#1208](https://github.com/sipeed/picoclaw/issues/1208)
    *   [#1291](https://github.com/sipeed/picoclaw/issues/1291)
    *   [#1207](https://github.com/sipeed/picoclaw/issues/1207)
*   **Pull Requests**:
    *   [#1288](https://github.com/sipeed/picoclaw/pull/1288)
    *   [#1338](https://github.com/sipeed/picoclaw/pull/1338)
    *   [#1318](https://github.com/sipeed/picoclaw/pull/1318)
    *   [#1330](https://github.com/sipeed/picoclaw/pull/1330)
    *   [#1332](https://github.com/sipeed/picoclaw/pull/1332)
    *   [#1284](https://github.com/sipeed/picoclaw/pull/1284)
    *   [#1301](https://github.com/sipeed/picoclaw/pull/1301)
    *   [#1337](https://github.com/sipeed/picoclaw/pull/1337)
    *   [#1336](https://github.com/sipeed/picoclaw/pull/1336)

</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报

**日期**: 2026-03-11 | **分组**: OpenClaw 生态系统

## 摘要

今日 NanoBot 生态系统活跃，社区用户踊跃提交 Issue 与 Pull Request，内容涵盖功能增强、Bug 修复及集成新模型/服务。尤为值得关注的是，Ollama 作为本地 LLM 提供商的支持被正式提出，以及针对 `restrictToWorkspace` 安全策略的绕过问题和 Matrix Channel 的可用性问题再次引发讨论，显示出社区对提升 NanoBot 的易用性、安全性与多模型兼容性的强烈需求。

## 新动态

### 1. **Ollama 本地 LLM 支持正式引入**

PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) 首次实现了对 Ollama 作为本地 LLM 提供商的原生支持。这一功能允许用户无需 API 密钥即可使用如 `nemotron-3-nano` 等本地模型，极大地增加了 NanoBot 的灵活性和部署选项，尤其适合预算有限或偏好本地部署的用户。

### 2. **`restrictToWorkspace` 安全机制绕过漏洞修复**

针对 Issue [#1817](https://github.com/HKUDS/nanobot/issues/1817) 反映的 `restrictToWorkspace` 安全策略可通过 `~`（波浪号）路径绕过的问题，PR [#1845](https://github.com/HKUDS/nanobot/pull/1845) 提出了修复方案。该 PR 增加了对 `~` 路径的检测，并使用 `expanduser()` 来正确展开用户主目录，从而加强了工作区访问的安全性。

### 3. **Deepseek Reasoner 对 `reasoning_content` 字段的兼容性问题得到解决**

Issue [#1834](https://github.com/HKUDS/nanobot/issues/1834) 指出了在使用 Deepseek Reasoner 时，`spawn` 工具创建子 Agent 报错缺少 `reasoning_content` 字段的问题。PR [#1848](https://github.com/HKUDS/nanobot/pull/1848) 和 PR [#1846](https://github.com/HKUDS/nanobot/pull/1846) 联合解决了此问题，通过在构建 Assistant 消息时保留 `reasoning_content` 和 `thinking_blocks`，确保了与 Deepseek Reasoner 等特定模型的兼容性。

## 社区关注点

*   **模型与服务集成**: 对 Ollama ([#1863](https://github.com/HKUDS/nanobot/pull/1863))、Deepseek 模型的支持（[#1834](https://github.com/HKUDS/nanobot/issues/1834), [#1848](https://github.com/HKUDS/nanobot/pull/1848)），以及对飞书 ([#1815](https://github.com/HKUDS/nanobot/issues/1815))、微信 ([#1819](https://github.com/HKUDS/nanobot/issues/1819)) 等国产化应用的支持需求持续存在。
*   **安全性**: `restrictToWorkspace` 的绕过问题（[#1817](https://github.com/HKUDS/nanobot/issues/1817), [#1845](https://github.com/HKUDS/nanobot/pull/1845)）是近期关注的焦点，显示用户对数据安全的高度重视。
*   **功能增强与 Bug 修复**:
    *   **记忆系统**: 内存合并未继承 Agent 温度和 `maxTokens` 配置的问题（[#1823](https://github.com/HKUDS/nanobot/issues/1823), [#1825](https://github.com/HKUDS/nanobot/pull/1825)）以及建议使用 SimpleMem 改善记忆功能（[#1818](https://github.com/HKUDS/nanobot/issues/1818)）反映了对记忆系统持久性和效率的关注。
    *   **Cron Job**: Cron Job 运行历史跟踪功能（[#1837](https://github.com/HKUDS/nanobot/issues/1837)）和 `nanobot cron` 命令在 v0.1.4.post4 中移除的 Bug（[#1816](https://github.com/HKUDS/nanobot/issues/1816)）表明社区对任务调度管理功能有明确的功能需求和 Bug 修复期待。
    *   **流式输出**: 建议增加结果流式输出（[#1860](https://github.com/HKUDS/nanobot/issues/1860)）是为了提升用户体验，允许实时查看模型输出。
*   **连接性与稳定性**: Matrix Channel 不工作（[#1300](https://github.com/HKUDS/nanobot/issues/1300)）以及 `SIGTERM` 导致意外退出的问题（[#1833](https://github.com/HKUDS/nanobot/issues/1833)）是影响用户正常使用的关键稳定性问题。

## 本日最值得关注的 1-3 个动态

1.  **[feat] Ollama 支持正式落地，本地 LLM 部署更自由** - PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) 带来了对 Ollama 的原生支持，显著降低了本地模型的使用门槛，为开发者提供了更多灵活选择。
2.  **[fix] `restrictToWorkspace` 安全绕过漏洞得到修复** - PR [#1845](https://github.com/HKUDS/nanobot/pull/1845) 解决了关键的安全隐患，增强了 NanoBot 的数据保护能力，回应了社区对安全性的关切。
3.  **[feat] 新增 Endpoint Channel，支持 OpenAI 兼容 API 交互** - PR [#1861](https://github.com/HKUDS/nanobot/pull/1861) 引入了一个新的 Endpoint Channel，允许外部应用通过 OpenAI 兼容的接口与 NanoBot 进行交互，为集成和二次开发打下了基础。

---

## 参考链接

*   **Issues**:
    *   [#1862](https://github.com/HKUDS/nanobot/issues/1862)
    *   [#1834](https://github.com/HKUDS/nanobot/issues/1834)
    *   [#193](https://github.com/HKUDS/nanobot/issues/193)
    *   [#1860](https://github.com/HKUDS/nanobot/issues/1860)
    *   [#1828](https://github.com/HKUDS/nanobot/issues/1828)
    *   [#1461](https://github.com/HKUDS/nanobot/issues/1461)
    *   [#1851](https://github.com/HKUDS/nanobot/issues/1851)
    *   [#1692](https://github.com/HKUDS/nanobot/issues/1692)
    *   [#1617](https://github.com/HKUDS/nanobot/issues/1617)
    *   [#1819](https://github.com/HKUDS/nanobot/issues/1819)
    *   [#1783](https://github.com/HKUDS/nanobot/issues/1783)
    *   [#1300](https://github.com/HKUDS/nanobot/issues/1300)
    *   [#1774](https://github.com/HKUDS/nanobot/issues/1774)
    *   [#1833](https://github.com/HKUDS/nanobot/issues/1833)
    *   [#1815](https://github.com/HKUDS/nanobot/issues/1815)
    *   [#1837](https://github.com/HKUDS/nanobot/issues/1837)
    *   [#1831](https://github.com/HKUDS/nanobot/issues/1831)
    *   [#640](https://github.com/HKUDS/nanobot/issues/640)
    *   [#1230](https://github.com/HKUDS/nanobot/issues/1230)
    *   [#1633](https://github.com/HKUDS/nanobot/issues/1633)
    *   [#1826](https://github.com/HKUDS/nanobot/issues/1826)
    *   [#1829](https://github.com/HKUDS/nanobot/issues/1829)
    *   [#1818](https://github.com/HKUDS/nanobot/issues/1818)
    *   [#1823](https://github.com/HKUDS/nanobot/issues/1823)
    *   [#1822](https://github.com/HKUDS/nanobot/issues/1822)
    *   [#1556](https://github.com/HKUDS/nanobot/issues/1556)
    *   [#1821](https://github.com/HKUDS/nanobot/issues/1821)
    *   [#1411](https://github.com/HKUDS/nanobot/issues/1411)
    *   [#1817](https://github.com/HKUDS/nanobot/issues/1817)
    *   [#1816](https://github.com/HKUDS/nanobot/issues/1816)
*   **Pull Requests**:
    *   [#1863](https://github.com/HKUDS/nanobot/pull/1863)
    *   [#1861](https://github.com/HKUDS/nanobot/pull/1861)
    *   [#1847](https://github.com/HKUDS/nanobot/pull/1847)
    *   [#1856](https://github.com/HKUDS/nanobot/pull/1856)
    *   [#1848](https://github.com/HKUDS/nanobot/pull/1848)
    *   [#1859](https://github.com/HKUDS/nanobot/pull/1859)
    *   [#1855](https://github.com/HKUDS/nanobot/pull/1855)
    *   [#1858](https://github.com/HKUDS/nanobot/pull/1858)
    *   [#1857](https://github.com/HKUDS/nanobot/pull/1857)
    *   [#1854](https://github.com/HKUDS/nanobot/pull/1854)
    *   [#1853](https://github.com/HKUDS/nanobot/pull/1853)
    *   [#1852](https://github.com/HKUDS/nanobot/pull/1852)
    *   [#1825](https://github.com/HKUDS/nanobot/pull/1825)
    *   [#1849](https://github.com/HKUDS/nanobot/pull/1849)
    *   [#1846](https://github.com/HKUDS/nanobot/pull/1846)
    *   [#1845](https://github.com/HKUDS/nanobot/pull/1845)
    *   [#1844](https://github.com/HKUDS/nanobot/pull/1844)
    *   [#1836](https://github.com/HKUDS/nanobot/pull/1836)
    *   [#1843](https://github.com/HKUDS/nanobot/pull/1843)
    *   [#1799](https://github.com/HKUDS/nanobot/pull/1799)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报

**日期**: 2026-03-11 | **分组**: OpenClaw 生态系统

## 核心动态

今日 LobsterAI 项目活跃度较高，社区围绕 `OpenClaw` 的集成、本地模型调用以及功能增强提出了多项 Issue 和 Pull Request。值得关注的是，有 PR 致力于提升 IM 平台的通知效率和稳定性，以及支持更多第三方服务集成。

### 1. **提升 IM 通知效率与稳定性**

`@mjnhmd` 提交了多个 PR (`#374`, `#373`, `#372`)，旨在改进IM平台的通知处理机制。通过引入异步消息处理 (`async message handler`)，该系列 PR 致力于防止IM平台因任务超时而中断，并支持后台消息处理、快速查询区分以及进度更新。这对于保障及时通知和提升用户体验至关重要。

### 2. **本地模型调用与集成**

社区用户对 LobsterAI 与本地模型服务的集成表现出持续关注。

*   `@aibuyouyu` 在 Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 中反映了本地部署的 `qwen3_235b` 模型在 LobsterAI 中调用报错 (`API Error: 502`) 的问题。
*   `@AndersHsueh` 在 Issue [#365](https://github.com/netease-youdao/LobsterAI/issues/365) 中提出了对 `LM-Studio` 的支持需求，表明用户希望 LobsterAI 能够更广泛地支持本地模型服务。

### 3. **功能增强与第三方集成**

*   `@liuzhq1986` 通过 PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371) 为主界面添加了附件多文件选择的功能，优化了用户交互体验。
*   PR [#364](https://github.com/netease-youdao/LobsterAI/pull/364) 和 [#363](https://github.com/netease-youdao/LobsterAI/pull/363) 分别实现了飞书IM和Discord对OpenClaw的支持，进一步扩展了 LobsterAI 的应用场景。

## 社区热点 Issue & Pull Requests

**热门 Issues:**

*   **Token 超限问题**: Issue [#370](https://github.com/netease-youdao/LobsterAI/issues/370) 反映了在使用 `API Error: 400` 时，用户输入和请求的 token 数超出模型上下文长度的问题。这表明在长文本处理和模型配置方面仍有优化空间。
*   **定时任务通知异常**: Issue [#369](https://github.com/netease-youdao/LobsterAI/issues/369) 指出定时任务无法收到钉钉机器人通知的问题，尽管 IM 机器人配置正常。这可能与版本更新或通知配置的细节有关。
*   **本地部署模型调用问题**: Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 和 [#368](https://github.com/netease-youdao/LobsterAI/issues/368) 分别反映了本地部署模型服务（如 `qwen3_235b`）和通过自定义deb安装包后无法正常使用的问题，显示了本地部署和集成方面仍存在挑战。

**热门 Pull Requests:**

*   **IM通知异步处理**: PR **`#374`**, **`#373`**, **`#372`** (均为 `@mjnhmd` 提交) 专注于解决IM平台的通知延迟和超时问题，通过异步化处理提升了消息推送的可靠性。
*   **附件多文件选择**: PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371) 成功为界面添加了多文件上传功能，是用户体验上的一项可用性改进。
*   **第三方IM集成**: PR **`#364`**（飞书）和 **`#363`**（Discord）的合并，标志着 LobsterAI 在多平台消息集成方面向前迈进了一步。

## 今日重点关注

1.  **IM 通知系统优化**: 异步消息处理 PR (`#374`, `#373`, `#372`) 的进展，有望显著提升 LobsterAI 在各种IM平台上的通知稳定性和实时性。
2.  **本地模型服务稳定性**: 来自 Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 的本地模型调用错误，以及 Issue [#365](https://github.com/netease-youdao/LobsterAI/issues/365) 对 `LM-Studio` 支持的需求，都指向了本地模型集成作为 LobsterAI 关键能力之一，需要持续关注和优化。
3.  **部署与兼容性**：Issue [#368](https://github.com/netease-youdao/LobsterAI/issues/368) 反映了在特定Ubuntu版本下安装后打开界面空白的问题，这提示了跨平台部署和兼容性测试的重要性。

---

## 参考链接

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

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 技术日报

**日期:** 2026-03-11
**分组:** OpenClaw 生态系统

## 今日焦点

今日 TinyClaw 生态系统展现出活跃的开发和重构态势。尤为值得关注的是 **PR #186** 提出的将项目从单体拆分为 npm workspaces monorepo 的重大架构调整，以及 **PR #185** 中使用 `@clack/prompts` 库改进 CLI 交互体验的努力。

---

## 核心动态

### 架构重构与模块化进步

-   **[PR #186](https://github.com/TinyAGI/tinyclaw/pull/186) 「refactor: split monolith into npm workspaces monorepo with SQLite queue」**：此 PR 是今日最重要的动态之一。它旨在将原有的单体架构重构为包含 `@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer` 五个 npm workspaces 的 monorepo。同时，引入了 `better-sqlite3` 实现了 SQLite 队列，替代了原有的 BullMQ/Redis 方案，这标志着项目在工程化和性能优化方面迈出了重要一步。此 PR 已近 3 天前建立，但近期有更新。
-   **[PR #172](https://github.com/TinyAGI/tinyclaw/pull/172) 「Modularized channels and added a TUI channel as example」**：进一步推动了项目的模块化进程，特别是在 channels 层面，并引入了一个 TUI (Text User Interface) channel 作为示例，这有助于提升用户体验和可扩展性。此 PR 已近 3 天前建立，但近期有更新。

### CLI 体验升级与构建优化

-   **[PR #185](https://github.com/TinyAGI/tinyclaw/pull/185) 「refactor(cli): migrate interactive prompts to @clack/prompts」**：该 PR 正在将原有的 bash 交互式提示迁移到使用 `@clack/prompts` TypeScript 库。这一改变将用更现代、更强大的 TypeScript CLI 模块替换大量 bash 代码，有望显著提升用户在命令行交互时的体验，提供更好的验证反馈、彩色输出和结构化交互。此 PR 已近 3 天前建立，但近期有更新。
-   **[PR #187](https://github.com/TinyAGI/tinyclaw/pull/187) 「fix(build): use tsc --build to respect dependency order in monorepo」**：为了解决 monorepo 重构后可能出现的构建顺序问题，此 PR 引入了 `tsc --build` 命令，以确保项目依赖关系的正确处理，避免并行构建可能导致的失败。此 PR 在今日新建并已关闭。
-   **[PR #188](https://github.com/TinyAGI/tinyclaw/pull/188) 「chore: gitignore tsbuildinfo files」**：一个辅助性的构建优化 PR，将 `*.tsbuildinfo` 文件添加到 `.gitignore` 文件中，避免了 TypeScript 增量构建缓存文件被提交到版本控制，保持仓库的整洁。此 PR 在今日新建并已关闭。

---

## 持续讨论与近期更新

*   **[PR #183](https://github.com/TinyAGI/tinyclaw/pull/183) 「Remove message_received event and simplify office UI」**：此 PR 移除了冗余的 `message_received` 事件，并简化了 office UI，仅展示用户输入和代理响应。这一优化旨在提升界面的清晰度和效率。此 PR 已近 3 天前建立，但近期有更新。
*   **[PR #182](https://github.com/TinyAGI/tinyclaw/pull/182) 「Auto-trigger agent when task moves to in progress」**：此 PR 实现了当任务状态变为“In Progress”时自动触发代理的功能，优化了工作流程，减少了用户手动操作的步骤。此 PR 已近 3 天前建立，但近期有更新。

---

## 社区关注点分析

从今日的 PR 数据来看，社区对**项目架构的现代化重构** (`#186`) 和**开发者体验的提升**（CLI 交互 ` #185`、构建优化 `#187`, `#188`）表现出高度关注。通过引入 monorepo 和更成熟的工具链，TinyClaw 正在朝着更健壮、易于维护和开发的工程化方向发展。同时，对核心功能的用户体验优化（如 `#183`, `#182`）也显示出项目在实际应用落地方面的持续打磨。

---

## 今日最值得关注的 1-3 个动态

1.  **[PR #186](https://github.com/TinyAGI/tinyclaw/pull/186)**：标志着 TinyClaw 项目在工程化上的重大飞跃，其 monorepo 架构和 SQLite 队列的引入将对项目的未来发展产生深远影响。
2.  **[PR #185](https://github.com/TinyAGI/tinyclaw/pull/185)**：对 CLI 交互的现代化改进，将显著提升开发者使用 TinyClaw 的易用性和效率。
3.  **[PR #172](https://github.com/TinyAGI/tinyclaw/pull/172)**：项目模块化的持续推进，特别是 TUI channel 的引入，为构建更丰富的用户界面和生态奠定了基础。

---

## 参考链接

*   [TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)
*   [PR #172](https://github.com/TinyAGI/tinyclaw/pull/172)
*   [PR #185](https://github.com/TinyAGI/tinyclaw/pull/185)
*   [PR #188](https://github.com/TinyAGI/tinyclaw/pull/188)
*   [PR #187](https://github.com/TinyAGI/tinyclaw/pull/187)
*   [PR #183](https://github.com/TinyAGI/tinyclaw/pull/183)
*   [PR #182](https://github.com/TinyAGI/tinyclaw/pull/182)
*   [PR #186](https://github.com/TinyAGI/tinyclaw/pull/186)

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 技术日报

**日期**: 2026-03-11 | **分组**: OpenClaw 生态系统

## 🚀 版本动态

### v0.17.0 发布，增强 LLM 参数处理与 CI 流程

近期的 **v0.17.0** 版本已正式发布，本次更新带来了多项重要改进：

*   **LLM 功能增强**: 新增了**按提供商过滤不支持的参数** ([#809](https://github.com/nearai/ironclaw/pull/809))，进一步优化了与不同 LLM 的兼容性。同时，**用户 ID 被持久化**并暴露给例行任务 ([#709](https://github.com/nearai/ironclaw/pull/709))，提升了任务追踪能力。
*   **CI/CD 流程优化**: 集成了**基于多代理 Claude 的链式晋升 PR 审查** ([#776](https://github.com/nearai/ironclaw/pull/776))，旨在提高代码审查的效率和质量。
*   **系统稳定性**: 添加了**后台进程来回收孤立的 Docker 容器** ([#634](https://github.com/nearai/ironclaw/pull/634))，有助于维护系统资源。

## 💬 社区焦点：Issues & Pull Requests

### 📈 **热门 Issue 洞察**

**新建 Issue 方面**，今日社区尤为关注潜在的**安全漏洞和稳定性问题**。Staging CI 机器人报告了大量高风险 Bug：

*   **[CRITICAL]** **不安全的 SIGHUP 信号处理与环境变数修改的竟态条件** ([#868](https://github.com/nearai/ironclaw/issues/868))，显示了处理系统信号时的并发风险。
*   **[CRITICAL]** **OpenAI API 默认模型不存在的配置错误** ([#867](https://github.com/nearai/ironclaw/issues/867))，指出 API 配置中的一个关键问题。
*   **[HIGH]** **内存分配失控与 N+1 查询模式** ([#859](https://github.com/nearai/ironclaw/issues/859), [#858](https://github.com/nearai/ironclaw/issues/858))，暴露了在处理 Secrets 时可能存在的性能和内存泄漏风险。
*   **[CRITICAL]** **在 WASM 工具安装中，默认工具 Artifacts 与主机 WIT 版本不兼容** ([#840](https://github.com/nearai/ironclaw/issues/840))，影响了新环境的部署和使用。

**持续讨论/近期更新**中，**#806** "Roadmap: adopt recent OpenClaw improvements from the 2026-02-24 to 2026-03-10 sweep" ([#806](https://github.com/nearai/ironclaw/issues/806)) 表明社区正积极规划整合 OpenClaw 的最新进展，以推动 IronClaw 的发展。

### 📣 **活跃 Pull Requests**

**新建 PR 方面**，国际化和功能增强成为焦点：

*   **feat(i18n): 为中文和英文增加了国际化支持** ([#896](https://github.com/nearai/ironclaw/pull/896))，这是一项重要的本地化工作，极大地扩展了用户的可及性。
*   **feat(doctor): 将诊断检查从 7 项扩展到 16 项** ([#822](https://github.com/nearai/ironclaw/pull/822))，旨在通过更全面的诊断，帮助用户在安装阶段就能发现和解决配置问题。
*   **feat(cli): 添加了管理计划例程的子命令** ([#844](https://github.com/nearai/ironclaw/pull/844))，为在无头服务器或 CI 流水线中管理例程提供了便利。
*   **feat(web): 增加了浅色主题及深色/浅色/系统切换** ([#853](https://github.com/nearai/ironclaw/pull/853))，响应了用户对 UI 界面的个性化需求，该 PR 也直接解决了 Issue [#761](https://github.com/nearai/ironclaw/issues/761)。

**持续更新/近期 PR** 则集中在修复关键 Bug 和代码重构：

*   **fix(agent): 阻止基于 thread_id 的跨用户上下文污染** ([#760](https://github.com/nearai/ironclaw/pull/760))，解决了安全性较高的上下文污染问题。
*   **fix: 释放锁，避免在发送通道时阻塞** ([#905](https://github.com/nearai/ironclaw/pull/905))，直接解决了 Staging CI 报告的 **[CRITICAL] Lock held across async I/O boundary blocks webhook processing** ([#869](https://github.com/nearai/ironclaw/issues/869)) 问题。

## 🎯 **今日焦点洞察**

1.  **安全意识的提升**: Staging CI 机器人发现了大量 **[CRITICAL]** 和 **[HIGH]** 级别的安全与稳定性问题（如 [#868](https://github.com/nearai/ironclaw/issues/868), [#840](https://github.com/nearai/ironclaw/issues/840), [#859](https://github.com/nearai/ironclaw/issues/859)），这表明社区对代码质量和潜在风险的关注度正在显著提高，对项目的长期健康发展至关重要。
2.  **多语言支持和用户体验**: PR [#896](https://github.com/nearai/ironclaw/pull/896) 的国际化进展以及 PR [#853](https://github.com/nearai/ironclaw/pull/853) 提供的浅色主题，都印证了项目正积极投入于提升用户体验和全球化兼容性，以吸引更广泛的用户群体。
3.  **框架升级与集成**: 版本 **v0.17.0** 的发布，特别是 LLM 参数处理的改进 ([#809](https://github.com/nearai/ironclaw/pull/809)) 和对 OpenClaw 改进的 Roadmap ([#806](https://github.com/nearai/ironclaw/issues/806))，表明 IronClaw 正在紧密跟随 AI 技术和相关框架的最新发展，保持其技术前沿性。

---

### 参考链接

*   IronClaw GitHub: [nearai/ironclaw](https://github.com/nearai/ironclaw)
*   Release: [v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)
*   Issue: [#809](https://github.com/nearai/ironclaw/pull/809)
*   Issue: [#709](https://github.com/nearai/ironclaw/pull/709)
*   Issue: [#776](https://github.com/nearai/ironclaw/pull/776)
*   Issue: [#634](https://github.com/nearai/ironclaw/pull/634)
*   Issue: [#806](https://github.com/nearai/ironclaw/issues/806)
*   Issue: [#840](https://github.com/nearai/ironclaw/issues/840)
*   Issue: [#868](https://github.com/nearai/ironclaw/issues/868)
*   Issue: [#867](https://github.com/nearai/ironclaw/issues/867)
*   Issue: [#761](https://github.com/nearai/ironclaw/issues/761)
*   Issue: [#766](https://github.com/nearai/ironclaw/issues/766)
*   Issue: [#811](https://github.com/nearai/ironclaw/issues/811)
*   Issue: [#859](https://github.com/nearai/ironclaw/issues/859)
*   Issue: [#858](https://github.com/nearai/ironclaw/issues/858)
*   Issue: [#819](https://github.com/nearai/ironclaw/issues/819)
*   Issue: [#816](https://github.com/nearai/ironclaw/issues/816)
*   Issue: [#815](https://github.com/nearai/ironclaw/issues/815)
*   Issue: [#814](https://github.com/nearai/ironclaw/issues/814)
*   Issue: [#813](https://github.com/nearai/ironclaw/issues/813)
*   Issue: [#828](https://github.com/nearai/ironclaw/issues/828)
*   Issue: [#827](https://github.com/nearai/ironclaw/issues/827)
*   Issue: [#826](https://github.com/nearai/ironclaw/issues/826)
*   Issue: [#825](https://github.com/nearai/ironclaw/issues/825)
*   Issue: [#823](https://github.com/nearai/ironclaw/issues/823)
*   Issue: [#873](https://github.com/nearai/ironclaw/issues/873)
*   Issue: [#872](https://github.com/nearai/ironclaw/issues/872)
*   Issue: [#871](https://github.com/nearai/ironclaw/issues/871)
*   Issue: [#870](https://github.com/nearai/ironclaw/issues/870)
*   Issue: [#869](https://github.com/nearai/ironclaw/issues/869)
*   Issue: [#817](https://github.com/nearai/ironclaw/issues/817)
*   Issue: [#812](https://github.com/nearai/ironclaw/issues/812)
*   Issue: [#860](https://github.com/nearai/ironclaw/issues/860)
*   Issue: [#818](https://github.com/nearai/ironclaw/issues/818)
*   Issue: [#824](https://github.com/nearai/ironclaw/issues/824)
*   Issue: [#866](https://github.com/nearai/ironclaw/issues/866)
*   Pull Request: [#896](https://github.com/nearai/ironclaw/pull/896)
*   Pull Request: [#917](https://github.com/nearai/ironclaw/pull/917)
*   Pull Request: [#885](https://github.com/nearai/ironclaw/pull/885)
*   Pull Request: [#822](https://github.com/nearai/ironclaw/pull/822)
*   Pull Request: [#760](https://github.com/nearai/ironclaw/pull/760)
*   Pull Request: [#915](https://github.com/nearai/ironclaw/pull/915)
*   Pull Request: [#831](https://github.com/nearai/ironclaw/pull/831)
*   Pull Request: [#911](https://github.com/nearai/ironclaw/pull/911)
*   Pull Request: [#905](https://github.com/nearai/ironclaw/pull/905)
*   Pull Request: [#850](https://github.com/nearai/ironclaw/pull/850)
*   Pull Request: [#851](https://github.com/nearai/ironclaw/pull/851)
*   Pull Request: [#796](https://github.com/nearai/ironclaw/pull/796)
*   Pull Request: [#844](https://github.com/nearai/ironclaw/pull/844)
*   Pull Request: [#853](https://github.com/nearai/ironclaw/pull/853)
*   Pull Request: [#839](https://github.com/nearai/ironclaw/pull/839)
*   Pull Request: [#758](https://github.com/nearai/ironclaw/pull/758)
*   Pull Request: [#757](https://github.com/nearai/ironclaw/pull/757)
*   Pull Request: [#916](https://github.com/nearai/ironclaw/pull/916)
*   Pull Request: [#912](https://github.com/nearai/ironclaw/pull/912)
*   Pull Request: [#845](https://github.com/nearai/ironclaw/pull/845)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报

**日期:** 2026-03-11 | **作者:** AI 技术分析师 | **分组:** OpenClaw 生态系统

## 摘要

今日 NanoClaw 项目在 GitHub 上呈现出活跃的开发态势，尤其在**新功能开发、平台稳定性提升以及安全性加固**方面有较多关注。近期围绕**多种通讯渠道集成（Telegram、WhatsApp、Gmail）、Agent 的学习与记忆能力增强、以及容器运行的安全性与兼容性**成为社区热议的焦点。

### 本日最值得关注的动态：

1.  **多渠道集成与 Agent 功能增强成为焦点：** 多个 Pull Request 提案，如 [#917](https://github.com/qwibitai/nanoclaw/pull/917) 旨在集成 WhatsApp/Gmail 渠道，支持语音、图像视觉和文件处理；[#931](https://github.com/qwibitai/nanoclaw/pull/931) （已合并）添加了 Telegram 渠道支持及 Agent Swarm 的 Bot Pool。这些都预示着 NanoClaw 正朝着更广泛的应用场景和更强大的交互能力迈进。
2.  **Agent 学习与记忆系统 Epic 开启：** [#907](https://github.com/qwibitai/nanoclaw/issues/907) 提案了一个“nanoclaw-learning-system” Epic，旨在为 NanoClaw 添加 **FTS5 会话搜索、结构化内存（USER.md/MEMORY.md）、技能自我创建和显式内存命令**等四种自学习能力。伴随的 Issue，如 [#908](https://github.com/qwibitai/nanoclaw/issues/908)（FTS5 索引和搜索）、[#910](https://github.com/qwibitai/nanoclaw/issues/910)（结构化内存）、[#911](https://github.com/qwibitai/nanoclaw/issues/911)（技能自创建 IPC）和 [#913](https://github.com/qwibitai/nanoclaw/issues/913)（系统 Prompt 添加）都进一步细化了这一宏大目标，预示着 Agent 的智能化水平将大幅提升。
3.  **容器运行与安全性的持续修复：** 社区持续关注容器在不同环境下的兼容性和安全性问题。今日有两个 PR [#942](https://github.com/qwibitai/nanoclaw/pull/942) 和 [#936](https://github.com/qwibitai/nanoclaw/pull/936)（已关闭）集中解决在 Host 以 root 用户运行时，因权限问题导致的容器崩溃或消息处理失败（EACCES/ENOENT）。另一 PR [#871](https://github.com/qwibitai/nanoclaw/pull/871) 则强化了凭证代理的安全，解决了凭证暴露漏洞。这表明项目在部署健壮性和安全性方面投入了大量精力。

---

## Issues (近3天内重点关注)

### 新建 Issues (共 8 条)

**核心功能与系统改进：**

*   **[🆕 新建]** [#926](https://github.com/qwibitai/nanoclaw/issues/926) "Admin mode: intercept main-channel admin commands and add /capabilities read-only flow"
    *   **开发者:** @akshan-main
    *   **摘要:** 提出了引入管理员模式的初步设想，并将 `/capabilities` 命令作为第一个只读命令。这是对系统管理和可观察性功能的重大增强。
*   **[🆕 新建]** [#941](https://github.com/qwibitai/nanoclaw/issues/941) "unnecessary TS recompilations degrade performance"
    *   **开发者:** @vzaliva
    *   **摘要:** 报告了 TypeScript 重新编译导致性能下降的问题，并提供了 Claude 分析的日志信息。这表明项目在性能优化方面还有提升空间。
*   **[🆕 新建]** [#907](https://github.com/qwibitai/nanoclaw/issues/907) "Epic: nanoclaw-learning-system"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 这是一个重要的 Epic，旨在为 NanoClaw 添加四项自学习能力：FTS5 会话搜索、结构化内存、技能自我创建和显式内存命令。
*   **[🆕 新建]** [#908](https://github.com/qwibitai/nanoclaw/issues/908) "FTS5 conversation indexing and search"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 作为“nanoclaw-learning-system”Epic 的一部分，此 Issue 专注于实现基于 FTS5 的会话索引和搜索功能，使 Agent 能够通过关键字回忆过去对话。
*   **[🆕 新建]** [#910](https://github.com/qwibitai/nanoclaw/issues/910) "Structured memory with USER.md and character limits"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 提出将 Agent 内存拆分为 `MEMORY.md` (Agent 笔记) 和 `USER.md` (用户偏好)，并引入字符限制，以实现更结构化的记忆管理。
*   **[🆕 新建]** [#911](https://github.com/qwibitai/nanoclaw/issues/911) "Skill self-creation IPC handler with security scanning"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 旨在为 Agent 主动创建技能添加 Host-side IPC 处理，并进行安全扫描，防止提示注入等威胁。
*   **[🆕 新建]** [#912](https://github.com/qwibitai/nanoclaw/issues/912) "create_skill MCP tool for container agents"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 为容器内的 Agent 提供 `create_skill` MCP 工具，允许 Agent 从容器内提出新技能，并写入 IPC 目录。
*   **[🆕 新建]** [#913](https://github.com/qwibitai/nanoclaw/issues/913) "Agent system prompt additions for learning behaviors"
    *   **开发者:** @matt-carvalho
    *   **摘要:** 增加系统 Prompt 指导 Agent 如何使用四种学习能力（会话搜索、结构化内存、技能创建、显式内存命令）。

**其他关注点：**

*   **[🆕 新建]** [#924](https://github.com/qwibitai/nanoclaw/issues/924) "nanoclaw scored 92.1 (A+) on Nerq Trust Index — top 5 AI agents"
    *   **开发者:** @kbanilsson-pixel
    *   **摘要:** 这是一个积极的社区反馈，NanoClaw 在 Nerq Trust Index 上获得高分，并提供了添加信任徽章的建议。
*   **[近3天]** [#865](https://github.com/qwibitai/nanoclaw/issues/865) "Using containers alone doesn't make you more secure"
    *   **开发者:** @calebfaruki
    *   **摘要:** 讨论了当前架构中信任容器的几个方面，并指出大部分脚本不应放在 Agent 层面，暗示了安全加固的需求。

### 旧 Issue 近期更新 (共 10 条)

*   **[近3天]** [#898](https://github.com/qwibitai/nanoclaw/issues/898), [#897](https://github.com/qwibitai/nanoclaw/issues/897), [#896](https://github.com/qwibitai/nanoclaw/issues/896), [#895](https://github.com/qwibitai/nanoclaw/issues/895)
    *   **摘要:** 这四个 Issues 都反映了 `merge-forward` 工作流在合并 `main` 分支到多个 Skill 分支（如 `skill/apple-container`, `skill/compact`, `skill/ollama-tool`）时失败，原因包括合并冲突、构建或测试失败。这些 Issue 均已关闭，表明问题已得到处理或被后续更新覆盖。
*   **[近3天]** [#893](https://github.com/qwibitai/nanoclaw/issues/893), [#892](https://github.com/qwibitai/nanoclaw/issues/892)
    *   **摘要:** 类似于上组 Issues，这两个 Issues 也报告了 `merge-forward` 工作流在合并 `main` 分支到 `skill/compact` 和 `skill/ollama-tool` 分支时失败，并提示需要手动解决。已关闭。
*   **[近3天]** [#825](https://github.com/qwibitai/nanoclaw/issues/825) "fix(scheduler): once-task race condition — marked completed before fire handler runs"
    *   **开发者:** @199-bio
    *   **摘要:** 这是一个关键的 Bug，Scheduler 的 `fire_due_tasks()` 函数在 `handle_schedule_fired` 读取任务之前就对 `once-task` 标记为“已完成”，导致了“伪造工具调用”等严重问题。该 Issue 状态为 open，表明解决工作正在进行中。

---

## Pull Requests (近3天内重点关注)

### 新建 PR (共 14 条)

**核心功能与集成：**

*   **[🆕 新建]** [#925](https://github.com/qwibitai/nanoclaw/pull/925) "fix: fallback to assistant message text when SDK result field is empty (OpenRouter compat)"
    *   **开发者:** @zhuantouer
    *   **摘要:** 针对使用 OpenRouter（如 `minimax/minimax-m2.5`）时，SDK 返回空 `result` 字段的问题，提供了一个兼容性修复，即回退到 `assistant` 消息中的文本。
*   **[🆕 新建]** [#949](https://github.com/qwibitai/nanoclaw/pull/949) "feat: Betty initial setup — Telegram + VPS fixes"
    *   **开发者:** @jojo-dan
    *   **摘要:** 这是一个面向“Betty”角色的初始化设置 PR，主要内容包括 Telegram 频道集成（合并了 nanoclaw-telegram）、VPS 容器 Bug 修复（如 symlink、chown）、IPC 文件权限调整，以及 E2E 测试。
*   **[🆕 新建]** [#946](https://github.com/qwibitai/nanoclaw/pull/946) "Claude/setup telegram agent swarm p5 jsi"
    *   **开发者:** @ProtoJay4789
    *   **摘要:** 似乎是关于 Telegram Agent Swarm 的集成工作，具体细节待 PR 内容展开。
*   **[🆕 新建]** [#917](https://github.com/qwibitai/nanoclaw/pull/917) "feat: WhatsApp/Gmail channels, image vision, voice, PDF/GOG/summarize skills, perf"
    *   **开发者:** @vsabavat
    *   **摘要:** 这是一个 Features PR，非常全面，包括：WhatsApp 和 Gmail 渠道集成（支持配对码认证、OAuth、全通道模式）、语音转文字（Whisper API）、图像视觉能力，以及 PDF/GOG/总结技能，并包含性能优化。
*   **[🆕 新建]** [#931](https://github.com/qwibitai/nanoclaw/pull/931) "Add Telegram channel support with bot pool for agent swarm"
    *   **开发者:** @ProtoJay4789
    *   **摘要:** 增加了 Telegram 渠道支持，以及用于 Agent Swarm 的 Bot Pool 机制，实现了多 Agent 间的消息传递。

**稳定性与安全性修复：**

*   **[🆕 新建]** [#943](https://github.com/qwibitai/nanoclaw/pull/943) "fix: Apple Container networking and mount compatibility"
    *   **开发者:** @lbsnrs
    *   **摘要:** 解决了 Apple Container 的网络和挂载兼容性问题，例如移除了 `/dev/null` 文件挂载，并修复了凭证挂载。
*   **[🆕 新建]** [#942](https://github.com/qwibitai/nanoclaw/pull/942) "fix: container EACCES/ENOENT when host runs as root"
    *   **开发者:** @kianwoon
    *   **摘要:** 针对 NanoClaw 在 Linux root 用户下运行时，容器因文件系统权限不匹配导致崩溃或处理失败的问题（EACCES/ENOENT）。
*   **[🆕 新建]** [#940](https://github.com/qwibitai/nanoclaw/pull/940) "fix: add PID lockfile to prevent multiple instances"
    *   **开发者:** @kianwoon
    *   **摘要:** 引入 PID Lockfile 机制，防止 NanoClaw 意外启动多个实例，从而避免重复响应和竞态条件。
*   **[🆕 新建]** [#930](https://github.com/qwibitai/nanoclaw/pull/930) "fix: automatically refresh expired OAuth tokens from Claude Code credentials"
    *   **开发者:** @kianwoon
    *   **摘要:** 解决了使用 `CLAUDE_CODE_OAUTH_TOKEN` 时，Token 过期后未自动刷新导致 401 错误的问题。

### 旧 PR 近期更新 (共 3 条)

*   **[近3天]** [#861](https://github.com/qwibitai/nanoclaw/pull/861) "fix(skill): use-local-whisper reads config from .env via readEnvFile"
    *   **开发者:** @RaunaqSuri
    *   **摘要:** 修复了 `use-local-whisper` 技能读取配置的问题， NanoClaw 为避免安全风险，不直接将 `.env` 加载到 `process.env`，该 PR 确保了技能能够正确读取配置。状态为 Blocked。
*   **[近3天]** [#871](https://github.com/qwibitai/nanoclaw/pull/871) "fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds"
    *   **开发者:** @calebfaruki
    *   **摘要:** 这是一个安全加固 PR，通过无条件 OAuth 注入、流式传输和按请求凭证来增强凭证代理的安全性，解决了 #865 中提到的凭证暴露漏洞。
*   **[近3天]** [#868](https://github.com/qwibitai/nanoclaw/pull/868) "skill: Per-group credential management and safe interactive reauth via channels"
    *   **开发者:** @k-fls
    *   **摘要:** 引入了按组的凭证管理，以及通过渠道进行安全的交互式重新认证，这是一个重要的安全和用户体验功能。

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
*   [#909](https://github.com/qwibitai/nanoclaw/issues

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:36:19.712Z