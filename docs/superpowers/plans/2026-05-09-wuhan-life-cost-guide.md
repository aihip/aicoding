# 武汉生活成本认知指南 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `wuhan_life_cost_guide.html` — a single-file Wuhan cost-of-living guide for an 8-year-old boy, using 热干面 (10元/bowl) as the universal price reference unit.

**Architecture:** Single self-contained HTML file with inline CSS and vanilla JS. Five tabs (一天花多少/一个月账单/一年大数字/普通人怎么挣/妈妈的付出), expandable cards, search with debounce+highlight, category filter via event delegation, and an interactive "需要工作多久" calculator. Follows the exact same CSS variable system as `children_health_guide.html`.

**Tech Stack:** HTML5, CSS custom properties (--guide-* variables), vanilla JavaScript (no dependencies)

---

## File Structure

- **Create:** `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html` — complete single-file output (HTML + CSS + JS)

---

### Task 1: HTML scaffold, CSS variables, header, toolbar

**Files:**
- Create: `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html`

- [ ] **Step 1: Create the file with DOCTYPE, head, CSS variables, and body scaffold**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>武汉生活成本认知指南</title>
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
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--font-sans,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);color:var(--guide-text);background:var(--guide-bg);letter-spacing:0}
.wrap{max-width:960px;margin:0 auto;padding:0 20px}

/* Header */
.page-header{padding:32px 0 20px}
.eyebrow{font-size:12px;color:var(--guide-muted);font-weight:600;text-transform:uppercase;letter-spacing:.06em}
h1{font-size:28px;line-height:1.18;font-weight:700;color:var(--guide-text);max-width:720px;margin-top:4px}
.sub{font-size:14px;line-height:1.65;color:var(--guide-muted);max-width:860px;margin-top:8px}
.noodle-rate{display:inline-flex;align-items:center;gap:6px;margin-top:12px;padding:8px 14px;background:var(--guide-green-bg);border:1px solid var(--guide-border);border-radius:20px;font-size:13px;color:var(--guide-green);font-weight:600}

/* Toolbar */
.toolbar{position:sticky;top:0;z-index:3;background:rgba(255,255,255,.92);background:color-mix(in srgb,var(--guide-bg) 92%,transparent);backdrop-filter:blur(8px);padding:12px 0 10px;border-bottom:1px solid var(--guide-border);margin-bottom:14px}
.search-row{position:relative;display:flex;gap:8px;margin-bottom:10px}
#search{width:100%;min-height:42px;font-size:14px;padding:9px 12px 9px 38px;border:1px solid var(--guide-border-strong);border-radius:8px;background:var(--guide-bg);color:var(--guide-text)}
#search:focus{outline:none;border-color:var(--guide-green);box-shadow:0 0 0 3px color-mix(in srgb,var(--guide-green) 15%,transparent)}
.search-icon{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:16px;color:var(--guide-faint);pointer-events:none}
.clear-btn{height:42px;padding:0 14px;border:1px solid var(--guide-border);border-radius:8px;background:var(--guide-bg);font-size:13px;color:var(--guide-muted);cursor:pointer;white-space:nowrap}
.clear-btn:hover{background:var(--guide-soft)}

