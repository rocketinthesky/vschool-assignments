var add = function (a, b) {
  return a + b === 4;
}

var palindrome = function(str){
  return str.replace(/\W/g, '').split("").reverse().join("").toLowerCase() === str.replace(/\W/g, '').toLowerCase();
}

module.exports = {
  palindrome,
  add
};

// console.log(palindrome('star rats'));
