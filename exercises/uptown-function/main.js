var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

              // The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
function prettyLyrics () {
  console.log(lyrics.join(" "));
}

prettyLyrics(lyrics);

              // The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
function backwardLyrics () {
  console.log(lyrics.reverse().join(" "));
}

backwardLyrics(lyrics);

              // The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
function everyOtherLyric () {
  var otherArray = [];
  for (i = 0; i < lyrics.length; i += 2) {
    otherArray.push(lyrics[i]);
  }
  console.log(otherArray.join(" "));
}

everyOtherLyric(lyrics);
