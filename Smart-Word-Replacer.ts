//This small task is to create a function that performs a search and replace on the sentence using the arguments provided and then returns the new sentence.
//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog.

function myReplace(str : string, replaced : string, newWord : string) {
  const checkFirstChar = /[A-Z]/.test(replaced) ? true : false;
  const regex = new RegExp(replaced);
  if (checkFirstChar)
  {
    return str.replace(regex, newWord.substr(0, 1).toUpperCase() + newWord.slice(1));
  }
  else
  {
    return str.replace(regex, newWord.substr(0, 1).toLowerCase() + newWord.slice(1));
  }
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("He is Sleeping on the couch", 4, "Running"));
