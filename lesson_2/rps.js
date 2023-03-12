const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];

const winningConditions = {
  rock: ['scissors', 'lizard', 'sc', 'l'],
  paper: ['rock', 'spock', 'r', 'sp'],
  scissors: ['paper', 'lizard', 'p', 'l'],
  lizard: ['paper', 'spock', 'p', 'sp'],
  spock: ['rock', 'scissors', 'r', 'sc'],
  r: ['scissors', 'lizard', 'sc', 'l'],
  p: ['rock', 'spock', 'r', 'sp'],
  sc: ['paper', 'lizard', 'p', 'l'],
  l: ['paper', 'spock', 'p', 'sp'],
  sp: ['rock', 'scissors', 'r', 'sc']
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner (choice, computerChoice) {
  prompt(`You chose ${choice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`);
  console.log('\n');
  if (winningConditions[choice].includes(computerChoice)) {
    prompt("You win!!");
  } else if (winningConditions[computerChoice].includes(choice)) {
    prompt("Computer won!!");
  } else {
    prompt("It's a tie!!");
  }
}

let playerScore = 0;
let computerScore = 0;

function incrementScore(choice, computerChoice) {
  if (winningConditions[choice].includes(computerChoice)) {
    prompt(`You: ${playerScore += 1}`);
    prompt(`Computer: ${computerScore}`);
  } else if (winningConditions[computerChoice].includes(choice)) {
    prompt(`You: ${playerScore}`);
    prompt(`Computer: ${computerScore += 1}`);
  } else {
    prompt(`You: ${playerScore}`);
    prompt(`Computer: ${computerScore}`);
  }
}

function grandChamp() {
  if (playerScore === 2) {
    prompt("You are almost the Champ don't mess up...");
  } else if (playerScore === 3) {
    prompt("You are the GRAND CHAMPION of a pointless game, CONGRATULATION!!!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 3) {
    prompt("The computer is the GRAND CHAMPION!!!");
    playerScore = 0;
    computerScore = 0;
  }
}

// PROGRAM BEGINS

while (true) {
  console.clear();

  prompt(`Choose one: ${VALID_CHOICES.join(', ').slice(0, 36)}. Or abbriviate: ${VALID_CHOICES.join(', ').slice(38)}.`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
  }


  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  console.log('\n');

  incrementScore(choice, computerChoice);

  console.log('\n');

  grandChamp();

  console.log('\n');

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
// PROGRAM ENDS