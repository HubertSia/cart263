"use strict";

let posX1 = 200;
let posY1 = 200;

let posX2 = 200;
let posY2 = 200;

let posX3 = 200;
let posY3 = 200;

let r;
let g;
let b;
let size = 50;

function setup() {
    createCanvas(640, 640);
}

function draw() {
    background(1);

    drawSquare1();
    drawSquare2();
    drawSquare3();

    theWallCollision();
}

function drawSquare1() {
    push();
    r = 59;
    g = 28;
    b = 50;
    fill(r, g, b);
    noStroke();
    square(posX1, posY1, size);    
    pop();
}

function drawSquare2() {
    push();
    r = 106;
    g = 30;
    b = 85;
    fill(r, g, b);
    noStroke();
    square(posX2, posY2, size);    
    pop();
}

function drawSquare3() {
    push();
    r = 166;
    g = 77;
    b = 121;
    fill(r, g, b);
    noStroke();
    square(posX3, posY3, size);  
    pop();

    posY3 += 10;
}

function mousePressed() {
    posY1 += 10;
    posX1 += 1;
    console.log("ok");
}

function keyPressed() {
    if (key == ' ') {
        posY2 += 5;
        posX2 += 10;
    }  
}  

function theWallCollision() {
    // Check if square 1 hits the wall
    if (posX1 + size > width || posX1 < 0 || posY1 + size > height || posY1 < 0) {
        posX1 = 200;
        posY1 = 200;
    }

    // Check if square 2 hits the wall
    if (posX2 + size > width || posX2 < 0 || posY2 + size > height || posY2 < 0) {
        posX2 = 200;
        posY2 = 200;
    }

    // Check if square 3 hits the wall
    if (posX3 + size > width || posX3 < 0 || posY3 + size > height || posY3 < 0) {
        posX3 = 200;
        posY3 = 200;
    }
}
