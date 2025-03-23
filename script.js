const squareGrid = document.getElementById('square-grid');
const resetButton = document.getElementById('reset');

function createGrid(size) {
    squareGrid.innerHTML = ''; // Clear the grid

    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

        squareGrid.appendChild(square);
    }
}

// Default grid
createGrid(16);

// Reset grid on button click
resetButton.addEventListener('click', () => {
    let size = prompt("Enter number of squares per side (max 100):");
    size = parseInt(size);

    if (Number.isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(size);
    }
});





