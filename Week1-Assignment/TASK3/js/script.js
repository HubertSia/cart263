"use strict";

// Variable position for the 1st shape (default at 200)
let posX1 = 200;
let posY1 = 200;

// Variable position for the 2nd shape (default at 200)
let posX2 = 200;
let posY2 = 200;

// Variable position for the 3rd shape (default at 200)
let posX3 = 200;
let posY3 = 200;

// Variable color by rgb
let r;
let g;
let b;

// Variable size, default by 50
let size = 50;

function setup() {
    
    // Set up canvas by 640X640
    createCanvas(640, 640);
}

function draw() {
    
    // Set backgound color to black
    background(1);

    // Functions of three square
    drawSquare1();
    drawSquare2();
    drawSquare3();

    // Allow the shape to detect the wall
    theWallCollision();
}


/***
 * Functions of drawing Square 1
 */
function drawSquare1() {
    push();
    
    // Color by rgb
    r = 59;
    g = 28;
    b = 50;
    fill(r, g, b);
    
    noStroke();
    
    //position of the square
    square(posX1, posY1, size);    
    pop();
}

/***
 * Functions of drawing Square 2
 */
function drawSquare2() {
    push();
    
    // Color by rgb
    r = 106;
    g = 30;
    b = 85;
    fill(r, g, b);
    noStroke();
    square(posX2, posY2, size);    
    pop();
}

/***
 * Functions of drawing Square 3
 */
function drawSquare3() {
    push();
    
    // Color by rgb
    r = 166;
    g = 77;
    b = 121;
    fill(r, g, b);
    noStroke();
    
    //position of the square
    square(posX3, posY3, size);  
    pop();

    // Add 30 pixel on the Y axis
    posY3 += 10;
}

// When mouse is pressed
function mousePressed() {
    posY1 += 10;
    posX1 += 1;
    console.log("ok");
}

// When the key is pressed
function keyPressed() {
    
    //If the space bar is pressed
    if (key == ' ') {
        
        // Add the numbered position on Square2
        posY2 += 5;
        posX2 += 10;
    }  
}  


// Function for the wall collision if any of the shapes goes out of bound
function theWallCollision() {
    
    // Check if square 1 hits the wall
    // if the positions of Square 1 goes outside
    if (posX1 + size > width || posX1 < 0 || posY1 + size > height || posY1 < 0) {
        
        // Set the X and Y axis to 200
        posX1 = 200;
        posY1 = 200;
    }

    // Check if square 2 hits the wall
    // if the positions of Square 2 goes outside
    if (posX2 + size > width || posX2 < 0 || posY2 + size > height || posY2 < 0) {
        
        // Set the X and Y axis to 200
        posX2 = 200;
        posY2 = 200;
    }

    // Check if square 3 hits the wall
    // if the positions of Square 2 goes outside
    if (posX3 + size > width || posX3 < 0 || posY3 + size > height || posY3 < 0) {
        
        // Set the X and Y axis to 200
        posX3 = 200;
        posY3 = 200;
    }
}
