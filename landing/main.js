(function () {
  'use strict';

  /* ---------- count-up stats ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var values = Array.prototype.slice.call(document.querySelectorAll('.stat-value'));

  function format(el, n) {
    var decimals = parseInt(el.dataset.decimals || '0', 10);
    var suffix = el.dataset.suffix || '';
    return n.toFixed(decimals) + suffix;
  }

  function countUp(el, index) {
    if (el.dataset.done === '1') return;
    el.dataset.done = '1';

    var target = parseFloat(el.dataset.target || '0');

    if (reduceMotion) {
      el.textContent = format(el, target);
      return;
    }

    var duration = 1500 + index * 80;
    var startDelay = 480 + index * 90;
    var startTime = null;

    function frame(now) {
      if (startTime === null) startTime = now;
      var t = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = format(el, target * eased);
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = format(el, target);
    }

    setTimeout(function () {
      requestAnimationFrame(frame);
    }, startDelay);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countUp(entry.target, values.indexOf(entry.target));
        io.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    values.forEach(function (el) { io.observe(el); });
  } else {
    values.forEach(countUp);
  }

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var overlay = document.getElementById('menu-overlay');
  var sheet = document.getElementById('mobile-menu');
  if (!burger || !overlay || !sheet) return;

  function openMenu() {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    overlay.hidden = false;
    sheet.hidden = false;
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    overlay.hidden = true;
    sheet.hidden = true;
    document.body.classList.remove('menu-open');
  }

  function isOpen() {
    return burger.getAttribute('aria-expanded') === 'true';
  }

  burger.addEventListener('click', function () {
    if (isOpen()) closeMenu(); else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  sheet.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 720 && isOpen()) closeMenu();
  });
})();
