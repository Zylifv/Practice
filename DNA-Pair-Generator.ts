//Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
//Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.
//For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]
//Complete the function so that the character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating 2D array.


function pairElement(str : string) {
  let newArr = [];

  for (let i : number = 0; i < str.length; i++) {
    switch(str[i]) {
      case "A":
        newArr.push(["A", "T"]);
        break;
      case "T":
        newArr.push(["T", "A"]);
        break;
      case "C":
        newArr.push(["C", "G"]);
        break;
      case "G":
        newArr.push(["G", "C"]);
        break;
      default:
        break;
    }
  }
  return newArr;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
