// Mobile navigation toggle. Without JavaScript the menu is always visible.
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

if (toggle && nav) {
  const label = toggle.querySelector('.nav-toggle-label');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  matchMedia('(min-width: 1020px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

// Speaker and organizer cards: give the name, affiliation and detail blocks the
// same height in every card of a grid, so all cards are equally tall and their
// text lines up. Without JavaScript, CSS subgrid still aligns each row.
const grids = document.querySelectorAll('.people');
const cardParts = ['h3', '.person-affil', '.person-talk'];

const equalizeCards = () => {
  grids.forEach((grid) => {
    const cards = [...grid.querySelectorAll(':scope > .person')];
    cardParts.forEach((selector) => {
      const blocks = cards.map((card) => card.querySelector(selector)).filter(Boolean);
      blocks.forEach((block) => { block.style.minHeight = ''; });
      const tallest = Math.max(...blocks.map((block) => block.getBoundingClientRect().height));
      blocks.forEach((block) => { block.style.minHeight = `${tallest}px`; });
    });
  });
};

if (grids.length) {
  let frame = 0;
  equalizeCards();
  document.fonts?.ready.then(equalizeCards);
  addEventListener('resize', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(equalizeCards);
  });
}
