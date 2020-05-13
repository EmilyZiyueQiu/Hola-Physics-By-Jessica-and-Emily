

let planet;
let planetArray = [];
let numPlanets = 3;

function setup() {
  createCanvas(1300, 700,WEBGL);
  createEasyCam();
 // button=createButton();
  //button.position(100,100);
  //button.mousePressed(draw)
  //sphereMode(CENTER);
  angleMode(DEGREES);
  
  for (i = 0; i < numPlanets; i++) {
    planetArray[i] = new Planets(random(10, 30), random(50, 150), random(0.2, 1.2));

  }
}

function draw() {
  background(0);
  
  normalMaterial();
  pointLight(1000,1000,1000,0,0,255);
  push();
  translate(0,0,-200);
  sphere (50);//sun
  pop();

  for (i = 0; i < numPlanets; i++) {
    planetArray[i].planet();
    planetArray[i].moon();
  }
}


class Planets {
  constructor(radius, distance, orbitSpeed) {
    this.radius = radius
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.angle = 0
    this.angle2 = 0

  }

  planet() {
    resetMatrix();
    push();
    translate (0,0,-200)
    rotateY(this.angle);
    
    this.angle = this.angle + this.orbitSpeed
    fill(255, 0, 0);
    translate(this.distance, 0,0);
    sphere( this.radius);
     //pop()
  }
  moon() {
    push();
    translate(this.distance, 0);
    rotateY(this.angle2*2);
    translate (this.radius,0,0)
    this.angle2 = this.angle2 + this.orbitSpeed
    fill(0, 0, 255);
    sphere(this.radius / 2);
    pop();
  }
}