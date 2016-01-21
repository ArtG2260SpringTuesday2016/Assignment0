var bubble = 25;


function setup() {
  createCanvas(500,500);
}

function draw() {
  background(165,250,245);
  
  fill(255,255,255);
  strokeWeight(1);
 ellipse(120,275,bubble,bubble);
 ellipse(70,100,bubble-8,bubble-8);
 ellipse(80,20,bubble-12,bubble-12);
 ellipse(400,250,bubble-7,bubble-7);
 ellipse(430,160,bubble-10,bubble-10);
 ellipse(405,25,bubble-17,bubble-17);
 
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
 
 fill(255,255,255)
 strokeWeight(1)
 ellipse(100,200,bubble-5,bubble-5);
 ellipse(150,430,bubble-2,bubble-2);
 ellipse(375,470,bubble,bubble);
 ellipse(380,80,bubble-15,bubble-15);
 ellipse(420,350,bubble+6,bubble+6);
 ellipse(90,355,bubble+5,bubble+5);
}
