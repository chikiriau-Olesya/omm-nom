
///////open modal windows for events///////////

let modalWindow = document.querySelector('.window')

//use general buttons for open general maodal window
let openGeneralWindow = document.querySelectorAll('.event-btn')

// for (let i = 0; i < openGeneralWindow.length; i++) {
//     openGeneralWindow[i].onclick = function() {
//         modalWindow.style.display = 'block'
//         document.querySelector('body').style.overflow = 'hidden'
//         openShopWindow.classList.add('window__item-active')
//     }
// }

//use same btn for close window
// let windowBlock = element;
let btnWindowClose = document.querySelectorAll('.window__item__close')

for (let i = 0; i < btnWindowClose.length; i++ ) {
    btnWindowClose[i].onclick = function() {
        modalWindow.style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
        element.classList.remove('window__item-active')
    }
}

function openWindow(element) {
    modalWindow.style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
    element.classList.add('window__item-active')
}







let openShop = document.querySelector('#openShop')
let openShopWindow = document.querySelector('#openShopWindow')


openShop.onclick = function() {
    openWindow(openShopWindow);
}


let talk = document.querySelector('#talk')
let talkWindow = document.querySelector('#talkWindow')

talk.onclick = function() {
    openWindow(talkWindow);
    console.log(123)
}