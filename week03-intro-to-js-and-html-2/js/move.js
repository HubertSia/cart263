window.onload = function(){
    console.log("move");

    // Select the div with id "draw-box-a"
    let drawBox = document.querySelector("#draw-box-a");

    // Ensure drawBox exists before adding event listener
    if (drawBox) {
        drawBox.addEventListener("mousemove", moveCallBack);
    }
};

function moveCallBack(e) {
    console.log("mouse move");
    console.log(this);
    console.log(e.target);
    
    // Get the bounding box of the div
    let rect = this.getBoundingClientRect();
    console.log(rect);
    
    // Calculate offset coordinates relative to the div
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;
    
    // Clear existing content before updating
    this.innerHTML = `<p> x: ${e.clientX}, y: ${e.clientY} </p>`;
    this.innerHTML += `<p> offset_x: ${offsetX}, offset_y: ${offsetY} </p>`;
    
    // Create a new element for visualizing the point
    let p = document.createElement("div");
    p.classList.add("point");
    p.style.position = "absolute";
    p.style.width = "5px";
    p.style.height = "5px";
    p.style.backgroundColor = "red";
    p.style.borderRadius = "50%";
    p.style.left = offsetX + "px";
    p.style.top = offsetY + "px";
    
    this.appendChild(p);
}
