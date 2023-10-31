
const SetGridButton = document.querySelector('.popup')
const container = document.querySelector('.container')
let board = document.querySelector('.board')
const randomBtn = document.querySelector('.randomBtn');
const resetBtn = document.querySelector('.resetBtn')

function createBoard(size) {
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

let numDivs = size * size;

for(let i = 0; i < numDivs; i++) {
 let div = document.createElement('div');
  div.style.backgroundColor = "yellow"
  board.insertAdjacentElement("beforeend", div)
}

}