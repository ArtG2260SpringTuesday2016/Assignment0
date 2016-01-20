function setup() {

 createCanvas(500,500)
 

}

function draw() {
  background(400,100,200);

  fill(10,200,230);
  rect(0, 400, 500, 400);
 
  fill(10,100,230);
  triangle(0,0,500,500,500,0);
  
  noStroke();
  fill(10,30,200);
  triangle(0,400,400,400,0,45);

  fill(60,30,255);
  ellipse(250,250,110,90);

  fill(255,255,255);
  ellipse(250,250,100,80);
  
  fill(200,0,200);
  ellipse(250,250,40,40);
  
  fill(0,0,0);
  ellipse(250,250,30,30);
  
  
  fill(255,255,10);
  triangle(0,500,140,500,250,250);
 
 fill(255,255,255);
 ellipse(262,240,10,10);
 
 ellipse(mouseX,mouseY,10,10);
  
  
  
}
