function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  let milliseconds = millis();
  let sec = second();
  let min = minute();
  let hours = hour();
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  noFill();
  stroke(255);
  strokeWeight(8);
  translate(width / 2, height / 2);
  rotate(-90);
  // sec
  stroke(220, 47, 2);
  let secArc = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);

  push();
  rotate(secArc);
  strokeWeight(5);
  line(0, 0, 150, 0);

  pop();

  // min
  stroke(255, 186, 8);
  let minArc = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minArc);
  push();
  strokeWeight(10);
  rotate(minArc);
  line(0, 0, 140, 0);
  pop();

  // hours
  stroke(82, 183, 136);
  let hourArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourArc);
  strokeWeight(12.5);

  push();
  rotate(hourArc);
  line(0, 0, 130, 0);
  pop();

  //Milliseconds
  strokeWeight(10);
  stroke("white");
  let millisecondArc = map(milliseconds, 0, 1000, 0, 360);
  arc(0, 0, 320, 320, 0, millisecondArc);
  strokeWeight(2.5);
  push();
  rotate(millisecondArc);
  line(0, 0, 160, 0);
  pop();
  rotate(90);
  strokeWeight(1);

  text("3", 170, 0);
  text("6", 10, 190);
  text("9", -175, 0);
  text("12", 0, -170);
  push();
  fill(255);
  textSize(25);
  text("sohel.f.j", -15, -225);
  pop();
}
