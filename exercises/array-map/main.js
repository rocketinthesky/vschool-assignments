// 1) Make an array of numbers that are doubles of the first array
//
// function doubleNumbers(arr){
//
// }
//
// doubleNumbers([2, 5, 100]); // [4, 10, 200]

var firstArray = [2, 5, 100];
var doubledArray = [];

function doubleNumbers(arr){
  return doubledArray.map(arr * 2);
}

doubleNumbers(firstArray);
