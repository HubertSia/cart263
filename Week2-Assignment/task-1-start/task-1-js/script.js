window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
        /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
        /*** START PART ONE ACCESS */
        /* 1: all paragraph elements */

    /***CODE */
    console.log(document.querySelectorAll("p"));

    /***OUTPUT: 
     * Activate console log to select all the following selectors
     */



    /*************************************** */
    /* 2: only the first paragraph element */

    /***CODE */
    console.log(document.querySelector("p"));

    /***OUTPUT: 
     * Activate console log of the following first selector detected
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */

    /***CODE */
    console.log(document.querySelectorAll(".inner-container"));


    /***OUTPUT: 
     * Activate console log to select all the following selectors class
     */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */

    /***CODE */
    const imgContainers = document.querySelectorAll('.img-container');

    const lastImgContainer = imgContainers[imgContainers.length - 1];

    const lastImage = lastImgContainer.querySelector('img');

    console.log(lastImage);

    /***OUTPUT: 
     * Create a variable that we contain all of .img-container
     * Create another variable that will contain the last element of the 
     * Activate console log that well call the last element
     */


    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */

    /***CODE */

    //5A
    const element5a = (document.querySelectorAll("h2"));
    console.log(element5a);
    //5B
    console.log(element5a.length);

    //5C
    console.log(element5a[0].textContent)

    /***OUTPUT: 
     * 
     * For 5A a variable has been created to select all elements that has a h2
     * Follow by that, use console log to find all the h2
     * 
     * In 5B, by using the same variable from 5A. 
     * We're using this variable to get its length
     * 
     * In 5c, once again, by using the same variable from 5A. 
     * Check the list from the variable and select the first element from textContent
     * 
     */


    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    console.log(document.getElementById('parent'));

    /***OUTPUT: 
     * 
     * Activate console log the get the "parent" ID
     * 
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */

    /***CODE */
    document.querySelector("p").innerHTML = "<p>text changed by ``Hubert Sia`` on the following date: `28 January`.</p>";

    /***OUTPUT: 
    * 
    * We simply select the first "p" detected and modified the html with the following paragraph
    * 
    */

    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/

    /***CODE */
    document.querySelectorAll(".content-container")[0].style.backgroundColor = "orange";
    document.querySelectorAll(".content-container")[1].style.backgroundColor = "purple";

    /***OUTPUT: 
    * 
    * We select all the classes the has ".content-container", target the first list and set the background color to orange
    * Same goes with the second except, target the 2nd of the list and set the background color to purple
    * 
    */

    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */
    document.querySelector(".img-image").src = "task-1-images/seven.png";
    
    /***OUTPUT: 
    * 
    * We select the classe the has ".img-image", change src to task-1-images/seven.png
    * 
    */


    /*************************************** */
    /* 4: Select the third paragraph element on the page and 
    replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`

    /***CODE */
    document.querySelectorAll("p")[2].innerHTML = "<h2>TEST 123</h2>";

    /***OUTPUT: 
    * 
    * We simple select the first "p" and target the 3rd of the paragraph. Modified the html with the following h2
    * 
    */


    /*************************************** */
    /* 5: Select the fourth paragraph element on the page and 
    add to the existing content an h2 element containing the text `TEST 123`

    /***CODE */
    document.querySelectorAll("p")[3].innerHTML = "<h2>TEST 123</h2>";

    
    /***OUTPUT: 
    * 
    * We simple select the first "p" and target the 4th of the paragraph. Modified the html with the following h2
    * 
    */

    
    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.

    /***CODE */
    let fifthParagraph = document.querySelectorAll("p")[4];
    fifthParagraph.classList.add("newStyle");

    let newImage = document.createElement("img");
    newImage.src = "task-1-images/one.png";
    newImage.alt = "Image one";

    fifthParagraph.appendChild(newImage);

    /***OUTPUT: 
    * 
    * Create variable for fifthParagraph (for easier control) store select the first "p" and target the 5th of the paragraph.
    * Add the class "newStyle"
    * 
    * Create a variable of newImafw stores the created img element
    * src change to "task-1-images/one.png" along with the alt to "Image one";
    * 
    */

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.

    /***CODE */
    let colors = ['red', 'blue', 'green', 'orange'];
    let innerContainers = document.querySelectorAll(".inner-container");

    for (let i = 0; i < colors.length; i++) {
        innerContainers[i].style.backgroundColor = colors[i];
    }

    /***OUTPUT: 
    * 
    * Store the array vriable with let colors = ['red','blue','green','orange'];, 
    * Create a variable,innerContainers, wich stores all the classes of .inner-container
    * Loop the lenght of the color array and apply the style of the innerContainers 
    * 
    */


    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(),
    passing the current allPTagsThree element as the parent with each iteration.*/

    /***CODE */
    
    var allPTagsThree = document.querySelectorAll("p");


        function customCreateElement(parent) {

            let newParagraph = document.createElement("p");


            newParagraph.textContent = "using create Element";


            newParagraph.style.backgroundColor = "green";


            newParagraph.style.color = "white";


            parent.appendChild(newParagraph);
        }


        allPTagsThree.forEach(paragraph => {
            customCreateElement(paragraph);
        });

    /***EXPLANATION::
     * 
     *1A: We created a variable allPTagsThree and storing a querySelectorAll of all the "p"
     *1B: Took it litterally, created a function customCreateElement with the parent
     *1C: Created a variable of new paragraph (it is gonna be our universal control) and store the creatElement that will generate "p"
     *1D: We add the background color green to our variable
     *1F: We add the color white to our variable for the font
     *1G: By using appenChild and parent. We able to store with the variable 
     *1H: We iterate by going with the forEachloop. This will allow to call the customCreateElement passing the current allPTagsThree element as the parent with each iteration.
     * 
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)).
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense...
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    
// Function to create a new div with class 'testDiv' and append it to the parent
function customNewBoxCreate(parent) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('testDiv');
    parent.appendChild(newDiv);
    return newDiv;
}

// Selecting the parent element with id 'new-grid'
let parentGrid = document.getElementById('new-grid');

// Setting grid dimensions
const rows = 10;
const cols = 10;
const cellSize = 50; // Adjust size as needed

// Nested loop to generate grid cells
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let returnedDiv = customNewBoxCreate(parentGrid);
        
        // Set position using loop counters
        returnedDiv.style.position = 'absolute';
        returnedDiv.style.left = `${col * cellSize}px`;
        returnedDiv.style.top = `${row * cellSize}px`;
        returnedDiv.style.width = `${cellSize}px`;
        returnedDiv.style.height = `${cellSize}px`;
        returnedDiv.style.border = '1px solid black';
        
        // BONUS I: Alternate background color
        if (row % 2 === 0) {
            returnedDiv.style.backgroundColor = 'white';
            returnedDiv.textContent = 'EVEN'; // BONUS II
        } else {
            returnedDiv.style.backgroundColor = 'cornflowerblue';
            returnedDiv.textContent = 'ODD'; // BONUS II
        }
    }
}

// Log the number of elements with class 'testDiv'
console.log(`Total elements with class 'testDiv':`, document.querySelectorAll('.testDiv').length);
// The total number will be 100 (10x10 grid), as each iteration of the nested loops creates one new div.

    /***EXPLANATION::
    * 2A: We created a variable allPTagsThree and stored a querySelectorAll of all the "p" elements.
    * 2B: Created a function customCreateElement that takes a parent as a parameter.
    * 2C: Created a variable newParagraph to store document.createElement("p") which generates a new <p> element.
    * 2D: Added a background color of green to newParagraph.
    * 2F: Set the text color to white for newParagraph.
    * 2G: Used appendChild to append newParagraph to the parent element.
    * 2H: Iterated through allPTagsThree using forEach(), calling customCreateElement and passing the current element as the parent.
    */


    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ...
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder),
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red,
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder
        when dividing by three. */

    /***CODE */


    function customNewBoxCreate(parent) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('testDiv');
    parent.appendChild(newDiv);
    return newDiv;
}




    for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let returnedDiv = customNewBoxCreate(parentGrid);
        

        returnedDiv.style.position = 'absolute';
        returnedDiv.style.left = `${col * cellSize}px`;
        returnedDiv.style.top = `${row * cellSize}px`;
        returnedDiv.style.width = `${cellSize}px`;
        returnedDiv.style.height = `${cellSize}px`;
        returnedDiv.style.border = '1px solid black';
        

         if (row % 2 === 0) {
            returnedDiv.style.backgroundColor = 'white';
            returnedDiv.textContent = 'EVEN'; // BONUS II
        } else {
            returnedDiv.style.backgroundColor = 'cornflowerblue';
            returnedDiv.textContent = 'ODD'; // BONUS II
        }
    }
}


    let parentGridThree = document.getElementById('new-grid-three');

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let returnedDiv = customNewBoxCreate(parentGridThree);
        

        returnedDiv.style.position = 'absolute';
        returnedDiv.style.left = `${col * cellSize}px`;
        returnedDiv.style.top = `${row * cellSize}px`;
        returnedDiv.style.width = `${cellSize}px`;
        returnedDiv.style.height = `${cellSize}px`;
        returnedDiv.style.border = '1px solid black';
        

        if (col % 3 === 0) {
            returnedDiv.style.backgroundColor = 'red';
            returnedDiv.textContent = '0';
        } else if (col % 3 === 1) {
            returnedDiv.style.backgroundColor = 'orange';
            returnedDiv.textContent = '1';
        } else {
            returnedDiv.style.backgroundColor = 'yellow';
            returnedDiv.textContent = '2';
        }
    }
}


    console.log(`Total elements with class 'testDiv':`, document.querySelectorAll('.testDiv').length);

    
    /***EXPLANATION::
    * 3A: Created another nested loop to generate a new grid inside 'new-grid-three' using customNewBoxCreate.
    * 3B: Checked the column index using the modulus (%) operator to determine if it's a multiple of 3, has a remainder of 1, or has a remainder of 2.
    * 3C: Applied different background colors based on the modulus result:
    *     - Red for columns where col % 3 === 0.
    *     - Orange for columns where col % 3 === 1.
    *     - Yellow for columns where col % 3 === 2.
    * 3D: Set the text content of each div to display the remainder value (0, 1, or 2) corresponding to col % 3.
    */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}