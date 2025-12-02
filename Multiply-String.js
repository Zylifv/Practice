//LEETCODE CHALLENGE - Medium

//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

var multiply = function(num1, num2) {
    return (BigInt(num1) * BigInt(num2)).toString();
};
