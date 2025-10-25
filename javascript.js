// Button logic
const resizeButton = document.getElementById("resize-btn");

resizeButton.addEventListener("click", function () {
    const userInput = prompt("Enter new grid size (1-100):");

    // Validate input > user cancelled, do nothing
    if (userInput === null) {
        return;
    }

    // Validate input > user typed something
    const newSize = parseInt(userInput);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100");
        return; // Exit if invalid
    }

    // Clear existing grid
    const container = document.querySelector(".container");
    container.innerHTML = '';

    // Create new grid with user's size
    createGrid(newSize);
});



// Random color logic
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}



// Grid logic
function createGrid(gridSize) {
    const container = document.querySelector(".container");

    // Calculate the size each square should be
    const containerSize = 960;
    const squareSize = containerSize / gridSize;

    // Nested loops to create the grid
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            // Create new div element
            const gridSquare = document.createElement('div');

            // Style it
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;

            // Add hover functionality to each box
            gridSquare.addEventListener("mouseenter", function () {
                if (!this.classList.contains("drawn")) {
                    this.style.backgroundColor = getRandomColor(); // Random color!
                    // Mark as "drawn" on / Works as a tag for future reference
                    this.classList.add("drawn");
                }
            });

            // Optional: add click to "erase" functionality
            gridSquare.addEventListener('click', function () {
                this.style.backgroundColor = 'white';
                this.classList.remove('drawn');
            });

            // Append to the container
            container.appendChild(gridSquare);
        }
    }
}

// Create initial 16×16 grid
createGrid(16);