const body = document.querySelector('body');
const openMenu = document.querySelector('.header__open-menu');
const closeMenu = document.querySelector('.header__close-menu');
const navBg = document.querySelector('.nav__layout');

const openNav = function () {
    body.classList.add('nav-open');
    setTimeout(() => body.classList.add('nav-open-opacity'), 150);
};

const closeNav = function () {
    body.classList.remove('nav-open-opacity');
    body.classList.remove('nav-open');
};

openMenu.addEventListener('click', openNav);
closeMenu.addEventListener('click', closeNav);
navBg.addEventListener('click', closeNav);
