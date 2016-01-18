var a = 25; //bubble size

function setup() {
  createCanvas(500,500);
  background(165,250,245);
}



function draw() {
 ellipse(100,200,a-5,a-5);
 ellipse(120,275,a,a);
 ellipse(90,355,a+5,a+5);
 ellipse(150,430,a-2,a-2);
 ellipse(70,100,a-8,a-8);
 ellipse(80,20,a-12,a-12);
}