/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
*/

//SOLUTION

var isPowerOfFour = function(n) {
    let check = n;
    if (n == 1) {return true;}
    if (n <= 0) {return false;}
    while (check % 4 === 0) check /= 4;
    return check === 1;
};

//ORIGINAL SOLUTION ATTEMPT (works only with positive integers)

var isPowerOfFour = function(n) {
    let check = n;
    if (n == 1) {return true;}
    if (n < 0) {check * -1;}
    do {
        check = check % 4 === 0;
    } while (check > 1);
    return check;
};
