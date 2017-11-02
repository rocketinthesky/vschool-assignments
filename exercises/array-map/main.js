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


// function stringItUp(arr){  //using for loop
//   for (i = 0; i < arr.length; i++){
//     stringedArray.push(arr[i].toString());
//   } console.log(stringedArray);
// }

function stringItUp(arr){  //using map method
  console.log(arr);
  var stringedArray = [];
  return arr.map(function(num){
    return stringedArray.push(num.toString());
  })

}
stringItUp(firstArray);

// function namesOnly(arr){
//   return arr.map(function(person){
//     return (`<h1>${person.name}</h1><h2>${person.age}</h2>`);
//   })
// }
//
// console.log(namesOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]));
