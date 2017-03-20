/*
freeCodeCamp - Confirm the Ending exercise

Check if a string (first argument, str) ends with the given target string (second argument, target).

*/

function confirmEnding(str, target) {

  var beginAt = target.length;

  var tester = str.substring(str.length-beginAt, str.length);

  return tester == target;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");