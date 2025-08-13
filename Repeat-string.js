//Repeat a string a certain amount of times based on the number requested when calling the function

function repeatStringNumTimes(str, num) {
  let newStr = "";
  if (num <= 0) {
    return ""
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
