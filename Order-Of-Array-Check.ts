/*
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.
I wanted to try this challenge and gave it my unique take by checking a marker value that is either increased or decreased depending on whether or not the curr value is greater/smaller than the next value.
I set a "bound" which is used for both the upper and lower, which, if the result of adding/subtracting those result values together would be higher/lower then i can determine the order of the array (or lack of).
I wanted to avoid using hard numbers so it would work for any size array and single digit array lengths will return "Ascending" by default.
*/

//SOLUTION

var sort = function(arr : number[]) {
  let result : number = 0;
  let bound : number = Math.ceil(arr.length - 2);
  if (arr.length === 0) return "Invalid array length";
  for (let i : number = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {result -= 1};
    if (arr[i] < arr[i+1]) {result += 1};
  }
  return result > bound ? "Ascending"
  : result < (bound * -1) ? "Descending" : "Not sorted";
}

console.log(sort([1, 2, 3, 4, 5])); //returns => "Ascending" - PASS
console.log(sort([10, 8, 6, 4, 2])); //returns => "Descending" - PASS
console.log(sort([1, 3, 2, 4, 5])); //returns => "Not sorted" - PASS
console.log(sort([2, 1, 5, 4, 3])); //returns => "Not sorted" - PASS
console.log(sort([8,7,6,5,4,3,2,1,0])); //returns => "Descending" - PASS
console.log(sort([12,11,10,9,8,9,6,5,4])); //returns => "Not sorted" - PASS
console.log(sort([1])); //returns => "Ascending" - PASS
console.log(sort([])); //returns => "Invalid array length" - PASS

