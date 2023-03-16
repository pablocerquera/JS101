let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1, string.length).toLowerCase();
}

console.log(capitalize(munstersDescription));