var rectX = 0;
var Y = 55;

function setup() {
  createCanvas(600, 400);
  background(0,255,0);
}

function draw() {
  
  //rectangle
  fill(1);
  noStroke(255);
  rect(rectX, mouseY, Y, Y, 20);
  rectX = rectX + 3
  
  }
function mousePressed(){
  //newbackground
  background(20,255,200);
}