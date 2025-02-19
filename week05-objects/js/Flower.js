class Flower {
  constructor() {
    // Position and size information
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * 120 + window.innerHeight / 2; // Appear in lower half
    this.size = 40;
    this.stemLength = 75;
    this.stemThickness = 10;
    this.petalThickness = 8;
    this.flowerStemDiv = document.createElement("div");
    this.flowerPetalDiv = document.createElement("div");

    // Color information
    this.stemColor = { r: 50, g: 150, b: 50 };
    this.petalColor = { r: 200, g: 50, b: 50 };
    this.centreColor = { r: 50, g: 0, b: 0 };
  }

  renderFlower() {
    // Stem
    this.flowerStemDiv.classList.add("flower");
    this.flowerStemDiv.style.position = "absolute";
    this.flowerStemDiv.style.width = this.stemThickness + "px";
    this.flowerStemDiv.style.height = this.stemLength + "px";
    this.flowerStemDiv.style.background = `rgb(${this.stemColor.r},${this.stemColor.g},${this.stemColor.b})`;
    this.flowerStemDiv.style.left = this.x + "px";
    this.flowerStemDiv.style.top = this.y - this.stemLength + "px";

    document.getElementsByClassName("grass")[0].appendChild(this.flowerStemDiv);

    // Petal
    this.flowerPetalDiv.classList.add("petal");
    this.flowerPetalDiv.style.position = "absolute";
    this.flowerPetalDiv.style.width = this.size + "px";
    this.flowerPetalDiv.style.height = this.size + "px";
    this.flowerPetalDiv.style.borderRadius = "50%";
    this.flowerPetalDiv.style.background = `rgb(${this.centreColor.r},${this.centreColor.g},${this.centreColor.b})`;
    this.flowerPetalDiv.style.left = this.x - this.size / 2 + "px";
    this.flowerPetalDiv.style.top = this.y - this.stemLength - this.size / 2 + "px";
    this.flowerPetalDiv.style.borderWidth = this.petalThickness + "px";
    this.flowerPetalDiv.style.borderStyle = "solid";
    this.flowerPetalDiv.style.borderColor = `rgb(${this.petalColor.r},${this.petalColor.g},${this.petalColor.b})`;

    document.getElementsByClassName("grass")[0].appendChild(this.flowerPetalDiv);
  }
}

window.onload = function () {
  // Garden object
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

    // Sun inside sky
    garden.sun.sunDiv.classList.add("sun");
    garden.sun.sunDiv.style.background = `rgb(${garden.sun.sunColor.r},${garden.sun.sunColor.g},${garden.sun.sunColor.b})`;
    garden.sky.skyDiv.appendChild(garden.sun.sunDiv);

    // Grass
    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r},${garden.grass.grassColor.g},${garden.grass.grassColor.b})`;
    document.body.appendChild(garden.grass.grassDiv);
  }

  // Render the garden
  createAndRenderTheGarden();

  // Create and render flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    let flower = new Flower();
    garden.flowers.push(flower);
    flower.renderFlower();
  }
};
