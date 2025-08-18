// from gridSize we will use the value to create a grid of divs
const gridSize = 16; // Default grid size
const grid = document.querySelector('.grid');
const color = document.querySelector('#color'); // Color input for changing grid item color


// Function to create the grid
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = color.value; // Change background color on hover
        });
        grid.appendChild(div);
        grid.style.width = size *20 + 'px'; // Adjust grid width based on size
        grid.style.height = size *20 + 'px'; // Adjust grid height based on size
    }
}  


// Initial grid creation
createGrid(gridSize);


// Event listener for the button to change grid size
const gridSizeButton = document.querySelector('#setGridSize');
gridSizeButton.addEventListener('click', () => { 
    const newSize = document.querySelector('#gridSize').value; // Get the new grid size from input
    if (newSize < 1 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    grid.innerHTML = ''; // Clear the existing grid
    createGrid(newSize); // Create a new grid with the new size
});
// Event listener for the clear button to reset the grid
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white'; // Reset background color to white
    });
});

// Event

const randomColorButton = document.querySelector('#randomColor');
randomColorButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
            item.style.backgroundColor = randomColor; // Change background color to random color on hover
        });
    });
})
