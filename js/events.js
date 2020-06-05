
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

// function chooseClassWindow(el) {
//     for(let i = 0; i < el.length; i++) {
//         el[i].onclick = function() {
//             windowShow()
//         }
//     }
// }

//first line

let openShop = document.querySelectorAll('.openShop-btn')
let openShopWindow = document.getElementById('openShopWindow')
for(let i = 0; i < openShop.length; i++) {
    openShop[i].onclick = function() {
        windowShow(openShopWindow)
    }
}

let talk = document.querySelectorAll('.talk-btn')
let talkWindow = document.getElementById('talkWindow')
for(let i = 0; i < talk.length; i++) {
    talk[i].onclick = function() {
        windowShow(talkWindow)
    }
}

let lecture = document.querySelectorAll('.lecture-btn')
let lectureWindow = document.getElementById('lectureWindow')
for(let i = 0; i < lecture.length; i++) {
    lecture[i].onclick = function() {
        windowShow(lectureWindow)
    }
}

//second line
let newProduct = document.querySelectorAll('.new-product-btn')
let newProductWindow = document.getElementById('newProductWindow')
for(let i = 0; i < newProduct.length; i++) {
    newProduct[i].onclick = function() {
        windowShow(newProductWindow)
    }
}

//third line
let candy = document.querySelectorAll('.candy-btn')
let candyWindow = document.getElementById('candyWindow')
for(let i = 0; i < candy.length; i++) {
    candy[i].onclick = function() {
        windowShow(candyWindow)
    }
}

let public  = document.querySelectorAll('.public-btn')
let publicWindow = document.getElementById('publicWindow')
for(let i = 0; i < public.length; i++) {
    public[i].onclick = function() {
        windowShow(publicWindow)
    }
}

let meet = document.querySelectorAll('.meet-btn')
let meetWindow = document.getElementById('meetWindow')
for(let i = 0; i < meet.length; i++) {
    meet[i].onclick = function() {
        windowShow(meetWindow)
    }
}


