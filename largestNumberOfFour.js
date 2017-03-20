/*
freeCodeCamp - Return Largest Numbers in Arrays exercise

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

NOTE: for this one, I wanted to use sort() as I don't know that function that well.  It's a pretty cool (and powerful) one!

*/

function largestOfFour(arr) {
 var largeNumArr = new Array(3);

 arr[0].sort(function(a, b){return a-b;});
 largeNumArr[0] = arr[0][3];

 arr[1].sort(function(a, b){return a-b;});
 largeNumArr[1] = arr[1][3];

 arr[2].sort(function(a, b){return a-b;});
 largeNumArr[2] = arr[2][3];

 arr[3].sort(function(a, b){return a-b;});
 largeNumArr[3] = arr[3][3];

 return largeNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);