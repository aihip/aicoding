# 大模型排名与性价比分析（国产 vs 国际 · 2026 年版）

> 更新日期：2026-07-24
> 价格数据来源（均已官方核对的精确值）：
> - **DeepSeek**：DeepSeek 官方 API Docs（美元定价，按 1 USD ≈ 7.2 CNY 折算）
> - **Kimi**：Kimi 开放平台定价文档（人民币原价）
> - **GLM / Qwen / 豆包**：官方价格页为 JS 动态渲染，未能精确抓取，标「≈见官网」，请以官网为准
> - **Claude（Anthropic）**：本次已按官方模型定价核对为精确值（美元定价，按 1 USD ≈ 7.2 CNY 折算），标「✅」
> - **其余国际模型（GPT / Gemini）**：官方定价页区域受限或 JS 渲染，未能精确抓取 token 价，标「⚠️ 近似」，请以官网为准

---
[toc]

## 一、主流厂商与旗舰模型（2026 年中）

| 厂商 | 旗舰模型 | 代表产品线 | 特点 |
|------|---------|-----------|------|
| 深度求索 DeepSeek | **DeepSeek-V4** | V4-Pro / V4-Flash | 开源、极致低价、1M 上下文、推理强 |
| 阿里巴巴 | **通义千问 Qwen3.7** | Qwen3.8-Max(preview)/3.7-Max/3.7-Plus/3.6-Flash | 全栈、多模态、开源生态最完善 |
| 智谱 AI | **GLM-5.2** | GLM-5.2 / GLM-5V-Turbo / GLM-Image | 开源、综合能力强、工具调用稳定 |
| 月之暗面 | **Kimi K3** | K3 / K2.7-Code / K2.6 / K2.5 | 1M 超长上下文、Coding、多模态 |
| 字节跳动 | **豆包 Seed-Evolving** | Seed-Evolving / Seedance 2.0 / Seedream 5.0 | 文/图/视频全能、C 端用户多 |
| MiniMax | **MiniMax-M3** | M3 / speech-2.8-hd | 长文本、语音/视频生成强 |
| 小米 | **MiMo v2.5-pro** | MiMo 系列 | 终端侧、手机/IoT 生态 |
| 百度 | **文心 ERNIE 4.5** | ERNIE-4.5 | 中文理解、企业应用 |
| 腾讯 | **混元 Hunyuan** | Hunyuan-Turbo | 多模态、微信/企业微信集成 |

> 趋势：2025-2026 年各厂商进入「V4 / 5.x / 3.7」代际，上下文普遍提升到 **1M token**，多模态（图/视频/语音）成为标配。

---

## 二、综合能力梯队（2026 年中）

### 第一梯队（综合最强，对标国际前沿）
- **DeepSeek-V4-Pro**：推理与代码顶尖，1M 上下文，开源
- **Qwen3.7-Max**：综合全面，多模态（图/视频/语音/3D）领先
- **GLM-5.2**：编程与 Agent 调用突出，1M 无损上下文，开源 SOTA
- **Kimi K3**：1M 超长上下文 + 长程编程，Agent 场景强

### 第二梯队（各有所长）
- **豆包 Seed-Evolving**：响应速度、多模态生成（Seedance 视频 / Seedream 图像）
- **文心 ERNIE-4.5**：中文语义、企业级应用
- **MiniMax-M3**：创意写作、语音合成（speech-2.8-hd）
- **混元 Hunyuan**：腾讯生态深度集成

### 第三梯队（垂直 / 终端场景）
- **小米 MiMo v2.5-pro**：端侧推理、手机/IoT
- **星火 Spark**：语音、教育、政务
- **Baichuan**：医疗

---

## 三、API 精确价格对比（性价比）

### 3.1 旗舰级模型

> 单位：元 / 百万 tokens（输入未命中价格，标准口径）
> ✅ = 官方文档精确值　⚠️ = 未精确抓取，公开近似值，请以官网为准

