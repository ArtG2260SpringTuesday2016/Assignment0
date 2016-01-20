var planet = {
  sun: 300,
  sunX: 600,
  sunY: 450,
  mercury:40,
  mercuryX:770,
  mercuryY:420,
  venus:60,
  venusX:790,
  venusY:300,
  earth:100,
  earthX:375,
  earthY:275,
  mars:91,
  marsX:900,
  marsY:700
};

function setup() {
  createCanvas(1200, 900);
}

function draw() {
background(30,30,30);

if (mouseX < 788 && mouseY < 438 && mouseX && mouseX > 752 && mouseY > 402 ){
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
}else if (mouseX < 817 && mouseY < 327 && mouseX && mouseX > 763 && mouseY > 273){
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
}else if (mouseX < 415 && mouseY < 315 && mouseX && mouseX > 335 && mouseY > 235){
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
}else if (mouseX < 940 && mouseY < 740 && mouseX && mouseX > 860 && mouseY > 660){
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
}else{
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
  textSize(35);
  fill(255,255,255);
  noStroke();
  text("Hover To Learn More About The Solar System", 250, 40);
  }

//Sun

  fill (222,192,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-20, planet.sun-20);

  fill (226,196,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-40, planet.sun-40);
  
  fill (230,200,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-60, planet.sun-60);
  
  fill (234,204,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-80, planet.sun-80);
  
  fill (238,208,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-100, planet.sun-100);
  
  fill (242,212,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-120, planet.sun-120);
  
  fill (246,216,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-140, planet.sun-140);
  
  fill (250,220,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-160, planet.sun-160);
  
  fill (255,222,0);
  strokeWeight(0);
  ellipse(planet.sunX, planet.sunY, planet.sun-180, planet.sun-180);

//Mercury

  fill (210,128,64);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-3, planet.mercury-3);
  
  fill (212,126,56);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-6, planet.mercury-6);
  
  fill (214,125,53);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-9, planet.mercury-9);
  
  fill (216,124,49);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-12, planet.mercury-12);
  
  fill (218,123,46);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-15, planet.mercury-15);
  
  fill (221,122,43);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-18, planet.mercury-18);
  
  fill (223,121,40);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-21, planet.mercury-21);
  
  fill (225,120,37);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-24, planet.mercury-24);
  
  fill (229,119,34);
  strokeWeight(0);
  ellipse(planet.mercuryX, planet.mercuryY, planet.mercury-27, planet.mercury-27);

//Venus

  fill (200,87,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-6,planet.venus-6);
  
  fill (206,90,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-12,planet.venus-12);
  
  fill (212,93,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-18,planet.venus-18);
  
  fill (218,96,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-24,planet.venus-24);
  
  fill (224,99,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-30,planet.venus-30);
  
  fill (230,102,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-36,planet.venus-36);
  
  fill (236,105,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-42,planet.venus-42);
  
  fill (242,106,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-48,planet.venus-48);
  
  fill (248,107,0);
  strokeWeight(0);
  ellipse(planet.venusX, planet.venusY, planet.venus-54,planet.venus-54);

//Earth

  fill (3,100,175);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-10,planet.earth-10);
  
  fill (3,104,183);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-20,planet.earth-20);
  
  fill (3,108,191);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-30,planet.earth-30);
  
  fill (3,113,199);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-40,planet.earth-40);
  
  fill (3,117,207);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-50,planet.earth-50);
  
  fill (3,121,215);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-60,planet.earth-60);
  
  fill (3,126,223);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-70,planet.earth-70);
  
  fill (3,130,231);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-80,planet.earth-80);
  
  fill (3,135,239);
  strokeWeight(0);
  ellipse(planet.earthX, planet.earthY, planet.earth-90,planet.earth-90);

//Mars

  fill(127,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-10, planet.mars-10);
  
  fill(138,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-20, planet.mars-20);
  
  fill(149,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-30, planet.mars-30);
  
  fill(160,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-40, planet.mars-40);
  
  fill(171,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-50, planet.mars-50);
  
  fill(182,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-60, planet.mars-60);
  
  fill(193,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-70, planet.mars-70);
  
  fill(204,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-80, planet.mars-80);
  
  fill(215,0,0);
  strokeWeight(0);
  ellipse(planet.marsX, planet.marsY, planet.mars-90, planet.mars-90);

//Sun Text

if (mouseX < 700 && mouseY < 550 && mouseX && mouseX > 500 && mouseY > 350 ){
  textSize(45);
  fill(255,255,255);
  text("Sun", 560, 440);
  textSize(20);
  text("Mass: 1.989 × 10^30 kg", 495, 475);  
}

}