/* Tabs */
.tab-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.tab-btn{padding:7px 14px;border:1px solid var(--guide-border);border-radius:20px;font-size:13px;font-weight:500;color:var(--guide-muted);background:var(--guide-bg);cursor:pointer;white-space:nowrap}
.tab-btn:hover{background:var(--guide-soft)}
.tab-btn.active{background:var(--guide-green);color:#fff;border-color:var(--guide-green)}

/* Category filter */
.cat-row{display:flex;gap:6px;flex-wrap:wrap;min-height:32px}
.cat-btn{padding:4px 12px;border:1px solid var(--guide-border);border-radius:20px;font-size:12px;color:var(--guide-muted);background:var(--guide-bg);cursor:pointer;white-space:nowrap}
.cat-btn:hover{background:var(--guide-soft)}
.cat-btn.active{background:var(--guide-green-bg);color:var(--guide-green);border-color:var(--guide-green);font-weight:600}

/* Cards grid */
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;padding-bottom:40px}
.card{border:1px solid var(--guide-border);border-radius:8px;background:var(--guide-bg);overflow:hidden}
.card[hidden]{display:none}
.card-head{width:100%;text-align:left;background:none;border:none;padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.card-head:hover{background:var(--guide-soft)}
.card-head:focus-visible{outline:2px solid var(--guide-green);outline-offset:-2px}
.card-title{font-size:14px;font-weight:600;color:var(--guide-text);flex:1;text-align:left}
.card-meta{display:flex;align-items:center;gap:6px;flex-shrink:0}
.bowl-badge{font-size:11px;padding:2px 7px;border-radius:10px;background:var(--guide-green-bg);color:var(--guide-green);font-weight:700;white-space:nowrap}
.chevron{color:var(--guide-faint);font-size:12px;transition:transform .2s;flex-shrink:0}
.card.open .chevron{transform:rotate(180deg)}
.card-body{padding:0 16px 14px;border-top:1px solid var(--guide-border);display:none}
.card.open .card-body{display:block}
.card-price{font-size:22px;font-weight:700;color:var(--guide-green);margin:10px 0 4px}
.card-brief{font-size:13px;line-height:1.6;color:var(--guide-muted);margin-bottom:10px}
.card-detail{font-size:13px;line-height:1.65;color:var(--guide-text)}
.card-detail ul{padding-left:18px;margin-top:4px}
.card-detail li{margin-bottom:2px}
.parent-tip{margin-top:10px;padding:8px 12px;background:var(--guide-amber-bg);border-radius:6px;font-size:12px;color:var(--guide-amber);line-height:1.55}
.parent-tip strong{font-weight:700}

/* Total card special style */
.card.total{border-color:var(--guide-green);background:var(--guide-green-bg)}
.card.total .card-title{color:var(--guide-green)}

/* Search highlight */
mark{background:rgba(255,212,0,.4);color:inherit;border-radius:2px;padding:0 1px}

/* No results */
.no-results{display:none;padding:40px 20px;text-align:center;color:var(--guide-muted);font-size:14px;grid-column:1/-1}
.no-results.visible{display:block}

/* Calculator */
.calculator{margin:24px 0 40px;padding:20px;border:1px solid var(--guide-border);border-radius:8px;background:var(--guide-soft)}
.calc-title{font-size:16px;font-weight:700;margin-bottom:4px}
.calc-sub{font-size:13px;color:var(--guide-muted);margin-bottom:16px}
.calc-row{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:14px}
.calc-select{padding:8px 12px;border:1px solid var(--guide-border-strong);border-radius:8px;font-size:13px;color:var(--guide-text);background:var(--guide-bg);min-width:160px}
.calc-select:focus{outline:none;border-color:var(--guide-green)}
.calc-eq{font-size:18px;color:var(--guide-faint)}
.calc-result{padding:14px 20px;border-radius:8px;background:var(--guide-green-bg);border:1px solid var(--guide-border)}
.calc-result-main{font-size:20px;font-weight:700;color:var(--guide-green)}
.calc-result-bowl{font-size:14px;color:var(--guide-muted);margin-top:4px}

@media(max-width:600px){
  h1{font-size:22px}
  .cards-grid{grid-template-columns:1fr}
  .calc-row{flex-direction:column;align-items:stretch}
  .calc-eq{text-align:center}
}
</style>
</head>
<body>
<div class="wrap">
  <header class="page-header">
    <p class="eyebrow">武汉 · 2024-2025年数据</p>
    <h1>生活要花多少钱？</h1>
    <p class="sub">一份给8岁小朋友的生活成本认知指南。每一分钱都来自爸爸妈妈的辛苦劳动。</p>
    <div class="noodle-rate">🍜 1碗热干面 = 10元，是我们的「价格尺子」</div>
  </header>

  <div class="toolbar">
    <div class="search-row">
      <span class="search-icon">🔍</span>
      <input type="search" id="search" placeholder="搜索费用项目…" autocomplete="off">
      <button class="clear-btn" id="clearBtn">清除</button>
    </div>
    <div class="tab-row" id="tabRow"></div>
    <div class="cat-row" id="catRow"></div>
  </div>

  <main id="main"></main>
</div>
<script>
<!-- JS will be added in Task 2 -->
</script>
</body>
</html>
```

- [ ] **Step 2: Verify the file renders without JS errors by opening in browser**

Open `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html` in a browser. Expect: header visible, no console errors.

- [ ] **Step 3: Commit scaffold**

```bash
git add wuhan_life_cost_guide.html
git commit -m "feat: scaffold wuhan_life_cost_guide.html with CSS and HTML structure"
```

---

### Task 2: Data model and card rendering JS

**Files:**
- Modify: `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html` (replace `<!-- JS will be added in Task 2 -->` placeholder with full JS)

- [ ] **Step 1: Add data constants and utility functions**

Replace the `<!-- JS will be added in Task 2 -->` comment in the `<script>` tag with the following. This step adds data constants and helper utilities only — rendering functions come in the next step.

```javascript
// ── Data ────────────────────────────────────────────────────────────────────
const BOWL = 10; // 1 bowl of hot dry noodles = 10 yuan

const TABS = [
  { id:'day',   label:'🍜 一天花多少' },
  { id:'month', label:'📅 一个月账单' },
  { id:'year',  label:'📊 一年大数字' },
  { id:'earn',  label:'💪 普通人怎么挣' },
  { id:'mom',   label:'❤️ 妈妈的付出' },
];

const TAB_CATS = {
  day:   ['全部','早餐','午饭','晚餐','零食饮料','日常杂费'],
  month: ['全部','住房','水电气物业','食品','教育','交通通信','医疗备用'],
  year:  ['全部','年度汇总','大件开销','长期目标'],
  earn:  ['全部','外卖员','网约车','快递员','工厂工人'],
  mom:   ['全部','时间价值','市场对比','感恩时刻'],
};

// Each card: { tab, cat, title, price, priceNote, brief, detail, tip, total? }
// price: display string (e.g. "10元" or "2500–4000元")
// bowls: number or [min,max]
const CARDS = [
  // ── 一天花多少 ──────────────────────────────────────────────────────────
  {tab:'day',cat:'早餐',title:'热干面早餐',price:'10元',bowls:1,
   brief:'一碗热干面，就是我们价格尺子的1单位！',
   detail:'热干面是武汉人最爱的早餐，油多味香。一碗10元，刚好是1碗的参考价。',
   tip:'爸爸妈妈在公司附近买早餐，价格可能更贵一点，15–20元也很常见。'},

  {tab:'day',cat:'午饭',title:'学校午饭',price:'15元',bowls:1.5,
   brief:'学校食堂的午饭，约1.5碗热干面的价格。',
   detail:'学校食堂每天有米饭、炒菜、汤，营养搭配好。比外面餐厅便宜很多。',
   tip:'如果带盒饭，妈妈提前做好，成本约5–8元，但需要起早。'},

  {tab:'day',cat:'晚餐',title:'家里晚饭（3人份食材）',price:'50元',bowls:5,
   brief:'买菜、煮饭，三口之家一顿晚饭的食材费。',
   detail:'蔬菜约15元，肉类约25元，其他调料水果约10元。自己做饭比外卖省一半以上。',
   tip:'如果每天叫外卖，三口之家一顿要100–150元，一个月就多花2000元！'},

  {tab:'day',cat:'零食饮料',title:'零食+饮料',price:'10元',bowls:1,
   brief:'一天的零食、饮料、小点心费用。',
   detail:'一瓶饮料3–5元，一包薯片5–8元，一个冰激凌6–10元。零食看起来便宜，加起来很多。',
   tip:'用白开水代替饮料，每天节省5元，一年节省1825元，够买一个大玩具了！'},

  {tab:'day',cat:'日常杂费',title:'交通+杂费',price:'15元',bowls:1.5,
   brief:'每天的公交、地铁、偶尔买文具的费用。',
   detail:'公交3元/次，地铁3–5元/次，一天往返约10元。偶尔买文具、用快递等另算。',
   tip:'骑自行车或走路上学可以省交通费，还能锻炼身体！'},

  {tab:'day',cat:'日常杂费',title:'🍜 一天合计（三口之家）',price:'约100元',bowls:10,total:true,
   brief:'三口之家一天基本生活开销：吃饭+交通+杂费，合计约100元。',
   detail:'早餐10元 + 午饭15元 + 晚饭50元 + 零食10元 + 杂费15元 = 100元/天。\n这还没算房租、学费等大头！',
   tip:'100元/天 × 365天 = 36500元/年，只是最基本的吃饭和交通。'},

  // ── 一个月账单 ──────────────────────────────────────────────────────────
  {tab:'month',cat:'住房',title:'房租 / 房贷',price:'2500–4000元',bowls:[250,400],
   brief:'住房是每月最大的开销，相当于250–400碗热干面。',
   detail:'武汉租一套两室一厅：\n• 汉口繁华区：3500–5000元/月\n• 武昌、洪山：2500–4000元/月\n• 郊区或较旧小区：1500–2500元/月\n如果是房贷，根据购房价格，每月还款额差异很大。',
   tip:'买房和租房是人生中最重要的财务决定之一。房贷通常要还20–30年。'},

  {tab:'month',cat:'水电气物业',title:'水费 + 电费 + 燃气',price:'150–300元',bowls:[15,30],
   brief:'让家里有水、有电、有煤气，每月约150–300元。',
   detail:'• 水费：约30–60元/月（4–6人家庭更多）\n• 电费：约80–150元/月（夏天空调用电多，可达200–400元）\n• 燃气：约30–80元/月\n冬天取暖、夏天制冷会让电费大幅上升。',
   tip:'随手关灯、不开空调时关好门窗，可以节省不少电费。'},

  {tab:'month',cat:'水电气物业',title:'物业管理费',price:'200–400元',bowls:[20,40],
   brief:'住小区要交物业费，用于保安、清洁、绿化。',
   detail:'• 普通小区：1–2元/平方米/月，100平约100–200元\n• 品质小区：2–4元/平方米/月，100平约200–400元\n这笔钱让小区保持干净、安全。',
   tip:'物业费是"住在整洁小区"的费用，很多人觉得理所当然，其实背后有很多人在工作。'},

  {tab:'month',cat:'食品',title:'一家人食品费',price:'2500–4000元',bowls:[250,400],
   brief:'三口之家一个月的吃饭钱，约250–400碗热干面。',
   detail:'• 日常买菜做饭：1800–2500元\n• 偶尔下馆子/外卖：500–1000元\n• 水果零食饮料：300–600元\n食品是仅次于住房的第二大开销。',
   tip:'妈妈自己买菜做饭，可以比天天叫外卖节省30–50%的食品费。'},

  {tab:'month',cat:'教育',title:'学费 + 课外补课',price:'500–2500元',bowls:[50,250],
   brief:'上学和补课的费用，差异很大，取决于报多少班。',
   detail:'• 公立小学学费：基本免费（书本费约200–300元/学期）\n• 兴趣班（钢琴/美术/编程）：300–800元/月/项\n• 学科补课（语数外）：400–1200元/月\n• 武汉知名培训机构课程：500–2000元/月',
   tip:'补课不是越多越好。爸爸妈妈花钱让你补课，是希望你学到东西，要珍惜。'},

  {tab:'month',cat:'交通通信',title:'交通 + 手机 + 宽带',price:'400–600元',bowls:[40,60],
   brief:'出行、上网、打电话的费用，每月约400–600元。',
   detail:'• 公交/地铁：100–200元（有公交卡打折）\n• 手机话费：99–199元/月（两部手机）\n• 家庭宽带：40–100元/月\n• 偶尔打车：100–200元',
   tip:'武汉地铁越来越多，很多地方坐地铁比打车便宜一半，还不堵车。'},

  {tab:'month',cat:'医疗备用',title:'医疗 / 药品备用',price:'200–400元',bowls:[20,40],
   brief:'感冒发烧、看医生、买药的备用费用。',
   detail:'• 普通感冒就诊：100–200元（含药）\n• 医保可以报销部分费用\n• 健康险/意外险：50–200元/月\n没生病的月份这笔钱可以存起来。',
   tip:'保持锻炼、早睡早起、勤洗手，是最省钱的"医疗方案"。'},

  {tab:'month',cat:'医疗备用',title:'📅 一个月合计（普通三口之家）',price:'7000–12000元',bowls:[700,1200],total:true,
   brief:'住房+水电+食品+教育+交通+医疗，普通三口之家每月至少7000元。',
   detail:'• 住房：2500–4000元\n• 水电气物业：350–700元\n• 食品：2500–4000元\n• 教育：500–2500元\n• 交通通信：400–600元\n• 医疗备用：200–400元\n合计：6450–12200元/月',
   tip:'武汉2024年平均工资约8000元/月，月支出7000–12000元，可见赚钱养家真的不容易！'},

  // ── 一年大数字 ──────────────────────────────────────────────────────────
  {tab:'year',cat:'年度汇总',title:'一年吃饭要多少',price:'3万–5万元',bowls:[3000,5000],
   brief:'三口之家一年的食品费用，3000–5000碗热干面。',
   detail:'月食品费2500–4000元 × 12个月 = 3万–4.8万元/年。\n这还不含下馆子、节日大餐的额外消费。',
   tip:'中国人均食品支出约占收入的25–30%，武汉物价适中，算是全国中等水平。'},

  {tab:'year',cat:'年度汇总',title:'一年住房要多少',price:'3万–5万元',bowls:[3000,5000],
   brief:'不管是租房还是还房贷，住房一年花3–5万元。',
   detail:'月住房费2500–4000元 × 12 = 3万–4.8万元/年。\n如果贷款买了一套200万的房子，每月还款约1万元，一年就是12万元！',
   tip:'房子是中国家庭最大的资产，也是最大的负债。爸爸妈妈可能为此努力了很多年。'},

  {tab:'year',cat:'大件开销',title:'买一辆普通汽车',price:'8万–15万元',bowls:[8000,15000],
   brief:'一辆合格的家用汽车，相当于8000–15000碗热干面。',
   detail:'• 比亚迪海鸥（小型电车）：约7.5万元\n• 大众朗逸/别克英朗：约10–13万元\n• 本田雅阁/丰田凯美瑞：约15–20万元\n买车后还有保险、油费/电费、停车、保养等费用。',
   tip:'一辆车每年的"养车费"（保险+油/电+停车+保养）约1–3万元。'},

  {tab:'year',cat:'大件开销',title:'小学六年课外补课',price:'约5万–15万元',bowls:[5000,15000],
   brief:'从一年级到六年级，课外补课总花费可能超过10万元。',
   detail:'• 保守估计：500元/月 × 12月 × 6年 = 3.6万元\n• 中等强度：1500元/月 × 12月 × 6年 = 10.8万元\n• 激进补课：3000元/月 × 12月 × 6年 = 21.6万元\n这还不含初中、高中的补课费。',
   tip:'爸爸妈妈花这么多钱在教育上，是希望给你更好的未来。学习是对自己最好的投资。'},

  {tab:'year',cat:'长期目标',title:'买武汉一套房子',price:'100万–300万元',bowls:[100000,300000],
   brief:'武汉市区一套房子，相当于10万–30万碗热干面。',
   detail:'• 郊区/远城区：80–120万元（60–90平）\n• 武昌/洪山/汉口普通地段：120–200万元\n• 繁华地段/学区房：200–400万元\n• 武汉天地等豪宅：500万元以上',
   tip:'买一套房通常需要30%首付 + 20–30年房贷。爸爸妈妈可能工作了十几年才攒够首付。'},

  {tab:'year',cat:'长期目标',title:'大学四年总花费',price:'10万–20万元',bowls:[10000,20000],
   brief:'上一所大学，四年总花费约10–20万元（武汉高校众多，花费适中）。',
   detail:'• 学费：5000–15000元/年（普通本科约5000元，部分专业更贵）\n• 住宿：1200–2400元/年\n• 生活费：1500–2500元/月\n四年合计：约10–20万元',
   tip:'武汉有武汉大学、华中科技大学等顶尖高校，考上名校是最好的"投资回报"。'},

  // ── 普通人怎么挣 ──────────────────────────────────────────────────────────
  {tab:'earn',cat:'外卖员',title:'外卖骑手（美团/饿了么）',price:'6000–10000元/月',bowls:[600,1000],
   brief:'在武汉送外卖，每月能挣6000–10000元，但很辛苦。',
   detail:'• 月收入：6000–10000元（勤快的可达12000元）\n• 时薪：约25–40元/小时\n• 工作时长：10–12小时/天，雨天风险更大\n• 工资来源：接单量 × 单价 + 奖励\n接一单约5–10元，一天要接50–80单。',
   tip:'外卖骑手每天在路上风吹日晒，下雨天、夏天最辛苦。下次收外卖，记得说声谢谢！'},

  {tab:'earn',cat:'网约车',title:'滴滴/网约车司机',price:'6000–9000元/月',bowls:[600,900],
   brief:'开滴滴接客，武汉普通司机每月约6000–9000元。',
   detail:'• 月收入：6000–9000元（去掉油费/电费后净收入约5000–7000元）\n• 时薪：约20–35元/小时（扣除成本后更低）\n• 工作时长：10–12小时/天，夜班更多单\n• 早高峰、晚高峰、雨天单多',
   tip:'司机要承担车辆维修、保险、油费等成本，实际到手比收入单少很多。'},

  {tab:'earn',cat:'快递员',title:'快递员（顺丰/京东/菜鸟）',price:'5000–8000元/月',bowls:[500,800],
   brief:'负责派送快递，每月5000–8000元，双11前后收入更高。',
   detail:'• 月收入：5000–8000元（大促活动期间可达10000元+）\n• 时薪：约18–30元/小时\n• 工作：早6点到晚8点，每天派送200–300个包裹\n• 爬楼、推车、分拣，体力消耗大',
   tip:'每个快递背后都有快递员的辛苦付出。包裹送到门口，不要忘记礼貌道谢！'},

  {tab:'earn',cat:'工厂工人',title:'工厂生产工人',price:'4500–6000元/月',bowls:[450,600],
   brief:'在武汉工厂流水线工作，月收入约4500–6000元。',
   detail:'• 月薪：4500–6000元（含加班费）\n• 时薪：约15–20元/小时\n• 工作：8小时正班 + 2–4小时加班\n• 重复性操作，需要高度专注\n• 武汉有很多汽车厂、电子厂等制造业',
   tip:'工厂工人用双手生产出汽车、手机、家电。我们生活中的每一件工业品，都是他们做出来的。'},

  {tab:'earn',cat:'工厂工人',title:'武汉最低工资标准',price:'2280元/月',bowls:228,
   brief:'2024年武汉最低工资2280元，是法律规定的最低保障。',
   detail:'• 月最低工资：2280元/月\n• 时薪最低：约13元/小时\n• 这是法律底线，正规公司不能低于这个数\n• 比最低工资低是违法的',
   tip:'最低工资保障了最基本的生活需求，但在武汉2280元只够基本生活，几乎无法存钱。'},

  // ── 妈妈的付出 ──────────────────────────────────────────────────────────
  {tab:'mom',cat:'市场对比',title:'家政保姆市价（武汉）',price:'5000–8000元/月',bowls:[500,800],
   brief:'请一个全天候保姆，在武汉市场价是每月5000–8000元。',
   detail:'• 住家保姆（24小时）：6000–10000元/月\n• 上门保姆（8小时）：3000–5000元/月\n• 月嫂（照顾新生儿）：8000–15000元/月\n这只是做家务、带孩子的费用，不含育儿知识、情感投入。',
   tip:'妈妈做的事，比普通保姆多得多，因为有爱在里面。'},

  {tab:'mom',cat:'市场对比',title:'幼儿园老师薪资',price:'4000–7000元/月',bowls:[400,700],
   brief:'幼儿园老师同时照顾20–30个孩子，月薪约4000–7000元。',
   detail:'• 公立幼儿园老师：4000–5500元/月\n• 私立幼儿园老师：4500–7000元/月\n• 但他们只负责白天6–8小时，每人要照顾25–30个孩子\n妈妈一个人照顾你，相当于私人定制版幼儿园。',
   tip:'一个好老师影响孩子的一生，妈妈是你人生中第一位最重要的老师。'},

  {tab:'mom',cat:'市场对比',title:'专职厨师价值',price:'5000–8000元/月',bowls:[500,800],
   brief:'请一位会做健康饭菜的厨师，每月5000–8000元。',
   detail:'• 家庭厨师（一日三餐）：5000–8000元/月\n• 妈妈一年三餐：365天 × 3次 = 1095餐\n• 按市场价：1095 × 50元（家常菜） = 54750元/年\n妈妈做的每一顿饭，都是用心的礼物。',
   tip:'妈妈做饭不只是填饱肚子，还有对你健康的关心，这是无价的。'},

  {tab:'mom',cat:'时间价值',title:'妈妈一天工作时长',price:'12–16小时/天',bowls:null,
   brief:'全职妈妈没有"下班时间"，每天工作12–16小时，全年无休。',
   detail:'妈妈的"工作清单"（每天）：\n• 早起准备早饭：1小时\n• 送你上学：30–60分钟\n• 买菜洗衣打扫：3–4小时\n• 接你放学辅导作业：2–3小时\n• 做午饭晚饭：2小时\n• 哄你睡觉讲故事：1小时\n• 处理各种突发事件：随时',
   tip:'没有周末，没有假期，生病了也要坚持。妈妈是世界上最敬业的职业。'},

  {tab:'mom',cat:'时间价值',title:'妈妈放弃的薪水',price:'3000–8000元/月',bowls:[300,800],
   brief:'妈妈如果出去工作，可能每月挣3000–8000元，她选择留在家里照顾你。',
   detail:'• 大专/本科学历职场女性平均薪资：4000–8000元/月\n• 很多妈妈因为照顾孩子，职场发展受到影响\n• 中断工作几年后，重回职场薪资往往下降\n这是妈妈为你做出的牺牲。',
   tip:'妈妈的爱，值得一个大大的拥抱和一句真诚的"谢谢妈妈"。'},

  {tab:'mom',cat:'时间价值',title:'❤️ 妈妈综合劳动价值',price:'至少10000元/月',bowls:1000,total:true,
   brief:'保姆+厨师+老师+司机+护士…妈妈的工作价值，至少相当于每月10000元。',
   detail:'妈妈扮演的角色（市场对应价）：\n• 家务管理员：2000–3000元\n• 专属厨师：2000–3000元\n• 儿童教育老师：2000–3000元\n• 24小时私人护士：1000–2000元\n• 专属司机：1000–1500元\n合计：约8000–12000元/月\n\n但妈妈还有最重要的东西——无尽的爱，这是无法用金钱衡量的。',
   tip:'记住这个数字，下次妈妈疲惫的时候，给她一个拥抱，说：妈妈，我知道你很辛苦，谢谢你。'},

  {tab:'mom',cat:'感恩时刻',title:'怎么感谢妈妈',price:'0元',bowls:0,
   brief:'最好的感谢不用花钱：认真学习、帮做家务、一个拥抱、一句"妈妈辛苦了"。',
   detail:'妈妈最想要的礼物：\n• 你认真听讲、好好学习\n• 主动帮忙洗碗、整理房间\n• 放学回家第一句说"妈妈我回来了"\n• 生病时的一碗白粥比什么都暖心\n• 妈妈生日时画一张画，亲手写一封信',
   tip:'金钱可以衡量很多东西，但有一些东西金钱买不到。妈妈需要的，是你的爱和成长。'},
];

// ── Utilities ────────────────────────────────────────────────────────────
function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function fmtBowls(bowls){
  if(bowls===null||bowls===undefined) return null;
  if(Array.isArray(bowls)) return `🍜×${bowls[0]}–${bowls[1]}碗`;
  if(bowls===0) return '🍜×0（免费）';
  return `🍜×${bowls}碗`;
}

function qs(sel,ctx){return (ctx||document).querySelector(sel)}
function qsa(sel,ctx){return [...(ctx||document).querySelectorAll(sel)]}

let activeTab = TABS[0].id;
let activeCat = '全部';
let searchQ   = '';
```

- [ ] **Step 2: Add tab and category rendering functions**

Append inside the `<script>` block (after the data/utilities from Step 1):

```javascript
// ── Render tabs ──────────────────────────────────────────────────────────
function renderTabs(){
  const row = qs('#tabRow');
  row.innerHTML = TABS.map(t =>
    `<button class="tab-btn${t.id===activeTab?' active':''}" data-tab="${t.id}">${escHtml(t.label)}</button>`
  ).join('');
  row.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if(!btn) return;
    activeTab = btn.dataset.tab;
    activeCat = '全部';
    renderTabs();
    renderCats();
    renderCards();
  });
}

