import { readdir, readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const catalog = JSON.parse(await readFile(path.join(root, 'catalog.json'), 'utf8'));
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const categoryIds = new Set(catalog.categories.map((category) => category.id));
if (categoryIds.size !== catalog.categories.length || !categoryIds.has('more')) throw new Error('分类 ID 必须唯一，且须保留 more 分类。');
for (const category of catalog.categories) {
  if (!/^[a-z][a-z0-9-]*$/.test(category.id)) throw new Error(`分类 ID 无效：${category.id}`);
  if (!['blue', 'green', 'orange', 'purple'].includes(category.color)) throw new Error(`分类颜色无效：${category.color}`);
}
const files = (await readdir(root, { withFileTypes: true }))
  .filter((file) => file.isFile() && file.name.endsWith('.html') && !['index.html', '404.html'].includes(file.name))
  .map((file) => file.name).sort((a, b) => a.localeCompare(b, 'zh-CN'));
for (const file of Object.keys(catalog.pages)) {
  if (!files.includes(file)) throw new Error(`目录引用的网页不存在：${file}`);
}
const pages = await Promise.all(files.map(async (file) => {
  const source = await readFile(path.join(root, file), 'utf8');
  const entry = catalog.pages[file] ?? {};
  const category = entry.category ?? 'more';
  if (!categoryIds.has(category)) throw new Error(`网页 ${file} 使用了不存在的分类：${category}`);
  const title = entry.title ?? source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? file.replace(/\.html$/, '');
  const slug = entry.slug ?? path.parse(file).name.normalize('NFKD').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`网页 ${file} 需要有效的英文 slug。`);
  return { file, slug, source, category, title, description: entry.description ?? '打开网页，浏览完整内容。', label: entry.label ?? '新收录', mark: entry.mark ?? '↗', order: entry.order ?? 1000 };
}));
if (new Set(pages.map((page) => page.slug)).size !== pages.length) throw new Error('网页 slug 必须唯一。');
pages.sort((a, b) => a.order - b.order || a.file.localeCompare(b.file, 'zh-CN'));
const categories = catalog.categories.map((category) => ({ ...category, pages: pages.filter((page) => page.category === category.id) })).filter((category) => category.pages.length);
const navigation = categories.map((category, index) => `<a class="nav-item" href="#${category.id}"><span class="nav-number">${String(index + 1).padStart(2, '0')}</span><span>${escape(category.name)}</span><span class="nav-count">${category.pages.length}</span></a>`).join('\n');
const sections = categories.map((category, index) => `<section class="category ${category.color}" id="${category.id}" aria-labelledby="title-${category.id}">
  <div class="section-head"><span class="section-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h2 id="title-${category.id}">${escape(category.name)}</h2><p>${escape(category.description)}</p></div>
  <div class="cards${category.pages.length === 1 ? ' single' : ''}">${category.pages.map((page) => `<a class="card" href="/${escape(page.slug)}" aria-labelledby="page-${escape(page.slug)}">
    <div class="card-top"><span class="card-mark" aria-hidden="true">${escape(page.mark)}</span><span class="card-label">${escape(page.label)}</span></div>
    <h3 id="page-${escape(page.slug)}">${escape(page.title)}</h3><p>${escape(page.description)}</p>
    <div class="card-bottom"><span>打开网页</span><span class="card-arrow" aria-hidden="true">↗</span></div>
  </a>`).join('\n')}</div>
</section>`).join('\n');
let html = await readFile(path.join(root, 'site/index.template.html'), 'utf8');
const replacements = { NAVIGATION: navigation, PAGE_COUNT: String(pages.length).padStart(2, '0'), CATEGORY_COUNT: categories.length, SECTIONS: sections };
html = html.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => {
  if (!(key in replacements)) throw new Error(`模板变量未知：${key}`);
  return replacements[key];
});
// Only publish web content. Repository metadata, documentation and credentials stay outside dist.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writeFile(path.join(root, 'index.html'), html);
await writeFile(path.join(output, 'index.html'), html);
await Promise.all(pages.flatMap((page) => {
  const targets = [`${page.slug}.html`];
  // Keep existing ASCII URLs compatible, but never publish non-ASCII filenames.
  if (/^[\x00-\x7F]+$/.test(page.file) && page.file !== `${page.slug}.html`) targets.push(page.file);
  return targets.map((target) => writeFile(path.join(output, target), page.source));
}));
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true, dereference: false });
await cp(path.join(root, 'site/404.html'), path.join(output, '404.html'));
console.log(`已生成首页：${pages.length} 个网页，${categories.length} 个分类。发布目录：dist/`);
