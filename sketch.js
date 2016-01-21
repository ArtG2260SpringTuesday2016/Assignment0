

function setup() {
  createCanvas(800, 500)
  background(0, 0, 0)
  }
  

function draw() {
  
  //This Variable is used to convert the width of the canvas into a multiple of 256
  
  var colconvert = (width / 256) ;
  
  //This Variable will be used to initially change the background to white
  
  var dawn = (mouseX / colconvert) ;
  
  // This Variable will be used to make the background return to black
  var dusk = ((width - mouseX) / 4);
  
  // This Variable creates the Y arc for the ellipse
  var cycle = sin(PI * mouseX / width) * -height + height
  
  /* Changes the color of the background depending on mouse x position
     Will go towards white as the mouse approaches the center of the screen
     and black as the x approaches 0 or 1000 from the center of 500
   */

  if (mouseX <= (width / 2)) {
      background(dawn, dawn, dawn)
  } else {
       background(dusk, dusk, dusk)  }
       
  stroke("orange")
  strokeWeight(15)
   
  ellipse(mouseX, cycle, 100, 100 )
  
  
}

