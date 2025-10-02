//Create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.
//The function should return a new array excluding all elements from the first argument that match any of the subsequent arguments and it must accept an indeterminate number of arguments.

function destroyer(arr) {
  for(var i = 1; i < arguments.length; i++)
  {
      for(var j = 0; j < arr.length; j++)
      {
          if(arguments[i] == arr[j])
          {
              arr.splice(j, 1);
              --j;
          }
      }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1,1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //[1]
