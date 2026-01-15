/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
*/

/*SOLUTION*/


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let r = [];
    let n = num;
    let ch = 1;
    do {
    if (n % ch === 0) {
      r.push(ch)
    }
    ch++;
    } while (ch <= n / 2);
    console.log(r);
    
    if (num == 1) {return false}
    else if (r.reduce((a,b) => a + b) === n) {
        return true;
      }
    return false;
};
