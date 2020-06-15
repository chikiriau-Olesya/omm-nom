function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
    colorMode(RGB, 255);
    blendMode(DIFFERENCE)
    background('fff');
  }

function draw() {
    rSize = random(250)
    if (mouseX > width/3) {
        let rH = random(340, 120),
            rS = random(10, 20),
            rB = random(240, 255)
        let fillColor = color( rH, rS, rB )
        fill(fillColor);
        ellipse(random(windowWidth), random(windowHeight), rSize, rSize);
    } else {
        fill(255);
        rect(random(windowWidth), random(windowHeight),rSize, rSize)
    }
}