"use strict";

const canvasWidth = 640;
const canvasHeight = 640;

const rectWidth = canvasWidth / 3;

const rect1Color = { r: 0, g: 0, b: 255 }; 
const rect2Color = { r: 0, g: 0, b: 180 }; 
const rect3Color = { r: 0, g: 0, b: 120 }; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(255);

    fill(rect1Color.r, rect1Color.g, rect1Color.b);
    rect(0, 0, rectWidth, canvasHeight);

    fill(rect2Color.r, rect2Color.g, rect2Color.b);
    rect(rectWidth, 0, rectWidth, canvasHeight);

    fill(rect3Color.r, rect3Color.g, rect3Color.b);
    rect(2 * rectWidth, 0, rectWidth, canvasHeight);

    checkMouseHover();
}

function checkMouseHover() {

    if (mouseX >= 0 && mouseX <= rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect1Color.r = 255;
        rect1Color.g = 255;
        rect1Color.b = 255; 
    } else {

        rect1Color.r = 0;
        rect1Color.g = 0;
        rect1Color.b = 255; 
    }


    if (mouseX >= rectWidth && mouseX <= 2 * rectWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect2Color.r = 255;
        rect2Color.g = 255;
        rect2Color.b = 255; 
    } else {

        rect2Color.r = 0;
        rect2Color.g = 0;
        rect2Color.b = 180; 
    }


    if (mouseX >= 2 * rectWidth && mouseX <= canvasWidth && mouseY >= 0 && mouseY <= canvasHeight) {
        rect3Color.r = 255;
        rect3Color.g = 255;
        rect3Color.b = 255; 
    } else {

        rect3Color.r = 0;
        rect3Color.g = 0;
        rect3Color.b = 120; 
    }
}
