//CHALLENGE - Create a function that skips elements in an array based on a specified step value.
//You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
//The dropElements function should iterate through the array and remove elements starting from the first one until func returns true for an element.
//The dropElements function should return the remaining elements in the array if the condition is met.
//If the condition is never satisfied, it should return an empty array.

function dropElements(arr : number[], func) {
  let result = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (func(arr[i]))
    {
      result = arr.slice(i)
      return result;
    }
  }
  return result;
}


console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); //should return [3,4]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;})); //should return [1,0,1]
console.log(dropElements([1, 2, 3], function(n) {return n > 0;})); //should return [1,2,3]
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;})); //should return []
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})); //should return [7,4]

//PASS
