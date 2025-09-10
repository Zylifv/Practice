//Create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);
  let currVal = (el) => el >= num;
  return arr.findIndex(currVal);
}

console.log(getIndexToIns([5,4,3,2,1], 3.5));
