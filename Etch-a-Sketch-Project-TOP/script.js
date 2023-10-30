const SetGridButton = document.querySelector('.setGrid')
const container = document.querySelector('.container')
const board = document.querySelector('.board')

function createBoard(size) {
  board.style.gridTemplateRows = repeat(size, 1);
  board.style.gridTemplateColumns = repeat(size, 1);
}



