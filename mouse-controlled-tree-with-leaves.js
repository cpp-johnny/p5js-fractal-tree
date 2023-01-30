let angle;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  translate(width / 2, height);
  angle = map(mouseX, 0, width, 0, TWO_PI);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  } else {
    fill(255, 0, 100);
    noStroke();
    ellipse(0, 0, 8, 8);
  }
}
