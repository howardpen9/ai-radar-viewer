# 🦞 OpenClaw 生态系统 日报 — 2026-03-12

## 横向对比

好的，这是一份基于您提供数据的 OpenClaw 生态系统横向技术分析日报，侧重于 GitHub 动态和趋势洞察：

# OpenClaw 生态系统 横向对比分析

**日期**: 2026-03-12

## 1. 生态全景

今日 OpenClaw 生态系统整体呈现出 **活跃的开发与迭代态势**。核心项目 `OpenClaw` 聚焦于提升 Gateway 和 Cron 作业的稳定性，同时社区应用探索（如 AI 相亲平台）也展现出新的可能性。`Zeroclaw` 发布了新版本，并在 Provider 支持、安全性及 WebUI 国际化方面取得进展。`NanoBot` 在安全性加固（`restrictToWorkspace` 修复）和多渠道支持（Telegram、微信）方面表现突出。`IronClaw` 发布 v0.18.0 版本，积极解决 Linux 安装兼容性、Bedrock 后端和 Google Sheets 工具等问题，并增强了 CLI 功能。`NanoClaw` 今日迎来成本优化（Token 节省）的集中爆发，并显著扩展了持久化内存、多渠道集成（QQ, Feishu/Lark）和部署灵活性。`PicoClaw` 推出了夜间构建版本，新增 LongCat 模型支持，并聚焦 Agent 重构和 Web UI 体验优化。`LobsterAI` 发布 v0.2.3，主界面支持多文件选择，并积极推进企微、QQ、钉钉机器人集成。`TinyClaw`（现重命名为 `TinyAGI`）则进行了重大架构重构（npm workspaces, SQLite 队列），并聚焦 TinyOffice 用户体验的打磨。总体来看，生态各项目在**稳定性提升、功能扩展、安全性加固、成本优化及多平台集成**等方向上均有显著活动。

## 2. 活跃度对比

