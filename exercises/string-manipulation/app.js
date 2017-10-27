var ask = require('readline-sync');
console.log('Hello! I am a bot. Help me get to know you!\n');

var firstName = ask.question('\n' + 'What is your first name? \n');
console.log("That's great, your first name has " + firstName.length + " letters in it");

var lastName = ask.question('\n' + 'What is your last name? \n');
var favoriteQuote = ask.question('\n' + 'One last question, what is one of your favorite quotes or sayings?\n').toUpperCase();
var memoires = '\n\t\t-from the heavily edited memoires of ' + firstName + " " + lastName;
var redactedQuote = function () {
  if (favoriteQuote.length > 20) {
    finalQuote = favoriteQuote.slice(-(favoriteQuote.length / 2));
    console.log('\n\t' + '[redacted] ' + finalQuote + memoires);
  } else {
    console.log('\n\t' + favoriteQuote + memoires);
  }
}

redactedQuote();

console.log("\nLet's try something a little different with that quote. Enter a number and I'll reprint that quote starting at that index position (The number '0' will show the entire quote)");
var userIndexChoice = ask.question('\nEnter a number: ');

var reQuote = function () {
  console.log('\n\t' + favoriteQuote.slice(userIndexChoice) + memoires + '\n');
}

reQuote();
