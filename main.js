const mobileNav = document.querySelector('.mobile-nav-icon');
const navBar = document.querySelector('.main-nav');
const navItems = document.querySelector('.main-nav-items');

mobileNav.addEventListener('click', () => {
    navBar.classList.toggle('nav-toggle');
});

navItems.addEventListener('click', () => {
    navBar.classList.toggle('nav-toggle');
});