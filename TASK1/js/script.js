"use strict";

let posX;
let posY;
let r;
let g;
let b;
let size;



function setup() {
    createCanvas(640, 640);
}

function draw() {

    background(1);


    push();
    r = 59;
    g = 28;
    b = 50
    fill(r, g, b);

    strokeWeight(0);

    posX = 50;
    posY = 50;
    size = 50;
    ellipse(posX, posY, size);    

    pop();




    push();
    r = 106;
    g = 30;
    b = 85
    fill(r, g, b);
    strokeWeight(0);

    posX = 125;
    posY = 115;
    size = 75;
    ellipse( posX, posY, size);    
    pop();


    push();
    r = 166;
    g = 77;
    b = 121
    fill(r, g, b);
    strokeWeight(0);

    posX = 225;
    posY = 205;
    size = 100;
    ellipse( posX, posY, size);  
    pop();

}