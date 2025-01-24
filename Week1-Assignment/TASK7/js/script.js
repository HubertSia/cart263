"use strict";

// Variable of the shape state (default set to circle)
let shapeType = 'circle'; 

// scale of the circle set 50px
let circleSize = 50;  

//Variables combine of cols and rows
let cols, rows;

//Variable of the backgrond color of the shape
let colorBg;

// Variable of the spacing
let spacing = 10;

function setup() {
  
  // Canvas set up 640X640
  createCanvas(640, 640); 
  
  // Cols take the width of the canvas spacing
  cols = floor(width / (circleSize + spacing)); 
  
  // Rows take the height of the canvas spacing
  rows = floor(height / (circleSize + spacing)); 
  

  // set the color shape to random
  colorBg = color(random(255), random(255), random(255));
  noStroke();
}

function draw() {
  background(0);


  // Loop around both cols and rowa
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      // Variables for the spacing of the shapes and size
      let x = i * (circleSize + spacing) + circleSize ;
      let y = j * (circleSize + spacing) + circleSize;


      // Color according to our variable
      fill(colorBg);
      
      // If state is circle
      if (shapeType === 'circle') {
        
        // Change according to the ellipse variable
        ellipse(x, y, circleSize, circleSize); 
      }
      
      //Otherwise, change it to a square
      else {
        rect(x - circleSize / 2, y - circleSize / 2, circleSize, circleSize); 
      }
    }
  }
}

// If the space key is pressed
function keyPressed() {
  if (key === ' ') {
    
    //Randomise the color of the shape
    colorBg = color(random(255), random(255), random(255));
  }
}

// if mouse is pressed
function mousePressed() {
  
  // if the shape state is circle
  if (shapeType === 'circle') {
    
    // change it to square state
    shapeType = 'square'; 
  }
  
  //Otherwise turn back to the circle state
  else {
    shapeType = 'circle'; 
  }
}
