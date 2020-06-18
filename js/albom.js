/////////// SIDE MENU //////////

let contentMenu = document.querySelector('.content__menu')
let btnSideMenu = document.querySelector('#btnSideMenu')
let btnSideMenuHide = document.querySelector('#btnSideMenuHide')
let btnReset = document.querySelector('.content__menu__inner__block__new')

btnSideMenuHide.onclick = () => {
    contentMenu.style.transform = 'translateX(-28vw)'
    contentMenu.style.transition = 'all .3s linear'
    btnSideMenu.style.display = 'block'
    btnSideMenuHide.style.display = 'none'
}
btnSideMenu.onclick = () => {
    contentMenu.style.transform = 'translateX(0vw)'
    contentMenu.style.transition = 'all .3s linear'
    btnSideMenu.style.display = 'none'
    btnSideMenuHide.style.display = 'block'
}


////// CHANGE BACKGROUND COLORS ///////
let bodyColor = document.querySelector('body')
let pinkColorBtn = document.querySelector('.pink')
let greyColorBtn = document.querySelector('.grey')
let blueColorBtn = document.querySelector('.blue')

pinkColorBtn.onclick = () => {
    bodyColor.style.backgroundColor = 'var(--pink)'
}
greyColorBtn.onclick = () => {
    bodyColor.style.backgroundColor = 'var(--grey)'
}
blueColorBtn.onclick = () => {
    bodyColor.style.backgroundColor = 'var(--blue)'  
}


/////// ADD NEW SHAPE ////////////
///ideas from web-poster
let numberBorRa = [
    '0%',
    '50%'
]
let createElBtn = document.querySelector('.content__menu__inner__block__shape')
createElBtn.onclick = function() {
    let newShape = document.createElement('div')
    let size = `${anime.random(7,15)}vw`
    newShape.style.width = size
    newShape.style.height = size
    newShape.style.borderRadius = numberBorRa[anime.random(0,1)]
    newShape.style.position = 'absolute'
    newShape.style.top = anime.random(10,20)+'vw'
    newShape.style.left = anime.random(30,70)+'vw'
    newShape.style.zIndex = 2
    newShape.style.backgroundColor = 'white'
    newShape.style.cursor = 'grab'
    newShape.classList.toggle('new__shape')

    document.body.append(newShape)

    gragAndGrop()
}

function gragAndGrop() {
    var newDIv = document.querySelectorAll('.new__shape');

    for (let i = 0; i < newDIv.length; i++) {
        const element = newDIv[i];
        element.onmousedown = function(e) { 
            element.style.position = 'absolute';
            moveAt(e);
            document.body.appendChild(element);
            element.style.zIndex = 1000; 

            function moveAt(e) {
                element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
                element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
            }

            document.onmousemove = function(e) {
                moveAt(e);
            }

            element.onmouseup = function() {
                document.onmousemove = null;
                element.onmouseup = null;
            }
        }
    }
}

///reset 
btnReset.onclick = function(e) {
    window.location.reload(false); 
}
