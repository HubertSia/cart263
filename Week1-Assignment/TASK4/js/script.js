"use strict";

// Variables for the width and height of the canvas
const canvasWidth = 640;
const canvasHeight = 640;

// Variable of canvas rectangle to be divided by 3
const rectWidth = canvasWidth / 3;

// Variable colors for the rectangle
const rect1Color = { r: 0, g: 0, b: 255 }; 
const rect2Color = { r: 0, g: 0, b: 180 }; 
const rect3Color = { r: 0, g: 0, b: 120 }; 

function setup() {
    
    // Set up the canvas according to the given variables
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(255);
    
    // Assigning color to rect1 by rgb and along with size to be the 1/3 of the canvas
    fill(rect1Color.r, rect1Color.g, rect1Color.b);
    rect(0, 0, rectWidth, canvasHeight);
    
    // Assigning color to rect1 by rgb and along with size to be the 1/3 of the canvas
    fill(rect2Color.r, rect2Color.g, rect2Color.b);
    rect(rectWidth, 0, rectWidth, canvasHeight);

    // Assigning color to rect1 by rgb and along with size to be the 1/3 of the canvas
    fill(rect3Color.r, rect3Color.g, rect3Color.b);
    rect(2 * rectWidth, 0, rectWidth, canvasHeight);

    // Detect the hover of the mouse
    checkMouseHover();
}

/**
 * Function on the mouse hover
 */
function checkMouseHover() {

    // if the mouse detects on the 1st rectangle position of the canvas
    if (mouseX >= 0 && mouseX <= rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        
        // Turn them white on hover
        rect1Color.r = 255;
        rect1Color.g = 255;
        rect1Color.b = 255; 
        
    //else turn them back blue
    } else {

        rect1Color.r = 0;
        rect1Color.g = 0;
        rect1Color.b = 255; 
    }

    // if the mouse detects on the 2nd rectangle position of the canvas
    if (mouseX >= rectWidth && mouseX <= 2 * rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        
        // Turn them white on hover
        rect2Color.r = 255;
        rect2Color.g = 255;
        rect2Color.b = 255; 
        
    //else turn them back blue
    } else {

        rect2Color.r = 0;
        rect2Color.g = 0;
        rect2Color.b = 180; 
    }

    // if the mouse detects on the 3rd rectangle position of the canvas
    if (mouseX >= 2 * rectWidth && mouseX <= canvasWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        
        // Turn them white on hover
        rect3Color.r = 255;
        rect3Color.g = 255;
        rect3Color.b = 255; 
        
        
    //else turn them back blue
    } else {

        rect3Color.r = 0;
        rect3Color.g = 0;
        rect3Color.b = 120; 
    }
}
