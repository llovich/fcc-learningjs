/*
freeCodeCamp exercise: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first.

NOTE: to solve, I first used if else statement to find the lower of the two numbers, but then used the assignment hints to use Math.max and Math.min.  I didn't use the Array.prototype.reduce() function
*/

function sumAll(arr) {
 // var first;
 // var second;
 /* if (arr[0]>arr[1]){
    first = arr[1];
    second = arr[0];
  } else{
    first=arr[0];
    second=arr[1];
  }
  */
  var first  = Math.min(arr[0], arr[1]);
  var second = Math.max(arr[0], arr[1]);

  var sumIt = 0;
  for (step = first; step <= second; step++)
    {
      sumIt = step + sumIt;

    }
  return sumIt;
}

sumAll([1, 8]);