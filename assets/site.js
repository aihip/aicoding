(() => {
  const root = document.documentElement;
  const bar = document.createElement('div');
  bar.className = 'vibe-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.append(bar);

  const nav = document.createElement('div');
  nav.className = 'vibe-nav';
  const top = document.createElement('button');
  top.type = 'button';
  top.className = 'vibe-top';
  top.setAttribute('aria-label', '回到顶部');
  top.innerHTML = '<span aria-hidden="true">↑</span>回到顶部';
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  nav.append(top);
  if (root.dataset.vibeNav !== 'off') {
    const home = document.createElement('a');
    home.href = location.protocol === 'file:' ? 'index.html' : '/';
    home.setAttribute('aria-label', '返回 vibe 首页');
    home.innerHTML = '<span class="vibe-mark" aria-hidden="true">v.</span>首页';
    nav.append(home);
  }
  document.body.append(nav);

  let ticking = false;
  const update = () => {
    ticking = false;
    const max = root.scrollHeight - window.innerHeight;
    const y = window.scrollY || root.scrollTop;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    top.classList.toggle('show', y > 700);
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