| 模型 | 输入（元/百万token） | 输出（元/百万token） | 上下文 | 来源 |
|------|---------------------|---------------------|--------|------|
| ✅ **DeepSeek-V4-Flash** | 1.0（命中仅 0.02） | 2.0 | 1M / 最大输出 384K | 官方 API Docs |
| ✅ **DeepSeek-V4-Pro** | 3.1（命中仅 0.03） | 6.3 | 1M | 官方 API Docs |
| ✅ **Kimi K3** | 20.0（命中 2.0） | **100.0** | 1,048,576 (1M) | 官方定价文档 |
| ✅ **Kimi K2.7-Code** | 6.5（命中 1.3） | 27.0 | 256K | 官方定价文档 |
| ⚠️ **GLM-5.2** | ≈ 2 | ≈ 8 | 1M | open.bigmodel.cn/pricing |
| ⚠️ **Qwen3.7-Max** | ≈ 20 | ≈ 60 | 1M | 百炼模型广场 |
| ⚠️ **豆包 Seed-Evolving** | ≈ 5 | ≈ 12 | — | 火山方舟 |
| ⚠️ **文心 ERNIE-4.5** | ≈ 4 | ≈ 16 | — | 千帆 |

### 3.2 Kimi 全系精确价（官方原价）

| 模型 | 输入（命中） | 输入（未命中） | 输出 | 上下文 | 定位 |
|------|------------|--------------|------|--------|------|
| **Kimi K3** | ¥2.00 | ¥20.00 | ¥100.00 | 1M | 旗舰，高端定价 |
| **K2.7-Code** | ¥1.30 | ¥6.50 | ¥27.00 | 256K | 编程主力 |
| **K2.7-Code-HighSpeed** | ¥2.60 | ¥13.00 | ¥54.00 | 256K | 编程高速版 |
| **K2.6** | ¥1.10 | ¥6.50 | ¥27.00 | 256K | 通用多模态 |
| **K2.5** | ¥0.70 | ¥4.00 | ¥21.00 | 256K | 性价比款（文本/图/视频） |

> 单位：元 / 百万 tokens

### 3.3 轻量级 / 低价模型

| 模型 | 输入（元/百万token） | 输出（元/百万token） | 性价比评价 |
|------|---------------------|---------------------|-----------|
| ✅ **DeepSeek-V4-Flash（命中）** | 0.02 | 0.02 | ★★★★★ 全网最低，近乎免费 |
| ⚠️ **Qwen3.6-Flash** | ≈ 0.3 | ≈ 0.6 | ★★★★★ 海量调用水位王 |
| ⚠️ **豆包-Lite** | ≈ 0.3 | ≈ 0.6 | ★★★★★ |
| ⚠️ **GLM-4-Flash 系列** | 免费 / ≈ 1 | 免费 / ≈ 1 | ★★★★★ 入门首选（官方免费模型） |
| ⚠️ **文心-Speed** | 免费 / 极低 | 免费 / 极低 | ★★★★★ 免费额度大 |

> 亮点：DeepSeek-V4-Flash 配合上下文缓存（Context Cache），命中后输入/输出均约 **0.02 元/百万 token**，是目前公开价格中最低的。

---

## 四、多模态能力一览

2026 年「文生图 / 文生视频 / 语音」已成为大厂标配，阿里百炼平台已汇聚多家模型：

| 能力 | 代表模型（来自百炼/各家） |
|------|--------------------------|
| 图像生成 | 智谱 **GLM-Image**、阿里 **Qwen-Image-3.0-Pro**、**Wan2.7-Image-Pro**、豆包 **Seedream 5.0 Pro** |
| 文生视频 | 智谱 **CogVideoX-3**、阿里 **Happyhorse 1.1**、豆包 **Seedance 2.0**、**Vidu Q1/2** |
| 语音合成(TTS) | 智谱 **GLM-TTS**、**Qwen-Audio-3.0-TTS-Plus**、**MiniMax speech-2.8-hd** |
| 多模态理解 | 智谱 **GLM-5V-Turbo**、Qwen3.5-Omni-Plus、Kimi K2.5/K2.6/K3 |
| 实时音视频 | 智谱 **GLM-Realtime**、星火 |

---

## 五、国际主流模型（对比）

### 5.1 国际厂商阵容（2026 年中）

| 厂商 | 旗舰模型 | 代表产品线 | 特点 |
|------|---------|-----------|------|
| OpenAI | **GPT-5.6** | GPT-5.6 Sol/Sol Pro/Terra/Luna、GPT-5.5 Instant、GPT-5.4、GPT-5 Thinking Mini | 推理顶尖、生态最完善；推理模型 256K 上下文 |
| Anthropic | **Claude Fable 5 / Opus 4.8** | Fable 5、Mythos 5、Opus 4.8/4.7、Sonnet 5、Haiku 4.5 | 编程与长程 Agent 最强；价格最高 |
| Google | **Gemini 3.1 Pro** | Gemini 3.1 Pro / 3 Pro / 3.1 Flash | 多模态与超长上下文原生；Flash 极低价 |
| xAI | **Grok** | Grok 系列 | 与 X（推特）生态集成、实时数据 |
| Meta | **Llama** | Llama 系列（开源） | 开源旗舰，可私有化部署 |

