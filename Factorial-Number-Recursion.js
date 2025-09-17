//Another recursion challenge to return the !n result of a given number.

function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
