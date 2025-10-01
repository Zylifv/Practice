//Build a Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.
//This was an intersting task, not sure how optimised my code is but it passed all tests.

function sumFibs(num : number) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  let x = [];
  let result = [];

    do {
      x.push(n1, n2);
      sum = n1 + n2;
      n1 = sum;
      n2 = n1 + n2;
    } while (x[x.length - 1] <= num);
  
    let lastNum = x[x.length - 1];
    for (let i = 0; i < x.length; i++) {
      if (x[i] % 2 !== 0 && x[i] <= num) {
        result.push(x[i]);
      }
    }
  return result.reduce((a,b) => a + b);
}

console.log(sumFibs(1000)); //Returns 1785 - PASS
console.log(sumFibs(4)); //Returns 5 - PASS
console.log(sumFibs(4000000)); //Returns 4613732 - PASS
console.log(sumFibs(75024)); //Returns 60696 - PASS
console.log(sumFibs(75025)); //Returns 135721 - PASS
