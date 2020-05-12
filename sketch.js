
let startGame;
let currentPage;

let maxHeight1=550;
let maxHeight2=480;

let aforq1=true;


//Free fall law
let movers = [];





function preload() {
  bg1 = loadImage('assets/bg1.jpg');
  bg2 = loadImage('assets/bg2.jpg');
  titlePhysics=loadImage("assets/title.png");
  titleHola=loadImage("assets/title2.png");
  planet1=loadImage("assets/planet1.png");
  planet2=loadImage("assets/planet2.png");
  planet3=loadImage("assets/planet3.png");
  planet4=loadImage("assets/planet4.png");
  startGame=loadImage("assets/start.png");
  titleWelcome=loadImage("assets/welcomeTitle.png");
  nextButton=loadImage("assets/nextButton.png");
  watchButton=loadImage("assets/watch.png");
  q1=loadImage("assets/q1.png");
  q2=loadImage("assets/q2.png");
  titleFFL=loadImage("assets/titleFFL.png");



}
function setup() {
  createCanvas(windowWidth,windowHeight);
  widthOfStart=100;
  heightOfStart=40;
  currentPage=5;



}

function draw(){
  background(15,22,26);
  console.log(mouseX,mouseY);

  if (currentPage==1){
    pageOne();
  }else if (currentPage==2){
    pageTwo();
  }else if (currentPage==3){
    pageThree();
  }else if (currentPage==4){
    pageFour();
  }else if (currentPage==5){
    pageFive();
  }
}





function pageOne(){
  image(bg1, (windowWidth-888)/2, (windowHeight-592)/2,888,592);

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




function pageTwo(){
  
  //background and title
  image(bg2, 0,0,windowWidth,windowHeight);
  cursor(ARROW);
  image(titleWelcome,50,20,860,400);

  //little rocket
  push();
  translate(700,20);
  rotate(0.5*sin(frameCount * PI / 270));
  image(planet4,-30,20,150,150);
  pop();

  //instructions
  textSize(20);
  textStyle(BOLD);
  textFont('Helvetica');
  fill("#F6BD91");
  text("Hi! Welcome to the world of Physics!",400,350);
  text("Ah......Don't leave!!!",400,390);
  text("I know Physics sound confusing and difficult for many...",400,440);
  text("But we will help you realize that Physics is actually not terrifying at all! It can be fun and magical! ",400,490);
  text("So are you ready? Let's go!!! (Click Next to start)",400,540);

  //next Button
  image(nextButton,900+50*sin(frameCount * PI / 90),600,290,70);
  if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
    cursor(HAND);
  }
}


function pageThree(){
  //bg and title
  image(bg1,0,0,windowWidth,windowHeight);
  image(q1,150,90);

   //questions
   textSize(32);
   textStyle(BOLD);
   textFont('Helvetica');
   fill("#F6A4C5");
   text("If you throw the follwing two balls simultaneously from the same height,",200,240);
   text("in an airless environment, which ball will fall faster? (Click your answer)",200,300);


   //two balls
   noStroke();
   fill(255,138,34);
   let bally1 = maxHeight1 - 50 * (Math.cos(frameCount/20));
   ellipse(400,bally1,60,60);
   let bally2 = maxHeight2 - 50 * (Math.cos(frameCount/20));
   ellipse(1000,bally2,200,200);
   fill("white");
   ellipse(700,520,120,120);



   //tag for ball
   textSize(15);
   fill("white");
   text("A. A tiny ball weighs",340,630);
   text("like a pingpong ball",340,660);


   fill(255,138,34);
   text("B. They will fall at ",640,630);
   text("the same speed.",640,660);

   fill("white");
   text("C. A giant ball weighs",930,630);
   text("like a metal shot",930,660);


   //choose ball
   if (mouseX>=340 && mouseX<=460 && mouseY>=450 && mouseY<=650){
     cursor(HAND);
   }else if (mouseX>=800 && mouseX<=1200 && mouseY>=300 && mouseY<=650){
    cursor(HAND);
  }else if (mouseX>=580 && mouseX<=820 && mouseY>=400 && mouseY<=640){
    cursor(HAND);
  }else{
    cursor(ARROW);
  }

}



