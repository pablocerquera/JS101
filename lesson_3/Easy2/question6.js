let nested  = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let unnested = [];
nested.forEach((str) => {
  unnested = unnested.concat(str);
});

console.log(unnested);