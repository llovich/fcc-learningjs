/*
freeCodeCamp - Check for Palindromes exercise
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Return true if the given string is a palindrome. Otherwise, return false.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
*/


function palindrome(str) {

 var str_parsed = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

 var start = 0;
 var end = str_parsed.length-1;
 var count = Math.floor(end/2);

 while (count >= 0) {

  if (str_parsed[start] !== str_parsed[end]) {
   return false; }
  start++;
  end--;
  count--;
 }
  return true;

}

palindrome("eye");
palindrome("race car");
palindrome("2_A3*3#A2");