/*
freeCodeCamp - Find the Longest Word in a String exercise

Return the length of the longest word in the provided sentence.
Your response should be a number.

RE my answer: not sure it is elegant bc may be high on comp time
*/

function findLongestWord(str) {

  var strWords = str.split(" "); //puts string into an array of just words
  var count = strWords.length; //defines upperbound for for loop
  var longestWord = 0;//longest word found so far, starts @ 0


  for (var i=0; i < count; i++){
    //enters if when current word is longer than longestWord
    if ( strWords[i].length > longestWord ) {
     longestWord = strWords[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a long word such as otorhinolaryngology");