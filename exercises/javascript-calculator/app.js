var readline = require("readline-sync")
var num1 = Number(readline.question('Enter your first number: '));
var num2 = Number(readline.question('Enter your second number: '));
var operations = ['add', 'subtract', 'multiply', 'divide'];
var operation = readline.keyInSelect(operations, 'What operation would you like to do?');

function add(num1, num2) {return num1 + num2;}

function sub(num1, num2) {return num1 - num2;}

function mul(num1, num2) {return num1 * num2;}

function div(num1, num2) {return num1 / num2;}

switch (operation) {
  case 0:
  console.log(add(num1, num2));
  break;

  case 1:
  console.log(sub(num1, num2));
  break;

  case 2:
  console.log(mul(num1, num2));
  break;

  case 3:
  console.log(div(num1, num2));
  break;

  default:
    console.log('You have canceled everything');
}
