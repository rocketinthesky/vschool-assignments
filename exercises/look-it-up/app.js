var dictionary = {};

var addWord = function(word, definition){
  dictionary[word] = definition;
  //add key value pairs to object;
}

var search = function(word){
return dictionary[word];
}

module.exports = {
  addWord,
  search
}
