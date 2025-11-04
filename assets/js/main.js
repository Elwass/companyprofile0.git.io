const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open');
  });
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');
  const panel = item.querySelector('.accordion-panel');
  if (!trigger || !panel) return;

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    accordionItems.forEach((otherItem) => {
      const otherTrigger = otherItem.querySelector('.accordion-trigger');
      const otherPanel = otherItem.querySelector('.accordion-panel');
      if (!otherTrigger || !otherPanel) return;

      if (otherTrigger !== trigger) {
        otherTrigger.setAttribute('aria-expanded', 'false');
        otherPanel.hidden = true;
      }
    });

    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
  });
});

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
