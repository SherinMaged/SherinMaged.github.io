/* أدوات القراءة: تكبير النص والتباين المرتفع */
(() => {
  'use strict';
  let size = 100, contrast = false;
  function update() {
    document.body.style.setProperty('--reader-scale', size / 100);
    document.body.classList.toggle('high-contrast', contrast);
    document.querySelectorAll('[data-action]').forEach(b => {
      const a = b.dataset.action;
      if (a === 'increase') b.disabled = size === 200;
      if (a === 'decrease') b.disabled = size === 100;
      if (a === 'contrast') b.setAttribute('aria-pressed', String(contrast));
    });
    document.querySelectorAll('[data-reader-status]').forEach(s => {
      s.textContent = `حجم النص: ${size}% · ${contrast ? 'التباين المرتفع مفعّل' : 'التباين العادي'}`;
    });
  }
  document.querySelectorAll('[data-action]').forEach(b => b.addEventListener('click', () => {
    switch (b.dataset.action) {
      case 'increase': size = Math.min(200, size + 25); break;
      case 'decrease': size = Math.max(100, size - 25); break;
      case 'contrast': contrast = !contrast; break;
    }
    update();
  }));
  update();
})();
