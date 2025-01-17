"use strict";

function setup() {
  createCanvas(400, 400); 
  background(0); 

  const textString = "test"; 
  const textSizeValue = 28;
  const centerX = width / 2; 
  const centerY = height / 2; 

  fill(255); 
  textSize(textSizeValue); 
  textAlign(CENTER, CENTER); 
  text(textString, centerX, centerY); 


  for (let i = 0; i < 10; i++) {
    const xPosition = 10 + i * 15; 
    text(i, xPosition, 20); 
  }


  for (let i = 1; i <= 15; i++) {
    const yPosition = 20 + i * 20; 
    text(i, 10, yPosition); 
  }
  
}
