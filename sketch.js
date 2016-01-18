var a = 25; //bubble size

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(165,250,245);
  
  fill(255,255,255)
  strokeWeight(1)
 //left bubble stream
 ellipse(100,200,a-5,a-5);
 ellipse(120,275,a,a);
 ellipse(90,355,a+5,a+5);
 ellipse(150,430,a-2,a-2);
 ellipse(70,100,a-8,a-8);
 ellipse(80,20,a-12,a-12);
 
 //right bubble stream
 ellipse(400,250,a-7,a-7);
 ellipse(430,160,a-10,a-10);
 ellipse(380,80,a-15,a-15);
 ellipse(405,25,a-17,a-17);
 ellipse(420,350,a+6,a+6);
 ellipse(375,470,a,a);
 
 //fish
 strokeWeight(0)
 fill(255,195,95)
 ellipse(mouseX,mouseY,90,75)
 //top fin
 triangle(mouseX-50,mouseY-90,mouseX+35,mouseY,mouseX-20,mouseY)
 //bottom fins
 triangle(mouseX,mouseY+20,mouseX+50,mouseY,mouseX-20,mouseY+70)
 triangle(mouseX-20,mouseY+20,mouseX+30,mouseY,mouseX-40,mouseY+70)
 //tail
 triangle(mouseX-60,mouseY-50,mouseX-60,mouseY+50,mouseX,mouseY)
 //eye
 fill(0)
 ellipse(mouseX+20,mouseY-10,10,10)
}