| 项目名称                                        | 今日 Commit 数（估算）\* | 今日新增 Issues | 今日新增 PRs | 活跃度评分 \*\* |
| :---------------------------------------------- | :----------------------- | :-------------- | :----------- | :-------------- |
| [OpenClaw](https://github.com/openclaw/openclaw) | 较高                     | 较大            | 较大         | ★★★★☆         |
| [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 中等                     | 较大            | 较大         | ★★★★☆         |
| [NanoBot](https://github.com/HKUDS/nanobot)     | 中高                     | 较大            | 较大         | ★★★★☆         |
| [IronClaw](https://github.com/nearai/ironclaw)  | 中等                     | 较大            | 较大         | ★★★★☆         |
| [NanoClaw](https://github.com/qwibitai/nanoclaw) | 较高                     | 较大            | 很高         | ★★★★★         |
| [PicoClaw](https://github.com/sipeed/picoclaw)   | 中等                     | 较大            | 较高         | ★★★☆☆         |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI) | 中等                     | 较大            | 较高         | ★★★★☆         |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw)  | 较高                     | 较大            | 较高         | ★★★★☆         |

*\*Commit 数估算基于今日报告中提及的 PR 和 Issue 数量作为间接指标，不代表精确统计。*
*\*\*活跃度评分：★ 较低, ★★ 一般, ★★★ 中等, ★★★★ 较高, ★★★★★ 非常高。*

**注**: 活跃度评分是基于今日日报中报告的 Issue 和 PR 数量、提及的更新频率、以及社区讨论的热度等综合评估。

## 3. 共同趋势

今日，OpenClaw 生态系统中的多个项目展现出以下共同的技术方向和用户需求：

*   **稳定性与可靠性是核心关注点：** `OpenClaw` 持续投入 Cron 作业和 Gateway 的稳定性修复；`Zeroclaw` 修复配置加载 Bug；`NanoBot` 聚焦安全性加固；`IronClaw` 解决 Linux 安装、Bedrock 后端等稳定性问题；`NanoClaw` 关注长时运行会话和多实例部署的稳定性；`PicoClaw` 修复 UI Bug 和 Agent Loop；`LobsterAI` 解决 IM 超时、Bash 执行效率；`TinyClaw` 发布版本更新并打磨 TinyOffice 体验。
*   **多渠道集成与扩展性增强：** `NanoBot`（微信）、`NanoClaw`（QQ, Feishu/Lark, GitHub MCP）、`PicoClaw`（Telegram 富文本、Zalo）、`LobsterAI`（企微、QQ、钉钉机器人）、`TinyClaw` (Avian AI Provider) 等项目均在积极拓展支持的通讯渠道和集成第三方服务，以适应更广泛的应用场景。
*   **开发者体验与部署便捷性：** `IronClaw` 增强 CLI 功能；`NanoClaw` 提出多实例运行支持；`TinyClaw` 进行模块化重构（npm workspaces）、并计划引入 Onboarding 流程；`Zeroclaw` 简化 CI/CD 流程。这些都指向提升开发和部署效率。
*   **成本优化（Token 效率）与模型适配：** `NanoClaw` 今日在此方向集中爆发，提出多种 Token 节省方案。同时，`OpenClaw`（Kimi 模型）、`Zeroclaw`（Azure OpenAI）、`PicoClaw`（LongCat, Groq, Volcengine）、`TinmyClaw`（Avian AI Provider）等项目，都在积极适配和集成新的模型提供商。

## 4. 值得关注的信号

1.  **`NanoClaw` 的 Token 成本优化爆发：** `NanoClaw` 今日聚焦于“**Smart Token Cost Reduction**”，通过 Inline Compaction、Response length control 和 CLAUDE.md auto-compression 等机制，系统性地提出并实现了一系列旨在显著降低 LLM 调用成本的方案。这预示着 LLM 应用在追求功能强大的同时，**经济效益**正成为一个越来越重要的考量因素，并有成熟的解决方案浮出水面。
2.  **`TinyClaw` (TinyAGI) 的重大架构与品牌重塑：** `TinyClaw` 的 PR **[#191](https://github.com/TinyAGI/tinyclaw/pull/191)** 和 PR **[#186](https://github.com/TinyAGI/tinyclaw/pull/186)** 分别进行了项目重品牌为 **TinyAGI** 和基于 npm workspaces 的模块化重构。这标志着该项目正从一个特定的工具向一个更通用、更具扩展性的 **AI 平台**迈进，预示着其未来发展方向的重大转变。
3.  **`OpenClaw` 的 AI 相亲平台探索：** Issue **[#42938](https://github.com/openclaw/openclaw/issues/42938)** 中“虾缘”AI 相亲平台的出现，展示了 OpenClaw 生态在**新兴应用领域**（如社交、情感陪伴）的探索，这不仅为 AI 工具带来了新的应用场景，也可能推动相关技术的创新和发展。

---

## 各工具详细报告

<details>
<summary>OpenClaw — <a href="https://github.com/openclaw/openclaw">openclaw/openclaw</a></summary>

# OpenClaw 生态系统日报 (2026-03-12)

## 核心动态

### 1. [Cron 作业稳定性修复与优化](https://github.com/openclaw/openclaw/pull/41796)
本周持续关注的 Cron 作业问题在 #41796 中得到修复。此 PR 解决了 `sessionTarget="isolated"` 的 Cron 作业在队列等待后出现超时的问题，确保了 Cron 作业的稳定执行。这对于依赖定时任务的自动化场景至关重要。

### 2. [macOS Gateway 启动/重启健壮性提升](https://github.com/openclaw/openclaw/pull/43619)
针对 macOS 用户反馈的 Gateway 在长时间运行后可能因 LaunchAgent 失载导致启动/重启失败的问题，PR #43619 提出自动修复机制。此改进将提升 macOS 用户在 Gateway 方面的体验，解决因系统休眠或过载导致的潜在服务中断。

### 3. [AI 相亲平台“虾缘”测试，展示 OpenClaw 生态能力](https://github.com/openclaw/openclaw/issues/42938)
新创建的 Issue #42938 展示了一个有趣的社区应用尝试——“虾缘”AI 相亲交友平台。该项目明确表示旨在探索 AI 社交可能性并展示 OpenClaw 生态系统的能力，虽然目前处于测试阶段，但代表了社区对 OpenClaw 在更广泛应用场景的探索，值得关注。

---

## 社区焦点：Cron 作业与 Gateway 稳定性是近期热点

**Cron 作业问题持续涌现**：
近期，与 Cron 作业相关的 Issues 数量激增，显示出这是社区当前最关心的焦点之一。
- `#42579` 描述了 `agentTurn` 作业在默认配置下可能出现死锁。
- `#42883` 和 `#42152` 指出在升级到 2026.3.8 版本后，Cron 作业无法运行或被置为“enqueued”状态但从不执行。
- `#42632` 和 `#43185` 进一步反映了 `sessionTarget="isolated"` 的 Cron 作业在 2026.3.8 版本中可能出现超时或无法启动的问题。
- `#42960` 总结了 Cron 作业在更新后出现“enqueued but never execute”的回归性 Bug。

**Gateway 稳定性及 macOS 集成问题**：
Gateway 的稳定性和在特定平台（macOS）上的集成问题也受到社区高度关注。
- `#41978` 和 `#41845` 指出 macOS 下 Gateway 重启后 LaunchAgent 失载的问题，导致服务中断。PR #43619 正在尝试解决此问题。
- `#43381` 和 `#43336` 反映了 Gateway 状态与实际连接之间的差异，以及节点命令执行的策略问题。
- `#42841` 提出为 `node run/install` 添加 `--header` 支持，以应对 Cloudflare Zero Trust 等代理场景，这表明多节点部署和网络代理的配置是用户关注的重点。

**新模型适配与配置问题**：
部分用户在配置和使用新模型时遇到问题：
- `#41690` 和 `#43050` 反映了 Kimi 模型的配置验证错误，提示 `requiresOpenAiAnthropicToolPayload` 这是一个不被识别的键，表明新模型适配可能存在兼容性问题。
- `#42838` 提到了一个与 WebSocket 连接相关的错误 `disconnected 4008`。

**开发者工具与集成**：
- PR `#43618` 增加了 Queue diagnistics snapshot 的功能，有助于开发者更好地调试和理解 Lane 的运行状态。
- PR `#43016` 引入了 HarmonyOS 的客户端应用支持，进一步扩展了 OpenClaw 的跨平台能力。
- PR `#43601` 新增了微信公众号（WeChat Official Account）频道插件，为连接微信生态提供了新的可能性。

---

## 今日重点关注

1.  **Gateway 稳定性优化（macOS）**：PR `[#43619](https://github.com/openclaw/openclaw/pull/43619)` 旨在解决 macOS 用户反馈的 Gateway 启动/重启在 LaunchAgent 失载后失败的问题。这是对日益增长的 macOS 用户体验的一个重要改进。
2.  **Cron 作业执行稳定性**：Issue `[#42579](https://github.com/openclaw/openclaw/issues/42579)` 等多项关于 Cron 作业执行失败、超时和死锁的报告，以及 PR `[#41796](https://github.com/openclaw/openclaw/pull/41796)` 的合并，表明社区正积极解决 Cron 作业的可靠性问题，这是构建稳健自动化流程的关键。
3.  **新应用场景的探索**：Issue `[#42938](https://github.com/openclaw/openclaw/issues/42938)` 中“虾缘”AI 相亲平台的测试，展示了 OpenClaw 在非传统技术场景下的应用潜力，为社区带来了新的启发。

---

## 参考链接

*   **Issues**:
    *   [#41690](https://github.com/openclaw/openclaw/issues/41690)
    *   [#42270](https://github.com/openclaw/openclaw/issues/42270)
    *   [#42938](https://github.com/openclaw/openclaw/issues/42938)
    *   [#42579](https://github.com/openclaw/openclaw/issues/42579)
    *   [#42883](https://github.com/openclaw/openclaw/issues/42883)
    *   [#42152](https://github.com/openclaw/openclaw/issues/42152)
    *   [#42632](https://github.com/openclaw/openclaw/issues/42632)
    *   [#41950](https://github.com/openclaw/openclaw/issues/41950)
    *   [#42536](https://github.com/openclaw/openclaw/issues/42536)
    *   [#41978](https://github.com/openclaw/openclaw/issues/41978)
    *   [#41874](https://github.com/openclaw/openclaw/issues/41874)
    *   [#41815](https://github.com/openclaw/openclaw/issues/41815)
    *   [#42234](https://github.com/openclaw/openclaw/issues/42234)
    *   [#42838](https://github.com/openclaw/openclaw/issues/42838)
    *   [#43185](https://github.com/openclaw/openclaw/issues/43185)
    *   [#41844](https://github.com/openclaw/openclaw/issues/41844)
    *   [#42117](https://github.com/openclaw/openclaw/issues/42117)
    *   [#42960](https://github.com/openclaw/openclaw/issues/42960)
    *   [#42702](https://github.com/openclaw/openclaw/issues/42702)
    *   [#43561](https://github.com/openclaw/openclaw/issues/43561)
    *   [#41751](https://github.com/openclaw/openclaw/issues/41751)
    *   [#43490](https://github.com/openclaw/openclaw/issues/43490)
    *   [#43381](https://github.com/openclaw/openclaw/issues/43381)
    *   [#43057](https://github.com/openclaw/openclaw/issues/43057)
    *   [#43050](https://github.com/openclaw/openclaw/issues/43050)
    *   [#42712](https://github.com/openclaw/openclaw/issues/42712)
    *   [#43037](https://github.com/openclaw/openclaw/issues/43037)
    *   [#41845](https://github.com/openclaw/openclaw/issues/41845)
    *   [#41819](https://github.com/openclaw/openclaw/issues/41819)
    *   [#42471](https://github.com/openclaw/openclaw/issues/42471)
*   **Pull Requests**:
    *   [#43619](https://github.com/openclaw/openclaw/pull/43619)
    *   [#41796](https://github.com/openclaw/openclaw/pull/41796)
    *   [#42841](https://github.com/openclaw/openclaw/pull/42841)
    *   [#43618](https://github.com/openclaw/openclaw/pull/43618)
    *   [#43613](https://github.com/openclaw/openclaw/pull/43613)
    *   [#43614](https://github.com/openclaw/openclaw/pull/43614)
    *   [#43615](https://github.com/openclaw/openclaw/pull/43615)
    *   [#43336](https://github.com/openclaw/openclaw/pull/43336)
    *   [#43573](https://github.com/openclaw/openclaw/pull/43573)
    *   [#43016](https://github.com/openclaw/openclaw/pull/43016)
    *   [#43594](https://github.com/openclaw/openclaw/pull/43594)
    *   [#43601](https://github.com/openclaw/openclaw/pull/43601)
    *   [#43497](https://github.com/openclaw/openclaw/pull/43497)
    *   [#43538](https://github.com/openclaw/openclaw/pull/43538)
    *   [#42654](https://github.com/openclaw/openclaw/pull/42654)
    *   [#43335](https://github.com/openclaw/openclaw/pull/43335)
    *   [#42563](https://github.com/openclaw/openclaw/pull/42563)
    *   [#43610](https://github.com/openclaw/openclaw/pull/43610)
    *   [#43574](https://github.com/openclaw/openclaw/pull/43574)
    *   [#43609](https://github.com/openclaw/openclaw/pull/43609)

</details>

<details>
<summary>Zeroclaw — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 技术日报 (2026-03-12)

## 版本动态

今日，Zeroclaw 发布了新版本 **v0.1.7-beta.30** ([zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30))。此版本主要进行了以下优化：

*   **CI/CD 管道重构：** 简化了 CI/CD 工作流程。
*   **分支模型迁移：** 迁移至单一 `master` 分支模型，并更新了维护者信息。
*   **代码清理：** 修复了未使用的导入警告，并更新了 `.gitignore`、`CODEOWNERS` 及 Dependabot 配置。

## 社区焦点与活跃话题

### 热门 Issues & 社区关注点

今日社区主要围绕以下几个方面展开讨论：

*   **Provider 支持扩展：** 用户对增加新的 LLM Provider 支持表现出强烈兴趣。`#3176 [Feature]: Add support for Azure OpenAI provider` (新建) 展示了对 Azure OpenAI 的需求，而 `#3059 [Feature]: can not use aliyun bailian coding plan` (近3天，3评论) 则反映了对阿里云百炼 coding plan 集成的关注。
*   **安全与配置稳定性：** 多项 Bug Issue 指出了配置和 Secret 管理方面的问题。`#3175 [Bug]: Channel bot_token encrypted by save() but not decrypted by load(), causing silent channel failure after restart` (新建，0评论) 和 `#3126 [Bug]: secrets.encrypt does not protect Telegram bot_token at rest; plaintext secret leakage risk` (近3天，0评论) 均指向了密钥加密和加载机制的 bug，影响频道正常运行。
*   **核心功能改进与兼容性：**
    *   `#3153 "[Feature]: zeroclaw agent support mcp"` (近3天，3评论，已关闭) 提到了对 MCP (Meta-Community Platform?) 配置的支持，显示了对更广泛工具集成能力的期待。
    *   `#3152 "[Feature]: i18n requests"` (近3天，2评论，已关闭) 明确提出了对中文国际化（i18n）的需求，尤其是针对 Gateway WebUI。
    *   `#3207 "[Bug]: container build failing after bumping rust in Dockerfile to 1.94"` (新建，1评论) 和 `#3070 "[Bug]: version 'GLIBC_2.39' not found"` (近3天，9评论) 分别指出因 Rust 版本升级和 GLIBC 依赖问题导致的构建或运行失败，这是影响项目稳定性的关键 Bug。
    *   `#3174 "[Feature]: Add support for 32 bit system.s"` (新建，0评论) 提出为 32 位系统增加支持的需求，这对于低资源环境下的部署至关重要。

### 热门 Pull Requests & 开发活跃点

今日 PR 列表显示了开发团队在以下方向的积极推进：

*   **Provider 集成：** `#3158 "feat: add Bailian (Aliyun) provider support"` (新建) 和 `#3246 "feat(providers): add Azure OpenAI provider support"` (新建) 均是对新 Provider 的支持，直接回应了社区的 Provider 扩展需求。
*   **UI/UX 改进：** `#3178 "feat(web): add per-message copy button on hover"` (新建) 和 `#3185 "feat(web): add auto-expanding multiline chat composer"` (新建) 针对 Web 界面进行了优化，提升了用户操作便捷性。
*   **安全性与稳定性修复：** `#3256 "fix(config): decrypt channel secrets during load"` (新建) 和 `#3254 "fix(config): decrypt persisted pairing token hashes on load"` (新建) 旨在解决配置加载时 Secret 未解密的问题，直接修复了相关 Bug。

## 今日最值得关注的动态

1.  **版本 v0.1.7-beta.30 发布：** 核心亮点是 CI/CD 流程的简化和分支模型的统一，为项目的持续集成和开发者协作奠定了更坚实的基础。
2.  **Azure OpenAI Provider 支持提上日程：** 新建的 Issue `#3176` 和 PR `#3246` 表明社区对集成 Azure OpenAI 服务有强烈意愿，且相关开发工作已在进行中。
3.  **安全漏洞与配置 Bug 修复：** 针对 `secrets.encrypt` 的无效性及密钥加载解密问题，多项 Bug Issue 和 PR (`#3175`, `#3126`, `#3256`, `#3254`) 的出现和修复，是提升项目稳定性和安全性的重要进展。

---

## 参考链接

**Releases:**
*   [v0.1.7-beta.30](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)

**Issues:**
*   [#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153)
*   [#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176)
*   [#3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152)
*   [#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095)
*   [#3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207)
*   [#3169](https://github.com/zeroclaw-labs/zeroclaw/issues/3169)
*   [#3135](https://github.com/zeroclaw-labs/zeroclaw/issues/3135)
*   [#3247](https://github.com/zeroclaw-labs/zeroclaw/issues/3247)
*   [#3174](https://github.com/zeroclaw-labs/zeroclaw/issues/3174)
*   [#3120](https://github.com/zeroclaw-labs/zeroclaw/issues/3120)
*   [#3119](https://github.com/zeroclaw-labs/zeroclaw/issues/3119)
*   [#3126](https://github.com/zeroclaw-labs/zeroclaw/issues/3126)
*   [#3175](https://github.com/zeroclaw-labs/zeroclaw/issues/3175)
*   [#3173](https://github.com/zeroclaw-labs/zeroclaw/issues/3173)
*   [#3129](https://github.com/zeroclaw-labs/zeroclaw/issues/3129)
*   [#3125](https://github.com/zeroclaw-labs/zeroclaw/issues/3125)
*   [#3183](https://github.com/zeroclaw-labs/zeroclaw/issues/3183)
*   [#3189](https://github.com/zeroclaw-labs/zeroclaw/issues/3189)
*   [#3163](https://github.com/zeroclaw-labs/zeroclaw/issues/3163)
*   [#3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012)
*   [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070)
*   [#2929](https://github.com/zeroclaw-labs/zeroclaw/issues/2929)
*   [#2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355)
*   [#850](https://github.com/zeroclaw-labs/zeroclaw/issues/850)
*   [#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)
*   [#3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079)
*   [#2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494)
*   [#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033)
*   [#2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953)
*   [#3069](https://github.com/zeroclaw-labs/zeroclaw/issues/3069)

**Pull Requests:**
*   [#3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158)
*   [#3259](https://github.com/zeroclaw-labs/zeroclaw/pull/3259)
*   [#3178](https://github.com/zeroclaw-labs/zeroclaw/pull/3178)
*   [#3212](https://github.com/zeroclaw-labs/zeroclaw/pull/3212)
*   [#3185](https://github.com/zeroclaw-labs/zeroclaw/pull/3185)
*   [#3258](https://github.com/zeroclaw-labs/zeroclaw/pull/3258)
*   [#3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246)
*   [#3245](https://github.com/zeroclaw-labs/zeroclaw/pull/3245)
*   [#3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257)
*   [#3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256)
*   [#3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255)
*   [#3254](https://github.com/zeroclaw-labs/zeroclaw/pull/3254)
*   [#3106](https://github.com/zeroclaw-labs/zeroclaw/pull/3106)
*   [#3105](https://github.com/zeroclaw-labs/zeroclaw/pull/3105)
*   [#3109](https://github.com/zeroclaw-labs/zeroclaw/pull/3109)
*   [#3177](https://github.com/zeroclaw-labs/zeroclaw/pull/3177)
*   [#3190](https://github.com/zeroclaw-labs/zeroclaw/pull/3190)
*   [#3192](https://github.com/zeroclaw-labs/zeroclaw/pull/3192)
*   [#3180](https://github.com/zeroclaw-labs/zeroclaw/pull/3180)
*   [#3191](https://github.com/zeroclaw-labs/zeroclaw/pull/3191)
*   [#2895](https://github.com/zeroclaw-labs/zeroclaw/pull/2895)
*   [#2928](https://github.com/zeroclaw-labs/zeroclaw/pull/2928)
*   [#2954](https://github.com/zeroclaw-labs/zeroclaw/pull/2954)

</details>

<details>
<summary>NanoBot — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (HKUDS/nanobot) 技术日报 - 2026-03-12

## 核心摘要

今日 NanoBot 项目社区活动依然活跃，**安全性**和**多渠道支持**是社区关注的焦点。尤其值得关注的是一项关于 **`restrictToWorkspace` 安全指令绕过的 Issue** [#1817](https://github.com/HKUDS/nanobot/issues/1817) 及其对应的 PR [#1845](https://github.com/HKUDS/nanobot/pull/1845)，显示出社区对项目安全性的高度重视。同时，**Telegram 回复消息内容支持**的功能需求 [#1875](https://github.com/HKUDS/nanobot/issues/1875) 已有对应的 PR [#1900](https://github.com/HKUDS/nanobot/pull/1900) 提交，预示着用户交互体验的进一步提升。此外，关于 **exec 命令输出截断配置**的 Issue [#1871](https://github.com/HKUDS/nanobot/issues/1871) 也迅速获得了 PR [#1906](https://github.com/HKUDS/nanobot/pull/1906) 的支持。

## 今日最值得关注的动态

1.  **安全加固：`restrictToWorkspace` 指令绕过问题得到修复**
    *   **Issue [#1817](https://github.com/HKUDS/nanobot/issues/1817)** 报告了一项关于 `restrictToWorkspace` 功能的安全漏洞，该漏洞允许通过 `~` 路径绕过工作区限制，访问敏感配置文件。
    *   **PR [#1845](https://github.com/HKUDS/nanobot/pull/1845)** 提交了针对此问题的修复，通过在 shell guard 中检测 tilde 路径来强化安全措施。
    *   **PR [#1827](https://github.com/HKUDS/nanobot/pull/1827)** 也从另一个角度（exec 工具）增强了对 home-expanded 路径的限制，共同提升了项目的安全性。

2.  **功能增强：Telegram 回复消息与 exec 输出配置**
    *   **Issue [#1875](https://github.com/HKUDS/nanobot/issues/1875)** 提出希望支持读取 Telegram 中回复的消息内容，以提升对话上下文理解。**PR [#1900](https://github.com/HKUDS/nanobot/pull/1900)** 已经实现了这一功能，支持文本和媒体消息的回复内容。
    *   **Issue [#1871](https://github.com/HKUDS/nanobot/issues/1871)** 建议为 `exec` 命令添加环境变量配置，以控制输出截断。**PR [#1906](https://github.com/HKUDS/nanobot/pull/1906)** 迅速响应，增加了 `max_output` 和 `truncate_mode` 配置项，并提供了通过环境变量进行设置的选项。

3.  **用户体验与集成：微信支持与模型兼容性**
    *   **Issue [#1819](https://github.com/HKUDS/nanobot/issues/1819)** 再次强调了对微信 APP 支持的重要性，尽管该 Issue 已关闭，但暗示了这是中国用户群体普遍的期望。**Issue [#1907](https://github.com/HKUDS/nanobot/issues/1907)** 显示社区已建立微信交流群，正在积极推进相关社区建设。
    *   **Issue [#1883](https://github.com/HKUDS/nanobot/issues/1883)** 反映了由于 `wecom` 依赖问题导致的构建错误，**PR [#1885](https://github.com/HKUDS/nanobot/pull/1885)** 提出了解释 `hatch` 元数据中的直接引用限制的解决方案。
    *   **PR [#1901](https://github.com/HKUDS/nanobot/pull/1901)** 和 **PR [#1892](https://github.com/HKUDS/nanobot/pull/1892)** 解决了在切换到不支持视觉的 LLM 模型时，会话历史中 `image_url` 引起的 API 错误，提升了模型兼容性。

## Issues 焦点分析

*   **安全问题依旧是社区高度关注的领域**：#1873 报告了 `config.json` 泄露风险，#1817 关注 `restrictToWorkspace` 的绕过问题，这些 Issue 都直接关系到用户数据的安全。
*   **多渠道支持与集成需求旺盛**：
    *   微信支持（#1819）虽然关闭，但热度不减，#1907 提到建立微信群。
    *   WhatsApp 接入问题（#1879）。
    *   Matrix 的展示问题（#1887）及修复 PR（#1891）。
    *   DingTalk 对富文本、语音、文件消息的支持（#1903, #1864）。
    *   Feishu 文档技能（#1889）。
*   **功能增强与优化**：
    *   Telegram 回复消息上下文（#1875，有 PR #1900）。
    *   Exec 命令输出控制（#1871，有 PR #1906）。
    *   流式输出建议（#1860）。
    *   内存和工具可选项（#1881）。
    *   Ollama API 支持（#193，持续讨论）。
*   **Bug 报告**：
    *   SIGTERM 退出无解释（#1833）。
    *   Skill 内容截断（#1905）。
    *   命令行子代理乱码（#1904）。
    *   Cron 命令移除（#1816）。
    *   `spawn` 工具在 Deepseek Reasoner 下报错（#1834）。
    *   内存合并不继承模型配置（#1823）。
*   **API 与模型接入**：
    *   Claude Opus 低价推广（#1872）。
    *   阿里云百炼 API 变更（#1869）。
    *   Z.AI (Zhipu AI) API 支持（#2，近期更新，持续讨论）。

## Pull Requests 焦点分析

*   **安全修复的快速响应**：PR #1845 和 #1827 迅速跟进 Issue #1817 的安全绕过问题。
*   **功能实现的推进**：
    *   PR #1900 直接解决了 Issue #1875 的 Telegram 回复消息需求。
    *   PR #1906 实现了 Issue #1871 的 exec 输出配置。
    *   PR #1906、PR #1896 和 PR #1871 共同关注 exec 命令输出的截断和配置。
*   **模型兼容性与 API 适配**：
    *   PR #1901 和 PR #1892 解决了多模型 vision 支持问题。
    *   PR #1885 解决了 `wecom` 依赖的构建问题。
    *   PR #1861 引入了 OpenAI 兼容的 Endpoint Channel，为第三方集成提供了便利。
*   **代码质量与基础功能优化**：
    *   PR #1894 和 PR #1893 修复了 `get_history` 的截断逻辑 bug。
    *   PR #1895 增强了 filesystem 和 shell 工具的健壮性。

---

## 参考链接

*   HKUDS/nanobot GitHub 仓库: [https://github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
*   Issue #1873: [https://github.com/HKUDS/nanobot/issues/1873](https://github.com/HKUDS/nanobot/issues/1873)
*   Issue #1819: [https://github.com/HKUDS/nanobot/issues/1819](https://github.com/HKUDS/nanobot/issues/1819)
*   Issue #1833: [https://github.com/HKUDS/nanobot/issues/1833](https://github.com/HKUDS/nanobot/issues/1833)
*   Issue #1879: [https://github.com/HKUDS/nanobot/issues/1879](https://github.com/HKUDS/nanobot/issues/1879)
*   Issue #1875: [https://github.com/HKUDS/nanobot/issues/1875](https://github.com/HKUDS/nanobot/issues/1875)
*   Issue #1872: [https://github.com/HKUDS/nanobot/issues/1872](https://github.com/HKUDS/nanobot/issues/1872)
*   Issue #1905: [https://github.com/HKUDS/nanobot/issues/1905](https://github.com/HKUDS/nanobot/issues/1905)
*   Issue #1904: [https://github.com/HKUDS/nanobot/issues/1904](https://github.com/HKUDS/nanobot/issues/1904)
*   Issue #1899: [https://github.com/HKUDS/nanobot/issues/1899](https://github.com/HKUDS/nanobot/issues/1899)
*   Issue #1887: [https://github.com/HKUDS/nanobot/issues/1887](https://github.com/HKUDS/nanobot/issues/1887)
*   Issue #1871: [https://github.com/HKUDS/nanobot/issues/1871](https://github.com/HKUDS/nanobot/issues/1871)
*   Issue #1883: [https://github.com/HKUDS/nanobot/issues/1883](https://github.com/HKUDS/nanobot/issues/1883)
*   Issue #1862: [https://github.com/HKUDS/nanobot/issues/1862](https://github.com/HKUDS/nanobot/issues/1862)
*   Issue #1884: [https://github.com/HKUDS/nanobot/issues/1884](https://github.com/HKUDS/nanobot/issues/1884)
*   Issue #1880: [https://github.com/HKUDS/nanobot/issues/1880](https://github.com/HKUDS/nanobot/issues/1880)
*   Issue #1860: [https://github.com/HKUDS/nanobot/issues/1860](https://github.com/HKUDS/nanobot/issues/1860)
*   Issue #1816: [https://github.com/HKUDS/nanobot/issues/1816](https://github.com/HKUDS/nanobot/issues/1816)
*   Issue #1869: [https://github.com/HKUDS/nanobot/issues/1869](https://github.com/HKUDS/nanobot/issues/1869)
*   Issue #1866: [https://github.com/HKUDS/nanobot/issues/1866](https://github.com/HKUDS/nanobot/issues/1866)
*   Issue #1907: [https://github.com/HKUDS/nanobot/issues/1907](https://github.com/HKUDS/nanobot/issues/1907)
*   Issue #1903: [https://github.com/HKUDS/nanobot/issues/1903](https://github.com/HKUDS/nanobot/issues/1903)
*   Issue #1817: [https://github.com/HKUDS/nanobot/issues/1817](https://github.com/HKUDS/nanobot/issues/1817)
*   Issue #1881: [https://github.com/HKUDS/nanobot/issues/1881](https://github.com/HKUDS/nanobot/issues/1881)
*   Issue #1823: [https://github.com/HKUDS/nanobot/issues/1823](https://github.com/HKUDS/nanobot/issues/1823)
*   Issue #1864: [https://github.com/HKUDS/nanobot/issues/1864](https://github.com/HKUDS/nanobot/issues/1864)
*   Issue #1834: [https://github.com/HKUDS/nanobot/issues/1834](https://github.com/HKUDS/nanobot/issues/1834)
*   Issue #2: [https://github.com/HKUDS/nanobot/issues/2](https://github.com/HKUDS/nanobot/issues/2)
*   Issue #193: [https://github.com/HKUDS/nanobot/issues/193](https://github.com/HKUDS/nanobot/issues/193)
*   Issue #1617: [https://github.com/HKUDS/nanobot/issues/1617](https://github.com/HKUDS/nanobot/issues/1617)
*   Issue #855: [https://github.com/HKUDS/nanobot/issues/855](https://github.com/HKUDS/nanobot/issues/855)
*   PR #1894: [https://github.com/HKUDS/nanobot/pull/1894](https://github.com/HKUDS/nanobot/pull/1894)
*   PR #1906: [https://github.com/HKUDS/nanobot/pull/1906](https://github.com/HKUDS/nanobot/pull/1906)
*   PR #1897: [https://github.com/HKUDS/nanobot/pull/1897](https://github.com/HKUDS/nanobot/pull/1897)
*   PR #1901: [https://github.com/HKUDS/nanobot/pull/1901](https://github.com/HKUDS/nanobot/pull/1901)
*   PR #1902: [https://github.com/HKUDS/nanobot/pull/1902](https://github.com/HKUDS/nanobot/pull/1902)
*   PR #1892: [https://github.com/HKUDS/nanobot/pull/1892](https://github.com/HKUDS/nanobot/pull/1892)
*   PR #1900: [https://github.com/HKUDS/nanobot/pull/1900](https://github.com/HKUDS/nanobot/pull/1900)
*   PR #1861: [https://github.com/HKUDS/nanobot/pull/1861](https://github.com/HKUDS/nanobot/pull/1861)
*   PR #1845: [https://github.com/HKUDS/nanobot/pull/1845](https://github.com/HKUDS/nanobot/pull/1845)
*   PR #1843: [https://github.com/HKUDS/nanobot/pull/1843](https://github.com/HKUDS/nanobot/pull/1843)
*   PR #1878: [https://github.com/HKUDS/nanobot/pull/1878](https://github.com/HKUDS/nanobot/pull/1878)
*   PR #1889: [https://github.com/HKUDS/nanobot/pull/1889](https://github.com/HKUDS/nanobot/pull/1889)
*   PR #1896: [https://github.com/HKUDS/nanobot/pull/1896](https://github.com/HKUDS/nanobot/pull/1896)
*   PR #1895: [https://github.com/HKUDS/nanobot/pull/1895](https://github.com/HKUDS/nanobot/pull/1895)
*   PR #1891: [https://github.com/HKUDS/nanobot/pull/1891](https

</details>

<details>
<summary>IronClaw — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 技术日报 - 2026-03-12

## 今日亮点

今日 IronClaw 生态系统迎来 **v0.18.0** 版本发布。本次发布主要包含了两个重要的合并操作：将 `staging` 分支推送到 `main` 分支，以及更新了 WASM 构件的 SHA256 校验和。这标志着开发团队在代码稳定性和安全性方面持续投入，并确保了软件交付流程的顺畅。

在社区关注点方面，今日新增了大量 **Issues**，集中反映了用户在安装、配置和使用过程中遇到的各种问题。特别是与 **Linux 安装兼容性**（#1008）、**Bedrock 后端配置**（#1009）、**Google Sheets 工具集成**（#993, #999, #1002）以及 **Telegram 通道集成**（#1001, #991, #994, #992）相关的问题，这些都指向了提升核心功能的稳定性和易用性的迫切需求。

此外，**Pull Requests** 列表显示了活跃的开发进度。其中，#1011 针对 Bedrock 后端修复了启动验证问题，#1010 和 #1006 进行了 `staging` 到 `main` 的自动版本推广，而 #933 和 #918 则通过 **CLI 子命令** 扩展了 `channels` 和 `skills` 的管理功能，为开发者提供了更便捷的交互方式。

## 项目动态

### 版本发布

- **v0.18.0** 已于 2026-03-11 发布。本次更新主要涉及将 `staging` 分支的内容合并到 `main` 分支，以及更新 WASM 构件的 SHA256 校验和。
  - **链接**: [v0.18.0 "0.18.0 - 2026-03-11"](https://github.com/nearai/ironclaw/releases/tag/v0.18.0)

### 热门 Issues（新近与高关注度）

*   **Linux 安装兼容性问题**: **[🆕 新建]** `#1008` "Installer fails on Linux with glibc < 2.35 — no musl/static fallback" 指出 `ironclaw-installer.sh` 在 glibc 版本低于 2.35 的 Linux 系统上会失败，主要影响 Amazon Linux 2023 等系统，这表明对更广泛 Linux 环境的兼容性还需要加强。
    *   **链接**: [nearai/ironclaw/issues/1008](https://github.com/nearai/ironclaw/issues/1008)

*   **Bedrock 后端启动问题**: **[🆕 新建]** `#1009` "fix: Bedrock backend fails startup validation due to missing provider check" 报告了当 `LLM_BACKEND` 配置为 `bedrock` 时，由于 AWS SDK 在调用时才解析凭证，导致应用启动失败，这需要对 Bedrock 后端的凭证验证逻辑进行调整。
    *   **链接**: [nearai/ironclaw/issues/1009](https://github.com/nearai/ironclaw/issues/1009)

*   **Google Sheets 工具集成问题**: **[🆕 新建]** `#993` "google-sheets tool: LLM passes `values` as a JSON string instead of array" 和 **[🆕 新建]** `#999` "Google Sheets returns 403 PERMISSION_DENIED after completing OAuth" 暴露了 Google Sheets 工具在参数传递和 OAuth 认证过程中存在问题，影响了数据写入和授权流程，是近期社区关注的重点，后续需要多项修复。
    *   **链接 (JSON 字符串问题)**: [nearai/ironclaw/issues/993](https://github.com/nearai/ironclaw/issues/993)
    *   **链接 (OAuth 认证问题)**: [nearai/ironclaw/issues/999](https://github.com/nearai/ironclaw/issues/999)

### 活跃 Pull Requests

*   **修复 Bedrock 后端启动问题**: **[🆕 新建]** `#1011` "fix: skip credential validation for Bedrock backend" 正在解决 #1009 中提到的 Bedrock 后端启动验证问题，通过修改启动逻辑来适应 AWS SDK 的凭证解析方式。
    *   **链接**: [nearai/ironclaw/pull/1011](https://github.com/nearai/ironclaw/pull/1011)

*   **CLI 功能增强**: **[🆕 新建]** `#933` "feat(cli): add ironclaw channels list subcommand" 和 **[🆕 新建]** `#918` "feat(cli): add ironclaw skills list/search/info subcommands" 展示了社区在扩展命令行工具功能方面的努力，新增了管理 `channels` 和 `skills` 的子命令，提高了开发者和高级用户的操作效率。
    *   **链接 (channels)**: [nearai/ironclaw/pull/933](https://github.com/nearai/ironclaw/pull/933)
    *   **链接 (skills)**: [nearai/ironclaw/pull/918](https://github.com/nearai/ironclaw/pull/918)

## 持续关注

*   **安装失败问题**: **[近3天]** [`#840`](https://github.com/nearai/ironclaw/issues/840) "onboard installs stale default WASM tool artifacts incompatible with host WIT 0.3.0" 和 **[近3天]** [`#875`](https://github.com/nearai/ironclaw/issues/875) "`ironclaw onboard` fails to install dependencies" 反映了安装流程和依赖管理方面的持续性问题，尤其是在 WASM 工具集成和校验和验证方面。

---

## 参考链接

*   [v0.18.0 "0.18.0 - 2026-03-11"](https://github.com/nearai/ironclaw/releases/tag/v0.18.0)
*   [nearai/ironclaw/issues/840](https://github.com/nearai/ironclaw/issues/840)
*   [nearai/ironclaw/issues/875](https://github.com/nearai/ironclaw/issues/875)
*   [nearai/ironclaw/issues/1008](https://github.com/nearai/ironclaw/issues/1008)
*   [nearai/ironclaw/issues/1009](https://github.com/nearai/ironclaw/issues/1009)
*   [nearai/ironclaw/issues/993](https://github.com/nearai/ironclaw/issues/993)
*   [nearai/ironclaw/issues/999](https://github.com/nearai/ironclaw/issues/999)
*   [nearai/ironclaw/pull/1011](https://github.com/nearai/ironclaw/pull/1011)
*   [nearai/ironclaw/pull/933](https://github.com/nearai/ironclaw/pull/933)
*   [nearai/ironclaw/pull/918](https://github.com/nearai/ironclaw/pull/918)

</details>

<details>
<summary>NanoClaw — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw (qwibitai/nanoclaw) 技术日报 - 2026-03-12

## 摘要

今日 NanoClaw 生态系统活跃度显著提升，尤其是在**成本优化**和**功能增强**方面涌现多项新进展。由 @gm4leejun-stack 发起的关于 token 成本优化的系列 Issue 成为今日焦点，涵盖了对话历史压缩、响应长度控制以及系统提示优化等多个维度，旨在从源头减少 token 浪费，实现显著的成本效益。同时，多项 Pull Request 展现了社区在**扩展性**、**集成性**和**稳定性**方面的持续投入，包括新增持久化内存支持、多实例运行、以及多渠道集成。

**今日最值得关注的动态：**

1.  **Token 成本优化系列 Issue 集中涌现**：@gm4leejun-stack 今日一口气提交了 #984, #985, #986 三个新的 Enhancement 类型 Issue，并创建了 #983 作为一个追踪 Issue，系统性地提出了一系列旨在降低 token 成本的解决方案，包括"Inline Compaction"、"Response length control"和"CLAUDE.md auto-compression"。这些提议聚焦于 LLM 应用最核心的成本构成——token 消耗，具有极高的潜在价值。
2.  **持久化语义内存与多渠道集成加速**：Pull Request #979 和 #977 引入了基于 LanceDB 的持久化语义内存功能，为容器化 Agent 提供了强大的记忆能力，极大地增强了 Agent 的上下文保持和学习能力。同时，PR #976 和 #975 实现了 GitHub MCP 服务器集成，PR #966 增加了 QQ 机器人支持，PR #964 提供了飞书/Lark 渠道支持，显著扩展了 NanoClaw 的应用场景和集成能力。
3.  **多实例运行与稳定性改进**：Pull Request #970 提出支持同一机器上运行多个 NanoClaw 实例，通过 `NANOCLAW_INSTANCE` 环境变量实现资源隔离和命名空间管理，为大规模部署提供了便利。此外，PR #987 解决了长期运行实例的会话上下文丢失问题，PR #967 进一步提升了卡顿会话和 Runner Turn 的处理可靠性。

---

## 今日亮点

### 成本优化聚焦：多维度 token 节省方案提出

今日，`qwibitai/nanoclaw` 项目在 **Token 成本优化**方面迎来了集中爆发。由贡献者 @gm4leejun-stack 提出的三个新 Issue (#984, #985, #986) 和一个追踪 Issue (#983) 详细阐述了如何精细化管理和降低 LLM 的 token 消耗。

*   **#984 "Feature: Inline Compaction — reduce token cost from growing conversation history"** 提出了一种创新的“Inline Compaction”机制，旨在通过在现有 API 调用中嵌入压缩指令，避免额外 token 消耗来概括对话历史，从而降低成本。
*   **#985 "Feature: Response length control — reduce output token waste"** 聚焦于输出 token 的成本，建议通过注入软约束指令来引导 Claude 生成更简洁、更有价值的回复，减少因冗余信息产生的 token 浪费。
*   **#986 "Feature: CLAUDE.md auto-compression — prevent system prompt bloat"** 针对 `CLAUDE.md` 文件随时间膨胀导致系统提示成本增加的问题，提出在读取文件时自动检测并压缩，以控制固定调用成本。
*   **#983 "Token Optimization: Smart Token Cost Reduction (Tracking Issue)"** 则将以上机制整合为一个整体的 token 优化策略，强调“能纯计算就不调 LLM，调 LLM 就严格评估 token 成本”的核心原则。

同时，Pull Request **#988 "feat: smart token optimization (inline compaction + length control + CLAUDE.md compression)"** 已经实现了上述多个优化机制，包括 Inline Compaction（对话历史 + Tool Results 压缩）、响应长度控制以及 CLAUDE.md 自动压缩。这项工作是针对 LLM 应用最直接的成本痛点，预示着 NanoClaw 在提升**经济效益**方面可能迎来重要突破。

### 功能扩展与集成深化

社区在**功能扩展**和**多渠道集成**方面也取得了显著进展：

*   **持久化语义内存（LanceDB）**：Pull Request **#979** 和 **#977** 共同引入了基于 LanceDB 的持久化语义内存支持。通过 `memory_store`, `memory_search`, `memory_delete`, `memory_count` 等 MCP 工具，Agent 能够拥有断点续传、跨会话学习的能力，极大增强了其智能性。
*   **多渠道集成**：
    *   Pull Request **#976** 和 **#975** 为容器 Agent 集成了**GitHub MCP 服务器**，允许 Agent 直接调用 GitHub API（如创建 Issue/Pull Request），提升了自动化能力。
    *   Pull Request **#966** 增加了对 **QQ 机器人**的支持，通过 WebSocket 连接，支持私聊和群聊，并处理长消息分块。
    *   Pull Request **#964** 增加了对 **Feishu/Lark** 渠道的支持，通过 `@larksuiteoapi/node-sdk` 实现，并兼容国际版和中国版。

### 提升运行效率与部署灵活性

*   **多实例运行支持**：Pull Request **#970** 引入了 `NANOCLAW_INSTANCE` 环境变量，使得在同一台机器上运行多个 NanoClaw 实例成为可能，通过区分共享资源（如容器名、日志文件、PID 文件等）来避免冲突，为**部署和管理**带来了更大的灵活性。
*   **会话稳定性与恢复**：Pull Request **#987** 解决了长期运行实例的会话上下文丢失问题，通过会话大小轮转和预死亡内存刷新，防止 Agent 在大数据集下失效。Pull Request **#967** 则提升了出现卡顿的会话和 Runner Turn 的处理可靠性。

## 社区焦点分析

今日社区的关注点主要集中在以下几个方面：

1.  **成本控制（Token Optimization）**：由 `gm4leejun-stack` 发起的一系列 Issue (#983, #984, #985, #986) 明确指向了 LLM 应用开发中最棘手的成本问题。这些提议的共性是**在不显著增加额外计算或 token 消耗的前提下，优化 token 使用效率**。这表明社区对 NanoClaw 在降低运营成本、提升 ROI 有着强烈期待。
2.  **功能增强与扩展性（New Features & Integrations）**：涌现的 Pull Request（如 #979, #976, #966, #964）显示了社区对 NanoClaw 能力边界的不断拓展。新增的**持久化内存**、**GitHub 集成**以及**多样化的通讯渠道支持**（QQ, Feishu/Lark）极大地丰富了 NanoClaw 的应用场景，使其能够融入更多现有工作流。
3.  **系统稳定性与部署（Stability & Deployment）**：PRs #970, #987, #967 等关注点，解决了**多实例部署**、**长时运行会话的稳定性**以及**卡顿恢复**等关键问题。这表明社区不仅追求功能的丰富，也高度重视系统的健壮性和易用性，为生产环境的应用打下坚实基础。

## 持续讨论与近期更新

*   **#973 "Setup takes ages"**：用户报告设置过程缓慢，并对使用 `.json` 文件而非 Claude Code 的复杂性提出疑问。该 Bug 仍处于 Open 状态，显示了在简化用户入门体验方面的潜在改进空间。
*   **#853 "Support ANTHROPIC_AUTH_TOKEN in setup verification"** (本周更新)：关于设置验证不兼容 `ANTHROPIC_AUTH_TOKEN` 的 Bug，已在本周有更新，显示了对认证方式兼容性的持续关注。
*   **#958 "Can not get a response from NanoClaw"** (本周更新)：用户遇到了安装设置后无法获得回复的问题，尽管 Claude Code 报告一切正常。此 High Priority Bug 亟待解决，关乎用户使用体验。
*   **#865 "Using containers alone doesn't make you more secure"** (近3天更新)：关于容器安全性的讨论，强调了在某些场景下不应完全信任容器，需要进行安全加固。此 Enhancement Issue 引发了对 NanoClaw 安全架构的深入思考。

---

## 参考链接

### Issues

*   [#984 "Feature: Inline Compaction — reduce token cost from growing conversation history"](https://github.com/qwibitai/nanoclaw/issues/984)
*   [#985 "Feature: Response length control — reduce output token waste"](https://github.com/qwibitai/nanoclaw/issues/985)
*   [#986 "Feature: CLAUDE.md auto-compression — prevent system prompt bloat"](https://github.com/qwibitai/nanoclaw/issues/986)
*   [#983 "Token Optimization: Smart Token Cost Reduction (Tracking Issue)"](https://github.com/qwibitai/nanoclaw/issues/983)
*   [#982 "Token Optimization: CLAUDE.md Auto-Compression (Mechanism 3)"](https://github.com/qwibitai/nanoclaw/issues/982)
*   [#981 "Token Optimization: Response Length Control (Mechanism 2)"](https://github.com/qwibitai/nanoclaw/issues/981)
*   [#980 "Token Optimization: Inline Compaction (Mechanism 1)"](https://github.com/qwibitai/nanoclaw/issues/980)
*   [#973 "Setup takes ages"](https://github.com/qwibitai/nanoclaw/issues/973)
*   [#853 "Support ANTHROPIC_AUTH_TOKEN in setup verification"](https://github.com/qwibitai/nanoclaw/issues/853)
*   [#958 "Can not get a response from NanoClaw"](https://github.com/qwibitai/nanoclaw/issues/958)
*   [#865 "Using containers alone doesn't make you more secure"](https://github.com/qwibitai/nanoclaw/issues/865)
*   [#709 "Risk of secret env var management behavior diverging between the container allowlist and the Bash subprocess blocklist"](https://github.com/qwibitai/nanoclaw/issues/709)
*   [#732 "Send message after agent completes, not during streaming"](https://github.com/qwibitai/nanoclaw/issues/732)
*   [#960 "MCP env vars not passed to containers after credential proxy migration"](https://github.com/qwibitai/nanoclaw/issues/960)
*   [#957 "Suggest supporting Podman as an alternative to Docker"](https://github.com/qwibitai/nanoclaw/issues/957)
*   [#955 "🧹 ByeByeClaw — Clean uninstall tool for NanoClaw and Claw-family tools"](https://github.com/qwibitai/nanoclaw/issues/955)

### Pull Requests

*   [#988 "feat: smart token optimization (inline compaction + length control + CLAUDE.md compression)"](https://github.com/qwibitai/nanoclaw/pull/988)
*   [#987 "feat: session size rotation and pre-death memory flush"](https://github.com/qwibitai/nanoclaw/pull/987)
*   [#979 "feat: add lancedb-memory skill"](https://github.com/qwibitai/nanoclaw/pull/979)
*   [#978 "fix: sync agent-runner source to existing session directories"](https://github.com/qwibitai/nanoclaw/pull/978)
*   [#977 "feat: semantic memory with LanceDB + Gemini embeddings"](https://github.com/qwibitai/nanoclaw/pull/977)
*   [#976 "feat: add GitHub MCP server to container agents"](https://github.com/qwibitai/nanoclaw/pull/976)
*   [#970 "feat: support multiple instances on the same machine"](https://github.com/qwibitai/nanoclaw/pull/970)
*   [#975 "feat: add GitHub MCP server to container agents"](https://github.com/qwibitai/nanoclaw/pull/975)
*   [#971 "feat: admin command interception + /capabilities"](https://github.com/qwibitai/nanoclaw/pull/971)
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

</details>

<details>
<summary>PicoClaw — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 技术日报

**日期**: 2026-03-12 | **分组**: OpenClaw 生态系统

## 核心动态概览

今日，PicoClaw 生态系统中，**[v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)** 版本发布，带来了对 LongCat 模型提供商的支持，并在 Matrix 频道启用富文本消息。同时，社区活跃度依旧，多个 Issue 和 Pull Request 正在积极推进中。

### 1. **新版本发布：v0.2.2-nightly.20260312.6612ca09**
   - **亮点**:
     - 新增对 LongCat 模型提供商的支持 (`#1317`)。
     - 在 Matrix 频道启用了富文本消息 (`#1370`)。
     - 修复了在直接代理模式下 MCP 的初始化问题 (`#1361`)。
     - 支持在 `allow_from` 环境变量中使用中文逗号分隔符 (`#1301`)。
   - 这一夜间构建版本为用户提供了最新的功能和稳定性改进。

### 2. **社区热点关注：Agent 与 Provider 的稳定性和功能增强**
   - **Agent 核心重构**: `#1218` "[Agent refactor]what an Agent is" 正在定义 Agent 相关的核心文件 (`SOUL.md` 和 `AGENT.md`)，旨在更清晰地界定 Agent 的身份和行为。
   - **Provider 兼容性与 Bug 修复**:
     - `#748` "[BUG] Groq API compatibility: tool call format error (tool_use_failed / invalid_request_error)" 持续跟进，Groq API 在处理工具调用格式时存在问题，社区正积极寻求解决方案。
     - `#1375` "[BUG] SSL certification problem for volcengine" 新建 Bug，指向 Volcengine 提供商的 SSL 证书问题。
     - `#1333` "[BUG]" 报告了 Mistral 模型在 Termux 环境下的 422 错误，已关闭但用户反馈表明问题可能仍需关注。

### 3. **Web UI 和配置更新**:
   - **UI Bug 修复**: `#1369` "新的web页面在编辑原始json的时候无法左右滑动" 和 `#1364` "[BUG] UI Bug: Raw JSON configuration textarea height collapses in Firefox" 均指向 Web UI 在处理原始 JSON 编辑时存在滑动和布局问题，相关 PRs (`#1386`) 正在解决。
   - **对话历史恢复**: `#1373` "[BUG]在web对话页面，每次点击对话项目都是默认显示新的对话。希望修改为默认显示上次的对话内容。" 这个问题受到了关注，相关 PR `#1385` 旨在恢复上次激活的聊天会话。

---

## 详细动态

### 新版本发布
- **[v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)** (2026-03-12):
  - 亮点包括：为 Matrix 频道启用富文本消息 (`#1370`)，新增 LongCat 模型提供商支持 (`#1317`)，修复了 `direct agent` 模式下的 MCP 初始化问题 (`#1361`)，以及支持中文逗号分隔符 (`#1301`)。
- **[v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)** (2026-03-11):
  - 此版本为 [v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09) 的稳定版，包含了 `#1363` 中对 Web 设置中 `exec allow_remote` 配置的支持。

### Issues (近期更新与新建)
- **持续讨论/更新**:
  - `#440` "Replace hard iteration limit with context-window bounding and loop detection" (21天前建立, 2026-03-12 更新): 社区正在讨论用更灵活的上下文窗口和循环检测替代硬编码的迭代限制，以支持更复杂的任务。
  - `#1218` "[Agent refactor]what an Agent is" (本周更新): 这是一个关于 Agent 内部机制重构的关键 Issue，旨在明确 Agent 的定义文件。
  - `#1287` "[BUG] Tool calling fails" (3天前建立, 2026-03-11 更新): 此 Bug 报告了工具调用失败的问题，错误信息显示 JSON 解析失败，可能与 Provider 的响应格式有关。
  - `#748` "[BUG] Groq API compatibility: tool call format error (tool_use_failed / invalid_request_error)" (15天前建立, 2026-03-11 更新): Groq API 在处理工具调用时出现格式错误，影响了该 Provider 的正常使用。
  - `#1316` "[Agent refactor] Event-driven agent loop with hooks, interrupts, and steering" (3天前建立, 2026-03-11 更新): 提议将 Agent Loop 改为事件驱动模型，以提高可观测性、可 Hook 和可中断性。
  - `#1151` "tui: PHI tab config writes race with other tabs, HomePath unescaped in shell commands" (本周更新): 高优先级 Bug，涉及 TUI 配置写入时的竞态条件及 HomePath 在 Shell 命令中的转义问题。
  - `#175` "Feature Request: Engram as persistent memory backend" (25天前建立, 2026-03-11 更新): 提议使用 Engram 作为持久化内存后端，以克服当前文件型内存的搜索和性能限制。
  - `#1098` "[Feature] Telegram realtime stream response" (7天前建立, 2026-03-11 更新): 寻求在 Telegram 频道实现实时流式响应，以提供更好的用户体验。

- **[🆕 新建]**:
  - `#1375` "[BUG] SSL certification problem for volcengine" (2026-03-11): Volcengine 提供商出现 SSL 证书问题。
  - `#1373` "[BUG]在web对话页面，每次点击对话项目都是默认显示新的对话。希望修改为默认显示上次的对话内容。" (2026-03-11): Web 对话页面点击项目时未显示上次的对话内容。
  - `#1372` "[Feature]openim plugin?" (2026-03-11): 讨论引入 OpenIM 插件的可能性。
  - `#1371` "[Feature] docker 镜像应该增加 nodejs 能力，比如nodejs 22" (2026-03-11): 提议增强 Docker 镜像的 Node.js 能力。
  - `#1369` "新的web页面在编辑原始json的时候无法左右滑动" (2026-03-11): Web UI 在编辑原始 JSON 时无法左右滑动。
  - `#1364` "[BUG] UI Bug: Raw JSON configuration textarea height collapses in Firefox" (2026-03-11): Firefox 浏览器下 Raw JSON 配置区域高度异常。
  - `#1350` "[BUG] launcher docker image manifest not available" (2026-03-11): Docker Compose 启动 Launcher Profile 时无法找到镜像 Manifest。
  - `#1348` "windows电脑上源码启动失败" (2026-03-11): Windows 平台源码启动失败，存在包引入错误。
  - `#1347` "[Feature] Implement GitHub Device Code Authentication for GitHub Copilot Integration" (2026-03-11): 提议实现 GitHub 设备代码认证，以支持 GitHub Copilot 集成。

### Pull Requests (近期更新与新建)
- **[🆕 新建/近期更新]**:
  - `#1394` "docs: update wechat qrcode" (2026-03-12): 更新微信二维码的文档。
  - `#1351` "feat: add Zalo channel and docs" (2026-03-11): 添加 Zalo 频道支持，并更新相应文档。
  - `#1388` "Remove stale `TOOLS.md` references from all README translations and migration code." (2026-03-11): 清理不再使用的 `TOOLS.md` 引用。
  - `#1392` "fix(channels): stop stale typing loops on overwrite" (2026-03-12): 修复频道中重复触发的 typing 指示器卡死问题。
  - `#1391` "fix(config): start model round robin from the first match" (2026-03-12): 修复了模型轮询选择从第二个匹配项开始的问题。
  - `#1390` "fix(telegram): stop typing indicator when LLM fails or hangs" (2026-03-12): 当 LLM 失败或挂起时，停止 Telegram 的 typing 指示。
  - `#1389` "feat(skills): implement per-agent SkillsFilter" (2026-03-11): 为每个 Agent 实现独立的 SkillsFilter，可进行精细化控制。
  - `#1332` "feat(tool): debug tool usage via channels" (2026-03-10): 通过频道调试工具使用，提供实时反馈。
  - `#1385` "fix(web): restore the last active chat session" (2026-03-11): 修复 Web UI 中恢复上次激活的聊天会话。
  - `#1386` "fix(web): allow horizontal scrolling in raw json editor" (2026-03-11): 修复 Web UI 原始 JSON 编辑器不支持水平滚动的问题。
  - `#1384` "fix(exec): ignore URL segments in workspace guard" (2026-03-11): 修复了 Workspace Guard 错误处理 URL 片段的问题。
  - `#1383` "feat: add request logging and statistics features" (2026-03-11): 添加请求日志记录和统计功能。
  - `#1376` "fix: suppress banner in completion and redirected output" (2026-03-11): 修正了在完成和重定向输出时隐藏 banner 的问题。
  - `#1380` "fix: strip leaked thinking tags from openai compat content" (2026-03-11): 清理 OpenAI 兼容内容中泄露的“思考”标签。
  - `#1351` "feat: add Zalo channel and docs" (2026-03-11): 新增 Zalo 频道支持。
  - `#1295` "Implement the latest long-connection mode for the WeCom AI Bot." (2026-03-10): 为微信企业号 AI Bot 实现最新的长连接模式。

---

## 今日关注

1.  **[v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)**: 最新夜间构建版本发布，重点是 LongCat 模型支持和 Matrix 富文本消息，预示着多模型接入和更丰富交互方式的进展。
2.  **Agent 核心重构与 Agent Loop 优化**: `#1218` 和 `#1316` 的持续推进，表明 PicoClaw 在 Agent 核心逻辑的健壮性和可扩展性上投入了大量精力，旨在打造更智能、更易于维护的 Agent 系统。
3.  **Web UI Bug 修复与用户体验提升**: `#1373` 和 `#1369`/`#1364` 等 Issues 和 PRs (`#1385`, `#1386`) 的出现，显示了社区对 PicoClaw Web 界面的稳定性和易用性的高度关注，特别是对话历史的恢复和 JSON 编辑器的交互体验。

---

## 参考链接

*   [v0.2.2-nightly.20260312.6612ca09](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)
*   [v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)
*   [#1370](https://github.com/sipeed/picoclaw/issues/1370)
*   [#1317](https://github.com/sipeed/picoclaw/issues/1317)
*   [#1361](https://github.com/sipeed/picoclaw/issues/1361)
*   [#1301](https://github.com/sipeed/picoclaw/issues/1301)
*   [#1363](https://github.com/sipeed/picoclaw/issues/1363)
*   [#1218](https://github.com/sipeed/picoclaw/issues/1218)
*   [#748](https://github.com/sipeed/picoclaw/issues/748)
*   [#1375](https://github.com/sipeed/picoclaw/issues/1375)
*   [#1333](https://github.com/sipeed/picoclaw/issues/1333)
*   [#1369](https://github.com/sipeed/picoclaw/issues/1369)
*   [#1364](https://github.com/sipeed/picoclaw/issues/1364)
*   [#1373](https://github.com/sipeed/picoclaw/issues/1373)
*   [#440](https://github.com/sipeed/picoclaw/issues/440)
*   [#1316](https://github.com/sipeed/picoclaw/issues/1316)
*   [#1151](https://github.com/sipeed/picoclaw/issues/1151)
*   [#175](https://github.com/sipeed/picoclaw/issues/175)
*   [#1098](https://github.com/sipeed/picoclaw/issues/1098)
*   [#1372](https://github.com/sipeed/picoclaw/issues/1372)
*   [#1371](https://github.com/sipeed/picoclaw/issues/1371)
*   [#1350](https://github.com/sipeed/picoclaw/issues/1350)
*   [#1348](https://github.com/sipeed/picoclaw/issues/1348)
*   [#1347](https://github.com/sipeed/picoclaw/issues/1347)
*   [#1394](https://github.com/sipeed/picoclaw/pull/1394)
*   [#1351](https://github.com/sipeed/picoclaw/pull/1351)
*   [#1388](https://github.com/sipeed/picoclaw/pull/1388)
*   [#1392](https://github.com/sipeed/picoclaw/pull/1392)
*   [#1391](https://github.com/sipeed/picoclaw/pull/1391)
*   [#1390](https://github.com/sipeed/picoclaw/pull/1390)
*   [#1389](https://github.com/sipeed/picoclaw/pull/1389)
*   [#1332](https://github.com/sipeed/picoclaw/pull/1332)
*   [#1385](https://github.com/sipeed/picoclaw/pull/1385)
*   [#1386](https://github.com/sipeed/picoclaw/pull/1386)
*   [#1384](https://github.com/sipeed/picoclaw/pull/1384)
*   [#1383](https://github.com/sipeed/picoclaw/pull/1383)
*   [#1376](https://github.com/sipeed/picoclaw/pull/137

</details>

<details>
<summary>LobsterAI — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI (netease-youdao/LobsterAI) 技术日报

**日期:** 2026-03-12 | **分组:** OpenClaw 生态系统

## 概览

本日，LobsterAI 发布了 v0.2.3 版本，主要在主界面附件支持多文件选择、修复 IM 平台超时问题、以及优化了 Mac 端 Node.js 环境。社区用户围绕记忆能力、Linux 版本支持、Bash 执行效率、Docker 部署、字符串处理 Bug、图片读取卡死、更新设置重置、以及 Agent SDK 版本更新等问题展开了持续讨论。同时，新增了对企微、QQ、钉钉机器人集成 OpenCLaw 的支持，以及多项功能性 PR，显示出项目在生态整合和体验优化方面的积极进展。

## 版本发布亮点

### v0.2.3 版本发布

LobsterAI 今日发布了 v0.2.3 版本，本次更新包含了多项改进和 Bug 修复。其中，**主界面附件支持多文件选择** 的功能提升了用户在大批量文件处理时的效率。此外，PR [#375](https://github.com/netease-youdao/LobsterAI/pull/375) 修复了 **Mac 端 Node.js 环境污染的问题**，增强了跨平台兼容性。

## 社区关注焦点

### 热门 Issues / 持续讨论

*   **[#186](https://github.com/netease-youdao/LobsterAI/issues/186) 记忆能力差的反馈**：用户反馈 LobsterAI 的记忆能力不佳，即使配置了记忆选项也效果甚微，与原版 OpenCLaw 相比存在差距。此问题已存在 **12天**，并有 **2条评论**，是社区持续关注的重要用户体验问题。
*   **[#350](https://github.com/netease-youdao/LobsterAI/issues/350) Bash 执行效率低**：用户报告称 LobsterAI 在执行 Bash 命令时速度非常慢，等待时间长，严重影响使用体验。该 Issue **近3天** 更新，已有 **3条评论**。
*   **[#344](https://github.com/netease-youdao/LobsterAI/issues/344) 字符串中自动加空格的 Bug**：用户反馈当字符串包含“中文+数字”时，LobsterAI 会自动在中间添加空格，即使指出是错误也无法修正，该 Bug 阻碍了用户当前替代 OpenCLaw 的计划。此 Issue **近3天** 更新，已有 **5条评论**，表明这是一个亟待解决的关键 Bug。

### 新建 Issues (过去24小时)

*   **[#386](https://github.com/netease-youdao/LobsterAI/issues/386) 希望支持 Docker 容器部署**：用户提出希望 LobsterAI 支持 Docker 部署，这将极大地简化部署和管理流程。
*   **[#382](https://github.com/netease-youdao/LobsterAI/issues/382) 更新时设置被重置**：用户抱怨更新后所有设置都需要重新填写，影响了使用便利性。
*   **[#384](https://github.com/netease-youdao/LobsterAI/issues/384) 更新 Claude Agent SDK 以增加 Agent Teams 功能**：用户建议更新 SDK 以支持 Agent Teams 功能，进一步扩展 Agent 的协作能力。
*   **[#377](https://github.com/netease-youdao/LobsterAI/issues/377) 添加环境变量配置项**：用户请求添加环境变量配置功能，以支持 AI 调用 Skill 时加载需要 API 密钥等敏感信息的脚本。

### 热门 Pull Requests / 新活跃 PRs

*   **[#376](https://github.com/netease-youdao/LobsterAI/pull/376) 添加每小时定时任务模式**：该 PR 引入了每小时执行一次的任务调度功能，允许用户精确到分钟进行设置。
*   **[#380](https://github.com/netease-youdao/LobsterAI/pull/380) 支持自定义 URI 协议的 Markdown 链接**：此 PR 允许通过自定义 URI 协议（如 `obsidian://`）从 Markdown 链接打开外部应用程序，解决了之前 URI 被过滤的问题。
*   **[#383](https://github.com/netease-youdao/LobsterAI/pull/383)**、**[#381](https://github.com/netease-youdao/LobsterAI/pull/381)**、**[#378](https://github.com/netease-youdao/LobsterAI/pull/378)**：这三个 PR 的目标一致，即为 **企微、QQ、钉钉机器人添加 OpenCLaw 支持**，显示出项目在多平台集成方面的显著努力。
*   **[#374](https://github.com/netease-youdao/LobsterAI/pull/374)**、**[#373](https://github.com/netease-youdao/LobsterAI/pull/373)**、**[#372](https://github.com/netease-youdao/LobsterAI/pull/372)**：这三个 PR 共同致力于 **异步消息处理，以防止 IM 平台超时**，并增加了任务进度更新等功能，旨在提升即时通讯平台上的用户体验。

## 今日最值得关注的动态

1.  **v0.2.3 版本如期发布，提升用户体验：** 新版本加入了多文件选择功能，并修复了 Mac 环境的兼容性问题，这些都是用户非常看好的改进。
2.  **多平台机器人集成进展迅速：** 今日新增了多个 PR（[#383](https://github.com/netease-youdao/LobsterAI/pull/383), [#381](https://github.com/netease-youdao/LobsterAI/pull/381), [#378](https://github.com/netease-youdao/LobsterAI/pull/378)），表明项目正积极将其AI能力集成至企微、QQ、钉钉等主流 IM 工具，这是其生态扩展的重要一步。
3.  **用户体验痛点持续被提及：** 类似 **[#344](https://github.com/netease-youdao/LobsterAI/issues/344)** （字符串加空格 Bug）和 **[#350](https://github.com/netease-youdao/LobsterAI/issues/350)** （Bash 执行效率）等 Issues 反映的用户反馈，虽然是旧 Issue，但其高讨论度和对核心功能的影响，显示了社区对这些问题的迫切关注。

---

## 参考链接

*   **Releases:**
    *   [v0.2.3](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)
*   **Issues:**
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
*   **Pull Requests:**
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

[netease-youdao/LobsterAI GitHub 地址](https://github.com/netease-youdao/LobsterAI)

</details>

<details>
<summary>TinyClaw — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw (TinyAGI/tinyclaw) 项目日报

**日期**: 2026-03-12 | **分组**: OpenClaw 生态系统

## 总体概览

今日，TinyClaw 项目迎来了一次 **v0.0.10** 版本更新，本次更新在日志显示、Home 目录检测、Telegram 集成及任务类型定义等方面进行了优化。同时，项目代码库中的重大重构（如 rebrand 为 TinyAGI、拆分为 npm workspaces）和功能性 PRs 持续推进，显示出项目在架构演进和功能完善上的活跃度。社区在 TinyOffice 用户体验、新功能集成（如本地模型支持、Onboarding）以及安装卸载工具等方面也有持续的关注和贡献。

## 版本亮点

*   **v0.0.10 "v0.0.10" 发布**: 本次更新旨在提升用户体验和系统稳定性。主要亮点包括：
    *   移除了独立的日志面板，简化了日志显示。
    *   优化了 `TINYCLAW_HOME` 的检测逻辑，使其更加健壮。
    *   延长了 Telegram Watchdog 的轮询超时时间，增强了消息处理的可靠性。
    *   将任务类型从核心模块移至 `server/routes/tasks.ts`，提升了模块化程度。
    *   更新了 README 文件，增加了 `tinyclaw office` 命令的说明。

    [v0.0.10](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10)

## 社区关注热点 (Issues & PRs)

### 持续推进的架构演进与优化

PR [#191](https://github.com/TinyAGI/tinyclaw/pull/191) 正在进行一项重要的**重品牌 (rebrand)** 工作，将项目名称从 "TinyClaw" 更改为 "TinyAGI"。这项工作覆盖了代码库的方方面面，包括包名、环境变量、CLI 命令、配置目录和文档，预示着项目可能正迈向更广泛的 AI 平台愿景。

另一项重大的重构 PR [#186](https://github.com/TinyAGI/tinyclaw/pull/186) 正在将原先的单体结构拆分为基于 npm workspaces 的 monorepo，并引入 SQLite 作为队列存储。这一举措极大地提升了项目的模块化程度，并简化了后台依赖，是项目向更健壮、更易于维护的架构迈进的重要一步。

PR [#190](https://github.com/TinyAGI/tinyclaw/pull/190) 进一步优化了团队通信和响应流，将团队协调逻辑移至 `@tinyclaw/teams` 包，并确保响应能够实时流式传输给用户，这是提升多 Agent 协作体验的关键改进。

### TinyOffice 用户体验的持续打磨

社区对 TinyOffice 的用户体验提出了多项改进建议和需求。新建 Issues **[#194](https://github.com/TinyAGI/tinyclaw/issues/194)** 和 **[#192](https://github.com/TinyAGI/tinyclaw/issues/192)** 分别提出了为 TinyOffice 添加**运行时控制面板**（用于控制 daemon, queue, heartbeat, channels）和**改进用户界面 (UX)** 的需求，特别是关于聊天记录的持久化和重新打开。此外，Issue **[#193](https://github.com/TinyAGI/tinyclaw/issues/193)** 则指出需要为 TinyOffice 添加**首次运行的 Web Onboarding 流程**，以简化新用户的初始设置。这些 Issue 反映了社区希望通过 Web 界面获得更全面、更便捷的 TinyClaw 管理和使用体验。

PR [#183](https://github.com/TinyAGI/tinyclaw/pull/183) 移除了冗余的 `message_received` 事件，简化了 Office UI，只显示用户输入和 Agent 回应，提升了界面的清爽度。PR [#182](https://github.com/TinyAGI/tinyclaw/pull/182) 则实现了当任务移至“进行中”（In Progress）列时**自动触发 Agent** 的功能，减少了用户的额外操作。

### 模型支持与集成能力的拓展

尽管已有多项模型支持的 Issue 被关闭，但社区对扩展模型Provider的需求依然存在。例如，Issue **[#41](https://github.com/TinyAGI/tinyclaw/issues/41)** （已关闭）曾提出添加更多 Provider，其中包含了对 OpenAI 兼容 Endpoint 的支持，以便为不同 Agent 分配不同模型。Issue **[#111](https://github.com/TinyAGI/tinyclaw/issues/111)** （已关闭）则建议支持 Ollama 和本地模型，并允许添加 Claude API Key。

Pull Request **[#143](https://github.com/TinyAGI/tinyclaw/pull/143)** 成功地为项目添加了 Avian AI Provider，该 Provider 提供 OpenAI 兼容的 API，进一步丰富了项目的模型选择。

## 本日最值得关注的动态

1.  **项目重品牌为 TinyAGI 及重大架构重构**: PR **[#191](https://github.com/TinyAGI/tinyclaw/pull/191)** 和 PR **[#186](https://github.com/TinyAGI/tinyclaw/pull/186)** 分别标记了项目在品牌形象和技术架构上的重要转型。这预示着 TinyClaw 正在朝着一个更广泛、更模块化、更易于维护的 AI 平台发展。
2.  **TinyOffice 用户体验的密集改进**: 社区对 TinyOffice 的关注度很高，涌现出多个关于运行时控制面板、UX 优化和首次运行 Onboarding 的新建 Issue，如 **[#194](https://github.com/TinyAGI/tinyclaw/issues/194)**, **[#192](https://github.com/TinyAGI/tinyclaw/issues/192)**, **[#193](https://github.com/TinyAGI/tinyclaw/issues/193)**。同时，PR **[#183](https://github.com/TinyAGI/tinyclaw/pull/183)** 和 PR **[#182](https://github.com/TinyAGI/tinyclaw/pull/182)** 也在持续推进 TinyOffice 的功能和易用性。
3.  **v0.0.10 版本发布**: 此次版本更新虽然是小版本，但包含了一些实用的优化，如日志简化、Home 目录检测完善以及 Telegram 集成增强，[v0.0.10](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10) 的发布标志着项目开发节奏的稳健。

---

## 参考链接

*   [v0.0.10](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10)
*   [#194](https://github.com/TinyAGI/tinyclaw/issues/194)
*   [#192](https://github.com/TinyAGI/tinyclaw/issues/192)
*   [#193](https://github.com/TinyAGI/tinyclaw/issues/193)
*   [#111](https://github.com/TinyAGI/tinyclaw/issues/111)
*   [#91](https://github.com/TinyAGI/tinyclaw/issues/91)
*   [#41](https://github.com/TinyAGI/tinyclaw/issues/41)
*   [#103](https://github.com/TinyAGI/tinyclaw/issues/103)
*   [#87](https://github.com/TinyAGI/tinyclaw/issues/87)
*   [#66](https://github.com/TinyAGI/tinyclaw/issues/66)
*   [#63](https://github.com/TinyAGI/tinyclaw/issues/63)
*   [#118](https://github.com/TinyAGI/tinyclaw/issues/118)
*   [#189](https://github.com/TinyAGI/tinyclaw/issues/189)
*   [#191](https://github.com/TinyAGI/tinyclaw/pull/191)
*   [#190](https://github.com/TinyAGI/tinyclaw/pull/190)
*   [#183](https://github.com/TinyAGI/tinyclaw/pull/183)
*   [#182](https://github.com/TinyAGI/tinyclaw/pull/182)
*   [#185](https://github.com/TinyAGI/tinyclaw/pull/185)
*   [#143](https://github.com/TinyAGI/tinyclaw/pull/143)
*   [#186](https://github.com/TinyAGI/tinyclaw/pull/186)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-12T03:03:15.376Z