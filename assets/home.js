(() => {
  const input = document.getElementById('q');
  if (!input) return;
  const cards = [...document.querySelectorAll('.card')];
  const sections = [...document.querySelectorAll('.category')];
  const empty = document.getElementById('empty');
  const count = document.getElementById('result-count');
  const apply = () => {
    const words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const hit = words.every((w) => text.includes(w));
      card.hidden = !hit;
      if (hit) shown += 1;
    });
    sections.forEach((s) => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    empty.hidden = shown > 0;
    count.textContent = words.length ? `找到 ${shown} 个网页` : '';
  };
  input.addEventListener('input', apply);
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
    if (e.key === 'Escape' && document.activeElement === input) { input.value = ''; apply(); input.blur(); }
  });
})();
