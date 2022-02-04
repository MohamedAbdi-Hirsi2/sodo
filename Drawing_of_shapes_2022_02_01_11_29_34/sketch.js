function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 0,100);
  //Drawing a rectangular shape
  rect(120,50,100,200);
  //Adding color inside the rect
  fill(250,52,9);
  /*Adding color outline the rect*/
  stroke(40);
  
   //Adding fill color inside the quad
  fill(230,190,27);
  stroke(23);
  quad(30,4,90,60,402,391,300,100);
  
  
 
}