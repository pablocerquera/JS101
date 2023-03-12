// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

/* ^^log 'red', 'green', 'blue', 'yellow' because color is initialized
 on line 1 and when we pass colors as an argument to the updateColors
 function so the colors param and the colors declared on line 2 both
 point to the same array and when the param is changed in the function
 we cange the same array that colors is pointing to so we print out the
 pushed 'yellow' value as well.*/

// let color = 'yellow';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

/* ^^logs 'red', 'green', 'blue', undefined this happens because
updateColors has a param 'color' and it is not assigned to
anything and so when the function pushes the param color it pushes
undefined into the array.*/

// let color1 = 'purple';
// let color2 = 'pink';
// let colors = ['red', 'green', 'blue'];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);

/* ^^logs ['red', 'green', 'blue', 'purple', 'pink'] because we
put the array in as the first argument and the and the variables
assigned to the different colors as the second argument*/

// let color = 'purple';
// let colors = ['red', 'green', 'blue'];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);

/* ^^logs ['red', 'green', 'blue'] because color is reassigned in the
addColor function and it is assigned to the value that we pop off the array.
newColor is initiated and declared on line 62 and assigned to the function
removeColor(colors). the function add color is called and colors and color
are passed as arguments and because they are all pointing to the same array
we added blue back to the array.*/

// function capitalize() {
//   return word[0].toUpperCase() + word.slice(1);
// }

// function exclaim() {
//   return word += '!!!';
// }

// let word = 'hello';
// let capitalizedWord = capitalize(word);
// let exclaimedWord = exclaim(capitalizedWord);

// console.log(word);
// console.log(capitalizedWord);
// console.log(exclaimedWord);

/* ^^logs hello!!! Hello and hello!!! this is because all the functions are
referencing the global variable word and is initialized and declared on
line 11. so when every function is called they not using the argument passed
in the body of the function the are using the global variable word.*/

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

/* ^^logs 'hello' 'Hello' 'Hello!!!' this is because the functions are using
param and when we pass our arguments through the functions they are being
reassigned to the new variables capitalizedWord and exclaimedWord.*/