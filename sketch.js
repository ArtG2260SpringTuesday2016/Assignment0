//Planet Variables

var sun = {
  name: "Sun",
  size: 300,
  x: 600,
  y: 450,
  colorR: 222,
  colorG: 192,
  colorB: 0
};

var mercury = {
  name: "Mercury",
  size: 40,
  x: 770,
  y: 420,
  colorR: 210,
  colorG: 128,
  colorB: 64
};

var venus = {
  name: "Venus",
  size: 60,
  x: 790,
  y: 300,
  colorR: 200,
  colorG: 87,
  colorB: 0
};

var earth = {
  name: "Earth",
  size: 100 ,
  x: 375,
  y: 275,
  colorR: 3,
  colorG: 100,
  colorB: 175
};

var mars = {
  name: "Mars",
  size: 91,
  x: 900,
  y: 700,
  colorR: 127,
  colorG: 0,
  colorB: 0
}

function setup() {
  createCanvas(1200, 900);
}

function draw() {
background(30,30,30);

//Mercury Hover Orbit

if (dist(mouseX, mouseY, mercury.x, mercury.y) < mercury.size - 12){
  textSize(25);
  fill(255,255,255);
  text("Mercury", 778, 460);
  textSize(15);
  text("Mass: 3.285 × 10^23 kg", 778, 480);
  noFill();
  strokeWeight(0);
  ellipse(600,450,485,485);
  ellipse(600,450,580,580);
  ellipse(600,450,785,785);
  stroke(245, 184, 137);
  strokeWeight(1);
  ellipse(600,450,348,348);
  
//Venus Hover Orbit

} else if (dist(mouseX, mouseY, venus.x, venus.y) < venus.size - 24){
  textSize(25);
  fill(255,255,255);
  text("Venus", 820, 300);
  textSize(15);
  text("Mass: 4.867 × 10^24 kg", 820, 320);
  noFill();
  strokeWeight(0);
  ellipse(600,450,348,348);
  ellipse(600,450,580,580);
  ellipse(600,450,785,785);
  stroke(245, 184, 137);
  strokeWeight(2);
  ellipse(600,450,485,485);
  
//Earth Hover Orbit

} else if (dist(mouseX, mouseY, earth.x, earth.y) < earth.size - 40){
  textSize(25);
  fill(255,255,255);
  text("Earth", 260, 270);
  textSize(18);
  text("Mass: 5.972 × 10^24 kg", 130, 295);
  noFill();
  strokeWeight(0);
  ellipse(600,450,348,348);
  ellipse(600,450,485,485);
  ellipse(600,450,785,785);
  stroke(129, 191, 253);
  strokeWeight(3);
  ellipse(600,450,580,580);
  
// Mars Hover Orbit

} else if (dist(mouseX, mouseY, mars.x, mars.y) < mars.size - 40){
  textSize(25);
  fill(255,255,255);
  text("Mars", 945, 700);
  textSize(15);
  text("Mass: 6.39 × 10^23 kg", 945, 720);
  noFill();
  strokeWeight(0);
  ellipse(600,450,348,348);
  ellipse(600,450,485,485);
  ellipse(600,450,580,580);
  stroke(195, 81, 81);
  strokeWeight(4);
  ellipse(600,450,785,785);
  
//When No Hover

} else{
  noFill();
  stroke(210,128,64);
  strokeWeight(1);
  ellipse(600,450,348,348);
  stroke(245, 184, 137);
  strokeWeight(2);
  ellipse(600,450,485,485);
  stroke(129, 191, 253);
  strokeWeight(3);
  ellipse(600,450,580,580);
  noFill();
  stroke(195, 81, 81);
  strokeWeight(4);
  ellipse(600,450,785,785);
  
//Title

  textSize(35);
  fill(255,255,255);
  noStroke();
  text("Hover To Learn More About The Solar System", 250, 40);
  }

//Sun

  fill (222,192,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-20, sun.size-20);

  fill (226,196,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-40, sun.size-40);
  
  fill (230,200,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-60, sun.size-60);
  
  fill (234,204,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-80, sun.size-80);
  
  fill (238,208,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-100, sun.size-100);
  
  fill (242,212,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-120, sun.size-120);
  
  fill (246,216,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-140, sun.size-140);
  
  fill (250,220,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-160, sun.size-160);
  
  fill (255,222,0);
  strokeWeight(0);
  ellipse(sun.x, sun.y, sun.size-180, sun.size-180);

//Mercury

  fill (210,128,64);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-3, mercury.size-3);
  
  fill (212,126,56);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-6, mercury.size-6);
  
  fill (214,125,53);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-9, mercury.size-9);
  
  fill (216,124,49);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-12, mercury.size-12);
  
  fill (218,123,46);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-15, mercury.size-15);
  
  fill (221,122,43);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-18, mercury.size-18);
  
  fill (223,121,40);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-21, mercury.size-21);
  
  fill (225,120,37);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-24, mercury.size-24);
  
  fill (229,119,34);
  strokeWeight(0);
  ellipse(mercury.x, mercury.y, mercury.size-27, mercury.size-27);

//Venus

  fill (200,87,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-6,venus.size-6);
  
  fill (206,90,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-12,venus.size-12);
  
  fill (212,93,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-18,venus.size-18);
  
  fill (218,96,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-24,venus.size-24);
  
  fill (224,99,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-30,venus.size-30);
  
  fill (230,102,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-36,venus.size-36);
  
  fill (236,105,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-42,venus.size-42);
  
  fill (242,106,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-48,venus.size-48);
  
  fill (248,107,0);
  strokeWeight(0);
  ellipse(venus.x, venus.y, venus.size-54,venus.size-54);

//Earth

  fill (3,100,175);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-10,earth.size-10);
  
  fill (3,104,183);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-20,earth.size-20);
  
  fill (3,108,191);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-30,earth.size-30);
  
  fill (3,113,199);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-40,earth.size-40);
  
  fill (3,117,207);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-50,earth.size-50);
  
  fill (3,121,215);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-60,earth.size-60);
  
  fill (3,126,223);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-70,earth.size-70);
  
  fill (3,130,231);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-80,earth.size-80);
  
  fill (3,135,239);
  strokeWeight(0);
  ellipse(earth.x, earth.y, earth.size-90,earth.size-90);

//Mars

  fill(127,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-10, mars.size-10);
  
  fill(138,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-20, mars.size-20);
  
  fill(149,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-30, mars.size-30);
  
  fill(160,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-40, mars.size-40);
  
  fill(171,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-50, mars.size-50);
  
  fill(182,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-60, mars.size-60);
  
  fill(193,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-70, mars.size-70);
  
  fill(204,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-80, mars.size-80);
  
  fill(215,0,0);
  strokeWeight(0);
  ellipse(mars.x, mars.y, mars.size-90, mars.size-90);

//Sun Hover Text

if (dist(mouseX, mouseY, sun.x, sun.y) < sun.size-160 ){
  textSize(45);
  fill(255,255,255);
  text("Sun", 560, 440);
  textSize(20);
  text("Mass: 1.989 × 10^30 kg", 495, 475);  
}

}
