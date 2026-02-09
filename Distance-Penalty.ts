/*
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.
*/

//SOLUTION

function calculatePenaltyDistance(rounds : numbers[]) {
  let pen : number = 0;
  for (let i : number = 0; i < rounds.length; i++) {
    while (rounds[i] < 5)
    {
      rounds[i]++;
      pen += 150;
    } 
  }
  rounds = pen;
  return rounds;
}
  
calculatePenaltyDistance([4, 4]) //RETURNS => 300 - PASS
calculatePenaltyDistance([5, 5]) //RETURNS => 0 - PASS
calculatePenaltyDistance([4, 5, 3, 5]) //RETURNS => 450 - PASS
calculatePenaltyDistance([5, 4, 5, 5]) //RETURNS => 150 - PASS
calculatePenaltyDistance([4, 3, 0, 3]) //RETURNS => 1500 - PASS
