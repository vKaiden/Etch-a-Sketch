const SetGridButton = document.querySelector('.popup')
const container = document.querySelector('.container')
const board = document.querySelector('.board')
const randomBtn = document.querySelector('.randomBtn');
const resetBtn = document.querySelector('.resetBtn')

function createBoard(size) {
  board.style.gridTemplateRows = repeat(size, 1);
  board.style.gridTemplateColumns = repeat(size, 1);
}



