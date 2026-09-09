const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff'
  }
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/views') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid request' }, 400);
    }

    const page = typeof body.page === 'string' ? body.page : '';
    if (!/^(home|[a-z0-9]+(?:-[a-z0-9]+)*)$/.test(page) || page.length > 80) {
      return json({ error: 'Invalid page' }, 400);
    }

    const row = await env.DB.prepare(`
      INSERT INTO page_views (page, views, updated_at)
      VALUES (?, 1, unixepoch())
      ON CONFLICT(page) DO UPDATE SET
        views = views + 1,
        updated_at = unixepoch()
      RETURNING views
    `).bind(page).first();

    return json({ views: row.views });
  }
};
