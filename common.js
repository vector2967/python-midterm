// theme toggle (per-viewer convenience)
(function () {
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
  document.addEventListener('DOMContentLoaded', () => {
    const b = document.querySelector('.theme-btn');
    if (!b) return;
    const dark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const paint = () => b.textContent = dark() ? '☀️' : '🌙';
    paint();
    b.onclick = () => { root.dataset.theme = dark() ? 'light' : 'dark'; try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {} paint(); };
  });
})();
