// Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.
//

// function individualLetters(str) {
//   for (i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//   }
// }
//
// individualLetters("Mississippi");

// Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the position of the first occurrence of the specified character. If the character is not found, tell that to the user.
//

// function charFinder(str, char) {
//   var indices = [];
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === char) {indices.push(i)};
//   }
//   if (indices.length === 0) {
//     console.log('Character not found');
//   } else {
//     console.log(indices.shift());
//   }
// }
//
// charFinder('scissors', 's');

// Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
//

// var arr1 = [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 ];
//
// var arr2 = [ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ];
//
// function numArray(arr) {
//   found = false;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 42) {
//       found = true;
//       break;
//     }
//   } if (found === true) {
//     console.log('I quit');
//   } else {
//     console.log('42 was not found');
//   }
// }
//
// numArray(arr2);

// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

var arr1 = [15,6,17,2,1,3,4,5,7,9];
var arr2 = [1,2,3,4,5,6,7,8,9,0];
var arr3 = [10,15,11,6,7,31,111,61,71,13];

function smallestNum(arr) {
  smallest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
}

smallestNum(arr3);
