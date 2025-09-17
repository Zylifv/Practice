//A challenge to find the sum of all primes upto a given value.
//This took me a while to figure out and im not sure if this solution is good time complexity...
//After running it through bigocalc.com is says that the worst case scenario is O(n^3) because of nested loops but each style of operation is base O(n). This is something i will work on.

function sumPrimes(num) {
  let numsArray = [];
  
  for (let i = 1; i <= num; i++) {
    numsArray.push(i);
  }

  if (num < 2) {
    return 0;
  } else if (num >= 2) {
    
    for (let j = 2; j <= Math.sqrt(num); j++)
    {
      for (let i = j; i <= num; i++)
      {
        if (numsArray[i] % j === 0)
        {
          numsArray.splice(i, 1);
        }
      }
    }
  }
  return numsArray.reduce((a,b) => a + b) - 1;
}

console.log(sumPrimes(977));
