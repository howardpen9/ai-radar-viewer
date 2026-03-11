# 🦞 OpenClaw 生态系统 日报 — 2026-03-11

## 横向对比

好的，这是一份基于您提供的 GitHub 数据生成的 OpenClaw 生态系统横向对比分析技术日报。

---

# OpenClaw 生态系统 横向对比分析 - 2026-03-11

## 1. 生态全景

今日 OpenClaw 生态系统展现出蓬勃的发展势头，各项目在**增强 LLM 集成能力、提升系统稳定性和安全性、优化用户体验以及扩展跨平台支持**方面均有显著进展。**OpenClaw** 本体正面临 `v2026.3.8` 版本带来的 Cron 作业和模型集成 Bug 挑战，但社区贡献活跃。PicoClaw、NanoBot、Zeroclaw、TinyClaw、NanoClaw、IronClaw 和 LobsterAI 等衍生项目或相关项目，则在各自的领域深化了功能，如增强 AI Agent 的自主学习能力（NanoClaw）、扩展 LLM Provider 支持（Zeroclaw, IronClaw）、优化微服务架构（TinyClaw）、完善多媒体和企业渠道集成（PicoClaw, LobsterAI），以及提升安全性（IronClaw, NanoClaw）。整体而言，生态系统正朝着更强大、更稳定、更灵活的方向发展，同时也暴露出在版本兼容性、安全性及新特性集成过程中需要重点关注的领域。

## 2. 活跃度对比

