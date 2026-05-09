# 8岁儿童能力培养 + 睡眠计划指南 Implementation Plan

> **For agentic workers:** Implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `child_development_guide.html` — a single-file, zero-JS, scrolling infographic guide covering 6 core abilities for 8-year-olds and a science-based sleep plan. No interaction, no tabs, no JavaScript.

**Architecture:** Pure HTML + CSS single file. Fixed sticky nav with anchor links. 5 major sections rendered top-to-bottom as a scrolling page. No external dependencies. Follows the CSS variable system from `children_health_guide.html`.

**Tech Stack:** HTML5, CSS custom properties, no JavaScript

**Reference file:** `/Users/victor/Desktop/Claude/children_health_guide.html` — copy its `:root` CSS variables exactly.

---

## File Structure

- **Create:** `/Users/victor/Desktop/Claude/child_development_guide.html`

---

### Task 1: HTML scaffold, CSS, hero section, and sticky nav

**Files:**
- Create: `/Users/victor/Desktop/Claude/child_development_guide.html`

- [ ] **Step 1: Create the file with complete CSS**

Create `/Users/victor/Desktop/Claude/child_development_guide.html` with the following complete content. This is the FULL file for Task 1 (hero + nav + CSS only; section content added in later tasks):

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>8岁儿童成长计划 · 能力培养与睡眠指南</title>
<style>
:root{
  --guide-bg:var(--color-background-primary,#fff);
  --guide-soft:#f6f8f6;
  --guide-text:var(--color-text-primary,#17201b);
  --guide-muted:var(--color-text-secondary,#68736d);
  --guide-faint:var(--color-text-tertiary,#8b9690);
  --guide-border:var(--color-border-tertiary,#dfe6e1);
  --guide-border-strong:var(--color-border-secondary,#bdc9c1);
  --guide-green:#0f6e56;
  --guide-green-bg:#e7f5ef;
  --guide-amber:#89520b;
  --guide-amber-bg:#fff3dc;
  --guide-red:#a32d2d;
  --guide-red-bg:#fff0ed;
  --guide-blue:#1d4ed8;
  --guide-blue-bg:#dbeafe;
  --guide-purple:#6d28d9;
  --guide-purple-bg:#ede9fe;
  --guide-pink:#be185d;
  --guide-pink-bg:#fce7f3;
  --guide-orange:#c2410c;
  --guide-orange-bg:#ffedd5;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",system-ui,sans-serif;
  color:var(--guide-text);
  background:var(--guide-bg);
  line-height:1.65;
}
.wrap{max-width:960px;margin:0 auto;padding:0 20px}

/* Hero */
.hero{
  background:linear-gradient(135deg,#0f6e56 0%,#1a9970 55%,#22c38e 100%);
  color:#fff;
  padding:52px 20px 44px;
  text-align:center;
}
.hero-eyebrow{
  display:inline-block;
  background:rgba(255,255,255,.18);
  border:1px solid rgba(255,255,255,.35);
  border-radius:999px;
  padding:5px 14px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.06em;
  text-transform:uppercase;
  margin-bottom:14px;
}
.hero h1{
  font-size:clamp(26px,5vw,44px);
  font-weight:900;
  line-height:1.1;
  max-width:680px;
  margin:0 auto 12px;
}
.hero-sub{
  font-size:16px;
  opacity:.85;
  max-width:520px;
  margin:0 auto 28px;
}
.hero-stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  max-width:600px;
  margin:0 auto;
}
.hero-stat{
  background:rgba(255,255,255,.14);
  border:1px solid rgba(255,255,255,.25);
  border-radius:10px;
  padding:14px 10px;
}
.hero-stat-num{font-size:28px;font-weight:900;line-height:1}
.hero-stat-label{font-size:12px;opacity:.8;margin-top:4px}

/* Sticky nav */
.sticky-nav{
  position:sticky;
  top:0;
  z-index:10;
  background:rgba(255,255,255,.94);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--guide-border);
  padding:10px 0;
}
.sticky-nav .wrap{display:flex;gap:8px;overflow-x:auto;flex-wrap:nowrap}
.nav-link{
  flex:0 0 auto;
  padding:6px 14px;
  border:1px solid var(--guide-border);
  border-radius:999px;
  font-size:13px;
  font-weight:700;
  color:var(--guide-muted);
  text-decoration:none;
  white-space:nowrap;
  background:var(--guide-bg);
}
.nav-link:hover{background:var(--guide-green-bg);color:var(--guide-green);border-color:var(--guide-green)}

/* Section headings */
.section{padding:40px 0}
.section-label{
  display:inline-flex;
  align-items:center;
  gap:6px;
  font-size:12px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:.08em;
  color:var(--guide-muted);
  margin-bottom:6px;
}
.section-title{font-size:26px;font-weight:900;line-height:1.2;margin-bottom:6px}
.section-desc{font-size:14px;color:var(--guide-muted);max-width:640px;margin-bottom:24px}

/* Ability card */
.ability-card{
  border:1px solid var(--guide-border);
  border-radius:10px;
  background:var(--guide-bg);
  overflow:hidden;
  margin-bottom:16px;
  box-shadow:0 2px 12px rgba(15,110,86,.06);
}
.ability-header{
  display:flex;
  align-items:center;
  gap:14px;
  padding:18px 20px;
  border-bottom:1px solid var(--guide-border);
}
.ability-icon{
  width:52px;height:52px;
  border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  font-size:26px;flex-shrink:0;
}
.ability-header-text{}
.ability-name{font-size:18px;font-weight:800;margin-bottom:2px}
.ability-tagline{font-size:13px;color:var(--guide-muted)}
.ability-body{padding:18px 20px}
.ability-why{
  margin-bottom:14px;
  padding:10px 14px;
  border-radius:8px;
  font-size:13px;
  line-height:1.6;
  border-left:3px solid;
}
.ability-how-title{font-size:13px;font-weight:800;color:var(--guide-muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:.06em}
.ability-how-list{list-style:none;margin-bottom:14px}
.ability-how-list li{
  font-size:14px;
  padding:6px 0 6px 22px;
  position:relative;
  border-bottom:1px solid var(--guide-border);
  line-height:1.55;
}
.ability-how-list li:last-child{border-bottom:none}
.ability-how-list li::before{
  content:"✓";
  position:absolute;left:0;
  color:var(--guide-green);
  font-weight:900;
  font-size:13px;
}
.ability-footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding-top:12px;
  border-top:1px solid var(--guide-border);
  flex-wrap:wrap;
}
.ability-time{
  font-size:13px;
  font-weight:800;
  color:var(--guide-green);
  background:var(--guide-green-bg);
  padding:5px 12px;
  border-radius:999px;
}
.parent-tip{
  flex:1;
  padding:8px 12px;
  background:var(--guide-amber-bg);
  border-radius:8px;
  font-size:12px;
  color:var(--guide-amber);
  line-height:1.5;
}
.parent-tip strong{font-weight:800}

/* Weekly calendar */
.calendar-table{
  width:100%;
  border-collapse:collapse;
  font-size:13px;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 2px 12px rgba(15,110,86,.06);
}
.calendar-table th{
  background:var(--guide-green);
  color:#fff;
  padding:10px 8px;
  font-weight:800;
  text-align:center;
}
.calendar-table td{
  padding:10px 8px;
  border-bottom:1px solid var(--guide-border);
  border-right:1px solid var(--guide-border);
  vertical-align:top;
  background:var(--guide-bg);
  text-align:center;
}
.calendar-table tr:last-child td{border-bottom:none}
.calendar-table td:last-child{border-right:none}
.calendar-table .day-col{font-weight:800;font-size:14px;background:var(--guide-soft);color:var(--guide-text);white-space:nowrap}
.cal-activity{
  display:inline-block;
  margin:2px;
  padding:3px 7px;
  border-radius:999px;
  font-size:11px;
  font-weight:700;
  white-space:nowrap;
}

/* Sleep section */
.sleep-hero{
  background:linear-gradient(135deg,#1e1b4b 0%,#312e81 60%,#4338ca 100%);
  border-radius:12px;
  padding:28px 24px;
  color:#fff;
  margin-bottom:20px;
  text-align:center;
}
.sleep-hero h2{font-size:24px;font-weight:900;margin:12px 0 8px}
.sleep-hero p{font-size:14px;opacity:.85;max-width:480px;margin:0 auto}
.sleep-stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-top:20px;
}
.sleep-stat{
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.2);
  border-radius:10px;
  padding:12px 8px;
  text-align:center;
}
.sleep-stat-num{font-size:26px;font-weight:900}
.sleep-stat-label{font-size:11px;opacity:.75;margin-top:3px}

.sleep-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
.sleep-card{
  border:1px solid var(--guide-border);
  border-radius:10px;
  background:var(--guide-bg);
  padding:18px;
  box-shadow:0 2px 12px rgba(15,110,86,.06);
}
.sleep-card h3{font-size:15px;font-weight:800;margin-bottom:12px}
.schedule-row{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding:7px 0;
  border-bottom:1px solid var(--guide-border);
  font-size:13px;
}
.schedule-row:last-child{border-bottom:none}
.schedule-time{
  font-size:12px;font-weight:800;
  color:var(--guide-green);
  width:52px;flex-shrink:0;
}
.schedule-act{flex:1;line-height:1.5}
.schedule-note{font-size:11px;color:var(--guide-muted);margin-top:1px}

.bedtime-steps{counter-reset:step}
.bedtime-step{
  display:flex;align-items:flex-start;gap:12px;
  padding:10px 0;
  border-bottom:1px solid var(--guide-border);
}
.bedtime-step:last-child{border-bottom:none}
.step-num{
  width:28px;height:28px;
  border-radius:50%;
  background:var(--guide-green);
  color:#fff;
  font-size:13px;font-weight:900;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;
}
.step-content{flex:1}
.step-title{font-size:14px;font-weight:800;margin-bottom:2px}
.step-desc{font-size:13px;color:var(--guide-muted);line-height:1.5}

.bad-habits{list-style:none}
.bad-habits li{
  display:flex;align-items:flex-start;gap:10px;
  padding:8px 0;
  border-bottom:1px solid var(--guide-border);
  font-size:13px;
  line-height:1.55;
}
.bad-habits li:last-child{border-bottom:none}
.bad-habits li::before{
  content:"✕";
  color:var(--guide-red);
  font-weight:900;
  font-size:14px;
  flex-shrink:0;
  margin-top:1px;
}

.consequences-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-top:16px;
}
.consequence-item{
  padding:14px;
  border-radius:10px;
  background:var(--guide-red-bg);
  border:1px solid #fbc4b4;
  text-align:center;
}
.consequence-icon{font-size:26px;display:block;margin-bottom:6px}
.consequence-text{font-size:12px;color:var(--guide-red);font-weight:700;line-height:1.4}

/* Closing callout */
.closing{
  background:linear-gradient(135deg,var(--guide-green-bg) 0%,#c3edd8 100%);
  border:2px solid var(--guide-green);
  border-radius:12px;
  padding:24px;
  margin:32px 0 48px;
  text-align:center;
}
.closing h2{font-size:20px;font-weight:900;color:var(--guide-green);margin-bottom:10px}
.closing p{font-size:14px;color:var(--guide-text);line-height:1.7;max-width:560px;margin:0 auto 8px}

/* Responsive */
@media(max-width:600px){
  .hero-stats{grid-template-columns:1fr 1fr 1fr;gap:8px}
  .hero-stat-num{font-size:22px}
  .ability-footer{flex-direction:column;align-items:stretch}
  .sleep-grid{grid-template-columns:1fr}
  .sleep-stats{grid-template-columns:1fr 1fr 1fr}
  .consequences-grid{grid-template-columns:1fr 1fr}
  .calendar-table{font-size:11px}
  .calendar-table td,.calendar-table th{padding:7px 4px}
}
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="hero-eyebrow">武汉 · 2026年 · 科学育儿</div>
  <h1>8岁，正是全力成长的时候</h1>
  <p class="hero-sub">6大核心能力培养计划 + 科学睡眠方案，帮助你成为更好的自己</p>
  <div class="hero-stats">
    <div class="hero-stat">
      <div class="hero-stat-num">9–11h</div>
      <div class="hero-stat-label">每天需要睡眠</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-num">6大</div>
      <div class="hero-stat-label">核心能力</div>
    </div>
    <div class="hero-stat">
      <div class="hero-stat-num">60min</div>
      <div class="hero-stat-label">每日运动时长</div>
    </div>
  </div>
</section>

<!-- STICKY NAV -->
<nav class="sticky-nav">
  <div class="wrap">
    <a class="nav-link" href="#abilities">🧩 6大能力</a>
    <a class="nav-link" href="#schedule">🗓 每周计划</a>
    <a class="nav-link" href="#sleep">🌙 睡眠方案</a>
    <a class="nav-link" href="#bedtime">🛁 睡前5步</a>
    <a class="nav-link" href="#habits">⚠️ 坏习惯</a>
    <a class="nav-link" href="#closing">💪 加油</a>
  </div>
</nav>

<!-- CONTENT PLACEHOLDER: Tasks 2–5 will insert sections here -->

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify hero and nav render correctly**

Expected: green gradient hero with 3 stat boxes, sticky nav with 6 anchor links.

- [ ] **Step 3: Commit scaffold**

```bash
cd /Users/victor/Desktop/Claude
git add child_development_guide.html
GEMINI_CLI_TRUST_WORKSPACE=true git commit -m "feat: scaffold child_development_guide.html — hero, nav, CSS"
```

---

### Task 2: Section A — 6大核心能力

**Files:**
- Modify: `/Users/victor/Desktop/Claude/child_development_guide.html`

Insert the following HTML block between the sticky `<nav>` closing tag and the closing `</body>` tag. Replace the `<!-- CONTENT PLACEHOLDER -->` comment.

- [ ] **Step 1: Insert the 6 abilities section HTML**

Insert after `</nav>`:

```html
<div class="wrap">

<!-- ═══ SECTION: 6大能力 ═══ -->
<section id="abilities" class="section">
  <div class="section-label">🧩 核心能力</div>
  <h2 class="section-title">8岁需要重点培养的6大能力</h2>
  <p class="section-desc">7–9岁是大脑神经元连接的黄金敏感期。这6项能力现在锻炼，事半功倍。</p>

  <!-- 能力1：专注力 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#e7f5ef">🧠</div>
      <div class="ability-header-text">
        <div class="ability-name">专注力</div>
        <div class="ability-tagline">持续专心做一件事的能力 · 学习效率的基础</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#e7f5ef;border-left-color:#0f6e56;color:#174d39">
        🔬 <strong>为什么8岁要练：</strong>大脑前额叶皮质（管理专注）正在快速发育。现在训练，相当于给大脑"装CPU升级包"，效果是成年后训练的3倍。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>番茄钟学习法：</strong>25分钟专注做一件事，然后休息5分钟。手机放到另一个房间。</li>
        <li><strong>棋类游戏：</strong>围棋/象棋/五子棋，每周2次，每次30分钟。需要持续思考，专注力训练效果极强。</li>
        <li><strong>拼图/乐高：</strong>选择比你年龄稍难一点的难度，独立完成，中途不求助。</li>
        <li><strong>固定学习环境：</strong>每天在同一个地方做作业，桌面只放当前需要的东西。</li>
        <li><strong>一次只做一件事：</strong>不边吃饭边看视频，不边写作业边听音乐。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每天至少1次连续专注 ≥ 25分钟</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>孩子专注时，不要进房间"送水果"。哪怕好意，也会破坏专注状态。等他停下来再说话。</div>
      </div>
    </div>
  </div>

  <!-- 能力2：体能 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#ffedd5">💪</div>
      <div class="ability-header-text">
        <div class="ability-name">体能与运动</div>
        <div class="ability-tagline">身体协调、力量、耐力 · 大脑发育的基础</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#ffedd5;border-left-color:#c2410c;color:#7c2d12">
        🔬 <strong>为什么8岁要练：</strong>运动直接促进大脑海马体（管记忆）发育。运动1小时后，记忆力和专注力提升30%。运动越少，成绩越差，这是科学证实的。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>跑步：</strong>每天20–30分钟，心率≥120次/分钟才算有效。可以绕小区跑，或跑步机。</li>
        <li><strong>跳绳：</strong>每天100–300个。简单、便宜，协调性和体能一起练。</li>
        <li><strong>游泳：</strong>每周1–2次，全身肌肉都能练到，对脊椎发育特别好。</li>
        <li><strong>球类运动：</strong>足球/篮球/羽毛球，培养手眼协调和团队合作，每周2–3次。</li>
        <li><strong>户外自由活动：</strong>放学后至少30分钟户外跑跳玩耍，不算坐在秋千上刷手机。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每天累计60分钟中等强度运动（WHO标准）</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>走路上学、爬楼梯都算运动。减少接送，多让孩子走路，每天多走2000步，一年多走730000步。</div>
      </div>
    </div>
  </div>

  <!-- 能力3：阅读与表达 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#dbeafe">📖</div>
      <div class="ability-header-text">
        <div class="ability-name">阅读与表达</div>
        <div class="ability-tagline">理解文字、语言组织、逻辑叙述的能力</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#dbeafe;border-left-color:#1d4ed8;color:#1e3a8a">
        🔬 <strong>为什么8岁要练：</strong>8岁是"阅读爆发期"。这一年词汇量增长速度是此前任何一年的2倍。错过这个窗口，语言能力的发展将明显滞后。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>每天自主阅读：</strong>20–30分钟纸质书（不算听书、有声读物）。可以是漫画、科普、故事，不强制名著。</li>
        <li><strong>睡前亲子阅读：</strong>爸妈朗读10–15分钟，或轮流读。昏黄灯光，不看手机。</li>
        <li><strong>饭桌分享：</strong>每天晚饭时说今天学到的最有趣的一件事（锻炼语言组织能力）。</li>
        <li><strong>每周写日记：</strong>3–5句话即可，描述今天发生的事和自己的感受。</li>
        <li><strong>复述故事：</strong>读完一本书，讲给爸妈听"里面的故事"。不用背诵，用自己的话。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每天阅读30–40分钟</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>孩子喜欢读漫画、《豆豆》之类的书，不要阻止。让阅读先变成乐趣，才能变成习惯。</div>
      </div>
    </div>
  </div>

  <!-- 能力4：创造力 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#ede9fe">🎨</div>
      <div class="ability-header-text">
        <div class="ability-name">创造力与想象力</div>
        <div class="ability-tagline">用新方式解决问题 · 自由想象和创作的能力</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#ede9fe;border-left-color:#6d28d9;color:#4c1d95">
        🔬 <strong>为什么8岁要练：</strong>创造力不是天赋，是可以训练的。8岁的右脑活跃度是成年人的3倍，是激活创造思维最便宜的时期。现在"玩出来"的创造力，将来会转化为解决实际问题的能力。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>自由画画：</strong>不评判好不好看，给孩子空白纸和彩笔，让他想画什么画什么。</li>
        <li><strong>搭建游戏：</strong>积木、废纸箱、纸杯，用日常材料做模型或建筑。</li>
        <li><strong>角色扮演：</strong>让孩子自编故事，当导演，爸妈配合演角色。</li>
        <li><strong>手工制作：</strong>折纸、剪贴、做贺卡、包装盒改造。重在动手，结果不重要。</li>
        <li><strong>音乐接触：</strong>哪怕只是随意哼唱、打节拍、用锅碗瓢盆打击乐，都是创造力训练。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每天30分钟自由创作时间</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>不要说"这画的什么呀"。改说"给我讲讲这幅画的故事吧"，保护孩子的创作热情。</div>
      </div>
    </div>
  </div>

  <!-- 能力5：社交与情绪 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#fce7f3">🤝</div>
      <div class="ability-header-text">
        <div class="ability-name">社交与情绪管理</div>
        <div class="ability-tagline">与他人相处 · 理解情绪 · 处理冲突的能力</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#fce7f3;border-left-color:#be185d;color:#831843">
        🔬 <strong>为什么8岁要练：</strong>8岁开始进入"同伴关系敏感期"，友谊对心理健康的影响超过学习成绩。研究表明，社交能力强的孩子，长大后职业发展更成功。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>每周玩耍时间：</strong>和同学/朋友当面玩耍（非屏幕）≥1次，持续≥1小时。</li>
        <li><strong>情绪表达练习：</strong>教孩子用"我感到…，因为…"句式表达感受，而不是发脾气。</li>
        <li><strong>冲突引导：</strong>和同学发生矛盾时，先让孩子自己想解决办法，卡住了再帮。</li>
        <li><strong>家庭决策参与：</strong>让孩子参与日常决定（今天吃什么？周末去哪？），培养意见表达能力。</li>
        <li><strong>帮助他人：</strong>鼓励孩子帮助有困难的同学，从小事开始，培养利他心。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每周至少2次面对面社交活动</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>不要替孩子解决所有冲突。社交摩擦是孩子学习处理关系的机会，过度保护反而阻碍成长。</div>
      </div>
    </div>
  </div>

  <!-- 能力6：自理与责任 -->
  <div class="ability-card">
    <div class="ability-header">
      <div class="ability-icon" style="background:#fef3c7">🏠</div>
      <div class="ability-header-text">
        <div class="ability-name">自理与责任感</div>
        <div class="ability-tagline">照顾自己 · 完成任务 · 承担家庭责任</div>
      </div>
    </div>
    <div class="ability-body">
      <div class="ability-why" style="background:#fef3c7;border-left-color:#89520b;color:#6b370a">
        🔬 <strong>为什么8岁要练：</strong>8岁已经完全有能力承担日常自理和家务。自理能力直接建立自信心和独立性。长期"什么都不用做"的孩子，进入青春期后容易焦虑和依赖。
      </div>
      <div class="ability-how-title">怎么练（可直接执行）</div>
      <ul class="ability-how-list">
        <li><strong>自己整理书包：</strong>每天放学后和睡前，自己检查和整理书包，不靠爸妈提醒。</li>
        <li><strong>固定家务任务：</strong>分配一项专属于你的家务（倒垃圾/摆碗筷/扫地），每天完成。</li>
        <li><strong>自己设闹钟起床：</strong>不靠爸妈叫，自己定好闹钟，自己起床。</li>
        <li><strong>管理零花钱：</strong>每周有固定零花钱，自己决定怎么花，用小本子记账。</li>
        <li><strong>整理自己的房间：</strong>每周大扫除一次，床铺、书桌、玩具柜由自己负责。</li>
      </ul>
      <div class="ability-footer">
        <span class="ability-time">⏱ 每天家务 15–20 分钟</span>
        <div class="parent-tip"><strong>👨‍👩‍👦 家长提示：</strong>允许孩子做家务时"做得不完美"。碗洗得不干净，再洗一次。重点是参与和习惯，不是结果。</div>
      </div>
    </div>
  </div>

</section>
<!-- END 6大能力 -->
```

- [ ] **Step 2: Commit**

```bash
GEMINI_CLI_TRUST_WORKSPACE=true git add child_development_guide.html
GEMINI_CLI_TRUST_WORKSPACE=true git commit -m "feat: add 6 core ability cards to child_development_guide"
```

---

### Task 3: Section B — 每周能力培养日历

**Files:**
- Modify: `/Users/victor/Desktop/Claude/child_development_guide.html`

Insert after the `<!-- END 6大能力 -->` comment:

- [ ] **Step 1: Insert weekly calendar section**

```html
<!-- ═══ SECTION: 每周计划 ═══ -->
<section id="schedule" class="section">
  <div class="section-label">🗓 每周计划</div>
  <h2 class="section-title">每周能力培养日历</h2>
  <p class="section-desc">把能力训练融入每天的日常，小步骤，大改变。</p>

  <div style="overflow-x:auto;margin-bottom:16px">
  <table class="calendar-table" style="min-width:600px">
    <thead>
      <tr>
        <th style="width:52px">天</th>
        <th>🌅 早晨（起床后）</th>
        <th>🌤 放学后</th>
        <th>🌙 晚上</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="day-col">周一</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">💪 跑步20分钟</span></td>
        <td><span class="cal-activity" style="background:#e7f5ef;color:#0f6e56">🧠 番茄钟作业</span></td>
        <td><span class="cal-activity" style="background:#dbeafe;color:#1d4ed8">📖 阅读30分钟</span></td>
      </tr>
      <tr>
        <td class="day-col">周二</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">🪢 跳绳100个</span></td>
        <td><span class="cal-activity" style="background:#ede9fe;color:#6d28d9">🎨 画画/手工</span></td>
        <td><span class="cal-activity" style="background:#fce7f3;color:#be185d">📝 写日记</span></td>
      </tr>
      <tr>
        <td class="day-col">周三</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">💪 跑步20分钟</span></td>
        <td><span class="cal-activity" style="background:#e7f5ef;color:#0f6e56">♟ 棋类游戏</span></td>
        <td><span class="cal-activity" style="background:#dbeafe;color:#1d4ed8">📖 亲子阅读</span></td>
      </tr>
      <tr>
        <td class="day-col">周四</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">🪢 跳绳200个</span></td>
        <td><span class="cal-activity" style="background:#e7f5ef;color:#0f6e56">🧠 番茄钟作业</span></td>
        <td><span class="cal-activity" style="background:#ede9fe;color:#6d28d9">🎭 角色扮演</span></td>
      </tr>
      <tr>
        <td class="day-col">周五</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">💪 跑步30分钟</span></td>
        <td><span class="cal-activity" style="background:#fce7f3;color:#be185d">🤝 和朋友玩耍</span></td>
        <td><span class="cal-activity" style="background:#dbeafe;color:#1d4ed8">📖 自由阅读</span></td>
      </tr>
      <tr>
        <td class="day-col">周六</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">🏊 游泳/球类60分钟</span></td>
        <td><span class="cal-activity" style="background:#fce7f3;color:#be185d">🤝 朋友/家人社交</span></td>
        <td><span class="cal-activity" style="background:#ede9fe;color:#6d28d9">🎲 家庭创意游戏</span></td>
      </tr>
      <tr>
        <td class="day-col">周日</td>
        <td><span class="cal-activity" style="background:#ffedd5;color:#c2410c">🌳 户外活动60分钟</span></td>
        <td><span class="cal-activity" style="background:#fef3c7;color:#89520b">🏠 整理房间+家务</span></td>
        <td><span class="cal-activity" style="background:#e7f5ef;color:#0f6e56">📋 为新一周做计划</span></td>
      </tr>
    </tbody>
  </table>
  </div>

  <!-- 图例 -->
  <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:12px">
    <span class="cal-activity" style="background:#e7f5ef;color:#0f6e56">🧠 专注力</span>
    <span class="cal-activity" style="background:#ffedd5;color:#c2410c">💪 体能</span>
    <span class="cal-activity" style="background:#dbeafe;color:#1d4ed8">📖 阅读表达</span>
    <span class="cal-activity" style="background:#ede9fe;color:#6d28d9">🎨 创造力</span>
    <span class="cal-activity" style="background:#fce7f3;color:#be185d">🤝 社交情绪</span>
    <span class="cal-activity" style="background:#fef3c7;color:#89520b">🏠 自理责任</span>
  </div>
</section>
<!-- END 每周计划 -->
```

- [ ] **Step 2: Commit**

```bash
GEMINI_CLI_TRUST_WORKSPACE=true git add child_development_guide.html
GEMINI_CLI_TRUST_WORKSPACE=true git commit -m "feat: add weekly ability calendar to child_development_guide"
```

---

### Task 4: Section C — 睡眠计划（科学数据 + 作息表）

**Files:**
- Modify: `/Users/victor/Desktop/Claude/child_development_guide.html`

Insert after `<!-- END 每周计划 -->`:

- [ ] **Step 1: Insert sleep section**

```html
<!-- ═══ SECTION: 睡眠 ═══ -->
<section id="sleep" class="section">
  <div class="section-label">🌙 睡眠计划</div>
  <h2 class="section-title">睡够了，才能长高长聪明</h2>
  <p class="section-desc">睡眠不是"休息"，是大脑处理记忆、分泌生长激素的最重要时间。</p>

  <div class="sleep-hero">
    <div style="font-size:48px">🌙</div>
    <h2>8岁需要睡多少？</h2>
    <p>世界卫生组织（WHO）和中国儿科学会的建议：<strong>6–12岁儿童每天9–12小时</strong>。8岁最佳睡眠时长：<strong>9–10小时</strong>。</p>
    <div class="sleep-stats">
      <div class="sleep-stat">
        <div class="sleep-stat-num">9–10h</div>
        <div class="sleep-stat-label">每天最佳睡眠</div>
      </div>
      <div class="sleep-stat">
        <div class="sleep-stat-num">21:00前</div>
        <div class="sleep-stat-label">建议入睡时间</div>
      </div>
      <div class="sleep-stat">
        <div class="sleep-stat-num">6:00–6:30</div>
        <div class="sleep-stat-label">建议起床时间</div>
      </div>
    </div>
  </div>

  <!-- 为什么睡眠重要 -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
    <div style="padding:16px;border:1px solid var(--guide-border);border-radius:10px;background:#fff;box-shadow:0 2px 12px rgba(15,110,86,.06)">
      <div style="font-size:22px;margin-bottom:8px">🧠</div>
      <div style="font-size:14px;font-weight:800;margin-bottom:6px">睡眠时大脑在做什么</div>
      <div style="font-size:13px;color:var(--guide-muted);line-height:1.65">
        深度睡眠时，大脑会把白天学到的东西从"短期记忆"转移到"长期记忆"。<br><br>
        昨天学的乘法口诀，睡一觉就记住了——这是真的！
      </div>
    </div>
    <div style="padding:16px;border:1px solid var(--guide-border);border-radius:10px;background:#fff;box-shadow:0 2px 12px rgba(15,110,86,.06)">
      <div style="font-size:22px;margin-bottom:8px">📏</div>
      <div style="font-size:14px;font-weight:800;margin-bottom:6px">生长激素和身高</div>
      <div style="font-size:13px;color:var(--guide-muted);line-height:1.65">
        约<strong>70–80%的生长激素</strong>在深度睡眠（晚上10点–凌晨2点）分泌。<br><br>
        熬夜 = 少长高。每天少睡1小时，一年少长约0.5–1cm。
      </div>
    </div>
  </div>

  <!-- 每日作息 + 睡前5步 -->
  <div class="sleep-grid">
    <!-- 理想作息时间表 -->
    <div class="sleep-card">
      <h3>⏰ 理想作息时间表</h3>
      <div class="schedule-row">
        <div class="schedule-time">6:00</div>
        <div class="schedule-act">
          <div>自然醒 / 闹钟</div>
          <div class="schedule-note">不要赖床，起床后喝温水一杯</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">6:10</div>
        <div class="schedule-act">
          <div>洗脸 · 刷牙</div>
          <div class="schedule-note">2分钟刷牙，上下前后都要刷</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">6:30</div>
        <div class="schedule-act">
          <div>吃早饭</div>
          <div class="schedule-note">热干面/粥/鸡蛋，绝对不能跳过早饭</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">7:00</div>
        <div class="schedule-act">出发上学</div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">15:30</div>
        <div class="schedule-act">
          <div>放学 → 先运动</div>
          <div class="schedule-note">运动后再做作业，效率更高</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">17:00</div>
        <div class="schedule-act">
          <div>作业 + 阅读</div>
          <div class="schedule-note">番茄钟，每25分钟休息5分钟</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">18:30</div>
        <div class="schedule-act">
          <div>晚饭</div>
          <div class="schedule-note">全家一起吃，不看手机</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">19:30</div>
        <div class="schedule-act">
          <div>自由时间</div>
          <div class="schedule-note">画画/手工/棋类，尽量不看屏幕</div>
        </div>
      </div>
      <div class="schedule-row">
        <div class="schedule-time">20:30</div>
        <div class="schedule-act">
          <div style="color:var(--guide-green);font-weight:800">开始睡前程序 →</div>
          <div class="schedule-note">见右侧"睡前5步"</div>
        </div>
      </div>
      <div class="schedule-row" style="background:var(--guide-green-bg)">
        <div class="schedule-time" style="color:var(--guide-green);font-weight:900">21:00</div>
        <div class="schedule-act">
          <div style="font-weight:800;color:var(--guide-green)">🌙 关灯睡觉</div>
          <div class="schedule-note">保证9–10小时，早上6:00自然醒</div>
        </div>
      </div>
    </div>

    <!-- 睡前5步 -->
    <div class="sleep-card" id="bedtime">
      <h3>🛁 睡前5步程序（20:30开始）</h3>
      <div class="bedtime-steps">
        <div class="bedtime-step">
          <div class="step-num">1</div>
          <div class="step-content">
            <div class="step-title">🛁 洗澡 / 洗脚（10分钟）</div>
            <div class="step-desc">热水泡脚或洗澡，体温先升后降，帮助身体进入睡眠状态。水温约38–40°C。</div>
          </div>
        </div>
        <div class="bedtime-step">
          <div class="step-num">2</div>
          <div class="step-content">
            <div class="step-title">🦷 刷牙（2分钟）</div>
            <div class="step-desc">晚上刷牙比早上更重要！睡觉时唾液减少，细菌更活跃。含氟牙膏，刷完不漱口。</div>
          </div>
        </div>
        <div class="bedtime-step">
          <div class="step-num">3</div>
          <div class="step-content">
            <div class="step-title">📖 亲子阅读（10分钟）</div>
            <div class="step-desc">爸妈朗读或和你轮流读。使用昏黄台灯，不看手机和平板。纸质书最佳。</div>
          </div>
        </div>
        <div class="bedtime-step">
          <div class="step-num">4</div>
          <div class="step-content">
            <div class="step-title">🎒 整理明天的书包（3分钟）</div>
            <div class="step-desc">检查明天的课程表，准备好作业本和文具。让大脑"结束"今天的任务感。</div>
          </div>
        </div>
        <div class="bedtime-step">
          <div class="step-num">5</div>
          <div class="step-content">
            <div class="step-title">💤 关灯 · 腹式呼吸（5分钟）</div>
            <div class="step-desc">躺下后做3–5次腹式呼吸：<br>用鼻子吸气4秒 → 屏息2秒 → 用嘴呼气6秒。<br>重复几次，身体会自动放松入睡。</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 睡眠不足的危害 -->
  <h3 style="font-size:16px;font-weight:800;margin-bottom:12px">😴 睡眠不足会怎样？</h3>
  <div class="consequences-grid">
    <div class="consequence-item">
      <span class="consequence-icon">🧠</span>
      <div class="consequence-text">专注力下降 40%<br><small style="font-weight:400;color:#7f1d1d">相当于喝了2杯酒后的状态</small></div>
    </div>
    <div class="consequence-item">
      <span class="consequence-icon">📚</span>
      <div class="consequence-text">记忆力减退<br><small style="font-weight:400;color:#7f1d1d">昨天学的东西很快就忘</small></div>
    </div>
    <div class="consequence-item">
      <span class="consequence-icon">📏</span>
      <div class="consequence-text">身高发育减缓<br><small style="font-weight:400;color:#7f1d1d">生长激素分泌减少</small></div>
    </div>
    <div class="consequence-item">
      <span class="consequence-icon">😡</span>
      <div class="consequence-text">情绪暴躁<br><small style="font-weight:400;color:#7f1d1d">更容易哭、发脾气、与朋友闹矛盾</small></div>
    </div>
    <div class="consequence-item">
      <span class="consequence-icon">🤒</span>
      <div class="consequence-text">免疫力下降<br><small style="font-weight:400;color:#7f1d1d">更容易感冒发烧生病</small></div>
    </div>
    <div class="consequence-item">
      <span class="consequence-icon">⚖️</span>
      <div class="consequence-text">肥胖风险增加<br><small style="font-weight:400;color:#7f1d1d">睡眠不足影响食欲调节激素</small></div>
    </div>
  </div>

</section>
<!-- END 睡眠 -->
```

- [ ] **Step 2: Commit**

```bash
GEMINI_CLI_TRUST_WORKSPACE=true git add child_development_guide.html
GEMINI_CLI_TRUST_WORKSPACE=true git commit -m "feat: add sleep science section and daily schedule to child_development_guide"
```

---

### Task 5: Bad habits section + closing callout + final polish

**Files:**
- Modify: `/Users/victor/Desktop/Claude/child_development_guide.html`

Insert after `<!-- END 睡眠 -->`:

- [ ] **Step 1: Insert bad habits section and closing**

```html
<!-- ═══ SECTION: 坏习惯 ═══ -->
<section id="habits" class="section" style="padding-top:0">
  <div class="section-label">⚠️ 要避免的坏习惯</div>
  <h2 class="section-title">这5个坏习惯会偷走你的睡眠</h2>

  <div style="border:1px solid var(--guide-border);border-radius:10px;background:#fff;padding:18px;box-shadow:0 2px 12px rgba(15,110,86,.06)">
    <ul class="bad-habits">
      <li>
        <div>
          <strong>睡前1小时看手机/平板</strong><br>
          <span style="color:var(--guide-muted);font-size:12px">屏幕蓝光会抑制褪黑素分泌（让你想睡觉的激素），让大脑误以为还是白天。睡前1小时必须放下所有屏幕。</span>
        </div>
      </li>
      <li>
        <div>
          <strong>睡前吃零食/喝饮料</strong><br>
          <span style="color:var(--guide-muted);font-size:12px">血糖升高后会干扰深度睡眠。如果饿，睡前30分钟可以喝一杯温牛奶，不要吃零食。</span>
        </div>
      </li>
      <li>
        <div>
          <strong>房间太亮、太热</strong><br>
          <span style="color:var(--guide-muted);font-size:12px">理想睡眠环境：完全黑暗（用遮光窗帘），室温18–22°C。开着灯睡觉会减少深度睡眠的比例。</span>
        </div>
      </li>
      <li>
        <div>
          <strong>周末睡懒觉超过2小时</strong><br>
          <span style="color:var(--guide-muted);font-size:12px">周末比平时多睡2小时以上，会打乱生物钟，导致周一"社交时差"——上课昏昏欲睡。周末最多晚起1小时。</span>
        </div>
      </li>
      <li>
        <div>
          <strong>把手机/平板带进卧室</strong><br>
          <span style="color:var(--guide-muted);font-size:12px">即使手机放着不用，只要知道它在旁边，大脑就会保持"警觉状态"。手机充电放客厅，卧室只用来睡觉。</span>
        </div>
      </li>
    </ul>
  </div>
</section>
<!-- END 坏习惯 -->

<!-- ═══ CLOSING ═══ -->
<section id="closing" class="section" style="padding-top:8px">
  <div class="closing">
    <h2>💪 你已经知道了，现在开始做吧</h2>
    <p>不需要每一件事都完美做到。<strong>从今天晚上开始：9点关灯，5步睡前程序。</strong></p>
    <p>明天早上：<strong>先运动，再做作业。</strong>一周后你会发现自己精力更好，作业完成得更快。</p>
    <p style="margin-top:12px;color:var(--guide-green);font-weight:800;font-size:15px">成长是每天一点点的积累。加油！🌱</p>
  </div>
</section>

</div><!-- end .wrap -->
```

- [ ] **Step 2: Final check — open in browser, scroll through entire page**

Verify:
- All 5 nav anchors jump to correct sections
- Sticky nav sticks on scroll
- All 6 ability cards render correctly
- Calendar table displays (may need horizontal scroll on mobile)
- Sleep timeline and bedtime steps display
- Consequences grid is 3 columns
- Bad habits and closing callout render correctly
- No horizontal overflow on desktop (960px max width)
- Page renders acceptably on mobile (375px width)

- [ ] **Step 3: Final commit**

```bash
GEMINI_CLI_TRUST_WORKSPACE=true git add child_development_guide.html
GEMINI_CLI_TRUST_WORKSPACE=true git commit -m "feat: complete child_development_guide.html — 6 abilities, weekly calendar, sleep plan"
```
