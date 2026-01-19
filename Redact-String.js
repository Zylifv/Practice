//I wanted to try a simple sentence redaction function

const oneLetter = ["a", "i", "o"];
const twoLetters = ["as", "we", "at", "in", "of", "on"];
const threeLetters = ["bid", "dog", "dry", "pop", "cat", "top"];
const fourLetters = ["jump", "swim", "dang", "polo", "hike", "moon"];
const fiveLetters = ["stars", "tulip", "bring", "loops", "pizza", "quick"];
const sixLetters = ["stream", "strike", "yellow", "trains", "carrot", "branch"];
const words = [...oneLetter, ...twoLetters, ...threeLetters, ...fourLetters, ...fiveLetters, ...sixLetters];

function redactInfo(str) {
  const b = str.split(" ");
  let newString = [];
  for (let i = 0; i < b.length; i++) {
    let x = b[i].length;
    let validWords = words.filter((n) => n.length === x);
    newString.push(validWords[Math.floor(Math.random() * validWords.length)]);
  }
  console.log(newString.join(" "));
}

redactInfo("This is a top secret case file");
redactInfo("I want to hide my secret info please");
