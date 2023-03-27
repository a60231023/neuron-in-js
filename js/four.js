var training;
var learning_rate = 0.1;

var b = 0;
var m = 0;

var iterations = 0;
var totalIterations = 10;
var index = 0;

function calculateError() {
  var sum = 0;
  for (var i = 0; i < training.length; i++) {
    var guess = m * training[i].x + b;
    var error = guess - training[i].y;
    sum += error * error;
  }

  var avg = sum / training.length;
  return avg;
}

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("#main");
  canvas.mousePressed(addPoints);
  training = [];
}

function addPoints() {
  training.push(createVector(mouseX / width, mouseY / height));
}

function draw() {
  background(20, 20, 30);

  var error = calculateError();

  drawPoints();
  drawLine();

  var deltaB = 0;
  var deltaM = 0;
  for (var i = 0; i < training.length; i++) {
    var x = training[i].x;
    var y = training[i].y;
    var yguess = m * x + b;
    var error = y - yguess;
    deltaB += (2 / training.length) * error;
    deltaM += (2 / training.length) * x * error;
  }
  b += deltaB * learning_rate;
  m += deltaM * learning_rate;
}

function drawLine() {
  var x1 = 0;
  var y1 = m * x1 + b;
  var x2 = 1;
  var y2 = m * x2 + b;
	stroke(50, 200, 200)
	strokeWeight(2)
  line(x1 * width, y1 * height, x2 * width, y2 * height);
}

function drawPoints() {
	stroke(0, 255, 255)
	strokeWeight(8)
  fill(0);
  for (var i = 0; i < training.length; i++) {
    ellipse(training[i].x * width, training[i].y * height, 4, 4);
  }
}
