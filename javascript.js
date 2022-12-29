

const container = document.querySelector(".container");
console.log(container);


for (let x = 0; x < 16*16; x++) {
    const grid_square = document.createElement('div')
    grid_square.classList.add("grid_square");
    container.appendChild(grid_square);
}

const grid_squares = document.querySelectorAll("#grid_square");


document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(myDiv);
    if (hovered !== checkHover.hovered) {
      console.log(hovered ? 'hovered' : 'not hovered');
      checkHover.hovered = hovered;
    }
  });



// document.addEventListener('mousemove', function checkHover() {
//     c
// })