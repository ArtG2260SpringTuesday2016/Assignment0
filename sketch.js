var confettiX=15
var confettiY=15

function setup() {
  createCanvas(700,700);
}

function draw() {
//ball
  background(250,250,252)
  strokeWeight(0)
  fill(0,0,250,30)
  ellipse(mouseX,mouseY,80,80)

//legs
  stroke(0,0,0)
  strokeWeight(7)
  noFill()
  arc(255,520,45,180,-.6,1.6)
  arc(330,515,35,180,1.5,3.8)

//tail
  strokeWeight(0)
  fill(170,120,120)
  arc(360,420,95,110,-.6,2.2,CHORD)
  fill(250,250,252)
  arc(340,395,125,125,-.6,2.2,CHORD)

//Ears
  fill(170,120,120)
  triangle(330,360,350,320,375,364)
  
//body
  fill(150,100,100)
  quad(280,320,275,320,240,520,350,500)


//head
  ellipse(280,320,140,130)
  fill(170,120,120)
  ellipse(240,300,68,65)
  
//nose
  fill(0,0,0)
  triangle(215,278,240,268,228,288)
  
//mouth
  noFill()
  strokeWeight(2)
  arc(253,285,50,50,1.2,3)
  arc(203,288,50,50,0,1.2)

//eyes
  fill(0,0,0)
  ellipse(320,308,14,14)
  strokeWeight(4)
  line(318,290,330,293)
  
  strokeWeight(0)
  if(mouseX<350){
    fill(250,250,250)
    ellipse(316,306,8,8) 
  }else{
    fill(250,250,250)
    ellipse(325,308,8,8)
  }
  
//arms
  strokeWeight(6)
  noFill()
  arc(255,390,80,60,1.4,3.1)
  arc(315,390,80,60,-.2,1.7)
  
//confetti
  stroke(255,200,250)
  line(confettiX,confettiY,confettiX+15,confettiY+12)
  line(confettiX+120,confettiY-30,confettiX+135,confettiY-18)
  line(confettiX+70,confettiY+90,confettiX+55,confettiY+102)
  line(confettiX+350,confettiY-20,confettiX+365,confettiY-8)
  line(confettiX+300,confettiY+150,confettiX+315,confettiY+162)
  line(confettiX+500,confettiY+100,confettiX+515,confettiY+112)
  line(confettiX+600,confettiY+30,confettiX+585,confettiY+42)
  confettiY=confettiY+2
  
  if(confettiY>700){
    confettiY=0
  }

}