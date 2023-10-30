function switchStatement(ans) {
  let answer = "";
  switch (ans) {
  case 1:
    answer = "Point Guard";
    break;
  case 2:
    answer = "Shooting Guard";
    break;
  case 3:
    answer = "Small Forward";
    break;
  case 4:
    answer = "Power Forward";
    break;
  case 5:
    answer = "Center";
    break;
  default:
    answer = "Kaiden";
    break;


}
return answer;
}

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";
/* Messing with for loops */
for (const dog of cats) {
  myFavoriteCats += `${dog}, `;
}


for (let i = 1; i < 10; i++) {
  console.log(i);
}


const array = ["Greenie", "Kaiden", "Beatrice"];
  array.push("Meow Meow");

for (const arry of array) {
  console.log(arry);
}




