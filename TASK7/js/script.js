"use strict";
let shapeType = 'circle';  // Starts with 'circle'
let circleSize = 50;  // Circle size (changeable to a multiple of 5)
let cols, rows;
let colorBg;
let spacing = 10;  // Space between shapes

function setup() {
  createCanvas(640, 640);  // Set canvas size to 640x640
  cols = floor(width / (circleSize + spacing));  // Adjust columns for spacing
  rows = floor(height / (circleSize + spacing));  // Adjust rows for spacing
  
  // Set a random color for all shapes
  colorBg = color(random(255), random(255), random(255));
  noStroke();
}

function draw() {
  background(1);

  // Loop through rows and columns to draw shapes
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Calculate position for each shape with spacing
      let x = i * (circleSize + spacing) + circleSize / 2;
      let y = j * (circleSize + spacing) + circleSize / 2;

      // Change drawing based on the shape type
      fill(colorBg);
      if (shapeType === 'circle') {
        ellipse(x, y, circleSize, circleSize);  // Draw circle
      } else {
        rect(x - circleSize / 2, y - circleSize / 2, circleSize, circleSize);  // Draw square
      }
    }
  }
}

// Change the color of all shapes when the space bar is pressed
function keyPressed() {
  if (key === ' ') {
    colorBg = color(random(255), random(255), random(255));
  }
}

// Toggle between circles and squares on mouse click
function mousePressed() {
  if (shapeType === 'circle') {
    shapeType = 'square';  // Change to square
  } else {
    shapeType = 'circle';  // Change back to circle
  }
}
