//A method to find the Lowest common multiple by utilising both the Greatest Common Divisor (GCD) and the Greatest Common Factor (GCD) method.

//GCD explanation:
//The Greatest common divisor takes two numbers (a, b) and recursively checks how many times the smaller n fits into the larger n.
//If there is any remainder, you replace the larger number with the smaller number and the smaller number with the remainder of the previous iteration.
//Do this until the smaller number has no remainder, when this happens, your GCD is the result of the larger number that has no remainder.
//For example: 45 & 10 would follow as 45 % 10 = 4 r = 5, 10 % 5 = 2 r = 0, GCD = 5.

//LCM explanation:
//The Lowest common multiple takes two numbers (n1, n2) and finds the lowest number in which both given numbers are a multiple of.
//By using the Greatest Common Factor we can take the result of n1 * n2, then divide that result by the GCD and this will give the LCM of the two given numbers.
//For example: 45 & 10 would follow as 45 * 10 = 450, then 450 / 5 = 90. The LCM of the two given numbers 45 & 10 is 90.


//needed for the LCM function
function gcd(a : number, b : number) {
    console.log(a, b);
    return !b ? a : gcd(b, a % b);
}

function lcm(a : number, b : number) {
  return (a * b) / gcd(a,b);
}

console.log(gcd(10, 45));
console.log(lcm(10, 45));
