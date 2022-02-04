//Random()

let squareSize;
let lineWidth;

function setup() {
  createCanvas(400, 400);
  background(100);
}

function draw() {
  
  squareSize = random(10,250);
  lineWidth = random(2,10);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0,0,255,10);
  fill(0,255,0,10);
  square(200,150,squareSize);
  
}