### 5.2 国产 vs 国际 能力对位（来源：阿里百炼官方迁移指南）

| 能力档 | 国际代表 | 国产对位推荐 |
|--------|---------|-------------|
| **高能力** | GPT-5.5、Claude Fable 5 / Opus 4.8、Gemini 3.1 Pro | qwen3.7-max、qwen3.8-max-preview、GLM-5.2、DeepSeek-V4-Pro |
| **平衡** | GPT-5.4、Claude Sonnet 5、Gemini 3 Pro | qwen3.7-plus、DeepSeek-V4-Pro、GLM-5.2 |
| **轻量低成本** | GPT-5.4-mini、Claude Haiku 4.5、Gemini 3.1 Flash | qwen3.6-flash、DeepSeek-V4-Flash、MiniMax-M2.5 |

### 5.3 国际模型 API 价格（⚠️ 近似值，未精确抓取）

> 单位：美元 / 百万 tokens（括号内为人民币折算，1 USD ≈ 7.2 CNY）
> ✅ Claude 为官方模型定价精确值　⚠️ GPT / Gemini 因官方页区域受限或 JS 渲染，为公开近似值，请以官网为准

| 模型 | 输入（$/百万token） | 输出（$/百万token） | 定位 |
|------|--------------------|--------------------|------|
| ✅ **Claude Fable 5 / Mythos 5** | 10（¥72） | **50（¥360）** | 最强广泛发布模型，顶配（Mythos 5 仅 Project Glasswing） |
| ✅ **Claude Opus 4.8 / 4.7** | 5（¥36） | 25（¥180） | Opus 旗舰，1M 上下文无长文溢价 |
| ⚠️ **GPT-5.6 / GPT-5.5** | ≈ 5（¥36） | ≈ 15~25（¥110~180） | OpenAI 旗舰 |
| ✅ **Claude Sonnet 5** | 3（¥21.6，尝鲜 2/¥14.4） | 15（¥108，尝鲜 10/¥72） | 编程/Agent 主力（尝鲜价至 2026-08-31） |
| ✅ **Claude Sonnet 4.6** | 3（¥21.6） | 15（¥108） | 上一代 Sonnet |
| ⚠️ **Gemini 3.1 Pro** | ≈ 2.5（¥18） | ≈ 10（¥72） | 多模态旗舰 |
| ✅ **Claude Haiku 4.5** | 1（¥7.2） | 5（¥36） | 轻量 |
| ⚠️ **GPT-5.4-mini** | ≈ 0.4（¥3） | ≈ 1.6（¥12） | 轻量 |
| ⚠️ **Gemini 3.1 Flash** | ≈ 0.3（¥2.2） | ≈ 0.8（¥5.8） | 国际最低价 |

> ⚠️ 重要更正：早前版本将 Claude Opus 误标为 ¥540/百万 token（沿用了老 Claude 3 Opus 的 $15/$75 口径）。**当前 Opus 4.x 实为 $5/$25（¥36/¥180）**，顶配 Fable 5 为 $10/$50（¥72/¥360）——较此前明显下降。

### 5.4 中外价格差距（核心洞察）

| 对比 | 国产 | 国际同档 | 国产便宜倍数 |
|------|------|---------|-------------|
| 旗舰输出价 | DeepSeek-V4-Pro ¥6.3 | Claude Fable 5 ¥360 / Opus 4.8 ¥180 / GPT-5.6 ¥180 | **28~57 倍** |
| 平衡档输出价 | GLM-5.2 ¥8 | Claude Sonnet 5 ¥108 | **~13 倍** |
| 轻量输出价 | DeepSeek-V4-Flash ¥2 | Gemini 3.1 Flash ¥5.8 | **~3 倍** |

> 结论：国产旗舰（DeepSeek-V4-Pro）能力已逼近国际前沿，但价格只有 Claude Fable 5 的约 **1/57**、Claude Opus 4.8 的约 **1/28**；国产轻量（DeepSeek-V4-Flash）甚至比号称低价的 Gemini Flash 还便宜，且能力接近第一梯队。这是国产模型最大的「降维打击」优势。唯一短板：极少数极限推理/前沿任务上，国际顶配（Fable 5/Mythos 5、GPT-5.6）仍有领先。

