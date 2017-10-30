// 1) Make an array of numbers that are doubles of the first array
//
// function doubleNumbers(arr){
//
// }
//
// doubleNumbers([2, 5, 100]); // [4, 10, 200]

// var firstArray = [2, 5, 100];
// var doubledArray = [];
//
// function doubleNumbers(arr){
//   doubledArray = firstArray.map(function(arr) {
//     return arr * 2;
//   });
//   console.log(doubledArray);
// }
//
// doubleNumbers(firstArray);

var firstArray = [2, 5, 100];
var stringedArray = [];

function stringItUp(arr){
  stringedArray = firstArray.map(function(arr) {
    arr.toString("");
  })
    // return stringedArray;
  console.log(stringedArray);
}

stringItUp(firstArray);
