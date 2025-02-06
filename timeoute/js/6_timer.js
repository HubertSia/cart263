// Start a setInterval and stop it after 10 executions
let ref = window.setInterval(addOtherText, 500);
let counter = 0;

function addOtherText() {
    let sp = document.createElement("span");
    sp.textContent = " ***-*** ";
    sp.classList.add("appearInStarText");
    document.getElementById("parent").appendChild(sp);
    counter++;
    
    if (counter === 20) {
        clearInterval(ref);
        sp.textContent = " TIME OUT ";

    }
}

// Demonstrating clearTimeout with a 50% chance to cancel
let randomChanceToRun = setTimeout(oneTimeText, 500);
let num = Math.random();

if (num < 0.5) { // 50% chance
    defusedText();
    clearTimeout(randomChanceToRun);
}

console.log(num);

function oneTimeText() {
    let sp = document.createElement("span");
    sp.classList.add("timeOutText");
    document.getElementById("parent").appendChild(sp);
}

function defusedText() {
    let sp = document.createElement("span");
    sp.textContent = "DEFUSED";
    sp.classList.add("timeOutText");
    document.getElementById("parent").appendChild(sp);
}
