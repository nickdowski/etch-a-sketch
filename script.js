//Create 256 squares
const squares = document.getElementById('square-grid');

for (let i = 0; i < 256; i++) {
    const square = document.createElement ('div');
    square.classList.add('square');
    
    //Change color of square on hover
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'black';
    })
    
    squares.appendChild(square);
}



