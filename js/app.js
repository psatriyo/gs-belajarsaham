/* ============================================
   Belajar Saham Pemula — app.js
   ============================================ */

(function () {
  'use strict';

  // ── Mobile hamburger nav toggle ──
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const inner = nav.querySelector('.nav-inner');
    if (inner) {
      // Create toggle button
      const toggle = document.createElement('button');
      toggle.className = 'nav-toggle';
      toggle.setAttribute('aria-label', 'Buka menu navigasi');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>';
      nav.insertBefore(toggle, nav.firstChild);

      toggle.addEventListener('click', function () {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        inner.classList.toggle('nav-open');
        toggle.classList.toggle('nav-open');
      });

      // Close nav when a link is clicked (mobile)
      inner.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          toggle.setAttribute('aria-expanded', 'false');
          inner.classList.remove('nav-open');
          toggle.classList.remove('nav-open');
        }
      });
    }
  }

  // ── Smooth scroll for back-to-top links ──
  document.querySelectorAll('a[href="#top"], a.back-top[href="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href.length > 1) {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // ── i18n / Language Switcher ──
  var currentLang = (function () {
    try { return localStorage.getItem('lang') || 'id'; } catch (e) { return 'id'; }
  })();

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (I18N_DICT[key] && I18N_DICT[key][lang] !== undefined) {
        el.textContent = I18N_DICT[key][lang];
      }
    });

    // HTML content (for elements with links/bold)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (I18N_DICT[key] && I18N_DICT[key][lang] !== undefined) {
        el.innerHTML = I18N_DICT[key][lang];
      }
    });

    // Page title
    var titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      var tkey = titleEl.getAttribute('data-i18n-title');
      if (I18N_DICT[tkey] && I18N_DICT[tkey][lang] !== undefined) {
        document.title = I18N_DICT[tkey][lang];
      }
    }

    // Meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && I18N_DICT['meta.desc'] && I18N_DICT['meta.desc'][lang]) {
      metaDesc.setAttribute('content', I18N_DICT['meta.desc'][lang]);
    }

    // Update lang switcher buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  // Bind language switcher
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        applyLang(lang);
      }
    });
  });

  // Apply saved language on load
  applyLang(currentLang);

  // ── Animate cards on scroll (Intersection Observer) ──
  if ('IntersectionObserver' in window) {
    const animatedEls = document.querySelectorAll('.card, .step, .stat, .pilar-card, .split-card, .example-card, .flow-step, .trust-card');
    animatedEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '';
          entry.target.style.transform = '';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(function (el) { observer.observe(el); });
  }

})();