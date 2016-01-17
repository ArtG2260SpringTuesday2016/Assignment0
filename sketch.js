

function setup() {
  createCanvas(1024, 500)
  background(0, 0, 0)
  }
  

function draw() {
  
  //This Variable will be used to initially change the background to white
  
  var dawn = (mouseX / 4);
  
  // This Variable will be used to make the background return to black
  var dusk = ((1024 - mouseX) / 4);
  
  // This Variable creates the Y arc for the ellipse
  var cycle = sin(PI * mouseX / 1024) * -500 + 500
  
  /* Changes the color of the background depending on mouse x position
     Will go towards white as the mouse approaches the center of the screen
     and black as the x approaches 0 or 1000 from the center of 500
   */

  if (mouseX <= 512) {
      background(dawn, dawn, dawn)
  } else {
       background(dusk, dusk, dusk)  }
       
  stroke("orange")
  strokeWeight(15)
   
  ellipse(mouseX, cycle, 100, 100 )
  
  
}

