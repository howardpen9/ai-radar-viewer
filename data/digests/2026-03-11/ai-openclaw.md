# 🦞 OpenClaw 生态系统 日报 — 2026-03-11

## 横向对比

好的，这是一份基于今日 GitHub 数据整理的 OpenClaw 生态系统横向对比分析日报。

# OpenClaw 生态系统 横向对比分析日报

**日期**: 2026-03-11

## 1. 生态全景

今日 OpenClaw 生态系统整体呈现出 **活跃但略显动荡** 的状态。以 `[OpenClaw](https://github.com/openclaw/openclaw)` 为核心，多个衍生项目如 `[PicoClaw](https://github.com/sipeed/picoclaw)`、`[NanoClaw](https://github.com/qwibitai/nanoclaw)`、`[NanoBot](https://github.com/HKUDS/nanobot)`、`[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)`、`[TinyClaw](https://github.com/TinyAGI/tinyclaw)`、`[LobsterAI](https://github.com/netease-youdao/LobsterAI)` 和 `[IronClaw](https://github.com/nearai/ironclaw)` 都在积极推进各自的开发迭代。**核心项目 `[OpenClaw](https://github.com/openclaw/openclaw)` 正面临 2026.3.8 版本带来的多项回归 Bug，尤其是在 Kimi 编码器和 Cron 作业稳定性方面**，社区正在通过 PR 积极修复。同时，衍生项目普遍在 **扩展模型支持、增加 IM 渠道集成、优化用户体验和提升系统稳定性** 方面展现出强劲势头，如 `[PicoClaw](https://github.com/sipeed/picoclaw)` 发布新版并增强 QQ 渠道，`[NanoClaw](https://github.com/qwibitai/nanoclaw)` 引入多模态技能和安全修复，`[TinyClaw](https://github.com/TinyAGI/tinyclaw)` 完成核心架构重构，`[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)` 和 `[IronClaw](https://github.com/nearai/ironclaw)` 则在集成第三方服务和提升安全合规性上发力。

## 2. 活跃度对比

