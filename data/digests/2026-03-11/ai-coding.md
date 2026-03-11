# 🛠️ AI 编码工具 日报 — 2026-03-11

## 横向对比

好的，以下是基于您提供的信息，对 AI 编码工具领域进行的横向对比分析：

# AI 编码工具 技术发展日报

**日期:** 2026-03-11

## 1. 生态全景

今日 AI 编码工具领域呈现出项目快速迭代、新功能涌现以及用户反馈密集的核心特征。`Gemini CLI` 和 `OpenAI Codex` 均发布了多项更新，其中 `Gemini CLI` 侧重于用户体验的精细优化和子代理能力的增强；`OpenAI Codex` 则通过发布新稳定版引入了代码模式和 Hook 引擎，强调了隔离性与流程自动化。`OpenCode` 发布了新版本，但社区焦点更集中在模型兼容性和会话管理 Bug 的解决。`Claude Code` 则面临着平台上（尤其是 Windows）大量 Bug 报告以及严重的内存泄漏问题，但同时也在积极通过引入新插件来拓展生态能力。整体而言，AI 编码工具正朝着更强大、更可控、更易用的方向发展，但平台的稳定性和模型的适配性仍然是开发者面临的挑战。

## 2. 活跃度对比

| 项目名称               | 最新版本/重要更新                                                                                                | 今日新增/活跃 Issues 数量 | 今日新增/活跃 Pull Requests 数量 | 社区热点                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------- | :------------------------ | :------------------------------- | :-------------------------------------------------------------------------------- |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | v0.34.0-preview.0, v0.33.0                                                                                     | ~5                          | ~3                               | 用户体验增强 (续传, SVG样式), 子代理工具隔离, Vim模式完善, UI细节打磨               |
| [OpenAI Codex](https://github.com/openai/codex) | `rust-v0.114.0` (代码模式, Hook 引擎), 多项 Alpha 版本                                                                   | ~5+                         | ~4+                              | 模型可用性与CLI挂起问题, App重连与卡顿问题, 代码工作流隔离与自动化, trace 追踪优化 |
| [OpenCode](https://github.com/sst/opencode)     | 1.2.24 版本发布                                                                                                        | ~10+                        | ~5+                              | AI 模型兼容性 (ChatGPT-5.3/5.4, Qwen, GLM-5), 会话加载 Bug, TUI 兼容性问题        |
| [Claude Code](https://github.com/anthropics/claude-code) | 无明确新版本发布                                                                                                     | ~20+                        | ~10+                             | Windows/macOS 平台 Bug 报告 (BSOD, 崩溃), 内存泄漏, 新插件开发 (测试生成, 架构解释) |

*注：Issues 和 Pull Requests 数量为手动统计，侧重于今日新建或有显著活动的内容。*

## 3. 共同趋势

*   **对用户体验和易用性的持续打磨：** `Gemini CLI` 在聊天续传、SVG 样式、Vim 模式完善等方面体现了对细节的关注。`OpenAI Codex` 的 App-server 健康检查和实时上下文传递也是为了提升用户体验。
*   **插件生态与功能扩展：** `Claude Code` 通过大量的插件 PR (如测试生成、架构解释) 展示了其向更广泛开发场景拓展的趋势。`OpenAI Codex` 的 Hook 引擎和代码模式也体现了可扩展性的方向。
*   **模型兼容性与集成：** `OpenCode` 的大量 Bug 报告与各种 AI 模型（ChatGPT, Qwen, GLM-5 等）的适配问题直接相关，这是一个跨项目都需要面对的挑战。`Claude Code` 和 `OpenAI Codex` 的一些问题也与特定模型的调用或服务集成有关。
*   **平台稳定性与 Bug 修复：** `Claude Code` 面临大量的跨平台 Bug（特别是 Windows 平台），`OpenAI Codex` 的 CLI 挂起和 App 重连问题，以及 `OpenCode` 的 UI 兼容性问题，都表明了平台稳定性和 Bug 修复是当前项目的重要工作。

## 4. 值得关注

1.  **`Claude Code` 面临严重的平台稳定性和内存泄漏挑战：** Windows 上的 BSOD、崩溃问题以及高达 18GB/小时的内存泄漏（#32752），预示着该项目在底层技术稳定性和性能优化方面还有大量工作要做。尽管有新插件的积极进展（如 #33070），但核心的稳定性问题若不解决，将极大限制其应用。
2.  **`OpenAI Codex` 发布 `rust-v0.114.0`，引入代码模式和 Hook 引擎：** 这标志着 `OpenAI Codex` 在构建更安全、更可控的代码执行环境方面迈出了重要一步。代码模式的隔离性以及 Hook 引擎的灵活性，为自动化、集成和更复杂的开发工作流提供了基础，是值得关注的技术方向。
3.  **AI 模型适配性成为多项目焦点：** `OpenCode` 的模型兼容性 Bug（如 #16851, #16963）集中体现了当前 AI 编码工具在整合不同模型时面临的挑战。即使是 `Gemini CLI` 和 `OpenAI Codex`，其最新的模型也需要不断优化以适应其工具的调用和行为。这提示了 AI 模型服务接口和客户端适配的复杂性。

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
<summary>Gemini CLI — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI (google-gemini/gemini-cli) 技术日报 (2026-03-11)

## 版本动态

今日，`google-gemini/gemini-cli` 项目发布了多个版本更新，包括 **v0.34.0-preview.0** 和 **v0.33.0**。

**v0.34.0-preview.0** 亮点包括：
*   **聊天续传功能增强**：在会话退出时新增了聊天续传的页脚，便于用户追踪和恢复之前的对话。
*   **SVG 快照样式支持**：现在支持在 SVG 快照中渲染粗体和其他样式。
*   **A2A 代理超时增加**：将 A2A 代理的超时时间延长至 30 分钟，以应对更复杂的任务。

**v0.33.0**（稳定版）更新内容主要集中在文档改进和错误修复：
*   **模型文档更新**：移除了预览特性相关的说明。
*   **安装文档修复**：修正了安装文档中的拼写错误。
*   **Windows PowerShell 支持**：添加了 Windows PowerShell 环境和脚本的示例。
*   **Gaxios 错误处理**：修复了 Gaxios 错误中对原始 ASCII 缓冲区的解析问题。

## 社区焦点

### 热门 Issues & Pull Requests

**趋势分析：**
今日社区关注点高度集中在用户体验的打磨、核心功能的改进以及子代理（Subagents）能力的增强。特别是关于 UI 视觉、Vim 模式的完整性、以及子代理的工具隔离和行为改进，成为了讨论热点。

**重点 Issues：**
*   **【新 Issue】feat(cli) : Add Thinking Level selection to the interactive `/model` UI** [#21974]
    *   这是一个新建的特性需求，旨在为 Gemini-3 模型添加“思考层级”选择功能，以期节省 token 并提高处理简单任务的效率。这反映了社区对更精细化控制模型行为和成本的关注。
*   **【新 Issue】feat(cli) : Support bold and other styles in svg snapshots** (v0.34.0-preview.0 发布内容)
    *   这个功能点虽然记录在 Release Notes 中，但其对 UI 渲染的支持（SVG 快照样式）是用户体验的重要一环，尤其对于需要生成可视图表或报告的场景。
*   **【持续讨论】Yellow background is horrible** [#21773]
    *   此 Issue 虽非新建，但近期有更新，且讨论了 UI 色彩的主观感受问题。尽管标题略带负面，但背后反映了用户对界面美观度和可用性的敏感，以及对默认主题不适的反馈。
*   **【新 Issue】Gemini CLI shows the hand icon indicating that Action is required even when it is not required** [#21925]
    *   该 Issue 指出，即使不需要用户交互，CLI 也可能错误地显示“需要操作”的提示。这影响了用户对 CLI 状态的准确判断，是用户体验上的一个痒点。
*   **【新 Issue】[Subagents] Add mechanism for isolating the tools of subagents from the main agent.** [#21901]
    *   此 Issue 提出为子代理添加工具隔离机制，以提高工具管理的可维护性。这表明随着子代理功能越来越强大，对其内部机制进行精细化管理的需求也在增加。

**重点 Pull Requests：**
*   **feat(cli): support literal character keybindings and extended Kitty protocol keys** [#21972]
    *   此 PR 旨在增强 CLI 的键盘绑定灵活性，支持字面字符和 Kitty 协议扩展，将极大地提升输入效率和用户自定义配置的能力，是用户体验上的重要改进。
*   **feat(core): implement configuration-based tool isolation for subagents** [#21935]
    *   此 PR 实现了子代理基于配置的工具隔离，呼应了 Issue [#21901]，是核心功能上的重要进展，有助于提升子代理系统的健壮性和安全性。
*   **feat(ui): add missing vim mode motions (X, ~, r, f/F/t/T, df/dt and friends)** [#21932]
    *   这个 PR 致力于补全 Vim 模式下常用的编辑指令，进一步提升 Vim 用户在 `gemini-cli` 中的操作流畅度和熟悉度。`Vim mode is incomplete` [#21970] 这个问题也侧面印证了社区对 Vim 模式完善的期待。

## 本日关注

1.  **多版本并行发布，v0.34.0-preview.0 带来用户体验亮点**：新预览版本的发布，特别是聊天续传和 SVG 快照样式的支持，预示着 `gemini-cli` 在功能性和易用性上持续迭代，为用户提供更连贯的交互体验。
2.  **子代理（Subagents）能力与管理是核心开发方向**：多项新建 Issues 和 Pull Requests 均围绕子代理的工具隔离、行为改进和用户体验展开（如 [#21901], [#21935], [#20886]），显示出项目团队正大力投入在增强和优化子代理这一关键模块上。
3.  **用户界面与交互的精细打磨与功能拓展**：从 Vim 模式的完善 [#21932], [#21970] 到键盘绑定支持的增强 [#21972]，再到对 UI 色彩反馈的关注 [#21773]，项目在细节处持续优化，旨在为不同用户群体提供更高效、更个性化的使用体验。

---

## 参考链接

### Releases
*   [v0.34.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-preview.0)
*   [v0.33.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.33.0)

### Issues
*   [#21773](https://github.com/google-gemini/gemini-cli/issues/21773)
*   [#21974](https://github.com/google-gemini/gemini-cli/issues/21974)
*   [#21925](https://github.com/google-gemini/gemini-cli/issues/21925)
*   [#21901](https://github.com/google-gemini/gemini-cli/issues/21901)
*   [#21970](https://github.com/google-gemini/gemini-cli/issues/21970)
*   [#20886](https://github.com/google-gemini/gemini-cli/issues/20886)

### Pull Requests
*   [#21972](https://github.com/google-gemini/gemini-cli/pull/21972)
*   [#21935](https://github.com/google-gemini/gemini-cli/pull/21935)
*   [#21932](https://github.com/google-gemini/gemini-cli/pull/21932)

</details>

<details>
<summary>OpenAI Codex — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex (openai/codex) 技术日报 - 2026-03-11

## 摘要

今日，OpenAI Codex 项目迎来多个 Alpha 版本发布，其中 `rust-v0.115.0-alpha.3`、`rust-v0.115.0-alpha.2` 和 `rust-v0.115.0-alpha.1` 集中发布，表明项目正在快速迭代。同时，`rust-v0.114.0` 稳定版发布，引入了实验性的代码模式和 Hook 引擎，提升了代码工作流的隔离性和流程控制能力。社区活跃度较高，围绕模型可用性、应用稳定性及 CLI 功能等问题展开了热烈讨论。

## 最新版本发布

### `rust-v0.114.0` (2026-03-11)
本次稳定版本发布包含多项重要更新：

*   **实验性代码模式**：引入了更隔离的代码工作流，有助于在安全环境中执行和测试代码。
*   **实验性 Hook 引擎**：新增 `SessionStart` 和 `Stop` 等 Hook 事件，为流程自动化和集成提供了更多可能性。
*   **WebSocket 健康检查**：`GET /readyz` 和 `GET /healthz` API 现已集成至 WebSocket app-server，方便了部署后的健康状态监控。
*   **禁用内置技能**：新增配置项，允许完全禁用系统内置技能，增加了灵活性。
*   **实时上下文传递**：Handoffs 现在携带实时 Transcript 上下文，显著改善了工作切换时的连续性。

### 其他 Alpha 版本发布：
*   [rust-v0.115.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.3)
*   [rust-v0.115.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.2)
*   [rust-v0.115.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.1)
*   [rust-v0.114.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.4)
*   [rust-v0.114.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.3)
*   [rust-v0.114.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.2)
*   [rust-v0.114.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.1)

## 社区焦点与热点动态

### 热门 Issues (近期更新)

1.  **#[14048] CLI 挂起无响应问题** (2026-03-09 建立, 2026-03-10 更新): 此 Issue 持续受到大量关注，报告称 Codex CLI 在多种模型下均出现无响应的 bug，`gpt-5.4` 和 `gpt-5.3` 模型在 Windows 上的 WSL 环境中表现尤为明显。
2.  **#[14181] 特定模型不支持与 ChatGPT 账户关联** (2026-03-10 建立, 2026-03-10 更新): 许多用户报告使用 `gpt-5.4` 和 `gpt-5.3-codex` 模型时，遭遇“不支持与 ChatGPT 账户使用”的错误。此问题引起了广泛讨论，用户对模型可用性和沟通机制表示关切。
3.  **#[14209] 重连问题加剧** (2026-03-10 建立, 2026-03-11 更新): 用户反映 Codex App 的重连问题日益严重，尤其是在欧洲地区，影响了正常使用。
4.  **#[14094] Prompt 永久卡在“思考中”** (2026-03-09 建立, 2026-03-11 更新): 此问题描述了 Codex App 在卡顿后，即使重启也无法恢复，Prompt 长期停留在“Thinking”状态。

### 热门 Pull Requests (新建/最新)

1.  **#[14299] `update(config): web_search=bool, web_search_config`** (2026-03-11 建立): PR 旨在将 `tools.web_search` 改回布尔类型，并将嵌套的搜索配置移至 `tools.web_search_config`，优化并标准化了 Web 搜索的配置管理。
2.  **#[14301] `feat(app-server): keep request traces attached to async work`** (2026-03-11 建立): 此 PR 致力于解决请求追踪在异步任务处理中丢失的问题，确保整个工作生命周期中有完整的追踪 lineage。
3.  **#[14300] `fix(otel): make HTTP trace export survive app-server runtimes`** (2026-03-11 建立): 修复了在特定运行时环境下 OTLP HTTP trace 导出不可靠的问题，提升了遥测数据的稳定性。
4.  **#[14245] `app-server: add v2 filesystem APIs and watch support`** (2026-03-10 建立): 引入了 V2 app-server 的文件系统 API 和文件监听支持，允许客户端进行文件读写、目录检查以及订阅路径变更。

## 本日最值得关注动态

1.  **`rust-v0.114.0` 稳定版发布，引入代码模式与 Hook 引擎**：本次发布显著增强了 Codex 的可扩展性和工作流自动化能力，实验性的代码模式为开发者提供了更安全、更隔离的代码执行环境，而 Hook 引擎则为自定义流程集成奠定了基础。
2.  **模型可用性问题成为社区焦点**：#[14181] 和 #[14048] 等 Issue 反映了用户对于 `gpt-5.4` 及 `gpt-5.3-codex` 模型可用性和 CLI 稳定性的担忧。社区对模型何时能正常使用以及为何付费用户也受影响表达了困惑和不满。
3.  **App 连接与稳定性问题持续存在**：#[14209] 和 #[14094] 等 Issue 指出了 Codex App 在重连和响应停滞方面的持续问题，这些 bug 影响了用户体验，并且有部分是在旧版本中已存在或恶化的。

---

## 参考链接

*   **Releases**:
    *   [rust-v0.115.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.3)
    *   [rust-v0.115.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.2)
    *   [rust-v0.115.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.1)
    *   [rust-v0.114.0](https://github.com/openai/codex/releases/tag/rust-v0.114.0)
    *   [rust-v0.114.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.4)
    *   [rust-v0.114.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.3)
    *   [rust-v0.114.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.2)
    *   [rust-v0.114.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.1)
*   **Issues**:
    *   [#14048](https://github.com/openai/codex/issues/14048)
    *   [#14181](https://github.com/openai/codex/issues/14181)
    *   [#14209](https://github.com/openai/codex/issues/14209)
    *   [#14094](https://github.com/openai/codex/issues/14094)
    *   [#14260](https://github.com/openai/codex/issues/14260)
    *   [#14120](https://github.com/openai/codex/issues/14120)
    *   [#14238](https://github.com/openai/codex/issues/14238)
    *   [#14200](https://github.com/openai/codex/issues/14200)
    *   [#14153](https://github.com/openai/codex/issues/14153)
    *   [#14213](https://github.com/openai/codex/issues/14213)
    *   [#14062](https://github.com/openai/codex/issues/14062)
    *   [#14237](https://github.com/openai/codex/issues/14237)
    *   [#14190](https://github.com/openai/codex/issues/14190)
    *   [#14201](https://github.com/openai/codex/issues/14201)
    *   [#14127](https://github.com/openai/codex/issues/14127)
    *   [#14131](https://github.com/openai/codex/issues/14131)
    *   [#14154](https://github.com/openai/codex/issues/14154)
    *   [#14106](https://github.com/openai/codex/issues/14106)
    *   [#14208](https://github.com/openai/codex/issues/14208)
    *   [#14204](https://github.com/openai/codex/issues/14204)
    *   [#14146](https://github.com/openai/codex/issues/14146)
    *   [#14286](https://github.com/openai/codex/issues/14286)
    *   [#14278](https://github.com/openai/codex/issues/14278)
    *   [#14255](https://github.com/openai/codex/issues/14255)
    *   [#14211](https://github.com/openai/codex/issues/14211)
    *   [#14257](https://github.com/openai/codex/issues/14257)
    *   [#14266](https://github.com/openai/codex/issues/14266)
    *   [#14182](https://github.com/openai/codex/issues/14182)
    *   [#14297](https://github.com/openai/codex/issues/14297)
    *   [#14296](https://github.com/openai/codex/issues/14296)
*   **Pull Requests**:
    *   [#14299](https://github.com/openai/codex/pull/14299)
    *   [#14301](https://github.com/openai/codex/pull/14301)
    *   [#14300](https://github.com/openai/codex/pull/14300)
    *   [#14245](https://github.com/openai/codex/pull/14245)
    *   [#14298](https://github.com/openai/codex/pull/14298)
    *   [#14283](https://github.com/openai/codex/pull/14283)
    *   [#14178](https://github.com/openai/codex/pull/14178)
    *   [#14246](https://github.com/openai/codex/pull/14246)
    *   [#14285](https://github.com/openai/codex/pull/14285)
    *   [#14274](https://github.com/openai/codex/pull/14274)
    *   [#14287](https://github.com/openai/codex/pull/14287)
    *   [#14294](https://github.com/openai/codex/pull/14294)
    *   [#14293](https://github.com/openai/codex/pull/14293)
    *   [#14170](https://github.com/openai/codex/pull/14170)
    *   [#14290](https://github.com/openai/codex/pull/14290)
    *   [#14295](https://github.com/openai/codex/pull/14295)
    *   [#14225](https://github.com/openai/codex/pull/14225)
    *   [#14262](https://github.com/openai/codex/pull/14262)
    *   [#14284](https://github.com/openai/codex/pull/14284)
    *   [#14282](https://github.com/openai/codex/pull/14282)
*   **项目地址**: [openai/codex](https://github.com/openai/codex)

</details>

<details>
<summary>OpenCode — <a href="https://github.com/sst/opencode">sst/opencode</a></summary>

# OpenCode (sst/opencode) 技术日报

**日期:** 2026-03-11

## 摘要

本日报聚焦 OpenCode 项目在 2026 年 3 月 10 日至 3 月 11 日期间的关键动态。本期 **OpenCode 发布了 1.2.24 版本**，尽管具体亮点未在 Issue/PR 中明确列出，但从社区反馈来看，新版本（尤其是在 TUI 和 Windows 平台方面）引入了一些调整，也伴随了一些兼容性问题。

社区层面，**AI 模型兼容性问题** 依然是开发者关注的焦点，多个 Issue 反映了不同模型（如 ChatGPT 的 ChatGPT-5.3/5.4、Bedrock、Qwen 3.5、GLM-5）在使用 OpenCode 时出现异常。此外，**会话管理和数据持久化** （如旧会话加载失败、Compaction 机制对指令的保留）也是近期用户反馈的热点。

**本日志精选:**

1.  **OpenCode 发布 1.2.24 版本**: 最新版本已发布，尽管明确的亮点未在 Issues/PRs 中详述，但一些新提交的问题（如 \#16967, \#16963, \#16950）与此版本直接相关，可能预示着新功能或已知问题的修复/引入。
2.  **AI 模型兼容性及行为异常**: 多个用户报告与不同 AI 模型（包括 ChatGPT-5.3/5.4，Bedrock，Qwen 3.5，GLM-5）相关的 Bug，例如模型不可见、无法正确显示思考过程、或导致 UI 混乱。这表明模型生态的集成与适配是持续的挑战。
    *   [#16851](https://github.com/anomalyco/opencode/issues/16851) "ChatGPT not working in new version 1.2.24"
    *   [#16963](https://github.com/anomalyco/opencode/issues/16963) "Qwen/Qwen3.5-397B-A17B-FP8: opencode never show the thinking process block."
    *   [#16903](https://github.com/anomalyco/opencode/issues/16903) "[BUG] GLM-5 model pollutes context window with broken thinking output"
3.  **会话加载与数据持久化问题**: 用户报告旧会话无法加载，以及 Compaction 机制在处理指令文件（AGENTS.md/CLAUDE.md）时丢失上下文的问题。这直接关系到用户工作流的连续性和数据完整性。
    *   [#16878](https://github.com/anomalyco/opencode/issues/16878) "Old sessions cannot be loaded"
    *   [#16960](https://github.com/anomalyco/opencode/issues/16960) "[FEATURE]: Compaction loses AGENTS.md/CLAUDE.md instruction context"

---

## Issues 分析

**近期新增 (🆕 新建):**

*   **模型兼容性问题突出**:
    *   [#16851](https://github.com/anomalyco/opencode/issues/16851) 用户报告 1.2.24 版本中 ChatGPT 存在 "Bad Request" 错误，具体为 'gpt-5.3-codex' 模型不受支持，可能与 OpenAI API 变更有关。
    *   [#16963](https://github.com/anomalyco/opencode/issues/16963) 和 [#16886](https://github.com/anomalyco/opencode/issues/16886) 用户报告使用 Qwen/Qwen3.5-397B-A17B-FP8 模型时，OpenCode 无法显示模型思考过程。
    *   [#16903](https://github.com/anomalyco/opencode/issues/16903) 使用 GLM-5 模型时，TUI 出现乱码和布局破损。
    *   [#16950](https://github.com/anomalyco/opencode/issues/16950) GPT 5.4 模型仅在 App 中可见，Web 版本无法找到。
    *   [#16946](https://github.com/anomalyco/opencode/issues/16946) 通过 Zen 使用 OpenAI 模型时遇到问题，交互无响应。
    *   [#16927](https://github.com/anomalyco/opencode/issues/16927) 报告 ChatGPT OAuth 下的模型列表不完整，缺失 gpt 5.3 codex 和 gpt 5.4。
*   **会话管理与功能 Bug**:
    *   [#16878](https://github.com/anomalyco/opencode/issues/16878) 用户报告无法加载旧的会话列表。
    *   [#16954](https://github.com/anomalyco/opencode/issues/16954) TUI 在电脑休眠后会卡死。
    *   [#16967](https://github.com/anomalyco/opencode/issues/16967) TUI 在 Linux tmux 环境下出现显示问题，无法输入或 UI 闪烁。
    *   [#16871](https://github.com/anomalyco/opencode/issues/16871) MacOS 桌面版客户端在连接远程会话时，无法更改会话文件夹。
    *   [#16839](https://github.com/anomalyco/opencode/issues/16839) 输入内容时，终端显示 `bun install` 警告。
    *   [#16882](https://github.com/anomalyco/opencode/issues/16882) `compaction.auto: false` 在 provider 抛出 context overflow 错误时被忽略。
*   **功能需求与讨论**:
    *   [#16781](https://github.com/anomalyco/opencode/issues/16781) 请求在文件查看器中添加“自动换行”功能。
    *   [#16960](https://github.com/anomalyco/opencode/issues/16960) 提出 Compaction 机制丢失 AGENTS.md/CLAUDE.md 指令上下文的问题。
    *   [#16940](https://github.com/anomalyco/opencode/issues/16940) 和 [#16942](https://github.com/anomalyco/opencode/issues/16942) 请求开放 API 接口以支持第三方消息应用集成。
    *   [#16936](https://github.com/anomalyco/opencode/issues/16936) 建议在提问模式的“自定义回答”输入框中支持 @提及文件和 Agent。
    *   [#16933](https://github.com/anomalyco/opencode/issues/16933) 建议在 TUI 中添加 `/memory` 视图，展示活动的规则和技能。
*   **其他 Bug**:
    *   [#16747](https://github.com/anomalyco/opencode/issues/16747) 在 `eu-west-2` 区域使用某些 Bedrock 模型时出现“无效模型标识符”错误。
    *   [#16813](https://github.com/anomalyco/opencode/issues/16813) Linux 桌面版打包了错误的 CLI 架构。
    *   [#16962](https://github.com/anomalyco/opencode/issues/16962) 在 Mac 之间通过 SSH 远程连接时，剪贴板复制功能失效。
    *   [#16937](https://github.com/anomalyco/opencode/issues/16937) 桌面版使用 GitHub Copilot Provider 时，每个子 Agent 都会消耗独立的 Premium 请求。

**近期更新 (旧 Issue/PR):**

*   [#16721](https://github.com/anomalyco/opencode/issues/16721) "sdk方法中 sessions.abort方法不能终止后台服务的任务的运行" (已关闭): 报告 `sessions.abort` 方法未能终止后台任务，即使会话状态为 `busy`。
*   [#16818](https://github.com/anomalyco/opencode/issues/16818) 用户订阅 Go 后未收到 API Key。
*   [#16849](https://github.com/anomalyco/opencode/pull/16849) 修复了在全局扫描时忽略 macOS/Windows 系统目录的问题。
*   [#16850](https://github.com/anomalyco/opencode/pull/16850) 为 OpenRouter 设置了 1 小时的 Prompt 缓存 TTL。

---

## Pull Requests 分析

**近期新增 (🆕 新建):**

*   **TUI 功能增强**:
    *   [#16970](https://github.com/anomalyco/opencode/pull/16970) 和 [#16947](https://github.com/anomalyco/opencode/pull/16947) 实现了 TUI 可配置的光标样式、闪烁和颜色，以提升用户体验。
*   **模型/会话相关修复与改进**:
    *   [#16959](https://github.com/anomalyco/opencode/pull/16959) 解决了 Compaction 机制丢失 `AGENTS.md`/`CLAUDE.md` 指令上下文的问题，确保指令在压缩后得以保留（与 Issue [#16960](https://github.com/anomalyco/opencode/issues/16960) 相关）。
    *   [#16898](https://github.com/anomalyco/opencode/issues/16898) 修复了 Claude provider ("openai-compatible" endpoint) 在 OpenCode 中可能出现的 "messages: text content blocks must be non-empty" 错误。
*   **数据结构与类型安全**:
    *   [#16964](https://github.com/anomalyco/opencode/pull/16964), [#16956](https://github.com/anomalyco/opencode/pull/16956), [#16953](https://github.com/anomalyco/opencode/pull/16953), [#16966](https://github.com/anomalyco/opencode/pull/16966) 等 PRs 集中对 `WorkspaceID`, `MessageID`, `SessionID`, `PartID` 等核心标识符进行了类型品牌化 (Type Branding) 处理，通过 Drizzle 和 Zod schema 增强了数据的类型安全性和代码健壮性。
*   **桌面客户端改进**:
    *   [#16955](https://github.com/anomalyco/opencode/pull/16955) 修复了桌面版中创建工作空间非常缓慢的问题。
    *   [#16843](https://github.com/anomalyco/opencode/pull/16843) 修复了 Windows 平台上 Electron 应用标题栏主题显示的问题。
    *   [#16842](https://github.com/anomalyco/opencode/pull/16842) 隐藏了 Windows 后台进程的命令行窗口，提升了 UI 的整洁度。
    *   [#16965](https://github.com/anomalyco/opencode/pull/16965) 重构了默认服务器的初始化和连接处理，使连接失败时用户可以更容易地选择其他服务器。
*   **CLI 与配置**:
    *   [#16957](https://github.com/anomalyco/opencode/pull/16957) 修复了 CLI 中活动组织标签作用域的 bug，使其仅限于活动账户。
*   **其他**:
    *   [#16922](https://github.com/anomalyco/opencode/pull/16922) 为 Vertex AI 添加了 `GOOGLE_VERTEX_LOCATION` 环境变量支持。
    *   [#16961](https://github.com/anomalyco/opencode/pull/16961) 确保 `Npm.which()` 在 `.bin` 目录为空时避免无限循环。
    *   [#16908](https://github.com/anomalyco/opencode/pull/16908) 将中文社区链接从 Discord 替换为飞书 (Feishu)。

**近期更新 (旧 PR):**

*   [#16843](https://github.com/anomalyco/opencode/pull/16843) "fix(electron): theme Windows titlebar overlay" (持续开放)
*   [#16842](https://github.com/anomalyco/opencode/pull/16842) "fix(electron): hide Windows background consoles" (已关闭)
*   [#16922](https://github.com/anomalyco/opencode/pull/16922) "fix: add GOOGLE_VERTEX_LOCATION env var support for Vertex AI" (已关闭)
*   [#16849](https://github.com/anomalyco/opencode/pull/16849) "fix: ignore macOS/Windows system directories in global home scan" (已关闭)
*   [#16850](https://github.com/anomalyco/opencode/pull/16850) "fix(opencode): set 1h prompt cache TTL for OpenRouter" (持续开放)

---

## 参考链接

**Issues:**

*   `#16851`: [ChatGPT not working in new version 1.2.24](https://github.com/anomalyco/opencode/issues/16851)
*   `#16878`: [Old sessions cannot be loaded](https://github.com/anomalyco/opencode/issues/16878)
*   `#16747`: [bug: invalid model identifier error using some bedrock models in eu-west-2](https://github.com/anomalyco/opencode/issues/16747)
*   `#16721`: [sdk方法中 sessions.abort方法不能终止后台服务的任务的运行](https://github.com/anomalyco/opencode/issues/16721)
*   `#16839`: [每次在 OpenCode 对话框中输入内容并按 Enter 键后，终端都会出现以下警告：bun install v1.3.10(30e609e0)ext() called before initConfigContext(): defaulting to CLI paths Checked 3 installs across 4 packages(no changes)34.00msio) by @mengfanbo123](https://github.com/anomalyco/opencode/issues/16839)
*   `#16781`: [[FEATURE]: Toggle Word Wrap in File Viewer (Desktop)](https://github.com/anomalyco/opencode/issues/16781)
*   `#16882`: [compaction.auto: false is ignored when provider throws a context overflow error](https://github.com/anomalyco/opencode/issues/16882)
*   `#16963`: [Qwen/Qwen3.5-397B-A17B-FP8: opencode never show the thinking process block.](https://github.com/anomalyco/opencode/issues/16963)
*   `#16960`: [[FEATURE]: Compaction loses AGENTS.md/CLAUDE.md instruction context](https://github.com/anomalyco/opencode/issues/16960)
*   `#16954`: [Bug - TUI - Application Gets Stuck When Computer Sleep Occurs](https://github.com/anomalyco/opencode/issues/16954)
*   `#16940`: [[FEATURE]:Request for Open API Interface to Support Third-Party Messaging App Integration](https://github.com/anomalyco/opencode/issues/16940)
*   `#16936`: [[FEATURE]: @mention files and agents in question mode's 'Type your own answer' input](https://github.com/anomalyco/opencode/issues/16936)
*   `#16818`: [I subscribed to Go, but did not receive my API Key and can't find it](https://github.com/anomalyco/opencode/issues/16818)
*   `#16896`: [[FEATURE]: Missing Citations to Prior Yang Yuan's works, the founder of Beijing (Topos) Technology Center](https://github.com/anomalyco/opencode/issues/16896)
*   `#16903`: [[BUG] GLM-5 model pollutes context window with broken thinking output](https://github.com/anomalyco/opencode/issues/16903)
*   `#16886`: [qwen 3.5 a17b opencode never show the thinking process block.](https://github.com/anomalyco/opencode/issues/1

</details>

<details>
<summary>Claude Code — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

# Claude Code (anthropics/claude-code) 技术日报 (2026-03-11)

## 摘要

本期日报聚焦于 `anthropics/claude-code` 项目在 2026 年 3 月 11 日的社区活跃度。**Bug 报告数量依旧是社区关注的焦点**，特别是在 Windows 和 macOS 平台上出现的各种稳定性问题，例如登录失败、UI 异常、以及内存泄漏等。同时，**新插件的开发和集成展示了项目持续扩展功能的趋势**，特别是在代码辅助和调试方面。

**本期最值得关注的动态包括：**

1.  **大量 Bug 报告涌现，尤其是跨平台兼容性问题：** 多个新建的 Issue（如 #32683, #32573, #32742, #33055, #33056, #32870）集中反映了 Claude Code 在 Windows 和 macOS 等不同平台上的兼容性、稳定性和功能异常。特别是 #32870 提到的 `claude.exe` 导致 Windows BSOD，以及 #33055 中 Windows 11 上的崩溃问题，显示出底层系统集成仍需大量修复。
2.  **插件生态持续繁荣，新增多种辅助功能：** 本日有多个 Pull Request 提交了全新的插件，旨在增强 Claude Code 的实用性。例如 #33070 提出的 `reframe` 插件，旨在通过认知框架帮助开发者克服调试和设计难题；#32980 和 #32971 提交的 `create-test` 插件，能够自动生成单元测试；#32979 提出的 `explain-architecture` 插件，则能分析代码库生成架构图。这些新插件预示着 Claude Code 在代码分析、生成和调试方面将有更深入的应用。
3.  **内存泄漏和性能问题成为持续关注点：** Issue #32752 详细报告了native addons中存在的严重内存泄漏问题（每小时增长约 18 GB），这可能严重影响用户体验和系统资源使用。此前已报告的 #32963 和 #32626 也提到了性能下降和代理状态异常等问题，表明性能优化是项目需要重点关注的领域。

## Issues 分析

今日 GitHub Issues 页面显示了活跃的社区讨论，其中 Bug 报告的数量显著。

**热门 Issues：**

*   **[BUG] Claude Code login fails due to phantom unpaid invoice** #32573 - 此 Issue 尽管被标记为 `invalid`，但由于较高的评论数（11条），仍然引发了关于用户认证和账单问题的讨论。
*   **[BUG] #32683 Preflight Checklist** - 这个 Bug 报告（18条评论）发生在 Windows 平台，并且被标记为 `bug`, `platform:windows`, `area:cli`，可能指向 CLI 工具在 Windows 上的特定问题。
*   **[BUG] API Error 400: eager_input_streaming parameter not permitted in Claude Code VS Code Extension v2.1.72** #32742 - 这个新建 Issue （7条评论）指出 VS Code 扩展在使用特定 API 参数时遇到 400 错误，这可能影响 VS Code 用户集成体验。
*   **[BUG] Claude deleted 11h of inference output without permission then restarted job** #32938 - 该 Bug 报告（4条评论）描述了 Claude 意外删除用户数据并重启任务的严重行为，涉及 `area:bash` 和 `area:permissions`，并标记为 `data-loss`，属于高优先级问题。
*   **Memory leak in native addons: ~18 GB/hour growth, RSS reaches 2 GB in 7 minutes** #32752 - 这个新建 Issue （3条评论）指出了一个严重的性能问题，内存泄漏可能对长期运行的任务和系统资源造成重大影响。

**社区关注点：**

*   **Windows 平台稳定性：** 多个 Issue (如 #32683, #33055, #32870) 集中在 Windows 平台，报告了包括 BSOD、崩溃、CLI 错误等问题。
*   **AI Agent 和工具的可靠性：** Issue #32963, #32975, #32626 等提到了 Agent 的行为异常、工具接受无效输入以及状态显示错误，表明 Agents 和工具的健壮性是当前关注的重点。
*   **数据安全与权限管理：** Issue #32938 中 Claude 意外删除用户数据是极其严重的问题，凸显了对 Claude 行为的控制和权限管理的必要性。
*   **API 和扩展集成：** Issue #32742 表明 VS Code 扩展与 API 的集成也存在需要解决的问题。
*   **内存和性能：** Issue #32752 直接指出了显著的内存泄漏问题，是影响用户体验的关键因素。

## Pull Requests 分析

今日的 Pull Requests 主要集中在新功能的开发和现有功能的改进，特别是通过引入新插件来扩展 Claude Code 的能力。

**热门 PRs：**

*   **feat: add reframe plugin for debugging and design problem-solving** #33070 - 这个新建 PR 提出了一种名为 `reframe` 的新插件，旨在通过认知框架帮助开发者克服技术难题，是增强 Claude Code 解决问题能力的一个重要方向。
*   **Add Paper Writing Plugin with guided academic argument development** #32408 - 这个 PR 引入了一个“论文写作插件”，为学术研究者提供了结构化的流程来开发论点和写作内容。
*   **feat: add /create-test command and plugin** #32980 / **feat: add create-test plugin for automatic unit test generation** #32971 - 这两个 PR (后者已关闭) 都围绕着“自动生成单元测试”的功能，表明社区对提高代码质量和开发效率的需求。
*   **feat: add explain-architecture plugin** #32979 - 这个 PR 提出了一个 `explain-architecture` 插件，能够分析代码库并生成架构图（Mermaid, PlantUML, JSON），对于理解复杂项目结构非常有帮助。

**社区关注点：**

*   **插件生态扩展：** 大多数 PR 都围绕着引入新的插件，覆盖了代码评审、单元测试生成、架构解释、问题重构、论文写作等多个领域，显示出项目积极拓展其应用场景。
*   **代码质量和开发效率提升：** `create-test` 和 `explain-architecture` 等插件直接服务于提升代码质量和降低理解成本。
*   **AI 辅助解决复杂问题：** `reframe` 插件旨在帮助开发者突破思维瓶颈，体现了 AI 在辅助高级工程决策方面的潜力。
*   **底层修复与改进：** PRs 如 #33015 (修复 tmp 文件泄漏), #33007 (修复 hookify bug), #32943 (CI 验证插件目录) 表明项目也持续进行内部的系统性和稳定性优化。

## 本日精选

1.  **多平台 Bug 集中爆发，Windows 平台尤为突出：** 今日新建的 Issue #32683, #33055, #32870 等，以及近期更新的 #32573, #32479，集中反映了 Claude Code 在 Windows 和 macOS 上的不稳定问题，从登录、API 调用到系统层面的崩溃（如 BSOD），显示出跨平台兼容和稳定性仍是亟待解决的核心挑战。
2.  **AI 辅助工具链迎来重要插件升级：** #33070, #32980, #32979 等 Pull Request 提交了多个功能强大的新插件。`reframe` 插件旨在通过认知框架提升开发者解决问题的能力；`create-test` 插件能够自动化单元测试的生成；`explain-architecture` 插件则有助于代码结构的理解。这些插件的加入，显著增强了 Claude Code 作为开发辅助工具的效能。
3.  **内存泄漏问题敲响警钟，影响长期稳定性：** Issue #32752 报告了严重的 native addons 内存泄漏，增长速度惊人。这一问题若不及时解决，将严重影响 Claude Code 的长期运行稳定性和用户体验，需要开发团队优先处理。

---

## 参考链接

*   **Issues:**
    *   [#32683 Claude Code by @alexwyattdev](https://github.com/anthropics/claude-code/issues/32683)
    *   [#32573 Claude Code login fails due to phantom unpaid invoice by @waynr](https://github.com/anthropics/claude-code/issues/32573)
    *   [#32742 API Error 400: eager_input_streaming parameter not permitted in Claude Code VS Code Extension v2.1.72 by @sairamkidambi](https://github.com/anthropics/claude-code/issues/32742)
    *   [#32479 GitHub Connector connected in Claude Desktop but not recognized by Claude by @kss2002](https://github.com/anthropics/claude-code/issues/32479)
    *   [#32415 Unsupported (?) model in agent config silently fails instead of erroring by @NickSdot](https://github.com/anthropics/claude-code/issues/32415)
    *   [#32800 Claude code is injecting messages that aren't from me into the terminal and acting on them as if I reported them. by @mikekeenanphd-maker](https://github.com/anthropics/claude-code/issues/32800)
    *   [#32938 Claude deleted 11h of inference output without permission then restarted job by @warp143](https://github.com/anthropics/claude-code/issues/32938)
    *   [#33055 Claude Desktop crashes on startup with EBADF rename error on Windows 11 25H2 (Build 26200) - MSIX sandbox filesystem conflict by @ZJamss](https://github.com/anthropics/claude-code/issues/33055)
    *   [#33056 Sandbox creates directories in CWD from Bash tool command arguments when command is not found by @dsx724](https://github.com/anthropics/claude-code/issues/33056)
    *   [#33045 Agent tool isolation: "worktree" has no effect for team agents — agent runs in main repo by @bonanza465](https://github.com/anthropics/claude-code/issues/33045)
    *   [#32870 claude.exe triggers Windows BSOD via Wof.sys during directory listing (NtQueryDirectoryFileEx) by @VRDate](https://github.com/anthropics/claude-code/issues/32870)
    *   [#32752 Memory leak in native addons: ~18 GB/hour growth, RSS reaches 2 GB in 7 minutes by @JahJajaka](https://github.com/anthropics/claude-code/issues/32752)
    *   [#32963 Claude Code degrades severely after ~6 hours: autonomous destructive actions, ignores instructions, corrupts data by @francesco241](https://github.com/anthropics/claude-code/issues/32963)
    *   [#32868 Plan Mode doesn't go to auto-accept in sessions that have had /clear by @sabeekpradhan](https://github.com/anthropics/claude-code/issues/32868)
    *   [#32686 Cowork plugin marketplace empty on Windows 11 Pro, workspace reinstall didn't fix, by @mrgreene777](https://github.com/anthropics/claude-code/issues/32686)
    *   [#32610 Terminal Bell by @sjones-ardalyst](https://github.com/anthropics/claude-code/issues/32610)
    *   [#32591 User message lost when slash command fails with 'Unknown skill' by @prokesmartin](https://github.com/anthropics/claude-code/issues/32591)
    *   [#32626 Sub-agent shows "(running)" in status bar after conversation compaction even though it's no longer active by @amitsadhu](https://github.com/anthropics/claude-code/issues/32626)
    *   [#32664 Remote Control: frequent "unknown network error" and session drops when using iOS app by @borgstrom](https://github.com/anthropics/claude-code/issues/32664)
    *   [#32982 Remote Control sessions die after ~20 min idle — server TTL ignores keepalives by @siddharthkandan](https://github.com/anthropics/claude-code/issues/32982)
    *   [#33073 PreToolUse hooks cause agent hang after ToolSearch deferred tool loading by @elitecoder](https://github.com/anthropics/claude-code/issues/33073)
    *   [#33067 Multiverse context split — allow user input and tool permission dialogs to run concurrently by @jerichoBob](https://github.com/anthropics/claude-code/issues/33067)
    *   [#33012 Subagent launch display incomplete: only 2 of 5 launches shown in main interface by @fluffyrabbot](https://github.com/anthropics/claude-code/issues/33012)
    *   [#33042 /voice mode: Poor Korean recognition and --send flag not auto-submitting by @gangpro](https://github.com/anthropics/claude-code/issues/33042)
    *   [#33051 Auto-loaded files (CLAUDE.md, MEMORY.md) change notifications by @chrisdickens1](https://github.com/anthropics/claude-code/issues/33051)
    *   [#32520 Permission prompts repeatedly triggered for paths containing spaces (iCloud "Mobile Documents") by @hihibihiboss](https://github.com/anthropics/claude-code/issues/32520)
    *   [#33048 Add option to suppress idle notification text message (causes terminal corruption in screen/tmux) by @barefootcoder](https://github.com/anthropics/claude-code/issues/33048)
    *   [#32975 Agent tool accepts invalid subagent_type without validation error by @maisy-capps](https://github.com/anthropics/claude-code/issues/32975)
    *   [#32837 Cowork broken after auto-update to 1.1.5749 — yukonSilver marked unsupported (was working on previous version) by @toddnotplaying](https://github.com/anthropics/claude-code/issues/32837)
    *   [#33033 [FEATURE] Add hint support to Claude Code CLI by @jkgeekJack](https://github.com/anthropics/claude-code/issues/33033)
*   **Pull Requests:**
    *   [#33070 feat: add reframe plugin for debugging and design problem-solving by @Anuj-G-06](https://github.com/anthropics/claude-code/pull/33070)
    *   [#32408 Add Paper Writing Plugin with guided academic argument development by @dkfqdf](https://github.com/anthropics/claude-code/pull/32408)
    *   [#33015 feat: Add tmp-cleanup plugin to mitigate /tmp file leak (#8856) by @qbit-glitch](https://github.com/anthropics/claude-code/pull/33015)
    *   [#33007 fix(hookify): correct field mapping for stop and prompt events by @daniel-dallimore](https://github.com/anthropics/claude-code/pull/33007)
    *   [#33006 fix(code-review): align README with actual workflow and document required permissions by @daniel-dallimore](https://github.com/anthropics/claude-code/pull/33006)
    *   [#32980 feat: add /create-test command and plugin by @Fabien83560](https://github.com/anthropics/claude-code/pull/32980)
    *   [#32979 feat: add explain-architecture plugin by @Fabien83560](https://github.com/anthropics/claude-code/pull/32979)
    *   [#32971 feat: add create-test plugin for automatic unit test generation by @Fabien83560](https://github.com/anthropics/claude-code/pull/32971)
    *   [#32967 Fixes m2mac by @mxdillon](https://github.com/anthropics/claude-code/pull/32967)
    *   [

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-11T04:36:18.764Z