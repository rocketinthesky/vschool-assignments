// Write a function called antiCaps which accepts a string and returns a string. The purpose of the function is to invert the capitalization of each letter in a string. For example:
//
// antiCaps('Hello') // hELLO
// antiCaps('racEcar') // RACeCAR
// antiCaps('bAnAnA') // BaNaNa
// Here is a helper function that will return true if the letter is uppercase, and false if the letter is lowercase:
//
// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }

newString = [];
function antiCaps(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      newString.push(str.charAt(i).toLowerCase());
    } else {
      newString.push(str.charAt(i).toUpperCase());
    }
  } newString = newString.join("");
  console.log(newString);
}

antiCaps('RACeCAR');
