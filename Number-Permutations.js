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
