"use strict";



function setup() {
    // Set the canvas to 640x640
    createCanvas(640, 640);

    // Black background
    background(1);

    // Draw three ellipses using the custom drawEllipse function
    drawEllipse(50, 50, 50, 50, 59, 28, 50);
    drawEllipse(125, 115, 75, 75, 106, 30, 85);
    drawEllipse(225, 205, 100, 100, 166, 77, 121);
}

// Custom function to draw ellipses
function drawEllipse(x, y, w, h, r, g, b) {
    push();
    
    // Color of the ellipse
    fill(r, g, b);
    noStroke();
    
    // Size one position of the ellipse
    ellipse(x, y, w, h);
    pop();
}
