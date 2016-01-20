function setup() {
  createCanvas(640,360)
  background(10,200,50,80)
}

function draw() {
 //sky
  fill(100,230,400)
  if (mouseX > 40 && mouseX < 120)
 if (mouseY > 40 && mouseY < 120)
 fill (20,20,230)
 rect(0,0,640,280)
  //house
  fill(160,150,140);
 rect(320,180,150,150);
 //roof
 fill(150,50,10)
 triangle(320,180,395,100,470,180)
//path
 fill(20,150, 30)
 rect(380,330, 30, 55)
 //door
 fill(150,100,10)
 rect(373,265, 45, 65)
 //windows
 fill(250,250,250)
 ellipse(360, 230, 30, 30)
 ellipse(430, 230, 30, 30)
 //sun
 fill(255,204,0)
 if (mouseX > 40 && mouseX < 120)
 if (mouseY > 40 && mouseY < 120)
 fill(250,250,250)
 ellipse(80,80,80,80)
 
}