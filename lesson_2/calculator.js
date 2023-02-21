//ask the user for the first number
//ask the user for the second number
//ask the user for the operation
//perform the operation
//display the result of the operation
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const LANGUAGE = 'en';

//function to reference my JSON file.
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key, output) { //I needed to dynamiclly be able to change the string output
  let message = messages(key, LANGUAGE);
  if (output !== undefined ) {
    console.log(message.replace('{}', output));
  } else {
    console.log(`=> ${message}`);
  }
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function invalidName(name) {
  return name.trimStart() === '' || name.length <= 2;
}
// function invalidAnswer(ans) {
//   return ans.trimStart().toLowerCase()  !== 'y' || 's' || 'n';
// }

//start program


console.clear();


prompt('welcome');
let user =  readline.question();
while (invalidName(user)) {
  prompt('validName');
  user =  readline.question();
}
//while loop to repeat calculator till user wants to leave
while (true) {
  prompt('num1');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('num2');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operator');
  let operation = readline.question();
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalidOperator");
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1' :
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt('result', output);

  prompt('calculateAgain');
  let answer = readline.question();


  if (answer === 'y') {
    continue;
  } else if (answer === 's') {
    continue;
  } else if (answer === 'n') {
    break;
  } else {
    break;
  }
}