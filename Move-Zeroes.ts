//MOVE ZEROES

//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.

//SOLUTION

var moveZeroes = function(nums : number) {
    return nums.sort((a,b) => {
        if (a !== 0 && b === 0) return -1;
        if (a === 0 && b !== 0) return 1;
        return 0;
    });
};

console.log(moveZeroes([0,1,0,3,12])); //RESULT = [1,3,12,0,0] PASS