function renderCats(){
  const row = qs('#catRow');
  const cats = TAB_CATS[activeTab] || ['全部'];
  row.innerHTML = cats.map(c =>
    `<button class="cat-btn${c===activeCat?' active':''}" data-cat="${escHtml(c)}">${escHtml(c)}</button>`
  ).join('');
  row.addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if(!btn) return;
    activeCat = btn.dataset.cat;
    renderCats();
    renderCards();
  });
}
```

- [ ] **Step 3: Add card rendering and search/filter logic**

Append inside the `<script>` block:

```javascript
// ── Render cards ──────────────────────────────────────────────────────────
function renderCards(){
  const main = qs('#main');
  const visible = CARDS.filter(c => {
    if(c.tab !== activeTab) return false;
    if(activeCat !== '全部' && c.cat !== activeCat) return false;
    if(searchQ){
      const hay = (c.title+c.brief+c.price+(c.detail||'')+(c.tip||'')).toLowerCase();
      if(!hay.includes(searchQ.toLowerCase())) return false;
    }
    return true;
  });

  if(!visible.length){
    main.innerHTML = '<div class="cards-grid"><p class="no-results visible">没有找到相关内容，试试其他关键词 🔍</p></div>';
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'cards-grid';
  visible.forEach(c => grid.appendChild(makeCard(c)));

  // Preserve calculator if already on earn tab
  const existing = qs('.calculator', main);
  main.innerHTML = '';
  main.appendChild(grid);
  if(activeTab === 'earn') renderCalculator(main);
}

function highlight(text, q){
  if(!q) return escHtml(text);
  const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const regex = new RegExp(`(${safeQ})`,'gi');
  return escHtml(text).replace(regex,'<mark>$1</mark>');
}

function makeCard(c){
  const card = document.createElement('div');
  card.className = 'card' + (c.total ? ' total' : '');
  card.dataset.cat = c.cat;

  const bowlStr = fmtBowls(c.bowls);
  const metaHtml = bowlStr ? `<span class="bowl-badge">${escHtml(bowlStr)}</span>` : '';

  const detailHtml = c.detail
    ? c.detail.split('\n').map(line => {
        if(line.startsWith('•')) return `<li>${escHtml(line.slice(1).trim())}</li>`;
        return `<p>${escHtml(line)}</p>`;
      }).join('')
    : '';

  const detailWrapped = c.detail && c.detail.includes('•')
    ? `<ul>${detailHtml}</ul>`
    : detailHtml;

  card.innerHTML = `
    <button class="card-head" aria-expanded="false">
      <span class="card-title">${highlight(c.title, searchQ)}</span>
      <span class="card-meta">
        ${metaHtml}
        <span class="chevron">▼</span>
      </span>
    </button>
    <div class="card-body" role="region">
      <p class="card-price">${highlight(c.price, searchQ)}</p>
      <p class="card-brief">${highlight(c.brief, searchQ)}</p>
      ${detailWrapped ? `<div class="card-detail">${detailWrapped}</div>` : ''}
      ${c.tip ? `<div class="parent-tip"><strong>父母贴士：</strong>${highlight(c.tip, searchQ)}</div>` : ''}
    </div>`;

  card.querySelector('.card-head').addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    card.querySelector('.card-head').setAttribute('aria-expanded', String(isOpen));
  });
  card.querySelector('.card-head').addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      card.querySelector('.card-head').click();
    }
  });
  return card;
}
```

- [ ] **Step 4: Add calculator and init functions**

Append inside the `<script>` block:

```javascript
// ── Calculator ────────────────────────────────────────────────────────────
const JOBS = [
  {label:'外卖骑手',hourly:30},
  {label:'网约车司机',hourly:25},
  {label:'快递员',hourly:22},
  {label:'工厂工人',hourly:17},
];
const ITEMS = [
  {label:'一碗热干面（10元）',price:10},
  {label:'一件衣服（50元）',price:50},
  {label:'一个玩具（100元）',price:100},
  {label:'一副耳机（300元）',price:300},
  {label:'一辆自行车（600元）',price:600},
  {label:'一台iPad（5000元）',price:5000},
  {label:'一个月房租（3000元）',price:3000},
  {label:'一年补课费（12000元）',price:12000},
];

