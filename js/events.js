
///////open modal windows for events///////////

//use same btn for close window
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










let modalWindow = document.querySelector('.window')


function windowShow(element) {
    modalWindow.style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
    element.classList.add('window__item-active')
}



let openShop = document.getElementById('openShop')
let openShopWindow = document.getElementById('openShopWindow')

openShop.onclick = function() {
    windowShow(openShopWindow)
}
