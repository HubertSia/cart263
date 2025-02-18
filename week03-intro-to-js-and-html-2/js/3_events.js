window.onload = setup;

function setup() {
    console.log("events!");

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    for (let element of allSections) {
        element.setAttribute("custom-bool", "inactive");
        element.addEventListener("click", function (e) {
            console.log("is in now active");
            let cssObj = window.getComputedStyle(this, null);
            let bgColor = cssObj.getPropertyValue("background-color");
            let backgroundColorArray = getColorObj(bgColor);
            
            if (this.getAttribute("custom-bool") === "inactive") {
                this.style.background = `rgba(${backgroundColorArray[0]}, ${backgroundColorArray[1]}, ${backgroundColorArray[2]}, 0.5)`;
                document.querySelector(`#${this.id} p`).style.background = `rgba(${backgroundColorArray[0]}, ${backgroundColorArray[1]}, ${backgroundColorArray[2]}, 0.75)`;
                this.setAttribute("custom-bool", "active");
            } else {
                this.setAttribute("custom-bool", "inactive");
                this.style.background = `rgba(${backgroundColorArray[0]}, ${backgroundColorArray[1]}, ${backgroundColorArray[2]}, 1.0)`;
                document.querySelector(`#${this.id} p`).style.background = "";
            }
        });
    }

    document.querySelector("#bubbleButton").addEventListener("click", function () {
        console.log("button clicked");
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
        bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
        
        let r = Math.ceil(Math.random() * 255);
        let g = Math.ceil(Math.random() * 255);
        let b = Math.ceil(Math.random() * 255);
        
        bubble.style.background = `rgba(${r}, ${g}, ${b}, 1)`;
        document.getElementById("top-layer").appendChild(bubble);
    });
}

function getColorObj(inColor) {
    let substringColor = inColor.substring(
        inColor.indexOf("(") + 1,
        inColor.indexOf(")")
    );
    return substringColor.split(",");
}
