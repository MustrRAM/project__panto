const menuLink = document.querySelector('.menu__link');
const menuLinkBtn = document.querySelector('.menu__link-btn')
const menuSwipe = document.querySelector('.menu__list-swipe');

menuLink.addEventListener('click', () => {
    menuSwipe.classList.toggle('menu__list-swipe--active');
    menuLinkBtn.classList.toggle('menu__link-btn--active')
})