function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseY < 300) {
    fill(255, 0,0);
  }
  
  
  
  
  
  
  ellipse(300, 200, 100, 100);
  triangle(49,78,90,65,76,89);
}