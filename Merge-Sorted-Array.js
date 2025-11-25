//LEETCODE CHALLENGE --

//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    m > 0 ? nums1.length = m : nums1.splice(m - nums1.length);
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }
    nums1.sort((a,b) => a - b);
};

//PASS 0ms
