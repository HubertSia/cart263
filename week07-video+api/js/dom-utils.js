function addShapesToDOM(shapesArray, parentId) {
    const parent = document.getElementById(parentId);
    parent.innerHTML = "";
    
    shapesArray.forEach(shape => {
        const shapeEl = document.createElement("div");
        shapeEl.className = `shape ${shape.shapeClass} ${shape.customShapeClass}`;
        shapeEl.style.backgroundColor = shape.color;
        shapeEl.style.left = `${shape.x}px`;
        shapeEl.style.top = `${shape.y}px`;
        parent.appendChild(shapeEl);
    });
}

function addSingleShapeToDOM(shape, parentId) {
    const parent = document.getElementById(parentId);
    const shapeEl = document.createElement("div");
    shapeEl.className = `shape ${shape.shapeClass} ${shape.customShapeClass}`;
    shapeEl.style.backgroundColor = shape.color;
    shapeEl.style.left = `${shape.x}px`;
    shapeEl.style.top = `${shape.y}px`;
    parent.appendChild(shapeEl);
}

function displayTextOutput(text, parentId) {
    const parent = document.getElementById(parentId);
    parent.innerHTML = `<pre>${JSON.stringify(text, null, 2)}</pre>`;
}