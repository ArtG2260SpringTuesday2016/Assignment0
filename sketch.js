var rectangle = {
  x: 0,
  y: 35,
}
var isntChanged = true;

function setup() {
  createCanvas(600, 400);
  background(0,255,0);
}

function draw() {
  ellipse(400,300,150,150)
  ellipse(80,60,130,130)
  
  fill(1);
  noStroke(255);
  rect(rectangle.x, mouseY, rectangle.y , rectangle.y , 20);
  rectangle.x = rectangle.x + 2.5
  if (rectangle.x > 600){
    rectangle.x = 0;
  if (isntChanged) {background(200,0,155)
  }
  }}
function mousePressed(){
  //new pink background
  background = (255,0,255);
  isntChanged = false;
}
