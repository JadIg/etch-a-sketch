// from gridSize we will use the value to create a grid of divs
const gridSize = 16; // Default grid size
const grid = document.querySelector('.grid');
// Function to create the grid
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'; // Change color on hover
        });
        grid.appendChild(div);
        grid.style.width = size *20 + 'px'; // Adjust grid width based on size
        grid.style.height = size *20 + 'px'; // Adjust grid height based on size
    }
}  
// Initial grid creation
createGrid(gridSize);
// Event listener for the button to change grid size
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (1-100):');
    const size = parseInt(newSize, 10);
    // remove existing grid items
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});
