setup_F();
/** THEME: JOY  */
function setup_F() {
  console.log("in f");
  /**************************************************** */
  //get the buttons
  activateButtons_F(`#TEAM_F`, "ani_canvF");

  /**************************************************** */
  /* NO NEED TO MODIFY THIS FUNCTION :) */
  /*** helper function to activate buttons */
  /**************************************************** */
  function activateButtons_F(team, teamCanvas) {
    let teamButtons = document.querySelectorAll(`${team} .team-nav p`);
    //2:
    console.log(teamButtons);
    for (let button of teamButtons) {
      button.addEventListener("click", buttonCallBack);

      function buttonCallBack(e) {
        switch (this.textContent) {
          case "1": {
            console.log("A");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas A
            document.getElementById(`${teamCanvas}_A`).style.display = "block";
            //run first
            aniA(document.getElementById(`${teamCanvas}_A`));

            break;
          }
          case "2": {
            console.log("B");
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas B
            document.getElementById(`${teamCanvas}_B`).style.display = "block";
            //run second
            aniB(document.getElementById(`${teamCanvas}_B`));
            break;
          }
          case "3": {
            console.log("C");
            //reset the canvases
            resetCanvases(`${team} .aniCanvas`);
            //reset buttons
            resetButtons(teamButtons, this);
            //activate canvas C
            document.getElementById(`${teamCanvas}_C`).style.display = "block";
            //run third
            aniC(document.getElementById(`${teamCanvas}_C`));
            break;
          }
          case "4": {
            console.log("D");
            break;
          }
          case "5": {
            console.log("E");
            break;
          }
          case "6": {
            console.log("F");
            break;
          }
        }
      }
    } //for
  }
   /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION A INSIDE  HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.requestAnimationFrame() to create an animation
   * i.e. a reoccuring pattern - you can use simple shapes and colors, images etc...
   * 2: create a way to start and stop the animation using a
   * custom made button and add a mouse click event listener to either start/stop the animation
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in A");

    let button = document.createElement("div");
    button.classList.add("TEAM_F_box");
    button.textContent = "GO";
    parentCanvas.appendChild(button);

    let rectPs = [];
    let aniSpeed = 1;
    let changingNum = 1;
    let aniRef;
    let isAnimating = false;

    setupAnimation();

    function setupAnimation() {
        let offset = 40;
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 13; j++) {
                let rectP = document.createElement("p");
                rectP.classList.add("TEAM_F_rect");
                rectP.style.width = `20px`;
                rectP.style.height = `20px`;
                rectP.textContent = (j % 2 === 0) ? "E" : "O";
                rectP.style.left = offset + i * 25 + "px";
                rectP.style.top = offset + j * 25 + "px";
                rectP.style.fontSize = `13px`;
                parentCanvas.appendChild(rectP);
                rectPs.push(rectP);
            }
        }
    }

    // Start or stop animation on mouse click anywhere in parentCanvas
    parentCanvas.addEventListener("mousedown", function () {
        if (isAnimating) {
            cancelAnimationFrame(aniRef);
            isAnimating = false;
            console.log("Animation Stopped");
        } else {
            aniRef = window.requestAnimationFrame(animate);
            isAnimating = true;
            console.log("Animation Started");
        }
    });

    // Reset animation on button click
    button.addEventListener("click", function () {
        console.log("Reset Animation");
        
        // Reset all elements to initial size
        for (let i = 0; i < rectPs.length; i++) {
            rectPs[i].style.width = `20px`;
            rectPs[i].style.height = `20px`;
            rectPs[i].style.fontSize = `13px`;
        }

        // Restart animation if not already running
        if (!isAnimating) {
            aniRef = window.requestAnimationFrame(animate);
            isAnimating = true;
        }
    });

    function animate() {
        if (
            parseInt(rectPs[0].style.width) > 28 ||
            parseInt(rectPs[0].style.width) < 1
        ) {
            aniSpeed *= -1;
        }

        for (let i = 0; i < rectPs.length; i += changingNum) {
            rectPs[i].style.width =
                parseInt(rectPs[i].style.width) + aniSpeed + "px";
            rectPs[i].style.height =
                parseInt(rectPs[i].style.height) + aniSpeed + "px";
            rectPs[i].style.fontSize =
                parseInt(rectPs[i].style.fontSize) + aniSpeed + "px";
        }

        aniRef = window.requestAnimationFrame(animate);
    }
}

  /**************** ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR ANIMATION B INSIDE  HERE */
  /**************** ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the function window.setInterval() to create a pattern that changes over time
   * i.e. fading out/ in, growing bigger/smaller, appear/disappear, add, remove...
   *  - you can use simple shapes and colors, images etc...
   * 2: add in a / some mouse click event listener(s) somewhere to make the sketch interactive

   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniB(parentCanvas) {
    console.log("Animation started");
    
    solutionNadia();
    solutionHubert();
    
    function solutionNadia() {
        
  
  //get the rendered bounding Box of parent and use the width and height
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    let numCircles = 10;
    let circles = [];

    for (let i = 0; i < numCircles; i++) {
      let circle = document.createElement("div");
      circle.classList.add("TEAM_F_circle");
      parentCanvas.appendChild(circle);
      circle.style.position = "absolute";
      circle.style.width = "50px";
      circle.style.height = "50px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255
        }, ${Math.random() * 255})`;

      let x = Math.random() * boundingBoxParent.width;
      let y = Math.random() * boundingBoxParent.height;
      let xSpeed = (Math.random() - 0.5) * 4;
      let ySpeed = (Math.random() - 0.5) * 4;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      circles.push({ circle, x, y, xSpeed, ySpeed });
    }

    window.setInterval(() => {
      for (let i = 0; i < numCircles; i++) {
        let { circle, x, y, xSpeed, ySpeed } = circles[i];

        x += xSpeed;
        y += ySpeed;

        if (x + 50 > boundingBoxParent.width || x < 0) {
          xSpeed = -xSpeed;
        }
        if (y + 50 > boundingBoxParent.height || y < 0) {
          ySpeed = -ySpeed;
        }

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        circles[i] = { circle, x, y, xSpeed, ySpeed };
      }
    }, 20);



    //make a grid of cells
    for (let i = 20; i < boundingBoxParent.width; i += 30) {
      for (let j = 20; j < boundingBoxParent.height; j += 80) {
        //create a div and place in the grid
        let rect = document.createElement("div");
        rect.classList.add("TEAM_H_h_cell");
        parentCanvas.appendChild(rect);
        rect.style.left = `${j + 10}px`;
        rect.style.top = `${i}px`;
        rect.textContent = "test";
        rect.style.width = "40px";
        rect.style.height = "20px";
        rect.style.opacity = 1;

        if (j % 3 === 1) {
          rect.style.background = "orange";
        } else if (j % 3 === 2) {
          rect.style.background = "red";
        }
        rect.setAttribute("isactive", "false");

        //add an event listener to each div...
        rect.addEventListener("click", clickEventHandlerOnRec);
      }
    }

    /****** callback for click on a rect in the grid **********/
    function clickEventHandlerOnRec() {
      //this is the element that was clicked on
      //ensure that this only works for the FIRST MOUSE CLICK
      if (this.getAttribute("isactive") === "false") {
        // Change circle colors
        for (let i = 0; i < numCircles; i++) {
          circles[i].circle.style.backgroundColor = `rgb(${Math.random() * 255
            }, ${Math.random() * 255}, ${Math.random() * 255})`;
        }

        //add ONE set interval call for each rect when it is clicked
        //the callback will be opacityChange
        let intervalRef = window.setInterval(opacityChange, 50); //for fade out
        let upInterval = null;
        this.setAttribute("isactive", "true");
        //keep track of this... why?
        let self = this;

        //callback function triggered by the setInterval
        function opacityChange() {
          console.log("go");
          self.style.opacity = parseFloat(self.style.opacity) - 0.05;

          //will cancel the setInterval when complete...
          if (parseFloat(self.style.opacity) <= 0) {
            clearInterval(intervalRef);
            self.remove();
          }
        }
      }
    }
  
  
    }
    
    function solutionHubert() {
    let boundingBoxParent = parentCanvas.getBoundingClientRect();
    console.log(boundingBoxParent);

    // Create a grid of animated divs
    for (let i = 25; i < boundingBoxParent.width; i += 60) {
        for (let j = 25; j < boundingBoxParent.height; j += 60) {
            let rect = document.createElement("div");
            rect.classList.add("animated-cell");
            parentCanvas.appendChild(rect);

            rect.style.position = "absolute";
            rect.style.left = `${i}px`;
            rect.style.top = `${j}px`;
            rect.style.width = "30px";
            rect.style.height = "30px";
            rect.style.background = getRandomColor();
            rect.style.borderRadius = "50%"; // Make it a circle
            rect.style.opacity = 1;
            rect.setAttribute("isactive", "false");

            // Start the fade & scale animation
            let scale = 1;
            let fadeDirection = -0.05;
             setInterval(() => {
                let opacity = parseFloat(rect.style.opacity);
                opacity += fadeDirection;
                scale += fadeDirection * 0.5;

                if (opacity <= 0 || opacity >= 1) {
                    fadeDirection *= -1; // Reverse fade direction
                }

                rect.style.opacity = opacity;
                rect.style.transform = `scale(${scale})`;
            }, 50);

            // Click event: Change color
            rect.addEventListener("click", () => {
                rect.style.background = getRandomColor();
            });
        }
    }
        // Function to get a random color
    function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;

}
    }
    

}






  
  /**************** ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE  HERE */
  /**************** ANI C ************************************ */
 /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * do not use  requestAnimationFrame(), setInterval() nor setTimeout() -> meaning keep it simple ;)
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/


