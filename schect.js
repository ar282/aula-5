function setup() {
  createCanvas(700, 700);
  background("black")
}

function draw() {
  stroke("rgb(255,255,));
  fill("rgb(253,253,253)");
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
