/*
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.
*/

//SOLUTION (works for both positive and negative numbers)

var isPowerOfTwo = function(n : number) {
  let arr : number[] = [];
  let x : number = n;
  do {
    Math.trunc(x) % 2 == 0 ? arr.unshift(0) : arr.unshift(1);
    x = x / 2;
  } while (x >= 1);
  if (n > 0)
    return arr.filter(num => num === 1).length == 1 ? true : false;
  else
    return false;
};

//PASS
