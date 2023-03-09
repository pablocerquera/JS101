// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
// }

// let myWord = 'Hello';
// changeMyWord(myWord);
// console.log(myWord);

/* ^logs 'Hello' twice and it is because a new variable is
declared inside the function */

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = 'Hello';
// myWord = changeMyWord(myWord);
// console.log(myWord);

/* ^log 'Hello' and then logs 'HELLO' this is because on line 14 the
function logs the param the up cases the variable declared and
returns the word. we then reassigne myWord to the function call
the console log the myWord. */

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = 'Hi';
// }

// let myWords = ['Hello', 'Goodbye'];
// changeMyWords(myWords);
// console.log(myWords);

/* ^logs 'Hello', 'Goodbye' and then logs 'Hi', 'Goodbye'
because both the param on the function and myWords are
regerencing the same array. When the funcionn makes a change
to the array the myWords see the change. */

function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/* ^logs 'Hello', 'Goodbye' twice because we initialize a
 new variable to a new array inside the function. */