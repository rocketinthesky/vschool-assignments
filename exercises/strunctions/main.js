// Let's Practice String Methods.
//
// Implement all of the listed String Methods below using at least 3 unique Functions.
//
// String Methods
//
// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()

var largestCountry = 'Russia';
var secondLargestCountry = 'Canada';
var thirdLargestCountry = 'USA';
var fourthLargestCountry = 'China';
var fifthLargestCountry = 'Brazil';

// console.log(largestCountry.concat('-', secondLargestCountry));
// console.log(secondLargestCountry.indexOf('a'));
// console.log(secondLargestCountry.lastIndexOf('a'));
// console.log(fourthLargestCountry.match('in'));
// console.log(fifthLargestCountry.replace('z', 's'));
// console.log(secondLargestCountry.slice(2));
// console.log(largestCountry.split('s'));
// console.log(thirdLargestCountry.toLowerCase());
// console.log(fifthLargestCountry.toUpperCase());
// console.log(fourthLargestCountry.substr(0,2));

function newAmerica () {
  console.log(fifthLargestCountry.substr(0,2).concat(thirdLargestCountry.toLowerCase(), secondLargestCountry.slice(2)));
}

newAmerica();

function newAsia () {
  console.log(largestCountry.toUpperCase().concat('-', fourthLargestCountry.toLowerCase()));
}

newAsia();

function fragments (country) {
  console.log(country.split('s'));
}

fragments(largestCountry);
fragments('Mississippi');

function addingIndexes(country1, country2) {
  console.log(country1.indexOf('a') + country2.lastIndexOf('a'));
}

addingIndexes(secondLargestCountry, secondLargestCountry);

function replaceMatch (country1) {
  console.log(country1.replace('z', 's').match('si'));
}

replaceMatch(fifthLargestCountry);
