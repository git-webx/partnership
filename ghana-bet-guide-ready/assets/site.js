
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const search = document.querySelector('[data-brand-search]');
  const cards = [...document.querySelectorAll('[data-brand-card]')];
  if (search && cards.length) {
    const empty = document.querySelector('.empty-state');
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(q);
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.style.display = shown ? 'none' : 'block';
    });
  }
})();
