var chai = require('chai');
var assert = chai.assert;
var search = require('./app.js').search;
var addWord = require('./apps.js').add;

describe("a dictionary to add and look up words on a list", function(){
  it("should return the definition if it's on the list", function() {
    addWord("computer", 'a machine');
    assert.equal(search("computer"), 'a machine');
  });
  it("should return null if it's not on the list", function(){
    assert.isNull(search("antidisestablishmentarianism"));

  });
});

// describe("a function that adds a word to a list", function(){
//   it("should add a word to the list if it's not already there", function(){
//     addWord("mouse", 'computer accessory');
//     assert.equal(addWord('mouse', 'computer accessory'));
//   });
//   it("should not add a word if it's already on the list", function(){
//     add("word");
//     assert.equal(addWord("word" if ("word" === true)), false);
//   });
// });
