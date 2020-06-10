//color palete for generate circles
const backgroundColor = [
    'var(--pink)',
    'var(--grey)',
]


let btn = document.querySelector('.button')
let closePopup = document.querySelector('.close-popup')
let popup = document.querySelector('.popup')


function openPopupWindow() {
    popup.style.visibility = 'visible'
}


btn.onclick = function() {
    openPopupWindow()

    setTimeout(function() {
        popup.style.visibility = 'hidden'
    }, 5000)

    //generate circles
    let numberOfCircles = 80
    for(let i = 0; i < numberOfCircles; i++) {
        let divCircle = document.createElement('div')
        divCircle.classList.toggle('div__circle')
        divCircle.style.position = 'absolute'
        divCircle.style.backgroundColor = backgroundColor[anime.random(0,1)]
        divCircle.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,10)}vh)`
        document.body.append(divCircle)
    }
}


//drag and drop cursor
let newCircles = document.getElementsByClassName('.div__circle')
for (let i = 0; i < newCircles.lenght; i++) {
    newCircles[i].onmousedown = function (e) {
        newCircles[i].style.cursor = 'grabbing'
    }
    newCircles[i].onmouseup = function (e) {
        newCircles[i].style.cursor = 'grab'
    }

    console.log(1234);
    
    newCircles[i].style.backgroundColor = "var(--blue)"
}
