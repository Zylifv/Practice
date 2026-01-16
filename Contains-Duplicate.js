/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

//SOLUTION

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let n = [...new Set(nums)];
    return n.length == nums.length ? false : true;
};
