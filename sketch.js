function setup() {
  createCanvas(1200, 700);
  background(30,30,30);
}

function draw() {
  var planetSun = 300;
  var planetSunLocationX = 600;
  var planetSunLocationY = 350;
  
  var planetMercury = 40;
  var planetMercuryLocationX = 770
  var planetMercuryLocationY = 320
  
  var planetVenus = 60;
  var planetVenusLocationX = 790;
  var planetVenusLocationY = 200;
  
  var planetEarth = 100;
  var planetEarthLocationX = 375;
  var planetEarthLocationY = 175;
  
  var planetMars = 91;
  var planetMarsLocationX = 900;
  var planetMarsLocationY = 600;

//Sun

  fill (222,192,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-20, planetSun-20);

  fill (226,196,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-40, planetSun-40);
  
  fill (230,200,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-60, planetSun-60);
  
  fill (234,204,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-80, planetSun-80);
  
  fill (238,208,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-100, planetSun-100);
  
  fill (242,212,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-120, planetSun-120);
  
  fill (246,216,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-140, planetSun-140);
  
  fill (250,220,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-160, planetSun-160);
  
  fill (255,222,0);
  strokeWeight(0);
  ellipse(planetSunLocationX, planetSunLocationY, planetSun-180, planetSun-180);
  
//Mercury Orbit
  noFill()
  stroke(210,128,64);
  strokeWeight(1);
  ellipse(600,350,348,348)

//Mercury

  fill (210,128,64);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-3, planetMercury-3);
  
  fill (212,126,56);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-6, planetMercury-6);
  
  fill (214,125,53);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-9, planetMercury-9);
  
  fill (216,124,49);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-12, planetMercury-12);
  
  fill (218,123,46);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-15, planetMercury-15);
  
  fill (221,122,43);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-18, planetMercury-18);
  
  fill (223,121,40);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-21, planetMercury-21);
  
  fill (225,120,37);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-24, planetMercury-24);
  
  fill (229,119,34);
  strokeWeight(0);
  ellipse(planetMercuryLocationX, planetMercuryLocationY, planetMercury-27, planetMercury-27);

//Venus Orbit
  noFill()
  stroke(245, 184, 137);
  strokeWeight(2);
  ellipse(600,350,485,485)

//Venus

  fill (200,87,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-6,planetVenus-6)
  
  fill (206,90,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-12,planetVenus-12)
  
  fill (212,93,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-18,planetVenus-18)
  
  fill (218,96,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-24,planetVenus-24)
  
  fill (224,99,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-30,planetVenus-30)
  
  fill (230,102,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-36,planetVenus-36)
  
  fill (236,105,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-42,planetVenus-42)
  
  fill (242,106,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-48,planetVenus-48)
  
  fill (248,107,0);
  strokeWeight(0);
  ellipse(planetVenusLocationX, planetVenusLocationY, planetVenus-56,planetVenus-56)

//Earth Orbit
  noFill()
  stroke(129, 191, 253);
  strokeWeight(3);
  ellipse(600,350,580,580)

//Earth

  fill (3,100,175);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-10,planetEarth-10);
  
  fill (3,104,183);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-20,planetEarth-20);
  
  fill (3,108,191);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-30,planetEarth-30);
  
  fill (3,113,199);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-40,planetEarth-40);
  
  fill (3,117,207);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-50,planetEarth-50);
  
  fill (3,121,215);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-60,planetEarth-60);
  
  fill (3,126,223);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-70,planetEarth-70);
  
  fill (3,130,231);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-80,planetEarth-80);
  
  fill (3,135,239);
  strokeWeight(0);
  ellipse(planetEarthLocationX, planetEarthLocationY, planetEarth-90,planetEarth-90);

//Mars Orbit
  noFill()
  stroke(195, 81, 81);
  strokeWeight(4);
  ellipse(600,350,785,785)

//Mars

  fill(127,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-10, planetMars-10);
  
  fill(138,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-20, planetMars-20);
  
  fill(149,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-30, planetMars-30);
  
  fill(160,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-40, planetMars-40);
  
  fill(171,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-50, planetMars-50);
  
  fill(182,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-60, planetMars-60);
  
  fill(193,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-70, planetMars-70);
  
  fill(204,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-80, planetMars-80);
  
  fill(215,0,0);
  strokeWeight(0);
  ellipse(planetMarsLocationX, planetMarsLocationY, planetMars-90, planetMars-90);

//Text

textSize(45);
fill(246,215,10);
text("Draw Your Own Stars! (Start Clicking)", 225, 50);

textSize(45);
fill(255,255,255);
text("Sun", 560, 370);

textSize(25);
fill(255,255,255);
text("Mercury", 773, 360);

textSize(25);
fill(255,255,255);
text("Venus", 820, 230);

textSize(25);
fill(255,255,255);
text("Earth", 260, 180);

textSize(25);
fill(255,255,255);
text("Mars", 950, 630);

}

function touchStarted() {
  ellipse(touchX, touchY, 5, 5);
  // prevent default
  return false;
}
