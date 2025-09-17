//A challenge to return all possible permutations of a given string into an array without repeats.
//I found a video guide for this challenge as i don't have much experience with either permutations or recursion but i am putting this here as a resource for myself.

function permuteString(str) {
  let arr = [];
  
  if (str.length < 1) {
    return [""];
  } else if (str.length == 1) {
    return [str];
  }
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCharsPermuted = permuteString(remainingChars);
    
    for (let j = 0; j < remainingCharsPermuted.length; j++) {
      const permutation = currChar + remainingCharsPermuted[j];
      arr.push(permutation);
    }
  }
  return [...new Set(arr)];
}
