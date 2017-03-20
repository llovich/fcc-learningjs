/*
free Code Camp - Chunky Monkey exercise
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
Hints: use .push() and .slice()
RE exercise: I couldn't see how to solve this right away and I didn't use .pull

*/

function chunkArrayInGroups(arr, size) {

  //creates size need for the 2d array
  var arrSize = Math.ceil( arr.length/size );

  var end = arr.length;
  var retArr = new Array(arrSize);

  for (var i=0; i< arrSize; i++){

    if (size*i+1 > end){
      retArr[i] = arr.slice(size*i, end);
      return retArr;
    }
    retArr[i] = arr.slice(size*i, size*(i+1));
  }

   return retArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 2);