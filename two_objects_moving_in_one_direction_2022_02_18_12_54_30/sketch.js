var ball = {
  x: 300,
  y: 400,
  xspeed: 2,
  yspeed: -1,
  
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  move();
  bounce();
  display();

  
  
}
 
function move(){
    ball.x = ball.x + ball.xspeed;
   ball.y = ball.y + ball.yspeed;
}
function bounce(){
  if (ball.x > width || ball.x < 0){
    ball.xspeed = ball.xspeed * -1;
    
  }
  
  if (ball.y > width || ball.y < 0){
    ball.yspeed = ball.yspeed * -1;
    
  }
}
function display(){
  stroke(255);
  strokeWeight(2);
  fill(255,0,200,40);
  triangle(ball.x, ball.y,40,24,43,90);
  ellipse(ball.x/2, ball.y,24,24);
  
  
}