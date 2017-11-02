var chai = require('chai');
var add = require('./app.js');
var assert = chai.assert;
var palindrome = require('./app.js').palindrome;
var add = require('./app.js').add;

describe(`A function to check if two arguments add up to 4`, function(){
  it(`should return true if the arguments add up to 4`, function(){
    add(2,2);
    assert.equal(add(2,2), true);
});
it(`should return false if the arguments don’t add up to 4`, function(){
    add(4,2);
    assert.equal(add(4,2), false);
});
});

describe("A function to check if an argument is the same forwards and backwards", function(){
  it("Should return true if the argument is a palindrome", function(){
    assert.equal(palindrome('star rats'), true);
  });
  it("Should return false if the argument is not a palindrome", function(){
    assert.equal(palindrome('palindrome'), false);
  });
  it("Should return true if argument contains punctuation and is a palindrome", function(){
    assert.equal(palindrome('tAco! Cat!'), palindrome('tacocat'))
  });
});
