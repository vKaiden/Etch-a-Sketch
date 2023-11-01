let color = "black";
let click = true;

document.querySelector('body').addEventListener('click', function(e) {
if(e.target.tagName != 'BUTTON') {
  click = !click;
  let draw = document.querySelector('.draw')
  if(click) {
    draw.innerHTML = "Drawing is ON"
  } else {
   draw.innerHTML = "Drawing is PAUSED"
  }
}
})

let setGridButton = document.querySelector('.popup')
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
 div.addEventListener('mouseover', colorDiv)
  
 board.insertAdjacentElement("beforeend", div)
}
}

createBoard(16);

function getSize() {
  let input = prompt("How big do you want your board?")
  let message = document.querySelector('.message')
  if(input === "") {
    message.innerHTML = "You need to enter a number!"
  } else if(input < 0 || input > 100) {
    message.innerHTML = "The number must be from 1 to 100!"
  } else {
    message.innerHTML = "Now you can play!"
    return input
  }
}

setGridButton.addEventListener("click", function() {
  let size = getSize();
  createBoard(size);
})

function colorDiv() {
  if(click) {
if(color == "random") {
  this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
} else {
  this.style.backgroundColor = "black";
}
}}

function setColor(colorChoice) {
color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll('div')
  divs.forEach((div) => div.style.backgroundColor = 'white')
}