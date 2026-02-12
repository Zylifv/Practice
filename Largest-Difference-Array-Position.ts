/*
Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.
*/

//SOLUTION

var largestDifference = function(skater1 : number[], skater2 : number[]) {
  let result : number[] = [];
  for (let i : number = 0; i < 5; i++) {
    result.push(skater1[i] - skater2[i] < 0 ? (skater1[i] - skater2[i]) * -1 : skater1[i] - skater2[i]);
  }
  return result.indexOf(Math.max(...result)) + 1;
}


console.log(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30])); //returns => 3 - PASS
console.log(largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95])); //returns => 5 - PASS
console.log(largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01])); //returns => 2 - PASS
