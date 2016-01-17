var N = 150;


function setup() {
  createCanvas(600,600)
  //background
  background(240,222,210)
 //rect
 noFill()
 rect(100, N, 400, 400)
}

function draw() {
  //ellipse
  fill(51)
  ellipse(mouseX,mouseY,60,50)
  noStroke()
}
function mousePressed(){
  background(240,222,210)
  //rect
  fill('rgb(0,255,0)')
  rect(150, N, 400, 400)
  N = N + 5
  //tri
  triangle(50, 50, 550, 50, 300, 400)
}
