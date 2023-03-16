let munstersDescription = "The Munsters are creepy and spooky.";

function flip(str) {
  let array = str.split('');
  let flippedArray = [];
  let idx = 0;
  while (idx < array.length) {
    if (array[idx] === array[idx].toUpperCase()) {
      flippedArray.push(array[idx].toLowerCase());
      idx++;
    } else if (array[idx] === array[idx].toLowerCase()) {
      flippedArray.push(array[idx].toUpperCase());
      idx++;
    } else {
      flippedArray.push(array[idx]);
      idx++;
    }
  }
  return flippedArray.join('');
}

console.log(flip(munstersDescription));