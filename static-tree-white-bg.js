let angle;

function setup() {
  createCanvas(400, 400);
  background(255);
  angle = PI / 6;
}

function draw() {
  stroke(0);
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
  }
}
