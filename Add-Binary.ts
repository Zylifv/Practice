/*
Given two binary strings a and b, return their sum as a binary string.
*/

//MY SOLUTION - Works for binary strings less than 60 in length

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a : string, b : string) {
    let r : (string | number)[] = [];
    let firstNum = parseInt(a, 2).toString(10);
    let secondNum = parseInt(b, 2).toString(10);
    let sum : number = Number(firstNum) + Number(secondNum);

    do {
        Math.floor(sum) % 2 == 0 ? r.unshift(0) : r.unshift(1);
        sum = sum / 2;
    } while (sum >= 1);

    return r.join("");
};

console.log(addBinary("1010", "1011")) // => returns "10101" //PASS

//SUBMITTED SOLUTION

var addBinary = function(a : string, b : string) {
    
    let firstNum = BigInt('0b' + a);
    let secondNum = BigInt('0b' + b);
    let sum = firstNum + secondNum;

    return sum.toString(2);
};
