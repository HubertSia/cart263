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


}


function drawSquare1() {


    push();
    r = 59;
    g = 28;
    b = 50
    fill(r, g, b);

    strokeWeight(0);

    square(posX1, posY1, size);    

    pop();
}


function drawSquare2() {

    push();
    r = 106;
    g = 30;
    b = 85
    fill(r, g, b);
    strokeWeight(0);

    square(posX2, posY2, size);    
    pop();

}


function drawSquare3() {

    push();
    r = 166;
    g = 77;
    b = 121
    fill(r, g, b);
    strokeWeight(0);

    square(posX3, posY3, size);    
    pop();


}

function mousePressed() {
 posY1 += 10;
 posX1 += 1;

console.log("ok");

}