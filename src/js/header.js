const openBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-close-btn');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuItem = document.querySelector(
  '.mobile-nav-link',
  '.mobile-enter-link'
);

openBtn.addEventListener('click', () => mobMenu.classList.add('is-open'));

closeBtn.addEventListener('click', () => mobMenu.classList.remove('is-open'));

mobMenuItem.addEventListener('click', () =>
  mobMenu.classList.remove('is-open')
);
