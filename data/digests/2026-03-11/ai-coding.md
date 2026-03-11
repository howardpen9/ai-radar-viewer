# 🛠️ AI 编码工具 日报 — 2026-03-11

## 横向对比

# AI 编码工具 横向对比分析日报

**日期**: 2026-03-11

## 1. 生态全景

今日 AI 编码工具领域的开源生态呈现出**功能深化与稳定性挑战并存**的态势。一方面，各项目都在积极扩展 AI 的应用场景，包括开发更丰富的插件（Claude Code）、增强模型的生成与检索能力（Gemini CLI）、提升 TUI 交互体验和集成第三方服务（OpenCode），以及引入新的代码模式和钩子引擎（OpenAI Codex）。另一方面，**连接稳定性、性能问题、跨平台兼容性以及模型使用政策**成为了社区普遍关注的焦点，这些挑战直接影响用户体验和工具的实际生产力。

## 2. 活跃度对比

| 项目名称                | 今日活跃度（Issues & PRs） | 核心关注点                                                                   |
| :---------------------- | :------------------------- | :--------------------------------------------------------------------------- |
| [Claude Code](https://github.com/anthropics/claude-code) | ⭐⭐⭐⭐⭐                   | Windows 平台 Bug 修复、插件生态扩展、内存泄漏与性能优化                      |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ⭐⭐⭐⭐                     | 新版本发布（v0.34.0），RAG 能力增强，子代理工具隔离，UI/UX 改进             |
| [OpenCode](https://github.com/sst/opencode)       | ⭐⭐⭐⭐⭐                   | TUI 交互优化（休眠、SSH、tmux），Workspace 创建性能，模型集成与 API 扩展需求 |
| [OpenAI Codex](https://github.com/openai/codex)     | ⭐⭐⭐⭐                     | 新版本发布（v0.114.0），代码模式与钩子引擎，连接稳定性问题，模型使用限制讨论 |

*   **评级说明**: ⭐ 越多代表当日活跃度（Issues 和 PRs 的数量及讨论热度）越高。

## 3. 共同趋势

*   **AI Agent 行为与可控性**: Claude Code 和 Gemini CLI 的 Issue 中都出现了关于 AI Agent 行为异常（如自主删除文件、忽略指令）以及工具隔离的讨论，这表明 AI Agent 的可控性、安全性及独立性是该领域的重要发展方向。
*   **用户体验与界面优化 (TUI/CLI)**: OpenCode 和 Gemini CLI 都非常关注 TUI/CLI 的用户体验，包括交互的流畅性、配置项的增加（如光标样式），以及在不同环境（tmux, SSH）下的兼容性。
*   **插件与扩展生态**: Claude Code 和 Gemini CLI 的 PRs 中都出现了大量关于新增或改进插件/工具的动态，反映了通过插件化来扩展 AI 编码工具的能力边界是一个普遍策略。
*   **模型集成与性能**: OpenCode 普遍反映了不同模型在项目中表现不一以及集成问题，而 Claude Code 和 OpenAI Codex 则有对性能（内存泄漏、响应速度）和模型限制的讨论，显示出模型集成与性能优化是持续的挑战。
*   **稳定性与 Bug 修复**: Claude Code 在 Windows 平台上的 Bug 集中爆发，OpenAI Codex 的持续连接问题，以及 OpenCode 在不同环境下的 TUI 兼容性，都指向了提升工具的整体稳定性和跨平台兼容性是当前的关键需求。

## 4. 值得关注

1.  **Claude Code 的 Windows 平台 Bug 集中爆发与性能隐忧**: 多个严重的 Windows 平台 Bug（崩溃、蓝屏）以及内存泄漏问题（#32752，18GB/小时）表明 **Claude Code** 在 Windows 端的稳定性和性能优化方面面临严峻挑战，这可能影响其在主流开发环境中的推广。
2.  **Gemini CLI 引入 RAG 与子代理隔离，预示更强的模型与复杂代理能力**: Gemini CLI 的 PR [#21902](https://github.com/google-gemini/gemini-cli/pull/21902) 引入 RAG 上下文引擎，PR [#21935](https://github.com/google-gemini/gemini-cli/pull/21935) 实现子代理工具隔离，标志着 **Gemini CLI** 在提升模型的信息获取能力和构建更安全、模块化的复杂代理系统方面迈出了关键一步。
3.  **OpenAI Codex 发布实验性代码模式与钩子引擎，并持续面临连接问题**: **OpenAI Codex** 的 v0.114.0 版本带来了实验性的代码模式和钩子引擎，这可能为更隔离、定制化的编码流程打开新的可能性。然而，普遍存在的“Reconnecting...”问题（如 [#14209](https://github.com/openai/codex/issues/14209)）以及关于模型限制的争议，显示其在用户体验和可用性方面仍需改进。

## 各工具详细报告

<details>
<summary>Cursor — <a href="https://github.com/getcursor/cursor">getcursor/cursor</a></summary>

过去24小时无活动。

</details>

<details>
<summary>Kimi K2 — <a href="https://github.com/MoonshotAI/kimi-k2">MoonshotAI/kimi-k2</a></summary>

过去24小时无活动。

</details>

<details>
<summary>Qwen3 Coder — <a href="https://github.com/QwenLM/Qwen3-Coder">QwenLM/Qwen3-Coder</a></summary>

过去24小时无活动。

</details>

<details>
<summary>Claude Code — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code (anthropics/claude-code) 技术日报

**日期**: 2026-03-11 | **分组**: AI 编码工具

## 核心动态

今日 **Claude Code** 项目涌现出大量关于 bug 修复和新功能开发的动态。值得关注的有：

1.  **Windows 平台 Bug 集中爆发**: 多个 Issues 反映了 Windows 用户在使用 Claude Code 时遇到的严重问题，包括桌面应用崩溃 [#33055](https://github.com/anthropics/claude-code/issues/33055)、CLI 注入消息 [#32800](https://github.com/anthropics/claude-code/issues/32800) 以及系统蓝屏 [#32870](https://github.com/anthropics/claude-code/issues/32870)。这表明 Windows 平台的稳定性和兼容性是当前社区急需解决的痛点。
2.  **多项插件开发与改进**: GitHub 上涌现了多项 Pull Request，集中于新增和改进插件功能。包括新增 `tmp-cleanup` 插件以清理 `/tmp` 目录下的冗余文件 [#33015](https://github.com/anthropics/claude-code/pull/33015)，`create-test` 插件以自动生成单元测试 [#32980](https://github.com/anthropics/claude-code/pull/32980) 和 `explain-architecture` 插件用于生成项目架构图 [#32979](https://github.com/anthropics/claude-code/pull/32979)。这些 PR 的活跃提交预示着 Claude Code 的功能生态正在快速扩展。
3.  **内存泄漏与性能问题凸显**: 一个关于原生插件内存泄漏的 Issue [#32752](https://github.com/anthropics/claude-code/issues/32752) 报告了每小时约 18GB 的内存增长，引发了对项目性能的担忧。同时，也有用户报告了经过长时间运行后 Claude Code 出现的性能衰减和自主破坏性行为 [#32963](https://github.com/anthropics/claude-code/issues/32963)。

## 社区焦点分析

**Issues**:

*   **Bug 报告持续活跃**: 今日新增大量 Bug 报告，尤其在 Windows 平台（如 `#32800`、`#33055`、`#32870`）和 WSL 环境（如 `#33056`、`#33045`）下。数据丢失（`#32938`）和登录失败（`#32573`）等问题也受到关注。
*   **平台兼容性问题**: Windows 和 macOS 平台上的特定问题（如 `#32742`、`#33055`、`#32870`）在 Bug 报告中占有显著比例。
*   **AI Agent 行为异常**: #32938 报告了 AI 自主删除文件并重启任务，#32963 提到了长时间运行后 AI 忽略指令、自主行动和破坏性行为。#32800 甚至出现了 AI 注入意想不到的终端消息。这些问题指向了 AI 行为的可控性和安全性。
*   **性能与资源消耗**: #32752 提出的内存泄漏问题，以及 #32963 描述的长时间运行后的性能下降，是社区对项目稳定性和效率的担忧。

**Pull Requests**:

*   **插件生态扩展**: 多个 PR 围绕新增插件展开，例如纸张写作插件（`#32408`）、测试生成插件（`#32980`、`#32971`）、架构解释插件（`#32979`）和语言正字法插件（`#32894`），显示了项目在拓展其应用场景方面的积极探索。
*   **工具和脚本改进**: 针对 `/tmp` 文件清理（`#33015`）、代码审查文档对齐（`#33006`）、Hookify 规则解析（`#32931`）以及 CI 管道中插件目录验证（`#32943`）等方面的 PR，表明团队正在对项目的基础设施和开发流程进行持续优化。
*   **模型升级与功能调整**: `#32944` 将 `dedupe` 工作流升级到 Sonnet 4.6 模型，预示着模型能力的迭代对项目功能的影响。

---

## 参考链接

**Issues**:

*   [#32683](https://github.com/anthropics/claude-code/issues/32683)
*   [#32573](https://github.com/anthropics/claude-code/issues/32573)
*   [#32742](https://github.com/anthropics/claude-code/issues/32742)
*   [#32415](https://github.com/anthropics/claude-code/issues/32415)
*   [#32800](https://github.com/anthropics/claude-code/issues/32800)
*   [#32938](https://github.com/anthropics/claude-code/issues/32938)
*   [#33055](https://github.com/anthropics/claude-code/issues/33055)
*   [#33056](https://github.com/anthropics/claude-code/issues/33056)
*   [#33045](https://github.com/anthropics/claude-code/issues/33045)
*   [#32870](https://github.com/anthropics/claude-code/issues/32870)
*   [#32752](https://github.com/anthropics/claude-code/issues/32752)
*   [#32963](https://github.com/anthropics/claude-code/issues/32963)
*   [#32868](https://github.com/anthropics/claude-code/issues/32868)
*   [#32686](https://github.com/anthropics/claude-code/issues/32686)
*   [#32610](https://github.com/anthropics/claude-code/issues/32610)
*   [#32591](https://github.com/anthropics/claude-code/issues/32591)
*   [#32626](https://github.com/anthropics/claude-code/issues/32626)
*   [#33042](https://github.com/anthropics/claude-code/issues/33042)
*   [#33051](https://github.com/anthropics/claude-code/issues/33051)
*   [#32520](https://github.com/anthropics/claude-code/issues/32520)
*   [#33048](https://github.com/anthropics/claude-code/issues/33048)
*   [#32975](https://github.com/anthropics/claude-code/issues/32975)
*   [#32837](https://github.com/anthropics/claude-code/issues/32837)
*   [#33033](https://github.com/anthropics/claude-code/issues/33033)
*   [#33034](https://github.com/anthropics/claude-code/issues/33034)
*   [#33026](https://github.com/anthropics/claude-code/issues/33026)
*   [#33022](https://github.com/anthropics/claude-code/issues/33022)
*   [#33019](https://github.com/anthropics/claude-code/issues/33019)
*   [#32947](https://github.com/anthropics/claude-code/issues/32947)
*   [#32997](https://github.com/anthropics/claude-code/issues/32997)

**Pull Requests**:

*   [#32408](https://github.com/anthropics/claude-code/pull/32408)
*   [#33015](https://github.com/anthropics/claude-code/pull/33015)
*   [#33007](https://github.com/anthropics/claude-code/pull/33007)
*   [#33006](https://github.com/anthropics/claude-code/pull/33006)
*   [#32980](https://github.com/anthropics/claude-code/pull/32980)
*   [#32979](https://github.com/anthropics/claude-code/pull/32979)
*   [#32971](https://github.com/anthropics/claude-code/pull/32971)
*   [#32967](https://github.com/anthropics/claude-code/pull/32967)
*   [#32945](https://github.com/anthropics/claude-code/pull/32945)
*   [#32944](https://github.com/anthropics/claude-code/pull/32944)
*   [#32943](https://github.com/anthropics/claude-code/pull/32943)
*   [#32942](https://github.com/anthropics/claude-code/pull/32942)
*   [#32931](https://github.com/anthropics/claude-code/pull/32931)
*   [#32894](https://github.com/anthropics/claude-code/pull/32894)
*   [#32890](https://github.com/anthropics/claude-code/pull/32890)
*   [#32888](https://github.com/anthropics/claude-code/pull/32888)
*   [#32856](https://github.com/anthropics/claude-code/pull/32856)
*   [#32855](https://github.com/anthropics/claude-code/pull/32855)
*   [#32854](https://github.com/anthropics/claude-code/pull/32854)
*   [#32853](https://github.com/anthropics/claude-code/pull/32853)

</details>

<details>
<summary>Gemini CLI — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 技术日报 (2026-03-11)

## 版本动态

今天，`google-gemini/gemini-cli` 项目发布了多个新版本，包括 **v0.34.0-preview.0** 和 **v0.33.0**。

**v0.34.0-preview.0** 版本亮点包括：
*   **feat(cli):** 在会话退出时添加了聊天恢复的脚注。
*   **feat:** 支持 SVG 快照中的粗体和其他样式。
*   **fix(core):** 将 A2A (Agent-to-Agent) 代理的超时时间增加到 30 分钟。

**v0.33.0** 版本更新则侧重于文档的完善和核心功能的 bug 修复：
*   **Docs:** 更新模型文档，移除了预览功能标记。
*   **docs:** 修复了安装文档中的拼写错误。
*   **docs:** 为 Windows PowerShell 添加了环境和脚本的等效命令。
*   **fix(core):** 修复了 Gaxios 错误中 ASCII 缓冲区的解析问题。

## 社区焦点

### 新增 Issue 动态

*   **[#21970](https://github.com/google-gemini/gemini-cli/issues/21970) "VIM mode is incomplete"**: 用户报告称 VIM 模式缺少许多常用的 VIM 快捷键，显示了当前 VIM 模式在功能完整性上的不足，这是用户体验优化的重要关注点。
*   **[#21969](https://github.com/google-gemini/gemini-cli/issues/21969) "Traces exporting doesn't work with CliAuth"**: 用户在使用 `CliAuth` 进行遥测时，遇到了 Trace 导出失败的问题，尽管日志和指标正常导出，但 Trace 有问题。这指向了企业级功能（如遥测、日志、Trace）在认证集成方面的潜在 bug。
*   **[#21901](https://github.com/google-gemini/gemini-cli/issues/21901) "[Subagents] Add mechanism for isolating the tools of subagents from the main agent."**: 该 Issue 提出了为子代理添加工具隔离机制的需求，以提高工具的可管理性。这表明了项目在复杂代理功能（如子代理）的开发中，对安全性和独立性的重视。

### 热门/近期更新 Issue 概览

*   **[#21773](https://github.com/google-gemini/gemini-cli/issues/21773) "Yellow background is horrible"** (近3天更新): 用户反馈默认主题的黄色背景难以忍受，且禁用效果不佳。这是一个关于 UI/UX 的持续性问题。
*   **[#21925](https://github.com/google-gemini/gemini-cli/issues/21925) "Gemini CLI shows the hand icon indicating that Action is required even when it is not required"** (近期更新): 用户报告当 shell 脚本运行时间较长时，即使不需要交互，CLI 也会显示需要操作的图标。这可能与长时任务的 UI 处理有关。
*   **[#13487](https://github.com/google-gemini/gemini-cli/issues/13487) "ReadManyFiles triggered erroneously on pasted input, flooding context window"** (近期更新): 旧 Issue 近期有更新，描述了粘贴输入时 `ReadManyFiles` 错误触发，导致上下文窗口泛滥甚至崩溃的问题。这显示了输入处理和资源管理的挑战。

### Pull Requests 焦点

*   **[#21902](https://github.com/google-gemini/gemini-cli/pull/21902) "feat: add RAG context engine and behavioral eval framework"**: 该 PR 引入了 RAG (Retrieval Augmented Generation) 上下文引擎和行为评估框架，显示了项目在提升模型检索增强能力和评估框架方面的投入。
*   **[#21935](https://github.com/google-gemini/gemini-cli/pull/21935) "feat(core): implement configuration-based tool isolation for subagents"**: 该 PR 实现了基于配置的子代理工具隔离，为解决 Issue [#21901](https://github.com/google-gemini/gemini-cli/issues/21901) 提供了具体的实现方案，是代理功能发展的关键一步。
*   **[#21972](https://github.com/google-gemini/gemini-cli/pull/21972) "feat(cli): support literal character keybindings and extended Kitty protocol keys"**: 该 PR 增强了 CLI 的键盘绑定能力，支持字面字符和 Kitty 协议，这是对终端交互体验的进一步优化。

## 本日最值得关注的动态

1.  **新版本发布及亮点**: `v0.34.0-preview.0` 的发布，特别是增加了聊天恢复脚注和 SVG 快照的样式支持，预示着 CLI 在用户体验和可视化输出上持续改进。
2.  **子代理工具隔离的实现**: PR [#21935](https://github.com/google-gemini/gemini-cli/pull/21935) 针对 Issue [#21901](https://github.com/google-gemini/gemini-cli/issues/21901) 实现了子代理工具的隔离，这是构建更稳定、更安全、更易管理的多代理系统的关键进展。
3.  **RAG 和评估框架的引入**: PR [#21902](https://github.com/google-gemini/gemini-cli/pull/21902) 引入了 RAG 上下文引擎和行为评估框架，标志着项目在提升模型能力、使其能够更好地利用外部知识以及进行更科学的评估方面迈出了重要一步。

---

## 参考链接

**Releases:**
*   [v0.34.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-preview.0)
*   [v0.33.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0)
*   [v0.33.0-preview.15](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.15)
*   [v0.33.0-preview.14](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.14)
*   [v0.33.0-preview.13](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.13)
*   [v0.33.0-preview.12](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.12)
*   [v0.33.0-preview.11](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0-preview.11)

**Issues:**
*   [#21773](https://github.com/google-gemini/gemini-cli/issues/21773)
*   [#21925](https://github.com/google-gemini/gemini-cli/issues/21925)
*   [#21901](https://github.com/google-gemini/gemini-cli/issues/21901)
*   [#21970](https://github.com/google-gemini/gemini-cli/issues/21970)
*   [#21969](https://github.com/google-gemini/gemini-cli/issues/21969)
*   [#21953](https://github.com/google-gemini/gemini-cli/issues/21953)
*   [#21939](https://github.com/google-gemini/gemini-cli/issues/21939)
*   [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)
*   [#21863](https://github.com/google-gemini/gemini-cli/issues/21863)
*   [#21832](https://github.com/google-gemini/gemini-cli/issues/21832)
*   [#21743](https://github.com/google-gemini/gemini-cli/issues/21743)
*   [#21688](https://github.com/google-gemini/gemini-cli/issues/21688)
*   [#13487](https://github.com/google-gemini/gemini-cli/issues/13487)
*   [#18896](https://github.com/google-gemini/gemini-cli/issues/18896)
*   [#21257](https://github.com/google-gemini/gemini-cli/issues/21257)
*   [#20142](https://github.com/google-gemini/gemini-cli/issues/20142)
*   [#20549](https://github.com/google-gemini/gemini-cli/issues/20549)
*   [#20062](https://github.com/google-gemini/gemini-cli/issues/20062)
*   [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
*   [#15618](https://github.com/google-gemini/gemini-cli/issues/15618)
*   [#20302](https://github.com/google-gemini/gemini-cli/issues/20302)
*   [#20181](https://github.com/google-gemini/gemini-cli/issues/20181)
*   [#20134](https://github.com/google-gemini/gemini-cli/issues/20134)
*   [#19514](https://github.com/google-gemini/gemini-cli/issues/19514)
*   [#18953](https://github.com/google-gemini/gemini-cli/issues/18953)
*   [#17809](https://github.com/google-gemini/gemini-cli/issues/17809)
*   [#21461](https://github.com/google-gemini/gemini-cli/issues/21461)
*   [#20886](https://github.com/google-gemini/gemini-cli/issues/20886)
*   [#20304](https://github.com/google-gemini/gemini-cli/issues/20304)
*   [#20217](https://github.com/google-gemini/gemini-cli/issues/20217)

**Pull Requests:**
*   [#21902](https://github.com/google-gemini/gemini-cli/pull/21902)
*   [#21972](https://github.com/google-gemini/gemini-cli/pull/21972)
*   [#21973](https://github.com/google-gemini/gemini-cli/pull/21973)
*   [#21935](https://github.com/google-gemini/gemini-cli/pull/21935)
*   [#21813](https://github.com/google-gemini/gemini-cli/pull/21813)
*   [#21915](https://github.com/google-gemini/gemini-cli/pull/21915)
*   [#21971](https://github.com/google-gemini/gemini-cli/pull/21971)
*   [#21932](https://github.com/google-gemini/gemini-cli/pull/21932)
*   [#21965](https://github.com/google-gemini/gemini-cli/pull/21965)
*   [#21697](https://github.com/google-gemini/gemini-cli/pull/21697)
*   [#21963](https://github.com/google-gemini/gemini-cli/pull/21963)
*   [#21962](https://github.com/google-gemini/gemini-cli/pull/21962)
*   [#21967](https://github.com/google-gemini/gemini-cli/pull/21967)
*   [#21912](https://github.com/google-gemini/gemini-cli/pull/21912)
*   [#21903](https://github.com/google-gemini/gemini-cli/pull/21903)
*   [#21905](https://github.com/google-gemini/gemini-cli/pull/21905)
*   [#21951](https://github.com/google-gemini/gemini-cli/pull/21951)
*   [#21955](https://github.com/google-gemini/gemini-cli/pull/21955)
*   [#21966](https://github.com/google-gemini/gemini-cli/pull/21966)
*   [#21964](https://github.com/google-gemini/gemini-cli/pull/21964)

</details>

<details>
<summary>OpenCode — <a href="https://github.com/sst/opencode">sst/opencode</a></summary>

# OpenCode (sst/opencode) 技术日报

**日期**: 2026-03-11 | **分组**: AI 编码工具

## 核心动态

### 1. TUI 交互与性能改进是近期焦点

本周，OpenCode 在 TUI (Terminal User Interface) 方面的问题和改进尤为突出。新创建的 Issue #16954 指出了 TUI 在电脑休眠后会卡死的问题，而 Issue #16962 则报告了在 Mac-to-Mac SSH 会话中，复制文本到剪贴板的功能失效。另一项 TUI 相关的 Issue #16967 提出，在 Linux `tmux` 环境下，升级到 1.2.24 版本后 TUI 出现了界面错乱和输入问题。

在 PR 方面，PR #16947 和 PR #16939（已被合并为 #16947）带来了 TUI 光标样式、闪烁和颜色的可配置性，这是对用户体验的一项重要增强。PR #16961 则修复了一个导致 `Npm.which()` 在 `.bin` 为空时无限循环的问题，影响了基于 `Bus.publish(File.Event.Edited)` 触发格式化的工具。

### 2. Workspace 创建性能与模型集成问题受关注

Issue #16951 主要反映了桌面应用中，大型代码库的 Workspace 创建速度过慢（12-20 秒），且在此期间无法进行其他操作。对此，PR #16955 提供了相应的修复。

模型集成方面，Issue #16963 指出，在使用 `vllm` 部署的 Qwen3.5-397B-A17B-FP8 模型时，OpenCode 无法显示“思考过程”块，而使用 `openwebui` 则可以。Issue #16950 和 Issue #16946 分别报告了 `GPT 5.4` 模型在 OpenCode Web 中不可用，以及通过 Zen 连接 OpenAI 模型时遇到的问题。

### 3. 数据模型与 API 扩展需求涌现

近期，社区对 OpenCode 的数据模型和 API 扩展提出了明确的需求。PR #16964、#16956、#16953 和 #16966 都由用户 @kitlangton 提交，显著改进了 WorkspaceID, MessageID, SessionID, PartID 等关键标识符的处理，通过 Drizzle 和 Zod schema 进行品牌化（branding），提升了数据类型的健壮性和一致性。

此外，Issue #16940 和 Issue #16942 都有 @mayleebe 提出，请求提供 Open API 接口以支持第三方消息应用集成。Issue #16938 则建议添加 Blackbox AI 作为内置推理提供商。

---

## Issues & Pull Requests 详情

### 新建 Issues (共 18 条)

*   **#16963 "Qwen/Qwen3.5-397B-A17B-FP8: opencode never show the thinking process block."** - 用户在使用 Qwen3.5 模型时，OpenCode 未能显示 AI 的思考过程，这与使用其他 UI 工具的体验不符，可能影响对模型推理过程的理解。
    *   URL: [https://github.com/anomalyco/opencode/issues/16963](https://github.com/anomalyco/opencode/issues/16963)
*   **#16960 "[FEATURE]: Compaction loses AGENTS.md/CLAUDE.md instruction context"** - 当会话被压缩（compacted）时，由于 LLM 调用收到的系统提示为空，导致重要的指令上下文丢失，Agent 的行为能力受到影响。
    *   URL: [https://github.com/anomalyco/opencode/issues/16960](https://github.com/anomalyco/opencode/issues/16960)
*   **#16954 "Bug - TUI - Application Gets Stuck When Computer Sleep Occurs"** - TUI 应用在电脑进入休眠状态后会被卡住，唤醒后无法继续工作，需要强制取消。
    *   URL: [https://github.com/anomalyco/opencode/issues/16954](https://github.com/anomalyco/opencode/issues/16954)
*   **#16940 "[FEATURE]:Request for Open API Interface to Support Third-Party Messaging App Integration"** - 用户希望 OpenCode 提供 Open API 接口，以便能将其集成到第三方消息应用中。
    *   URL: [https://github.com/anomalyco/opencode/issues/16940](https://github.com/anomalyco/opencode/issues/16940)
*   **#16963 "Qwen/Qwen3.5-397B-A17B-FP8: opencode never show the thinking process block."** - 如上所述，模型思考过程显示问题。
    *   URL: [https://github.com/anomalyco/opencode/issues/16963](https://github.com/anomalyco/opencode/issues/16963)
*   **#16967 "TUI broken inside Linux tmux"** - 在 Linux `tmux` 环境下，升级到 1.2.24 版本后 TUI 出现输入和 UI 错乱问题。
    *   URL: [https://github.com/anomalyco/opencode/issues/16967](https://github.com/anomalyco/opencode/issues/16967)
*   **#16962 "Clipboard copy not working over SSH (Mac-to-Mac)"** - 在 Mac-to-Mac 的 SSH 会话中，OpenCode 的剪贴板复制功能失效。
    *   URL: [https://github.com/anomalyco/opencode/issues/16962](https://github.com/anomalyco/opencode/issues/16962)
*   **#16949 "Bug: Tool.define() wraps execute on every init() call, causing RangeError after ~1000 agentic steps"** - `Tool.define()` 在 `init()` 调用时会累积包装层，导致大量 agentic 步骤后出现 `RangeError`。
    *   URL: [https://github.com/anomalyco/opencode/issues/16949](https://github.com/anomalyco/opencode/issues/16949)
*   **#16951 "[BUG] slow workspace creation"** - 桌面应用中，大型代码库的 Workspace 创建速度非常慢，影响用户体验。
    *   URL: [https://github.com/anomalyco/opencode/issues/16951](https://github.com/anomalyco/opencode/issues/16951)
*   **#16950 "GPT 5.4 does not work with opencode web"** - OpenCode Web 版本无法找到 GPT 5.4 模型。
    *   URL: [https://github.com/anomalyco/opencode/issues/16950](https://github.com/anomalyco/opencode/issues/16950)
*   **#16946 "OpenAI models are not working via Zen"** - 通过 OpenCode Zen 连接 OpenAI 模型时，模型无法正常工作。
    *   URL: [https://github.com/anomalyco/opencode/issues/16946](https://github.com/anomalyco/opencode/issues/16946)
*   **#16944 "Bug - TUI - Handles system sleep on linux"** - TUI 在 Linux 上处理系统休眠时存在问题。
    *   URL: [https://github.com/anomalyco/opencode/issues/16944](https://github.com/anomalyco/opencode/issues/16944)
*   **#16937 "Desktop App Consuming Separate Premium Requests Per Subagent (GitHub Copilot Provider)"** - 桌面应用在使用 GitHub Copilot 提供商时，每个子 Agent 都消耗独立的付费请求，与 CLI 版本行为不一致。
    *   URL: [https://github.com/anomalyco/opencode/issues/16937](https://github.com/anomalyco/opencode/issues/16937)
*   **#16942 "[FEATURE]:Request for Open API Interface"** - 另一个关于 Open API 接口的请求，旨在连接 OpenCode 和其他应用。
    *   URL: [https://github.com/anomalyco/opencode/issues/16942](https://github.com/anomalyco/opencode/issues/16942)
*   **#16936 "[FEATURE]: @mention files and agents in question mode's 'Type your own answer' input"** - 用户希望在提问模式的输入框中支持 @提及文件和 Agent。
    *   URL: [https://github.com/anomalyco/opencode/issues/16936](https://github.com/anomalyco/opencode/issues/16936)
*   **#16938 "[FEATURE]: add Blackbox AI as inference provider"** - 建议将 Blackbox AI 添加为内置的推理提供商。
    *   URL: [https://github.com/anomalyco/opencode/issues/16938](https://github.com/anomalyco/opencode/issues/16938)
*   **#16878 "Old sessions cannot be loaded"** - 旧的 Session 无法加载，列表为空。
    *   URL: [https://github.com/anomalyco/opencode/issues/16878](https://github.com/anomalyco/opencode/issues/16878)

### 近期更新 Issues (共 4 条)

*   **#16813 "Linux desktop build bundles wrong architecture opencode-cli (aarch64 in x86_64 package)"** - Linux 桌面版构建错误地打包了 CLI 的架构，在 x86_64 包中包含了 aarch64 架构。
    *   URL: [https://github.com/anomalyco/opencode/issues/16813](https://github.com/anomalyco/opencode/issues/16813)
*   **#16781 "[FEATURE]: Toggle Word Wrap in File Viewer (Desktop)"** - 用户请求在文件查看器中提供切换“换行”的选项，以方便查看长行文本。
    *   URL: [https://github.com/anomalyco/opencode/issues/16781](https://github.com/anomalyco/opencode/issues/16781)
*   **#16470 "Code output unreadable in light mode"** - 在浅色模式下，代码输出的格式化文本难以阅读，疑似颜色主题 bug。
    *   URL: [https://github.com/anomalyco/opencode/issues/16470](https://github.com/anomalyco/opencode/issues/16470)
*   **#16351 "TUI broken in tmux after 1.2.17 (found root cause)"** - TUI 在 `tmux` 中从 1.2.17 版本开始出现间歇性故障，输入和快捷键失效。
    *   URL: [https://github.com/anomalyco/opencode/issues/16351](https://github.com/anomalyco/opencode/issues/16351)

### 新建 Pull Requests (共 14 条)

*   **#16955 "fix(desktop): fix extremely slow workspace creation"** - 修复了桌面应用中 Workspace 创建速度过慢的问题。
    *   URL: [https://github.com/anomalyco/opencode/pull/16955](https://github.com/anomalyco/opencode/pull/16955)
*   **#16947 "feat(tui): support configurable cursor style, blink, and color"** - 为 TUI 文本区域增加了可配置的光标样式、闪烁和颜色。
    *   URL: [https://github.com/anomalyco/opencode/pull/16947](https://github.com/anomalyco/opencode/pull/16947)
*   **#16959 "feat: preserve AGENTS.md/CLAUDE.md instructions across compaction"** - 确保会话压缩过程中 AGENTS.md/CLAUDE.md 的指令上下文不丢失。
    *   URL: [https://github.com/anomalyco/opencode/pull/16959](https://github.com/anomalyco/opencode/pull/16959)
*   **#16964 "feat(workspace): brand WorkspaceID through Drizzle and Zod schemas"** - 引入了品牌化的 WorkspaceID 类型，并贯穿 Drizzle 和 Zod schema。
    *   URL: [https://github.com/anomalyco/opencode/pull/16964](https://github.com/anomalyco/opencode/pull/16964)
*   **#16956 "feat(session): brand MessageID through Drizzle and Zod schemas"** - 引入了品牌化的 MessageID 类型，并贯穿 Drizzle 和 Zod schema。
    *   URL: [https://github.com/anomalyco/opencode/pull/16956](https://github.com/anomalyco/opencode/pull/16956)
*   **#16965 "refactor(desktop): rework default server initialization and connection handling"** - 重构了桌面应用的默认服务器初始化和连接处理逻辑，失败时提供更友好的界面。
    *   URL: [https://github.com/anomalyco/opencode/pull/16965](https://github.com/anomalyco/opencode/pull/16965)
*   **#16953 "Brand SessionID through Drizzle and Zod schemas"** - 将 SessionID 进行了品牌化处理，并贯穿 Drizzle 和 Zod schema。
    *   URL: [https://github.com/anomalyco/opencode/pull/16953](https://github.com/anomalyco/opencode/pull/16953)
*   **#16966 "feat(session): brand PartID through Drizzle and Zod schemas"** - 引入了品牌化的 PartID 类型，并贯穿 Drizzle 和 Zod schema。
    *   URL: [https://github.com/anomalyco/opencode/pull/16966](https://github.com/anomalyco/opencode/pull/16966)
*   **#16961 "fix: guard Npm.which() against infinite loop when .bin is empty"** - 修复了 `Npm.which()` 在 `.bin` 为空时可能发生的无限循环问题。
    *   URL: [https://github.com/anomalyco/opencode/pull/16961](https://github.com/anomalyco/opencode/pull/16961)
*   **#16952 "fix: prevent Tool.define() wrapper accumulation on object-defined tools"** - 修复了 `Tool.define()` 在对象定义的工具上，`init()` 调用时包装层累积的 bug。
    *   URL: [https://github.com/anomalyco/opencode/pull/16952](https://github.com/anomalyco/opencode/pull/16952)
*   **#16922 "fix: add GOOGLE_VERTEX_LOCATION env var support for Vertex AI"** - 为 Vertex AI 添加了 `GOOGLE_VERTEX_LOCATION` 环境变量支持。
    *   URL: [https://github.com/anomalyco/opencode/pull/16922](https://github.com/anomalyco/opencode/pull/16922)
*   **#16849 "fix: ignore macOS/Windows system directories in global home scan"** - 在全局扫描时忽略 macOS/Windows 的系统目录，修复了 Issue #14982。
    *   URL: [https://github.com/anomalyco/opencode/pull/16849](https://github.com/anomalyco/opencode/pull/16849)
*   **#16850 "fix(opencode): set 1h prompt cache TTL for OpenRouter"** - 为 OpenRouter 设置了 1 小时的 prompt cache TTL。
    *   URL: [https://github.com/anomalyco/opencode/pull/16850](https://github.com/anomalyco/opencode/pull/16850)
*   **#16948 "Brand ProjectID through Drizzle and Zod schemas"** - 将 ProjectID 进行了品牌化处理，并贯穿 Drizzle 和 Zod schema。
    *   URL: [https://github.com/anomalyco/opencode/pull/16948](https://github.com/anomalyco/opencode/pull/16948)

### 近期更新 Pull Requests (共 2 条)

*   **#16843 "fix(electron): theme Windows titlebar overlay"** - 修复了 Windows 标题栏叠加层的主题问题。
    *   URL: [https://github.com/anomalyco/opencode/pull/1684

</details>

<details>
<summary>OpenAI Codex — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex (openai/codex) 技术日报

**日期:** 2026-03-11 | **分组:** AI 编码工具

## 核心动态摘要

今日，OpenAI Codex 版本迭代持续活跃，发布了多个 `0.115.0-alpha` 系列的预发布版本，并正式推出了 `0.114.0` 版本，此版本引入了实验性的代码模式和钩子引擎，显著增强了隔离编码工作流和事件驱动能力。同时，`0.113.0` 版本进一步完善了插件生态和应用服务器的命令执行能力。

社区方面，**连接问题（Reconnecting Issue）** 依然是用户关注的焦点，#[14209](https://github.com/openai/codex/issues/14209) 和 #[14260](https://github.com/openai/codex/issues/14260) 等多项 Issue 反映了此问题，显示出对稳定性的持续需求。

此外，关于模型使用限制（如 **`gpt-5.3-codex` 和 `gpt-5.4` 的限制**）的讨论也引发了用户的不满与困惑，#[14238](https://github.com/openai/codex/issues/14238) 集中反映了该问题。

代码模式（Code Mode）的改进也是一个重要趋势，相关 PR 如 #[14225](https://github.com/openai/codex/pull/14225)（使用 V8 引擎）和 #[14295](https://github.com/openai/codex/pull/14295)（持久化 Runner 会话）表明该功能正朝着更稳定、高效的方向发展。

### 最值得关注的动态：

1.  **`0.114.0` 版本发布：引入实验性代码模式与钩子引擎**
    OpenAI Codex 发布的 `0.114.0` 版本带来了重要新特性，包括实验性的代码模式，为更隔离的编码工作流提供了可能；以及一个实验性的钩子引擎，支持 `SessionStart` 和 `Stop` 事件。此外，WebSocket 应用服务器现已支持 `GET /readyz` 和 `GET /healthz` 接口，便于健康检查，并提供了禁用内置系统技能的配置选项。
    *   [rust-v0.114.0](https://github.com/openai/codex/releases/tag/rust-v0.114.0)

2.  **用户对连接不稳定和模型限制表达担忧**
    多个 Issue 反映了持续存在的 **"Reconnecting..."** 问题，例如 #[14209](https://github.com/openai/codex/issues/14209) 和 #[14260](https://github.com/openai/codex/issues/14260)。同时，#[14238](https://github.com/openai/codex/issues/14238) 集中了用户对 `gpt-5.3-codex` 和 `gpt-5.4` 模型限制的疑问和不满，认为缺乏沟通且影响付费用户。

3.  **代码模式（Code Mode）持续优化**
    PR #[14225](https://github.com/openai/codex/pull/14225) 提议使用 V8 引擎重构代码模式，旨在提升性能和兼容性。PR #[14295](https://github.com/openai/codex/pull/14295) 则进一步增强了代码模式的鲁棒性，使其能够持久化 Runner 会话。

## 版本发布 (Releases)

*   **[rust-v0.115.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.3)** - 2026-03-11T03:39:26Z
*   **[rust-v0.115.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.2)** - 2026-03-11T02:23:32Z
*   **[rust-v0.115.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.1)** - 2026-03-11T01:11:34Z
*   **[rust-v0.114.0](https://github.com/openai/codex/releases/tag/rust-v0.114.0)** - 2026-03-11T00:28:42Z
    *   **亮点:**
        *   引入实验性代码模式，支持更隔离的编码工作流。
        *   引入实验性钩子引擎 (`SessionStart`, `Stop`)。
        *   WebSocket 应用服务器支持 `GET /readyz` 和 `GET /healthz`。
        *   新增配置项，可完全禁用内置系统技能。
        *   Handoffs 携带实时转录上下文，增强工作连续性。
*   **[rust-v0.113.0](https://github.com/openai/codex/releases/tag/rust-v0.113.0)** - 2026-03-10T05:24:30Z
    *   **亮点:**
        *   内置 `request_permissions` 工具，支持运行时权限请求，并展示 TUI 渲染。
        *   扩展插件工作流，支持市场发现、更丰富的元数据、安装时认证检查及 `plugin/uninstall` 接口。
        *   应用服务器命令执行支持流式 stdin/stdout/stderr 及 TTY/PTY。
*   **[rust-v0.114.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.4)** - 2026-03-10T22:57:20Z
*   **[rust-v0.114.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.3)** - 2026-03-10T19:15:36Z
*   **[rust-v0.114.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.2)** - 2026-03-10T18:10:01Z
*   **[rust-v0.114.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.1)** - 2026-03-10T06:54:03Z

## 社区焦点 (Issues & Pull Requests)

### 热门 Issues (近期关注)

*   **连接问题持续存在：** 多个用户报告 **"Reconnecting..."** 问题的困扰，#[14209](https://github.com/openai/codex/issues/14209) 和 #[14260](https://github.com/openai/codex/issues/14260) 尤其突出。#[14297](https://github.com/openai/codex/issues/14297) 亦有提及新版本中此问题发生的频率。
*   **模型限制引发争议：** 用户对 `gpt-5.3-codex` 和 `gpt-5.4` 的限制表示不满和不解，#[14238](https://github.com/openai/codex/issues/14238) 汇总了用户的质疑，特别是对于付费用户影响及缺乏沟通的批评。
*   **应用启动/运行错误：** Windows 用户遇到了应用启动失败的问题 (#[14153](https://github.com/openai/codex/issues/14153)) 及运行时错误 (#[14154](https://github.com/openai/codex/issues/14154))。#[14278](https://github.com/openai/codex/issues/14278) 提及 C++ 代码中的指针丢失导致的崩溃。
*   **VS Code 扩展问题：** 扩展在崩溃后可能导致会话卡死 (#[14127](https://github.com/openai/codex/issues/14127))，且出现模型不支持的错误提示 (#[14237](https://github.com/openai/codex/issues/14237))。

### 热门 Pull Requests (近期活动)

*   **代码模式（Code Mode）的改进：**
    *   [#14225](https://github.com/openai/codex/pull/14225): 使用 V8 引擎重构代码模式。
    *   [#14295](https://github.com/openai/codex/pull/14295): 实现代码模式 Runner 会话的持久化。
    *   [#14284](https://github.com/openai/codex/pull/14284): 为代码模式的工具添加带类型的 Snippets。
    *   [#14254](https://github.com/openai/codex/pull/14254): 将代码模式工具重命名为 `exec`。
*   **TUI 和 CLI 功能增强：**
    *   [#14170](https://github.com/openai/codex/pull/14170): 支持在 TUI 中排队 `/` 命令。
    *   [#14286](https://github.com/openai/codex/issues/14286) (Issue 提及): 用户请求在代理执行任务时允许排队 `/review` 请求。
*   **工具和 SDK 更新：**
    *   [#14274](https://github.com/openai/codex/pull/14274): `search_tool` 迁移至 Responses API 的自定义工具。
    *   [#14287](https://github.com/openai/codex/pull/14287): 在应用中添加 `tool_suggest` 工具。
    *   [#14262](https://github.com/openai/codex/pull/14262): SDK v2 支持 `builtinTools` 和 `manualToolExecution`。

---
## 参考链接

*   **Releases:**
    *   [rust-v0.115.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.3)
    *   [rust-v0.115.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.2)
    *   [rust-v0.115.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.1)
    *   [rust-v0.114.0](https://github.com/openai/codex/releases/tag/rust-v0.114.0)
    *   [rust-v0.113.0](https://github.com/openai/codex/releases/tag/rust-v0.113.0)
    *   [rust-v0.114.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.4)
    *   [rust-v0.114.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.3)
    *   [rust-v0.114.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.2)
    *   [rust-v0.114.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.1)
*   **Issues:**
    *   [#14209](https://github.com/openai/codex/issues/14209)
    *   [#14094](https://github.com/openai/codex/issues/14094)
    *   [#14120](https://github.com/openai/codex/issues/14120)
    *   [#14238](https://github.com/openai/codex/issues/14238)
    *   [#14200](https://github.com/openai/codex/issues/14200)
    *   [#14153](https://github.com/openai/codex/issues/14153)
    *   [#14213](https://github.com/openai/codex/issues/14213)
    *   [#14260](https://github.com/openai/codex/issues/14260)
    *   [#14237](https://github.com/openai/codex/issues/14237)
    *   [#14127](https://github.com/openai/codex/issues/14127)
    *   [#14131](https://github.com/openai/codex/issues/14131)
    *   [#14154](https://github.com/openai/codex/issues/14154)
    *   [#14106](https://github.com/openai/codex/issues/14106)
    *   [#14286](https://github.com/openai/codex/issues/14286)
    *   [#14278](https://github.com/openai/codex/issues/14278)
    *   [#14255](https://github.com/openai/codex/issues/14255)
    *   [#14211](https://github.com/openai/codex/issues/14211)
    *   [#14297](https://github.com/openai/codex/issues/14297)
    *   [#14296](https://github.com/openai/codex/issues/14296)
    *   [#14230](https://github.com/openai/codex/issues/14230)
    *   [#14291](https://github.com/openai/codex/issues/14291)
    *   [#14292](https://github.com/openai/codex/issues/14292)
    *   [#14288](https://github.com/openai/codex/issues/14288)
    *   [#14281](https://github.com/openai/codex/issues/14281)
    *   [#14277](https://github.com/openai/codex/issues/14277)
    *   [#14276](https://github.com/openai/codex/issues/14276)
    *   [#14241](https://github.com/openai/codex/issues/14241)
    *   [#14289](https://github.com/openai/codex/issues/14289)
    *   [#14113](https://github.com/openai/codex/issues/14113)
    *   [#2109](https://github.com/openai/codex/issues/2109)
*   **Pull Requests:**
    *   [#14285](https://github.com/openai/codex/pull/14285)
    *   [#14283](https://github.com/openai/codex/pull/14283)
    *   [#14274](https://github.com/openai/codex/pull/14274)
    *   [#14287](https://github.com/openai/codex/pull/14287)
    *   [#14294](https://github.com/openai/codex/pull/14294)
    *   [#14293](https://github.com/openai/codex/pull/14293)
    *   [#1

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:05:50.091Z