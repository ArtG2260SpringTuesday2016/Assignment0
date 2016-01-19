function setup() {
createCanvas(500, 500);
  background('Black');
}

function draw() {
translate(width/2, height/2);
rotate(PI/3.0);
stroke(color('pink'));
strokeWeight(4);
fill('red');
triangle(10, 75, 58, 20, 86, 75);


translate(width/4, height/4);
shearX(PI/4.0);
rotate(PI/3.0);
stroke(color('white'));
strokeWeight(4);
fill('red');
rect(0, 0, 30, 30);
} 
