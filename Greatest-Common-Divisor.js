//Greatest common Divisor finds what number can divide two given integers without leaving any remainder.

function gcd(a, b) {
    console.log(a, b);
    return !b ? a : gcd(b, a % b);
  //return !b means is b false, so when the recursion finally results in b === 0, this is now false, so the algorithm knows at what point a % b (remainder) is 0.
  //When this happens and b is false (b === 0) it returns a, which is the last number divisable by both a & b that leaves no remainder, thus the greatest common divisor.
  
  //In the case of -gcd(10, 45)- the alogrithm checks first that b is false, i.e 0, if not it calls itself but with b in place of a.
  //The second argument now being a % b which checks how many times b goes into a and returns that figure (not including the remainder).
  //Now it has called itself with these new numbers, it will loop on itself and check whether or not the result of calling a % b is 0, if not, run it again.
  //If it is, return the result of how many times b fit into a on the previous call.
    }
console.log(gcd(10, 45));
