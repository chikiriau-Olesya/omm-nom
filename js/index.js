// Scroll animations

// add library
let controller = new ScrollMagic.Controller()


//first feauture
let featureTitleOne = document.querySelector('.feature__one')
let featureTitleOneAnime  = anime({
  targets: featureTitleOne,
  translateX: '80vw',
  easing: 'linear',
  autoplay: false
})

//second feature
let featureTitleTwo = document.querySelector('.feature__two')
let featureTitleTwoAnime  = anime({
  targets: featureTitleTwo,
  translateX: ['-20vw', '50vw'],
  easing: 'linear',
  autoplay: false
})

//third feature
let featureTitleThree = document.querySelector('.feature__three')
let featureTitleThreeAnime  = anime({
  targets: featureTitleThree,
  translateX: ['-30vw', '60vw'],
  easing: 'linear',
  autoplay: false
})

//fourth feature
let featureTitleFour = document.querySelector('.feature__four')
let featureTitleFourAnime  = anime({
  targets: featureTitleFour,
  translateX: ['-40vw', '40vw'],
  easing: 'linear',
  autoplay: false
})

let sectionss = document.querySelector('#sectionFeatures')
new ScrollMagic.Scene({
  triggerElement: sectionss,
  duration: sectionFeatures.getBoundingClientRect().width
})
.addTo(controller)
.on('progress', e => {
   featureTitleOneAnime.seek(featureTitleOneAnime.duration * e.progress/4) 
   featureTitleTwoAnime.seek(featureTitleOneAnime.duration * e.progress/2) 
   featureTitleThreeAnime.seek(featureTitleOneAnime.duration * e.progress/1.8) 
   featureTitleFourAnime.seek(featureTitleOneAnime.duration * e.progress/1.6) 
})










// Open hours btn

const weekBtn = document.querySelector('.week')
const weekendsBtn = document.querySelector('.weekends')
let timeWeek  = document.querySelector('.contacts__time__monday')
let timeWeekends  = document.querySelector('.contacts__time__saturday')

weekBtn.onclick = function() {
    timeWeek.style.visibility = 'visible'
    timeWeekends.style.visibility = 'hidden'
}

weekendsBtn.onclick = function() {
    timeWeekends.style.visibility = 'visible'
    timeWeek.style.visibility = 'hidden'
}
