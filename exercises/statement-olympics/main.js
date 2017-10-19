// Write an if statement that prints "is greater than" if 5 is greater than 3
// Write an if statement that prints "is the length" if the length of "cat" is 3
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

if (5 > 3) {
  console.log("is greater than");
}

if ('cat'.length === 3) {
  console.log("is the length");
}

if ('cat' !== 'dog') {
  console.log("not the same");
}

// Write an if statement that prints the name of the person + is allowed to go to the movie if they are old enough, and the opposite if they are not older than 18.
var person = {
  name: 'Bobby',
  age: 12
}

if (person.age < 18) {
  console.log(person.name + ' is not old enough');
} else {
  console.log(person.name + ' is allowed to go');
}

if (person.name.charAt(0) === 'B') {
  console.log('Their name starts with a "B", they can go in.');
} else {
  console.log('They cannot enter the movie')
}

person.age > 18 && person.name.charAt(0) === 'B' ? console.log ('Enjoy the movie, Bobby') : console.log('Get out of here, Bobby');


// Silver Medal
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!!
//
// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if (1 === '1') {
  console.log('strict');

} else if (1 == '1') {
  console.log('loose');

} else {
  console.log('not equal at all');
}

if ((3 * 4) > 10 < (5 + 10)) {
  console.log('yes');
}

// Gold Medal
// Gold may take some googling!
// 1. Write an if statement that checks to see if "dog" is a string

if (typeof 'dog' === 'string') {
  console.log("yup, it's a string");
}

// 2. Write an if statement that checks to see if "true" is a boolean

if (typeof true === 'boolean') {
  console.log("yup, it's a boolean");
}

// 3. Write an if statement that checks to see if a variable has been defined or not

if (typeof undeclaredVariable === 'undefined') {
  console.log("I'm sorry Dave, you haven't defined that variable yet");
}

// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters.

if ('a' > 'b') {
  console.log('a is greater than b');

} else if ('b' > 'a') {
  console.log('b is greater than a');
}

if ('a' > 1) {
  console.log('a is greater than 5');

} else if (1 >= 'a') {
  console.log('1 is greater than a');
}

// 5. Write a switch statement that returns a number spelled out ("seven" vs 7) for the numbers one through ten.

switch (number = 10) {
  case 1:
    number = 'one';
    break;

  case 2:
    number = 'two';
    break;

  case 3:
    number = 'three';
    break;

  case 4:
    number = 'four';
    break;

  case 5:
    number = 'five';
    break;

  case 6:
    number = 'six';
    break;

  case 7:
    number = 'seven';
    break;

  case 8:
    number = 'eight';
    break;

  case 9:
    number = 'nine';
    break;

  case 10:
    number = 'ten';
    break;
}

console.log(number);