| 项目名称                                             | 今日新增 Issues (或有活动 Issues) | 今日新增 PRs (或有活动 PRs) | 整体活跃度 (综合评估) |
| :--------------------------------------------------- | :-------------------------------- | :-------------------------- | :-------------------- |
| [OpenClaw](https://github.com/openclaw/openclaw)     | 30+                              | 20+                         | 活跃                  |
| [PicoClaw](https://github.com/sipeed/picoclaw)        | 4                                 | 3                           | 活跃                  |
| [NanoBot](https://github.com/HKUDS/nanobot)          | 20+                              | 10+                         | 非常活跃              |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)    | 25+                              | 15+                         | 非常活跃              |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw)      | 5+                                | 3                           | 活跃                  |
| [NanoClaw](https://github.com/qwibitai/nanoclaw)      | 20+                              | 15+                         | 非常活跃              |
| [IronClaw](https://github.com/nearai/ironclaw)       | 15+                              | 10+                         | 非常活跃              |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI) | 10+                              | 5+                          | 活跃                  |

（注：活跃度评估基于当日新增 Issues/PRs 数量、Issue/PR 活动频率等综合判断）

## 3. 共同趋势

1.  **LLM 集成与 Provider 扩展：** 多个项目（OpenClaw, NanoBot, Zeroclaw, IronClaw）持续关注对多样化 LLM（如 Kimi, Gemini, Deepseek, Nvidia, 阿里云百炼）的支持，包括配置、认证和 API 兼容性。IronClaw 和 Zeroclaw 尤其强调了支持自定义 API 路径和兼容 Anthropic 协议，以适应更广泛的 LLM 部署场景（本地、云端、自托管）。
2.  **系统稳定性与安全性加固：** OpenClaw 在 Cron 作业上的 Bug、PicoClaw 的 Feishu 认证问题、NanoBot 的安全漏洞、ZeroClaw 的 GLIBC 兼容性问题、NanoClaw 的容器权限 Bug，以及 IronClaw 的并发锁和 Google OAuth 问题，都反映了社区对系统健壮性和安全性的持续关注。多项目也通过 PR 积极修复这些问题。
3.  **跨平台与多渠道集成：** PicoClaw 在 QQ、Telegram、WeCom 渠道的增强，NanoBot 对 Matrix、Telegram 的支持，Zeroclaw 对 Notion、Slack、Telegram 的改进，LobsterAI 对飞书、Discord、企业微信的集成，以及 IronClaw 对 Google Suite 的支持，都表明了 OpenClaw 生态生态正在不断扩大其在不同通信平台和企业级应用场景的覆盖范围。
4.  **AI Agent 智能化与自主性提升：** NanoClaw 在 Agent 学习系统（记忆、搜索、技能自创）方面的宏大规划，以及 TinyClaw 实现 Agent 自动触发，标志着此方向是生态系统未来发展的重要驱动力。
5.  **开发者工具与体验优化：** TinyClaw 对 Monorepo、CLI 交互库 (`@clack/prompts`) 和构建系统的优化，以及 IronClaw 对 CI/CD 流程的改进，体现了对提升开发效率和项目可维护性的重视。

## 4. 值得关注

1.  **OpenClaw 本体 `v2026.3.8` 版本稳定性问题：** OpenClaw 本身近期发布的版本（`v2026.3.8`）似乎引入了多项影响 Cron 作业和模型集成的 Bug（例如：`#40868`, `#42335`, `#41445`, `#41224`），这是整个生态系统的基石，其稳定性问题值得高度警惕，需要尽快得到解决。
2.  **NanoClaw 的 Agent 学习系统构建：** NanoClaw （`qwibitai/nanoclaw`）epic `#907 nanoclaw-learning-system` 及其相关 Issues/PRs，标志着 AI Agent 在自主学习、记忆、技能生成等方面的重大突破尝试，若成功将极大地提升 Agent 的智能水平和应用潜力。
3.  **IronClaw 的 LLM 集成灵活性与 CI 效率：** IronClaw `v0.17.0` 版本中对 LLM 参数的 per-provider 过滤（`#749`, `#728`）以及 CI/CD 流程的自动化改进（`#776`），展示了项目在适应多样化 LLM 环境和加速开发迭代方面的成熟度，为其他项目提供了借鉴。

---

## 各工具详细报告

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw 生态系统日报 - 2026-03-11

## 概览

今日 OpenClaw 生态系统活跃，社区围绕近期发布的 `v2026.3.8` 版本报告了多项 Bug 和行为问题，尤其集中在 Cron 作业、模型配置、以及特定渠道（如飞书、Discord、WhatsApp）的集成稳定性上。同时，社区贡献了多项功能改进和 Bug 修复 Pull Request，显示出活跃的开发和维护动力。

## 版本更新

**v2026.3.8** 版本发布虽然未在本日数据中直接标记为 Release，但从 **Issues** 数据来看，多项 Bug 报告直接指向了该版本（`#40868`, `#42335`, `#42632`, `#42740`, `#42746`, `#42710`, `#42697`），表明该版本可能近期发布且引入或暴露了一些问题。

## 社区关注点分析

### 热门 Issues

*   **Cron 作业稳定性问题 (v2026.3.8 相关)**:
    *   #40868 `Cron isolated sessions timing out after 2026.3.8 update`: 指出 `isolated` 会话的 Cron 作业在更新至 `v2026.3.8` 后出现超时。
    *   #42335 `Cron jobs fail to execute via web UI manual trigger in v2026.3.8 (regression from v2026.3.7)`: 强调了 `v2026.3.8` 中 Web UI 手动触发 Cron 作业的回归性问题。
    *   #42632 `Cron lane self-deadlock: isolated agentTurn jobs never execute with default maxConcurrentRuns`: 报告了 `isolated` 结合 `agentTurn` 的 Cron 作业可能出现的死锁和超时。
    *   #42536 `[Bug]: cron run (manual trigger) silently fails for new isolated agentTurn jobs`: 类似的 Cron 作业问题，手动触发新创建的 `agentTurn` 作业失败。
    *   #42579 `Cron lane self-deadlock: isolated agentTurn jobs never execute with default maxConcurrentRuns`: 另一个独立的 Cron 死锁报告，`isolated agentTurn` 作业执行无响应。
    *   #42506 `Bug: Cron job state not updating, runningAtMs stuck`: 报告了 Cron 作业执行后状态未能更新的问题。
    *   #42740 `Cron jobs fire spontaneously at wrong time (no restart) — possible DST/UTC boundary bug`: 提及了 Cron 作业在非重启情况下，可能因时区问题（DST/UTC）而错误触发。

    **解读**: Cron 作业的稳定性，特别是在 `v2026.3.8` 版本中的表现，是当前最突出的问题。包括超时、死锁、手动触发失败、状态更新异常以及时区问题，这需要项目团队高度关注。

*   **模型配置与集成 Bug**:
    *   #41445 `[Bug]: Kimi K2.5 config validation fails - unrecognized key 'requiresOpenAiAnthropicToolPayload'`: Kimi K2.5 模型配置失败，存在 Zod 验证错误。
    *   #41885 `OpenAI Codex remote OAuth hangs after pasting redirect URL in VPS/SSH flow`: OpenAI Codex 的远程 OAuth 认证流程在特定环境下挂起。
    *   #41224 `[Bug]: Gemini CLI: loadCodeAssist failed: 400 Bad Request`: Gemini CLI 认证流程失败，出现 400 Bad Request 错误。

    **解读**: 模型集成是 OpenClaw 的核心功能之一，近期有多处关于不同模型（Kimi, OpenAI Codex, Gemini）的认证和配置 Bug 被报告，表明模型集成层面的稳定性有待加强。

*   **渠道集成与网关稳定性**:
    *   #41570 `gateway restart fails - launchd service not found`: Gateway 重启失败，服务未找到。
    *   #42067 `[Bug]: Openclaw startup failed after install gateway service with bun runtime and setup proxy for discord`: 在使用 Bun 运行时并设置 Discord 代理后，OpenClaw 启动失败。
    *   #41784 `WebSocket disconnected (1006: no reason) when proxying OpenClaw Gateway through Nginx in separate Docker containers`: Gateway 通过 Nginx 在 Docker 容器中代理时出现 WebScoket 断连问题。

    **解读**: 网关作为核心服务组件，其启动、重启及与其他服务的集成稳定性是用户关注的焦点。

### 热门 PRs

*   **Gateway & Agent 核心功能改进**:
    *   #41597 `feat(gateway): queue inbound messages during drain and recover interrupted turns on restart`: 提升了 Gateway 重启期间的消息处理能力，解决了消息丢失问题。
    *   #42764 `fix: fallback announce target to spawnedBy parent`: 改进了 Agent 间通信的寻址机制，增强了其在子会话中的可靠性。
    *   #42269 `fix(acp): resolve per-agent env pollution in CC spawn`: 修复了 CC 进程 spawn 时环境变量污染的问题，确保 Agent 环境隔离。

    **解读**: 这些 PRs 直接解决了用户在使用 Gateway 和 Agent 时遇到的关键痛点，如消息丢失、通信可靠性以及环境隔离，这些都是提高系统稳定性和用户体验的重要改进。

*   **UI & User Experience**:
    *   #41503 `feat(ui): dashboard-v2 views refactor (slice 3/3 of dashboard-v2)`: Dashboard V2 的视图重构的最后一部分，预示着 UI 的重大更新和用户体验的提升。
    *   #42763 `fix(webchat): paginated chat history loading + transcript auto-archival`: 修复了 WebChat UI 历史记录加载和自动归档问题，提升了 WebChat 的响应速度和用户体验。

    **解读**: UI/UX 方面的改进（如 Dashboard V2 的完成和 WebChat 性能优化）持续吸引关注，表明社区重视用户界面的现代化和易用性。

*   **集成与通道支持**:
    *   #41582 `fix(slack): persist channel and thread delivery routes`: 改进了 Slack 通道的会话持久化能力。
    *   #42489 `WhatsApp: send commentary updates live`: 提高了 WhatsApp 通道中交互式反馈（commentary）的实时性。

    **解读**: 对 Slack 和 WhatsApp 等主流通信渠道的持续优化，显示了 OpenClaw 在跨平台沟通能力上的投入。

## 今日最值得关注的动态

1.  **Cron 作业稳定性危机**: 近期发布的 `v2026.3.8` 版本似乎引入了多项严重的 Cron 作业问题，包括但不限于超时、死锁、手动触发失败以及时区问题。多个 Issues `#40868`, `#42335`, `#42632`, `#42536`, `#42579`, `#42506`, `#42740` 都指向这一核心痛点，社区急需官方的稳定修复。
2.  **模型认证与配置 Bug 集中爆发**: `Kimi K2.5` 配置失败 (`#41445`)，`OpenAI Codex` OAuth 认证卡死 (`#41885`)，`Gemini CLI` 认证错误 (`#41224`)，这些问题表明 OpenClaw 在支持多样化 LLM 提供商的集成方面面临挑战，需要及时修复以保证用户能够顺畅使用各种模型。
3.  **Gateway 重启与集成健壮性提升**: 尽管存在问题，但 PR `#41597`（`feat(gateway): queue inbound messages during drain and recover interrupted turns on restart`）通过引入消息队列机制，显著提升了 Gateway 在重启过程中的消息处理能力，减少了用户感知到的服务中断和数据丢失，是提升整体系统稳定性的一个重要贡献。

## 参考链接

**Issues**:
*   [#41445](https://github.com/openclaw/openclaw/issues/41445)
*   [#41885](https://github.com/openclaw/openclaw/issues/41885)
*   [#40868](https://github.com/openclaw/openclaw/issues/40868)
*   [#41570](https://github.com/openclaw/openclaw/issues/41570)
*   [#42067](https://github.com/openclaw/openclaw/issues/42067)
*   [#42536](https://github.com/openclaw/openclaw/issues/42536)
*   [#42463](https://github.com/openclaw/openclaw/issues/42463)
*   [#41224](https://github.com/openclaw/openclaw/issues/41224)
*   [#41784](https://github.com/openclaw/openclaw/issues/41784)
*   [#41673](https://github.com/openclaw/openclaw/issues/41673)
*   [#42335](https://github.com/openclaw/openclaw/issues/42335)
*   [#40722](https://github.com/openclaw/openclaw/issues/40722)
*   [#42632](https://github.com/openclaw/openclaw/issues/42632)
*   [#42471](https://github.com/openclaw/openclaw/issues/42471)
*   [#41276](https://github.com/openclaw/openclaw/issues/41276)
*   [#42579](https://github.com/openclaw/openclaw/issues/42579)
*   [#42448](https://github.com/openclaw/openclaw/issues/42448)
*   [#41819](https://github.com/openclaw/openclaw/issues/41819)
*   [#42116](https://github.com/openclaw/openclaw/issues/42116)
*   [#42769](https://github.com/openclaw/openclaw/issues/42769)
*   [#42751](https://github.com/openclaw/openclaw/issues/42751)
*   [#42740](https://github.com/openclaw/openclaw/issues/42740)
*   [#42746](https://github.com/openclaw/openclaw/issues/42746)
*   [#42710](https://github.com/openclaw/openclaw/issues/42710)
*   [#42735](https://github.com/openclaw/openclaw/issues/42735)
*   [#42165](https://github.com/openclaw/openclaw/issues/42165)
*   [#42032](https://github.com/openclaw/openclaw/issues/42032)
*   [#42697](https://github.com/openclaw/openclaw/issues/42697)
*   [#42634](https://github.com/openclaw/openclaw/issues/42634)
*   [#42506](https://github.com/openclaw/openclaw/issues/42506)

**Pull Requests**:
*   [#42770](https://github.com/openclaw/openclaw/pull/42770)
*   [#41582](https://github.com/openclaw/openclaw/pull/41582)
*   [#42748](https://github.com/openclaw/openclaw/pull/42748)
*   [#42708](https://github.com/openclaw/openclaw/pull/42708)
*   [#42489](https://github.com/openclaw/openclaw/pull/42489)
*   [#42768](https://github.com/openclaw/openclaw/pull/42768)
*   [#42764](https://github.com/openclaw/openclaw/pull/42764)
*   [#42765](https://github.com/openclaw/openclaw/pull/42765)
*   [#41597](https://github.com/openclaw/openclaw/pull/41597)
*   [#41503](https://github.com/openclaw/openclaw/pull/41503)
*   [#42750](https://github.com/openclaw/openclaw/pull/42750)
*   [#42762](https://github.com/openclaw/openclaw/pull/42762)
*   [#41640](https://github.com/openclaw/openclaw/pull/41640)
*   [#42703](https://github.com/openclaw/openclaw/pull/42703)
*   [#42269](https://github.com/openclaw/openclaw/pull/42269)
*   [#42729](https://github.com/openclaw/openclaw/pull/42729)
*   [#42674](https://github.com/openclaw/openclaw/pull/42674)
*   [#42763](https://github.com/openclaw/openclaw/pull/42763)
*   [#42731](https://github.com/openclaw/openclaw/pull/42731)
*   [#42760](https://github.com/openclaw/openclaw/pull/42760)

---
**GitHub 项目地址**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报 - 2026-03-11

## 🚀 版本更新与亮点

本日，PicoClaw 发布了 `v0.2.1-nightly.20260311.9cd2d218` **[v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)**。本次夜间构建包含了多项重要更新，尤其关注了以下方面：

*   **QQ 频道功能增强**: 优化了 QQ 频道，新增了对群组、输入状态（typing）、媒体（图片、音频、视频、文件）的支持，并加强了 URL 的安全处理，进一步提升了多媒体交互体验。
*   **Docker 镜像优化**: 引入了 `launcher bun`，这意味着 Docker 用户可以更便捷地部署和管理 PicoClaw。
*   **调试模式改进**: 针对 `#1207` Pull Request 的集成，优化了调试模式，解决了输出截断问题，使得在调试过程中能获取更完整的信息。
*   **Telegram 话题支持**: 集成了 `#1291` Pull Request，为 Telegram 频道增加了对话题（Forum Topics）的支持，有助于在大型群组中更好地组织和管理对话。

## 🌟 社区关注焦点

本日报重点关注了社区在 Issues 和 Pull Requests 中展现出的活跃度和关注点。

### 热门 Issues (`近3天` & `🆕 新建`)：

1.  **Telegram 话题支持 (#1270)**：由 `@dimonb` 提出的功能需求，旨在为 PicoClaw 用户带来与 `OpenClaw` 类似的 Telegram 话题组织能力。这对于提升大型群组的沟通效率至关重要。
2.  **子代理工具访问与继承 (#1278)**： `@eric2788` 提交的功能请求，期望子代理能够配置 `read_file`, `write_file`, `exec`, `web_search` 等工具的访问权限，为自动化任务编排和代码分析等场景奠定基础。
3.  **Feishu (飞书) 认证过期 (#1307)**： `@Vast-Stars` 反馈了 Feishu 渠道在认证后约 12 小时出现认证过期的问题，导致 API 调用失败。此 Bug 较为影响实际使用，需要开发者紧急关注。
4.  **Agent 架构重构 (#1316)**： `@alexhoshina` 提出了将 Agent Loop 重构为事件驱动、支持 Hook 和中断的模式。这标志着 PicoClaw 在 Agent 架构的智能化和可扩展性方面迈出了重要一步。

### 热门 Pull Requests (`近3天` & `🆕 新建`):

1.  **添加 WeCom WebSocket 渠道支持 (#1338)**: `@wly2lcl` 提交了一个新的 Pull Request，为企业微信（WeCom）增加了 WebSocket 渠道支持，包括文字、图片、视频、文件等多种消息类型，并支持自动重连和消息去重，极大地拓展了 PicoClaw 在企业内部通讯场景的应用。
2.  **QQ 渠道媒体消息支持 (#1336)**: `@aishannon` 贡献了对 QQ 渠道图片、音频、视频和文件的发送与解析支持，并增加了对表情符号的支持。这与最新发布的夜间版本中的 QQ 频道改进相呼应，表明社区正积极投入到提升多媒体交互体验上。
3.  **Anthropic Messages 协议支持 (#1284)**: `@hyperwd` 贡献了对 `anthropic-messages` 协议的支持，确保了与 OpenClaw 的配置模式兼容，并解决了 `issue #269` 中提到的 404 错误，增强了对 Anthropic 生态模型的兼容性。

## 🎯 本日重点关注

1.  **Telegram 话题支持 (#1270) 和 Agent 架构重构 (#1316)**：社区对提升沟通组织效率和 Agent 内部机制的关注日益增加。`#1270` 显著改善了用户体验，而 `#1316` 则预示着 PicoClaw 在 Agent 智能化和可控性方面将迎来重大的架构升级。
2.  **Feishu 认证问题 (#1307) 和 QQ 频道媒体支持 (#1336 / release v0.2.1-nightly.20260311.9cd2d218)**：一方面，Feishu 认证过期 Bug 影响了用户正常使用，需要快速修复。另一方面，QQ 频道在多媒体消息支持方面的持续优化（体现在 Release Notes 和 PR 中）体现了 PicoClaw 在跨平台即时通讯集成方面不断增强的能力。
3.  **WeCom WebSocket 渠道支持 (#1338)**：新增加的企业微信 WebSocket 渠道支持，为 PicoClaw 在企业级应用场景下提供了更强大的集成能力，尤其是在安全性、稳定性和消息类型丰富度方面。

---
## 参考链接

*   **Releases**:
    *   [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
*   **Issues**:
    *   [#1270](https://github.com/sipeed/picoclaw/issues/1270)
    *   [#1278](https://github.com/sipeed/picoclaw/issues/1278)
    *   [#1307](https://github.com/sipeed/picoclaw/issues/1307)
    *   [#1316](https://github.com/sipeed/picoclaw/issues/1316)
    *   [#1207](https://github.com/sipeed/picoclaw/issues/1207)
    *   [#1291](https://github.com/sipeed/picoclaw/issues/1291)
*   **Pull Requests**:
    *   [#1338](https://github.com/sipeed/picoclaw/pull/1338)
    *   [#1336](https://github.com/sipeed/picoclaw/pull/1336)
    *   [#1284](https://github.com/sipeed/picoclaw/pull/1284)
    *   [#269](https://github.com/sipeed/picoclaw/issues/269)
    *   [#1307](https://github.com/sipeed/picoclaw/issues/1307)
    *   [#1336](https://github.com/sipeed/picoclaw/pull/1336)

</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报

**日期**: 2026-03-11 | **分组**: OpenClaw 生态系统

## 核心洞察

今日 NanoBot 项目活跃度显著，**新增 Issues 和 Pull Requests 数量均不少**，显示社区正积极贡献和反馈。本期值得关注的焦点包括：**模型兼容性问题**（如 Deepseek Reasoner、Nvidia 模型）、**新功能集成**（如流式输出、Endpoint Channel）以及**现有功能的优化与 bug 修复**（如内存管理、安全加固）。

### 社区关注点分析

*   **模型集成与兼容性**:
    *   大量关于特定 LLM 模型（如 Deepseek Reasoner）的集成问题和 bug 报告（例如 #1834），以及对 Nvidia 模型支持的讨论（#1822），表明模型生态的不断扩展是社区关注的重点。
    *   对 Ollama API 的支持请求（#193）也反映了社区对本地模型部署的兴趣。
*   **功能增强与用户体验**:
    *   用户对**流式输出**（#1860）的需求，以及对**微信集成**（#1819）的期望，都指向了提升用户交互体验和平台覆盖的呼声。
    *   关于**守护进程 Gateway 的统一语义层**（#1461, #1854）的讨论，表明了对系统稳定性和跨平台一致性的高度重视。
*   **稳定性与安全性**:
    *   **Cron 作业的可靠性**（#1828）以及潜在的**安全漏洞**（#1817）是需要优先处理的问题。
    *   对于 Matrix（#1851, #1300）和 Telegram（#1692, #1380）等通信渠道的 bug 修复和优化，也显示出对多渠道稳定运行的关注。

## 今日重要动态

### 1. 新增 Endpoint Channel，拥抱 OpenAI 兼容 API 交互

PR [#1861](https://github.com/HKUDS/nanobot/pull/1861) 提出一个全新的 `EndpointChannel`，旨在提供对 **OpenAI 兼容 API/Endpoint 的交互支持**。这项功能允许外部应用程序通过标准的 `/v1/responses` 接口与 NanoBot 进行通信，极大地增加了 NanoBot 的可扩展性和集成性，为构建更广泛的生态系统打下基础。

### 2. Deepseek Reasoner 的 `reasoning_content` 字段问题得到修复

Issue [#1834](https://github.com/HKUDS/nanobot/issues/1834) 中提出的 Deepseek Reasoner 相关 bug，即 `spawn/subagent` 工具在缺少 `reasoning_content` 字段时报错，已通过 PR [#1848](https://github.com/HKUDS/nanobot/pull/1848) 得到修复。该 PR 确保了 `reasoning_content` 和 `thinking_blocks` 在子代理的消息构建中得以保留，解决了特定 LLM 的兼容性问题。

### 3. 社区积极贡献，多项 Bug 修复与功能改进涌现

今日社区在 Pull Requests 方面表现活跃，多项关于 Bug 修复和功能改进的 PR 被提交：
*   PR [#1845](https://github.com/HKUDS/nanobot/pull/1845) 修复了 `restrictToWorkspace` 功能，能够识别并阻止通过 `~`（波浪号）路径进行的越界访问，增强了安全性。
*   PR [#1847](https://github.com/HKUDS/nanobot/pull/1847) 和 [#1825](https://github.com/HKUDS/nanobot/pull/1825) 旨在解决内存合并功能未能继承代理配置（如 `temperature`, `maxTokens`）的问题，以提升记忆功能的可靠性。
*   PR [#1856](https://github.com/HKUDS/nanobot/pull/1856) 改进了工作区模板同步逻辑，忽略了以 `.` 开头的隐藏文件，避免了潜在的解码错误。

## 其他值得关注的动态

*   **新增流式输出建议**: Issue [#1860](https://github.com/HKUDS/nanobot/issues/1860) 提出的增加结果流式输出的建议，对于提升用户实时感知和交互体验具有重要意义。
*   **Cron 作业机制的探讨**: Issue [#1828](https://github.com/HKUDS/nanobot/issues/1828) 探讨了 Cron 作业的实际工作机制，以及用户在本地部署时遇到的提醒未按时执行的问题，显示了对任务调度可靠性的关注。
*   **Nvidia 模型支持的讨论**: Issue [#1822](https://github.com/HKUDS/nanobot/issues/1822) 反映了近期对 Nvidia 模型的支持似乎不再，社区期待其改进。
*   **安全漏洞警示**: Issue [#1817](https://github.com/HKUDS/nanobot/issues/1817) 指出 `restrictToWorkspace` 功能存在被 `~` 路径绕过的安全风险，这是一个重要的安全隐患。

---

## 参考链接

**Issues:**
*   [#1834](https://github.com/HKUDS/nanobot/issues/1834) - "[Bug] Spawn/subagent 工具在 Deepseek Reasoner 下报错：缺少 `reasoning_content` 字段"
*   [#193](https://github.com/HKUDS/nanobot/issues/193) - "Ollama api support?"
*   [#1860](https://github.com/HKUDS/nanobot/issues/1860) - "建议增加结果流式输出"
*   [#1828](https://github.com/HKUDS/nanobot/issues/1828) - "How does cron work"
*   [#1461](https://github.com/HKUDS/nanobot/issues/1461) - "[Feature Enhancement] Provide a unified daemon gateway semantic layer for multi-platform users"
*   [#1851](https://github.com/HKUDS/nanobot/issues/1851) - "Matrix: auth error spams the server"
*   [#1692](https://github.com/HKUDS/nanobot/issues/1692) - "The telegram bot answers twice."
*   [#1617](https://github.com/HKUDS/nanobot/issues/1617) - "说明文档无中文"
*   [#1819](https://github.com/HKUDS/nanobot/issues/1819) - "好项目，但建议增加对微信（Wechat）APP的支持"
*   [#1783](https://github.com/HKUDS/nanobot/issues/1783) - "Codex provider: hardcoded 60s timeout causes silent failures, no retry"
*   [#1300](https://github.com/HKUDS/nanobot/issues/1300) - "Matrix channel does not work"
*   [#1774](https://github.com/HKUDS/nanobot/issues/1774) - "长期记忆什么时候能够比较好的维护？我看很多都用SQLite 处理的，纯文本是不是很容易造成记忆混乱"
*   [#1833](https://github.com/HKUDS/nanobot/issues/1833) - "Received SIGTERM, goodbye!"
*   [#1815](https://github.com/HKUDS/nanobot/issues/1815) - "是否支持飞书云文档、知识库相关？"
*   [#1837](https://github.com/HKUDS/nanobot/issues/1837) - "feat(cron): Add run history tracking for cron jobs"
*   [#1831](https://github.com/HKUDS/nanobot/issues/1831) - "toggle MEMORY.md on/off"
*   [#640](https://github.com/HKUDS/nanobot/issues/640) - "I've completed processing but have no response to give."
*   [#1230](https://github.com/HKUDS/nanobot/issues/1230) - "nanobot 连接modelscope-mcp-server失败"
*   [#1633](https://github.com/HKUDS/nanobot/issues/1633) - "BUG: Command "nanobot gateway --w" or "nanobot gateway --workspace" doesn't work."
*   [#1826](https://github.com/HKUDS/nanobot/issues/1826) - "ssh can't connect after docker compose run"
*   [#1829](https://github.com/HKUDS/nanobot/issues/1829) - "Commands do not work after adding"
*   [#1818](https://github.com/HKUDS/nanobot/issues/1818) - "[建议]可以使用类似 SimpleMem 工具改善记忆功能"
*   [#1823](https://github.com/HKUDS/nanobot/issues/1823) - "Memory consolidation does not inherit agent temperature and maxTokens configuration"
*   [#1822](https://github.com/HKUDS/nanobot/issues/1822) - "supports many models"
*   [#1556](https://github.com/HKUDS/nanobot/issues/1556) - "How to supported Aliyun coding plan https://help.aliyun.com/zh/model-studio/coding-plan?spm=5176.44390736.0.0.645333a64pjE3H"
*   [#1821](https://github.com/HKUDS/nanobot/issues/1821) - "SubagentManager ignores per-agent model config from config.json"
*   [#1411](https://github.com/HKUDS/nanobot/issues/1411) - "如果能接入类型小米音响之类就更有意思了"
*   [#1817](https://github.com/HKUDS/nanobot/issues/1817) - "🔒 Security: restrictToWorkspace bypass using ~ paths (file access bypass)"
*   [#1816](https://github.com/HKUDS/nanobot/issues/1816) - "Bug: 'nanobot cron' commands removed in v0.1.4.post4"
*   [#1380](https://github.com/HKUDS/nanobot/issues/1380) - "[Bug] Telegram: groupPolicy: "mention" is ignored in v0.1.4.post3 (bot responds to all messages)"

**Pull Requests:**
*   [#1847](https://github.com/HKUDS/nanobot/pull/1847) - "fix: pass agent config to memory consolidation LLM calls"
*   [#1861](https://github.com/HKUDS/nanobot/pull/1861) - "Endpoint channel"
*   [#1856](https://github.com/HKUDS/nanobot/pull/1856) - "fix: exclude hidden files when syncing workspace templates"
*   [#1848](https://github.com/HKUDS/nanobot/pull/1848) - "fix(subagent): preserve reasoning_content in assistant messages"
*   [#1859](https://github.com/HKUDS/nanobot/pull/1859) - "feat: support retrieving DingTalk voice recognition text"
*   [#1855](https://github.com/HKUDS/nanobot/pull/1855) - "fix: bump litellm version to 1.82.1 for Moonshot provider support"
*   [#1858](https://github.com/HKUDS/nanobot/pull/1858) - "feat: add deduplication mechanisms to prevent loops and duplicates"
*   [#1857](https://github.com/HKUDS/nanobot/pull/1857) - "fix: resolve PR #1836 merge conflicts"
*   [#1854](https://github.com/HKUDS/nanobot/pull/1854) - "[Feature Enhancement] Provide a unified daemon gateway semantic layer for multi-platform users #1461"
*   [#1853](https://github.com/HKUDS/nanobot/pull/1853) - "Adding nvidia escalation tool"
*   [#1852](https://github.com/HKUDS/nanobot/pull/1852) - "feat(slack): update reaction emoji on task completion"
*   [#1825](https://github.com/HKUDS/nanobot/pull/1825) - "fix(memory): pass agent generation settings to consolidation"
*   [#1849](https://github.com/HKUDS/nanobot/pull/1849) - "feat: Provider endpoint rotation with cooldown failover "
*   [#1846](https://github.com/HKUDS/nanobot/pull/1846) - "fix: include reasoning_content in subagent assistant messages"
*   [#1845](https://github.com/HKUDS/nanobot/pull/1845) - "fix: detect tilde paths in restrictToWorkspace shell guard"
*   [#1844](https://github.com/HKUDS/nanobot/pull/1844) - "feat: smarter Phase 1 heartbeat scheduling — datetime-aware + configurable last-run tracking"
*   [#1836](https://github.com/HKUDS/nanobot/pull/1836) - "fix: preserve tool_choice across provider implementations"
*   [#1843](https://github.com/HKUDS/nanobot/pull/1843) - "Check if the content is empty?"
*   [#1799](https://github.com/HKUDS/nanobot/pull/1799) - "fix(cli): support forced Codex OAuth re-login"
*   [#1842](https://github.com/HKUDS/nanobot/pull/1842) - "Add Xiaohongshu content & draft Skill"

</details>

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw (zeroclaw-labs/zeroclaw) 技术日报 - 2026-03-11

## 核心动态概览

今日 Zeroclaw 生态系统在 Issues 和 Pull Requests 方面均有活跃的讨论和开发进展。重点关注了 **Provider 支持扩展**、**特定渠道集成** 以及 **用户体验优化**。

## 本日最值得关注的动态

1.  **阿里云百炼 (Bailian) Provider 支持上线**：PR [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158) 增加了对阿里云百炼 Coding Plan 的支持，允许用户通过 API Key 集成该服务，进一步扩展了 Zeroclaw 可用的模型提供商。
2.  **Notion 集成：渠道与工具支持**：PR [#3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157) 实现了 Notion 渠道的双向通信，并引入了 Notion 页面、数据库和块操作的工具集成，为用户提供更丰富的工作流自动化能力。
3.  **自定义 Provider API 路径配置**：PR [#3156](https://github.com/zeroclaw-labs/zeroclaw/pull/3156) 和 [#3155](https://github.com/zeroclaw-labs/zeroclaw/pull/3155) 允许用户为自定义 Provider 指定 API 路径，解决了部分 OpenAI 兼容接口不遵循默认 `/v1/chat/completions` 路径的问题，增强了灵活性。

## 社区关注点分析

### 新建 Issues (近 24 小时)

*   **Provider 与集成功能增强**：
    *   **阿里云百炼 (Bailian) Provider 支持**：[#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158) （PR）
    *   **Notion 渠道与工具集成**：[#3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157) （PR）
    *   **自定义 API 路径支持**：[#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125) (Issue) 和 [#3156](https://github.com/zeroclaw-labs/zeroclaw/pull/3156) (PR)。
    *   **Agent 支持 MCP**：[#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) 提出 Zeroclaw Agent 应支持 MCP 配置。
    *   **i18n (中文支持)**：[#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152) 提议网关 Web UI 需要支持中文。
*   **用户体验与易用性**：
    *   **Web Chat 消息复制**：[#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120) ，希望提供消息复制功能。
    *   **聊天输入框自动扩展**：[#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119) ，要求实现多行输入框自动高度扩展。
    *   **保存聊天草稿**：[#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129) ，用户希望切换聊天时能保留草稿。
    *   **简化渠道工具使用审批**：[#3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146) ，希望能更便捷地在移动端审批工具使用。
*   **Bug 修复与稳定性**：
    *   **GLIBC_2.39 not found**：[#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) 是一个影响运行时部署的关键 Bug。
    *   **Slack 线程回复问题**：[#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084) 指出 Slack 适配器未能订阅线程消息事件。
    *   **Telegram 语音消息被忽略**：[#3115](https://github.com/zeroclaw-labs/zeroclaw/issues/3115)，Telegram 频道无法处理语音消息。
    *   **Provider 缺少 Content-Type 头**：[#3132](https://github.com/zeroclaw-labs/zeroclaw/issues/3132)，影响与某些网关/代理的通信。
    *   **Windows 编译错误**：[#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135)，`cargo clippy` 在 Windows 上因平台不兼容的 `sync_directory` 调用而失败。
*   **安全与配置**：
    *   **Telegram 密钥存储风险**：[#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126) ，`secrets.encrypt = true` 未能保护 Telegram `bot_token`，存在明文泄露风险。

### 近期 Issues 更新 (过去3天内有活动)

*   **Ollama + Qwen 工具调用回归问题**：[#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079) 关注 Ollama provider 在使用 Qwen 模型时，工具调用失效的问题。
*   **MCP 工具按需加载**：[#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) 提议按需加载 MCP 工具，以减少系统提示符大小。
*   **GLIBC 兼容性问题**：[#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) 依然是高优先级 Bug，`GLIBC_2.39` 版本不兼容问题需要解决。
*   **MCP 工具未暴露给子代理**：[#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069) ，MCP 工具在传递给子代理时，并未作为可调用原生工具。

### 近期 Pull Requests 更新 (过去3天内有活动)

*   **Lark 渠道重构**：PR [#3068](https://github.com/zeroclaw-labs/zeroclaw/pull/3068) 对 Lark 渠道的平台类型处理进行了重构，提高了代码清晰度。
*   **`default_temperature` 配置生效**：PR [#3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067) 修复了运行 `zeroclaw agent` 命令时，`default_temperature` 配置不被遵守的问题。

## 总结

本日报显示 Zeroclaw 项目在持续扩展其 Provider 生态（如新增阿里云百炼，并支持自定义 API 路径）、深化渠道集成（如 Notion）以及提升用户体验（如 Web UI 改进、草稿保存）方面的工作。同时，也积极响应并修复用户反馈的关键 Bug，尤其是在兼容性（如 GLIBC 问题）和安全性（如密钥管理）方面。社区对 LLM 应用的便捷性、灵活性和安全性有着持续的关注。

---

## 参考链接

### Issues
*   [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
*   [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)
*   [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)
*   [#3098](https://github.com/zeroclaw-labs/zeroclaw/issues/3098)
*   [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)
*   [#3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084)
*   [#3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093)
*   [#3132](https://github.com/zeroclaw-labs/zeroclaw/issues/3132)
*   [#3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146)
*   [#3115](https://github.com/zeroclaw-labs/zeroclaw/issues/3115)
*   [#3088](https://github.com/zeroclaw-labs/zeroclaw/issues/3088)
*   [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)
*   [#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)
*   [#3145](https://github.com/zeroclaw-labs/zeroclaw/issues/3145)
*   [#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135)
*   [#3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131)
*   [#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)
*   [#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126)
*   [#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)
*   [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)
*   [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120)
*   [#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119)
*   [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100)
*   [#1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
*   [#1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575)
*   [#2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487)
*   [#2961](https://github.com/zeroclaw-labs/zeroclaw/issues/2961)
*   [#3008](https://github.com/zeroclaw-labs/zeroclaw/issues/3008)
*   [#2992](https://github.com/zeroclaw-labs/zeroclaw/issues/2992)
*   [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033)

### Pull Requests
*   [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158)
*   [#3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157)
*   [#3156](https://github.com/zeroclaw-labs/zeroclaw/pull/3156)
*   [#3155](https://github.com/zeroclaw-labs/zeroclaw/pull/3155)
*   [#3068](https://github.com/zeroclaw-labs/zeroclaw/pull/3068)
*   [#3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067)
*   [#3151](https://github.com/zeroclaw-labs/zeroclaw/pull/3151)
*   [#3149](https://github.com/zeroclaw-labs/zeroclaw/pull/3149)
*   [#3150](https://github.com/zeroclaw-labs/zeroclaw/pull/3150)
*   [#3102](https://github.com/zeroclaw-labs/zeroclaw/pull/3102)
*   [#3101](https://github.com/zeroclaw-labs/zeroclaw/pull/3101)
*   [#3147](https://github.com/zeroclaw-labs/zeroclaw/pull/3147)
*   [#3143](https://github.com/zeroclaw-labs/zeroclaw/pull/3143)
*   [#3142](https://github.com/zeroclaw-labs/zeroclaw/pull/3142)
*   [#3144](https://github.com/zeroclaw-labs/zeroclaw/pull/3144)
*   [#3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141)
*   [#3140](https://github.com/zeroclaw-labs/zeroclaw/pull/3140)
*   [#3099](https://github.com/zeroclaw-labs/zeroclaw/pull/3099)
*   [#3139](https://github.com/zeroclaw-labs/zeroclaw/pull/3139)
*   [#3138](https://github.com/zeroclaw-labs/zeroclaw/pull/3138)

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 项目日报

**日期**: 2026-03-11 | **分组**: OpenCLaw 生态系统

## 今日要闻

今日，TinyClaw 项目在代码重构、功能增强和构建优化方面取得了显著进展。特别是 [@jlia0](https://github.com/TinyAGI/tinyclaw) 贡献的 PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 标志着项目向更模块化、可维护的架构迈进。

### **核心动态:**

1.  **重构为 Monorepo 及 SQLite 队列整合**：PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 进行了大规模的架构调整，将原先的单体代码库拆分为五个 npm workspace 包 (`@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer`)。同时，引入了 `better-sqlite3` 的 SQLite 队列，替换了原有的 BullMQ/Redis 方案，显著简化了代码实现。这一举措旨在提升项目可维护性和性能。
2.  **CLI 交互提示迁移至 `@clack/prompts`**：PR [#185](https://github.com/TinyAGI/tinyclaw/pull/185) 将 CLI 的交互式提示从 Bash 脚本迁移到了 TypeScript 的 `@clack/prompts` 库。这将改善用户体验，带来更强的验证反馈、彩色输出和结构化的交互流程。
3.  **构建系统优化与 `gitignore` 更新**：PR [#187](https://github.com/TinyAGI/tinyclaw/pull/187) 针对 Monorepo 重构后出现的构建失败问题，引入了 `tsc --build` 来更好地管理项目依赖顺序。同时，PR [#188](https://github.com/TinyAGI/tinyclaw/pull/188) 更新了 `.gitignore` 文件，排除了 TypeScript 构建缓存文件 (`*.tsbuildinfo`)，避免了不必要的版本控制。

## 社区动态

**近期更新与持续讨论:**

*   **模块化频道与 TUI 示例**：PR [#172](https://github.com/TinyAGI/tinyclaw/pull/172) 正在进行频道模块化工作，并提供了一个 TUI (Text User Interface) 频道作为示例，这表明社区正致力于增强系统的灵活性和可扩展性。
*   **简化 UI 与事件处理**：PR [#183](https://github.com/TinyAGI/tinyclaw/pull/183) 移除了冗余的 `message_received` 事件，并简化了 Office UI，只显示用户输入和 Agent 回应，提升了界面的简洁性。
*   **自动化 Agent 触发**：PR [#182](https://github.com/TinyAGI/tinyclaw/pull/182) 实现了一个重要功能：当任务状态切换到“处理中”时，会自动触发已分配的 Agent 开始工作，减少了用户的手动操作。
*   **聊天室 API 与实时 CLI 查看器**：PR [#177](https://github.com/TinyAGI/tinyclaw/pull/177) 已经关闭，但其内容表明社区已添加了团队聊天室的 REST API 接口以及支持实时输入发送的 CLI 查看器，增强了团队协作功能。

## 关注点分析

从今日的 Pull Requests 来看，社区的关注点主要集中在：

*   **架构现代化与性能优化**：通过 Monorepo 重构（[#186](https://github.com/TinyAGI/tinyclaw/pull/186)）和引入更高效的队列及构建机制（[#187](https://github.com/TinyAGI/tinyclaw/pull/187)），提升项目的可维护性和性能。
*   **开发者体验与 CLI 增强**：使用 `@clack/prompts` 改进 CLI 交互（[#185](https://github.com/TinyAGI/tinyclaw/pull/185)）以及优化 UI 简洁性（[#183](https://github.com/TinyAGI/tinyclaw/pull/183)）反映了对提升开发和用户体验的重视。
*   **功能自动化与易用性**：自动触发 Agent（[#182](https://github.com/TinyAGI/tinyclaw/pull/182)）和添加更便捷的团队沟通工具（[#177](https://github.com/TinyAGI/tinyclaw/pull/177)）体现了对提升项目自动化水平和协作效率的追求。

---

## 参考链接

*   [#172](https://github.com/TinyAGI/tinyclaw/pull/172)
*   [#185](https://github.com/TinyAGI/tinyclaw/pull/185)
*   [#188](https://github.com/TinyAGI/tinyclaw/pull/188)
*   [#187](https://github.com/TinyAGI/tinyclaw/pull/187)
*   [#183](https://github.com/TinyAGI/tinyclaw/pull/183)
*   [#182](https://github.com/TinyAGI/tinyclaw/pull/182)
*   [#186](https://github.com/TinyAGI/tinyclaw/pull/186)
*   [#177](https://github.com/TinyAGI/tinyclaw/pull/177)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报 - 2026-03-11

## 核心摘要
今日，NanoClaw 项目在**AI Agent 的学习能力和安全性**方向上展现出强劲的发展势头。多个新 Issue 和 Pull Request 聚焦于增强 Agent 的记忆、自主学习以及提升系统安全性。同时，近期发生的持续性 `merge-forward` 工作流失败问题依然是团队需要关注的重点。

---

## 社区焦点与近期动态

### 1. AI Agent 学习系统（Learning System）的全面构建 (高优先级)
由 @matt-carvalho 贡献的多个新 Issue 详细规划了 NanoClaw 学习系统的构建蓝图：
*   **#907 Epic: nanoclaw-learning-system**: 这是一个史诗级任务，旨在为 NanoClaw 添加四项核心自我学习能力：FTS5 对话搜索、结构化记忆（USER.md + 字符限制）、通过 IPC 进行技能的自我创建，以及显式记忆命令。所有功能都将以增量方式扩展现有 IPC/MCP 架构。
*   **#908 FTS5 conversation indexing and search**: 引入基于 FTS5 的对话索引和搜索功能，使 Agent 能够通过关键词检索过去的对话。
*   **#909 Session search IPC flow and MCP tool**: 实现了 Agent 内部通过 IPC 进行对话搜索的能力，允许 Agent 检索过去的对话。
*   **#910 Structured memory with USER.md and character limits**: 将 Agent 记忆拆分为 MEMORY.md（Agent 笔记、环境事实、经验教训）和 USER.md（用户偏好、习惯、个人详情），以更结构化的方式存储信息。
*   **#911 Skill self-creation IPC handler with security scanning**: 增加了 Host 端 IPC 处理能力，用于 Agent 发起的技能创建，对提出的技能内容进行安全扫描，防范提示词注入和硬编码密钥等风险。
*   **#913 Agent system prompt additions for learning behaviors**: 在系统提示词中加入指令，教授 Agent 如何使用学习能力，包括会话搜索、结构化记忆、技能创建和显式记忆命令。

这组提案标志着 NanoClaw 在提升 Agent 的自主性和智能化水平上迈出了重要一步。

### 2. 系统安全加固与容器兼容性优化 (高优先级)
安全性与健壮性是近期开发的重要关注点：
*   **#926 Admin mode: intercept main-channel admin commands and add /capabilities read-only flow**: 引入 Admin 模式，初始功能是截获主频道管理员命令，并提供 `/capabilities` 只读接口。这为后续的管理员功能扩展奠定了基础，也意味着对系统管理和控制的重视。
*   **#865 Using containers alone doesn't make you more secure**: 该 Issue 指出了当前架构中存在的信任模型问题，即过于依赖容器的安全性，而未在 Agent 层面进行充分的安全加固，例如脚本不应全权依赖 Agent 级别运行。
*   **#871 fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds**: @calebfaruki 提出的 Pull Request 旨在通过多种方式提高凭证代理的安全性，修复了 #865 中提到的凭证泄露漏洞。
*   **#942 fix: container EACCES/ENOENT when host runs as root** 和 **#936 fix: container EACCES/ENOENT when host runs as root**: 这些 Issue 和相关的 Pull Request 集中处理了 NanoClaw 在 Linux root 用户环境下运行时，因文件系统权限不匹配导致容器崩溃或处理消息失败的问题，确保了在不同运行环境下的兼容性和稳定性。
*   **#929 fix: skip .env shadow mount on Apple Container (non-Docker runtimes)**: 解决了在 Apple Container 环境下，`.env` 文件挂载配置引发的兼容性问题，提升了跨平台运行的稳定性。

### 3. 持续性 `merge-forward` 工作流失败问题
近期，多个 Issue (#898, #897, #896, #895, #893, #892) 反映了 `merge-forward` 工作流在将 `main` 分支合并到多个技能分支（如 `skill/apple-container`, `skill/compact`, `skill/ollama-tool`）时反复失败。这些失败通常由合并冲突、构建失败或测试失败引起。虽然大部分已被关闭（表示已尝试解决或标记为待手动处理），但问题的频繁出现表明 `skill-maintenance` 流程或分支策略可能需要进一步的优化和自动化。

---

## 今日最值得关注的动态 (1-3 项)

1.  **AI Agent 学习系统生态构建启动**: 以 #907 Epic: nanoclaw-learning-system 为代表的一系列新 Issue，全面描绘了 NanoClaw 在 Agent 学习能力上的发展方向，涵盖了记忆、搜索、技能自创等关键领域，是项目智能化升级的重要起点。
2.  **系统安全与容器兼容性显著提升**: 多个 Pull Request (#871, #942, #936, #929) 集中修复了凭证管理、Linux root 环境下的容器权限问题以及 Apple Container 的兼容性，为 NanoClaw 的安全性和在更多环境下的可靠运行打下坚实基础。
3.  **Admin 模式的初步引入 (#926)**: 引入 Admin 模式并实现 `/capabilities` 只读接口，标志着 NanoClaw 在系统管理和可控性方面迈出了第一步，预示着未来更精细化的权限和配置管理。

---

## 参考链接

**Issues:**
*   [#898 Merge-forward failed for 3 skill branch(es) after 621fde8](https://github.com/qwibitai/nanoclaw/issues/898)
*   [#897 Merge-forward failed for 3 skill branch(es) after f41b399](https://github.com/qwibitai/nanoclaw/issues/897)
*   [#896 Merge-forward failed for 3 skill branch(es) after 4dee68c](https://github.com/qwibitai/nanoclaw/issues/896)
*   [#895 Merge-forward failed for 3 skill branch(es) after e6ea914](https://github.com/qwibitai/nanoclaw/issues/895)
*   [#893 Merge-forward failed for 2 skill branch(es) after 8564937](https://github.com/qwibitai/nanoclaw/issues/893)
*   [#892 Merge-forward failed for 2 skill branch(es) after 5118239](https://github.com/qwibitai/nanoclaw/issues/892)
*   [#926 Admin mode: intercept main-channel admin commands and add /capabilities read-only flow](https://github.com/qwibitai/nanoclaw/issues/926)
*   [#941 unnecessary TS recompilations degrade performance](https://github.com/qwibitai/nanoclaw/issues/941)
*   [#910 Structured memory with USER.md and character limits](https://github.com/qwibitai/nanoclaw/issues/910)
*   [#911 Skill self-creation IPC handler with security scanning {name}](https://github.com/qwibitai/nanoclaw/issues/911)
*   [#912 create_skill MCP tool for container agents](https://github.com/qwibitai/nanoclaw/issues/912)
*   [#913 Agent system prompt additions for learning behaviors](https://github.com/qwibitai/nanoclaw/issues/913)
*   [#825 fix(scheduler): once-task race condition — marked completed before fire handler runs](https://github.com/qwibitai/nanoclaw/issues/825)
*   [#934 .](https://github.com/qwibitai/nanoclaw/issues/934)
*   [#935 .](https://github.com/qwibitai/nanoclaw/issues/935)
*   [#933 .](https://github.com/qwibitai/nanoclaw/issues/933)
*   [#924 nanoclaw scored 92.1 (A+) on Nerq Trust Index — top 5 AI agents](https://github.com/qwibitai/nanoclaw/issues/924)
*   [#865 Using containers alone doesn't make you more secure](https://github.com/qwibitai/nanoclaw/issues/865)
*   [#909 Session search IPC flow and MCP tool](https://github.com/qwibitai/nanoclaw/issues/909)
*   [#908 FTS5 conversation indexing and search](https://github.com/qwibitai/nanoclaw/issues/908)
*   [#907 Epic: nanoclaw-learning-system](https://github.com/qwibitai/nanoclaw/issues/907)

**Pull Requests:**
*   [#946 Claude/setup telegram agent swarm p5 jsi](https://github.com/qwibitai/nanoclaw/pull/946)
*   [#861 fix(skill): use-local-whisper reads config from .env via readEnvFile](https://github.com/qwibitai/nanoclaw/pull/861)
*   [#871 fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds](https://github.com/qwibitai/nanoclaw/pull/871)
*   [#947 Added codex support](https://github.com/qwibitai/nanoclaw/pull/947)
*   [#917 feat: WhatsApp/Gmail channels, image vision, voice, PDF/GOG/summarize skills, perf](https://github.com/qwibitai/nanoclaw/pull/917)
*   [#932 Gen tech agency main](https://github.com/qwibitai/nanoclaw/pull/932)
*   [#943 fix: Apple Container networking and mount compatibility](https://github.com/qwibitai/nanoclaw/pull/943)
*   [#944 feat: send immediate acknowledgment when agent starts processing](https://github.com/qwibitai/nanoclaw/pull/944)
*   [#945 feat: integrate @onecli-sh/sdk for container proxy configuration](https://github.com/qwibitai/nanoclaw/pull/945)
*   [#942 fix: container EACCES/ENOENT when host runs as root](https://github.com/qwibitai/nanoclaw/pull/942)
*   [#868 skill: Per-group credential management and safe interactive reauth via channels](https://github.com/qwibitai/nanoclaw/pull/868)
*   [#936 fix: container EACCES/ENOENT when host runs as root](https://github.com/qwibitai/nanoclaw/pull/936)
*   [#940 fix: add PID lockfile to prevent multiple instances](https://github.com/qwibitai/nanoclaw/pull/940)
*   [#939 fix: add PID lockfile to prevent multiple instances](https://github.com/qwibitai/nanoclaw/pull/939)
*   [#938 Feature/cursor acp upstream](https://github.com/qwibitai/nanoclaw/pull/938)
*   [#937 Mukul/test](https://github.com/qwibitai/nanoclaw/pull/937)
*   [#931 Add Telegram channel support with bot pool for agent swarm](https://github.com/qwibitai/nanoclaw/pull/931)
*   [#930 fix: automatically refresh expired OAuth tokens from Claude Code credentials](https://github.com/qwibitai/nanoclaw/pull/930)
*   [#929 fix: skip .env shadow mount on Apple Container (non-Docker runtimes)](https://github.com/qwibitai/nanoclaw/pull/929)
*   [#928 fix: rotate oversized session files to prevent container timeouts](https://github.com/qwibitai/nanoclaw/pull/928)

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 技术日报
**日期：** 2026-03-11 | **分组：** OpenClaw 生态系统

## 🌿 本日焦点

*   **v0.17.0 版本发布，增强 LLM 参数控制与 CI 流程：** 本日发布了 `v0.17.0` 版本，带来了多项重要更新。核心亮点包括为 LLM 添加了按 provider 过滤不支持参数的能力（#749, #728），提升了与不同 LLM API 交互的灵活性；在 CI 流程中引入了链式 promotion PRs 和多智能体 Claude 评审，优化了持续集成效率。此外，还增加了对孤儿 Docker 容器的后台清理机制（#634），以及在保存 job 时持久化 `user_id` 并暴露 `job_id`。
*   **新版发布与功能增强请求并行：** 在新版本发布的同时，社区对 IronClaw 的功能扩展和优化需求也持续涌现。例如，#914 提出了支持 Cortex Memory 作为可选的内存后端，#913 探讨了为兼容 Anthropic endpoints 的 LLM providers（如 vllm/sglang/llama.cpp）设置 `base_url` 的可能性。
*   **关键 Bug 修复与稳定性提升：** 自动化的 CI 评审机制发现了多项潜在问题，部分已在本日报的 PRs 中得到解决或正在被处理。例如，#908 和 #909 指出了 [CRITICAL] 和 [HIGH] 级别的 bug，涉及连接重置和文档缺失；PR #905 正在修复一个 [CRITICAL] bug，解决了锁持有跨越异步 IO 边界导致 webhook 处理阻塞的问题。

## 🚀 版本发布

### v0.17.0 "0.17.0 - 2026-03-10"

**发布亮点：**

*   **(LLM Enhancements):** `per-provider unsupported parameter filtering`（#749, #728）使得与不同 LLM 的集成更加 robust。
*   **Job Persistence:** `persist user_id in save_job and expose job_id on routine runs`（#709），提升了任务的可追溯性。
*   **(CI/CD Improvements):** `chained promotion PRs with multi-agent Claude review`（#776）显著优化了 CI/CD 流程。
*   **Sandbox Management:** `add background sandbox reaper for orphaned Docker containers`（#634），增强了资源管理和稳定性。

**[v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)** 详细发布说明。

## 💡 热门 Issues & Pull Requests

### 🔥 Issues (社区关注点)

*   **[🆕 新建] #914 "[Feature]: Support cortex-mem as the optional memory backend"**
    *   **描述:** 社区提出将 Rust 生态的下一代高性能 Agent 内存模块 Cortex Memory 集成进 IronClaw。
    *   **关注点:** 内存管理及高性能 Agent 架构的扩展性。
*   **[🆕 新建] #913 "Can we set the base_url for llm providers compatible with anthropic endpoints (such as vllm/sglang/llama.cpp)?"**
    *   **描述:** 探讨为兼容 Anthropic API 的本地 LLM 服务（如 vllm, sglang, llama.cpp）配置自定义 `base_url` 的可行性。
    *   **关注点:** LLM API 集成灵活性，支持更多自托管或本地化 LLM 部署。
*   **[近3天] #733 "Bug: ngrok process becomes zombie (<defunct>) after tunnel URL is obtained"**
    *   **描述:** 用户报告 ngrok 进程在获取隧道 URL 后变为僵尸进程，导致隧道离线。
    *   **关注点:** 网络隧道（ngrok）集成中的稳定性问题，是影响远程访问的关键。
*   **[🆕 新建] #908 "[CRITICAL] Missing consecutive_failures reset on successful reconnection — Stream end inc"**
    *   **描述:** CI 评审发现的 CRITICAL bug，关于成功重连后未重置 `consecutive_failures` 计数器。
    *   **关注点:** 容错和重连机制的严谨性，直接影响服务稳定性。
*   **[🆕 新建] #902 "Google OAuth blocked across Google Suite tools + request optional gws fallback provider"**
    *   **描述:** Google Suite 工具（Gmail, Calendar 等）在本地 IronClaw v0.17.0 中 OAuth 认证失败，被 Google 阻止。
    *   **关注点:** 第三方服务（Google Suite）集成中的认证授权问题，影响了核心工作流程。

### 🌊 Pull Requests (当前活跃开发)

*   **[🆕 新建] #917 "chore: promote staging to main (2026-03-11 03:47 UTC)"**
    *   **描述:** 自动化 staging 分支到 main 分支的 promotion。
    *   **关注点:** CI/CD 流程的自动化和效率。
*   **[🆕 新建] #915 "fix: resolve deferred review items from PRs #883, #848, #788"**
    *   **描述:** 解决代码评审中遗留的关键问题，包括 SIGHUP 锁跨越 `.await` 的问题。
    *   **关注点:** 代码质量、并发处理的健壮性，以及对之前评审意见的快速响应。
*   **[近3天] #760 "fix(agent): block thread_id-based context pollution across users"**
    *   **描述:** 修复了潜在的高危上下文污染风险，防止伪造 `thread_id` 导致跨用户对话数据串扰。
    *   **关注点:** Agent 核心逻辑的安全性和用户隔离性。
*   **[🆕 新建] #911 "feat: enhance HTTP tool parameter parsing"**
    *   **描述:** 增强内置 HTTP 工具的参数解析能力，使其更能容忍 LLM 生成的不规范参数，并支持 JSON 字符串化的 headers。
    *   **关注点:** 工具集成能力和 LLM 输出兼容性，提升工具的易用性。
*   **[🆕 新建] #905 "fix: release lock guards before awaiting channel send (#869)"**
    *   **描述:** 解决 [CRITICAL] bug #869，确保在发送消息 `await` 前释放读锁，防止 webhook 处理阻塞。
    *   **关注点:** 并发控制和异步 IO 处理的正确性，保障服务不间断运行。

## 📈 数据摘要 & 趋势

**关键更新：**
*   **版本发布：** v0.17.0 的发布是今日最重要的事件，为项目带来了 LLM 集成、CI 流程和资源管理上的显著改进。
*   **新建 Issue 活跃：** 今日有大量新 Issue 被创建（#914, #913, #909, #908, #906, #857, #895, #894, #893, #892, #891, #890, #856）以及 (#910, #911, #912, #915, #916, #917) PRs，这表明社区活跃度高，并且持续涌现新的需求和对潜在问题的关注。
*   **稳定性与安全性：** 多个 Issue 和 PR 聚焦于 bug 修复和稳定性提升，特别是 CI 自动检测到的 CRITICAL/HIGH 级问题（如 #908, #909, #892, #895, #811）以及 #905 正在修复的锁竞争问题，显示出项目对核心系统稳定性和安全性的重视。

---

## 参考链接

**Releases:**
*   [v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)

**Issues:**
*   [#733](https://github.com/nearai/ironclaw/issues/733)
*   [#914](https://github.com/nearai/ironclaw/issues/914)
*   [#913](https://github.com/nearai/ironclaw/issues/913)
*   [#58](https://github.com/nearai/ironclaw/issues/58)
*   [#840](https://github.com/nearai/ironclaw/issues/840)
*   [#909](https://github.com/nearai/ironclaw/issues/909)
*   [#908](https://github.com/nearai/ironclaw/issues/908)
*   [#902](https://github.com/nearai/ironclaw/issues/902)
*   [#906](https://github.com/nearai/ironclaw/issues/906)
*   [#541](https://github.com/nearai/ironclaw/issues/541)
*   [#67](https://github.com/nearai/ironclaw/issues/67)
*   [#766](https://github.com/nearai/ironclaw/issues/766)
*   [#773](https://github.com/nearai/ironclaw/issues/773)
*   [#764](https://github.com/nearai/ironclaw/issues/764)
*   [#299](https://github.com/nearai/ironclaw/issues/299)
*   [#857](https://github.com/nearai/ironclaw/issues/857)
*   [#811](https://github.com/nearai/ironclaw/issues/811)
*   [#868](https://github.com/nearai/ironclaw/issues/868)
*   [#765](https://github.com/nearai/ironclaw/issues/765)
*   [#439](https://github.com/nearai/ironclaw/issues/439)
*   [#697](https://github.com/nearai/ironclaw/issues/697)
*   [#895](https://github.com/nearai/ironclaw/issues/895)
*   [#894](https://github.com/nearai/ironclaw/issues/894)
*   [#893](https://github.com/nearai/ironclaw/issues/893)
*   [#892](https://github.com/nearai/ironclaw/issues/892)
*   [#891](https://github.com/nearai/ironclaw/issues/891)
*   [#890](https://github.com/nearai/ironclaw/issues/890)
*   [#856](https://github.com/nearai/ironclaw/issues/856)

**Pull Requests:**
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
*   [#912](https://github.com/nearai/ironclaw/pull/912)
*   [#845](https://github.com/nearai/ironclaw/pull/845)
*   [#910](https://github.com/nearai/ironclaw/pull/910)

---
[**GitHub 项目地址:** nearai/ironclaw](https://github.com/nearai/ironclaw)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报 - 2026-03-11

## 核心动态摘要

今日 LobsterAI 项目社区活跃度较高，particularly 在 UI 功能增强和多平台集成方面。新功能开发方面，**主界面附件支持多文件选择**的 PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371) 尤为引人关注，有望提升用户在处理文件时的效率。在集成与稳定性方面，**@mjnhmd** 提交了数个关于**防止 IM 平台超时的异步消息处理**的 PRs [#374](https://github.com/netease-youdao/LobsterAI/pull/374)（尚未合并），显示了社区对提升系统稳定性和用户体验的持续努力。

## 热点 Issue 分析

今日社区主要关注以下几个方面的问题：

*   **API 调用与 Token 限制**: Issue [#370](https://github.com/netease-youdao/LobsterAI/issues/370) 反映了用户在 API 调用时遇到的 Token 数量超限问题，这直接影响了模型的可用性和用户体验，需要模型和服务端的精细化配置与调优。
*   **功能集成与支持**:
    *   Issue [#365](https://github.com/netease-youdao/LobsterAI/issues/365) 和 [#362](https://github.com/netease-youdao/LobsterAI/issues/362) 分别提出了对 LM-Studio 和腾讯 Code Plan 的支持需求，表明用户希望 LobsterAI 能够连接更多本地及云端 AI 服务。
    *   Issue [#364](https://github.com/netease-youdao/LobsterAI/pull/364) 和 [#363](https://github.com/netease-youdao/LobsterAI/pull/363) （已关闭）分别实现了对飞书 IM 和 Discord 的集成，显示了项目在多端消息互联方面的积极进展。
*   **部署与运行问题**:
    *   Issue [#368](https://github.com/netease-youdao/LobsterAI/issues/368) 报告了在 Ubuntu 24.04 LTS 环境下部署 `.deb` 包后应用无法打开的现象，这可能涉及到环境兼容性或安装脚本的 bug。
    *   Issue [#366](https://github.com/netease-youdao/LobsterAI/issues/366) 提出了 `openclaw gateway status` 失败的问题，并指出服务配置可能已过时或存在异常，需要对网关服务的配置进行检查。
    *   Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 遇到了本地部署模型调用失败（502 错误）的情况，虽然连接和 API 测试正常，但在 LobsterAI 中却出现网络错误，这可能与内部网络转发或模型服务接口的适配有关。
*   **日常使用反馈**: Issue [#369](https://github.com/netease-youdao/LobsterAI/issues/369) 反映了定时任务通知未能正常发送的问题，以及 Issue [#357](https://github.com/netease-youduanpai/LobsterAI/issues/357) 和 [#358](https://github.com/netease-youduanpai/LobsterAI/issues/358) 对AI读取图片时卡死和任务未跑完就完成的反馈，都属于用户日常使用中遇到的体验性问题，需要持续关注和优化。

## 最值得关注的动态

1.  **UI 文件上传功能增强**: PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371) 实现了“主界面附件支持多文件选择”，这是用户界面上的一项重要改进，能够显著提升用户上传多个文件时的便捷性。
2.  **IM 消息处理机制优化**: PR [#374](https://github.com/netease-youdao/LobsterAI/pull/374) 提出通过异步消息处理来防止 IM 平台超时，并引入了任务进度的更新机制，对于保障长任务的稳定性以及用户实时了解任务状态至关重要。
3.  **本地模型调用与环境配置问题**：Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 和 [#368](https://github.com/netease-youduanpai/LobsterAI/issues/368) 反映的本地模型调用失败和部署问题，是影响用户本地化部署和使用的关键痛点，需要社区和维护者共同排查解决方案。

## 参考链接

*   [#370 "输入一个你好，怎么就超token数了？"](https://github.com/netease-youdao/LobsterAI/issues/370)
*   [#369 "定时任务中的通知问题"](https://github.com/netease-youdao/LobsterAI/issues/369)
*   [#368 "ubuntu Ubuntu 24.04.4 LTS node24 npm11 自己编码的deb文件，安装完后打不开，界面一片空白没有 任何显示"](https://github.com/netease-youdao/LobsterAI/issues/368)
*   [#366 "请问 gateway 是跑在 18789端口吗？为什么 openclaw gateway status 会失败"](https://github.com/netease-youdao/LobsterAI/issues/366)
*   [#365 "Add LM-Stuidio support"](https://github.com/netease-youdao/LobsterAI/issues/365)
*   [#362 "如果想连腾讯code paln，能连么？"](https://github.com/netease-youdao/LobsterAI/issues/362)
*   [#360 "本地部署的模型调用失败问题"](https://github.com/netease-youdao/LobsterAI/issues/360)
*   [#361 "聊天界面无法显示图片"](https://github.com/netease-youdao/LobsterAI/issues/361)
*   [#120 "需要企业微信渠道"](https://github.com/netease-youdao/LobsterAI/issues/120)
*   [#320 "请问能否配置出龙虾军团呢?"](https://github.com/netease-youdao/LobsterAI/issues/320)
*   [#357 "每次让ai读取图片都会出现卡死情况"](https://github.com/netease-youdao/LobsterAI/issues/357)
*   [#358 "经常出现没跑完就任务完成了。"](https://github.com/netease-youdao/LobsterAI/issues/358)
*   [#375 "fix: 修复 mac 端 node 环境污染的问题"](https://github.com/netease-youdao/LobsterAI/pull/375)
*   [#374 "fix: Add async message handler to prevent IM platform timeout"](https://github.com/netease-youdao/LobsterAI/pull/374)
*   [#373 "fix: Add async message handler to prevent IM platform timeout"](https://github.com/netease-youdao/LobsterAI/pull/373)
*   [#372 "fix: Add async message handler to prevent IM platform timeout"](https://github.com/netease-youdao/LobsterAI/pull/372)
*   [#371 "feat: 主界面附件支持多文件选择"](https://github.com/netease-youdao/LobsterAI/pull/371)
*   [#5 "fix: 配置 ESLint 规则并修复未使用变量问题"](https://github.com/netease-youdao/LobsterAI/pull/5)
*   [#367 "fix: import mcp json streamable http configs"](https://github.com/netease-youdao/LobsterAI/pull/367)
*   [#364 "feat: 飞书im支持openclaw"](https://github.com/netease-youdao/LobsterAI/pull/364)
*   [#363 "feat: discord使用openclaw实现"](https://github.com/netease-youdao/LobsterAI/pull/363)
*   [#359 "fix： Telegram openclaw实现相关的bugfix"](https://github.com/netease-youdao/LobsterAI/pull/359)
*   [#356 "Feat/oc im telegram"](https://github.com/netease-youdao/LobsterAI/pull/356)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:05:50.095Z