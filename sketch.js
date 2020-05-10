
let startGame;

function preload() {
  img = loadImage('assets/bg1.jpg');
  titlePhysics=loadImage("assets/title.png")
  titleHola=loadImage("assets/title2.png")
  planet1=loadImage("assets/planet1.png")
  planet2=loadImage("assets/planet2.png")
  planet3=loadImage("assets/planet3.png")
  planet4=loadImage("assets/planet4.png")
  startGame=loadImage("assets/start.png")


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  widthOfStart=100;
  heightOfStart=40;

}

function draw(){
  background(15,22,26);
  image(img, (windowWidth-888)/2, (windowHeight-592)/2,888,592);

  console.log(mouseX,mouseY);

  if (frameCount%100<=50){
    image(titlePhysics,(windowWidth-846)/2+53,windowHeight/2-80);
  }else{
    image(titleHola,(windowWidth-846)/2+50,windowHeight/2-80);
  }

  //planet1
  push();
  translate(150,150);
  rotate(frameCount * PI / 270);
  image(planet1, -50, -50,180,180);
  pop();

  //planet3
  push();
  translate(200,200);
  rotate(-frameCount * PI / 180);
  image(planet3, -200, -200,180,180);
  pop();

  
  //planet2
  push();
  translate(1300,700);
  rotate(frameCount * PI / 270);
  image(planet2, -150, -150,300,300);
  pop();

  //planet4
  push();
  translate(1300,700);
  rotate(frameCount * PI / 270);
  image(planet4, -150, -150,220,220);
  pop();
  
  //start button
  if (mouseX>=640 && mouseX<=770 && mouseY>=515 && mouseY<=540){
    image(startGame,600,475,700,100);
    cursor(HAND);
  }else{
    image(startGame,620,480,500,80); 
    cursor(ARROW);
  }
}
