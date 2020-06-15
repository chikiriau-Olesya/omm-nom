//////////// START SCREEN ////////
let startBtn = document.querySelector('.window__card__btn')
let startWindow = document.querySelector('#startWindow')

startBtn.onclick = () => {
    startWindow.classList.add('window-close')
}

//////// CANDY ANIMATIONS /////
let candyLeft = document.querySelector('#candy-left')
let candyRight = document.querySelector('#candy-right')

let candyLeftAnim = anime({
    targets: candyLeft,
    translateX: ['10vw','-30vw'],
    translateY: ['40vw','-60vw'],
    rotate: [16, 36],
    easing: 'linear',
    duration: 3000,
    direction: 'alternate',
    loop: true
})

let candyRightAnim = anime({
    targets: candyRight,
    translateX: ['-10vw','20vw'],
    translateY: ['-20vw','50vw'],
    rotate: [-16, -90],
    easing: 'linear',
    duration: 4000,
    direction: 'alternate',
    loop: true
})


let showWindowPresent = document.querySelector('.window__present')
let showWindowComposition = document.querySelector('.window__compos')
let closeWindowComposition =  document.querySelector('.window__cross')

candyLeft.onclick = () => {     
    showWindowPresent.classList.add('window__open-active')
    setTimeout(function() {
        showWindowPresent.classList.remove('window__open-active')
    }, 4000)
}

candyRight.onclick = () => {     
    showWindowComposition.classList.add('window__open-active')
}

closeWindowComposition.onclick = () => {     
    showWindowComposition.classList.remove('window__open-active')
}
