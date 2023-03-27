var data = [[20, 50]];

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("main");
}

function draw() {
  background(20, 20, 30);
  fill(255);
  createAxis();
  showCoords();

  drawData(data);
  predictron(data[0]);
}

function predictron(data) {
	// y = mx
  let y = data[1]; // known answer
  let x = data[0]; // known input
  let m = random(1, -1); 
  let prediction = m * x;

  push();
  stroke(150, 0, 255);
  strokeWeight(10);
  point(y, -prediction);
  pop();

  // see note
  let error = y - prediction;
  let delta_m = error / x;
  prediction = (m + delta_m) * x;

  push();
  stroke(180);
  strokeWeight(6);
  point(x, -prediction);
  stroke(180);
  strokeWeight(2);
  line(0, 0, 4 * x, 4 * -prediction);
  pop();

  noLoop();
}

// target = (prediction + delta)x + b
// current = prediction * x + b
// error = target - current
// error = prediction * x + delta * x - prediction*x + b - b
// error = delta_prediction * x

// using derivatives to derive this:
// error = mx + b - y
// δerror / δm = mx + b - y
// δerror / δm = x
// ∴ δm = δerror / x