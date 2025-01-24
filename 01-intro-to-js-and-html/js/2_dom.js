//When windows loads, loads the set-up function
window.onload = setup
function setup(){

    // Activate the console log
    console.log("running setup");

    // Activate console log of the following ID
    console.log(document.getElementById("one"));

    // Activate console log of the following selector
    console.log(document.querySelector("#one"));

    // Activate console log of the following TagName
    console.log(document.getElementsByTagName("div"));

    // Activate console log of the following TagName by length
    console.log(document.getElementsByTagName("div").length);

    // Activate console log of the following selector 
    console.log(document.querySelector("div"));

    // Activate console log of the following ID within innerHTML (specific attribute)
    console.log(document.getElementById("two").innerHTML);

    // Activate console log of the following ID to get the text of the html
    console.log(document.getElementById("two").textContent);

    // Activate console log of the following selector and get its following attributes
    console.log(document.querySelector("#five").getAttribute("id"));

    // Activate console log of the following selector and get its following attributes
    console.log(document.querySelector("#five").getAttribute("class"));

    // Activate console log of the following selector and get its following attributes
    console.log(document.querySelector("#two").getAttribute("class"));

    // Activate console log of the following selector and get its following attributes (will show string if there's more than one)
    console.log(typeof(document.querySelector("#two").getAttribute("class")));

    // Will replace the following atrribute element of the html with the folowing
    document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";


    //get the group
    let allSquareShapes = document.querySelectorAll(".square_shape");
    //go through each element
    for(let  singleSquareShape of allSquareShapes){
        //get children
    console.log(singleSquareShape.children[0])
    singleSquareShape.children[0].textContent+=" adding content";
    
    }


    // Get the selector of the following and remove it (it will only effect the first one only)
    document.querySelector(".square_shape").classList.remove("square_shape"); 

    // Get the selector of the following and add the following (it will onle effect the first one only)
    document.querySelector("p span").classList.add("change_span");
  


    //add
    document.querySelector("#four").style.background = "cornflowerBlue";
    document.querySelector("#four").style.borderColor = "darkblue"; 
    //modify
    document.querySelector("#one").style.background = "pink";
    document.querySelector("#one").style.borderColor = "darkblue";

    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = "<p> NEW ELEMENT </p>";
    newDiv.style.backgroundColor = "purple";


    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box");
    
    // add the new element
    parentElement.appendChild(newDiv);
}
