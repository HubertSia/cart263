"use strict";

// Variables 
let posX;
let posY;
let r;
let g;
let b;
let size;



function setup() {
    // Set the canvas to 640x640
    createCanvas(640, 640);
}

function draw() {
    
    // Black background
    background(1);


    // Preseting the colors of the ellipse
    push();
    r = 59;
    g = 28;
    b = 50
    fill(r, g, b);

    noStroke();
    
    // Preseting the positions of the ellipse and size
    posX = 50;
    posY = 50;
    size = 50;
    ellipse(posX, posY, size);    

    pop();



    // Preseting the colors of the ellipse
    push();
    r = 106;
    g = 30;
    b = 85
    fill(r, g, b);

    noStroke();

    // Preseting the positions of the ellipse and size
    posX = 125;
    posY = 115;
    size = 75;
    ellipse( posX, posY, size);    
    pop();

    // Preseting the colors of the ellipse
    push();
    r = 166;
    g = 77;
    b = 121
    fill(r, g, b);

    noStroke();

    
    // Preseting the positions of the ellipse and size
    posX = 225;
    posY = 205;
    size = 100;
    ellipse( posX, posY, size);  
    pop();

}

