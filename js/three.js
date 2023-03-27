var current = Math.random();
// var data = [
//   [20, 100],
//   [30, 110],
// 	[33, 115],
// 	[55, 75],
// 	[55, 50],
//   [70, 60],
// 	[72, 65],
// 	[78, 70]
// ];
var data = [
  // [20, 100],
  [30, 110],
  [55, 50],
  // [70, 60],
];

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
  predictron(data);
}

function predictron(data) {
  let random_index = round(random(0, data.length - 1));
  let input = data[random_index][0];
  let target = data[random_index][1];
  let learningRate = 0.01;
  let prediction = current * input;

  let error = target - prediction;
  let delta = error / input;
  current = current + delta * learningRate;

  push();
  stroke(0, 255, 255);
  strokeWeight(3);
  // line(originX,originY,x=200,y=m*x or m*200)
  // -200 because the html canvas is vertically flipped from cartesian graph
  line(0, 0, 200, current * -200);
  pop();
}

// var data = [
//   [20, 100],
//   [30, 110],
// 	[33, 115],
// 	[55, 75],
// 	[55, 50],
//   [70, 60],
// 	[72, 65],
// 	[78, 70]
// ];
