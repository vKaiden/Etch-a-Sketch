const element = document.querySelector('#element');
const para = document.querySelector('p');
para.textContent = "Hey I'm Red"
para.style.color = 'red';

const header3 = document.createElement('h3');

header3.innerText = "I'm a blue h3!";
document.body.append(header3);
header3.style.color = 'blue';

let div = document.createElement('div');
document.body.append(div);
div.style.cssText = 'border: 20px solid black; padding: 30px; background-color: pink;';

const h1 = document.createElement('h1');

h1.innerText = "I'm in a div";
div.appendChild(h1)

const paraElement = document.createElement('p')
paraElement.innerText = 'ME TOO';
div.appendChild(paraElement);
