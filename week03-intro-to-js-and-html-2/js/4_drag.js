window.onload = setup;

function setup() {
    console.log("drag ex");

    // Function to handle dragging
    let handleDragging = function (event) {
        console.log("on drag");
        // The event target refers to the object being dragged
        console.log(event.target.id);

        // The dataTransfer.setData() method sets the data type and the value of the dragged data
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };

    /** NEW:: TO HANDLE DROPPING **/
    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");
        console.log(event);

        // Retrieve the dragged element's ID
        let objDraggedID = event.dataTransfer.getData("objDraggedID");
        
        // If the drop target is the designated area, append the dragged element
        if (event.target.id === "dropTarget") {
            let draggedElement = document.getElementById(objDraggedID);
            if (draggedElement) {
                event.target.appendChild(draggedElement);
            }
        }

        // Clear the drag data cache (for all formats/types)
        event.dataTransfer.clearData();
    };

    // IMPORTANT:: By default, data/elements cannot be dropped in other elements.
    // To allow a drop, we must prevent the default handling of the element
    window.addEventListener("dragover", function (event) {
        event.preventDefault();
        console.log("over");
    });

    // Add event listeners
    window.addEventListener("dragstart", handleDragging);
    window.addEventListener("drop", handleDrop);
}