function pageFour(){
    //bg and title
    image(bg1,0,0,windowWidth,windowHeight);
    image(titleFFL,150,90);

    //explanation
    textSize(25);
    textStyle(BOLD);
    textFont('Helvetica');
    fill("#CC99FF");

    if (aforq1==false){
    text("Nice guess! But the fact may suprise you -- in an airless environment on Earth,",200,240);
    }
    else{
      text("Wow! Cool! Well done! Yes, you are right! In an airless environment on Earth,",200,240);
    }
    text("no matter how different do these two balls weight, they will fall at the same speed!",200,280);
    text("The only force the ball have is GRAVITY. This is called the Free Fall Law！",200,320);

    //free fall law demonstration
    freeFallLaw();

    //next Button
  image(nextButton,900+50*sin(frameCount * PI / 90),600,290,70);
  if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
    cursor(HAND);
  }

    //watch Button
  image(watchButton,900-50*sin(frameCount * PI / 90),500,340,70);
  if (mouseX>=870 && mouseX<=1200 && mouseY>=500 && mouseY<=570){
    cursor(HAND);
  }
    
    
}



function pageFive(){
  //bg and title
  image(bg1,0,0,windowWidth,windowHeight);
  image(q2,150,90);

   //questions
   textSize(32);
   textStyle(BOLD);
   textFont('Helvetica');
   fill("#F6A4C5");
   text("But you may be curious now, why in daily life we see some balls will",200,240);
   text("bounce back to very high while some do not? Why they don't bounce identically?",200,300);

   boucingBall();

    //next Button
  image(nextButton,900+50*sin(frameCount * PI / 90),600,290,70);
  if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
    cursor(HAND);
  }

    //watch Button
  image(watchButton,900-50*sin(frameCount * PI / 90),500,340,70);
  if (mouseX>=870 && mouseX<=1200 && mouseY>=500 && mouseY<=570){
    cursor(HAND);
  }

}


function mouseClicked(){
  if (currentPage==1){
    if (mouseX>=640 && mouseX<=770 && mouseY>=515 && mouseY<=540){
      currentPage=2;
    }
  }
  else if (currentPage==2){
    if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
      currentPage=3;
    }
  }
  else if (currentPage==3){
    if (mouseX>=340 && mouseX<=460 && mouseY>=450 && mouseY<=650){
      currentPage=4;
      aforq1=false;
    }else if (mouseX>=800 && mouseX<=1200 && mouseY>=300 && mouseY<=650){
      currentPage=4;
      aforq1=false;
    }else if (mouseX>=580 && mouseX<=820 && mouseY>=400 && mouseY<=640){
      currentPage=4;
      aforq1=true;
    }
  }
  else if (currentPage==4){
    if (mouseX>=870 && mouseX<=1200 && mouseY>=500 && mouseY<=570){
      freeFallLaw();

    } else if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
      currentPage=5;
    }
  }else if (currentPage==5){
    if (mouseX>=870 && mouseX<=1200 && mouseY>=500 && mouseY<=570){
      reset1();

    } else if (mouseX>=870 && mouseX<=1200 && mouseY>=600 && mouseY<=670){
      currentPage=6;
    }
  }
}

function freeFallLaw(){
    //frame
    noStroke();
    fill("#CCE5FF");
    rect(200,350,600,350);
    
    fill("#FF99CC");
    
  
    fallingHeight = 300 + 200 * Math.abs(frameCount/120)%400;
    ellipse(300,fallingHeight,30,30);
    ellipse(600,fallingHeight,80,80);

}


function boucingBall(){
    //frame
    noStroke();
    fill("#CCE5FF");
    rect(200,350,600,350);

  for (var i = 0; i < movers.length; i++) {
    
    // Gravity is scaled by mass here!
    var gravity = createVector(0, 0.1*movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);
   
    // Update and display
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}


function reset1() {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Ball(random(0.5, 4), 220+i*70, 350);
  }
}


function Ball(m,x,y) {
  push();
  translate(200,350);
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
  pop();
}

// Newton's 2nd law: F = M * A
// or A = F / M
Ball.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Ball.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Ball.prototype.display = function() {
  stroke(0);
  strokeWeight(0);
  fill("#FF99CC");
  ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
};

// Bounce off bottom of window
Ball.prototype.checkEdges = function() {
  if (this.position.y > (700 - this.mass*8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.position.y = (700- this.mass*8);
  }
};
