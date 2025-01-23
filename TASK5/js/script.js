"use strict";

// Variable for the conter
let counter = 0;

// making our conter count up to 10
const maxCounter = 10;

// Setting up our square button
const square = {
  x: 50,
  y: 20,
  w: 50,
  h: 50,
  color: 'orange',
};

// Setting up our red square button
const redSquare = {
  x: 150,
  y: 20,
  w: 50,
  h: 50,
  color: 'red',
};

// Variable for the radius by 50
let radius = 50;

// Alpha variable by 50
let ellipseAlpha = 50;

function setup() {
  
  // Set up canvas by 640X640 
  createCanvas(640, 640);
}

function draw() {
  background(1);

  // Display red square button
  displaySquare(square);
  
  // Display red square button
  displaySquare(redSquare);

  
  // If the mouse is colliding with the square,
if (checkCollisionWithSquare(square)) {
    // change its color to semi-transparent orange
    square.color = color(255, 165, 0, 150); 
} else {
    // Otherwise, set its color back to solid orange
    square.color = 'orange';
}

  // If the mouse is colliding with the red square
if (checkCollisionWithSquare(redSquare)) {
    //Change its color to semi-transparent red
    redSquare.color = color(255, 0, 0, 150); 
} else {
    // Otherwise, set its color back to solid red
    redSquare.color = 'red';
}

  
  // If the counter is within the valid range, Draw concentric circles
  if (counter >= 1 && counter <= maxCounter) {
    
  // Initialize the loop variable
    let i = 0; 
    
    // Set the starting radius
    let currentRadius = radius; 
    
    // Set the starting alpha (transparency)
    let currentAlpha = ellipseAlpha; 

    // Loop to draw `counter` number of circles
    while (i < counter) {
      
      // Draw the circle
      drawCircle(width / 2, height / 2, currentRadius, currentAlpha); 
      
      // Increment the radius for the next circle
      currentRadius += 50;
      
      // Increment the alpha for the next circle
      currentAlpha += 5; 
      
      // Move to the next iteration  
      i++; 
    }
}
}

// Function for the displaysqaure
function displaySquare(sq) {
  
    // Display the square using its color and dimensions
    fill(sq.color);
    rect(sq.x, sq.y, sq.w, sq.h);
}

  // Check if the mouse is within the bounds of the square
function checkCollisionWithSquare(sq) {
  
  // Return values of the following
    return mouseX > sq.x && mouseX < sq.x + sq.w && mouseY > sq.y && mouseY < sq.y + sq.h;
}

// Function for the mouse pressed
function mousePressed() {
  
      // If the mouse clicks on the square and the counter is below the max
  if (checkCollisionWithSquare(square) && counter < maxCounter) {
      
    // Increase the counter value
        counter++;
    } 
    // If the mouse clicks on the red square and the counter is above 0
  else if (checkCollisionWithSquare(redSquare) && counter > 0) {
    
    // Decrease the counter value
        counter--;
    }
}
    /***
     * Draw a circle at the given position with the specified radius and transparency
     *  */ 
function drawCircle(x, y, radius, alpha) {
    // Set the fill color with alpha
  fill(255, alpha); 
  
  // Draw the circle
    ellipse(x, y, radius); 
}
