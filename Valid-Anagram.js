//LEETCODE CHALLENGE

// -- Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("");
};

//PASS
