let angle;

function setup() {
  createCanvas(400, 400);
  angle = PI / 6;
}

function draw() {
  background(51);
  stroke(255);
  translate(width / 2, height);
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
