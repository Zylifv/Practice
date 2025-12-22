const password = "plew34Wanl9ert80";

console.log(`The password you have to crack is ${password.length} characters long. It only contains upper & lowercase letters and numbers.`);

function guessPassword(str) {
  
  let output = [];
  for (let i = 0; i < password.length; i++) {
    if (str.substring(i, i+1) === password.substring(i, i+1))
     output.push(str.substring(i, i+1));
    else {
      output.push("_");
    }
  }
  return output.join("") == password ? `Congrats! the correct answer is ${password}.` : `"${output.join("")}" is wrong, you should keep guessing!`;
}

console.log(guessPassword("whra20Wrnl9wry51"));
console.log(guessPassword("plep21Wapl8erz70"));
console.log(guessPassword("plew34Wanl9ert81"));
console.log(guessPassword("plew34Wanl9ert80"));
