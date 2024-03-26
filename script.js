let menuIcon = document.querySelector('#menu-icon');
let navbarMobile = document.querySelector('#navbar-mobile')
let home = document.querySelector('#home');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbarMobile.classList.toggle('navbar-mobile');
}


