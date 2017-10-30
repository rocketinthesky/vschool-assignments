var ask = require("readline-sync");

var hasKey = false;
var noKeyOptions = ['Put hand in hole', 'Find the key', 'Open the door'];
var foundKeyOptions = ['Put hand in hole', 'Open the door'];
var option = 'undecided';

console.log('You find yourself alone in a room. You see a box with a hole in it and a door that looks like it takes a key. ');

while(hasKey === false) {
  var option = ask.keyInSelect(noKeyOptions, 'What do you do? ');
  if (noKeyOptions[option] === 'Find the key') {
    console.log('You have found the key!');
    hasKey = true;
  } else if(noKeyOptions[option] === 'Open the door') {
    console.log('The door is locked');
  } else if(noKeyOptions[option] === 'Put hand in hole') {
    console.log('You have died');
    break;
  } else {
    console.log('Please choose an option');
  }
}

while (hasKey === true) {
  var option = ask.keyInSelect(foundKeyOptions, 'You see a box with a hole in it and a door that looks like it takes a key. What do you do? ');
  if(foundKeyOptions[option] === 'Open the door') {
    console.log('The door opens, you have escaped the room!');
    break;
  } else if(foundKeyOptions[option] === 'Put hand in hole') {
    console.log('You have died');
    break;
  } else {
    console.log('Please choose an option');
  }
  }
