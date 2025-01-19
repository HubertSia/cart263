"use strict";
let shapeType = 'circle'; 
let circleSize = 50;  
let cols, rows;
let colorBg;
let spacing = 10;

function setup() {
  createCanvas(640, 640);  
  cols = floor(width / (circleSize + spacing)); 
  rows = floor(height / (circleSize + spacing)); 
  

  colorBg = color(random(255), random(255), random(255));
  noStroke();
}

function draw() {
  background(1);


  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      let x = i * (circleSize + spacing) + circleSize / 2;
      let y = j * (circleSize + spacing) + circleSize / 2;


      fill(colorBg);
      if (shapeType === 'circle') {
        ellipse(x, y, circleSize, circleSize); 
      } else {
        rect(x - circleSize / 2, y - circleSize / 2, circleSize, circleSize); 
      }
    }
  }
}


function keyPressed() {
  if (key === ' ') {
    colorBg = color(random(255), random(255), random(255));
  }
}


function mousePressed() {
  if (shapeType === 'circle') {
    shapeType = 'square';
  } else {
    shapeType = 'circle'; 
  }
}
