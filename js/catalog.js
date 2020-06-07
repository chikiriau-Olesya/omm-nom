

const circle = document.querySelectorAll('.circle')

for (let i = 0; i < circle.length; i++) {
    let circleAnim = anime({
        targets: circle,
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
}

// let circleAnim = anime({
//     targets: circle,
//     translateX: anime.random(20, 95) + 'vw',
//     translateY:[
//         { 
//             value: anime.random(2, 9) + 'vw', 
//             duration: 2500 
//         },
//         { 
//             value: anime.random(3, 8) + 'vw', 
//             duration: 2500, 
//         },
//     ],
//     duration: anime.random(5000, 6000),
//     direction: 'alternate',
//     loop: true,
//     easing: 'easeInOutSine',
// })
