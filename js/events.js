
///////open modal windows for events///////////

//use same btn for close modal window
let btnWindowClose = document.querySelectorAll('.window__item__close')

for (let i = 0; i < btnWindowClose.length; i++ ) {
    btnWindowClose[i].onclick = function() {
        modalWindow.style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
        removeActiveClass()
    }
}

function removeActiveClass(){
    let allWindowItems = document.querySelectorAll('.window__item')
    for (let i = 0; i < allWindowItems.length; i++ ) {
        allWindowItems[i].classList.remove('window__item-active')
    }
} 


//////////everything for open window///////

let modalWindow = document.querySelector('.window')

//function for open modal window with text content
function windowShow(element) {
    modalWindow.style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
    element.classList.add('window__item-active')
}

// let openShop = document.getElementById('openShop')
// let openShopWindow = document.getElementById('openShopWindow')
// openShop.onclick = function() {
//     windowShow(openShopWindow)
// }

let openShop = document.querySelectorAll('.openShop-btn')
let openShopWindow = document.getElementById('openShopWindow')
for(let i = 0; i < openShop.length; i++) {
    openShop[i].onclick = function() {
        windowShow(openShopWindow)
    }
}

// let talk = document.getElementById('talk')
// let talkWindow = document.getElementById('talkWindow')
// talk.onclick = function() {
//     windowShow(talkWindow)
// }

let talk = document.querySelectorAll('.talk-btn')
let talkWindow = document.getElementById('talkWindow')
for(let i = 0; i < talk.length; i++) {
    talk[i].onclick = function() {
        windowShow(talkWindow)
    }
}




