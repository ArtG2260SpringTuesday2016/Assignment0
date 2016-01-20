var rectX = 0;
var Y = 35;
var isntChanged = true;

function setup() {
  createCanvas(600, 400);
  background(0,255,0);
}

function draw() {
  //circle
  ellipse(400,300,150,150)
  ellipse(80,60,130,130)
  
  //moving circle
  fill(1);
  noStroke(255);
  rect(rectX, mouseY, Y, Y, 20);
  rectX = rectX + 1.5
  if (rectX > 600){
    rectX = 0;
  if (isntChanged) {background(0,0,155)
  }
  }}
function mousePressed(){
  //newbackground
  background(255,0,255);
  isntChanged = false;
}