// You have just been called into a technical interview at some large, evil corporation. They want you to remove all the duplicate letters from a string. But you decide to only partially comply with their wishes. You create one string that has no duplicate letters, and another with all the letters that were removed because they were duplicates.

// start with the first character and check the string for that same character. If that character is found, remove it from the string and add it to the outcasts variable.

function noDupes(str) {
  var outcasts = "";
  var purifiedStr = "";

  for (i = 0; i < str.length; i++) {
    outcasts += str.match(str.charAt(i));
  }
  console.log(outcasts);
}

noDupes('abbbbcde');
