//LEETCODE CHALLENGE

/* -- The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

*/

var fib = function(n) {
  
    let f = [0,1];
  
    let n1 = 0;
    let n2 = 1;
  
    let result = 0;

    for (let i = 0; i <= n; i++) {
      do {
        let sum = n1 + n2;
        f.push(sum);
        n1 = n2;
        n2 = sum;
      } while (n1 < i);
    }
    return n <= 1 ? n : output = f[n-1] + f[n-2];
};

//I created my own Fibonaaci sequence first, then returned the result after checking if n was large enough.
//PASS
