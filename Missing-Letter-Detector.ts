//A small challenge to build a method to find which letter is missing in a given string.
//I knew i had to find a way to identify the starting string and then work from there, this was a fun little task.

function fearNotLetter(str : string) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  let test = str.toLowerCase().split("").sort().join("");
  let firstLetter = a.indexOf(test.substring(0, 1));
  let x = a.substring(a.length, firstLetter);

  for (let i = 0; i < test.length; i++) {    
    if (x[i] !== test[i]) {
      return x[i];
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
console.log(fearNotLetter("stvwx"));