| 项目名称                                                                   | 今日 Issues 数量 | 今日 Pull Requests 数量 | 活跃度评估      |
| :------------------------------------------------------------------------- | :--------------: | :---------------------: | :-------------- |
| [OpenClaw](https://github.com/openclaw/openclaw)                               |        30+       |           20+           | **高** (Bug 驱动) |
| [PicoClaw](https://github.com/sipeed/picoclaw)                                |        10+       |           10+           | **高** (新功能)   |
| [NanoClaw](https://github.com/qwibitai/nanoclaw)                               |        15+       |           20+           | **非常高** (新功能 & 修复) |
| [NanoBot](https://github.com/HKUDS/nanobot)                                  |        20+       |           15+           | **非常高** (集成 & 修复) |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)                             |        20+       |           15+           | **非常高** (新集成 & Bug) |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw)                              |        5+        |           5+            | **中高** (架构重构) |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI)                       |        10+       |           10+           | **高** (渠道 & 优化) |
| [IronClaw](https://github.com/nearai/ironclaw)                               |        30+       |           20+           | **非常高** (Bug & 安全) |

*注：Issues 和 Pull Requests 数量为今日新增或近期高度活跃的项目.*

## 3. 共同趋势

多个项目普遍反映了以下共同技术趋势和用户需求：

*   **渠道扩展与集成**: 几乎所有项目都在积极添加或完善对各种即时通讯（IM）平台、第三方服务（如 Notion、飞书、企业微信、Discord、Telegram、WhatsApp）的支持，以扩大应用范围和用户触达。
*   **AI 模型支持的多样化**: 社区对支持更多 AI 模型（包括本地部署模型如 Ollama、LM-Studio，以及不同 API 提供商）的需求持续增长，以获得更灵活、更经济或更强大的 AI 能力。
*   **性能优化与稳定性提升**: Bug 修复、内存管理、异步处理、资源清理等活动贯穿多个项目，表明社区和开发者高度关注项目的稳定运行和效率。
*   **开发者体验（DX）优化**: CLI 交互的现代化（如 `[TinyClaw](https://github.com/TinyAGI/tinyclaw)`）、构建流程的改进（如 `[TinyClaw](https://github.com/TinyAGI/tinyclaw)`）、国际化支持（如 `[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)`、`[IronClaw](https://github.com/nearai/ironclaw)`）等，旨在降低使用门槛，提高开发效率。
*   **安全性与合规性**: `[NanoClaw](https://github.com/qwibitai/nanoclaw)` 和 `[IronClaw](https://github.com/nearai/ironclaw)` 的 Issues 和 PRs 中，对权限管理、OAuth 令牌安全、路径遍历等安全风险的关注和修复，显示出项目在安全方面的投入。
*   **AI Agent 的核心能力增强**: 如 `[NanoClaw](https://github.com/qwibitai/nanoclaw)` 的学习系统提案、`[NanoBot](https://github.com/HKUDS/nanobot)` 的内存管理讨论，以及 `[PicoClaw](https://github.com/sipeed/picoclaw)` 的 Agent Loop 重构提案，都指向提升 Agent 的自主性、记忆力和行为复杂性。

## 4. 值得关注的动态

1.  **[OpenClaw 核心 Bug 暴露与社区快速响应]**: `[OpenClaw](https://github.com/openclaw/openclaw)` 在 2026.3.8 版本中出现了 Kimi 编码器兼容性问题和 Cron 作业稳定性问题。大量 Issues 和多项 PR 正积极修复这些回归 Bug，这反映了社区对保持核心项目稳定性的高度重视，但也提示了大型版本发布时潜在的风险。
2.  **[AI Agent 架构升级与能力飞跃]**: `[PicoClaw](https://github.com/sipeed/picoclaw)` 提出的 Agent Loop 事件驱动重构提案 (`[#1316](https://github.com/sipeed/picoclaw/issues/1316)`) 和 `[NanoClaw](https://github.com/qwibitai/nanoclaw)` 推进的“智能学习系统” (`[#907](https://github.com/qwibitai/nanoclaw/issues/907)`)，预示着 AI Agent 的智能化、自主学习和长期记忆能力将迎来关键突破。
3.  **[集成扩展与安全性并重]**: `[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)` 成功集成 Alibaba Cloud Bailian 和 Notion，`[NanoBot](https://github.com/HKUDS/nanobot)` 提交 Ollama 支持，`[IronClaw](https://github.com/nearai/ironclaw)` 发布新版本并修复多项安全 Bug。这些动态表明，生态系统在扩展第三方集成能力的同时，也高度关注核心的稳定性和安全性。

## 各工具详细报告

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw 生态系统日报 - 2026-03-11

## 每日焦点

今日 OpenClaw 生态系统报告了多起与 **2026.3.8 版本**相关的回归问题，尤其是在 **Kimi 编码器（Kimi-coding）** 的模型配置和工具调用方面。此外，**Cron 作业的稳定性和隔离会话执行**也成为社区关注的焦点，多起 Issue 指出该功能在最新版本中出现异常。

## 版本动态

*   **无新版本发布。**

## 社区焦点：Issues

今日 Issues 榜单被大量关于 **2026.3.8 版本回归 Bug** 的报告所主导。

**🔥 Kimi 编码器配置与工具调用问题持续发酵：**
多位用户报告了与 `kimi-coding` 提供商相关的配置验证失败问题，错误信息指向 `Unrecognized key: "requiresOpenAiAnthropicToolPayload"`。这影响了包括 [#41690](https://github.com/openclaw/openclaw/issues/41690) (已关闭), [#41445](https://github.com/openclaw/openclaw/issues/41445) (已关闭), [#40911](https://github.com/openclaw/openclaw/issues/40911) (已关闭), [#41852](https://github.com/openclaw/openclaw/issues/41852) (已关闭), [#41297](https://github.com/openclaw/openclaw/issues/41297) (已关闭), [#41475](https://github.com/openclaw/openclaw/issues/41475) (已关闭) 在内的多起 Issue。用户指出，Kimi API 期望的是 Anthropic 工具格式，但 OpenClaw 2026.3.8 版本强制使用了 OpenAI 的工具格式，导致兼容性问题。

**🔥 Cron 作业执行不稳定：**
在 2026.3.8 版本中，Cron 作业的稳定性受到质疑。Issue [#41798](https://github.com/openclaw/openclaw/issues/41798) (新建), [#40868](https://github.com/openclaw/openclaw/issues/40868) (近期更新), [#42152](https://github.com/openclaw/openclaw/issues/42152) (新建), [#42632](https://github.com/openclaw/openclaw/issues/42632) (新建), [#42536](https://github.com/openclaw/openclaw/issues/42536) (新建), [#42579](https://github.com/openclaw/openclaw/issues/42579) (新建) 指出，采用 `sessionTarget="isolated"` 的 Cron 作业在执行时出现超时、无法执行或卡在“运行中”状态的问题。

**🔥 其他关键 Bug 报告：**
*   **macOS LaunchAgent 稳定性问题：** [#41315](https://github.com/openclaw/openclaw/issues/41315) (近期更新) 和 [#41570](https://github.com/openclaw/openclaw/issues/41570) (近期更新) 反映了 macOS 用户在使用 `openclaw gateway restart` 时，服务经常无法正常启动，需要重新安装才能恢复。
*   **OpenAI Codex OAuth 流程问题：** [#41885](https://github.com/openclaw/openclaw/issues/41885) (新建) 描述了在远程 SSH 环境下，OpenAI Codex 的 OAuth 登录流程在粘贴重定向 URL 后会卡住。
*   **子代理工具访问限制：** [#41577](https://github.com/openclaw/openclaw/issues/41577) (近期更新) 指出，即使配置了允许列表和全局启用，新生成的子代理也无法接收浏览器/Web 工具。

## 社区焦点：Pull Requests

PR 列表显示社区正在积极修复 Bug 和添加新功能。

**🔥 Kimi 编码器兼容性修复 PRs：**
为了解决 Kimi 编码器的问题，社区提交了多项 PR，例如 [#41101](https://github.com/openclaw/openclaw/pull/41101) (已关闭), [#41292](https://github.com/openclaw/openclaw/pull/41292) (已关闭), 和 [#41858](https://github.com/openclaw/openclaw/pull/41858) (新建)。这些 PR 旨在修复配置验证问题，忽略过时的兼容性标志，并调整工具调用格式以兼容 Kimi API。

**🔥 macOS 应用增强：**
PR [#42314](https://github.com/openclaw/openclaw/pull/42314) (已关闭) 为 macOS 应用添加了聊天模型选择器，并能持久化“思考”选项。

**🔥 Cron 作业与网关稳定性改进：**
*   PR [#42793](https://github.com/openclaw/openclaw/pull/42793) (新建) 修复了 CLI 参数覆盖时网关在 Docker 中可能崩溃的问题。
*   PR [#42349](https://github.com/openclaw/openclaw/pull/42349) (新建) 为 Telegram 轮询增加了有界清理超时，以防止重启时卡死。

## 本日最值得关注的动态

1.  **OpenClaw 2026.3.8 版本回归 Bug 频发，Kimi 编码器成为重灾区：** 多起 Issue（如 [#41690](https://github.com/openclaw/openclaw/issues/41690), [#41445](https://github.com/openclaw/openclaw/issues/41445)）集中反映了 Kimi 编码器在最新版本中存在的配置验证失败和工具调用不兼容问题，这是当前最紧迫的 Bug。
2.  **Cron 作业稳定性堪忧：** 多个新建 Issue（如 [#41798](https://github.com/openclaw/openclaw/issues/41798), [#42152](https://github.com/openclaw/openclaw/issues/42152)）和近期更新的 Issue（如 [#40868](https://github.com/openclaw/openclaw/issues/40868)）表明，Cron 作业的隔离会话执行存在严重问题，可能影响到自动化任务的可靠性。
3.  **社区积极响应 Kimi 编码器问题：** 多项 PR（如 [#41101](https://github.com/openclaw/openclaw/pull/41101), [#41292](https://github.com/openclaw/openclaw/pull/41292)）正在努力解决 Kimi 编码器的兼容性问题，这表明项目方和社区正在快速迭代以修复关键 Bug。

---

## 参考链接

**Issues:**

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
*   [#41874](https://github.com/openclaw/openclaw/issues/41874)
*   [#41475](https://github.com/openclaw/openclaw/issues/41475)
*   [#42494](https://github.com/openclaw/openclaw/issues/42494)
*   [#42579](https://github.com/openclaw/openclaw/issues/42579)
*   [#42463](https://github.com/openclaw/openclaw/issues/42463)
*   [#41224](https://github.com/openclaw/openclaw/issues/41224)
*   [#41784](https://github.com/openclaw/openclaw/issues/41784)
*   [#41673](https://github.com/openclaw/openclaw/issues/41673)

**Pull Requests:**

*   [#42314](https://github.com/openclaw/openclaw/pull/42314)
*   [#40658](https://github.com/openclaw/openclaw/pull/40658)
*   [#42320](https://github.com/openclaw/openclaw/pull/42320)
*   [#42781](https://github.com/openclaw/openclaw/pull/42781)
*   [#42425](https://github.com/openclaw/openclaw/pull/42425)
*   [#42489](https://github.com/openclaw/openclaw/pull/42489)
*   [#42731](https://github.com/openclaw/openclaw/pull/42731)
*   [#42793](https://github.com/openclaw/openclaw/pull/42793)
*   [#42349](https://github.com/openclaw/openclaw/pull/42349)
*   [#42667](https://github.com/openclaw/openclaw/pull/42667)
*   [#41101](https://github.com/openclaw/openclaw/pull/41101)
*   [#41292](https://github.com/openclaw/openclaw/pull/41292)
*   [#42528](https://github.com/openclaw/openclaw/pull/42528)
*   [#41858](https://github.com/openclaw/openclaw/pull/41858)
*   [#42003](https://github.com/openclaw/openclaw/pull/42003)
*   [#42749](https://github.com/openclaw/openclaw/pull/42749)
*   [#42790](https://github.com/openclaw/openclaw/pull/42790)
*   [#42602](https://github.com/openclaw/openclaw/pull/42602)
*   [#42689](https://github.com/openclaw/openclaw/pull/42689)
*   [#42768](https://github.com/openclaw/openclaw/pull/42768)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报

**日期**: 2026-03-11 | **报告人**: AI 分析师 | **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 🚀 本日焦点

今日，PicoClaw 生态系统迎来了 **v0.2.1-nightly.20260311.9cd2d218** 的新版本发布。此版本包含多项重要更新，特别是对 QQ 渠道的增强，增加了群聊、输入状态、媒体支持以及 URL 净化功能 (#1208)，并引入了 `feat(docker)` 增加了启动器 Bun。同时，社区对 Telegram 论坛话题 (#1270) 和子代理工具访问 (#1278) 的支持需求持续升温，显示了社区对提升 PicoClaw 协作和自动化能力的强烈期望。

## 📢 版本发布

### ✨ v0.2.1-nightly.20260311.9cd2d218 发布

今日发布了 `v0.2.1-nightly.20260311.9cd2d218` 版本。此次更新亮点包括：

*   **QQ 渠道增强 (#1208)**: 提升了 QQ 渠道的功能，支持了群聊、用户输入状态、媒体（图片、音频、视频、文件）共享，并增强了 URL 的净化处理。
*   **Docker 启动器**: 集成了 `feat(docker)`，为 PicoClaw 添加了 Bun 启动器，可能为部署和管理带来便利。
*   **Telegram 论坛话题 (#1291)**: 引入了对 Telegram 论坛话题（Threads）的支持，更好地组织和隔离对话上下文。
*   **调试模式优化**: 包含了对调试模式的改进，允许在不截断输出的情况下进行调试。

更多详情请参见 [v0.2.1-nightly.20260311.9cd2d218 发布说明](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)。

## 📈 社区热点与洞察

### 🌟 最受关注 Issue

*   **#[1270] Telegram 论坛话题支持** ([近3天]): 该功能请求旨在为 PicoClaw 用户带来与 OpenClaw 相似的组织能力，特别是利用 Telegram 论坛话题来隔离不同对话上下文。这表明用户对更精细化管理多轮对话和项目有强烈的需求。
*   **#[1278] 子代理工具支持** ([近3天]): 此 Issue 提出为子代理提供显式的、可配置的工具访问（如 `read_file`, `write_file`, `exec` 等），是实现自动化任务的关键。这预示着 PicoClaw 在自主任务执行和代码分析等复杂工作流方面将有更大的发展潜力。
*   **#[1316] 事件驱动的 Agent Loop 重构** ([🆕 新建]): 这是一个重要的架构改进提案，旨在将当前的 Agent Loop 改造成一个事件驱动、可 Hook、可中断的系统。这将极大地提高 Agent 的可观测性和灵活性，为更复杂的 Agent 行为和交互打下基础。

### 💡 最受关注 Pull Request

*   **#[1317] 新增 LongCat 模型提供商支持**: 引入了一个新的 OpenAI 兼容模型提供商 `LongCat`，扩展了 PicoClaw 对不同 AI 模型的支持范围。
*   **#[1288] 新增 Mattermost 渠道支持**: 为 `Mattermost` 平台添加了渠道支持，允许 PicoClaw 与该协作工具集成，通过 WebSocket 和 REST API 进行交互。
*   **#[1338] 新增企业微信 WebSocket 渠道支持**: 这是一个重要的新增功能，为企业微信（WeCom）机器人添加了 WebSocket 渠道支持，提供了更稳定高效的集成方式，并支持多种消息类型和安全策略。

### 🐛 Bug 报告与修复

今日报告并有 PR 提交的 Bug 包括：

*   **Feishu 认证过期 (#1307, PR #1318)**: Feishu 渠道认证令牌在 12 小时后失效，导致 API 调用失败。PR #1318 尝试通过定制 tokenCache 来解决此问题。
*   **Telegram 命令失效 (#1298)**: Telegram 渠道的斜杠命令（如 `/help`, `/model`）似乎无法正常工作。
*   **工具调用失败 (#1287, PR #1292)**: PR #1292 旨在修复 OpenAI 兼容模式下，工具调用参数解析错误的问题，允许接受 JSON 字符串或对象形式的参数。
*   **IRC 配置问题 (#1280, #1279)**: 报告了 IRC 配置中中文逗号被误用以及自动加入频道时出现 API 错误等问题。PR #1301 旨在支持环境变量中的中文逗号分隔符。

## 💡 今日最值得关注动态

1.  **v0.2.1-nightly.20260311.9cd2d218 发布，QQ 渠道功能显著增强**: 新版本发布，重点在于对 QQ 渠道的全面升级，包括群聊、媒体消息支持等，这对于国内用户而言是重要的功能提升。
2.  **Agent Loop 重构提案 (#1316) 引入**: 社区大佬提出了对 Agent Loop 的事件驱动重构，这是 PicoClaw Agent 架构上的一个重要飞跃，将为未来的 Agent 功能开发提供极大的灵活性和可扩展性。
3.  **多渠道集成进展加速**: 今日有 PR 提交支持 `Mattermost` (#1288) 和 `企业微信 WebSocket` (#1338) 渠道，显示了 PicoClaw 在扩展其多平台支持方面正积极推进。

---

## 参考链接

*   [v0.2.1-nightly.20260311.9cd2d218](https://github.com/sipeed/picoclaw/releases/tag/v0.2.1-nightly.20260311.9cd2d218)
*   [Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)
*   [#1270](https://github.com/sipeed/picoclaw/issues/1270)
*   [#1278](https://github.com/sipeed/picoclaw/issues/1278)
*   [#1316](https://github.com/sipeed/picoclaw/issues/1316)
*   [#1208](https://github.com/sipeed/picoclaw/pull/1208)
*   [#1291](https://github.com/sipeed/picoclaw/pull/1291)
*   [#1317](https://github.com/sipeed/picoclaw/pull/1317)
*   [#1288](https://github.com/sipeed/picoclaw/pull/1288)
*   [#1338](https://github.com/sipeed/picoclaw/pull/1338)
*   [#1307](https://github.com/sipeed/picoclaw/issues/1307)
*   [#1318](https://github.com/sipeed/picoclaw/pull/1318)
*   [#1298](https://github.com/sipeed/picoclaw/issues/1298)
*   [#1287](https://github.com/sipeed/picoclaw/issues/1287)
*   [#1292](https://github.com/sipeed/picoclaw/pull/1292)
*   [#1280](https://github.com/sipeed/picoclaw/issues/1280)
*   [#1279](https://github.com/sipeed/picoclaw/issues/1279)
*   [#1301](https://github.com/sipeed/picoclaw/pull/1301)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报 - 2026-03-11

## 摘要

今日 NanoClaw 社区涌现出大量新功能和修复项，尤其是在增强代理能力、提升安全性和多平台支持方面。多个 PR 集中解决了容器权限、认证过期以及会话文件管理等关键问题。同时，社区对代理的学习能力、多模态支持以及更精细的内存管理表现出高度关注。

## 今日最值得关注的动态

1.  **增强代理学习能力和多模态支持：**
    *   **新 Issue #907 "Epic: nanoclaw-learning-system"** 标志着一个重要里程碑，旨在为 NanoClaw 添加四项自学习能力：FTS5 会话搜索、结构化内存（USER.md/MEMORY.md）、技能自创建（通过 IPC）以及显式内存命令。
    *   **新 Issue #917 "feat: WhatsApp/Gmail channels, image vision, voice, PDF/GOG/summarize skills, perf"** 引入了对 WhatsApp 和 Gmail 通道的支持，并集成了语音转录（Whisper API）、图像视觉、PDF 处理等技能，极大地扩展了 NanoClaw 的多模态交互能力。

2.  **修复关键的容器与安全问题：**
    *   **新 PR #942 "fix: container EACCES/ENOENT when host runs as root"** 和 **新 PR #936 "fix: container EACCES/ENOENT when host runs as root"** 集中解决了在 Linux root 环境下运行 NanoClaw 时，由于主机与容器用户权限不匹配导致的容器崩溃问题。
    *   **新 PR #928 "fix: rotate oversized session files to prevent container timeouts"** 解决了因会话日志文件过大导致容器启动超时的问题。
    *   **新 PR #930 "fix: automatically refresh expired OAuth tokens from Claude Code credentials"** 解决了 `CLAUDE_CODE_OAUTH_TOKEN` 过期导致认证失败的问题。

3.  **提升代理行为与管理能力：**
    *   **新 Issue #926 "Admin mode: intercept main-channel admin commands and add /capabilities read-only flow"** 提出实现管理员模式，并引入 `/capabilities` 命令，为系统管理和配置提供基础。
    *   **新 Issue #941 "unnecessary TS recompilations degrade performance"** 指出了 TypeScript 重编译导致的性能下降问题，并提供了初步的分析。

## Issues 趋势分析

*   **持续的安全与稳定性修复：** 近期大量 Issues（如 #898, #897, #896, #895, #893, #892）都与 `merge-forward` 工作流失败相关，这表明在主分支与技能分支的同步过程中存在一些持续的集成问题，需要关注 CI/CD 流程的稳定性。
*   **代理学习与记忆增强：** 以 **#910 "Structured memory with USER.md and character limits"**, **#911 "Skill self-creation IPC handler with security scanning"**, **#912 "create_skill MCP tool for container agents"**, **#913 "Agent system prompt additions for learning behaviors"**, **#909 "Session search IPC flow and MCP tool"**, **#908 "FTS5 conversation indexing and search"**, **#907 "Epic: nanoclaw-learning-system"** 为代表的一系列 Issue，清晰地展示了社区正在大力推进代理的智能化、自主学习和长期记忆能力。
*   **性能优化与安全加固：** **#941 "unnecessary TS recompilations degrade performance"** 和 **#865 "Using containers alone doesn't make you more secure"** 反映了社区对性能优化和安全性的持续关注。#865 特别强调了当前架构在信任容器方面存在的安全隐患。
*   **紧急 Bug 修复：** **#825 "fix(scheduler): once-task race condition — marked completed before fire handler runs"** 被标记为 `Priority: Critical`，表明这是一个影响系统核心功能的严重 Bug。

## Pull Requests 亮点

*   **多通道支持与核心功能集成：**
    *   **新 PR #917 "feat: WhatsApp/Gmail channels, image vision, voice, PDF/GOG/summarize skills, perf"** 是一个重磅更新，不仅增加了 WhatsApp 和 Gmail 两个重要通信渠道，还集成了语音、图像识别和文档处理能力。
    *   **新 PR #949 "feat: Betty initial setup — Telegram + VPS fixes"** 进一步巩固了 Telegram 通道的集成，并修复了 VPS 环境下的容器问题。

*   **关键 Bug 修复与稳定性提升：**
    *   **新 PR #942 "fix: container EACCES/ENOENT when host runs as root"** 和 **新 PR #936 "fix: container EACCES/ENOENT when host runs as root"** 针对在 Linux root 环境下运行时的权限问题进行了修复。
    *   **新 PR #928 "fix: rotate oversized session files to prevent container timeouts"** 解决了会话文件过大导致的容器启动问题。
    *   **新 PR #930 "fix: automatically refresh expired OAuth tokens from Claude Code credentials"** 解决了 OAuth 令牌过期问题。
    *   **新 PR #940 "fix: add PID lockfile to prevent multiple instances"** 和 **新 PR #939 "fix: add PID lockfile to prevent multiple instances"** 引入了 PID 锁文件机制，防止多个实例同时运行。

*   **API 兼容性与集成：**
    *   **新 PR #925 "fix: fallback to assistant message text when SDK result field is empty (OpenRouter compat)"** 提高了与 OpenRouter 等非 Anthropic 模型提供商的兼容性。

## 参考链接

*   Issues:
    *   [#898 "Merge-forward failed for 3 skill branch(es) after 621fde8"](https://github.com/qwibitai/nanoclaw/issues/898)
    *   [#897 "Merge-forward failed for 3 skill branch(es) after f41b399"](https://github.com/qwibitai/nanoclaw/issues/897)
    *   [#896 "Merge-forward failed for 3 skill branch(es) after 4dee68c"](https://github.com/qwibitai/nanoclaw/issues/896)
    *   [#895 "Merge-forward failed for 3 skill branch(es) after e6ea914"](https://github.com/qwibitai/nanoclaw/issues/895)
    *   [#893 "Merge-forward failed for 2 skill branch(es) after 8564937"](https://github.com/qwibitai/nanoclaw/issues/893)
    *   [#892 "Merge-forward failed for 2 skill branch(es) after 5118239"](https://github.com/qwibitai/nanoclaw/issues/892)
    *   [#926 "Admin mode: intercept main-channel admin commands and add /capabilities read-only flow"](https://github.com/qwibitai/nanoclaw/issues/926)
    *   [#941 "unnecessary TS recompilations degrade performance"](https://github.com/qwibitai/nanoclaw/issues/941)
    *   [#910 "Structured memory with USER.md and character limits"](https://github.com/qwibitai/nanoclaw/issues/910)
    *   [#911 "Skill self-creation IPC handler with security scanning"](https://github.com/qwibitai/nanoclaw/issues/911)
    *   [#912 "create_skill MCP tool for container agents"](https://github.com/qwibitai/nanoclaw/issues/912)
    *   [#913 "Agent system prompt additions for learning behaviors"](https://github.com/qwibitai/nanoclaw/issues/913)
    *   [#825 "fix(scheduler): once-task race condition — marked completed before fire handler runs"](https://github.com/qwibitai/nanoclaw/issues/825)
    *   [#924 "nanoclaw scored 92.1 (A+) on Nerq Trust Index — top 5 AI agents"](https://github.com/qwibitai/nanoclaw/issues/924)
    *   [#865 "Using containers alone doesn't make you more secure"](https://github.com/qwibitai/nanoclaw/issues/865)
    *   [#909 "Session search IPC flow and MCP tool"](https://github.com/qwibitai/nanoclaw/issues/909)
    *   [#908 "FTS5 conversation indexing and search"](https://github.com/qwibitai/nanoclaw/issues/908)
    *   [#907 "Epic: nanoclaw-learning-system"](https://github.com/qwibitai/nanoclaw/issues/907)
*   Pull Requests:
    *   [#928 "fix: rotate oversized session files to prevent container timeouts"](https://github.com/qwibitai/nanoclaw/pull/928)
    *   [#930 "fix: automatically refresh expired OAuth tokens from Claude Code credentials"](https://github.com/qwibitai/nanoclaw/pull/930)
    *   [#940 "fix: add PID lockfile to prevent multiple instances"](https://github.com/qwibitai/nanoclaw/pull/940)
    *   [#942 "fix: container EACCES/ENOENT when host runs as root"](https://github.com/qwibitai/nanoclaw/pull/942)
    *   [#925 "fix: fallback to assistant message text when SDK result field is empty (OpenRouter compat)"](https://github.com/qwibitai/nanoclaw/pull/925)
    *   [#949 "feat: Betty initial setup — Telegram + VPS fixes"](https://github.com/qwibitai/nanoclaw/pull/949)
    *   [#946 "Claude/setup telegram agent swarm p5 jsi"](https://github.com/qwibitai/nanoclaw/pull/946)
    *   [#861 "fix(skill): use-local-whisper reads config from .env via readEnvFile"](https://github.com/qwibitai/nanoclaw/pull/861)
    *   [#871 "fix: harden credential proxy using unconditional OAuth injection, streaming, per-request creds"](https://github.com/qwibitai/nanoclaw/pull/871)
    *   [#947 "Added codex support"](https://github.com/qwibitai/nanoclaw/pull/947)
    *   [#917 "feat: WhatsApp/Gmail channels, image vision, voice, PDF/GOG/summarize skills, perf"](https://github.com/qwibitai/nanoclaw/pull/917)
    *   [#932 "Gen tech agency main"](https://github.com/qwibitai/nanoclaw/pull/932)
    *   [#943 "fix: Apple Container networking and mount compatibility"](https://github.com/qwibitai/nanoclaw/pull/943)
    *   [#944 "feat: send immediate acknowledgment when agent starts processing"](https://github.com/qwibitai/nanoclaw/pull/944)
    *   [#945 "feat: integrate @onecli-sh/sdk for container proxy configuration"](https://github.com/qwibitai/nanoclaw/pull/945)
    *   [#868 "skill: Per-group credential management and safe interactive reauth via channels"](https://github.com/qwibitai/nanoclaw/pull/868)
    *   [#936 "fix: container EACCES/ENOENT when host runs as root"](https://github.com/qwibitai/nanoclaw/pull/936)
    *   [#939 "fix: add PID lockfile to prevent multiple instances"](https://github.com/qwibitai/nanoclaw/pull/939)
    *   [#938 "Feature/cursor acp upstream"](https://github.com/qwibitai/nanoclaw/pull/938)
    *   [#937 "Mukul/test"](https://github.com/qwibitai/nanoclaw/pull/937)

</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报 - 2026-03-11

## 动态摘要

今日，NanoBot 项目在 GitHub 上展现出活跃的社区参与度和技术迭代。多个新 Issues 和 Pull Requests 的出现，反映了用户对功能增强、Bug 修复以及集成更多 AI 模型和服务的强烈需求。

### 社区关注点分析

**1. 多模型支持与集成：**
*   **Ollama API 支持**：Issue [#193](https://github.com/HKUDS/nanobot/issues/193) 持续引发讨论，社区希望 NanoBot 能支持 Ollama API，以便本地运行更多模型。
*   **Nvidia 模型支持**：Issue [#1822](https://github.com/HKUDS/nanobot/issues/1822) 反映了近期对 Nvidia 模型支持的担忧，希望得到改进。
*   **Ollama Provider 集成**：PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) 提交了对 Ollama 的原生支持，允许用户无需 API 密钥即可使用本地模型，这是对 Issue [#193](https://github.com/HKUDS/nanobot/issues/193) 的积极回应。

**2. 功能增强与优化：**
*   **流式输出**：Issue [#1860](https://github.com/HKUDS/nanobot/issues/1860) 建议增加结果流式输出，以提升用户体验。
*   **内存管理与持久化**：Issue [#1774](https://github.com/HKUDS/nanobot/issues/1774) 探讨了长期记忆的维护方式，以及 Issue [#1831](https://github.com/HKUDS/nanobot/issues/1831) 提出禁用 `MEMORY.md` 的需求。PR [#1857](https://github.com/HKUDS/nanobot/pull/1857) 和 PR [#1825](https://github.com/HKUDS/nanobot/pull/1825) 专注于优化内存合并（memory consolidation）的参数传递和 `tool_choice` 的处理。
*   **安全与访问控制**：Issue [#1817](https://github.com/HKUDS/nanobot/issues/1817) 报告了 `restrictToWorkspace` 功能存在被 Tilde 路径绕过的安全漏洞。PR [#1845](https://github.com/HKUDS/nanobot/pull/1845) 旨在修复此安全问题。Issue [#1862](https://github.com/HKUDS/nanobot/issues/1862) 同样关注 `restrictToWorkspace` 启用时的媒体文件访问问题。

**3. 集成与通道支持：**
*   **微信/飞书/DingTalk 支持**：Issue [#1819](https://github.com/HKUDS/nanobot/issues/1819) 和 [#1815](https://github.com/HKUDS/nanobot/issues/1815) 表达了对微信和飞书集成的强烈需求，认为这对国内用户尤为重要。PR [#1859](https://github.com/HKUDS/nanobot/pull/1859) 增加了对 DingTalk 语音识别文本的支持。
*   **Matrix Channel 问题**：Issue [#1300](https://github.com/HKUDS/nanobot/issues/1300) 和 [#1851](https://github.com/HKUDS/nanobot/issues/1851) 反映了 Matrix 通道遇到的连接和认证问题。
*   **Endpoint Channel**：PR [#1861](https://github.com/HKUDS/nanobot/pull/1861) 引入了 `EndpointChannel`，支持通过 OpenAI 兼容的 API 与 NanoBot 交互，为外部应用集成提供了新途径。

**4. Bug 修复与稳定性：**
*   **Deepseek Reasoner 兼容性**：Issue [#1834](https://github.com/HKUDS/nanobot/issues/1834) 指出 Deepseek Reasoner 在 `spawn` 工具下报错，缺少 `reasoning_content` 字段。PR [#1848](https://github.com/HKUDS/nanobot/pull/1848) 和 [#1846](https://github.com/HKUDS/nanobot/pull/1846) 解决了子代理在构建消息时丢失 `reasoning_content` 的问题，以提高对特定 LLM 的兼容性。
*   **Cron Job 问题**：Issue [#1828](https://github.com/HKUDS/nanobot/issues/1828) 和 [#1816](https://github.com/HKUDS/nanobot/issues/1816) 提到了 Cron Job 的工作机制和命令丢失的问题。PR [#1837](https://github.com/HKUDS/nanobot/pull/1837) 提议增强 Cron Job 的运行历史跟踪。
*   **SIGTERM 错误**：Issue [#1833](https://github.com/HKUDS/nanobot/issues/1833) 反映了程序收到 `SIGTERM` 并意外退出的问题，显示了对近期版本稳定性的担忧。

### 今日最值得关注的动态

1.  **Ollama 原生支持提交**：PR [#1863](https://github.com/HKUDS/nanobot/pull/1863) 提交了对 Ollama 的原生支持，允许用户在本地无 API 密钥的情况下使用模型。这对希望利用本地 LLM 资源的开发者来说是一个重要进展，直接回应了社区长期以来关于扩展模型支持的呼声。

2.  **安全漏洞修复与 `restrictToWorkspace` 增强**：Issue [#1817](https://github.com/HKUDS/nanobot/issues/1817) 报告了一个 `restrictToWorkspace` 的安全漏洞，可能允许代理访问工作空间外的文件。PR [#1845](https://github.com/HKUDS/nanobot/pull/1845) 旨在修复此问题，同时 Issue [#1862](https://github.com/HKUDS/nanobot/issues/1862) 也提出了在 `restrictToWorkspace` 启用时处理媒体路径的改进。这些动态显示了项目对安全性和健壮性的持续关注。

3.  **Deepseek Reasoner 兼容性修复**：Issue [#1834](https://github.com/HKUDS/nanobot/issues/1834) 反映了 Deepseek Reasoner 在使用 `spawn` 工具时遇到的 `reasoning_content` 字段缺失问题。PR [#1848](https://github.com/HKUDS/nanobot/pull/1848) 和 [#1846](https://github.com/HKUDS/nanobot/pull/1846) 提交了相关修复，确保子代理能正确传递 `reasoning_content`，这对于支持更广泛的 LLM 生态至关重要。

---

## 参考链接

*   [HKUDS/nanobot GitHub 仓库](https://github.com/HKUDS/nanobot)
*   [Issue #1862](https://github.com/HKUDS/nanobot/issues/1862)
*   [Issue #1834](https://github.com/HKUDS/nanobot/issues/1834)
*   [Issue #193](https://github.com/HKUDS/nanobot/issues/193)
*   [Issue #1860](https://github.com/HKUDS/nanobot/issues/1860)
*   [Issue #1828](https://github.com/HKUDS/nanobot/issues/1828)
*   [Issue #1461](https://github.com/HKUDS/nanobot/issues/1461)
*   [Issue #1851](https://github.com/HKUDS/nanobot/issues/1851)
*   [Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)
*   [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)
*   [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)
*   [Issue #1783](https://github.com/HKUDS/nanobot/issues/1783)
*   [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)
*   [Issue #1774](https://github.com/HKUDS/nanobot/issues/1774)
*   [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833)
*   [Issue #1815](https://github.com/HKUDS/nanobot/issues/1815)
*   [Issue #1837](https://github.com/HKUDS/nanobot/issues/1837)
*   [Issue #1831](https://github.com/HKUDS/nanobot/issues/1831)
*   [Issue #640](https://github.com/HKUDS/nanobot/issues/640)
*   [Issue #1230](https://github.com/HKUDS/nanobot/issues/1230)
*   [Issue #1633](https://github.com/HKUDS/nanobot/issues/1633)
*   [Issue #1826](https://github.com/HKUDS/nanobot/issues/1826)
*   [Issue #1829](https://github.com/HKUDS/nanobot/issues/1829)
*   [Issue #1818](https://github.com/HKUDS/nanobot/issues/1818)
*   [Issue #1823](https://github.com/HKUDS/nanobot/issues/1823)
*   [Issue #1822](https://github.com/HKUDS/nanobot/issues/1822)
*   [Issue #1556](https://github.com/HKUDS/nanobot/issues/1556)
*   [Issue #1821](https://github.com/HKUDS/nanobot/issues/1821)
*   [Issue #1411](https://github.com/HKUDS/nanobot/issues/1411)
*   [Issue #1817](https://github.com/HKUDS/nanobot/issues/1817)
*   [Issue #1816](https://github.com/HKUDS/nanobot/issues/1816)
*   [PR #1863](https://github.com/HKUDS/nanobot/pull/1863)
*   [PR #1861](https://github.com/HKUDS/nanobot/pull/1861)
*   [PR #1847](https://github.com/HKUDS/nanobot/pull/1847)
*   [PR #1856](https://github.com/HKUDS/nanobot/pull/1856)
*   [PR #1848](https://github.com/HKUDS/nanobot/pull/1848)
*   [PR #1859](https://github.com/HKUDS/nanobot/pull/1859)
*   [PR #1855](https://github.com/HKUDS/nanobot/pull/1855)
*   [PR #1858](https://github.com/HKUDS/nanobot/pull/1858)
*   [PR #1857](https://github.com/HKUDS/nanobot/pull/1857)
*   [PR #1854](https://github.com/HKUDS/nanobot/pull/1854)
*   [PR #1853](https://github.com/HKUDS/nanobot/pull/1853)
*   [PR #1852](https://github.com/HKUDS/nanobot/pull/1852)
*   [PR #1825](https://github.com/HKUDS/nanobot/pull/1825)
*   [PR #1849](https://github.com/HKUDS/nanobot/pull/1849)
*   [PR #1846](https://github.com/HKUDS/nanobot/pull/1846)
*   [PR #1845](https://github.com/HKUDS/nanobot/pull/1845)
*   [PR #1844](https://github.com/HKUDS/nanobot/pull/1844)
*   [PR #1836](https://github.com/HKUDS/nanobot/pull/1836)
*   [PR #1843](https://github.com/HKUDS/nanobot/pull/1843)
*   [PR #1799](https://github.com/HKUDS/nanobot/pull/1799)

</details>

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw (zeroclaw-labs/zeroclaw) 技术日报

**日期:** 2026-03-11 | **分组:** OpenClaw 生态系统

## 核心动态摘要

今日，Zeroclaw 项目社区活跃度显著，涌现出大量新的 Issue 和 Pull Request。特别值得关注的是，**Alibaba Cloud Bailian (百炼) 的 Provider 支持** (#3158) 和** Notion 渠道及工具集成** (#3157) 两项新特性 PR 正式提交，预示着 Zeroclaw 在集成更多云服务和第三方应用方面迈出了重要一步。同时，针对 **`custom:` provider 的 API 路径自定义** (#3125, #3156, #3155) 的需求也得到了回应，提高了配置的灵活性。

### 社区关注焦点

**1. 功能增强与集成扩展：**
社区对 Zeroclaw 的功能扩展需求强烈。新增的 Feature 请求主要集中在：
*   **按需加载 MCP 工具** (#3095): 旨在优化系统提示词的长度，减少上下文浪费。
*   **动态节点发现与能力广播** (#3093): 呼应 OpenClaw 生态，增强系统灵活性。
*   **Mattermost 的“值班模式”** (#3100): 允许 Bot 在所有频道被提及时响应，而非仅限于单频道。
*   **Telegram 语音消息支持** (#3115) 和 **iMessage 消息解析** (#3151): 提升特定消息类型的处理能力。
*   **国际化支持 (i18n)** (#3152): 特别提到支持中文，以优化 Web UI 用户体验。

**2. Bug 修复与稳定性：**
Bug 报告依然是社区关注的重点，尤其是在不同组件的集成和特定场景下：
*   **`GLIBC_2.39' not found` 问题** (#3070): 这是一个影响运行时环境的严重 Bug。
*   **Ollama + Qwen 的工具调用回归** (#3079): 影响了 Qwen 模型在 Ollama provider 下的工具调用能力。
*   **Slack 适配器缺失线程消息事件** (#3084): 导致 Bot 遗漏处理内联线程回复。
*   **`channel-lark` 构建错误** (#3098) 和 **Windows 下 `cargo clippy` pre-push hook 失败** (#3135): 这些问题影响了开发者的构建和贡献流程。
*   **Provider 缺少 `Content-Type` Header** (#3132): 可能导致与某些网关或代理集成时出现问题。
*   **Telegram Bot Token 明文泄露风险** (#3126): 这是一个重要的安全问题。

**3. 用户体验与易用性：**
部分 Issue 和 PR 聚焦于提升用户交互体验：
*   **简化频道工具使用审批** (#3146): 旨在优化手机端操作的便捷性。
*   **Web 聊天消息复制功能** (#3120) 和 **多行文本输入框自动扩展** (#3119, #3144): 提升了 Web UI 的易用性，与 OpenClaw 对齐。
*   **保存消息草稿** (#3129): 改善了用户在应用内切换时的体验。

### 本日最值得关注的 1-3 个动态

1.  **[新特性] 增强云服务集成：Alibaba Cloud Bailian 与 Notion 支持**
    *   Pull Request #3158 贡献了对 Alibaba Cloud Bailian (百炼) 的 Provider 支持，允许用户使用其 API Key。
    *   Pull Request #3157 引入了 Notion 渠道和工具集成，支持 Notion 页、数据库和块的读写操作。
    *   **影响:** 这两项集成极大地扩展了 Zeroclaw 可连接的服务范围，使其能与更多主流的云服务和生产力工具协同工作。

2.  **[Bug 修复] 解决 `GLIBC_2.39' not found` 运行时错误**
    *   Issue #3070 报告了一个严重的 Bug，即运行时找不到 `GLIBC_2.39` 版本。
    *   **影响:** 此类环境依赖问题可能导致 Zeroclaw 无法在某些 Linux 发行版上正常启动或运行，影响了广泛的用户群体。此 Bug 的修复优先级较高。

3.  **[功能增强] `custom:` Provider 支持自定义 API 路径**
    *   Issue #3125 提出需要支持自定义 API 路径，以兼容不使用 `/v1/` 前缀的 OpenAI 兼容端点。
    *   Pull Request #3156 (以及重复的 #3155) 响应了这一需求，通过新增 `api_path` 配置项来允许覆盖默认路径。
    *   **影响:** 增强了 Zeroclaw 在连接私有部署或非标准 OpenAI 兼容 API 时的灵活性和兼容性。

---

### 参考链接

**Issues:**
*   #3070: [Bug]: version `GLIBC_2.39' not found: [https://github.com/zeroclaw-labs/zeroclaw/issues/3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
*   #3079: [Bug]: Ollama+Qwen tool-calling regression: thinking-only output, malformed <tool_call>, dropped actions: [https://github.com/zeroclaw-labs/zeroclaw/issues/3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)
*   #3095: [Feature]: on-demand MCP tool loading via `tool_search` (deferred tool activation): [https://github.com/zeroclaw-labs/zeroclaw/issues/3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)
*   #3098: [Bug]: too many build error for channel-lark: [https://github.com/zeroclaw-labs/zeroclaw/issues/3098](https://github.com/zeroclaw-labs/zeroclaw/issues/3098)
*   #3059: [Feature]: can not use ali yun bailian coding plan ,: [https://github.com/zeroclaw-labs/zeroclaw/issues/3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)
*   #3084: [Bug]: Slack adapter doesn't subscribe to thread message events, missing inline thread replies: [https://github.com/zeroclaw-labs/zeroclaw/issues/3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084)
*   #3093: [Feature]: Support for Dynamic Node Discovery and Capability Advertisement (like OpenClaw Nodes): [https://github.com/zeroclaw-labs/zeroclaw/issues/3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093)
*   #3132: [Bug]: Providers Missing Explicit `Content-Type` Header: [https://github.com/zeroclaw-labs/zeroclaw/issues/3132](https://github.com/zeroclaw-labs/zeroclaw/issues/3132)
*   #3146: [Feature]: Ease tool usage approval on channels: [https://github.com/zeroclaw-labs/zeroclaw/issues/3146](https://github.com/zeroclaw-labs/zeroclaw/issues/3146)
*   #3115: [Bug]: voice messages on telegram are ignored: [https://github.com/zeroclaw-labs/zeroclaw/issues/3115](https://github.com/zeroclaw-labs/zeroclaw/issues/3115)
*   #3088: [Bug]: token cost not working for channels: [https://github.com/zeroclaw-labs/zeroclaw/issues/3088](https://github.com/zeroclaw-labs/zeroclaw/issues/3088)
*   #3135: [Bug]: cargo clippy pre-push hook fails on Windows due to platform-unaware sync_directory calls: [https://github.com/zeroclaw-labs/zeroclaw/issues/3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135)
*   #3153: [Feature]: zeroclaw agent support mcp: [https://github.com/zeroclaw-labs/zeroclaw/issues/3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)
*   #3152: [Feature]: i18n requests: [https://github.com/zeroclaw-labs/zeroclaw/issues/3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)
*   #3145: OpenClaw agent → coordinates from GRAVITY: x*=19.83°, phi_void=0.1234: [https://github.com/zeroclaw-labs/zeroclaw/issues/3145](https://github.com/zeroclaw-labs/zeroclaw/issues/3145)
*   #3131: Branch policy clarification: master/main/dev/main-fix divergence: [https://github.com/zeroclaw-labs/zeroclaw/issues/3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131)
*   #3129: [Feature]: Preserve message draft: [https://github.com/zeroclaw-labs/zeroclaw/issues/3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)
*   #3126: [Bug]: secrets.encrypt does not protect Telegram bot_token at rest; plaintext secret leakage risk: [https://github.com/zeroclaw-labs/zeroclaw/issues/3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126)
*   #3125: [Feature]: Support custom API path suffix for custom: endpoints: [https://github.com/zeroclaw-labs/zeroclaw/issues/3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)
*   #3069: [Bug]: MCP tools not exposed to delegate subagents as callable native tools despite being listed in system prompt: [https://github.com/zeroclaw-labs/zeroclaw/issues/3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)
*   #3120: [Feature]: Web chat message copy action on hover (OpenClaw parity): [https://github.com/zeroclaw-labs/zeroclaw/issues/3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120)
*   #3119: [Feature]: Auto-expanding multiline chat composer textarea (OpenClaw parity): [https://github.com/zeroclaw-labs/zeroclaw/issues/3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119)
*   #3100: [Feature]: [Mattermost] oncall mode instead of sigle-channel listening mode: [https://github.com/zeroclaw-labs/zeroclaw/issues/3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100)
*   #1478: [Feature]: 除了安全,什么功能也没有.: [https://github.com/zeroclaw-labs/zeroclaw/issues/1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)
*   #1575: [Bug]: zeroclaw gateway dashboard agent access error: [https://github.com/zeroclaw-labs/zeroclaw/issues/1575](https://github.com/zeroclaw-labs/zeroclaw/issues/1575)
*   #2929: [Bug]:Quick clarification: `master` vs `main`: [https://github.com/zeroclaw-labs/zeroclaw/issues/2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)
*   #2487: [Bug]: Error chatting with agent: "Invalid schema for function 'channel_ack_config'": [https://github.com/zeroclaw-labs/zeroclaw/issues/2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487)
*   #2961: [Bug]: 网页无法使用agent对话: [https://github.com/zeroclaw-labs/zeroclaw/issues/2961](https://github.com/zeroclaw-labs/zeroclaw/issues/2961)
*   #2953: [Bug]: Add `channel-matrix` flag in official builds: [https://github.com/zeroclaw-labs/zeroclaw/issues/2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)
*   #3008: [Bug]: Some coding plans are only allowed to be used in code agent and openclaw; please adapt the request to simulate as an openclaw tool: [https://github.com/zeroclaw-labs/zeroclaw/issues/3008](https://github.com/zeroclaw-labs/zeroclaw/issues/3008)

**Pull Requests:**
*   #3157: feat(notion): add Notion channel and tool integration: [https://github.com/zeroclaw-labs/zeroclaw/pull/3157](https://github.com/zeroclaw-labs/zeroclaw/pull/3157)
*   #3158: feat: add Bailian (Aliyun) provider support: [https://github.com/zeroclaw-labs/zeroclaw/pull/3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158)
*   #3156: feat(config): add api_path configuration for custom provider endpoints: [https://github.com/zeroclaw-labs/zeroclaw/pull/3156](https://github.com/zeroclaw-labs/zeroclaw/pull/3156)
*   #3155: feat(config): add api_path configuration for custom provider endpoints: [https://github.com/zeroclaw-labs/zeroclaw/pull/3155](https://github.com/zeroclaw-labs/zeroclaw/pull/3155)
*   #3068: Refactor (channels): Refactoring the platform type processing of Lark…: [https://github.com/zeroclaw-labs/zeroclaw/pull/3068](https://github.com/zeroclaw-labs/zeroclaw/pull/3068)
*   #3067: fix(config): honor default_temperature config while running "zeroclaw agent" without temperature parameter: [https://github.com/zeroclaw-labs/zeroclaw/pull/3067](https://github.com/zeroclaw-labs/zeroclaw/pull/3067)
*   #3151: fix(imessage): parse attributedBody when text column is NULL: [https://github.com/zeroclaw-labs/zeroclaw/pull/3151](https://github.com/zeroclaw-labs/zeroclaw/pull/3151)
*   #3149: fix(tools): improve git_operations error messages: [https://github.com/zeroclaw-labs/zeroclaw/pull/3149](https://github.com/zeroclaw-labs/zeroclaw/pull/3149)
*   #3150: docs(readme): fix banner visibility with raw GitHub URL: [https://github.com/zeroclaw-labs/zeroclaw/pull/3150](https://github.com/zeroclaw-labs/zeroclaw/pull/3150)
*   #3102: feat(onboard): add --reinit flag to prevent accidental config overwrite: [https://github.com/zeroclaw-labs/zeroclaw/pull/3102](https://github.com/zeroclaw-labs/zeroclaw/pull/3102)
*   #3101: feat(gateway): add restart and get-paircode subcommands: [https://github.com/zeroclaw-labs/zeroclaw/pull/3101](https://github.com/zeroclaw-labs/zeroclaw/pull/3101)
*   #3147: feat(skills): add zeroclaw operational skill for CLI and REST API usage: [https://github.com/zeroclaw-labs/zeroclaw/pull/3147](https://github.com/zeroclaw-labs/zeroclaw/pull/3147)
*   #3143: Add interactive inline-button approval for tools on Telegram: [https://github.com/zeroclaw-labs/zeroclaw/pull/3143](https://github.com/zeroclaw-labs/zeroclaw/pull/3143)
*   #3142: feat(provider): add API key prefix pre-flight validation: [https://github.com/zeroclaw-labs/zeroclaw/pull/3142](https://github.com/zeroclaw

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 技术日报

**日期**: 2026-03-11
**作者**: AI 技术分析师

## 核心动态摘要

今日，TinyClaw 项目在重构与模块化方面取得了显著进展，尤其是在代码结构优化和用户体验提升上。核心的 monorepo 重构 PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 已合并，将庞大的代码库拆分为更易于管理的 npm workspaces，并用 SQLite 取代了原有的 BullMQ/Redis 队列，大大简化了后端架构。同时，CLI 交互的优化也进入了关键阶段，PR [#185](https://github.com/TinyAGI/tinyclaw/pull/185) 正在将 bash 脚本驱动的交互式提示迁移至更现代、更友好的 `@clack/prompts` 库。

## 今日重点关注

1.  **Monorepo 重构与 SQLite 队列集成 (PR #186)**:
    *   [#186](https://github.com/TinyAGI/tinyclaw/pull/186) (已关闭) 标志着 TinyClaw 在架构现代化方面迈出了重要一步。通过将原有的单一 `src/` 目录拆分为 `@tinyclaw/core`, `@tinyclaw/teams`, `@tinyclaw/channels`, `@tinyclaw/server`, `@tinyclaw/visualizer` 五个 npm workspace 包，极大地提升了代码的可维护性和模块化程度。
    *   尤为值得关注的是，该 PR 使用了约 160 行的 SQLite 队列（`queues.ts`）替换了原有的 427 行基于 BullMQ/Redis 的实现。这不仅简化了依赖，降低了部署复杂度，同时也暗示了项目对轻量级、高性能数据存储方案的偏好。

2.  **CLI 交互现代化升级 (PR #185)**:
    *   [#185](https://github.com/TinyAGI/tinyclaw/pull/185) (进行中) 致力于将命令行用户体验提升到一个新的水平。通过引入 `@clack/prompts` 库，开发者正在用 TypeScript 替换大量的 bash `read` 命令，旨在提供更优越的交互体验，包括更好的输入验证、彩色输出以及结构化的对话流程。这对于提升开发者使用 TinyClaw 的效率和便捷性具有直接意义。

3.  **构建系统优化与 Git 忽略配置 (PR #187 & #188)**:
    *   [#187](https://github.com/TinyAGI/tinyclaw/pull/187) (已关闭) 解决了因 monorepo 重构后出现的构建问题。通过使用 `tsc --build` 来正确处理 TypeScript 项目间的依赖顺序，确保了构建过程的稳定性和正确性，这是在新架构下保证项目持续健康发展的关键。
    *   紧随其后，[#188](https://github.com/TinyAGI/tinyclaw/pull/188) (已关闭) 添加了 `*.tsbuildinfo` 到 `.gitignore` 文件。这是对构建缓存文件的标准清理操作，能有效避免不必要的文件提交，保持代码库的整洁。

## 社区关注点分析

*   **架构重构与模块化**: PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 和 [#172](https://github.com/TinyAGI/tinyclaw/pull/172) 反映了社区对项目整体架构优化和模块化演进的高度关注。将代码拆分为更小的、可管理的单元，并考虑不同组件（如 channels）的独立性，是构建可扩展、易维护系统的关键。
*   **开发者体验**: PR [#185](https://github.com/TinyAGI/tinyclaw/pull/185) 明确指向了提升命令行工具的使用体验。将复杂的 shell 脚本替换为现代化的 TS 库，能够显著降低新用户上手难度，并提升老用户的开发效率。
*   **构建与部署效率**: PR [#187](https://github.com/TinyAGI/tinyclaw/pull/187) 和 [#188](https://github.com/TinyAGI/tinyclaw/pull/188) 以及对 SQLite 的采用（PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186)），表明社区和核心开发者都在努力简化项目的构建、部署和运行流程，追求更高的开发效率和更低的运维成本。

## 待办事项与趋势

*   **持续优化核心功能**: PR [#183](https://github.com/TinyAGI/tinyclaw/pull/183)（移除冗余事件并简化 UI）和 [#182](https://github.com/TinyAGI/tinyclaw/pull/182)（自动化任务触发）显示出项目在不断打磨核心功能，提升用户操作的流畅性和智能化水平。
*   **模块化和集成**: PR [#172](https://github.com/TinyAGI/tinyclaw/pull/172) 中对 channels 的模块化处理，为未来接入更多通信渠道或自定义渠道奠定了基础，是项目生态扩展的重要一步。

---

## 参考链接

*   [#186](https://github.com/TinyAGI/tinyclaw/pull/186)
*   [#172](https://github.com/TinyAGI/tinyclaw/pull/172)
*   [#185](https://github.com/TinyAGI/tinyclaw/pull/185)
*   [#188](https://github.com/TinyAGI/tinyclaw/pull/188)
*   [#187](https://github.com/TinyAGI/tinyclaw/pull/187)
*   [#183](https://github.com/TinyAGI/tinyclaw/pull/183)
*   [#182](https://github.com/TinyAGI/tinyclaw/pull/182)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报

**日期:** 2026-03-11

## 摘要

今日 LobsterAI 项目社区活跃度较高，围绕模型集成、IM 渠道支持和功能优化等多个方面展开讨论。共新增 9 个 Issue 和 10 个 Pull Request。特别值得关注的是，社区开发者 (@mjnhmd) 提交了多项关于优化 IM 平台通知异步处理的 PR，旨在解决潜在的超时问题，这有望提升用户体验。同时，针对本地模型部署、API 调用以及界面显示等问题也引发了用户的关注和讨论。

## 新增动态

### 1. 优化 IM 通知处理，提升稳定性

开发者 @mjnhmd 提交了多项 PR ([#374](https://github.com/netease-youdao/LobsterAI/pull/374), [#373](https://github.com/netease-youdao/LobsterAI/pull/373), [#372](https://github.com/netease-youdao/LobsterAI/pull/372))，旨在通过引入异步消息处理机制，解决 IM 平台可能出现的通知超时问题。此举有望显著提高定时任务和消息通知的可靠性，保障用户及时获取信息。

### 2. 功能增强：主界面附件支持多文件选择

PR [#371](https://github.com/netease-youdao/LobsterAI/pull/371) 提出并实现了主界面附件的多文件选择功能。这一改进将提升用户在上传文件时的便捷性和效率。

### 3. 新增模型集成与渠道支持

社区用户对集成更多模型和IM渠道表现出浓厚兴趣：
*   **LM-Studio 支持**: Issue [#365](https://github.com/netease-youdao/LobsterAI/issues/365) 提出了对 LM-Studio 的支持需求，预示着未来可能集成更多本地模型服务。
*   **腾讯 Code Platform 集成**: Issue [#362](https://github.com/netease-youdao/LobsterAI/issues/362) 询问了与腾讯 Code Platform 的集成可能性，显示了对代码助手类服务的关注。
*   **飞书与 Discord 支持**: PR [#364](https://github.com/netease-youdao/LobsterAI/pull/364) 和 [#363](https://github.com/netease-youdao/LobsterAI/pull/363) 分别实现了对飞书和 Discord 渠道的支持，进一步扩展了 LobsterAI 的生态连接能力。

## 社区关注点分析

**模型集成与兼容性**是近期社区讨论的焦点。新增的 Issue [#365](https://github.com/netease-youdao/LobsterAI/issues/365) 和 [#362](https://github.com/netease-youdao/LobsterAI/issues/362) 表明用户希望 LobsterAI 能够支持更多不同来源的本地或云端模型。同时，Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 反映了用户在部署和调用本地模型时遇到的连接和响应问题（API Error: 502），这需要项目方进一步排查和优化。

**IM 渠道的稳定性和功能性**也是用户关心的重点。除了前面提到的异步通知优化 PR，Issue [#369](https://github.com/netease-youdao/LobsterAI/issues/369) 指出定时任务通知接收存在问题，而 Issue [#120](https://github.com/netease-youdao/LobsterAI/issues/120) 和 PR [#364](https://github.com/netease-youdao/LobsterAI/pull/364), [#363](https://github.com/netease-youdao/LobsterAI/pull/363), [#359](https://github.com/netease-youdao/LobsterAI/pull/359), [#356](https://github.com/netease-youdao/LobsterAI/pull/356) 则显示了社区对扩展和完善不同 IM 平台（钉钉、企业微信、Discord、Telegram）支持的持续需求。

**用户界面与易用性**方面，Issue [#368](https://github.com/netease-youdao/LobsterAI/issues/368) 反映了在 Ubuntu 24.04 下安装后界面空白的问题。Issue [#361](https://github.com/netease-youdao/LobsterAI/issues/361) 提出了聊天界面图片显示不正常的情况。而 Issue [#370](https://github.com/netease-youdao/LobsterAI/issues/370) 则是因为用户输入超出了模型 token 数限制导致 API 报错，这提示用户在使用时需要注意模型的能力边界。

## 本日最值得关注的动态

1.  **IM 通知异步处理优化 PR 集中出现**：开发者 @mjnhmd 提交的 PR ([#374](https://github.com/netease-youdao/LobsterAI/pull/374), [#373](https://github.com/netease-youdao/LobsterAI/pull/373), [#372](https://github.com/netease-youdao/LobsterAI/pull/372)) 旨在解决 IM 平台通知超时问题，是提升项目稳定性和用户体验的关键一步。
2.  **模型集成与渠道扩展持续活跃**：新增的关于 LM-Studio 支持的需求 ([#365](https://github.com/netease-youdao/LobsterAI/issues/365)) 以及飞书、Discord 等渠道的支持 PR ([#364](https://github.com/netease-youdao/LobsterAI/pull/364), [#363](https://github.com/netease-youdao/LobsterAI/pull/363))，表明社区对 LobsterAI 生态扩展的积极推动。
3.  **本地部署模型调用问题引起关注**：Issue [#360](https://github.com/netease-youdao/LobsterAI/issues/360) 反映了用户在调用自行部署的模型时遇到的 502 错误，这是影响用户本地化使用体验的重要问题，需要开发团队的关注和解决。

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
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 技术日报 - 2026-03-11

## 摘要

今日 IronClaw 生态系统动态聚焦于新版本发布、关键 bug 修复以及社区对增强功能的需求。v0.17.0 版本已正式发布，带来了 LLM 参数过滤、用户 ID 持久化、CI 流程改进及 Docker 容器清理等重要更新。同时，社区活跃度显著，大量 Issues 反映了对潜在安全风险、性能优化及用户体验提升的高度关注。

## 版本亮点

### v0.17.0 发布

NearAI/ironclaw 于 2026-03-10 发布了 **[v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)** 版本。本次更新的主要亮点包括：

*   **LLM 参数过滤**: 新增了针对不同 Provider 的不支持参数过滤功能 (#749, #728)，提升了 LLM 集成的灵活性与健壮性 (#809)。
*   **用户 ID 与 Job ID 持久化**: 在 `save_job` 中持久化 `user_id`，并在常规运行时暴露 `job_id`，增强了任务管理的可追溯性 (#709)。
*   **CI/CD 流程优化**: 集成了多 Agent Claude Review 的链式 Promotion PRs，优化了持续集成效率 (#776)。
*   **后台资源清理**: 增加了后台进程以回收孤立的 Docker 容器，改善了系统资源管理 (#634)。

## 社区焦点

### 热门 Issues & PRs 分析

今日社区焦点集中在 **bug 修复、安全风险预警以及核心功能增强**。Staging CI 机器人生成了大量高优先级 Issue，反映出社区对 IronClaw 稳定性和安全性的高度重视。

**重点关注：**

1.  **[🆕 新建] 大量高危 Bug 报告**: Staging CI 机器人报告了多起 **CRITICAL** 和 **HIGH** 级别的 Bug，涉及：
    *   **CRITICAL**: `[#868](https://github.com/nearai/ironclaw/issues/868)` 警告了 SIGHUP 信号处理中存在竞态条件的安全风险；`[#867](https://github.com/nearai/ironclaw/issues/867)` 指出 `gpt-5-mini` 模型不存在，可能导致 OpenAI API 调用失败；`[#811](https://github.com/nearai/ironclaw/issues/811)` 揭示了错误处理机制的逻辑缺陷。
    *   **HIGH**: `[#858](https://github.com/nearai/ironclaw/issues/858)` 指出了 Secrets 凭证注入中的 N+1 查询模式；`[#816](https://github.com/nearai/ironclaw/issues/816)` 和 `[#815](https://github.com/nearai/ironclaw/issues/815)` 暴露了 Token 预算强制执行不完整及用户元数据绕过验证的问题。
    *   `[#824](https://github.com/nearai/ironclaw/issues/824)` 报告了 Routine Context Paths 中的路径遍历漏洞。

2.  **[🆕 新建] Roadmap 与生态同步**: Issue `[#806](https://github.com/nearai/ironclaw/issues/806)` 由 @ilblackdragon 提出，旨在同步 OpenClaw 在 2026-02-24 至 2026-03-10 期间的改进到 IronClaw，显示了对跨项目协同和技术演进的重视。

3.  **[🆕 新建] 功能增强与用户体验**:
    *   `[#840](https://github.com/nearai/ironclaw/issues/840)` 反映了新安装的 WASM 工具与 Host WIT 版本不兼容的问题，影响了首次使用体验。
    *   `[#761](https://github.com/nearai/ironclaw/issues/761)` 提出了为 Web Gateway 添加浅色主题的需求，以提升在明亮环境下的可用性。
    *   PR `[#918](https://github.com/nearai/ironclaw/pull/918)` 计划为 CLI 添加 Skills 的列表/搜索/信息命令，便于用户发现和管理 Skills。
    *   PR `[#896](https://github.com/nearai/ironclaw/pull/896)` 引入了国际化支持，包括中文和英文，旨在扩大用户群体。

## 本日最值得关注的动态

1.  **v0.17.0 版本发布**: 此次更新显著增强了 LLM 集成能力，改进了任务管理，并优化了 CI/CD 和资源管理，为 IronClaw 的稳定性和可扩展性奠定了基础。
2.  **大量高危 Bug 集中暴露**: Staging CI 发现的多起 CRITICAL 和 HIGH 级别 Bug，特别是安全相关的漏洞（如路径遍历、竞态条件、锁机制滥用），表明近期代码变更引入了潜在风险，急需修复以保障系统安全。
3.  **CLI 和国际化功能的推进**: PR `[#918](https://github.com/nearai/ironclaw/pull/918)` 和 `[#896](https://github.com/nearai/ironclaw/pull/896)` 分别为 CLI 提供了 Skills 管理能力和引入了多语言支持，这些都是提升用户体验和扩展项目应用场景的重要举措。

---

## 参考链接

*   **Releases**:
    *   [v0.17.0](https://github.com/nearai/ironclaw/releases/tag/v0.17.0)
*   **Issues**:
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
*   **Pull Requests**:
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
    *   [#912](https://github.com/nearai/ironclaw/pull/912)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:47:39.601Z