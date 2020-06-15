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
    let slides = document.getElementsByClassName('item');
    let slidesFloor = document.getElementsByClassName('slider-floor-item')
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slidesFloor[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    slidesFloor[slideIndex - 1].style.display = 'block';
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