---

## 六、选型建议

### 按预算选择
| 预算 | 推荐方案 |
|------|---------|
| **极度敏感 / 免费** | GLM-4-Flash（官方免费）、文心-Speed、Qwen3.6-Flash；或自部署开源（Qwen / GLM / DeepSeek 开源权重） |
| **追求性价比** | **DeepSeek-V4-Flash**、**GLM-5.2**、**Kimi K2.5**、**豆包-Pro** |
| **追求最强能力** | **DeepSeek-V4-Pro**、**Qwen3.7-Max**、**GLM-5.2**、**Kimi K3**（注意 K3 是高端定价） |

### 按场景选择
| 场景 | 首选模型 |
|------|---------|
| 代码生成 / 数学推理 | **DeepSeek-V4-Pro**、**GLM-5.2**、**Kimi K2.7-Code** |
| 长文档分析（>20万字） | **Kimi K3**（1M）、**DeepSeek-V4**（1M） |
| Agent / 工具调用 | **GLM-5.2**、**Kimi K3**、**Qwen3.7-Plus** |
| 中文对话 / 客服 | **文心 ERNIE-4.5**、**豆包** |
| 图像生成 | **GLM-Image**、**Seedream 5.0 Pro**、**Qwen-Image-3.0-Pro** |
| 视频生成 | **CogVideoX-3**、**Seedance 2.0**、**Happyhorse 1.1** |
| 语音交互 | **星火**、**MiniMax speech-2.8-hd**、**GLM-TTS** |
| 端侧 / 手机部署 | **小米 MiMo v2.5-pro** |
| 私有化部署 | 开源：**Qwen**、**GLM**、**DeepSeek**、**Baichuan** |

---

## 七、关键结论（2026 版）

1. **性价比之王**：**DeepSeek-V4-Flash**（缓存命中后近乎免费，输出仅 ¥2/百万 token）——同级能力价格碾压全场。
2. **能力天花板**：**DeepSeek-V4-Pro**、**Qwen3.7-Max**、**GLM-5.2** 在多数榜单稳居国产前列，且价格远低于国际同档（GPT/Claude）。
3. **中外价格差距**：国产旗舰（DeepSeek-V4-Pro 输出 ¥6.3）比国际旗舰（Claude Fable 5 ¥360 / Opus 4.8 ¥180 / GPT-5.6 ¥180）便宜 **28~57 倍**，国产轻量（DeepSeek-V4-Flash ¥2）比 Gemini Flash（¥5.8）还便宜。国产模型唯一的短板是极少数极限推理/前沿任务。
4. **重要更正**：**Kimi K3 是高端定价**（输入 ¥20、输出 ¥100/百万 token），输出价已接近 Claude Sonnet 5（¥108），并高于 GLM-5.2 等国产平衡档，**并非廉价模型**；若追求 Kimi 家性价比，应选 **K2.5**（输出 ¥21）或 **K2.7-Code**（输出 ¥27）。
5. **编程与 Agent**：**GLM-5.2**（本工具即由 GLM-5.2 驱动）与 **Kimi K2.7-Code** 在代码与工具调用上表现突出。
6. **长文本**：**Kimi K3**（1M）与 **DeepSeek-V4**（1M）均可处理百万级上下文；阿里 **qwen-long** 更达 1000 万 token。
7. **开源生态**：**Qwen**、**GLM**、**DeepSeek** 提供高质量开源权重，适合私有化部署。
8. **多模态标配**：图/视频/语音生成已成大厂「全家桶」，阿里百炼已聚合 10+ 家模型一站式调用。

---

## 八、附：主流大模型消费订阅套餐（月会员）

> 注意：本节为各家 **消费端月度订阅**（按会话/额度用量），与前文按 token 计费的 **API 定价**是两套互相独立的计费体系。
> 单位：美元 / 月（括号内为按 1 USD ≈ 7.2 CNY 折算的人民币参考值，官方以美元结算）。
> 价格核对日期：2026-07-24。

### 8.0 横向对标（同价位一览）

