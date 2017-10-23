// // Preliminaries
// // Write a for loop that prints to the console the numbers 0 through 9.
//
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// // Write a for loop that prints to the console 9 through 0.
// for (i = 9; i >= 0; i--) {
//   console.log(i);
// }
// // Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
//
// // Bronse Medal
// // Write a for loop that will push the numbers 0 through 9 to an array.
// var array = [];
// for (i = 0; i < 10; i++) {
//   array.push(i);
//   console.log(array);
// }
//
// // Write a for loop that prints to the console only even numbers 0 through 100.
// for (i = 0; i <= 100; i+=2) {
//   console.log(i);
// }
//
// // Write a for loop that will push every other fruit to an array.
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 0; i < fruit.length; i++) {
//   if (i % 2 === 0) {
//     console.log(fruit[i]);
//   }
// }

// Silver Medal
// Write a loop that will print out all the names of the people of the people array
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// for (i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name);
// }
// // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// var occupations = [];
// for (i = 0; i < peopleArray.length; i++) {
//   occupations.push(peopleArray[i].name);
//   console.log(occupations);
// }
// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to an array starting with "Singer".
var everyOtherName = [];
var everyOtherOccupation = [];

for (i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    everyOtherName.push(peopleArray[i].name);
  } else {
    everyOtherOccupation.push(peopleArray[i].occupation);
  }
}

console.log(everyOtherName);
console.log(everyOtherOccupation);

// Gold Medal
// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

var zeroes = []

for (i = 0; i < 3; i++) {
  zeroes.push([0, 0, 0]);
}
  console.log(zeroes);
