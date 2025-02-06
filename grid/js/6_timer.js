window.onload = function () {
  let gridArray = [];
  
  // Create a 24x24 grid and store divs in a 2D array
  for (let i = 0; i < 24; i++) {
    let gridCol = [];
    for (let j = 0; j < 24; j++) {
      let parent = document.getElementById("parent");
      let d = document.createElement("div");
      d.classList.add("grid-cell");
      parent.appendChild(d);
      
      // Set position for grid cells
      d.style.left = (i + 1) * 25 + "px";
      d.style.top = (j + 1) * 25 + "px";
      gridCol[j] = d;
    }
    gridArray[i] = gridCol;
  }
  console.log(gridArray);

  // Define the color palette
  let shades = [
    "#7fb3d5", // Grey blue
    "#76d7c4", 
    "#f7dc6f", 
    "#eb984e", 
    "#cb4335", 
    "#8e44ad", 
    "#2e4053", 
    "#e5e7e9"
  ];

  let num = 2; // The divisor to alternate colors

  // Function to animate cells based on modulus (works on rows)
  setInterval(animate_cells_mod_rows, 1000);
  
  function animate_cells_mod_rows() {
    num += 1;
    console.log(num);
    if (num === 9) { num = 1; } // Cycle through numbers 1 to 8

    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 24; j++) {
        let d = gridArray[i][j];
        if (i % num === 0) {
          d.style.background = shades[0];
        } else if (i % num === 1) {
          d.style.background = shades[1];
        } else if (i % num === 2) {
          d.style.background = shades[2];
        } else if (i % num === 3) {
          d.style.background = shades[3];
        } else if (i % num === 4) {
          d.style.background = shades[4];
        } else if (i % num === 5) {
          d.style.background = shades[5];
        } else if (i % num === 6) {
          d.style.background = shades[6];
        } else if (i % num === 7) {
          d.style.background = shades[7];
        }
      }
    }
  }

  // Function to animate cells based on modulus (works on columns)
  setInterval(animate_cells_mod_cols, 500);

  function animate_cells_mod_cols() {
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 24; j++) {
        let d = gridArray[i][j];
        if (j % num === 0) {
          d.style.background = shades[0];
        } else if (j % num === 1) {
          d.style.background = shades[1];
        } else if (j % num === 2) {
          d.style.background = shades[2];
        } else if (j % num === 3) {
          d.style.background = shades[3];
        } else if (j % num === 4) {
          d.style.background = shades[4];
        } else if (j % num === 5) {
          d.style.background = shades[5];
        } else if (j % num === 6) {
          d.style.background = shades[6];
        } else if (j % num === 7) {
          d.style.background = shades[7];
        }
      }
    }
    num += 1;
    if (num === 9) { num = 1; } // Cycle through numbers 1 to 8
  }

};
