//I wanted to try a simple sentence redaction function

const oneLetter : string[] = ["a", "i", "o"];
const twoLetters : string[] = ["as", "we", "at", "in", "of", "on"];
const threeLetters : string[] = ["bid", "dog", "dry", "pop", "cat", "top"];
const fourLetters : string[] = ["jump", "swim", "dang", "polo", "hike", "moon"];
const fiveLetters : string[] = ["stars", "tulip", "bring", "loops", "pizza", "quick"];
const sixLetters : string[] = ["stream", "strike", "yellow", "trains", "carrot", "branch"];
const words = [...oneLetter, ...twoLetters, ...threeLetters, ...fourLetters, ...fiveLetters, ...sixLetters];

function redactInfo(str : string) {
  const b = str.split(" ");
  let newString : string[] = [];
  for (let i : number = 0; i < b.length; i++) {
    let x = b[i].length;
    let validWords = words.filter((n) => n.length === x);
    newString.push(validWords[Math.floor(Math.random() * validWords.length)]);
  }
  console.log(newString.join(" "));
}

redactInfo("This is a top secret case file");
redactInfo("I want to hide my secret info please");
redactInfo("This is a 45 number test");
