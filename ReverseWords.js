//A way to reverse words and also each word in a sentence without reversing the entire order of a sentence

function ReverseWord(str) {
  let result = "";
  
  for (let i = str.length -1; i >= 0; i--) {
      result += str[i];
    }
  return result;
}

console.log(`"Sphinx" reversed is: ${ReverseWord("Sphinx")}`);

function ReverseSentence(str) {
  let string = "";
  let array = str.split(" ");
  let newArray = [];
  
  for (const word of array) {
    string += ReverseWord(word) + " ";
  }
  return string;
}

console.log(`"Sphinx of black quartz judge my vow" words reversed is: ${ReverseSentence("Sphinx of black quartz judge my vow")}`);
