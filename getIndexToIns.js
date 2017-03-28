/*
free Code Camp - Where do I belong exercise

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {

  //sorts the given arr into increasing number order
  var sortArr = arr.sort(function(a, b) {
  return a - b;
  });

  //checks num against every item in the area
  for (var i = 0; i <sortArr.length; i++) {

    //if num is less than/equal to first item, it goes first @ 0
    if (num <= sortArr[0]){
      return 0;}

    //if num is greater than/equal to last item, it goes last
    if (num >= sortArr[sortArr.length-1] ){
      return sortArr.length;
    }

    //if num is somewhere in between fist/last, find it
    if(num >= sortArr[i] && num <= sortArr[i+1]){
      return i+1;
    }

  }

}

getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([40, 60], 50);
