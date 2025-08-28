const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

//num1 = par
//num2 = strokes
function golfScore(num1, num2) {

  if (num2 === 1) {
    return names[0];
  } else if (num2 <= (num1 - 2)) {
    return names[1];
  } else if (num2 <= (num1 - 1)) {
    return names[2];
  } else if (num2 === num1) {
    return names[3]
  } else if (num2 == num1 + 1) {
    return names[4]
  } else if (num2 == num1 + 2) {
    return names[5]
  } else if (num2 >= num1 + 3) {
    return names[6]
  }
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 5));
console.log(golfScore(1, 1));
console.log(golfScore(4, 7));
