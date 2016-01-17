// This Variable will be used to make the background return to black
var dusk = (1000 - mouseX);

function setup() {
  createCanvas(1000, 500)
  background(0, 0, 0)
   
}
// Changes the color of the background depending on mouse x position
// Will go towards white as the mouse approaches the center of the screen
//and black as the x approaches 0 or 1000 from the center of 500
function draw() {
  if (mouseX < 501) {
      background (mouseX, mouseX, mouseX)
  } else {
       background(dusk, dusk, dusk)  }
}