/*
freeCodeCamp - Repeat a string exercise
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {

  if (num < 0 ) {
    return "";
  }

  var strRepeat = str;

  for(var i=0; i<num-1; i++){
    strRepeat = strRepeat + str;
  }
  return strRepeat;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("*", 8);
