const page = document.querySelector('.page');
const burgerWrap = document.querySelector('.header__mobile-burger');
const burgerBtn = burgerWrap.querySelector('button');
const burgerSvg = document.querySelector('.header__mobile-burger-svg');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__nav a');

function toggleMenu() {
  burgerSvg.classList.toggle('header__mobile-burger-svg--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  page.classList.toggle('page--hide-scroll');
}

burgerBtn.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('mobile-menu--active')) {
      toggleMenu();
    }
  });
});

