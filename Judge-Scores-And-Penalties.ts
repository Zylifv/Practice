/*
Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.
*/

//SOLUTION

function computeScore(judgeScores : number[], ...penalties) {
  let penaltyArr : number = [...penalties].reduce((acc, el) => acc + el, 0);
  judgeScores.sort((a,b) => a - b);
  judgeScores.pop();
  judgeScores.shift();
  return judgeScores.reduce((acc, el) => acc + el) - penaltyArr;
}

console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1)); //returns => 64 - PASS
console.log(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //returns => 80 - PASS
console.log(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1)); //returns => 67 - PASS
