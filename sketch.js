var bubble = 25;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(165,250,245);
  
  fill(255,255,255);
  strokeWeight(1);
  
var makeBubbles = function(){
var numBubbles = 20;
 var bubbleSize = bubble - random(8,17);
for (var i = 1; i < numBubbles / 2; i++) {
 
  ellipse((i * random(0, 500)), (i * random(0, 500)), bubbleSize, bubbleSize)
}
for (var i = 1; i < numBubbles / 2; i++) {
  ellipse((i * random(0, 500)), (i * random(0, 500)),bubbleSize, bubbleSize)
}
}
makeBubbles();

 
 //fish
 strokeWeight(0)
 fill(255,195,95)
 ellipse(mouseX,mouseY,90,75)
 //top fin
 triangle(mouseX-50,mouseY-90,mouseX+35,mouseY,mouseX-20,mouseY)
 //bottom fins
 triangle(mouseX,mouseY+20,mouseX+45,mouseY,mouseX-20,mouseY+70)
 triangle(mouseX-20,mouseY+20,mouseX+30,mouseY,mouseX-40,mouseY+70)
 //tail
 triangle(mouseX-60,mouseY-50,mouseX-60,mouseY+50,mouseX,mouseY)
 //eye
 fill(0)
 ellipse(mouseX+20,mouseY-10,10,10)
 
  fill(255,255,255);
  strokeWeight(1);
makeBubbles();
}