function renderCalculator(container){
  const div = document.createElement('div');
  div.className = 'calculator';
  div.innerHTML = `
    <p class="calc-title">⏱ 需要工作多久？</p>
    <p class="calc-sub">选择职业和商品，看看买它要工作多长时间</p>
    <div class="calc-row">
      <select class="calc-select" id="calcJob">
        ${JOBS.map(j=>`<option value="${j.hourly}">${escHtml(j.label)}</option>`).join('')}
      </select>
      <span class="calc-eq">买</span>
      <select class="calc-select" id="calcItem">
        ${ITEMS.map(i=>`<option value="${i.price}">${escHtml(i.label)}</option>`).join('')}
      </select>
    </div>
    <div class="calc-result" id="calcResult"></div>`;
  container.appendChild(div);

  function calcUpdate(){
    const hourly = Number(qs('#calcJob').value);
    const price  = Number(qs('#calcItem').value);
    const hours  = price / hourly;
    const bowls  = price / BOWL;
    let timeStr;
    if(hours < 1){
      timeStr = `约 ${Math.round(hours*60)} 分钟`;
    } else if(hours < 8){
      timeStr = `约 ${hours.toFixed(1)} 小时`;
    } else {
      const days = (hours/8).toFixed(1);
      timeStr = `约 ${hours.toFixed(0)} 小时（${days} 个工作日）`;
    }
    qs('#calcResult').innerHTML = `
      <p class="calc-result-main">需要工作 ${escHtml(timeStr)}</p>
      <p class="calc-result-bowl">相当于 🍜 ${bowls} 碗热干面的价格</p>`;
  }

  calcUpdate();
  div.addEventListener('change', calcUpdate);
}

