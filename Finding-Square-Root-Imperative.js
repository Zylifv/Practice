//This function finds the square root of any given number.
//Fist, you supply the function with a number you wish to find the sqaure root of (num) and your initial guess (g).
//The recursive nature of the function will return the value of guess if it sufficiently matches the product of a sqaured number (n * n).
//Otherwise, we we log the result of the number you wish to find the sqrt of and your initial guess and store it (val).
//We then replace the initial guess with the average of the result of adding g to the value of num / g (val). *g = (g + (val / 2))*
//Finally, we recursively call the function with the new guess value and let it run until we get a number that is sufficient enough to call a square root, including irrationals.

//This was a learning experience through the SICP book and lectures i watched on Youtube.
//It is fun to go even just a little bit deeper and work through how we can use programming to calculate and find anything we want without using built in functions such as Math.sqrt().

function squareRoot(num, g) {
  if (g * g === num)
  {
    return g;
  }
  else
  {
    let val = num / g;
    g = (g + val) / 2;
    return squareRoot(num, g);
  }
}

console.log(squareRoot(166, 6));
