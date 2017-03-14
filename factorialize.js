/*
freeCodeCamp - Factorialize a Number
Return the factorial of the provided integer.
*/

function factorialize(num) {
  var fac = 1;
  for(var i=1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}

factorialize(5);