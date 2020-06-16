function setup() {
    let mCanvas = createCanvas(windowWidth, windowHeight);
    mCanvas.parent("canvasTwo");
    background('#0018B8');
  }
  
function draw() {
    stroke(255);
    strokeWeight(3);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}