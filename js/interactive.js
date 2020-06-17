//////////// START SCREEN ////////
let startBtn = document.querySelector('#startBtn')
let startWindow = document.querySelector('#startWindow')

startBtn.onclick = () => {
    startWindow.classList.add('window-close')
}

//////// CANDY ANIMATIONS /////
let candyLeft = document.querySelector('#candy-left')
let candyRight = document.querySelector('#candy-right')
let candyTop = document.querySelector('.candy-top')
let candyBottom = document.querySelector('#candy-bottom')

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

let candyTopAnim = anime({
    targets: candyTop,
    translateX: ['-12vw','20vw'],
    translateY: ['-18vw','45vw'],
    rotate: [-186, -90],
    easing: 'linear',
    duration: 6000,
    direction: 'alternate',
    loop: true
})

let candyBottomAnim = anime({
    targets: candyBottom,
    translateX: ['-3vw','35vw'],
    translateY: ['-10vw','45vw'],
    rotate: [-256, -90],
    easing: 'linear',
    duration: 7500,
    direction: 'alternate',
    loop: true
})


let showWindowPresent = document.querySelector('.window__present')
let showWindowPoster = document.querySelector('.window__poster')
let showWindowComposition = document.querySelector('.window__compos-one')
let closeWindowComposition =  document.querySelector('.window__cross-one')
let showWindowCircles = document.querySelector('.window__circles')
let windowCardCircles =  document.querySelector('.window__card-circles')

//functions for add and remove visible class to open windows
function addVisibleClass(e) {
    e.classList.add('window__open-active')
}
function removeVisibleClass(e) {
    e.classList.remove('window__open-active')
}


candyLeft.onclick = () => {     
    addVisibleClass(showWindowPresent)
    setTimeout(function() {
        removeVisibleClass(showWindowPresent)
    }, 5000)
}

candyBottom.onclick = () => {     
    addVisibleClass(showWindowPoster)
    setTimeout(function() {
        removeVisibleClass(showWindowPoster)
    }, 5000)
}

candyRight.onclick = () => {     
    addVisibleClass(showWindowComposition)
}
closeWindowComposition.onclick = () => {     
    removeVisibleClass(showWindowComposition)
}

//special functions for generate circles window
candyTop.onclick = () => {     
    windowCardCircles.style.visibility = 'visible'
    addVisibleClass(showWindowCircles)
    setTimeout(function() {
        windowCardCircles.style.visibility = 'hidden'
    }, 5000)

    setTimeout(function() {
        removeVisibleClass(showWindowCircles)
    }, 14000)

    //generate circles
    let numberOfCircles = 40
    for(let i = 0; i < numberOfCircles; i++) {
        let divCircle = document.createElement('div')
        divCircle.classList.toggle('div__circle')
        divCircle.style.position = 'absolute'
        divCircle.style.backgroundColor = 'var(--pink)'
        divCircle.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,10)}vh)`
        document.body.append(divCircle)

        setTimeout(function() {
            divCircle.style.display = 'none'
        }, 14000)
    }
}

