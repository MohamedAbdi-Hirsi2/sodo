let x,y,r,g,b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  r = random(0,255);
  g = 0;
  b = random(1, 255);
  x = random(0, 600);
  y = random(0, 400);
  noStroke();
  fill(g,b,r,100);
  square(x,y,24);
  ellipse(x,y,25,21);
  triangle(x,y,b,34,21,60);
  
}