| 价位 | Claude | ChatGPT | Gemini | Grok |
|------|--------|---------|--------|------|
| 免费 | Free | Free | Free | 免费（限量） |
| ~$5 | — | — | AI Plus $4.99 | — |
| ~$8~10 | — | Go $8 | — | SuperGrok Lite $10 |
| ~$20 | **Pro $20** | **Plus $20** | **AI Pro $19.99** | — |
| ~$30~40 | — | — | — | **SuperGrok $30** / X Premium+ $40 |
| ~$100（5×） | **Max 5x $100** | **Pro $100** | **AI Ultra 5x $99.99** | — |
| ~$200（20×） | **Max 20x $200** | **Pro $200** | **AI Ultra 20x $199.99** | — |
| $300+ | — | — | — | SuperGrok Heavy $300 |

> 趋势：$20 / $100 / $200 已成为四家「入门 / 5× / 20×」的默认价格锚点。ChatGPT Pro $100 档（2026-04-09 上线）明确对标 Claude Max 同价；Gemini AI Ultra 在 2026 Google I/O 后由 $250 降至 $99.99/$199.99 两档。

### 8.1 Claude（Anthropic）

| 套餐 | 月费（USD） | 用量倍数 | 主要能力 / 额度差异 |
|------|------------|---------|--------------------|
| Free | 免费 | 基准 | 标准模型（Sonnet），基础额度 |
| **Pro** | **$20/月**（约 ¥144；年付约 $17/月） | 5× Free | 全模型（含 Opus 4.8）、Claude Code、Projects；约 30–40 消息/日 |
| **Max 5x** | **$100/月**（约 ¥720） | **5× Pro**（≈ 25× Free） | 约 225 消息/5 小时；更长会话、更高输出上限；claude.ai 与 Claude Code 共享额度 |
| **Max 20x** | **$200/月**（约 ¥1440） | **20× Pro**（≈ 100× Free） | 约 900 消息/5 小时，实际近乎不限；最高优先级 |

- 「5x / 20x」是相对 **Pro** 的每 5 小时会话用量倍数（每 ~5 小时重置）；**各付费档模型能力相同，差异主要在额度/容量**，而非可用模型。

