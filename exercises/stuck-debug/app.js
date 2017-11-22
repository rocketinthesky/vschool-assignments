//
// This program should have the user:
//
// Pick flowers and and keep looping if they select 'pick flowers', Shoot guns and and keep looping if they select 'shoot guns', Fight bears and end the program if they select 'fight bears'.
//
// It should tell them to select an option if they choose 'Cancel'

var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(options[option] != 'fight bears'){
  var option = ask.keyInSelect(options, "What would you like to do today?: ");
  if (options[option] === 'pick flowers'){
      console.log("You pick some flowers. You make a bouquet.");
  } else if (options[option] === 'shoot guns'){
      console.log("You shoot guns.");
  } else if (options[option] === 'fight bears') {
      console.log("You fought a bear and got beat up!");
  } else {
      console.log("Please choose an option");
  }
}
