//You should create a translatePigLatin function that accepts one string as argument.
//If the string argument begins with a consonant, your function should take the first consonant or consonant cluster, move it to the end of the word, add ay to it, and return the result.
//If the string argument begins with a vowel, your function should add way at the end and return the result.
//Your function should handle string arguments where the first vowel comes in the middle of the word and return the appropriately transformed string.
//If the string argument has no vowels, your function should add ay at the end and return the result.


function translatePigLatin(s : string) {
  let regex = /([aeiou].*)/g;
  if (regex.test(s.substring(0,1))) {
    return `${s}way`;
  } else {
    let n = s.search(regex);
    let x = s.substring(0, n);
    s = s.replace(x, "") + x + "ay";
    return s;
  }
}

console.log(translatePigLatin("california")); //aliforniacay - PASS
console.log(translatePigLatin("algorithm")); //algorithmway - PASS
console.log(translatePigLatin("paragraphs")); //aragraphspay - PASS
console.log(translatePigLatin("schwartz")); //artzschway - PASS
