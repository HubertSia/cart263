"use strict";

let counter = 0;
const maxCounter = 10;
const square = {
  x: 50,
  y: 20,
  w: 50,
  h: 50,
  color: 'orange',
};
const redSquare = {
  x: 150,
  y: 20,
  w: 50,
  h: 50,
  color: 'red',
};
let radius = 50;
let ellipseAlpha = 50;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(1);


    displaySquare(square);
  displaySquare(redSquare);


    if (checkCollisionWithSquare(square)) {
    square.color = color(255, 165, 0, 150); 
  } else {
    square.color = 'orange';
  }

  if (checkCollisionWithSquare(redSquare)) {
    redSquare.color = color(255, 0, 0, 150); 
  } else {
    redSquare.color = 'red';
  }


    if (counter >= 1 && counter <= maxCounter) {
    let i = 0;
    let currentRadius = radius;
    let currentAlpha = ellipseAlpha;

    while (i < counter) {
      drawCircle(width / 2, height / 2, currentRadius, currentAlpha);
      currentRadius += 50;
      currentAlpha += 5;
      i++;
    }
  }
}

function displaySquare(sq) {
  fill(sq.color);
  rect(sq.x, sq.y, sq.w, sq.h);
}

function checkCollisionWithSquare(sq) {
  return mouseX > sq.x && mouseX < sq.x + sq.w && mouseY > sq.y && mouseY < sq.y + sq.h;
}

function mousePressed() {
  if (checkCollisionWithSquare(square) && counter < maxCounter) {
    counter++;
  } else if (checkCollisionWithSquare(redSquare) && counter > 0) {
    counter--;
  }
}

function drawCircle(x, y, radius, alpha) {
  fill(255, alpha);
  ellipse(x, y, radius);
}
