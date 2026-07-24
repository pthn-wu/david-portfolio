/* Renders the page from js/content.js and wires up interactions.
   To change the site's content, edit js/content.js — not this file. */
(() => {
  const C = window.CONTENT;

  // Escape user text, then allow **bold** markup inside it.
  const esc = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  const setText = (id, text) => { document.getElementById(id).textContent = text; };

  /* ----- Nav + monogram ----- */
  document.querySelectorAll('[data-name]').forEach((el) => { el.textContent = C.name; });
  document.querySelectorAll('[data-initial]').forEach((el) => { el.textContent = C.name.charAt(0).toUpperCase(); });

  /* ----- Hero ----- */
  const stickerPos = {
    'top-left':     { style: 'top:90px;left:8%',      anim: 'chip--flo1' },
    'top-right':    { style: 'top:140px;right:11%',   anim: 'chip--flo2' },
    'bottom-left':  { style: 'bottom:150px;left:12%', anim: 'chip--flo1' },
    'bottom-right': { style: 'bottom:120px;right:13%',anim: 'chip--flo2' },
  };
  document.getElementById('hero-deco').innerHTML =
    C.hero.stickers.map((s) => {
      const pos = stickerPos[s.position] || stickerPos['top-left'];
      return `<div class="chip chip--${esc(s.color)} ${pos.anim}" style="${pos.style}">${esc(s.text)}</div>`;
    }).join('') +
    '<div class="blob blob--square"></div><div class="blob blob--circle"></div>';

  setText('hero-title', C.hero.title);
  setText('hero-subtitle', C.hero.subtitle);
  const btn = (b) => `<a href="${esc(b.link)}" class="btn btn--${b.style === 'dark' ? 'dark' : 'outline'}"${b.link.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(b.text)}</a>`;
  document.getElementById('hero-cta').innerHTML = C.hero.buttons.map(btn).join('');

  /* ----- Marquee ----- */
  const sep = '<img src="assets/images/spurs-logo.png" alt="" class="marquee__sep">';
  // Repeat the word list twice inside each half so the 50% translate loops seamlessly.
  const half = [...C.marquee, ...C.marquee].map((w) => esc(w) + sep).join('');
  document.getElementById('marquee-track').innerHTML =
    `<span class="marquee__group">${half}</span><span class="marquee__group" aria-hidden="true">${half}</span>`;

  /* ----- Work ----- */
  setText('work-eyebrow', C.workSection.eyebrow);
  setText('work-title', C.workSection.title);
  const previewHTML = (p) => {
    if (p.image) {
      return `<div class="work-card__preview work-card__preview--image"><img src="${esc(p.image)}" alt=""></div>`;
    }
    const wordmark = p.wordmark ? `<span class="suboo-wordmark" style="color:${esc(p.wordmarkColor || '#fff')}">${esc(p.wordmark)}</span>` : '';
    const bar = p.bar ? `<span class="suboo-bar" style="background:${esc(p.bar)}"></span>` : '';
    const subtext = p.subtext ? `<span class="suboo-label" style="color:${esc(p.subtextColor || '#fff')}">${esc(p.subtext)}</span>` : '';
    return `<div class="work-card__preview" style="background:${esc(p.background || '#2E2840')}">${wordmark}${bar}${subtext}</div>`;
  };
  document.getElementById('work-grid').innerHTML = C.workSection.cards.map((card, i) => {
    const text = `
      <div class="work-card__text">
        <div class="tag-row">
          <span class="tag tag--${esc(card.tagColor || 'green')}">${esc(card.tag)}</span>
          <span class="tag tag--neutral">LIVE DEMO ↗</span>
        </div>
        <h3 class="work-card__title">${esc(card.title)}</h3>
        <p class="work-card__desc">${esc(card.description)}</p>
      </div>`;
    const preview = previewHTML(card.preview || {});
    const inner = i % 2 === 0 ? text + preview : preview + text;
    return `<a class="rv work-card" href="${esc(card.demo)}" data-demo data-title="${esc(card.demoTitle || card.title)}">${inner}</a>`;
  }).join('');

  /* ----- Experience ----- */
  setText('exp-eyebrow', C.experienceSection.eyebrow);
  setText('exp-title', C.experienceSection.title);
  const roles = C.experienceSection.roles;
  document.getElementById('timeline').innerHTML = roles.map((r, i) => {
    const color = r.color === 'purple' ? 'purple' : 'red';
    const borders = i === roles.length - 1 ? 'timeline__item--bottom' : 'timeline__item--top';
    return `
      <div class="rv timeline__item ${borders}">
        <div class="timeline__dot timeline__dot--${color}"></div>
        <div class="timeline__body">
          <h3 class="timeline__role">${esc(r.role)}</h3>
          <div class="timeline__org timeline__org--${color}">${esc(r.company)}</div>
          <ul class="timeline__list">
            ${r.bullets.map((b) => `<li><span class="timeline__arrow timeline__arrow--${color}">→</span><span>${rich(b)}</span></li>`).join('')}
          </ul>
        </div>
        <div class="timeline__date">${esc(r.dates)}</div>
      </div>`;
  }).join('');

  /* ----- Résumé download card ----- */
  const resume = C.experienceSection.resumeCard;
  if (resume) {
    document.getElementById('timeline').insertAdjacentHTML('beforeend', `
      <a class="rv cv-card" href="${esc(resume.file)}" download>
        <span class="cv-card__badge"><span class="cv-card__badge-inner">${esc(resume.badge)}</span></span>
        <span class="cv-card__text">
          <span class="cv-card__title">${esc(resume.title)}</span>
          <span class="cv-card__desc">${esc(resume.description)}</span>
        </span>
        <span class="cv-card__btn">${esc(resume.buttonText)}</span>
      </a>`);
  }

  /* ----- Writing ----- */
  const W = C.writingSection;
  setText('writing-eyebrow', W.eyebrow);
  setText('writing-title', W.title);
  const wl = document.getElementById('writing-link');
  wl.href = W.substackUrl;
  wl.textContent = W.substackLabel;
  setText('writing-quote', W.quote);
  document.getElementById('writing-grid').innerHTML =
    W.cards.map((card) => `
      <a class="rv writing-card" href="${esc(card.link)}" target="_blank" rel="noopener">
        <div class="writing-card__thumb">${esc(card.thumbLabel)}</div>
        <span class="writing-card__eyebrow">${esc(card.eyebrow)}</span>
        <h3 class="writing-card__title">${esc(card.title)}</h3>
        <p class="writing-card__desc">${esc(card.description)}</p>
      </a>`).join('') +
    `<div class="rv writing-card writing-card--cta">
      <h3 class="writing-card--cta__title">${esc(W.subscribeCard.title)}</h3>
      <p class="writing-card--cta__desc">${esc(W.subscribeCard.description)}</p>
      <a href="${esc(W.subscribeCard.link)}" target="_blank" rel="noopener" class="btn btn--subscribe">${esc(W.subscribeCard.buttonText)}</a>
    </div>`;

  /* ----- Now ----- */
  const N = C.nowSection;
  setText('now-eyebrow', N.eyebrow);
  setText('now-title', N.title);
  document.getElementById('now-grid').innerHTML =
    `<div class="rv now-card now-card--spurs">
      <div class="now-card__ring" aria-hidden="true"></div>
      <img src="${esc(N.featureCard.image)}" alt="${esc(N.featureCard.title)}" class="now-card__crest">
      <div class="now-card__big">${esc(N.featureCard.bigText)}</div>
      <h3 class="now-card__title">${esc(N.featureCard.title)}</h3>
      <p class="now-card__desc">${esc(N.featureCard.description)}</p>
    </div>` +
    N.cards.map((card) => `
      <div class="rv now-card">
        <div class="now-card__emoji">${esc(card.emoji)}</div>
        <h3 class="now-card__title">${esc(card.title)}</h3>
        <p class="now-card__desc">${esc(card.description)}</p>
      </div>`).join('');

  /* ----- Footer ----- */
  setText('footer-title', C.footer.title);
  setText('footer-subtitle', C.footer.subtitle);
  document.getElementById('footer-cta').innerHTML = C.footer.buttons.map(btn).join('');
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${C.fullName} · ${C.footer.copyrightNote}`;

  /* ===== Interactions (below here nothing is content-dependent) ===== */

  // Scroll reveal fallback for browsers without CSS scroll-driven animations.
  const supportsScrollTimeline = CSS.supports('animation-timeline: view()');
  if (!supportsScrollTimeline) {
    document.documentElement.classList.add('no-scroll-timeline');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
  }

  // Demo modal
  const modal = document.getElementById('demo-modal');
  const frame = document.getElementById('demo-frame');
  const titleEl = document.getElementById('demo-title');
  const openTabLink = document.getElementById('demo-open-tab');
  const closeBtn = document.getElementById('demo-close');

  const openDemo = (src, title) => {
    frame.src = src;
    titleEl.textContent = title;
    openTabLink.href = src;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };
  const closeDemo = () => {
    modal.hidden = true;
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-demo]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openDemo(el.getAttribute('href'), el.dataset.title);
    });
  });

  modal.addEventListener('click', closeDemo);
  modal.querySelector('.modal__bar').addEventListener('click', (e) => e.stopPropagation());
  frame.addEventListener('click', (e) => e.stopPropagation());
  closeBtn.addEventListener('click', closeDemo);
  openTabLink.addEventListener('click', (e) => e.stopPropagation());

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeDemo();
  });
})();
