/*
free Code Camp - Seek and Destroy exercise

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

RE: I solved this but not in an elegant way - and it assumes that there are up to 3 arguments to filter for, but, that is bad bc solution dosnt work if more than 3 arguments.

Here's is code camps solution:

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

*/

function destroyer(arr, arr2, arr3, arr4) {

  function firstDes(value) {
      return value !== arr2 && value !== arr3 && value !== arr4;
    }

  return arr.filter(firstDes);
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);