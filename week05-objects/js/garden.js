window.onload = function () {
  // Our garden
  let garden = {
    flowers: [],
    numFlowers: 20,

    grass: {
      grassColor: { r: 120, g: 180, b: 120 },
      grassDiv: document.createElement("div"),
    },

    sky: {
      skyColor: { r: 83, g: 154, b: 240 },
      skyDiv: document.createElement("div"),
    },

    sun: {
      sunColor: { r: 240, g: 206, b: 83 },
      sunDiv: document.createElement("div"),
    },
  };

  function createAndRenderTheGarden() {
    // Sky
    garden.sky.skyDiv.classList.add("sky");
    garden.sky.skyDiv.style.background = `rgb(${garden.sky.skyColor.r},${garden.sky.skyColor.g},${garden.sky.skyColor.b})`;
    document.body.appendChild(garden.sky.skyDiv);

    // Sun inside the sky
    garden.sun.sunDiv.classList.add("sun");
    garden.sun.sunDiv.style.background = `rgb(${garden.sun.sunColor.r},${garden.sun.sunColor.g},${garden.sun.sunColor.b})`;
    garden.sky.skyDiv.appendChild(garden.sun.sunDiv);

    // Grass
    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
    document.body.appendChild(garden.grass.grassDiv);
  }

  function createFlower() {
    let flower = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * 120 + window.innerHeight / 2, // Start at bottom half
      size: 40,
      stemLength: 75,
      stemThickness: 10,
      petalThickness: 8,
      flowerStemDiv: document.createElement("div"),
      flowerPetalDiv: document.createElement("div"),

      stemColor: { r: 50, g: 150, b: 50 },
      petalColor: { r: 200, g: 50, b: 50 },
      centreColor: { r: 50, g: 0, b: 0 },
    };
    return flower;
  }

  function renderFlower(flower) {
    // Stem
    flower.flowerStemDiv.classList.add("flower");
    flower.flowerStemDiv.style.position = "absolute";
    flower.flowerStemDiv.style.width = flower.stemThickness + "px";
    flower.flowerStemDiv.style.height = flower.stemLength + "px";
    flower.flowerStemDiv.style.background = `rgb(${flower.stemColor.r},${flower.stemColor.g},${flower.stemColor.b})`;
    flower.flowerStemDiv.style.left = flower.x + "px";
    flower.flowerStemDiv.style.top = flower.y - flower.stemLength + "px";

    garden.grass.grassDiv.appendChild(flower.flowerStemDiv);

    // Petal
    flower.flowerPetalDiv.classList.add("petal");
    flower.flowerPetalDiv.style.position = "absolute";
    flower.flowerPetalDiv.style.width = flower.size + "px";
    flower.flowerPetalDiv.style.height = flower.size + "px";
    flower.flowerPetalDiv.style.borderRadius = "50%";
    flower.flowerPetalDiv.style.background = `rgb(${flower.centreColor.r},${flower.centreColor.g},${flower.centreColor.b})`;
    flower.flowerPetalDiv.style.left = flower.x - flower.size / 2 + "px";
    flower.flowerPetalDiv.style.top = flower.y - flower.stemLength - flower.size / 2 + "px";
    flower.flowerPetalDiv.style.borderWidth = flower.petalThickness + "px";
    flower.flowerPetalDiv.style.borderStyle = "solid";
    flower.flowerPetalDiv.style.borderColor = `rgb(${flower.petalColor.r},${flower.petalColor.g},${flower.petalColor.b})`;

    garden.grass.grassDiv.appendChild(flower.flowerPetalDiv);
  }

  // Render garden
  createAndRenderTheGarden();

  // Create and render flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let newFlower = createFlower();
    garden.flowers.push(newFlower);
    renderFlower(newFlower);
  }
};
