"use strict";

// Define constants for width and height of the canvas
const canvasWidth = 640;
const canvasHeight = 640;

// Define the width of each rectangle (1/3 of the canvas width)
const rectWidth = canvasWidth / 3;

// Define objects to store colors for each rectangle
const rect1Color = { r: 0, g: 0, b: 255 }; // Blue
const rect2Color = { r: 0, g: 0, b: 180 }; // Darker Blue
const rect3Color = { r: 0, g: 0, b: 120 }; // Even Darker Blue

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(255);

    // Draw the first rectangle
    fill(rect1Color.r, rect1Color.g, rect1Color.b);
    rect(0, 0, rectWidth, canvasHeight);

    // Draw the second rectangle
    fill(rect2Color.r, rect2Color.g, rect2Color.b);
    rect(rectWidth, 0, rectWidth, canvasHeight);

    // Draw the third rectangle
    fill(rect3Color.r, rect3Color.g, rect3Color.b);
    rect(2 * rectWidth, 0, rectWidth, canvasHeight);

    // Check for mouse hover and change rectangle colors
    checkMouseHover();
}

function checkMouseHover() {
    // Check if the mouse is over the first rectangle
    if (mouseX >= 0 && mouseX <= rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect1Color.r = 255;
        rect1Color.g = 255;
        rect1Color.b = 255; // Change to white
    } else {
        // Reset to original color when mouse is not over
        rect1Color.r = 0;
        rect1Color.g = 0;
        rect1Color.b = 255; // Original blue color
    }

    // Check if the mouse is over the second rectangle
    if (mouseX >= rectWidth && mouseX <= 2 * rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect2Color.r = 255;
        rect2Color.g = 255;
        rect2Color.b = 255; // Change to white
    } else {
        // Reset to original color when mouse is not over
        rect2Color.r = 0;
        rect2Color.g = 0;
        rect2Color.b = 180; // Original blue color
    }

    // Check if the mouse is over the third rectangle
    if (mouseX >= 2 * rectWidth && mouseX <= canvasWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect3Color.r = 255;
        rect3Color.g = 255;
        rect3Color.b = 255; // Change to white
    } else {
        // Reset to original color when mouse is not over
        rect3Color.r = 0;
        rect3Color.g = 0;
        rect3Color.b = 120; // Original blue color
    }
}
