let fr=10;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200,200,255);
  frameRate(fr);
}


function draw() {
  
  strokeWeight(random(10));
  push();
  stroke(0,random(255),0);
  point(random(width),random(height));
  pop();
  fill(255,255,0,50);
  stroke(random(200),0,0);
  rect(mouseX,mouseY,10,10);
  for(let i=0;i<100;i+=4){
    line(0,0,100,i);
  }
  
}
