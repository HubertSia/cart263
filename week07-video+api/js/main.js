document.addEventListener('DOMContentLoaded', () => {
    // Display original shapes
    addShapesToDOM(arrayOfShapes, 'originalShapes');
    
    // Map examples
    const mappedShapes = arrayOfShapes.map(shape => 
        new ShapeDef(shape.x, shape.y + 100, shape.shapeClass, "circle", shape.color)
    );
    addShapesToDOM(mappedShapes, 'mappedShapes');
    
    // Filter examples
    const filteredShapes = arrayOfShapesTwo.filter(shape => shape.x > 200);
    addShapesToDOM(filteredShapes, 'filteredShapes');
    
    // Reduce examples
    const sum = numbers_n.reduce((acc, num) => acc + num, 0);
    displayTextOutput({ sum }, 'reduceOutput');
    
    // Find examples
    const foundShape = arrayOfShapesFour.find(shape => shape.x > 200);
    if (foundShape) addSingleShapeToDOM(foundShape, 'foundShape');
    
    // Sort examples
    const sortedShapes = [...arrayOfShapesTwo].sort((a, b) => {
        const classA = a.customShapeClass.toUpperCase();
        const classB = b.customShapeClass.toUpperCase();
        if (classA < classB) return -1;
        if (classA > classB) return 1;
        return 0;
    });
    displayTextOutput(sortedShapes, 'sortOutput');
});