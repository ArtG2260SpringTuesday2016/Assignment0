

function setup() {
  createCanvas(1200, 600)
  background(0, 0, 0)
  }
  

function draw() {
  
  //This Variable is used to convert the width of the canvas into a multiple of 256
  
  var colconvert = (width / 256) ;
  
  //This Variable will be used to initially change the background to white
  
  var dawn = (mouseX / colconvert) ;
  
  // This Variable will be used to make the background return to black
  
  var dusk = ((width - mouseX) / colconvert);
  
  //This Variable converts the distance percentage wise the mouseX is across the screen
  //and converts it into a multiple of pi for later use
 
  var piconvert = PI * mouseX / width ;
  
  // This Variable creates the Y arc for the ellipse using the variable piconvert 
  // and the height of the canvas
 
  var cycle = sin(piconvert) * -height + height ;
  
  /* Changes the color of the background depending on mouse x position
     Will go towards white as the mouse approaches the center of the screen
     and black as the x approaches 0 or 1000 from the center of 500
   */

  if (mouseX <= (width / 2)) {
      background(dawn, dawn, dawn)
  } else {
       background(dusk, dusk, dusk)  }
       
  //The stroke, strokeweight, and ellipse create the circle that should move across the screen
  
  stroke("orange")
  strokeWeight(15)
   
  ellipse(mouseX, cycle, 100, 100 )
  
  
}

