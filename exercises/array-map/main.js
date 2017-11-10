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

// function stringItUp(arr){  //using for loop
//   for (i = 0; i < arr.length; i++){
//     stringedArray.push(arr[i].toString());
//   } console.log(stringedArray);
// }

function stringItUp(arr){  //using map method
  arr.map(function(num){
    stringedArray.push(num.toString());
  })
    console.log(stringedArray);
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
//
// function thereIsNoSpoon(arr){
//   var checkID = function(){
//     if (person.age < 18) {
//       return " is under age!!";
//     } else {
//       return " can go to the Matrix";
//   }
//     return arr.map(function(person){
//       return (person.name + checkID)
//       console.log(checkID);
//       });
//     }
// }
//
// console.log(thereIsNoSpoon([
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