function aniC(parentCanvas) {
    console.log("in C");

    // Create a container div inside the parentCanvas
    let container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = "100%";
    container.style.height = "100%";
    parentCanvas.appendChild(container);

    /*** THIS IS THE CALLBACK FOR KEY DOWN ( DO NOT CHANGE THE NAME..) */
    windowKeyDownRef = function (e) {
        console.log(e.code + " down");

        // Create a new shape if a key is pressed
        let shape = document.createElement("div");
        shape.classList.add("TEAM_C_ANI_C_Shape"); // Add team-prefixed class
        shape.style.position = "absolute";
        shape.style.width = "50px";
        shape.style.height = "50px";
        shape.style.borderRadius = "50%"; // Makes it a circle
        shape.style.backgroundColor = getRandomColor();
        shape.style.left = Math.random() * (container.clientWidth - 50) + "px";
        shape.style.top = Math.random() * (container.clientHeight - 50) + "px";
        shape.dataset.key = e.code; // Store key info to track later

        container.appendChild(shape);
    };

    /*** THIS IS THE CALLBACK FOR KEY UP ( DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
        console.log(e.code + " up");

        // Remove shapes related to the released key
        let shapes = document.querySelectorAll(`[data-key='${e.code}']`);
        shapes.forEach(shape => shape.remove());
    };

    // Helper function to generate random colors
    function getRandomColor() {
        return `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    // DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
}



}