// ── Search with debounce ───────────────────────────────────────────────────
let searchTimer = null;
qs('#search').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQ = e.target.value.trim();
    renderCards();
  }, 200);
});

qs('#clearBtn').addEventListener('click', () => {
  qs('#search').value = '';
  searchQ = '';
  activeCat = '全部';
  renderCats();
  renderCards();
});

// ── Init ───────────────────────────────────────────────────────────────────
renderTabs();
renderCats();
renderCards();
```

- [ ] **Step 5: Open in browser and verify all 5 tabs work, cards expand, calculator updates**

Open `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html` and check:
- All 5 tabs switch correctly
- Category filters work
- Expanding a card shows detail and parent tip
- Search highlights text
- Calculator shows correct work time

- [ ] **Step 6: Commit**

```bash
git add wuhan_life_cost_guide.html
git commit -m "feat: add complete JS data, rendering, calculator for wuhan cost guide"
```

---

### Task 3: Detail refinements and detail list rendering fix

**Files:**
- Modify: `/Users/victor/Desktop/Claude/wuhan_life_cost_guide.html`

Some cards have bullet points mixed with regular lines. The `makeCard` function needs to handle detail rendering more robustly. Also verify the `detail` multi-line rendering (with `•` bullets) looks correct.

- [ ] **Step 1: Fix detail rendering to properly intersperse paragraphs and list items**

Replace the `makeCard` detail rendering block (the `detailHtml` / `detailWrapped` logic) with:

```javascript
function renderDetail(text){
  if(!text) return '';
  const lines = text.split('\n');
  let out = '';
  let inList = false;
  for(const raw of lines){
    const line = raw.trim();
    if(!line){ if(inList){out+='</ul>';inList=false;} continue; }
    if(line.startsWith('•')){
      if(!inList){out+='<ul>';inList=true;}
      out+=`<li>${escHtml(line.slice(1).trim())}</li>`;
    } else {
      if(inList){out+='</ul>';inList=false;}
      out+=`<p>${escHtml(line)}</p>`;
    }
  }
  if(inList) out+='</ul>';
  return out ? `<div class="card-detail">${out}</div>` : '';
}
```

Then update `makeCard` to call `renderDetail(c.detail)` instead of the inline logic. The full updated `makeCard` function:

```javascript
function makeCard(c){
  const card = document.createElement('div');
  card.className = 'card' + (c.total ? ' total' : '');
  card.dataset.cat = c.cat;

  const bowlStr = fmtBowls(c.bowls);
  const metaHtml = bowlStr ? `<span class="bowl-badge">${escHtml(bowlStr)}</span>` : '';

  card.innerHTML = `
    <button class="card-head" aria-expanded="false">
      <span class="card-title">${highlight(c.title, searchQ)}</span>
      <span class="card-meta">
        ${metaHtml}
        <span class="chevron">▼</span>
      </span>
    </button>
    <div class="card-body" role="region">
      <p class="card-price">${highlight(c.price, searchQ)}</p>
      <p class="card-brief">${highlight(c.brief, searchQ)}</p>
      ${renderDetail(c.detail)}
      ${c.tip ? `<div class="parent-tip"><strong>父母贴士：</strong>${highlight(c.tip, searchQ)}</div>` : ''}
    </div>`;

  card.querySelector('.card-head').addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    card.querySelector('.card-head').setAttribute('aria-expanded', String(isOpen));
  });
  card.querySelector('.card-head').addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      card.querySelector('.card-head').click();
    }
  });
  return card;
}
```

Also remove the old inline `detailHtml`/`detailWrapped` variables from the previous version of `makeCard` (they're replaced by `renderDetail`).

- [ ] **Step 2: Expand several cards in browser and verify bullet lists render correctly**

Open the file, switch to each tab, expand 2–3 cards. Confirm bullets render as `<ul><li>` items and plain text lines render as `<p>` tags.

- [ ] **Step 3: Commit**

```bash
git add wuhan_life_cost_guide.html
git commit -m "fix: improve card detail rendering with proper list/paragraph interspersing"
```
