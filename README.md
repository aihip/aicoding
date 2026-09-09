# Vibe 网页集

网站：<https://vibe.pheth.com>。仓库中的独立 HTML 网页通过分类首页统一访问，使用 Cloudflare Workers Static Assets 托管。

## 本地预览与部署

需要 Node.js 20 或更新版本。

```sh
npm install
npm run dev
```

首次部署先运行 `npx wrangler login`，登录拥有 `pheth.com` 域名的 Cloudflare 账户。随后执行：

```sh
npm run deploy
```

部署会自动生成首页和 `dist/`，然后发布到 `vibe.pheth.com`。域名由 `wrangler.jsonc` 的 Custom Domain 配置管理，Cloudflare 自动配置 DNS 和 HTTPS。只上传网页、`assets/` 和 404 页面。

## 添加网页

1. 将新的 `.html` 文件放到仓库根目录；图片、样式和其他公开资源放到 `assets/`，网页使用相对路径引用。
2. 运行 `npm run build`。新网页会自动出现在“更多探索”，标题取自它的 `<title>`。
3. 要指定分类、简介和顺序，在 `catalog.json` 的 `pages` 中添加记录：

```json
"my-new-page.html": {
  "title": "新网页标题",
  "description": "用一句话介绍网页的用途。",
  "category": "learn",
  "label": "学习工具",
  "mark": "Aa",
  "slug": "my-new-page",
  "order": 10
}
```

现有分类：`learn`（学习与成长）、`health`（健康与照护）、`life`（城市与生活）、`build`（编程与创造）、`more`（更多探索）。也可在 `categories` 中添加分类，颜色可选 `blue`、`green`、`orange`、`purple`。空分类自动隐藏。

`slug` 使用小写英文字母、数字和短横线，首页链接会显示为 `https://vibe.pheth.com/my-new-page`。含中文的原始文件名不会发布到线上；已有英文文件地址继续兼容。

4. 执行 `npm run deploy` 更新线上网站。

`index.html` 是自动生成的，直接双击也可浏览。修改首页结构请编辑 `site/index.template.html`，修改样式请编辑 `assets/home.css`。现有内容页保留原文件和 URL；本地学习进度仍由各页面保存在访问者的浏览器中。

当前发布方式为本地手动部署，推送 GitHub 不会自动发布。若在 Cloudflare 配置本仓库的 Workers Builds，构建命令使用 `npm run build`、部署命令使用 `npx wrangler deploy` 即可。

托管配置参考：[Cloudflare Static Assets](https://developers.cloudflare.com/workers/static-assets/get-started/)、[Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)。
