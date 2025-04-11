// Main Application Controller
class IrisVisualizer {
    constructor() {
        // Data storage
        this.irises = [];                   // Raw dataset
        this.irisesWithColors = [];         // Data + colors (map())
        this.filteredIrises = [];           // Filtered data (filter())
        this.irisesWithColorsSorted = [];   // Sorted data (toSorted())
        
        // Visualization
        this.irisInstances = [];            // Flower objects
        this.isAnimating = false;           // Animation state
        
        // DOM elements
        this.canvas = document.getElementById('irisCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.statsElement = document.getElementById('stats');
        
        // Initialize
        this.loadData();
        this.setupEventListeners();
    }

    // [REQUIREMENT: Fetch API] Load JSON data
    async loadData() {
        try {
            const response = await fetch('data/iris.json');
            this.irises = await response.json();
            this.processData();
            this.createVisualization();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    // Process data using array methods
    processData() {
        const possibleColors = ["#5d3fd3","#a73fd3","#d33fb5","#d35d3f","#d3a73f"];

        // [REQUIREMENT: map()] Add random colors
        this.irisesWithColors = this.irises.map(iris => ({
            ...iris,
            color: possibleColors[Math.floor(Math.random() * possibleColors.length)]
        }));

        // [REQUIREMENT: filter()] Remove sepalWidth >= 4
        this.filteredIrises = this.irisesWithColors.filter(iris => iris.sepalWidth < 4);

        // [REQUIREMENT: reduce()] Average petal length
        const avgPetalLength = this.irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0) 
                             / this.irisesWithColors.length;

        // [REQUIREMENT: find()] First petalWidth > 1.0
        const widePetalIris = this.irisesWithColors.find(iris => iris.petalWidth > 1.0);

        // [REQUIREMENT: some()] Check for extremes
        const hasHugePetal = this.irisesWithColors.some(iris => iris.petalLength > 10);
        const hasExactSize = this.irisesWithColors.some(iris => iris.petalLength === 4.2);

        // [REQUIREMENT: every()] Validate ranges
        const allPetalsNarrow = this.irisesWithColors.every(iris => iris.petalWidth < 3);
        const allSepalsWide = this.irisesWithColors.every(iris => iris.sepalWidth > 1.2);

        // [REQUIREMENT: toSorted()] Sort by petalWidth
        this.irisesWithColorsSorted = this.irisesWithColors.toSorted((a,b) => a.petalWidth - b.petalWidth);

        // Display stats
        this.displayStats({
            avgPetalLength: avgPetalLength.toFixed(2),
            widePetalFound: widePetalIris ? `Width: ${widePetalIris.petalWidth}` : 'None',
            hasHugePetal,
            hasExactSize,
            allPetalsNarrow,
            allSepalsWide
        });
    }

    displayStats(stats) {
        this.statsElement.innerHTML = `
            <p>Avg Petal Length: <b>${stats.avgPetalLength} cm</b></p>
            <p>First Petal Width > 1.0: <b>${stats.widePetalFound}</b></p>
            <p>Has Huge Petal (>10cm): <b>${stats.hasHugePetal}</b></p>
            <p>Has Exact 4.2cm Petal: <b>${stats.hasExactSize}</b></p>
            <p>All Petals < 3cm Wide: <b>${stats.allPetalsNarrow}</b></p>
            <p>All Sepals > 1.2cm Wide: <b>${stats.allSepalsWide}</b></p>
        `;
    }

    // Create visualization
    createVisualization() {
        this.irisInstances = this.irisesWithColorsSorted.map(iris => new Iris(iris));
        this.toggleAnimation();
    }

    setupEventListeners() {
        document.getElementById('animateBtn').addEventListener('click', () => this.toggleAnimation());

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            this.irisInstances.forEach(iris => {
                iris.isHovered = iris.checkHover(x, y);
            });
        });
    }

    toggleAnimation() {
        this.isAnimating = !this.isAnimating;
        if (this.isAnimating) this.animate();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.irisInstances.forEach((iris, i) => {
            const x = 50 + (i % 20) * 45;
            const y = 50 + Math.floor(i / 20) * 100;
            iris.draw(this.ctx, x, y, this.isAnimating);
        });

        if (this.isAnimating) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

// [REQUIREMENT: Iris class]
class Iris {
    constructor(data) {
        this.sepalLength = data.sepalLength;
        this.sepalWidth = data.sepalWidth;
        this.petalLength = data.petalLength;
        this.petalWidth = data.petalWidth;
        this.species = data.species;
        this.color = data.color;

        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.isHovered = false;

        this.x = 0;
        this.y = 0;
    }

    draw(ctx, x, y, animate) {
        // Save current position for hover detection
        this.x = x;
        this.y = y;

        ctx.save();
        ctx.translate(x, y);

        if (animate) ctx.rotate(this.angle += this.rotationSpeed);

        // Sepals (green base)
        ctx.fillStyle = '#2e8b57';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.sepalWidth * 3, this.sepalLength * 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Petals
        ctx.fillStyle = this.isHovered ? this.lightenColor(this.color, 20) : this.color;
        for (let i = 0; i < 4; i++) {
            ctx.save();
            ctx.rotate(i * Math.PI / 2);
            ctx.beginPath();
            ctx.ellipse(0, -10, this.petalWidth * 4, this.petalLength * 3, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Center
        ctx.fillStyle = this.getCenterColor();
        ctx.beginPath();
        ctx.arc(0, 0, this.petalWidth * 2, 0, Math.PI * 2);
        ctx.fill();

        if (this.isHovered) {
            ctx.fillStyle = '#333';
            ctx.font = '12px Roboto';
            ctx.textAlign = 'center';
            ctx.fillText(`${this.species}`, 0, 40);
            ctx.fillText(`Petal: ${this.petalLength.toFixed(1)}cm`, 0, 55);
        }

        ctx.restore();
    }

    checkHover(mouseX, mouseY) {
        const distance = Math.sqrt(Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2));
        return distance < 30;
    }

    getCenterColor() {
        return {
            setosa: '#ffd700',
            versicolor: '#ff6347',
            virginica: '#9370db'
        }[this.species] || '#ccc';
    }

    lightenColor(color, percent) {
        let num = parseInt(color.slice(1), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return "#" + (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1);
    }
}

// Initialize
window.onload = () => new IrisVisualizer();
