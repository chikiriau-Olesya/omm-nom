/////// FIRST SCREEN ANIMATIONS ////////

let mainBc = document.querySelector('.main__bc-pic')

let mainBcAnime = anime({
  targets: mainBc,
  translateY: ['-23vw', '-23vw'],
  rotate: ['0', 360],
  scale: [1.7 , 1.7],
  easing: 'linear',
  direction: 'alternate',
  duration: 95000,
  loop: true
})


setTimeout(function () {
  mainBc.classList.add('main__bc-animation')
}, 3000)









/////////// SCROLL ANIMATIONS //////////

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
  translateX: ['-50vw', '50vw'],
  easing: 'linear',
  autoplay: false
})

//third feature
let featureTitleThree = document.querySelector('.feature__three')
let featureTitleThreeAnime  = anime({
  targets: featureTitleThree,
  translateX: ['-1vw', '-30vw'],
  easing: 'linear',
  autoplay: false
})

//fourth feature
let featureTitleFour = document.querySelector('.feature__four')
let featureTitleFourAnime  = anime({
  targets: featureTitleFour,
  translateX: ['-40vw', '30vw'],
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


//////// OPEN HOURS IN CONTACT SECTION///////

const weekBtn = document.querySelector('.week')
const weekendsBtn = document.querySelector('.weekends')
let timeWeek  = document.querySelector('.contacts__time__monday')
let timeWeekends  = document.querySelector('.contacts__time__saturday')

weekBtn.onclick = function() {
    timeWeek.style.visibility = 'visible'
    timeWeekends.style.visibility = 'hidden'
    weekBtn.style.color = 'var(--pink)'
    weekendsBtn.style.color = 'var(--blue)'
}

weekendsBtn.onclick = function() {
    timeWeekends.style.visibility = 'visible'
    timeWeek.style.visibility = 'hidden'
    weekendsBtn.style.color = 'var(--pink)'
    weekBtn.style.color = 'var(--blue)'
}
