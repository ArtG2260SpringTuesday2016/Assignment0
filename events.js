function setup() {
createCanvas(500, 500);
  background('Black');
}
// Move the mouse across the page
// to change its value

var value = 0;
function draw() {
  fill(value);
  rect(95, 25, 350, 300);
}
function mouseMoved() {
  value = value + 9;
  if (value > 500) {
    value = 0;
  }
}
// Click within the image to change
// the value of the rectangle
// after the mouse has been clicked

var value = 0;
function draw() {
  fill(value);
  stroke('red')
  rect(25, 25, 350, 350);
}
function mouseClicked() {
  if (value == 0) {
    value = 500;
  } else {
    value = 0;
  }
}
