# 🦞 OpenClaw 生态系统 日报 — 2026-03-13

## 横向对比

好的，这是基于您提供的各项目每日动态进行的横向对比分析。

# AI Agent 开源生态技术日报

**日期**: 2026-03-13

## 1. 生态全景

今日，AI Agent 开源生态展现出蓬勃的开发活力和用户驱动的迭代趋势。从底层的框架（如 OpenClaw, Zeroclaw）到具体的应用层（如 Nanobot, TinyClaw, LobsterAI），焦点普遍集中在**提升用户体验、增强集成能力、优化性能与成本控制**以及**修复关键 Bug**上。尤其值得注意的是，多个项目都在积极探索更友好的配置方式、多渠道的连接能力以及 Agent 核心能力的打磨，安全性和稳定性修复也贯穿始终，显示出该领域正朝着更成熟、更易用、更可靠的方向发展。

## 2. 活跃度对比

| 项目名称                                                                                              | GitHub URL                                   | 新增/更新 Issues | 新增/更新 Pull Requests | Releases |
| :---------------------------------------------------------------------------------------------------- | :------------------------------------------- | :--------------- | :---------------------- | :------- |
| [NanoBot](https://github.com/HKUDS/nanobot)                                                           | https://github.com/HKUDS/nanobot             | 12               | 10                      | -        |
| [OpenClaw](https://github.com/openclaw/openclaw)                                                      | https://github.com/openclaw/openclaw         | ~30+             | ~20+                    | 2        |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)                                                    | https://github.com/zeroclaw-labs/zeroclaw      | ~15+             | ~15+                    | 1        |
| [IronClaw](https://github.com/nearai/ironclaw)                                                        | https://github.com/nearai/ironclaw           | ~10+             | ~10+                    | -        |
| [PicoClaw](https://github.com/sipeed/picoclaw)                                                          | https://github.com/sipeed/picoclaw            | ~20+             | ~15+                    | 1        |
| [NanoClaw](https://github.com/qwibitai/nanoclaw)                                                       | https://github.com/qwibitai/nanoclaw         | ~15+             | ~15+                    | -        |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI)                                              | https://github.com/netease-youdao/LobsterAI  | 3                | 6                       | 1        |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw)                                                       | https://github.com/TinyAGI/tinyclaw          | 3                | 8                       | 1        |

*注：Issues 和 Pull Requests 的数量为统计时从报告中提取的显著活动，实际可能更多。*

## 3. 共同趋势

*   **用户体验与易用性提升**:
    *   **图形化界面/向导**: [NanoBot](https://github.com/HKUDS/nanobot) 出现 Web UI，[TinyClaw](https://github.com/TinyAGI/tinyclaw) 引入交互式设置向导。
    *   **配置简化**: [TinyClaw](https://github.com/TinyAGI/tinyclaw) 的向导模式，[IronClaw](https://github.com/nearai/ironclaw) 的 CI 改进（如代码健壮性）。
*   **集成能力增强与渠道扩展**:
    *   **通讯渠道丰富**: [NanoBot](https://github.com/HKUDS/nanobot) 增强 QQ/DingTalk，[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 关注 Matrix，[IronClaw](https://github.com/nearai/ironclaw) 持续优化 Telegram，[PicoClaw](https://github.com/sipeed/picoclaw) 提及 Matrix/LINE/QQ/Telegram，[NanoClaw](https://github.com/qwibitai/nanoclaw) 增加 Telegram/Discord 文件支持。
    *   **AI Provider 兼容性**: [NanoBot](https://github.com/HKUDS/nanobot) 增加 Google Vertex AI，[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 关注 Azure OpenAI，[PicoClaw](https://github.com/sipeed/picoclaw) 增加 Azure OpenAI/ModelScope，[NanoClaw](https://github.com/qwibitai/nanoclaw) 关注 ModelScope。
*   **性能优化与成本控制**:
    *   **Token 优化**: [NanoClaw](https://github.com/qwibitai/nanoclaw) 涌现大量 Token 优化 PRs。
    *   **启动速度**: [LobsterAI](https://github.com/netease-youdao/LobsterAI) 的 Gateway 启动速度优化。
*   **稳定性和安全性加固**:
    *   **安全漏洞修复**: [OpenClaw](https://github.com/openclaw/openclaw) 强制 WebSocket Origin 校验，[IronClaw](https://github.com/nearai/ironclaw) 修复 Webhook 认证绕过。
    *   **Bug 修复**: [OpenClaw](https://github.com/openclaw/openclaw) 文件操作回归错误，[Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 32位构建问题，[NanoClaw](https://github.com/qwibitai/nanoclaw) Agent 协议 Bug。
*   **Agent 核心功能深化**:
    *   **记忆与上下文**: [TinyClaw](https://github.com/TinyAGI/tinyclaw) 引入 Agent 消息持久化，[PicoClaw](https://github.com/sipeed/picoclaw) 关注上下文管理，[NanoClaw](https://github.com/qwibitai/nanoclaw) 增加 LanceDB 内存。
    *   **Agent 架构升级**: [PicoClaw](https://github.com/sipeed/picoclaw) 进行 Agent 重构，[TinyClaw](https://github.com/TinyAGI/tinyclaw) 品牌重塑（TinyAGI）。

## 4. 值得关注的信号

1.  **用户体验的飞跃式提升**: [NanoBot](https://github.com/HKUDS/nanobot) 的 Web UI 出现，[TinyClaw](https://github.com/TinyAGI/tinyclaw) 引入交互式设置向导，[IronClaw](https://github.com/nearai/ironclaw)的 CI 健壮性提升，以及 [LobsterAI](https://github.com/netease-youdao/LobsterAI) 的 Gateway 启动速度优化，共同表明该领域正从技术探索转向大规模用户落地，对易用性、稳定性和部署便捷性的要求日益提高。
2.  **Token 成本优化成为显性需求**: [NanoClaw](https://github.com/qwibitai/nanoclaw) 今日密集涌现关于 Token 成本控制的 Issue 和 PR，如 Inline Compaction、Response Length Control 等，这直接映射了部署和使用 LLM Agent 的经济性考量，预示着降本增效将是未来一段时间内的重要研发方向。
3.  **多渠道集成与生态互联是关键竞争点**: Almost every project today ([NanoBot](https://github.com/HKUDS/nanobot), [OpenClaw](https://github.com/openclaw/openclaw), [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw), [IronClaw](https://github.com/nearai/ironclaw), [PicoClaw](https://github.com/sipeed/picoclaw), [NanoClaw](https://github.com/qwibitai/nanoclaw)) 都在积极拓展和优化与各种通信渠道（Telegram, Discord, Matrix, QQ, DingTalk, Lark 等）的集成。这表明 AI Agent 的价值正在从独立功能转向与现有通信和协作工具的无缝融合，构建一个更广泛的生态网络。

## 各工具详细报告

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报 - 2026-03-13

## 总体概览

今日 Nanobot 项目围绕用户体验、功能扩展、安全性和集成性展现出活跃的开发势头。新用户自定义面板的出现、多渠道消息处理能力的增强以及安全性的初步加固是本周的几大亮点。社区用户活跃，积极反馈 Bug 并提出新功能需求，项目维护者也迅速响应，提交了多项改进 PR。

## 新动态 & 社区焦点

### 🚀 **全新 Web UI 涌现，提升用户管理体验**

独立贡献者 @Good0007 发布了名为 `[nanobot-webui](https://github.com/Good0007/nanobot-webui)` 的自托管 Web 管理面板，为 Nanobot 用户带来了极大的便利。该面板支持全功能仪表盘、实时聊天、提供商/频道/技能/Cron Job 的 UI 配置，以及多用户支持，显著降低了 Nanobot 的使用门槛，满足了用户对图形化管理界面的强烈需求。这标志着 Nanobot 生态系统的进一步丰富和用户友好性的飞跃。

*   **Issue:** [#1922](https://github.com/HKUDS/nanobot/issues/1922) "I've created [nanobot-webui], A self-hosted web management panel for nanobot"

### 🛡️ **紧迫安全加固：配置泄露风险初步缓解**

社区用户 @kinchahoy 报告了 Nanobot 当前在安全方面的一个严重漏洞：** [#1873](https://github.com/HKUDS/nanobot/issues/1873)**，即 Nanobot 可能无法阻止自身访问和泄露 `config.json` 中的敏感密钥。为应对此问题，@kinchahoy 迅速提交了 PR **[#1940](https://github.com/HKUDS/nanobot/pull/1940)**，通过 `bubblewrap` 沙箱技术限制 `exec` 调用，并尝试以非 root 用户运行核心代理循环，这是对该安全隐患的第一步重要修复。

*   **Issue:** [#1873](https://github.com/HKUDS/nanobot/issues/1873) "Nanobot currently cannot be secured from accessing it's own config.json (and leaking keys)"
*   **Pull Request:** [#1940](https://github.com/HKUDS/nanobot/pull/1940) "feat: sandbox exec calls with bwrap and run container as non-root (minimally fixes #1873)"

### 💬 **多渠道消息兼容性增强，修复乱码与信息丢失问题**

*   **QQ 消息乱码与兼容性问题：** 用户 @dweigit 报告了子代理执行后信息显示乱码的问题 **[#1904](https://github.com/HKUDS/nanobot/issues/1904)**，而 PR **[#1930](https://github.com/HKUDS/nanobot/pull/1930)** 已着手通过 `prompt_toolkit` 和 Rich 的协作来修复交互式 CLI 的格式化问题。同时，PR **[#1941](https://github.com/HKUDS/nanobot/pull/1941)** 针对 QQ 客户端兼容性问题，恢复了对旧版本客户端的纯文本消息支持，直接解决了 **[#1936](https://github.com/HKUDS/nanobot/issues/1936)** 中提到的 Markdown 格式破坏交互的问题。
*   **DingTalk 消息类型支持拓展：** 针对 DingTalk 渠道，**[#1903](https://github.com/HKUDS/nanobot/issues/1903)** 和 **[#1864](https://github.com/HKUDS/nanobot/issues/1864)** 反映了对富文本、语音和文件消息支持的缺失。PR **[#1925](https://github.com/HKUDS/nanobot/pull/1925)** 积极响应，增加了对 `file`, `picture`, `richText` 等消息类型的接收支持，弥补了这一重要功能空缺。

## 其他值得关注的动态

*   **XMPP 渠道集成：** @regularfry 提交了 **[#1945](https://github.com/HKUDS/nanobot/pull/1945)**，引入了 XMPP 渠道支持，为用户提供了另一种即时通讯的集成选项。
*   **Google Vertex AI 支持：** **[#1943](https://github.com/HKUDS/nanobot/pull/1943)** 增加了对 Google Vertex AI 的直接支持，通过 LiteLLM 集成，进一步扩展了 Nanobot 的 LLM 提供商选择。
*   **技能管理优化：** PR **[#1934](https://github.com/HKUDS/nanobot/pull/1934)** 和 **[#1933](https://github.com/HKUDS/nanobot/pull/1933)** 实现了技能的“禁用”功能，响应了用户 **[#1932](https://github.com/HKUDS/nanobot/issues/1932)** 的需求，提升了技能配置的灵活性。
*   **内存管理改进：** PR **[#1926](https://github.com/HKUDS/nanobot/pull/1926)** 暂时禁用了 `maybe_consolidate_by_tokens` 调用，以防止在处理系统消息时过早进行内存合并，确保完整消息上下文的保留。这与 **[#1931](https://github.com/HKUDS/nanobot/issues/1931)** 的内存合并问题有所关联。
*   **OpenRouter 模型 ID 修复：** **[#1938](https://github.com/HKUDS/nanobot/pull/1938)** 修复了 OpenRouter 提供商在使用 LiteLLM 时，原生模型 ID 被错误处理的问题。

## 总结

今日 Nanobot 项目展现了活跃的社区生态和快速的迭代响应。**[#1922](https://github.com/HKUDS/nanobot/issues/1922)** 带来的全新 Web UI 极大地提升了用户体验；**[#1873](https://github.com/HKUDS/nanobot/issues/1873)** 报告的安全问题被迅速响应并初步修复（PR **[#1940](https://github.com/HKUDS/nanobot/pull/1940)**）；而多渠道（QQ、DingTalk）通信能力的增强以及功能选项（如技能禁用）的增加，则持续打磨着 Nanobot 的核心功能。

---

## 参考链接

**Issues:**
*   [#1922](https://github.com/HKUDS/nanobot/issues/1922)
*   [#1873](https://github.com/HKUDS/nanobot/issues/1873)
*   [#1904](https://github.com/HKUDS/nanobot/issues/1904)
*   [#1936](https://github.com/HKUDS/nanobot/issues/1936)
*   [#1903](https://github.com/HKUDS/nanobot/issues/1903)
*   [#1864](https://github.com/HKUDS/nanobot/issues/1864)
*   [#1932](https://github.com/HKUDS/nanobot/issues/1932)
*   [#1931](https://github.com/HKUDS/nanobot/issues/1931)

**Pull Requests:**
*   [#1940](https://github.com/HKUDS/nanobot/pull/1940)
*   [#1930](https://github.com/HKUDS/nanobot/pull/1930)
*   [#1941](https://github.com/HKUDS/nanobot/pull/1941)
*   [#1925](https://github.com/HKUDS/nanobot/pull/1925)
*   [#1945](https://github.com/HKUDS/nanobot/pull/1945)
*   [#1943](https://github.com/HKUDS/nanobot/pull/1943)
*   [#1934](https://github.com/HKUDS/nanobot/pull/1934)
*   [#1933](https://github.com/HKUDS/nanobot/pull/1933)
*   [#1926](https://github.com/HKUDS/nanobot/pull/1926)
*   [#1938](https://github.com/HKUDS/nanobot/pull/1938)

</details>

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw (openclaw/openclaw) 技术日报 - 2026年03月13日

## 版本更新亮点

今日，OpenClaw 发布了 **v2026.3.11** 版本（[v2026.3.11](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11)）及其测试版本 **v2026.3.11-beta.1**（[v2026.3.11-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11-beta.1)）。本次更新在安全方面做了重要增强：

*   **Gateway/WebSocket 安全加固**：针对浏览器发起的连接，强制执行了 origin 校验，即使在 `trusted-proxy` 模式下也一样。此举修复了一个潜在的跨站 WebSocket 劫持漏洞（GHSA-5wcw-8jjv-m286），防止了未经信任的来源获取 `operator.admin` 权限。

此外，新版本还在 OpenRouter 模型目录中临时添加了 Hunter Alpha 和 Healer Alpha，方便用户体验新的免费隐身模型。

## 社区关注焦点

今日社区Issue和Pull Request的活跃度较高，集中反映了用户在使用新版本（尤其是 2026.3.8 至 2026.3.11 之间的升级）时遇到的一些关键问题，以及对新功能的期待。

**热门 Issues 趋势分析：**

1.  **文件操作回归错误（Bug Regression）**：多个新近出现的 Issue，如 `#43858` ("Edit tool silently wipes file to 0 bytes while reporting success")、`#44122` ("Sandbox FS Bridge v3.11 regression: Write/Edit tools always produce 0-byte files when python3 is in sandbox image") 和 `#44077` ("Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES on host-side file tools")，都指向了文件写入和编辑工具在最新版本中出现的严重问题，表现为文件被清空为 0 字节或权限异常。
2.  **Cron Job 执行失败**：Issue `#42883` ("[Bug]: Cron jobs broken after update to 2026.3.8") 和 `#44257` ("Cron isolated session jobs still failing in 2026.3.11 - enqueued but never executed") 表明 Cron Job 的稳定性是用户普遍关心的重点，尤其是在升级到特定版本后出现的执行中断或无法执行的问题。
3.  **Gateway 稳定性与安全**：
    *   `#43989` ("[Bug]: Exec approval socket not created on gateway startup, causing approval flow to hang") 反映了 Gateway 启动时关键 Sockets 未能创建的问题。
    *   `#43561` ("trusted-proxy mode is broken with nginx — proxy headers are never evaluated, making production multi-node deployments insecure") 指出了 `trusted-proxy` 模式在与 Nginx 集成时存在的安全隐患，影响了生产环境。
    *   `#44093` ("[Bug]: Gateway Crash And Removed After Restart Command") 和 `#44172` ("[Help]: Gateway reliability — recurring process death requiring manual restart (@mtiplea)") 则分别描述了 Gateway 在特定命令下崩溃以及周期性不稳定的现象。

**热门 Pull Requests 趋势分析：**

*   **增强现有功能与修复 Bug**：PRs 如 `#43497` ("fix(agents): recover subagent runs after gateway restart") 和 `#44481` ("fix: handle tool_use_id mismatch error to prevent infinite retry loops") 专注于提升代理（agents）的健壮性和错误处理能力。
*   **内存管理与工具集成**：`#43498` ("feat(memory-lancedb): add memory_refresh tool for atomic replace and conflict preview") 和 `#44421` ("feat: integrate Cortex local memory into OpenClaw") 演示了对内存管理功能（如 LanceDB 集成）的改进和新能力的引入。
*   **配置与部署改进**：`#44486` ("fix(gateway): honor dangerouslyDisableDeviceAuth regardless of sharedAuthOk") 和 `#44323` ("Improve validation for memorySearch.provider configuration") 针对 Gateway 配置和部署中遇到的问题进行了修复和增强。

## 本日最值得关注动态

1.  **OpenClaw v2026.3.11 发布，重点修复 WebSocket 安全漏洞**：新版本的主要亮点在于强制执行了 WebSocket 的 Origin 校验，有效缓解了跨站请求伪造的风险，对于生产环境的安全性至关重要。
2.  **文件操作工具大规模回归错误，引发用户担忧**：近期新增的多个 Issue（如 `#43858`, `#44122`）集中暴露了文件写入和编辑工具的严重 Bug，导致用户数据丢失风险。这是当前最需要开发者高度重视并优先解决的问题。
3.  **Cron Job 和 Gateway 稳定性问题持续发酵**：多个关于 Cron Job 执行失败（`#42883`, `#44257`）以及 Gateway 崩溃或不稳定（`#43989`, `#44093`）的 Issue 显示，系统核心组件的可靠性仍是社区关注的焦点，直接影响用户日常使用和生产部署。

---

**参考链接:**

*   OpenClaw GitHub: [openclaw/openclaw](https://github.com/openclaw/openclaw)
*   Release v2026.3.11: [v2026.3.11](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11)
*   Release v2026.3.11-beta.1: [v2026.3.11-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.3.11-beta.1)
*   Issue #43858: [Edit tool silently wipes file to 0 bytes while reporting success](https://github.com/openclaw/openclaw/issues/43858)
*   Issue #42938: [🦞 虾缘 - AI相亲交友平台欢迎测试](https://github.com/openclaw/openclaw/issues/42938)
*   Issue #42883: [Bug]: Cron jobs broken after update to 2026.3.8](https://github.com/openclaw/openclaw/issues/42883)
*   Issue #43989: [Bug]: Exec approval socket not created on gateway startup, causing approval flow to hang](https://github.com/openclaw/openclaw/issues/43989)
*   Issue #44122: [Sandbox FS Bridge v3.11 regression: Write/Edit tools always produce 0-byte files when python3 is in sandbox image](https://github.com/openclaw/openclaw/issues/44122)
*   Issue #43510: [Bug]:Issue Title: NVIDIA Kimi K2.5 Model](https://github.com/openclaw/openclaw/issues/43510)
*   Issue #44261: [Bug]: Control UI (webchat) messages not mirrored to external channels (Discord, Telegram, etc.)](https://github.com/openclaw/openclaw/issues/44261)
*   Issue #44093: [Bug]: Gateway Crash And Removed After Restart Command](https://github.com/openclaw/openclaw/issues/44093)
*   Issue #43561: [trusted-proxy mode is broken with nginx — proxy headers are never evaluated, making production multi-node deployments insecure](https://github.com/openclaw/openclaw/issues/43561)
*   Issue #44303: [Switching to a smaller-context model mid-session causes hard crash instead of graceful truncation](https://github.com/openclaw/openclaw/issues/44303)
*   Issue #44257: [Cron isolated session jobs still failing in 2026.3.11 - enqueued but never executed](https://github.com/openclaw/openclaw/issues/44257)
*   Issue #44269: [Bug]: isolated cron job sessions with kimi-coding/k2p5 as a model can't use tools](https://github.com/openclaw/openclaw/issues/44269)
*   Issue #43490: [MiniMax token usage always returns zeros in 2026.3.8](https://github.com/openclaw/openclaw/issues/43490)
*   Issue #44352: [Bug]: Memory search shows "no such module: fts5" on Debian systems](https://github.com/openclaw/openclaw/issues/44352)
*   Issue #44402: [Bug]: `openclaw gateway install` does not capture Nix (Home Manager) PATH entries in LaunchAgent plist](https://github.com/openclaw/openclaw/issues/44402)
*   Issue #44172: [Help]: Gateway reliability — recurring process death requiring manual restart (@mtiplea)](https://github.com/openclaw/openclaw/issues/44172)
*   Issue #44252: [Embedded agent sessions fail silently on overload — no fallback triggered, no error sent to user](https://github.com/openclaw/openclaw/issues/44252)
*   Issue #44196: [Session corruption loop: API timeout during tool_use causes permanent broken state](https://github.com/openclaw/openclaw/issues/44196)
*   Issue #44077: [Bug]: Sandbox file-tool edits rewrite workspace files to 0600, causing EACCES on host-side file tools](https://github.com/openclaw/openclaw/issues/44077)
*   Issue #43050: [Bug]: openclaw onboard ERROR: Error: Config validation failed: models.providers.kimi-coding.models.0.compat: Unrecognized key: "requiresOpenAiAnthropicToolPayload"](https://github.com/openclaw/openclaw/issues/43050)
*   Issue #43942: [Bug]: [reply_to_current] tag emitted inside thinking block instead of as message type=text with hunter-alpha model](https://github.com/openclaw/openclaw/issues/43942)
*   Issue #43193: [Bug]: Session leak in OpenClaw - Cron jobs and subagents create sessions that never get cleaned up](https://github.com/openclaw/openclaw/issues/43193)
*   Issue #43795: [Bug]: 500 v.content is not iterable](https://github.com/openclaw/openclaw/issues/43795)
*   Issue #43957: [Support FTS-only memory indexing (skip embedding provider)](https://github.com/openclaw/openclaw/issues/43957)
*   Issue #44232: [Bug]: v2026.3.11 cron manual runs enqueue but do not appear in run history; Telegram isolated announce delivery also flaky](https://github.com/openclaw/openclaw/issues/44232)
*   Issue #42789: [Discord thread-bound ACP child replies appear to be mirrored into the main Discord route transcript instead of the child session transcript](https://github.com/openclaw/openclaw/issues/42789)
*   Issue #44132: [Feature Request: Automatic Config Rollback on Failed Startup](https://github.com/openclaw/openclaw/issues/44132)
*   Issue #44361: [fix(backup): archive integrity cross-check fails on Windows (tar entry path mismatch)](https://github.com/openclaw/openclaw/issues/44361)
*   Issue #44202: [Bug]: local memory embeddings on Apple Silicon can crash gateway in ggml-metal / node-llama-cpp; need official Metal/GPU guidance](https://github.com/openclaw/openclaw/issues/44202)
*   Issue #44227: [Discord WebSocket disconnects with code 1005 every 10-15 minutes, triggering health-monitor restarts](https://github.com/openclaw/openclaw/issues/44227)
*   PR #43837: [feat: one-shot thinking level via `/think <level> <body>`](https://github.com/openclaw/openclaw/pull/43837)
*   PR #43497: [fix(agents): recover subagent runs after gateway restart](https://github.com/openclaw/openclaw/pull/43497)
*   PR #44489: [feat(sessions): add adaptive reset mode with AND logic (atHour + idleMinutes)](https://github.com/openclaw/openclaw/pull/44489)
*   PR #43498: [feat(memory-lancedb): add memory_refresh tool for atomic replace and conflict preview](https://github.com/openclaw/openclaw/pull/43498)
*   PR #44486: [fix(gateway): honor dangerouslyDisableDeviceAuth regardless of sharedAuthOk](https://github.com/openclaw/openclaw/pull/44486)
*   PR #44421: [feat: integrate Cortex local memory into OpenClaw](https://github.com/openclaw/openclaw/pull/44421)
*   PR #44351: [fix(cron): preserve telegram direct-thread context in inferred delivery targets](https://github.com/openclaw/openclaw/pull/44351)
*   PR #44437: [fix(hooks): fail closed on unreadable loader paths](https://github.com/openclaw/openclaw/pull/44437)
*   PR #43063: [feat(models): expose consistent provider billing data in "openclaw models status --json" output](https://github.com/openclaw/openclaw/pull/43063)
*   PR #43635: [fix(export-html): Restore template placeholders to fix session HTML export failure](https://github.com/openclaw/openclaw/pull/43635)
*   PR #43280: [Clarify Telegram attachment delivery guidance in agent prompts](https://github.com/openclaw/openclaw/pull/43280)
*   PR #44445: [fix(session-memory): strip channel-injected metadata from user messages before storing](https://github.com/openclaw/openclaw/pull/44445)
*   PR #43533: [fix(session): trigger session-memory hook flush on daily/scheduled reset](https://github.com/openclaw/openclaw/pull/43533)
*   PR #43811: [feat: dashboard API improvements, session status, kill endpoint, ws subscriptions, subagent tree, compaction cleanup](https://github.com/openclaw/openclaw/pull/43811)
*   PR #44438: [fix(hooks): dedupe repeated agent deliveries by idempotency key](https://github.com/openclaw/openclaw/pull/44438)
*   PR #44323: [Improve validation for memorySearch.provider configuration](https://github.com/openclaw/openclaw/pull/44323)
*   PR #43656: [feat: cross-gateway sessions_send and sessions_spawn via gateway.peers](https://github.com/openclaw/openclaw/pull/43656)
*   PR #44480: [Replace CLAUDE.md symlink with standalone Claude Code guidance](https://github.com/openclaw/openclaw/pull/44480)
*   PR #44481: [fix: handle tool_use_id mismatch error to prevent infinite retry loops](https://github.com/openclaw/openclaw/pull/44481)
*   PR #44466: [fix(talk-voice): add fetch timeout to ElevenLabs voices API call](https://github.com/openclaw/openclaw/pull/44466)

</details>

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw (zeroclaw-labs/zeroclaw) 技术日报 - 2026-03-13

## OpenClaw 生态系统动态

### 🚀 版本发布：v0.1.9a 稳定上线

今日 Zeroclaw 发布了 `v0.1.9a` 版本。本次更新主要解决了以下问题：
*   修复了 embedding API key 的读取逻辑，现在能正确从 `embedding_provider` 环境变量获取，而非 `default_provider`。
*   通过降级 `action-gh-release` 到 v2.4.2 版本，解决了 CI 流程中发布流程最终化的问题。
*   版本号更新至 `0.1.9`，并移除了 README 中已不再使用的社交链接。

### 💬 社区热议焦点：新功能与 Bug 修复并存

本期社区的关注点主要集中在新功能的提议和现有问题的修复上，特别是围绕 **Matrix 频道**、**Docker 镜像**、**32位系统支持** 以及 **Azure OpenAI 集成**。

**热门 Issues 分析：**

*   **Matrix 频道功能扩展：** `zeroclaw-labs/zeroclaw/issues/3357` 和 `zeroclaw-labs/zeroclaw/issues/3371`（PR）都指向了为 Matrix 频道增加“已读标记”和“发送中通知”的请求，这表明社区希望提升 Zeroclaw 在实时通信场景下的用户体验。同时，`zeroclaw-labs/zeroclaw/issues/3361` 提出了将 Matrix 作为 Cron Job 的一个递送渠道，显示了用户对 Zeroclaw 自动化任务与即时通讯工具集成能力的需求。
*   **Docker 镜像的易用性：** `zeroclaw-labs/zeroclaw/issues/3359` 指出官方 Docker 镜像缺少 shell，影响了本地开发和文件操作。相关 PR `zeroclaw-labs/zeroclaw/pull/3372` 旨在提供一个包含 shell 的镜像选项，以解决这一痛点。
*   **Azure OpenAI 支持：** ` zeroclaw-labs/zeroclaw/issues/3176` 请求增加对 Azure OpenAI Endpoints 的支持，这表明用户希望 Zeroclaw 能够兼容更多主流的云服务提供商。
*   **32位系统支持的持续推进：** `zeroclaw-labs/zeroclaw/issues/3174`（已关闭）和 `zeroclaw-labs/zeroclaw/pull/3375`（PR to fix build）都表明了对 32 位系统支持的重视，尽管相关的 Bug `zeroclaw-labs/zeroclaw/issues/3335` 依然存在，社区正在积极寻求解决方案。

**热门 Pull Requests 分析：**

*   **核心功能增强：** `zeroclaw-labs/zeroclaw/pull/3274` 涉及 JIT Tools RAG 注入，`zeroclaw-labs/zeroclaw/pull/3367` 将完整的 Agent Loop 集成到 WebSocket 聊天处理中，预示着 Zeroclaw 在 Agent 能力和实时交互方面将迎来重要提升。
*   **跨平台与兼容性修复：** `zeroclaw-labs/zeroclaw/pull/3273` 修复了旧浏览器下 `crypto.randomUUID` 的兼容性问题（对应 Issue `zeroclaw-labs/zeroclaw/issues/3261`），`zeroclaw-labs/zeroclaw/pull/3375` 旨在解决 32 位无默认特性构建失败的问题。
*   **集成与配置优化：** `zeroclaw-labs/zeroclaw/pull/3370` 增加了对每个频道代理 URL 的支持，`zeroclaw-labs/zeroclaw/pull/3272`（PR）为 Docker 镜像增加了带 shell 的目标，以及 `zeroclaw-labs/zeroclaw/pull/3305` 新增了对 WeCom AI Bot 的长连接支持，都反映了用户对 Zeroclaw 在复杂网络环境和特定企业级应用场景下集成能力的期待。

### 🥇 本日最值得关注的动态

1.  **[v0.1.9a] 版本发布与细节修复：** 本次小版本更新解决了 API Key 读取和 CI 发布流程的实际问题，同时为后续开发铺平了道路。
2.  **Matrix 频道体验优化成为焦点：** 社区对 Matrix 频道的集成度提出了具体的功能需求（如已读标记、发送中通知），并探索其作为 Cron Job 递送渠道的可能性（Issues `zeroclaw-labs/zeroclaw/issues/3357` 和 `zeroclaw-labs/zeroclaw/issues/3361`），表明 Matrix 是 Zeroclaw 用户活跃使用的通信平台。
3.  **Docker 镜像增强与 Web 兼容性修复：** 针对官方 Docker 镜像缺少 shell 的问题（Issue `zeroclaw-labs/zeroclaw/issues/3359`），有 PR `zeroclaw-labs/zeroclaw/pull/3372` 提出增加带 shell 的选项。另外，WebSocket 聊天中 `crypto.randomUUID` 的兼容性问题（Issue `zeroclaw-labs/zeroclaw/issues/3261`）也得到了针对性修复（PR `zeroclaw-labs/zeroclaw/pull/3273`）。

---

### 参考链接

*   **Releases:**
    *   [v0.1.9a Release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9a)
*   **Issues:**
    *   [#3153 [Feature]: zeroclaw agent subcommand support mcp](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)
    *   [#3176 [Feature]: Add support for Azure OpenAI provider](https://github.com/zeroclaw-labs/zeroclaw/issues/3176)
    *   [#3247 Branch consolidation complete — master is the single default branch](https://github.com/zeroclaw-labs/zeroclaw/issues/3247)
    *   [#3361 [Feature]: Add Matrix as a delivery channel](https://github.com/zeroclaw-labs/zeroclaw/issues/3361)
    *   [#3359 [Feature]: Official Docker container does not contain a shell](https://github.com/zeroclaw-labs/zeroclaw/issues/3359)
    *   [#3357 [Feature]: Send read marker and typing notifications after receiving Matrix message](https://github.com/zeroclaw-labs/zeroclaw/issues/3357)
    *   [#3337 [Bug]: Linq channel uses legacy webhook payload shape](https://github.com/zeroclaw-labs/zeroclaw/issues/3337)
    *   [#3335 [Bug]: 32-bit build fails on mipsel-unknown-linux-musl (un-gated prometheus & AtomicU64 leftovers)](https://github.com/zeroclaw-labs/zeroclaw/issues/3335)
    *   [#3262 [Feature]: Channel Proxy](https://github.com/zeroclaw-labs/zeroclaw/issues/3262)
    *   [#3327 [Feature]: tool_call on windows](https://github.com/zeroclaw-labs/zeroclaw/issues/3327)
    *   [#3312 [Bug]: WhatsApp Web compile error](https://github.com/zeroclaw-labs/zeroclaw/issues/3312)
    *   [#3302 [Bug]: Lark Channel is broken](https://github.com/zeroclaw-labs/zeroclaw/issues/3302)
    *   [#3316 [Feature]: Add verbose mode](https://github.com/zeroclaw-labs/zeroclaw/issues/3316)
    *   [#3303 [Bug]: [Web] crypto.randomUUID is not a function in older browsers when navigated to `/agent` page](https://github.com/zeroclaw-labs/zeroclaw/issues/3303)
    *   [#3299 [Feature]: Add cron run history to the API and dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/3299)
    *   [#3174 [Feature]: Add support for 32 bit system.s](https://github.com/zeroclaw-labs/zeroclaw/issues/3174)
    *   [#3267 [Feature]: Skip pairing dialog when require_pairing is disabled](https://github.com/zeroclaw-labs/zeroclaw/issues/3267)
    *   [#3163 feat: Add vision support for Anthropic provider](https://github.com/zeroclaw-labs/zeroclaw/issues/3163)
    *   [#3261 [Bug]: Uncaught TypeError: crypto.randomUUID is not a function](https://github.com/zeroclaw-labs/zeroclaw/issues/3261)
    *   [#3070 [Bug]: version `GLIBC_2.39' not found](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
    *   [#3012 channel-lark feature is misnamed, not documented, and should be enabled by default for Feishu support](https://github.com/zeroclaw-labs/zeroclaw/issues/3012)
    *   [#1327 [Bug]: not compatible with Kimi Code - Kimi 2.5](https://github.com/zeroclaw-labs/zeroclaw/issues/1327)
    *   [#2929 [Bug]:Quick clarification: `master` vs `main`](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)
    *   [#2494 [Bug]: channels_config.feishu cannot start](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)
    *   [#2510 [Bug]: config initialized=false && console always print "Your system is not activated. Please activate as soon as possible for normal use."](https://github.com/zeroclaw-labs/zeroclaw/issues/2510)
    *   [#2910 [Bug]: webui agent not work. v0.1.8](https://github.com/zeroclaw-labs/zeroclaw/issues/2910)
    *   [#3024 Panic in loop_.rs: byte index not a char boundary with Chinese characters](https://github.com/zeroclaw-labs/zeroclaw/issues/3024)
    *   [#2916 [Feature]: password based Matrix channel login && recovery key for E2EE](https://github.com/zeroclaw-labs/zeroclaw/issues/2916)
    *   [#2922 📢 Community Update: Moving Forward Together](https://github.com/zeroclaw-labs/zeroclaw/issues/2922)
    *   [#3059 [Feature]: can not use ali yun bailian coding plan ,](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)
*   **Pull Requests:**
    *   [#3274 feat: implement JIT Tools RAG injection with SubAgent discovery and cache](https://github.com/zeroclaw-labs/zeroclaw/pull/3274)
    *   [#3273 fix(web): add fallback for crypto.randomUUID in older browsers](https://github.com/zeroclaw-labs/zeroclaw/pull/3273)
    *   [#3376 feat(api): expose cron run history endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/3376)
    *   [#3377 docs(contributing): clarify active branch policy](https://github.com/zeroclaw-labs/zeroclaw/pull/3377)
    *   [#3375 fix(build): unblock strict 32-bit no-default-features builds](https://github.com/zeroclaw-labs/zeroclaw/pull/3375)
    *   [#3374 fix(observability): support verbose backend selection](https://github.com/zeroclaw-labs/zeroclaw/pull/3374)
    *   [#3305 feat(wecom): add WeCom AI bot support](https://github.com/zeroclaw-labs/zeroclaw/pull/3305)
    *   [#3373 fix(cron): support Matrix announce delivery](https://github.com/zeroclaw-labs/zeroclaw/pull/3373)
    *   [#3372 fix(docker): expose shell-enabled image target](https://github.com/zeroclaw-labs/zeroclaw/pull/3372)
    *   [#3371 fix(matrix): send read markers and typing notifications](https://github.com/zeroclaw-labs/zeroclaw/pull/3371)
    *   [#3370 feat(channel): add per-channel proxy_url support for HTTP/SOCKS5 proxies](https://github.com/zeroclaw-labs/zeroclaw/pull/3370)
    *   [#3369 docs(contributing): clarify branch source of truth](https://github.com/zeroclaw-labs/zeroclaw/pull/3369)
    *   [#3368 fix(channel): fix missing Relation import in matrix channel](https://github.com/zeroclaw-labs/zeroclaw/pull/3368)
    *   [#3367 feat: wire full agent loop into WebSocket chat handler](https://github.com/zeroclaw-labs/zeroclaw/pull/3367)
    *   [#3300 feat(cron): add run history API and dashboard view](https://github.com/zeroclaw-labs/zeroclaw/pull/3300)
    *   [#3347 fix(provider): harden Anthropic vision — MIME validation, cache-control walk, chat_with_system delegation](https://github.com/zeroclaw-labs/zeroclaw/pull/3347)
    *   [#3366 fix(workflows): use RELEASE_TOKEN for beta release tag creation](https://github.com/zeroclaw-labs/zeroclaw/pull/3366)
    *   [#3365 ci: pin release workflows to ubuntu-latest to fix glibc cache mismatch](https://github.com/zeroclaw-labs/zeroclaw/pull/3365)
    *   [#3364 feat(telegram,agent): add ack_reaction and show_tool_calls config](https://github.com/zeroclaw-labs/zeroclaw/pull/3364)
    *   [#3363 ci: use thin LTO profile for faster CI builds](https://github.com/zeroclaw-labs/zeroclaw/pull/3363)

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 技术日报

**日期**: 2026-03-13 | **分组**: OpenClaw 生态系统

## 社区焦点与动态摘要

今日 IronClaw 在 GitHub 上展现了高度的社区活跃度，尤其是在 **Bug Bash** 活动相关的 Issue 报告和修复 PRs 方面。大量 Issue 主要集中在 **Telegram 集成、Google Workspace 工具（如 Google Sheets）以及 Routine 功能**的稳定性与用户体验上。代码层面，CI/CD 流程的改进和关键 bug 的修复是本周的重头戏。

### 热门 Issues & 社区关注点

近期社区涌现了大量关于 **Telegram 集成**的 Bug 报告，包括安装失败 [#1060]，工具审批流程问题 [#996]，以及 OAuth URL 错误 [#992]。此外，**Google Sheets 工具**在创建和填充数据时也出现了问题 [#1002]，并且 OAuth 认证后出现权限错误 [#999]。**Routine 功能**方面，在 Telegram 渠道查询时无法显示已创建的 Routine [#995]，以及 Routine 广播到 Telegram 时 `chat_id` 错误 [#994]。

值得关注的还有一系列**用户体验和可用性**问题：
*   工具审批界面显示错误信息 [#997]。
*   Telegram 连接成功后缺乏状态通知 [#1058]。
*   复制的聊天文本保留白色字体，粘贴到白色背景应用中不可见 [#1059]。
*   安装 WASM 工具时，依赖的 artifact URL 格式过时导致 404 错误 [#958]。

CI/CD 方面，一个**关键的 Webhook 认证绕过安全漏洞** [#1033] 被发现并报告，这表明了构建系统对安全性的持续关注。

### 热门 Pull Requests & 开发动态

本周 PR Activity 依旧围绕着**修复 Bug 和提升稳定性**展开，尤其体现在以下几个方面：

*   **CI/CD 流程优化**: PR #1091 和 #1090 致力于修复 Staging Promotion Workflow 的解析问题，确保 CI/CD 流程的顺畅。PR #1087 引入了 **“禁止 Panic”的 CI 检查**，旨在提高生产代码的健壮性，这是一个重要的安全和稳定性举措。
*   **核心功能修复与增强**: PR #1083 整合了 **11 个 Bug 修复**，涵盖了从 Webhook 认证绕过到 Relay 失败、上下文内存增长等多个关键领域，其中 #1033（Webhook 认证绕过）值得高度关注。PR #1070 重点解决 Extension 生命周期的 Bug，并统一了认证流程。PR #1086 增加了 **WASM 工具的 `tool_info` schema 发现机制**，有助于优化 Prompt 大小。
*   **集成与工具链改进**: PR #1013 为 Linux 安装程序增加了 `musl` 目标，为静态链接提供了支持。PR #1084 为 Telegram 集成增加了**自动分割大消息的功能**，解决了消息长度限制问题。

### 最值得关注的动态 (3 项)

1.  **[PR] 修复关键安全与稳定性 Bug，包括 Webhook 认证绕过**：
    PR #1083 汇总了多项高优先级 Bug 修复，其中 #1033（Webhook 认证绕过）是**一个严重的潜在安全风险**。该 PR 的合并对 IronClaw 的整体安全性和稳定性至关重要。

2.  **[PR] Staging CI Workflow 修复及“禁止 Panic”CI 检查**：
    PR #1091 和 #1087 分别关注了 CI/CD 流程的顺畅和代码质量。特别是 **“禁止 Panic”的 CI 检查**（#1087）通过在 CI 层面强制要求避免使用 `.unwrap()`, `.expect()` 等可能导致程序崩溃的函数，极大地提升了代码的鲁棒性，这是大型开源项目持续健壮性的重要保障。

3.  **[Issue] 大量 Bug Bash 报告问题，集中于 Telegram 及 Google Workspace 集成**：
    今日收到的 Bug Bash Bug 报告数量显著，主要集中在 Telegram 集成（如安装、认证、消息发送）和 Google Workspace 工具（如 Google Sheets）的稳定性与功能性上。例如 [#992]（Google OAuth URL 错误）和 [#994]（Routine 广播到 Telegram 失败）等问题，反映了社区在使用这些核心集成和工具时遇到的挑战，**社区正积极反馈并推动关键的集成体验优化**。

---

## 参考链接

*   [#1060 "bug: Cannot install extensions"](https://github.com/nearai/ironclaw/issues/1060)
*   [#996 "Tool approval modal requires page reload to appear"](https://github.com/nearai/ironclaw/issues/996)
*   [#992 "Google OAuth URL broken when initiated from Telegram channel"](https://github.com/nearai/ironclaw/issues/992)
*   [#1002 "Spreadsheet created but not populated — google-sheets write silently incomplete"](https://github.com/nearai/ironclaw/issues/1002)
*   [#999 "Google Sheets returns 403 PERMISSION_DENIED after completing OAuth"](https://github.com/nearai/ironclaw/issues/999)
*   [#995 "Routines created in chat are invisible when queried from Telegram"](https://github.com/nearai/ironclaw/issues/995)
*   [#994 "Routine broadcast to Telegram fails with "Invalid chat_id 'default'"""](https://github.com/nearai/ironclaw/issues/994)
*   [#997 ""Error: Waiting for approval" misleading UI message"](https://github.com/nearai/ironclaw/issues/997)
*   [#1058 "No notification in chat when Telegram channel connects successfully"](https://github.com/nearai/ironclaw/issues/1058)
*   [#1059 "Copied chat text has white font color — invisible when pasted into white-background apps"](https://github.com/nearai/ironclaw/issues/1059)
*   [#958 "registry install fails on 0.18.0: tool artifact URLs use legacy unversioned names (404)"](https://github.com/nearai/ironclaw/issues/958)
*   [#1033 "[CRITICAL] Webhook authentication bypass when secret is not configured (src/channels/http.r"](https://github.com/nearai/ironclaw/issues/1033)
*   [#1091 "fix(ci): repair staging promotion workflow behavior"](https://github.com/nearai/ironclaw/pull/1091)
*   [#1087 "ci: enforce no panics in production code"](https://github.com/nearai/ironclaw/pull/1087)
*   [#1083 "fix: 5 critical/high-priority bugs (auth bypass, relay failures, unbounded recursion, context growth)"](https://github.com/nearai/ironclaw/pull/1083)
*   [#1090 "fix(ci): repair staging-ci workflow parsing"](https://github.com/nearai/ironclaw/pull/1090)
*   [PR #1032 "chore: promote staging to main (2026-03-12 11:12 UTC)"](https://github.com/nearai/ironclaw/pull/1032)
*   [#1086 "fix: add tool_info schema discovery for WASM tools"](https://github.com/nearai/ironclaw/pull/1086)
*   [#1013 "fix: add musl targets for Linux installer fallback"](https://github.com/nearai/ironclaw/pull/1013)
*   [#1084 "feat(telegram): support auto split large message"](https://github.com/nearai/ironclaw/pull/1084)
*   [nearai/ironclaw](https://github.com/nearai/ironclaw)

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw (sipeed/picoclaw) 技术日报 - 2026-03-13

## 版本更新

今日，PicoClaw 发布了 `nightly` 构建版本（[nightly](https://github.com/sipeed/picoclaw/releases/tag/nightly)），本次构建对应 **v0.2.2-nightly.20260312.6460a0a7**。本次发布是自动构建，旨在提供最新的开发进展，但可能存在不稳定性，建议谨慎使用。

## 社区关注点分析

### 热门 Issues & PRs

本周，PicoClaw 社区围绕 **Agent 行为重构**、**多渠道集成优化** 以及 **Provider 集成与 Bug 修复** 展开了积极的讨论和开发。

#### 1. Agent Refactor (Agent 重构)

*   **Agent 重构路线图 (#1216)**：这是一个正在进行的重大改进，旨在优化 Agent 的核心代码，为未来添加更多功能奠定基础。
*   **Agent 定义 (#1218)**：清晰地定义了 Agent 的构成，包括 `SOUL.md`（描述 Agent 性格、价值观）和 `AGENT.md`，为 Agent 的行为和交互提供了更规范的指导。
*   **上下文管理 (#1439)**：作为 Agent 重构的一部分，对上下文边界、压缩和 Token 预算的管理进行了深入探讨，旨在提升 Agent 的效率和可靠性。
*   **Discord 频道名集成 (#1451)**：一项新功能提议，旨在将 Discord 频道名纳入 Agent 的动态上下文中，为 Agent 提供更丰富的会话信息。该功能已有相关 PR (#1452, #1458) 正在跟进。

#### 2. 渠道集成与 Bug 修复

*   **Ollama 本地模型配置问题 (#1161)**：用户反馈在使用本地 Ollama 模型时，Agent 启动但无响应，表明在本地模型集成方面可能存在配置或兼容性问题，社区正在积极寻求解决方案。
*   **Matrix/LINE 渠道安全漏洞 (#1405, #1407)**：发现 Matrix 和 LINE 渠道在处理媒体文件和请求体时存在未限制大小的问题，可能导致拒绝服务（DoS）攻击，相关 Bug 已被报告。
*   **Telegram 消息发送问题 (#1212, #1323)**：有用户报告在 Telegram 中发送多条消息后，PicoClaw 会持续显示“正在输入...”，即使已回复也未解除，影响用户体验。
*   **QQ 渠道问题 (#1426)**：QQ 渠道出现无法正常使用的问题，这是渠道集成中需要重点关注和修复的 Bug。
*   **Azure OpenAI 支持 (#1424)**：用户提议增加对 Azure OpenAI Provider 的支持，以方便使用 Azure 服务的用户，这是一个重要的功能扩展方向。

#### 3. Provider 集成与 Bug 修复

*   **OpenRouter 容错链问题 (#1419)**：在使用 OpenRouter 时，Agent 在遇到瞬态错误（如连接重置）时会中断，而不是尝试回退模型，影响了整体的健壮性。相关 PR (#1453, #1420) 正在解决此问题。
*   **魔搭社区模型支持 (#1438)**：有用户希望增加对魔搭社区模型的配置支持，这有助于扩展 PicoClaw 的模型生态。相关 PR (#1447) 正在实现该功能。

### 重点关注动态

1.  **Agent 架构重构与上下文管理（#1216, #1218, #1439）**：社区正在对 Agent 的核心架构进行深度重构，包括定义 Agent 的核心概念和优化上下文管理。这表明项目致力于提升 Agent 的可扩展性、效率和智能化水平，是未来发展的关键方向。
2.  **多渠道 Bug 修复与安全加固（#1405, #1407, #1426, #1212, #1323）**：本周发现并报告了多个渠道（Matrix, LINE, QQ, Telegram）的 Bug，其中一些涉及到安全风险（如 DoS）。社区正积极通过 PR（如 #1456, #1455）来修复这些问题，确保 PicoClaw 在不同通信平台上的稳定运行。
3.  **Provider 集成扩展与优化（#1424, #1438, #1419, #1453）**：对 Provider 的支持是 PicoClaw 的核心能力之一。本周的讨论和 PR（如 #1459, #1447）涵盖了增加 Azure OpenAI 和 ModelScope 的支持，以及优化 OpenRouter 等现有 Provider 的容错能力，旨在为用户提供更广泛的模型选择和更可靠的服务。

---

## 参考链接

*   [nightly](https://github.com/sipeed/picoclaw/releases/tag/nightly)
*   [#1451](https://github.com/sipeed/picoclaw/issues/1451)
*   [#1161](https://github.com/sipeed/picoclaw/issues/1161)
*   [#1042](https://github.com/sipeed/picoclaw/issues/1042)
*   [#1216](https://github.com/sipeed/picoclaw/issues/1216)
*   [#1449](https://github.com/sipeed/picoclaw/issues/1449)
*   [#1132](https://github.com/sipeed/picoclaw/issues/1132)
*   [#1439](https://github.com/sipeed/picoclaw/issues/1439)
*   [#1438](https://github.com/sipeed/picoclaw/issues/1438)
*   [#1405](https://github.com/sipeed/picoclaw/issues/1405)
*   [#1407](https://github.com/sipeed/picoclaw/issues/1407)
*   [#1437](https://github.com/sipeed/picoclaw/issues/1437)
*   [#1328](https://github.com/sipeed/picoclaw/issues/1328)
*   [#1426](https://github.com/sipeed/picoclaw/issues/1426)
*   [#1424](https://github.com/sipeed/picoclaw/issues/1424)
*   [#1419](https://github.com/sipeed/picoclaw/issues/1419)
*   [#1218](https://github.com/sipeed/picoclaw/issues/1218)
*   [#1410](https://github.com/sipeed/picoclaw/issues/1410)
*   [#1395](https://github.com/sipeed/picoclaw/issues/1395)
*   [#1369](https://github.com/sipeed/picoclaw/issues/1369)
*   [#1364](https://github.com/sipeed/picoclaw/issues/1364)
*   [#1212](https://github.com/sipeed/picoclaw/issues/1212)
*   [#1323](https://github.com/sipeed/picoclaw/issues/1323)
*   [#440](https://github.com/sipeed/picoclaw/issues/440)
*   [#1459](https://github.com/sipeed/picoclaw/pull/1459)
*   [#1457](https://github.com/sipeed/picoclaw/pull/1457)
*   [#1456](https://github.com/sipeed/picoclaw/pull/1456)
*   [#1455](https://github.com/sipeed/picoclaw/pull/1455)
*   [#1453](https://github.com/sipeed/picoclaw/pull/1453)
*   [#1452](https://github.com/sipeed/picoclaw/pull/1452)
*   [#1458](https://github.com/sipeed/picoclaw/pull/1458)
*   [#1454](https://github.com/sipeed/picoclaw/pull/1454)
*   [#1376](https://github.com/sipeed/picoclaw/pull/1376)
*   [#1442](https://github.com/sipeed/picoclaw/pull/1442)
*   [#1440](https://github.com/sipeed/picoclaw/pull/1440)
*   [#1450](https://github.com/sipeed/picoclaw/pull/1450)
*   [#1448](https://github.com/sipeed/picoclaw/pull/1448)
*   [#1447](https://github.com/sipeed/picoclaw/pull/1447)
*   [#1445](https://github.com/sipeed/picoclaw/pull/1445)
*   [#1446](https://github.com/sipeed/picoclaw/pull/1446)
*   [#1444](https://github.com/sipeed/picoclaw/pull/1444)
*   [#1443](https://github.com/sipeed/picoclaw/pull/1443)
*   [#1441](https://github.com/sipeed/picoclaw/pull/1441)
*   [#1420](https://github.com/sipeed/picoclaw/pull/1420)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报

**日期**: 2026-03-13

**分组**: OpenClaw 生态系统

## 核心聚焦 (Top 3 Highlights)

1.  **Token 优化系列功能快速涌现**: 今日新增了多项关于 Token 优化的功能性 Issue 和 PR，旨在从源头减少 Token 浪费，包括“智能 Token 成本降低”、“Inline Compaction”、“Response length control”以及“CLAUDE.md auto-compression”。这些改进集中在 #983、#984、#985、#986、#982、#981、#980 和 #988，显示社区对成本控制和效率提升的高度关注。
2.  **多渠道集成与功能扩展**: 社区在集成和功能扩展方面表现活跃。新增了 Telegram 的 `/add-telegram-callback` skill，支持收发文件附件的 Discord skill，以及用于 Docker / Podman 部署的支持，如 #1014、#1012、#1011 以及 #1004。
3.  **核心 Bug 修复与稳定性提升**: 多个重要的 Bug 得到修复或正在推进中。包括处理 `tool_use` finish reason 协议违反的 #827 (已通过 PR #1003 修复)，OAuth Token 过期问题 #730，以及 Podman SSH 连接和 Matrix 客户端问题 #993, #992。

## 热门 Issue & PR 分析

### 社区关注热点：

*   **Token 优化与成本控制**:
    *   #983 "Token Optimization: Smart Token Cost Reduction (Tracking Issue)" - (#983)[https://github.com/qwibitai/nanoclaw/issues/983] 作为一个跟踪性 Issue，汇总了多项 Token 优化机制，预示着对 LLM 成本精细化管理的重视。
    *   #980 "Token Optimization: Inline Compaction (Mechanism 1)" - (#980)[https://github.com/qwibitai/nanoclaw/issues/980] 提出通过在现有 API 调用中顺带完成对话历史压缩，旨在零额外 Input Token 成本。
    *   #985 "Feature: Response length control — reduce output token waste" - (#985)[https://github.com/qwibitai/nanoclaw/issues/985] 关注输出 Token 的高成本，提出通过软约束指令来减少冗余输出。
    *   #986 "Feature: CLAUDE.md auto-compression — prevent system prompt bloat" - (#986)[https://github.com/qwibitai/nanoclaw/issues/986] 针对 CLAUDE.md 文件随时间膨胀问题，提出自动压缩策略。
    *   Pull Request #988 "feat: smart token optimization (inline compaction + length control + CLAUDE.md compression)" - (#988)[https://github.com/qwibitai/nanoclaw/pull/988] 将上述优化机制整合成一个 PR，显示了开发团队对此方向的集中投入。

*   **集成与扩展能力**:
    *   #1014 "feat: add /add-telegram-callback skill for inline keyboard support" - (#1014)[https://github.com/qwibitai/nanoclaw/pull/1014] 扩展了 Telegram 集成，增加了对交互式 Inline Keyboard 的支持。
    *   #979 "feat: add lancedb-memory skill" - (#979)[https://github.com/qwibitai/nanoclaw/pull/979] 和 #1013 "Add semantic memory skill with LanceDB + Gemini embeddings" - (#1013)[https://github.com/qwibitai/nanoclaw/pull/1013] 引入了 LancedDB 作为持久化语义内存的方案，解决了 Agent 跨会话记忆缺失的问题。
    *   #1011 "feat: add outbound file attachment support for container agents" - (#1011)[https://github.com/qwibitai/nanoclaw/pull/1011] 和 #1012 "feat: add Discord file-sending skill" - (#1012)[https://github.com/qwibitai/nanoclaw/pull/1012] 共同增强了 Agent 通过 Discord 等渠道发送文件附件的能力。

*   **稳定性与 Bug 修复**:
    *   #827 "fix(agent): FinishReason::ToolUse with 0 tool calls accepted as success" - (#827)[https://github.com/qwibitai/nanoclaw/issues/827] 指出了一个 Agent 协议的 Bug，当 `FinishReason::ToolUse` 但没有实际工具调用时，被错误地视为成功。Pull Request #1003 "fix(agent): add protocol validation for tool_use finish reason (#827)" - (#1003)[https://github.com/qwibitai/nanoclaw/pull/1003] 正在修复此问题。
    *   #730 "Bug: CLAUDE_CODE_OAUTH_TOKEN in .env expires overnight — containers fail with 401 each morning" - (#730)[https://github.com/qwibitai/nanoclaw/issues/730] 反映了 OAuth token 过期导致容器失败的问题，这是一个影响部署稳定性的关键 Bug。
    *   #993 "BUG-28: Podman SSH connection drops on macOS — silent death after sleep/wake" - (#993)[https://github.com/qwibitai/nanoclaw/issues/993] 和 #957 "Suggest supporting Podman as an alternative to Docker" - (#957)[https://github.com/qwibitai/nanoclaw/issues/957] 都指向了在容器化（尤其是 macOS 用户）方面的兼容性和稳定性问题。

### 新增亮点：

*   **Token 优化系列**: 多个关于 Token 优化的 Issue ( #980, #981, #982, #984, #985, #986) 和其整合 PR (#988) 在今日新建，表明这是一个社区高度关注且正在快速推进的方向。([#983](https://github.com/qwibitai/nanoclaw/issues/983), [#984](https://github.com/qwibitai/nanoclaw/issues/984), [#985](https://github.com/qwibitai/nanoclaw/issues/985), [#986](https://github.com/qwibitai/nanoclaw/issues/986), [#980](https://github.com/qwibitai/nanoclaw/issues/980), [#981](https://github.com/qwibitai/nanoclaw/issues/981), [#982](https://github.com/qwibitai/nanoclaw/issues/982), [#988](https://github.com/qwibitai/nanoclaw/pull/988))
*   **Telegram Skill 扩展**: `/add-telegram-callback` skill 的新增 (#1014) 扩展了 NanoClaw 在 Telegram 平台上的交互能力。([#1014](https://github.com/qwibitai/nanoclaw/pull/1014))
*   **文件发送能力**: 针对 Discord 的文件发送 skill (#1012) 和容器 Agent 的通用文件附件支持 (#1011) 今日均有更新/新建，增强了 Agent 的信息传递能力。([#1012](https://github.com/qwibitai/nanoclaw/pull/1012), [#1011](https://github.com/qwibitai/nanoclaw/pull/1011))

## 主要动态

### 1. Token 成本控制新攻势

今日，一系列针对 Token 成本优化的 Issue 和 Pull Request 被新建或更新。核心解决方式包括：

*   **Inline Compaction**: #980 提出了一种在现有 API 调用中嵌入对话历史压缩指令的方式，避免了额外的 Token 消耗。
*   **Response Length Control**: #985 建议通过注入软约束指令，让 Claude 在输出时更加精炼，减少冗余。
*   **CLAUDE.md Auto-Compression**: #986 旨在通过检测 CLAUDE.md 文件大小并在必要时自动压缩，防止系统 Prompt 过度膨胀。
*   **整体优化 PR**: #988 将上述机制整合，为一个全面的 Token 优化方案。

这些工作共同指向了降低 LLM 使用成本，提升效率的目标，显示了社区对此的深度投入。

### 2. 增强多渠道集成与文件处理能力

*   **Telegram 交互性提升**: PR #1014 新增了 `/add-telegram-callback` skill，使得 NanoClaw 能够支持 Telegram 的 Inline Keyboard，提供更丰富的用户交互体验。
*   **文件发送通用支持**: PR #1011 为容器 Agent 添加了发送文件附件的能力，同时 PR #1012 专门为 Discord 渠道实现了发送文件的新 skill，这对于需要传输日志、报告或生成文件的场景非常实用。

### 3. 关键 Bug 追踪与修复

*   **Agent 协议验证**: Issue #827 指出了 Agent 在处理 `FinishReason::ToolUse` 时存在协议漏洞，PR #1003 正在修复这一问题，增强了 Agent 的健壮性。
*   **OAuth Token 过期问题**: Issue #730 报告了 CLAUDE_CODE_OAUTH_TOKEN 过期导致容器启动失败的问题，这是影响持续运行的关键 Bug，社区正在关注其解决方案。

## 其他值得关注的动态

*   **GitHub MCP Server 集成**: PR #976 引入了 GitHub MCP server，使容器 Agent 能够直接使用结构化的 GitHub 操作工具，提升了集成效率和安全性。
*   **Podman 支持与兼容性**: Issue #957 和 #993 持续反映了社区对 Podman 作为 Docker 替代方案的兴趣以及在 macOS 上 Podman 稳定性的关注。
*   **语义内存增强**: PR #979 和 #1013 引入了基于 LanceDB 的语义内存能力，解决了 Agent 长期记忆的痛点。

---

## 参考链接

*   **Issues**:
    *   [#829](https://github.com/qwibitai/nanoclaw/issues/829)
    *   [#973](https://github.com/qwibitai/nanoclaw/issues/973)
    *   [#341](https://github.com/qwibitai/nanoclaw/issues/341)
    *   [#827](https://github.com/qwibitai/nanoclaw/issues/827)
    *   [#730](https://github.com/qwibitai/nanoclaw/issues/730)
    *   [#865](https://github.com/qwibitai/nanoclaw/issues/865)
    *   [#878](https://github.com/qwibitai/nanoclaw/issues/878)
    *   [#830](https://github.com/qwibitai/nanoclaw/issues/830)
    *   [#833](https://github.com/qwibitai/nanoclaw/issues/833)
    *   [#989](https://github.com/qwibitai/nanoclaw/issues/989)
    *   [#990](https://github.com/qwibitai/nanoclaw/issues/990)
    *   [#991](https://github.com/qwibitai/nanoclaw/issues/991)
    *   [#993](https://github.com/qwibitai/nanoclaw/issues/993)
    *   [#992](https://github.com/qwibitai/nanoclaw/issues/992)
    *   [#957](https://github.com/qwibitai/nanoclaw/issues/957)
    *   [#984](https://github.com/qwibitai/nanoclaw/issues/984)
    *   [#985](https://github.com/qwibitai/nanoclaw/issues/985)
    *   [#986](https://github.com/qwibitai/nanoclaw/issues/986)
    *   [#983](https://github.com/qwibitai/nanoclaw/issues/983)
    *   [#982](https://github.com/qwibitai/nanoclaw/issues/982)
    *   [#981](https://github.com/qwibitai/nanoclaw/issues/981)
    *   [#980](https://github.com/qwibitai/nanoclaw/issues/980)
*   **Pull Requests**:
    *   [#1014](https://github.com/qwibitai/nanoclaw/pull/1014)
    *   [#976](https://github.com/qwibitai/nanoclaw/pull/976)
    *   [#1013](https://github.com/qwibitai/nanoclaw/pull/1013)
    *   [#979](https://github.com/qwibitai/nanoclaw/pull/979)
    *   [#1012](https://github.com/qwibitai/nanoclaw/pull/1012)
    *   [#1011](https://github.com/qwibitai/nanoclaw/pull/1011)
    *   [#1009](https://github.com/qwibitai/nanoclaw/pull/1009)
    *   [#1010](https://github.com/qwibitai/nanoclaw/pull/1010)
    *   [#1008](https://github.com/qwibitai/nanoclaw/pull/1008)
    *   [#1007](https://github.com/qwibitai/nanoclaw/pull/1007)
    *   [#1006](https://github.com/qwibitai/nanoclaw/pull/1006)
    *   [#1005](https://github.com/qwibitai/nanoclaw/pull/1005)
    *   [#1004](https://github.com/qwibitai/nanoclaw/pull/1004)
    *   [#1002](https://github.com/qwibitai/nanoclaw/pull/1002)
    *   [#1003](https://github.com/qwibitai/nanoclaw/pull/1003)
    *   [#999](https://github.com/qwibitai/nanoclaw/pull/999)
    *   [#1001](https://github.com/qwibitai/nanoclaw/pull/1001)
    *   [#1000](https://github.com/qwibitai/nanoclaw/pull/1000)
    *   [#988](https://github.com/qwibitai/nanoclaw/pull/988)
    *   [#998](https://github.com/qwibitai/nanoclaw/pull/998)

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报

**日期**: 2026-03-13 | **分组**: OpenClaw 生态系统

## ✨ 今日亮点 ✨

### 1. **v0.2.4 版本发布，着重修复 Bug 提升稳定性**
LobsterAI 于昨日发布了 v0.2.4 版本。本次更新主要针对 IM 渠道连接性测试中的 Bug 以及应用启动时可能出现的加载问题进行了修复，旨在提升整体的用户体验和稳定性。

### 2. **Gateway 启动速度优化 PR 获显著进展**
PR [#395](https://github.com/netease-youdao/LobsterAI/pull/395) 提出了一项重要的 OpenClaw Gateway 启动速度优化方案。通过引入 esbuild 进行单文件 bundle、利用编译缓存以及插件预编译，该 PR 成功将 Windows Electron utilityProcess 下的 Gateway 启动时间从 180 秒以上大幅缩短至首次启动约 85 秒，后续启动更是仅需约 15 秒。这一优化对于提升 OpenClaw 生态的整体响应速度具有重要意义。

### 3. **社区持续关注功能增强与用户体验**
今日新增的 Issue [#398](https://github.com/netease-youdao/LobsterAI/issues/398) 和 [#391](https://github.com/netease-youdao/LobsterAI/issues/391) 分别反映了用户对飞书插件机器人对话记忆清除功能的需求，以及建议增加提示词优化按钮以提升 AI 回复效果的诉求。这些 Issue 都指向了用户对 LobsterAI 在易用性、交互性和智能化方面的更高期待。

---

## 🚀 **版本更新**

- **v0.2.4** ([`v0.2.4`](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.4)) - 2026-03-12
  - **亮点**:
    - 修复 IM 渠道连接性测试中发现的 Bug。
    - 解决应用启动时可能出现的持续加载问题。

## 📣 **社区焦点 (Issues)**

### **新动态 (🆕 新建 Issues)**
- **#398 [🆕 新建] 飞书插件机器人对话中如何清除记忆** ([https://github.com/netease-youdao/LobsterAI/issues/398](https://github.com/netease-youdao/LobsterAI/issues/398))
  - 用户在飞书插件机器人中寻求对话记忆的清除方法，暗示当前可能不支持 `/new`、`/reset` 或 `/clear` 等指令。
- **#390 [🆕 新建] 0.2.2 Apple Silicon (ARM64)检查更新无法识别0.2.3版本** ([https://github.com/netease-youdao/LobsterAI/issues/390](https://github.com/netease-youdao/LobsterAI/issues/390))
  - Apple Silicon (ARM64) 架构下的 v0.2.2 版本在检查更新时未能识别到 v0.2.3 版本，提示已是最新。
- **#391 [🆕 新建] 建议增加提示词优化按钮** ([https://github.com/netease-youdao/LobsterAI/issues/391](https://github.com/netease-youdao/LobsterAI/issues/391))
  - 用户建议在界面中添加“提示词优化”按钮，以帮助新手用户提升 AI 回复质量。

### **近期更新 (Issues 评论或状态变更)**
- **#366 [近3天] 请问 gateway 是跑在 18789端口吗？为什么 openclaw gateway status 会失败** ([https://github.com/netease-youdao/LobsterAI/issues/366](https://github.com/netease-youdao/LobsterAI/issues/366))
  - 此 Issue 持续被讨论，关注点在于 OpenClaw Gateway 的端口问题及 `openclaw gateway status` 命令的失败原因，并且提到了 Gateway 服务配置可能过时。

## 💡 **社区动力 (Pull Requests)**

### **新增 PRs (🆕 新建 PRs)**
- **#395 [🆕 新建] feat: openclaw gateway 启动速度优化 (esbuild bundle + compile cache + 插件预编译)** ([https://github.com/netease-youdao/LobsterAI/pull/395](https://github.com/netease-youdao/LobsterAI/pull/395))
  - **摘要**: 显著优化 Windows Gateway 启动速度，通过 esbuild 打包、编译缓存等手段，将启动时间从 180s+ 降至 85s（首次）/ 15s（后续）。
- **#396 [🆕 新建] fix：修复应用启动时一直处于加载状态的问题** ([https://github.com/netease-youdao/LobsterAI/pull/396](https://github.com/netease-youdao/LobsterAI/pull/396))
  - 修复了应用启动时卡在加载状态的问题。
- **#393 [🆕 新建] fix: 修复IM 渠道连接性测试引起的 bug** ([https://github.com/netease-youdao/LobsterAI/pull/393](https://github.com/netease-youdao/LobsterAI/pull/393))
  - 修复了 IM 渠道连接性测试过程中出现的 Bug。
- **#388 [🆕 新建] feat: update MiniMax provider default base URL and model list** ([https://github.com/netease-youdao/LobsterAI/pull/388](https://github.com/netease-youdao/LobsterAI/pull/388))
  - **摘要**: 更新 MiniMax provider 配置，将默认 Base URL 切换至海外地址，并更新了模型列表。
- **#387 [🆕 新建] fix: resolve macOS code signing failures** ([https://github.com/netease-youdao/LobsterAI/pull/387](https://github.com/netease-youdao/LobsterAI/pull/387))
  - **摘要**: 解决了 macOS 代码签名失败的问题，包括修复 `RangeError` 和 `ENOENT` 错误，确保 macOS 构建的稳定性。

### **近期更新 (PRs 评论或状态变更)**
- **#380 [近3天] feat: add support for custom URI protocols in markdown links** ([https://github.com/netease-youdao/LobsterAI/pull/380](https://github.com/netease-youdao/LobsterAI/pull/380))
  - **摘要**: 增加了对 Markdown 链接中自定义 URI 协议的支持（如 `obsidian://`），允许从 Markdown 中打开外部应用。

---

## 🔗 参考链接

- [v0.2.4](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.4)
- [#398](https://github.com/netease-youdao/LobsterAI/issues/398)
- [#366](https://github.com/netease-youdao/LobsterAI/issues/366)
- [#390](https://github.com/netease-youdao/LobsterAI/issues/390)
- [#391](https://github.com/netease-youdao/LobsterAI/issues/391)
- [#397](https://github.com/netease-youdao/LobsterAI/pull/397)
- [#380](https://github.com/netease-youdao/LobsterAI/pull/380)
- [#395](https://github.com/netease-youdao/LobsterAI/pull/395)
- [#396](https://github.com/netease-youdao/LobsterAI/pull/396)
- [#394](https://github.com/netease-youdao/LobsterAI/pull/394)
- [#393](https://github.com/netease-youdao/LobsterAI/pull/393)
- [#392](https://github.com/netease-youdao/LobsterAI/pull/392)
- [#389](https://github.com/netease-youdao/LobsterAI/pull/389)
- [#388](https://github.com/netease-youdao/LobsterAI/pull/388)
- [#387](https://github.com/netease-youdao/LobsterAI/pull/387)

---
**项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 技术日报

**日期**: 2026-03-13 | **分组**: OpenClaw 生态系统

## 摘要

今日 TinyClaw 生态系统迎来频繁的开发活动，尤以新版本发布和大量功能性 PR 合入为亮点。v0.0.12 版本正式发布，引入了 Agent 消息持久化和事件流，极大地提升了对话历史的管理能力和用户体验。同期，一系列 PR 显著增强了项目的易用性和核心功能，包括交互式设置向导、TinyOffice 的组织结构可视化、聊天室与项目管理功能，以及对 `@clack/prompts` 库的兼容性修复。社区的活跃也在 Issues 区域有所体现，bug 修复和新功能需求得到及时响应。

---

## 新版本发布

### **TinyClaw v0.0.12" 发布**

最新发布的 **[v0.0.12 "v0.0.12"](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)** 版本是今日的焦点，其主要亮点包括：

*   **Agent 消息持久化与事件流 (Agent Message Persistence & Event Stream)**: 核心功能增强，通过新增的 `agent_messages` SQLite 表实现所有 Agent 对话历史的持久化存储。引入了简化的 `agent_message` SSE 事件，每个 Agent 响应触发一次，取代了监听完整 `chain_step` 生命周期。同时，新增了 `GET /api/agent-messages` 和 `GET /api/agents/:id/messages` REST API 接口，并优化了 Agent 聊天视图的用户体验。
*   **交互式设置向导 (Interactive Setup Wizard)**: 显著改善了首次部署的体验，通过多步向导收集用户的通道偏好、AI provider/model 选择以及工作空间配置等信息，无需用户手动编辑配置文件。

---

## 社区焦点

### **关键 Issue 动态**

*   **[🆕 新建] #205 "[Bug]: problem importing @clack/prompts"**: 该 Bug 报告指出在尝试执行 `tinyclaw pairing approve` 命令时，遇到了运行时错误，影响了核心 Agent 执行功能。该问题已通过 PR #206 得到修复，通过将 CLI 包从 CommonJS 转换为 ESM 来支持 `@clack/prompts` v1.x。
*   **[🆕 新建] #197 "[Bug]: 0.0.10 is missing setup-wizard.sh"**: 此严重 Bug 影响了 v0.0.10 版本的首次安装，由于 `setup-wizard.sh` 文件缺失导致安装失败。PR #198 已修复此问题，移除了过时的 `setup-wizard.sh` 引用，并更新了调用方式。
*   **[近3天] #193 "[Feature]: TinyOffice: add first-run web onboarding for initial setup"**: 这是关于提升 TinyOffice 首次使用体验的 Feature Request。当前设置高度依赖 CLI，目标是引入 Web 端的 onboarding 流程，使 TinyOffice 在首次配置时更加友好。

### **热门 Pull Request**

今日合并（或新建且已关闭）了大量 PR，体现了项目快速迭代的势头：

*   **[🆕 新建] #202 "feat(api): add agent message persistence and simplified event stream"**: 此 PR 实现了 v0.0.12 版本中 Agent 消息持久化和事件流的核心功能，为 Agent 对话管理带来了重要提升。
*   **[🆕 新建] #206 "fix(cli): convert to ESM to support @clack/prompts v1.x"**: 直接解决了 Issue #205 中的 Bug，通过 ESM 转换确保了 CLI 对新版 `@clack/prompts` 的兼容性。
*   **[🆕 新建] #204 "feat(settings): add interactive setup wizard for initial configuration"**: 该 PR 实现了 v0.0.12 版本中提到的交互式设置向导，极大降低了用户的入门门槛。
*   **[🆕 新建] #201 "feat(office): add organization chart visualization page"** & **[🆕 新建] #199 "feat: add chat rooms and projects to tinyoffice"** & **[🆕 新建] #203 "feat: add projects and chat rooms management"**: 这三项 PR 共同极大地丰富了 TinyOffice 的功能集，引入了组织结构可视化、类 Slack 聊天室以及项目管理功能，标志着 TinyOffice 在协作和组织方面迈入了新阶段。
*   **[近3天] #191 "feat: rebrand tinyclaw to tinyagi"**: 这是一个非常重要的重构 PR，正在进行从 "TinyClaw" 到 "TinyAGI" 的品牌重塑，涉及代码库的广泛修改，包括包名、环境变量、CLI 命令等。

---

## 本日最值得关注动态

1.  **[v0.0.12 "v0.0.12"](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)** 版本发布，带来了 Agent 消息持久化和交互式设置向导，显著增强了用户体验和数据管理能力。
2.  **TinyOffice 功能集的大幅扩展**: PRs #201, #199, #203 的合入，为 TinyOffice 增加了组织结构可视化、聊天室和项目管理功能，使其更接近一个成熟的协作平台。
3.  **关键 Bug 的快速修复**: 针对影响安装的 `setup-wizard.sh` 缺失问题 (#197) 和 CLI 导入错误 (#205)，项目迅速响应并合并了修复 PRs (#198, #206)，保证了项目的稳定性和可用性。

---

## 参考链接

*   [v0.0.12 "v0.0.12"](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)
*   [#205 "[Bug]: problem importing @clack/prompts"](https://github.com/TinyAGI/tinyclaw/issues/205)
*   [#193 "[Feature]: TinyOffice: add first-run web onboarding for initial setup"](https://github.com/TinyAGI/tinyclaw/issues/193)
*   [#197 "[Bug]: 0.0.10 is missing setup-wizard.sh"](https://github.com/TinyAGI/tinyclaw/issues/197)
*   [#202 "feat(api): add agent message persistence and simplified event stream"](https://github.com/TinyAGI/tinyclaw/pull/202)
*   [#206 "fix(cli): convert to ESM to support @clack/prompts v1.x"](https://github.com/TinyAGI/tinyclaw/pull/206)
*   [#204 "feat(settings): add interactive setup wizard for initial configuration"](https://github.com/TinyAGI/tinyclaw/pull/204)
*   [#201 "feat(office): add organization chart visualization page"](https://github.com/TinyAGI/tinyclaw/pull/201)
*   [#199 "feat: add chat rooms and projects to tinyoffice"](https://github.com/TinyAGI/tinyclaw/pull/199)
*   [#203 "feat: add projects and chat rooms management"](https://github.com/TinyAGI/tinyclaw/pull/203)
*   [#198 "fix: remove stale setup-wizard.sh references"](https://github.com/TinyAGI/tinyclaw/pull/198)
*   [#191 "feat: rebrand tinyclaw to tinyagi"](https://github.com/TinyAGI/tinyclaw/pull/191)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-13T00:48:56.591Z