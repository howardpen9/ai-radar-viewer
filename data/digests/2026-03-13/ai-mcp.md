# 🔌 MCP 生态系统 日报 — 2026-03-13

## 横向对比

# MCP 生态系统 横向对比分析
**日期**: 2026-03-13

## 1. 生态全景

今日 MCP 生态系统整体呈现出持续的活跃度，尤其在 **核心协议规范的演进**、**SDK 的健壮性与安全性提升**，以及 **第三方服务器的集成与生态扩展** 方面。社区积极推动新标准（如工具授权 SEP-2385）的落地，并通过大量的 SDK 修复与功能增强，显著提升了开发体验和系统稳定性。同时，MCP Inspector 和 Registry 项目也在不断完善其在认证、安全以及生态兼容性方面的工作，共同构筑一个更强大、更开放的 AI Agent 交互协议。

## 2. 活跃度对比

| 项目名称                                        | 今日新增 Issues | 今日新增 PRs | 总 Issues | 总 PRs | 本日活跃度 |
| :---------------------------------------------- | :-------------- | :----------- | :-------- | :----- | :--------- |
| [MCP 规范](https://github.com/modelcontextprotocol/modelcontextprotocol) | 1               | 6            | 2453      | 2391   | **高**     |
| [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) | 2               | 19           | 1675      | 1675   | **极高**   |
| [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) | 2               | 12           | 2290      | 2290   | **高**     |
| [MCP 官方 Servers](https://github.com/modelcontextprotocol/servers) | 3               | 9            | 3540      | 3540   | **高**     |
| [MCP Inspector](https://github.com/modelcontextprotocol/inspector) | 2               | 1            | 1143      | 1135   | **中**     |
| [MCP Registry](https://github.com/modelcontextprotocol/registry) | 1               | 5            | 1057      | 1057   | **中**     |

*注：当日新增 Issues/PRs 数量基于本日报中直接提及或新近活动的项目。总 Issues/PRs 数量为本报告中引用的最终编号，可能不完全代表仓库内的总数。活跃度评级为基于当日报告内容的主观评估。*

## 3. 共同趋势

*   **提升安全性**: Python SDK 默认启用 DNS 重绑定防护 ([#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287))，Inspector 修复 Bearer Token 泄露 ([PR #1135](https://github.com/modelcontextprotocol/inspector/pull/1135))， đều phản ánh nỗ lực chung trong việc tăng cường bảo mật cho hệ sinh thái MCP.
*   **增强 SDK 健壮性与易用性**: TypeScript SDK 修复了 Zod Schema 兼容性问题 ([PR #1675](https://github.com/modelcontextprotocol/typescript-sdk/pull/1675) & [#1667](https://github.com/modelcontextprotocol/typescript-sdk/pull/1667))，Python SDK 优化了 Streamable HTTP 传输 ([PR #2283](https://github.com/modelcontextprotocol/python-sdk/pull/2283) & [#2282](https://github.com/modelcontextprotocol/python-sdk/pull/2282))，Protocol 规范新增文件输入支持 ([PR #2356](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356))，这些都表明社区在不断努力使 SDK 更加稳定、易于集成。
*   **扩大生态兼容性**: MCP 官方 Servers 集成了多个第三方服务（如 DefiLlama, Pyth ([#3529](https://github.com/modelcontextprotocol/servers/pull/3529), [#3532](https://github.com/modelcontextprotocol/servers/pull/3532))), Registry 项目考虑支持 Rust Crates.io ([#1055](https://github.com/modelcontextprotocol/registry/issues/1055)), 均指向扩展 MCP 生态系统的开放性和广泛支持。

## 4. 值得关注

1.  **SEP-2385: Tool Auth Manifest (TAM) 提案发布** ([#2385](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2385)): 这一新提案是 MCP 在工具集成和安全性方面的重要进展，为服务器提供了一个声明式的授权机制，有望成为未来工具调用安全性的关键。
2.  **Python SDK 默认启用 DNS 重绑定防护** ([#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287)): 识别并修复默认配置下的安全漏洞是保障用户安全的重要一步，此举动显著增强了 Python SDK 的安全性。
3.  **AI Agent 间通信 (`mingle-mcp`) 的初步探讨** ([#3538](https://github.com/modelcontextprotocol/servers/issues/3538)): MCP 官方 Servers 项目中关于 `mingle-mcp` 的讨论，预示着 MCP 生态正朝着支持更复杂的 Agent 协作和直接通信的方向发展，这是未来 AI Agent 互联的关键方向。

## 各工具详细报告

<details>
<summary>MCP 规范 — <a href="https://github.com/modelcontextprotocol/modelcontextprotocol">modelcontextprotocol/modelcontextprotocol</a></summary>

# MCP 规范 (modelcontextprotocol/modelcontextprotocol) 技术日报

**日期:** 2026-03-13 | **分组:** MCP 生态系统

## 核心动态

今日 MCP 生态系统最值得关注的动态包括：

1.  **SEP-2385: Tool Auth Manifest (TAM) 提案发布**：由 @lececo 提交的 PR [#2385](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2385) 提议引入“工具授权清单 (Tool Authorization Manifest, TAM)”，用于为 MCP 服务器能力模型添加一个最小化的、机器可读的声明，规定每个工具函数所需的授权。这标志着 MCP 在工具集成和安全性方面迈出了重要一步。
2.  **多项 SEP 草案更新与推进**：
    *   SEP-2322: Multi Round-Trip Requests (MRTR) PR [#2322](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2322) 在近期得到了更新，显示其正被纳入交通工作组的讨论与规划中。
    *   SEP-2339: Task Continuity PR [#2339](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2339) 也获得了近期更新，旨在解决现有任务流程中的模糊性，并与 MRTR 提案兼容。
    *   SEP-2356: File input support for tools and elicitation PR [#2356](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356) 提交了对工具和自动提示的声明式文件输入支持，允许服务器指定客户端应如何渲染文件选择器，是关键的输入处理改进。
3.  **博文与文档内容丰富**：
    *   PR [#2390](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2390) 添加了博客内容，启用了基于 Git 的 `dateModified` 用于 JSON-LD，并增加了 SEO Archetype。
    *   PR [#2389](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2389) 新增了一篇博客，对比了 MCP、CLI 和 Agent Skills 的适用场景，有助于社区理解它们之间的关系和配合。
    *   PR [#2230](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2230) 正在草拟一篇关于工具注解的博文，旨在详细阐述其解决的问题和未来的发展方向。

## 社区关注点分析

*   **SEP 提案的活跃度**：本周有多项 SEP（Standards Track Proposal）相关的 PR 得到更新或新建，如 [#2385](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2385)（工具授权）、[#2322](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2322)（多轮请求）、[#2339](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2339)（任务连续性）以及 [#2356](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356)（文件输入）。这表明社区正积极推动 MCP 协议标准的演进，特别是在安全、传输效率和交互能力方面。
*   **开发者体验与易用性**：多篇博客的 PR（如 [#2390](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2390)、[#2389](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2389)、[#2230](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2230)）以及文档 PR（如 [#2264](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2264)、[#2375](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2375)）显示，社区非常重视通过易于理解的内容来推广和支持 MCP 的应用。特别是新增的开发语言示例（Go、Ruby）和对比性博文，有助于降低新用户的学习门槛。
*   **文件处理与传输能力**：PR [#1306](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1306)（已关闭，但建立于2025年8月）的讨论，以及今日新建的 PR [#2356](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356) 中对文件输入的明确支持，表明对模型上下文协议在处理和传输文件能力上的持续关注和改进。

## 其他动态

*   **新功能/改进提案**：
    *   PR [#2391](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2391) 正在 WIP 状态下添加 Spec Annotator 插件到 Claude Code marketplace，供早期测试。
*   **已关闭/合并**：
    *   PR [#2388](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2388) 修复了 `/lgtm` 命令的触发，更新了 slash-commands 的行为。
    *   PR [#2264](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2264) 为 build-server 文档添加了 Ruby SDK 示例。
    *   PR [#742](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/742) 规范了未检测到初始化时的 JSON 错误响应码 (-32080)。
    *   PR [#2375](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2375) 为 build-server 教程文档添加了 Go 语言示例。
*   **持续跟进**：
    *   SEP-1306: Binary Mode Elicitation for File Uploads [#1306](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1306) 已关闭，但其讨论内容（文件上传的二进制模式）可能已融入后续的提案或开发中。
    *   SEP-2148: MCP Contributor Ladder [#2148](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2148) 仍处于 `in-review` 和 `approved` 状态，表明对社区贡献者激励机制的建设正在进行。

---

## 参考链接

*   [modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol)
*   [#1306](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/1306)
*   [#2390](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2390)
*   [#2385](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2385)
*   [#2322](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2322)
*   [#2339](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2339)
*   [#2391](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2391)
*   [#2230](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2230)
*   [#2148](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2148)
*   [#2389](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2389)
*   [#2264](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2264)
*   [#2388](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2388)
*   [#2356](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356)
*   [#742](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/742)
*   [#2375](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2375)

</details>

<details>
<summary>MCP TypeScript SDK — <a href="https://github.com/modelcontextprotocol/typescript-sdk">modelcontextprotocol/typescript-sdk</a></summary>

# MCP TypeScript SDK 技术日报

**日期**: 2026-03-13
**加密货币生态**: MCP 生态系统

## 概览

MCP TypeScript SDK 在本周的活跃度依然很高，本日报涵盖了新近提交的 Issues 和 Pull Requests（PRs），重点关注了与工具注册、协议错误处理、OAuth 流程以及 Zod schema 兼容性相关的进展。社区当前关注的焦点主要集中在修复由 Zod schema 引入的工具注册和验证问题，以及提升协议的健壮性。

## 今日焦点

1.  **工具注册与 Schemas 兼容性修复**:
    *   PR [#1675](https://github.com/modelcontextprotocol/typescript-sdk/pull/1675) 旨在解决 Issue [#1643](https://github.com/modelcontextprotocol/typescript-sdk/issues/1643) 中提出的问题，即 `z.discriminatedUnion()` 作为 `inputSchema` 注册时，schema 信息被错误处理。该 PR 修复了 `z.toJSONSchema()` 在 `z.discriminatedUnion()` 上生成 schema 时缺少 `type: object` 的问题，确保了其符合 MCP 协议的要求。
    *   PR [#1667](https://github.com/modelcontextprotocol/typescript-sdk/pull/1667) 修复了当 `inputSchema` 为空 Zod 对象 (`z.object({})`) 时，生成的 JSON schema 缺少 `required: []` 字段的问题。此更改旨在提高与 OpenAI 等平台的兼容性，这些平台倾向于严格的 schema 验证。

2.  **协议健壮性与错误处理**:
    *   PR [#1674](https://github.com/modelcontextprotocol/typescript-sdk/pull/1674) 响应了 Issue [#1510](https://github.com/modelcontextprotocol/typescript-sdk/issues/1510)，它将调用不存在的工具时产生的协议错误（ProtocolError）现在会以 JSON-RPC Error 的形式返回，而非被错误地包装成 `CallToolResult.isError`。这提升了错误处理的一致性和准确性。
    *   PR [#1651](https://github.comu/modelcontextprotocol/typescript-sdk/pull/1651) 解决了 Issue [#1429](https://github.com/modelcontextprotocol/typescript-sdk/issues/1429)，通过引入 `ToolError` 类，实现了对工具处理程序中未捕获异常的内部错误详情进行净化，防止敏感信息（如堆栈跟踪）泄露给客户端。

3.  **OAuth 流程与功能增强**:
    *   PR [#1662](https://github.com/modelcontextprotocol/typescript-sdk/pull/1662) 增加了 `getAuthorizationCode()` 方法到 `OAuthClientProvider`，增强了对无头 (headless) OAuth 流程的支持，并解决了 Issue [#1370](https://github.com/modelcontextprotocol/typescript-sdk/issues/1370) 中 TODO 的部分。
    *   PR [#1669](https://github.com/modelcontextprotocol/typescript-sdk/pull/1669) 修复了在授权码交换令牌时，SDK 未能包含 `scope` 参数的问题，提高了与 Azure AD 等需要此参数的认证服务器的兼容性。

## 社区关注点 (Issues & PRs)

**热门 Issues**:

*   **Issue [#1643](https://github.com/modelcontextprotocol/typescript-sdk/issues/1643) "registerTool() silently drops inputSchema for z.discriminatedUnion() — normalizeObjectSchema only passes z.object()"** (本周): 这是一个关键的 Zod schema 兼容性问题，直接影响到带有复杂 schema 的工具注册。PR [#1675](https://github.com/modelcontextprotocol/typescript-sdk/pull/1675) 正在积极跟进。
*   **Issue [#1510](https://github.com/modelcontextprotocol/typescript-sdk/issues/1510) "Calling a nonexistent tool should trigger a JSON-RPC Error"** (31天前建立, 近期更新): 协议层面的错误处理是稳定性基础，PR [#1674](https://github.com/modelcontextprotocol/typescript-sdk/pull/1674) 正在解决此问题。
*   **Issue [#509](https://github.com/modelcontextprotocol/typescript-sdk/issues/509) "Bug Report: Tool Handlers Not Invoked with StdioServerTransport on macOS"** (299天前建立, 近期更新): 这是一个平台相关的 Bug 报告，显示了在特定环境下 `StdioServerTransport` 的问题，等待进一步关注。

**热门 PRs**:

*   **PR [#1675](https://github.com/modelcontextprotocol/typescript-sdk/pull/1675) "fix: ensure tool inputSchema includes type: object for discriminated unions"** (🆕 新建): 直接修复了 Issue [#1643](https://github.com/modelcontextprotocol/typescript-sdk/issues/1643)，是本周最受关注的修复之一。
*   **PR [#1674](https://github.com/modelcontextprotocol/typescript-sdk/pull/1674) "fix(server): return JSON-RPC errors for missing tools"** (🆕 新建): 响应了 Issue [#1510](https://github.com/modelcontextprotocol/typescript-sdk/issues/1510)，提升了协议错误处理。
*   **PR [#1662](https://github.com/modelcontextprotocol/typescript-sdk/pull/1662) "feat(client): add getAuthorizationCode() to OAuthClientProvider for headless OAuth flows"** (近3天): 拓展了 OAuth 功能，增加了对无头流程的支持。
*   **PR [#1668](https://github.com/modelcontextprotocol/typescript-sdk/pull/1668) "fix: add existingSessionId option to WebStandardStreamableHTTPServerTransport for multi-node session hydration"** (🆕 新建): 针对多节点部署场景，提升了会话管理的灵活性。

## 版本动态

*   **没有新版本发布**。

## 参考链接

*   [modelcontextprotocol/typescript-sdk GitHub 仓库](https://github.com/modelcontextprotocol/typescript-sdk)
*   **Issues**:
    *   [#1643 "registerTool() silently drops inputSchema for z.discriminatedUnion() — normalizeObjectSchema only passes z.object()"](https://github.com/modelcontextprotocol/typescript-sdk/issues/1643)
    *   [#1510 "Calling a nonexistent tool should trigger a JSON-RPC Error"](https://github.com/modelcontextprotocol/typescript-sdk/issues/1510)
    *   [#509 "Bug Report: Tool Handlers Not Invoked with StdioServerTransport on macOS"](https://github.com/modelcontextprotocol/typescript-sdk/issues/509)
    *   [#1639 "Hono Package is not under @modelcontextprotocol"](https://github.com/modelcontextprotocol/typescript-sdk/issues/1639)
    *   [#1308 "Tool output validation fails when outputSchema is a Zod schema other than ZodObject"](https://github.com/modelcontextprotocol/typescript-sdk/issues/1308)
    *   [#1370](https://github.com/modelcontextprotocol/typescript-sdk/issues/1370) (via PR #1662)
    *   [#1429](https://github.com/modelcontextprotocol/typescript-sdk/issues/1429) (via PR #1651)
    *   [#1658](https://github.com/modelcontextprotocol/typescript-sdk/issues/1658) (via PR #1668)
    *   [#893](https://github.com/modelcontextprotocol/typescript-sdk/issues/893) (via PR #1666)
    *   [#1430](https://github.com/modelcontextprotocol/typescript-sdk/issues/1430) (via PR #1670)
    *   [#1562](https://github.com/modelcontextprotocol/typescript-sdk/issues/1562) (via PR #1671)
    *   [#1659](https://github.com/modelcontextprotocol/typescript-sdk/issues/1659) (via PR #1667)
    *   [#1201](https://github.com/modelcontextprotocol/typescript-sdk/issues/1201) (via PR #1340)
    *   [#2207](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2207) (via PR #1523)
*   **Pull Requests**:
    *   [#1675 "fix: ensure tool inputSchema includes type: object for discriminated unions"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1675)
    *   [#1674 "fix(server): return JSON-RPC errors for missing tools"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1674)
    *   [#1662 "feat(client): add getAuthorizationCode() to OAuthClientProvider for headless OAuth flows"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1662)
    *   [#1673 "`v2` - RFC Extract Tasks out of protocol.ts into TaskManager"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1673)
    *   [#1668 "fix: add existingSessionId option to WebStandardStreamableHTTPServerTransport for multi-node session hydration"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1668)
    *   [#1666 "fix: allow registering tools/resources/prompts after connect when capabilities pre-declared (#893)"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1666)
    *   [#1670 "feat: add scope option to ClientCredentialsProvider, PrivateKeyJwtProvider, and StaticPrivateKeyJwtProvider"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1670)
    *   [#1672 "Fix abort signal listener leak in _requestWithSchema"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1672)
    *   [#1671 "fix: inline $ref pointers in schemaToJson for self-contained tool schemas"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1671)
    *   [#1669 "fix: include scope parameter in OAuth authorization code token exchange"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1669)
    *   [#1667 "fix: add required:[] to empty object JSON schemas for OpenAI strict mode compatibility"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1667)
    *   [#1665 "fix: support Zod runtimes that store literal values in _def.values[0]"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1665)
    *   [#1664 "fix: surface input validation errors for task-augmented tool calls"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1664)
    *   [#1663 "fix: getParseErrorMessage now surfaces custom Zod v4 error messages"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1663)
    *   [#1630 "Allow servers / clients to advertize extensions in the capability object"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1630)
    *   [#1420 "Version Packages"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1420)
    *   [#1340 "rename 'validation' folder->'validators'"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1340)
    *   [#1523 "SEP-2207: Refresh token guidance"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1523)
    *   [#1651 "fix: sanitize internal error details in tool error responses"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1651)
    *   [#1650 "chore(deps): bump conformance to 0.1.15, port auth/pre-registration from v1.x"](https://github.com/modelcontextprotocol/typescript-sdk/pull/1650)

</details>

<details>
<summary>MCP Python SDK — <a href="https://github.com/modelcontextprotocol/python-sdk">modelcontextprotocol/python-sdk</a></summary>

# MCP Python SDK 技术日报

**日期:** 2026-03-13 | **分组:** MCP 生态系统

## 核心动态

今日，MCP Python SDK 社区在安全加固、稳定性和功能增强方面展现出活跃。尤其值得关注的是，一项重要的安全漏洞 [#2269](https://github.com/modelcontextprotocol/python-sdk/issues/2269) 已被修复，通过 [#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287) PR 实现了 DNS 重绑定防护的默认启用，显著提升了 SDK 的安全性。同时，针对 Streamable HTTP 传输的多个 PR 正在积极推进，包括连接错误处理 [#2282](https://github.com/modelcontextprotocol/python-sdk/pull/2282) 和客户端断开连接的优雅处理 [#2283](https://github.com/modelcontextprotocol/python-sdk/pull/2283)，这些都表明社区正在全力提升 SDK 的稳定性和健壮性。

## 社区关注点分析

### 新增 Issues:
*   **安全性问题**： [#2269](https://github.com/modelcontextprotocol/python-sdk/issues/2269) 指出了默认配置下的 DNS 重绑定漏洞，该问题已得到积极响应，并已有修复 PR [#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287) 正在处理。
*   **兼容性与验证问题**： [#2288](https://github.com/modelcontextprotocol/python-sdk/issues/2288) 反映了 Unicode 字符导致 JSONRPCMessage 存在验证错误。

### 近期更新 Issues:
*   **稳定性与错误修复**：
    *   [#1775](https://github.com/modelcontextprotocol/python-sdk/issues/1775) 持续对 `TestChildProcessCleanup` 中的不稳定测试进行修复。
    *   [#1656](https://github.com/modelcontextprotocol/python-sdk/issues/1656) 正在解决 FastMCP 初始化时日志配置干扰应用级日志的问题。
    *   [#1886](https://github.com/modelcontextprotocol/python-sdk/issues/1886) 关注长时工具调用时，Stateless 模式下 HTTP 响应丢失的问题。
    *   [#1648](https://github.com/modelcontextprotocol/python-sdk/issues/1648) 报告了 `ClientDisconnect` 返回 HTTP 500 的问题。
*   **功能弃用与规范符合**：
    *   [#2278](https://github.com/modelcontextprotocol/python-sdk/issues/2278) 计划将 SSE transport 标记为已弃用，这与协议的演进保持一致。

### 新增 Pull Requests:
*   **安全加固**： [#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287) 默认启用 DNS 重绑定防护，解决了 [#2269](https://github.com/modelcontextprotocol/python-sdk/issues/2269) 的安全性隐患。
*   **Streamable HTTP 稳定性**： [#2283](https://github.com/modelcontextprotocol/python-sdk/pull/2283) 和 [#2282](https://github.com/modelcontextprotocol/python-sdk/pull/2282) 分别处理了客户端断开和连接错误，提升了 Streamable HTTP 的可靠性。
*   **日志配置改进**： [#2285](https://github.com/modelcontextprotocol/python-sdk/pull/2285) 将日志配置从 `MCPServer.__init__` 移至 `run()`，解决了 [#1656](https://github.com/modelcontextprotocol/python-sdk/issues/1656) 中描述的日志干扰问题。

### 近期更新 Pull Requests:
*   **Token 处理优化**： [#2280](https://github.com/modelcontextprotocol/python-sdk/pull/2280) 修复了在服务器省略 `refresh_token` 时保留现有刷新令牌的逻辑。
*   **依赖更新**： [#2290](https://github.com/modelcontextprotocol/python-sdk/pull/2290) 自动更新了 `black` 依赖，保持开发工具链的最新。

## 今日最值关注

1.  **DNS 重绑定防护默认启用**：PR [#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287) 成功解决了 GitHub Issue [#2269](https://github.com/modelcontextprotocol/python-sdk/issues/2269) 中提出的安全漏洞，默认情况下启用了 DNS 重绑定防护，这是对 SDK 安全性的一次重要提升。
2.  **Streamable HTTP 稳定性多项改进**：PR [#2283](https://github.com/modelcontextprotocol/python-sdk/pull/2283) 和 [#2282](https://github.com/modelcontextprotocol/python-sdk/pull/2282) 正在积极解决 Streamable HTTP 传输中的关键稳定性问题，包括客户端断开连接的优雅处理和连接错误的处理，这对于提升远程通信的健壮性至关重要。
3.  **日志配置优化**：PR [#2285](https://github.com/modelcontextprotocol/python-sdk/pull/2285) 针对 Issue [#1656](https://github.com/modelcontextprotocol/python-sdk/issues/1656) 提出的问题，优化了日志配置的时机，从服务器初始化时移至 `run()` 方法，避免了对应用级日志配置的干扰，是对 SDK 易用性和集成性的改进。

---

## 参考链接

*   **Issues:**
    *   [#2269](https://github.com/modelcontextprotocol/python-sdk/issues/2269)
    *   [#2288](https://github.com/modelcontextprotocol/python-sdk/issues/2288)
    *   [#1775](https://github.com/modelcontextprotocol/python-sdk/issues/1775)
    *   [#1656](https://github.com/modelcontextprotocol/python-sdk/issues/1656)
    *   [#2278](https://github.com/modelcontextprotocol/python-sdk/issues/2278)
    *   [#1886](https://github.com/modelcontextprotocol/python-sdk/issues/1886)
    *   [#1648](https://github.com/modelcontextprotocol/python-sdk/issues/1648)
*   **Pull Requests:**
    *   [#2283](https://github.com/modelcontextprotocol/python-sdk/pull/2283)
    *   [#2282](https://github.com/modelcontextprotocol/python-sdk/pull/2282)
    *   [#2290](https://github.com/modelcontextprotocol/python-sdk/pull/2290)
    *   [#2289](https://github.com/modelcontextprotocol/python-sdk/pull/2289)
    *   [#2280](https://github.com/modelcontextprotocol/python-sdk/pull/2280)
    *   [#2287](https://github.com/modelcontextprotocol/python-sdk/pull/2287)
    *   [#2286](https://github.com/modelcontextprotocol/python-sdk/pull/2286)
    *   [#2273](https://github.com/modelcontextprotocol/python-sdk/pull/2273)
    *   [#2285](https://github.com/modelcontextprotocol/python-sdk/pull/2285)
    *   [#2284](https://github.com/modelcontextprotocol/python-sdk/pull/2284)
    *   [#2266](https://github.com/modelcontextprotocol/python-sdk/pull/2266)
    *   [#2263](https://github.com/modelcontextprotocol/python-sdk/pull/2263)
    *   [#2039](https://github.com/modelcontextprotocol/python-sdk/pull/2039)
    *   [#2246](https://github.com/modelcontextprotocol/python-sdk/pull/2246)
    *   [#2259](https://github.com/modelcontextprotocol/python-sdk/pull/2259)
    *   [#2237](https://github.com/modelcontextprotocol/python-sdk/pull/2237)
    *   [#1680](https://github.com/modelcontextprotocol/python-sdk/pull/1680)
    *   [#2258](https://github.com/modelcontextprotocol/python-sdk/pull/2258)
    *   [#1619](https://github.com/modelcontextprotocol/python-sdk/pull/1619)
    *   [#2265](https://github.com/modelcontextprotocol/python-sdk/pull/2265)

</details>

<details>
<summary>MCP 官方 Servers — <a href="https://github.com/modelcontextprotocol/servers">modelcontextprotocol/servers</a></summary>

# modelcontextprotocol/servers 项目技术日报

**日期**: 2026-03-13
**分组**: MCP 生态系统

## 本日动态摘要

今日，`modelcontextprotocol/servers` 项目迎来密集的新功能提案和集成。社区在提升服务器健壮性、扩展性以及安全性方面展现出高度关注。

### **新增与集成**

#### **AI Agents 互联与集成**

*   **Agent 间网络通信 (`mingle-mcp`)**: Issue [#3538](https://github.com/modelcontextprotocol/servers/issues/3538) 提出将 `mingle-mcp` 集成到 MCP 生态系统中，旨在实现 Agent 间的点对点通信。通过发布签名后的 IntentCards，Agent 能够匹配需求，并支持用户批准，为 Agent 协作开辟新途径。
*   **社区服务器集成**: 多个外部 MCP 服务器通过 Pull Request 被集成：
    *   `Faultr MCP` 服务器 ([#3536](https://github.com/modelcontextprotocol/servers/pull/3536)) 旨在为 AI Agent 提供合规性和安全压力测试。
    *   `Aarna MCP` ([#3535](https://github.com/modelcontextprotocol/servers/pull/3535)) 提供 `atv` vault 存款功能。
    *   `Pyth Hermes MCP` ([#3532](https://github.com/modelcontextprotocol/servers/pull/3532)) 专注于 Pyth API，提供 3 种操作。
    *   `Defillama MCP` ([#3529](https://github.com/modelcontextprotocol/servers/pull/3529)) 集成了 DefiLlama API，提供 3 种操作。
    *   `Pyth MCP` ([#3531](https://github.com/modelcontextprotocol/servers/pull/3531)) 也是一个 Pyth API 封装，提供 3 种操作。

#### **功能增强与代码优化**

*   **文件系统输出确定性**: Issue [#3539](https://github.com/modelcontextprotocol/servers/issues/3539) 和对应的 Pull Request [#3540](https://github.com/modelcontextprotocol/servers/pull/3540) 提出，将 `filesystem` 服务器的 `directory_tree` 输出排序调整为确定性的，以确保跨运行环境的输出一致性，这对于可复现的测试至关重要。
*   **`sequential-thinking` 工具增强**:
    *   PR [#3534](https://github.com/modelcontextprotocol/servers/pull/3534) 为 `sequential-thinking` 工具添加了工具注解，提升了工具的描述性和可发现性。
    *   PR [#3533](https://github.com/modelcontextprotocol/servers/pull/3533) 修复了 `sequential-thinking` 工具在处理数值和布尔型参数时可能出现的 Zod 验证错误，通过使用 `z.coerce` 来更好地处理客户端可能发送的字符串类型数据。

### **社区关注点分析**

1.  **服务器集成与生态扩展**: 今日新增的多个 Pull Request 表明社区对将更多第三方服务与 MCP 协议集成表现出极大的热情。这显示了 MCP 生态正在吸引越来越多的开发者贡献和扩展其能力范围，特别是在金融（Defillama, Pyth）、安全合规（Faultr）等领域。
2.  **代码健壮性与标准化**: Issue [#3539](https://github.com/modelcontextprotocol/servers/issues/3539) 提出的文件系统输出确定性问题，以及 PR [#3533](https://github.com/modelcontextprotocol/servers/pull/3533) 对 `sequential-thinking` 工具参数处理的优化，都反映了社区对提高 MCP 服务器稳定性和可预测性的重视。确保算法输出的确定性对于构建可靠的 AI 应用至关重要。
3.  **安全性审计**: Issue [#3537](https://github.com/modelcontextprotocol/servers/issues/3537) 的安全审计发现（尽管大多数服务器得分 A/B），提出了一个跨服务器的潜在问题——“未受限的字符串参数”。这表明虽然 MCP 服务器整体安全性较高，但社区仍在积极探索和修复潜在的边缘安全隐患。

### **今日最值得关注的动态**

1.  **AI Agent 互联新方向 (`mingle-mcp`)**: Issue [#3538](https://github.com/modelcontextprotocol/servers/issues/3538) 提出的 Agent 间通信方案，是 MCP 生态向支持更复杂 Agent 协作迈出的重要一步。
2.  **生态兼容性与稳定性提升**: 大量 Pull Request 集中集成新服务器（如 Faultr, Aarna, Pyth, Defillama），同时 PR [#3540](https://github.com/modelcontextprotocol/servers/pull/3540) 解决了文件系统输出的确定性问题，共同展示了项目在扩展能力和核心稳定性上的双重进展。

---

## 参考链接

*   [#3539](https://github.com/modelcontextprotocol/servers/issues/3539)
*   [#3538](https://github.com/modelcontextprotocol/servers/issues/3538)
*   [#3537](https://github.com/modelcontextprotocol/servers/issues/3537)
*   [#3278](https://github.com/modelcontextprotocol/servers/issues/3278)
*   [#3530](https://github.com/modelcontextprotocol/servers/issues/3530)
*   [#3540](https://github.com/modelcontextprotocol/servers/pull/3540)
*   [#3536](https://github.com/modelcontextprotocol/servers/pull/3536)
*   [#3535](https://github.com/modelcontextprotocol/servers/pull/3535)
*   [#3534](https://github.com/modelcontextprotocol/servers/pull/3534)
*   [#3533](https://github.com/modelcontextprotocol/servers/pull/3533)
*   [#3532](https://github.com/modelcontextprotocol/servers/pull/3532)
*   [#3529](https://github.com/modelcontextprotocol/servers/pull/3529)
*   [#3531](https://github.com/modelcontextprotocol/servers/pull/3531)

</details>

<details>
<summary>MCP Inspector — <a href="https://github.com/modelcontextprotocol/inspector">modelcontextprotocol/inspector</a></summary>

# MCP Inspector (modelcontextprotocol/inspector) 技术日报

**日期**: 2026-03-13 | **分组**: MCP 生态系统

## 摘要

今日 MCP Inspector 项目主要聚焦于 OAuth 认证流程中的相关问题以及模板参数提取的挑战。社区新增了关于 OAuth 元数据发现回归（regression）的 Issue，以及一个关于模板参数提取失败的 Issue。同时，一个修复 Bearer Token 泄露至发现 endpoint 的 Pull Request 得到更新，表明项目正在积极解决安全和功能性方面的潜在问题。

## 今日重点关注

1.  **[🆕 Issue #1143] OAuth 元数据发现回归问题**：新报告的 Issue 指出 `mcp-inspector 0.21.x` 版本在与 OAuth 授权服务器交互时，因服务器拒绝 `Content-Type: application/json` 请求而导致元数据发现失败，这可能影响到客户端的认证流程。
2.  **[🆕 Issue #1142] 模板参数提取失败**：用户报告在使用 `tools.yaml` 中的模板时遇到“missing parameter sql”的错误，这直接影响了配置和工具的使用，需要进一步的排查和解决方案。
3.  **[✓ PR #1135] 修复 Bearer Token 泄露**：该 PR 致力于解决当 MCP 服务器因 Token 过期返回 401 错误时，Inspector 将已失效的 Bearer Token 发送至 OAuth 发现和元数据 endpoint 的问题。此修复对于防止敏感信息泄露和提高在特定网络环境（如 Istio）中的稳定性至关重要。

## 社区动态

### 新建 Issue (过去 24 小时)

*   **[🆕 Issue #1143] Regression in OAuth metadata discovery in mcp-inspector 0.21.x against authorization servers that reject Content-Type: application/json** (由 @ensonik 报告)
    *   **问题描述**: 在 `mcp-inspector 0.21.1` 版本中，当尝试与 MCP 服务器的 OAuth 授权服务器交互时，获取 `/.well-known/oauth-authorization-server` 元数据失败，服务器返回 `415 Unsupported Media Type`。
    *   **潜在影响**: 影响 OAuth 流程的正常进行，特别是当后端不支持特定的 `Content-Type` 时。
    *   **URL**: [https://github.com/modelcontextprotocol/inspector/issues/1143](https://github.com/modelcontextprotocol/inspector/issues/1143)

*   **[🆕 Issue #1142] unable to extract template params: error getting template params missing parameter sql** (由 @Cyber-Oscar 报告)
    *   **问题描述**: 用户在使用 `tools.yaml` 的模板时，遇到“missing parameter sql”的错误，导致模板参数提取失败。
    *   **潜在影响**: 阻止用户使用或配置基于模板的功能。
    *   **URL**: [https://github.com/modelcontextprotocol/inspector/issues/1142](https://github.com/modelcontextprotocol/inspector/issues/1142)

### 近期更新/持续讨论

*   **[✓ PR #1135] fix: prevent bearer tokens from leaking to discovery endpoints** (由 @Bortlesboat 提交，本周有更新)
    *   **问题背景**: 修复了 Issue #1092，阻止了在 MCP 服务器返回 `401` (Token 过期) 时，Inspector 将过期的 Bearer Token 发送到 OAuth 发现和元数据 endpoint 的问题。
    *   **重要性**: 提升了安全性，避免了敏感认证信息在不当场景下的泄露，尤其在 Istio 等网络环境配置下。
    *   **URL**: [https://github.com/modelcontextprotocol/inspector/pull/1135](https://github.com/modelcontextprotocol/inspector/pull/1135)

*   **[✓ Issue #1120] Resource refresh button is not working** (14天前建立，近期有更新)
    *   **问题描述**: 用户报告资源刷新按钮失效，点击后没有任何请求或状态变化。
    *   **当前状态**: 持续讨论中，有 2 条评论。
    *   **URL**: [https://github.com/modelcontextprotocol/inspector/issues/1120](https://github.com/modelcontextprotocol/inspector/issues/1120)

*   **[✓ PR #1047] Inspector client: Added proxy fetch for use by auth (to avoid CORS issues)** (41天前建立，近期有更新)
    *   **问题背景**: 旨在解决从浏览器环境中认证时遇到的 CORS 问题，通过代理获取方式来避免限制。
    *   **当前状态**: 持续讨论中。
    *   **URL**: [https://github.com/modelcontextprotocol/inspector/pull/1047](https://github.com/modelcontextprotocol/inspector/pull/1047)

## 参考链接

*   [modelcontextprotocol/inspector](https://github.com/modelcontextprotocol/inspector)
*   [https://github.com/modelcontextprotocol/inspector/issues/1143](https://github.com/modelcontextprotocol/inspector/issues/1143)
*   [https://github.com/modelcontextprotocol/inspector/issues/1120](https://github.com/modelcontextprotocol/inspector/issues/1120)
*   [https://github.com/modelcontextprotocol/inspector/issues/1142](https://github.com/modelcontextprotocol/inspector/issues/1142)
*   [https://github.com/modelcontextprotocol/inspector/pull/1047](https://github.com/modelcontextprotocol/inspector/pull/1047)
*   [https://github.com/modelcontextprotocol/inspector/pull/1135](https://github.com/modelcontextprotocol/inspector/pull/1135)

</details>

<details>
<summary>MCP Registry — <a href="https://github.com/modelcontextprotocol/registry">modelcontextprotocol/registry</a></summary>

# MCP Registry (modelcontextprotocol/registry) 技术日报

**日期**: 2026-03-13 | **分组**: MCP 生态系统

## 社区动态与关注点

今日 MCP Registry 项目呈现出以下几个值得关注的动态：

1.  **扩展包注册类别 - 支持 Rust Crates.io :** 一个新提出的 Issue [#1055](https://github.com/modelcontextprotocol/registry/issues/1055) Request to add `"registryType": "cargo"` (or `"crates"`) support to the MCP Registry，旨在将 Rust 生态流行的 `crates.io` 包管理器集成到 MCP Registry 中。这标志着社区希望 MCP Registry 能够覆盖更广泛的语言和生态系统，特别是对 Rust 开发者友好，若实现，将显著提升 MCP 在 Rust 社区的可用性。

2.  **依赖更新与维护：** 多个由 `dependabot[bot]` 自动发起的 Pull Request 持续进行，主要涉及 `pulumi` 相关库的更新，例如 [#1056](https://github.com/modelcontextprotocol/registry/pull/1056) "build(deps): bump github.com/pulumi/pulumi-kubernetes/sdk/v4 from 4.27.0 to 4.28.0 in /deploy" 和 [#1057](https://github.com/modelcontextprotocol/registry/pull/1057) "build(deps): bump github.com/pulumi/pulumi/sdk/v3 from 3.225.1 to 3.226.0 in /deploy"。这些 PR 展示了项目在积极维护其基础设施组件，确保持续的安全性和最新性。同时，PR [#989](https://github.com/modelcontextprotocol/registry/pull/989) "build(deps): bump github.com/danielgtaylor/huma/v2 from 2.35.0 to 2.37.2" 显示该项目也持续关注其 API 框架的更新。

3.  **文档链接优化：** PR [#1052](https://github.com/modelcontextprotocol/registry/pull/1052) "Remove `.mdx` suffixes from internal doc links for Mintlify" 专注于优化内部文档链接，以兼容 Mintlify 的路由机制，解决在官方文档站点（modelcontextprotocol.io）上的 404 问题。这是一个重要的用户体验和维护性提升，确保了文档的可访问性。

## 今日关键动态

*   **新增支持 crates.io 的 Issue 讨论**：社区正积极探讨将 Rust 的 `crates.io` 包管理器集成到 MCP Registry 的可能性，展现了对扩展语言支持的强烈需求。
*   **pulumi 相关依赖更新**：日常的自动化依赖更新仍在继续，保持了项目基础设施的现代化。
*   **文档链接修复**：针对 Mintlify 渲染的官方文档，进行了链接后缀优化，提升了文档的可读性和准确性。

---

## 参考链接

*   **Issues**
    *   [#1055 - Support crates.io as a package registry type](https://github.com/modelcontextprotocol/registry/issues/1055)
*   **Pull Requests**
    *   [#1056 - build(deps): bump github.com/pulumi/pulumi-kubernetes/sdk/v4 from 4.27.0 to 4.28.0 in /deploy](https://github.com/modelcontextprotocol/registry/pull/1056)
    *   [#1057 - build(deps): bump github.com/pulumi/pulumi/sdk/v3 from 3.225.1 to 3.226.0 in /deploy](https://github.com/modelcontextprotocol/registry/pull/1057)
    *   [#989 - build(deps): bump github.com/danielgtaylor/huma/v2 from 2.35.0 to 2.37.2](https://github.com/modelcontextprotocol/registry/pull/989)
    *   [#1054 - build(deps): bump golang.org/x/mod from 0.33.0 to 0.34.0](https://github.com/modelcontextprotocol/registry/pull/1054)
    *   [#1052 - Remove `.mdx` suffixes from internal doc links for Mintlify](https://github.com/modelcontextprotocol/registry/pull/1052)
*   **项目地址**
    *   [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)

</details>


---

> 本报告由 [ai-ecosystem-radar](https://github.com/howardpen9/ai-ecosystem-radar) 自动生成
> 生成时间: 2026-03-13T00:48:54.712Z