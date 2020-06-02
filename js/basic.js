// Adaptive menu

let btnOpen = document.querySelector('.header__menu')
let menu = document.querySelector('.header__menu__links')
let btnClose = document.querySelector('.close')

btnOpen.onclick = function() {
    menu.style.display = 'block'
}

btnClose.onclick = function() {
    menu.style.display = 'none'
}