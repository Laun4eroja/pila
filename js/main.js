const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
    menuMobile.classList.toggle('menu__list--open');
    burger.classList.toggle('burger--open');
    document.body.classList.toggle('no-scroll');
});


const menuItem = document.querySelectorAll('.menu__list-item');
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menuMobile.classList.remove('menu__list--open');
        burger.classList.remove('burger--open');
        document.body.classList.remove('no-scroll');
    });
});
