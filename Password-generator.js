//A task revolving around making a random password from a pre-selected list of characters and returning a random password with a desired length chosen by the user.

const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let passwordArr = [];

function generatePassword(num) {
  let password = "";
  passwordArr.length = 0;
    do {
      passwordArr.push(string[Math.floor(Math.random() * string.length)]);
    } while (passwordArr.length < num)
    password = passwordArr.join("");
    return password;
}

let password = generatePassword(14);
console.log(`Generated password: ${password}`);
