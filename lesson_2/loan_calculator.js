// gather the loan amount
// gather the APR
// gather the loan duration in years and months
// return monthly payments

const readline = require('readline-sync');
const numberCheck = /\d/;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidName(name) {
  return name.trimStart() === '' || name.length <= 2 || numberCheck.test(name);
}

function invalidLoan(num) {
  return num.trimStart() === '' || Number(num) <= 0 || Number.isNaN(Number(num));
}

function invalidnInterest(num) {
  return num.trimStart() === '' || Number(num) <= 0 || Number.isNaN(Number(num));
}

function invalidDuration(dur) {
  return dur.trimStart() === '' || Number(dur) < 0 || Number.isNaN(Number(dur));
}

// START PROGRAM

console.clear();

prompt('Welcome to my loan calculator. Please enter your name.');
let user = readline.question();

while (invalidName(user)) {
  prompt('Please enter a valid name.');
  user = readline.question();
}
// User gives me the total amount
while (true) {
  prompt('Enter the loan amount.');
  let loanAmount = readline.question();

  while (invalidLoan(loanAmount)) {
    prompt('Please enter a valid number.');
    loanAmount = readline.question();
  }
  // User gives annual percentage rate.
  prompt('Enter the Annual Percentage Rate.');
  prompt('Example: 5 for 5% or 2.5 for 2.5%');
  let apr = readline.question();

  while (invalidnInterest(apr)) {
    prompt('Please enter the interest rate.');
    apr = readline.question();
  }


  // User gives me the duration of the loan.
  prompt('How many years is the duration of this loan. We will prompt for a month entry.');
  let durationYears = readline.question();

  while (invalidDuration(durationYears)) {
    prompt('Please enter a valid number.');
    durationYears = readline.question();
  }

  prompt('Enter amount months in addition to the years stated. If not applicable please enter 0.');
  let durationMonths = readline.question();

  while (invalidDuration(durationMonths)) {
    prompt('Please enter addition months or 0 to continue.');
    durationMonths = readline.question();
  }

  // This is all the calculations

  let durationYearsToMonths = parseFloat(durationYears) * 12;
  let durationTotal = durationYearsToMonths + Number(durationMonths);
  let monthlyInterestRate = (parseFloat(apr) / 12) / 100;

  let loan = Number(loanAmount);
  let rate = monthlyInterestRate;
  let mon = durationTotal;

  // The formula to calculate monthly payments
  let monthlyPayment = loan * (rate / (1 - Math.pow((1 + rate), (-mon))));

  console.log('\n');
  // The output to user
  prompt(`Amount of payments: ${durationTotal}`);
  prompt(`Monthly interest rate: ${monthlyInterestRate}.`);
  prompt(`Monthly payments: $${monthlyPayment.toFixed(2)}.`);

  console.log('\n');
  prompt('Would you like another calculation?');
  let answer = readline.question().toLowerCase();

  while (!['y', 'n', 'yes', 'no'].includes(answer)) {
    prompt('Please enter yes or no.');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'y' || answer === 'yes') {
    continue;
  } else if (answer === 'n' || answer === 'no') {
    console.clear();
    prompt(`Amount of payments: ${durationTotal}`);
    prompt(`Monthly interest rate: ${monthlyInterestRate}.`);
    prompt(`Monthly payments: $${monthlyPayment.toFixed(2)}.`);
    console.log('\n');
    prompt(`${user}, thank you for using my loan calculator. Goodbye!`);
    break;
  }
}
// END PROGRAM