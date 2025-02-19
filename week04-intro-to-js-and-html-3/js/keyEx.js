window.onload = function () {
    console.log("keys");

    let boxA = document.getElementById("boxA");
    let boxB = document.getElementById("boxB");
    let textContainer = document.querySelector("#textContainer");
    
    // Ensure boxA has an initial position
    if (!boxA.style.left) {
        boxA.style.left = "0px";
    }

    let speedX = 5;

    window.addEventListener("keydown", function (event) {
        console.log(event);

        // Append key info to textContainer
        textContainer.textContent += event.code;

        // Move boxA left or right
        if (event.key === "ArrowRight") {
            boxA.style.left = parseInt(boxA.style.left) + speedX + "px";
        } else if (event.key === "ArrowLeft") {
            boxA.style.left = parseInt(boxA.style.left) - speedX + "px";
        }

        // Toggle boxB background on space key press
        if (event.code === "Space") {
            let bool = boxB.getAttribute("custom-bool");
            if (bool === "off") {
                boxB.style.background = "orange";
                boxB.setAttribute("custom-bool", "on");
            } else {
                boxB.style.background = "rgb(112, 184, 226)";
                boxB.setAttribute("custom-bool", "off");
            }
        }

        // Change boxA background color when shift is pressed
        if (event.key === "Shift") {
            boxA.style.background = "rgb(226, 112, 177)";
        }
    });

    window.addEventListener("keyup", function (event) {
        console.log("keyup");

        if (event.key === "Shift") {
            boxA.style.background = "rgb(112, 184, 226)";
        } else {
            console.log(`key up not shift:`);
            console.log(event);
        }
    });

    // Add timeout text
    window.setTimeout(addTimeoutText, 2000);
    function addTimeoutText() {
        let parent = document.getElementById("parent");
        parent.innerHTML += "<p> NEW TEXT TO APPEAR </p>";
    }

    // Add interval text
    window.setInterval(addTextRecur, 2000);
    function addTextRecur() {
        let parent = document.getElementById("parent");
        parent.innerHTML += "<p> NEW TEXT TO APPEAR RECUR </p>";
    }
};
