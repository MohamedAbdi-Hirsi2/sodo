function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  var x = 0;
  
  while (x < width){
    fill(0, 200,255);
    //ellipse(x, 100,25, 25);
    x = x + 50;
  }
  
  for (var x = 0; x < width;x= x + 50 ){
    fill(0, 200,255);
    //ellipse(x, 300,25, 25);
  }
  while (x > height){
    fill(0, 200,255);
     verticalline(x, 100,25, 25);
    x = x + 50;
  }
  
  for (var x = 0; x < height;x= x + 50 ){
    fill(255, 90,300);
      line(x, 300,25, 25);

  }
  
}