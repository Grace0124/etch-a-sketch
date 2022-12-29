

const container = document.querySelector(".container");
console.log(container);


for (let x = 0; x < 16*16; x++) {
    const grid_square = document.createElement('div')
    grid_square.classList.add("grid_square");
    container.appendChild(grid_square);
}