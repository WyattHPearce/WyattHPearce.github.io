// Resize the canvas to fit the p5canvas div
function windowResized() {
  resizeCanvas(document.getElementById("p5canvas").offsetWidth, document.getElementById("p5canvas").offsetHeight);
}

let particles = [];

function setup() {
  // Create the canvas
  let canvas = createCanvas(document.getElementById("p5canvas").offsetWidth,document.getElementById("p5canvas").offsetHeight);
  // Set the canvas parent to the p5canvas div
  canvas.parent("p5canvas");
  // Set the sketch to resize with the window
  window.addEventListener("resize", windowResized);
}

function draw() {
  background(230);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(0, 0);
    this.lifespan = 255;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= 5;
  }

  display() {
    noStroke();
    fill(0, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }
}