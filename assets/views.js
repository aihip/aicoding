(() => {
  const script = document.currentScript;
  const page = script?.dataset.page;
  if (!page) return;

  const counter = document.createElement('div');
  counter.className = 'vibe-view-counter';
  counter.setAttribute('role', 'status');
  counter.setAttribute('aria-live', 'polite');
  counter.innerHTML = '<span class="vibe-view-dot" aria-hidden="true"></span><span>访问次数</span><strong>—</strong>';
  document.body.append(counter);

  fetch('/api/views', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ page }),
    keepalive: true
  })
    .then((response) => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then(({ views }) => {
      counter.querySelector('strong').textContent = new Intl.NumberFormat('zh-CN').format(views);
      counter.title = `本页面累计访问 ${views} 次`;
    })
    .catch(() => counter.remove());
})();
