/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

//SOLUTION

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x : number) {
    let n = x.toString().replace("-", "");
    let r = Number(n.split("").reverse().join(""));
    if (r > Math.pow(2, 31) -1 || r < -Math.pow(2, 31)) {return 0;}
    else {return x < 0 ? (r * -1) : r;}
};

console.log(reverse(123)) // => return 321 -- PASS
console.log(reverse(-123)) // => return -321 -- PASS
console.log(reverse(1534236469)) // => return 0 -- PASS
