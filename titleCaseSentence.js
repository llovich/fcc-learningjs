/*
freeCode Camp - Title Case a Sentence exercise

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  var strParse = str.split(" ");
  count = strParse.length;
  var strDone;

  for( var i = 0; i < count; i++){
    strParse[i] = strParse[i].charAt(0).toUpperCase() +
    strParse[i].substring(1, strParse[i].length).toLowerCase();
  }

  strDone = strParse.join(" ");
  return strDone;
}

titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
titleCase("I'm a little tea pot");