
// circles animation
const circleOne = document.querySelector('#circleOne')
const circleTwo = document.querySelector('#circleTwo')
const circleThree = document.querySelector('#circleThree')
const circleFour = document.querySelector('#circleFour')
const circleFive = document.querySelector('#circleFive')

let circleOneAnim = anime({
    targets: circleOne,
    translateX: anime.random(20, 95) + 'vw',
    translateY:[
        { 
            value: anime.random(2, 9) + 'vw', 
            duration: 2500 
        },
        { 
            value: anime.random(3, 8) + 'vw', 
            duration: 2500, 
        },
    ],
    duration: anime.random(5000, 6000),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
})

let circleTwoAnim = anime({
    targets: circleTwo,
    translateX: ['-10vw', anime.random(60, 105) + 'vw'],
    translateY:[
        { 
            value: anime.random(5, 7) + 'vw', 
            duration: 2700,
        },
        { 
            value: anime.random(3, 9) + 'vw', 
            duration: 2500, 
        },
    ],
    duration: anime.random(6000, 7000),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
})

let circleThreeAnim = anime({
    targets: circleThree,
    translateX: ['-30vw', anime.random(90, 130) + 'vw'],
    translateY:[
        { 
            value: ['6vw', anime.random(6, 10) + 'vw'], 
            duration: 1500 
        },
        { 
            value: anime.random(6, 9) + 'vw', 
            duration: 2500, 
        },
    ],
    duration: anime.random(6000, 7000),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
})

let circleFourAnim = anime({
    targets: circleFour,
    translateX: ['30vw', anime.random(70, 90) + 'vw'],
    translateY:[
        { 
            value: ['4vw', anime.random(6, 10) + 'vw'], 
            duration: 1500 
        },
        { 
            value: anime.random(6, 9) + 'vw', 
            duration: 1600, 
        },
    ],
    duration: anime.random(2500, 6000),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
})

let circleFiveAnim = anime({
    targets: circleFive,
    translateX: ['20vw', anime.random(30, 50) + 'vw'],
    translateY:[
        { 
            value: ['5vw', anime.random(6, 7) + 'vw'], 
            duration: 2500 
        },
        { 
            value: anime.random(2, 5) + 'vw', 
            duration: 2500, 
        },
    ],
    duration: anime.random(5500, 6000),
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
})

