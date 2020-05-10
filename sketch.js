let img;

function preload() {
  img = loadImage('assets/bg1.jpg');
  titlePhysics=loadImage("assets/title.png")
  titleHola=loadImage("assets/title2.png")
  planet1=loadImage("assets/planet1.png")
  planet2=loadImage("assets/planet2.png")
  planet3=loadImage("assets/planet3.png")
  planet4=loadImage("assets/planet4.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw(){
  background(15,22,26);
  image(img, (windowWidth-888)/2, (windowHeight-592)/2,888,592);

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



  
}