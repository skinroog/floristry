let nav = document.querySelector('.main-nav');
let header = document.querySelector('.page-header');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
    nav.classList.toggle('main-nav--opened');
    header.classList.toggle('page-header--open-nav');
    document.body.classList.toggle('no-scroll');
});

