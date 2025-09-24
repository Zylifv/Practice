//Create a function that converts a string to title case.
//Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.
//"Web Development Is Awesome" is an example of a title cased string.

function titleCase(str : string) {
  let temp = str.split(" ");
  let result = "";
  temp.forEach((el) => result += el.substr(0,1).toUpperCase() + el.slice(1).toLowerCase() + " ");
  return result.trim();
}

console.log(titleCase("coDing is FUn"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
