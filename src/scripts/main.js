const page = document.querySelector('.page');
const burgerWrap = document.querySelector('.header__mobile-burger');
const burgerBtn = burgerWrap.querySelector('button');
const burgerSvg = document.querySelector('.header__mobile-burger-svg');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => {
  burgerSvg.classList.toggle('header__mobile-burger-svg--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  page.classList.toggle('page--hide-scroll');
});
