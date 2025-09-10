//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

//Solution:

var searchInsert = function(nums, target) {
    let currVal = (el) => el >= target;
    let max = Math.max(...nums);
    if (target > max)
        return nums.length;
        else
            return nums.findIndex(currVal);
};

console.log(searchInsert([1,3,5,6], 7));
