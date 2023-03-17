const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];

const WINNING_CONDITIONS = {
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

// The displayWinner function can be further divided into something
// like reportMoves and displayWinner.

function displayWinner (choice, computerChoice) {
  prompt(`You chose ${choice.toUpperCase()}. The computer chose ${computerChoice.toUpperCase()}.`);
  console.log('\n');
  if (WINNING_CONDITIONS[choice].includes(computerChoice)) {
    prompt("You win!!");
  } else if (WINNING_CONDITIONS[computerChoice].includes(choice)) {
    prompt("Computer won!!");
  } else {
    prompt("It's a tie!!");
  }
}
/* Moving global state like player scores to a local scope can be a
challenge to do. Try it on your own first and see what sort of
solutions you can come up with, but feel free to reach out for
suggestions if you decide to update your program and get really stuck. */

let playerScore = 0;
let computerScore = 0;

/* The incrementScore function has a couple of improvements that
can be made. The first is that it can be further divided into
something like updateScores and reportScores. The second change is
that the expressions like prompt(You: ${playerScore += 1}); are
doing too much. This line is incrementing the player score and
printing at the same time.*/

function incrementScore(choice, computerChoice) {
  if (WINNING_CONDITIONS[choice].includes(computerChoice)) {
    prompt(`You: ${playerScore += 1}`);
    prompt(`Computer: ${computerScore}`);
  } else if (WINNING_CONDITIONS[computerChoice].includes(choice)) {
    prompt(`You: ${playerScore}`);
    prompt(`Computer: ${computerScore += 1}`);
  } else {
    prompt(`You: ${playerScore}`);
    prompt(`Computer: ${computerScore}`);
  }
}

// The grandChamp function can also be divided - into something like
// reportGrandChamp and resetScores.

function grandChamp() {
  if (playerScore === 2) {
    prompt("You are almost the Champ don't mess up...");
  } else if (playerScore === 3) {
    prompt("You are the GRAND CHAMPION of a pointless game, CONGRATULATIONS!!!");
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

  // Validate the users answer better.

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    console.clear();
    console.log('\n');
    prompt("Thank you for playing my game.");
    console.log('\n');
    break;
  }
}
// PROGRAM ENDS