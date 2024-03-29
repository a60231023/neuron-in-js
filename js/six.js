let training = new Array(200);
let neuron;
let count = 0;

let xmin = -1;
let ymin = -1;
let xmax = 1;
let ymax = 1;

function f(x) {
  let y = 0.8 * x + 0.4;
  return y;
}

function setup() {
  let canvas = createCanvas(windowWidth * 0.8, windowHeight * 0.4);
  canvas.parent("#main");

  neuron = new Perceptron(3, 0.001);

  for (let i = 0; i < training.length; i++) {
    let x = random(xmin, xmax);
    let y = random(ymin, ymax);
    let answer = 1;
    if (y < f(x)) answer = -1;
    training[i] = {
      input: [x, y, 1],
      output: answer,
    };
  }
}

function draw() {
  background(0);
  // paint the data
  for (let i = 0; i < training.length; i++) {
    strokeWeight(0);
    fill("#FF6666");
    if (training[i].output > 0) fill("#66FFFF");
    let x = map(training[i].input[0], xmin, xmax, 0, width);
    let y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 10, 10);
  }

  strokeWeight(1);
  stroke(255);
  let x1 = map(xmin, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
	drawingContext.setLineDash([10, 5]);
  line(x1, y1, x2, y2);

  stroke(255);
  strokeWeight(2);
  let weights = neuron.getWeights();
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
	drawingContext.setLineDash([]);
  line(x1, y1, x2, y2);

  neuron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;
}

class Perceptron {
  constructor(n, c) {
    this.weights = new Array(n);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
    this.c = c; 
  }
  
	feedforward(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  activate(sum) {
    if (sum > 0) return 1;
    else return -1;
  }

  train(inputs, desired) {
    let guess = this.feedforward(inputs);
    let error = desired - guess;
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  }

  getWeights() {
    return this.weights;
  }
}
