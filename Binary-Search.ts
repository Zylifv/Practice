/*
Learning how to approach a problem with the Binary search method.
This method takes an array of numbers and finds the middle point of the array. If the middle number is the target value, return the position of the element in the array.
If the middle value is lower, the "left" value start at the previous "middle" value and the search will restart with a new parameter (this is because of the while loop).
If the middle value is greater, the "right" value will be changed and the search will continue from the lower part of the array up to the new "right" value.
This repeats until either the searched number is found, or if it isn't found after the searchable portion of the array gets smaller until the left and right values are the same, then it will return -1 (or false);
*/

//CODE

//BINARY SEARCH

var binarySearch = function(arr : number[], num : number) {
  let left : number = 0;
  let right : number = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    
    if (arr[mid] == num)
    {
      return mid;
    }
    else if (arr[mid] < num)
    {
      left = mid + 1;
    }
    else
    {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6)); //returns 5 (correctly found the position)
console.log(binarySearch([1,3,5,7,9,11,13,15], 8)); //returns -1 (not found/false)

