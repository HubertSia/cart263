// Main application class
class IrisVisualizer {
    constructor() {
        this.irises = [];
        this.irisesWithColors = [];
        this.filteredIrises = [];
        this.irisesWithColorsSorted = [];
        this.irisInstances = [];
        this.animationId = null;
        this.isAnimating = false;
        this.canvas = document.getElementById('irisCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.statsElement = document.getElementById('stats');
        
        // Initialize
        this.loadData();
        this.setupEventListeners();
    }

    // Load data from iris.json
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
        // 1. map() - Add random colors
        const possibleColors = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
        this.irisesWithColors = this.irises.map(iris => ({
            ...iris,
            color: possibleColors[Math.floor(Math.random() * possibleColors.length)]
        }));

        // 2. filter() - Sepal width < 4
        this.filteredIrises = this.irisesWithColors.filter(iris => iris.sepalWidth < 4);

        // 3. reduce() - Average petal length
        const totalPetalLength = this.irisesWithColors.reduce((acc, iris) => acc + iris.petalLength, 0);
        const averagePetalLength = totalPetalLength / this.irisesWithColors.length;

        // 4. find() - Petal width > 1.0
        const foundIris = this.irisesWithColors.find(iris => iris.petalWidth > 1.0);

        // 5. some() checks
        const hasLongPetal = this.irisesWithColors.some(iris => iris.petalLength > 10);
        const hasExactLength = this.irisesWithColors.some(iris => iris.petalLength === 4.2);

        // 6. every() checks
        const allPetalNarrow = this.irisesWithColors.every(iris => iris.petalWidth < 3);
        const allSepalWide = this.irisesWithColors.every(iris => iris.sepalWidth > 1.2);

        // 7. toSorted() by petal width
        this.irisesWithColorsSorted = this.irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);

        // Display stats
        this.displayStats({
            totalIrises: this.irises.length,
            filteredCount: this.filteredIrises.length,
            averagePetalLength: averagePetalLength.toFixed(2),
            foundIris: foundIris ? `Found iris with petalWidth ${foundIris.petalWidth}` : 'None found',
            hasLongPetal,
            hasExactLength,
            allPetalNarrow,
            allSepalWide
        });
    }

    // Display statistics
    displayStats(stats) {
        this.statsElement.innerHTML = `
            <strong>Statistics:</strong><br>
            Total irises: ${stats.totalIrises}<br>
            Filtered (sepalWidth < 4): ${stats.filteredCount}<br>
            Avg petal length: ${stats.averagePetalLength}<br>
            Iris with petalWidth > 1.0: ${stats.foundIris}<br>
            Has petalLength > 10: ${stats.hasLongPetal ? 'Yes' : 'No'}<br>
            Has petalLength = 4.2: ${stats.hasExactLength ? 'Yes' : 'No'}<br>
            All petalWidths < 3: ${stats.allPetalNarrow ? 'Yes' : 'No'}<br>
            All sepalWidths > 1.2: ${stats.allSepalWide ? 'Yes' : 'No'}
        `;
    }

    // Create visualization
    createVisualization() {
        // Create Iris instances
        this.irisInstances = this.irisesWithColorsSorted.map(iris => new Iris(iris));
        
        // Start animation
        this.toggleAnimation();
    }

    // Setup event listeners
    setupEventListeners() {
        document.getElementById('animateBtn').addEventListener('click', () => this.toggleAnimation());
        
        // Add hover effect
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.irisInstances.forEach(iris => {
                iris.isHovered = iris.checkHover(x, y);
            });
        });
    }

    // Toggle animation
    toggleAnimation() {
        this.isAnimating = !this.isAnimating;
        if (this.isAnimating) {
            this.animate();
        } else {
            cancelAnimationFrame(this.animationId);
        }
    }

    // Animation loop
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw each iris
        this.irisInstances.forEach((iris, i) => {
            const x = 50 + (i % 25) * 35;
            const y = 100 + Math.floor(i / 25) * 120;
            iris.draw(this.ctx, x, y, this.isAnimating);
        });
        
        if (this.isAnimating) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }
}

// Iris class for visualization
class Iris {
    constructor(data) {
        this.sepalLength = data.sepalLength;
        this.sepalWidth = data.sepalWidth;
        this.petalLength = data.petalLength;
        this.petalWidth = data.petalWidth;
        this.species = data.species;
        this.color = data.color;
        this.isHovered = false;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
    }

    // Draw the iris
    draw(ctx, x, y, animate = false) {
        ctx.save();
        ctx.translate(x, y);
        
        if (animate) {
            this.angle += this.rotationSpeed;
            ctx.rotate(this.angle);
        }
        
        // Draw sepal (green part)
        ctx.fillStyle = '#2e8b57';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.sepalWidth * 3, this.sepalLength * 2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw petals (colored part)
        ctx.fillStyle = this.isHovered ? this.lightenColor(this.color, 20) : this.color;
        
        // Draw 4 petals around the center
        for (let i = 0; i < 4; i++) {
            ctx.save();
            ctx.rotate(i * Math.PI / 2);
            ctx.beginPath();
            ctx.ellipse(0, -10, this.petalWidth * 4, this.petalLength * 3, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        
        // Draw center (based on species)
        ctx.fillStyle = this.getCenterColor();
        ctx.beginPath();
        ctx.arc(0, 0, this.petalWidth * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Show info on hover
        if (this.isHovered) {
            ctx.fillStyle = '#333';
            ctx.font = '12px Roboto';
            ctx.textAlign = 'center';
            ctx.fillText(`${this.species}`, 0, 40);
            ctx.fillText(`Petal: ${this.petalLength.toFixed(1)}cm`, 0, 55);
        }
        
        ctx.restore();
    }

    // Check if mouse is hovering over this iris
    checkHover(mouseX, mouseY) {
        // Simple distance check (could be more precise)
        const x = 50 + (this.index % 25) * 35;
        const y = 100 + Math.floor(this.index / 25) * 120;
        const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
        return distance < 30;
    }

    // Get center color based on species
    getCenterColor() {
        switch(this.species) {
            case 'setosa': return '#ffd700'; // gold
            case 'versicolor': return '#ff6347'; // tomato
            case 'virginica': return '#9370db'; // medium purple
            default: return '#000';
        }
    }

    // Lighten a color
    lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return `#${(
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1)}`;
    }
}

// Initialize when window loads
window.onload = () => {
    new IrisVisualizer();
};