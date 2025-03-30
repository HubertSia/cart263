// ========== Sample Data ========== //
class ShapeDef {
    constructor(x, y, shapeClass, customShapeClass, color) {
        this.x = x;
        this.y = y;
        this.shapeClass = shapeClass;
        this.customShapeClass = customShapeClass;
        this.color = color;
    }
}

const arrayOfShapes = [
    new ShapeDef(100, 100, "shape", "circle", "red"),
    new ShapeDef(200, 100, "shape", "square", "blue"),
    new ShapeDef(300, 100, "shape", "triangle", "green"),
];

const arrayOfShapesTwo = [
    new ShapeDef(150, 150, "shape", "circle", "yellow"),
    new ShapeDef(250, 150, "shape", "rectangle", "purple"),
    new ShapeDef(350, 150, "shape", "circle", "orange"),
];

const numbers = [1, 2, 3, 4, 5];
const numbers_filter = [1, 28, 355, 44, 51, 78];
const strings_filter = ["banana", "oranges", "peppers", "tamatoes", "peas", "pears", "kiwi"];

// ========== Helper Functions ========== //
function add_New_Els_ToDOM(shapesArray, parentId) {
    const parent = document.getElementById(parentId);
    parent.innerHTML = "";
    shapesArray.forEach(shape => {
        const shapeEl = document.createElement("div");
        shapeEl.className = `${shape.shapeClass} ${shape.customShapeClass}`;
        shapeEl.style.backgroundColor = shape.color;
        shapeEl.style.left = `${shape.x}px`;
        shapeEl.style.top = `${shape.y}px`;
        parent.appendChild(shapeEl);
    });
}

function add_SingleToDOM(shape, parentId) {
    const parent = document.getElementById(parentId);
    const shapeEl = document.createElement("div");
    shapeEl.className = `${shape.shapeClass} ${shape.customShapeClass}`;
    shapeEl.style.backgroundColor = shape.color;
    shapeEl.style.left = `${shape.x}px`;
    shapeEl.style.top = `${shape.y}px`;
    parent.appendChild(shapeEl);
}

// ========== map() Examples ========== //
function mapArraysShape() {
    let arrayOfShapesNew = arrayOfShapes.map(changeShape);
    add_New_Els_ToDOM(arrayOfShapesNew, "mappedRow");

    function changeShape(el) {
        return new ShapeDef(el.x, el.y + 100, el.shapeClass, "circle", el.color);
    }
}

function mapArraysColor() {
    let arrayOfShapesNew = arrayOfShapes.map(changeColor);
    add_New_Els_ToDOM(arrayOfShapesNew, "mappedRow");

    function changeColor(el) {
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        return new ShapeDef(el.x, el.y + 200, el.shapeClass, el.customShapeClass, color);
    }
}

// ========== filter() Examples ========== //
function filterArraysX() {
    const filtered = arrayOfShapesTwo.filter(el => el.x > 200);
    add_New_Els_ToDOM(filtered, "filteredRow");
}

function filterArraysByShape() {
    const filtered = arrayOfShapesTwo.filter(el => el.customShapeClass === "circle");
    add_New_Els_ToDOM(filtered, "filteredRow");
}

// ========== reduce() Examples ========== //
function reduceExample() {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("reduceOutput").innerHTML = `Sum of numbers: ${sum}`;
}

// ========== forEach() Examples ========== //
function forEachExample() {
    let output = "";
    numbers.forEach(num => output += `Number: ${num}<br>`);
    document.getElementById("pSpan").innerHTML = output;
}

// ========== find() Examples ========== //
function findExample() {
    const found = arrayOfShapesTwo.find(el => el.x > 200);
    if (found) add_SingleToDOM(found, "foundShape");
}

// ========== some() & every() Examples ========== //
function someEveryExample() {
    const hasCircle = arrayOfShapesTwo.some(el => el.customShapeClass === "circle");
    const allCircles = arrayOfShapesTwo.every(el => el.customShapeClass === "circle");
    document.getElementById("someEveryOutput").innerHTML = `
        Has at least one circle: ${hasCircle}<br>
        All are circles: ${allCircles}
    `;
}

// ========== sort() & toSorted() Examples ========== //
function sortExamples() {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const toSortedNumbers = numbers.toSorted((a, b) => a - b);
    document.getElementById("sortOutput").innerHTML = `
        Original: [${numbers}]<br>
        Sorted (mutates): [${sortedNumbers}]<br>
        toSorted (new array): [${toSortedNumbers}]
    `;
}

// ========== Spread & Destructuring Examples ========== //
function spreadExamples() {
    const fruits = ["apples", "grapes"];
    const moreFruits = [...fruits, "oranges"];
    const [first, ...rest] = moreFruits;
    document.getElementById("spreadOutput").innerHTML = `
        Spread: ${moreFruits}<br>
        Destructured: First=${first}, Rest=${rest}
    `;
}

// ========== Initialize All Examples ========== //
document.addEventListener("DOMContentLoaded", () => {
    add_New_Els_ToDOM(arrayOfShapes, "originalRow");
    mapArraysShape();
    filterArraysX();
    reduceExample();
    forEachExample();
    findExample();
    someEveryExample();
    sortExamples();
    spreadExamples();
});