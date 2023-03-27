# Introduction

All the code for this session is available on the github and also on codesandbox. Although we are going to write our code in vanilla JavaScript, I also thought it will be nice to visualise things that we build.

There are many amazing libraries like D3 and ThreeJS but I am using p5js because it has a beginner friendly syntax and there are tons and tons of examples.

Also, I didn't use a JS framework purposefully so that who are not adept with React or come from Angular background should feel at home when working with this. Also, I will be taking a little slack on things like creating global variables, etc, just to fast-track and write less code.

It would be really great, if you fork this project and create a React or Angular version applying the best practices. But for now, lets go.

There could be many code example that might not make sense while its being shared. But you can get much more value by focussing on the intution and how we will take simple ideas and then try to solve something complex.

Project structure.
Signs are flipped.
Global variables have been used to keep the examples simple.

The project requires node to installed on your computer to be able to serve the html files. If you do not have node then you can simply run 'python -m SimpleHTTPServer' to serve your html files and ignore the package.json, node_modules etc. And we want to serve the pages because we are pulling the P5JS library from CDN, so if you dont want to serve the file then you can download p5js and load it locally and then just open your 1.html page to begin working.

## Chapter 1

### Functions and Lines

Neural Network is made up of neurons that are connected in a certain way.

What is a neuron? A neuron is a simple function that maps an input to output. A function that does some processing with the input.

Lets take a look at simple function. A function in coding form looks like this `y = m*x` or in maths textbooks like `f(x) = m*x`

A function is essentially a map from input set and output set.
`x -> f(x) -> y`

Some simple function we have seen are:

- Distance relationship
  - `miles = 2.204 * kms` or
  - `y = 2.204 * kms`
  - `y = mx`

- Temperature relationship
  - `fahrenheit = (celsius*1.8) + 32` or
  - `y = (1.8*x) + 32`
  - `y = mx + b`

These equations have linear relationship between input and output. Output changes proportionally when input changes.

So, we know what by plotting points, we can even find the relationship between them.

## Chapter 2

### Predictron

Lets say, we have a given data point then either we can get the value of `m` by simply rearranging the equation or we just make a guess and work our way by seeing how far are we from the answer.

There is nothing wrong with rearraging the equation and obtaining 'm' value but the nature of function itself could be unknown. And its pretty easy to find the error in our prediction and then making a change.

The change we want to make it to get close to the depends on how far are we from real answer. The relationship in our case simple right now, answer-prediction is error.

And what is answer, answer is change that needs to be added to the prediction. So here's how it looks like:

```js
 error = (m + m_delta) *x - x* m;
 error = m *x + x* m_delta - x *m;
 error = x * m_delta
 m_delta = error/x
 ```

## Chapter 3

### Classifier

If we extend the same example and plot 2 data points then can we find the mid point between them or in other words can we find the minimum error from both the points.
And again, why do we care about points at all? Because it represents relationship between data.

Why are we still not calling it a neuron is because:

- Neuron are loosely based on biological neurons. Although many aspects of neural networks in human brain are unknown to us e.g. what really happens in the collection of neurons but we do know how neurons function.
- Neuron does have the element of y = mx i.e. they have weights that are multiplied to the input. But there is an another element of bias that is added. like y = mx + b. But once all that is done. If a take a little aside, a bilogical neuron only fires when a certain threshold is reached. Now, this threshold, you can think of as when we are shopping and barganing with the seller, the product is sold when a certain threshold is reached for the price.

A predictron is kind of like neuron but they are not, they are more like one way to perform machine learning but a perceptron has some brilliant take aways that can be seen in the case of a perceptron.

## Chapter 4

### Perceptron

A perceptron is an artificial neuron that ouput either 0 or 1. It makes use of an activation function called as Heaviside Step Function. On the other hand, an artificial neuron refers to any neuron that can use variety of activation function like sigmoid, relu, tanh etc.
So all perceptrons are neurons but not all neurons are perceptrons.
A perceptron is also the simplest feedforward neural network.

We don’t need a perceptron to tell us whether a point is above or below a line; we can do that with simple math. We are using this scenario, one that we can easily solve without a perceptron, to demonstrate the perceptron’s algorithm as well as easily confirm that it is working properly.
