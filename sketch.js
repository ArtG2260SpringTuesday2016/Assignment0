var triPoint= 50;

function setup() {
  createCanvas(600,600)
  //background
  background(72, 61, 139)

}

function draw() {
  //ellipse
  fill(51)
  ellipse(mouseX,mouseY,60,60)
  noStroke()
  
  //mouseIsPressed
  if (mouseIsPressed)
    //rect
  rect(mouseX - 25 , mouseY + 50, 50, 100);
  else
    //tri
  triangle(50, 50, 550, 50, 300, 400);
  
}


function mousePressed(){
  //background
  background(240,222,210)
  fill(0, 126, 255)
  
  //tri
  triangle(triPoint, triPoint, 550, 50, 300, 400)
  triPoint = triPoint +80
  
}
