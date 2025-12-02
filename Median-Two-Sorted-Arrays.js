//LEETCODE CHALLENGE - HARD

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let r = [...nums1, ...nums2].sort((a,b) => a - b);
    let l = Math.floor((r.length - 1) / 2);

    if (r.length % 2 !== 0) {
        return r[l];
    } else if (r.length % 2 === 0) {
        return (r[l] + r[l+1]) / 2;
    }
};

//PASS
