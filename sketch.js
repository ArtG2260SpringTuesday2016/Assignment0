function setup() {

}

function draw() {
  ellipse(46,75, 55, 55);
  ellipse(36,75, 10, 10);
  ellipse(56,75, 10, 10);
  line(36, 90, 56, 90);
 var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 500, 500);
  triangle(20, 65, 48, 10, 76, 65);
  
 
}