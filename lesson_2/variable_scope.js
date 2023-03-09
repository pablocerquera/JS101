//num returns 10 because num inside and outside the function is being referenced
// let num = 5;

// function myFunc() {
//   num = 10;
// }

// myFunc();
// console.log(num);

//num prints 5 when the function is called then changes num to reference 10
//num then prints 10.

// let num = 5;

// function myFunc() {
//   console.log(num);
//   num = 10;
// }

// myFunc();
// console.log(num);

/*num would be 5 since num is initialized in the function we log 5 to the
 console. */

// let num = 5;

// function myFunc() {
//   let num = 10;
// }

// myFunc();
// console.log(num);

/* we do return anything we get a reference error.*/

// let num = 5;

// function myFunc() {
//   console.log(num);
//   let num = 10;
// }

// myFunc();
// console.log(num);

// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);