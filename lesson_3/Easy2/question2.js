let numbers = [1, 2, 3, 4, 5];
let revArray = [];

numbers.forEach((num) => {
  revArray.unshift(num);
});


console.log(revArray);
console.log(numbers);
