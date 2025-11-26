//LEETCODE CHALLENGE

// -- Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

var addDigits = function(num) {
let len = Math.ceil(Math.log10(num + 1));

  if (len <= 1)
  {
    return num;
  }
  else
  {
    let t = 0;
    let s = num.toString().split("");
      s.forEach((el) => {
        t += Number(el)
    })
    console.log(s, t);
    addDigits(t);
  }
}

addDigits(38); //PASS
addDigits(7767); //PASS
