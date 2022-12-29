const container = document.querySelector(".container");

function initializer(){
  for (let x = 0; x < 256; x++) {
    const grid_square = document.createElement('div')
    grid_square.classList.add("grid_square");
    container.appendChild(grid_square);
  }
}

function addHover() {
  const grid_squares = document.querySelectorAll(".grid_square");
  grid_squares.forEach(grid_square => grid_square.addEventListener('mousemove', function(e){
  grid_square.classList.add('hovered');
}));
}

function changeGrid() {
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }

  let r = document.querySelector(':root');
  let squares_per_side = prompt("How many squares per side do you want?");
  r.style.setProperty('--num-squares', squares_per_side);
  

  for (let x = 0; x < squares_per_side*squares_per_side; x++) {
    const grid_square = document.createElement('div')
    grid_square.classList.add("grid_square");
    container.appendChild(grid_square);
  
  addHover();
}
}

initializer();
addHover();

//cry