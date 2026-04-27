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