"use strict";

function setup() {
  // Set up canvas 640X640
  createCanvas(400, 400); 
  
  // Background black
  background(0); 

  // Variable text for "test"
  const textString = "test";
  
  // Variable for the text size of 28px
  const textSizeValue = 28;
  
  //Variable of centering the axis
  const centerX = width / 2; 
  const centerY = height / 2; 

  // Color white
  fill(255); 
  
  // the text size value
  textSize(textSizeValue);
  
  // Text alignment
  textAlign(CENTER, CENTER); 
  
  // Show the text
  text(textString, centerX, centerY); 


  // Loop the number 10 times
  for (let i = 0; i < 10; i++) {
    
    // Loop the numbers on the X axis
    const xPosition = 10 + i * 15; 
    
    // Show the text as numbers
    text(i, xPosition, 20); 
  }

  // Loop the number 15 times
  for (let i = 1; i <= 15; i++) {
    
      // Loop the numbers on the Y axis
    const yPosition = 20 + i * 20; 
    
    // Show the text as numbers
    text(i, 10, yPosition); 
  }
  
}
