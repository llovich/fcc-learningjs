/*
freeCodeCamp - Reverse a String
Create a function which reverses the provided string.
*/

function reverseString(str) {

  var myArray = new Array(str.length);
  for (var i=0; i<str.length; i++){
    myArray[i] = str[i];
  }

  var revArr = new Array(str.length);
  revArr = myArray.reverse();
  return revArr.join('');
}

reverseString("hello");