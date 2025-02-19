window.onload = function () {
    let gridArray = [];
    let parent = document.getElementById("parent");

    for (let i = 0; i < 24; i++) {
        let gridCol = [];
        for (let j = 0; j < 24; j++) {
            let d = document.createElement("div");
            d.classList.add("grid-cell");
            parent.appendChild(d);
            d.style.left = (i + 1) * 25 + "px";
            d.style.top = (j + 1) * 25 + "px";
            gridCol[j] = d;
        }
        gridArray[i] = gridCol;
    }

    let shades = ["#7fb3d5", "#76d7c4", "#f7dc6f", "#eb984e", "#cb4335", "#8e44ad", "#2e4053", "#e5e7e9"];
    let num = 2;

    function updateColors() {
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) {
                let d = gridArray[i][j];
                d.style.background = shades[(j % num) % shades.length];
            }
        }
    }

    function animate_cells_mod_rows() {
        num = (num % 8) + 1;
        updateColors();
    }

    function animate_cells_mod_cols() {
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 24; j++) {
                let d = gridArray[i][j];
                d.style.background = shades[(i % num) % shades.length];
            }
        }
    }

    setInterval(animate_cells_mod_rows, 200);
    setInterval(animate_cells_mod_cols, 500);

    let speed = 1000;
    function addTextDynamic() {
        let sp = document.createElement("span");
        sp.textContent = " adding Text ";
        sp.classList.add("appearInText");
        parent.appendChild(sp);
        if (speed > 20) speed -= 20;
        setTimeout(addTextDynamic, speed);
    }
    setTimeout(addTextDynamic, speed);

    let counter = 0;
    let ref = setInterval(function addOtherText() {
        let sp = document.createElement("span");
        sp.textContent = " ***-*** ";
        sp.classList.add("appearInStarText");
        parent.appendChild(sp);
        if (++counter === 10) clearInterval(ref);
    }, 500);

    if (Math.random() < 0.5) {
        defusedText();
    } else {
        setTimeout(oneTimeText, 500);
    }

    function oneTimeText() {
        let sp = document.createElement("span");
        sp.textContent = " TIME OUT ";
        sp.classList.add("timeOutText");
        parent.appendChild(sp);
    }

    function defusedText() {
        let sp = document.createElement("span");
        sp.textContent = "DEFUSED";
        sp.classList.add("timeOutText");
        parent.appendChild(sp);
    }

    // Particle Animation
    let speedX = 2, speedY = 3;
    let particle = document.getElementById("particle");
    if (!particle.style.left) particle.style.left = "0px";
    if (!particle.style.top) particle.style.top = "0px";

    function animateParticle() {
        particle.style.left = parseInt(particle.style.left) + speedX + "px";
        particle.style.top = parseInt(particle.style.top) + speedY + "px";
        checkBounds(parent, particle);
        requestAnimationFrame(animateParticle);
    }
    requestAnimationFrame(animateParticle);

    function checkBounds(parent, p) {
        let bounds = parent.getBoundingClientRect();
        let left = parseInt(p.style.left), top = parseInt(p.style.top);
        if (left > bounds.right || left < bounds.left) speedX *= -1;
        if (top > bounds.bottom || top < bounds.top) speedY *= -1;
    }

    // Expanding particle effect
    let theta = 0;
    let aniRef;
    let p2 = document.createElement("div");
    p2.id = "particle_two";
    parent.appendChild(p2);
    p2.style.left = "500px";
    p2.style.top = "100px";

    function modifyParticle() {
        let mappedNum = mapNumRange(Math.sin(theta), -1, 1, 5, 100);
        p2.style.width = mappedNum + "px";
        p2.style.height = mappedNum + "px";
        p2.style.borderRadius = mappedNum + "px";
        theta += 0.05;
        aniRef = requestAnimationFrame(modifyParticle);
    }
    aniRef = requestAnimationFrame(modifyParticle);

    function mapNumRange(num, inMin, inMax, outMin, outMax) {
        return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    window.addEventListener("keydown", function (e) {
        if (e.code === "Space") {
            cancelAnimationFrame(aniRef);
        }
    });
};
