/////////// INGREDIENTS ////////
let showIngredBtn = document.querySelector('.card__product__ingred')
let ingredWindow = document.querySelector('.ingred')
let closeIngredWindow = document.querySelector('.ingred__content__close')

//open general window
showIngredBtn.onclick = () => {
    ingredWindow.classList.add('ingred-active')
}

closeIngredWindow.onclick = () => {
    ingredWindow.classList.remove('ingred-active')
}

//open full description window
let fullIngred = document.querySelector('.ingred__content__desc')
let fullIngredIsShow = document.querySelector('.ingred__content__desc-isShow')
let showFullIngred = document.querySelector('.ingred__contnet__show')
let closeFullIngred = document.querySelector('#closeDesc')

let fullIngredCloseAnime = anime({
    targets:  fullIngred,
    translateX: ['0vw', '85vw'],
    easing: 'easeOutExpo',
    durstion: 3000,
    autoplay: false
})
closeFullIngred.onclick = fullIngredCloseAnime.play

let fullIngredAnime = anime({
    targets:  fullIngred,
    translateX: ['85vw', '0vw'],
    easing: 'easeOutExpo',
    durstion: 3000,
    autoplay: false
})
showFullIngred.onclick =  fullIngredAnime.play


///////// SLIDER //////////

// take default slide index
let slideIndex = 1
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//btns
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

prevBtn.onclick = () => {
    minusSlide()
}

nextBtn.onclick = () => {
    plusSlide()
}



/////////// POPUP WINDOW/////////

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
