//Given an array nums of distinct integers, return all the possible permutations.

//SOLUTION REFERENCE

//THIS IS NOT MY CODE, THIS IS HERE FOR ME TO LEARN AND REFERENCE

var permute = function(nums) {
    const result = [];
    const backtrack = (nums, path) => {
        if (nums.length === 0) {
            result.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
        }
    };
    backtrack(nums, []);
    return result;
};

console.log(permute([1,2,3])) //returns => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] //PASS


//ALTERNATE SOLUTION

const arr = [1,2,3];

function permute(nums) {
  let array = [];
  
  if (nums.length == 0) return [];
  if (nums.length == 1) return [nums];
  
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainNums = nums.slice(0, i).concat(nums.slice(i+1));
    const remainNumsPermute = permute(remainNums);
    
    for (let j = 0; j < remainNumsPermute.length; j++) {
      const permutedArray = [currentNum].concat(remainNumsPermute[j]);
      array.push(permutedArray);
    }
  }
  return array;
}

console.log(permute(arr)); //returns => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] //PASS