**来源：** [claude.com/pricing](https://claude.com/pricing) ｜ [IntuitionLabs（套餐总览）](https://intuitionlabs.ai/articles/claude-pricing-plans-api-costs) ｜ [IntuitionLabs（Max $100 vs $200）](https://intuitionlabs.ai/articles/claude-max-plan-pricing-usage-limits) ｜ [Usagebar（Pro vs Max 额度）](https://usagebar.com/blog/claude-pro-vs-max-limits) ｜ [CTok（Max 5x vs 20x 对比）](https://ctok.ai/en/claude-code-max-versions)

### 8.2 ChatGPT（OpenAI）

| 套餐 | 月费（USD） | 主要能力 / 额度差异 |
|------|------------|--------------------|
| Free | 免费 | GPT-5 限量使用 |
| **Go** | **$8/月**（约 ¥58） | 入门付费，更高消息额度 |
| **Plus** | **$20/月**（约 ¥144） | 全模型、更高消息额度、图像/高级语音、Sora 有限、Projects |
| **Pro（$100）** | **$100/月**（约 ¥720） | 5× Plus 额度；GPT-5.5 Pro、o1 Pro mode；2026-04-09 上线，对标 Claude Max |
| **Pro（$200）** | **$200/月**（约 ¥1440） | 顶配：无限 Sora 视频、Operator 智能体、最高额度与优先级 |

**来源：** [AI Pricing Guru（ChatGPT 订阅）](https://www.aipricing.guru/chatgpt-subscription-pricing/) ｜ [CloudZero（ChatGPT 定价 2026）](https://www.cloudzero.com/blog/how-much-does-chatgpt-cost/) ｜ [TechJack（ChatGPT 定价）](https://techjacksolutions.com/ai-tools/chatgpt/chatgpt-pricing/)

### 8.3 Gemini（Google）

| 套餐 | 月费（USD） | 主要能力 / 额度差异 |
|------|------------|--------------------|
| Free | 免费 | 基础额度 |
| **Google AI Plus** | **$4.99/月**（约 ¥36） | 有限 Pro 模型访问 + 存储升级 |
| **Google AI Pro** | **$19.99/月**（约 ¥144） | Gemini 3.1 Pro 全功能、Deep Research、Veo 3.1 Fast、2TB 存储、1,000 AI credits、YouTube Premium Lite |
| **Google AI Ultra 5x** | **$99.99/月**（约 ¥720） | 5× Pro 额度；独占 **Deep Think** 推理、完整 Veo 3.1（含音频/4K）、Project Genie、Gemini Agent、更高存储与 credits；2026 I/O 后由 $250 降价 |
| **Google AI Ultra 20x** | **$199.99/月**（约 ¥1440） | 20× Pro 额度，Ultra 全部能力顶配 |

**来源：** [Engadget（AI Ultra 降至 $100 起）](https://www.engadget.com/2176060/the-google-ai-ultra-plan-now-starts-at-100-a-month/) ｜ [Google 官方博客（Google One AI 订阅）](https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/) ｜ [CloudZero（Gemini 定价 2026）](https://www.cloudzero.com/blog/gemini-pricing/) ｜ [eesel AI（AI Ultra 能力详解）](https://www.eesel.ai/blog/google-ai-ultra) ｜ [DigitalApplied（Plus/Pro/Ultra 对比）](https://www.digitalapplied.com/blog/google-ai-plans-free-plus-pro-ultra-2026)

### 8.4 Grok（xAI）

| 套餐 | 月费（USD） | 主要能力 / 额度差异 |
|------|------------|--------------------|
| Free | 免费 | 限量使用 |
| **SuperGrok Lite** | **$10/月**（约 ¥72） | 入门额度，基础 Grok 功能 |
| **SuperGrok** | **$30/月**（约 ¥216） | 更高额度、图像生成、全功能 Grok（仅 Grok AI，不含 X 权益） |
| **X Premium+** | **$40/月**（约 ¥288） | 同款 Grok + X 平台权益（免广告、认证、创作者分成） |
| **SuperGrok Heavy** | **$300/月**（约 ¥2160） | 顶配：Grok Heavy 多智能体、最高算力与最高额度 |

> 注：并无「SuperGrok Premium+」这一档；SuperGrok（$30）为纯 Grok AI，X Premium+（$40）在此基础上捆绑 X 平台权益。

**来源：** [FelloAI（Grok 定价 2026）](https://felloai.com/grok-pricing/) ｜ [AI Tool Analysis（SuperGrok 五档对比）](https://aitoolanalysis.com/supergrok-subscription-price-2026/) ｜ [SuprMind（Grok 定价）](https://suprmind.ai/hub/grok/pricing/)

---

## 九、参考榜单与官方定价

### 评测榜单
- **SuperCLUE**（中文综合能力）：[superclueai.com](https://superclueai.com)
- **OpenCompass**（上海AI实验室）：[opencompass.org.cn](https://opencompass.org.cn)
- **FlagEval**（清华）：[flageval.baai.ac.cn](https://flageval.baai.ac.cn)
- **LMSYS Chatbot Arena**（国际盲测）：[lmarena.ai](https://lmarena.ai)

### 官方定价（核对日期：2026-07-24）
**国产**
- DeepSeek（✅ 精确）：[api-docs.deepseek.com/quick_start/pricing](https://api-docs.deepseek.com/quick_start/pricing)
- Kimi（✅ 精确）：[platform.kimi.com/docs/pricing/chat](https://platform.kimi.com/docs/pricing/chat)
- 智谱 GLM（⚠️ JS 页）：[open.bigmodel.cn/pricing](https://open.bigmodel.cn/pricing) ｜ 文档：[docs.bigmodel.cn](https://docs.bigmodel.cn/cn/guide/start/model-overview)
- 阿里百炼（⚠️ JS 页）：[help.aliyun.com/zh/model-studio](https://help.aliyun.com/zh/model-studio/text-generation-model/) ｜ 模型广场
- 豆包（火山方舟，⚠️ JS 页）：[volcengine.com/docs/82379/1544106](https://www.volcengine.com/docs/82379/1544106)

**国际**
- OpenAI（⚠️ 区域/JS 受限）：[openai.com/api/pricing](https://openai.com/api/pricing)
- Anthropic Claude（✅ 精确，官方模型定价）：[platform.claude.com/docs/en/about-claude/models/overview](https://platform.claude.com/docs/en/about-claude/models/overview) ｜ [anthropic.com/pricing](https://www.anthropic.com/pricing)
- Google Gemini（⚠️ 超时）：[ai.google.dev/pricing](https://ai.google.dev/pricing)

---

*免责声明：DeepSeek（美元折算）、Kimi（人民币原价）与 Claude（美元折算，官方模型定价）价格为 2026-07-24 官方文档精确值；GLM / Qwen / 豆包因价格页 JS 动态渲染无法精确抓取；GPT / Gemini 因官方页区域受限或 JS 渲染无法精确抓取。所标「≈」「⚠️」均为公开近似值。模型能力与价格变动频繁，请以官方数据为准。*
