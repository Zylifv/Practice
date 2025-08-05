//This small code qwill find the largest number from each set of arrays contained within a multidimensional array and return them in a new array (ascending scale)

function largestOfAll(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i].sort((a,b) => a - b).pop())
  }
  return resultArr;
}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
