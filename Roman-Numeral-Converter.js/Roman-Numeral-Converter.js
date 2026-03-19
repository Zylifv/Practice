function numConversion(num) {
  const romanNums = [
  {value: 3000, num: 'MMM'},
  {value: 2000, num: 'MM'},
  {value: 1000, num: 'M'},
  {value: 900, num: 'CM'},
  {value: 500, num: 'D'},
  {value: 400, num: 'CD'},
  {value: 300, num: 'CCC'},
  {value: 200, num: 'CC'},
  {value: 100, num: 'C'},
  {value: 90, num: 'XC'},
  {value: 50, num: 'L'},
  {value: 40, num: 'XL'},
  {value: 30, num: 'XXX'},
  {value: 20, num: 'XX'},
  {value: 10, num: 'X'},
  {value: 9, num: 'IX'},
  {value: 5, num: 'V'},
  {value: 4, num: 'IV'},
  {value: 3, num: 'III'},
  {value: 2, num: 'II'},
  {value: 1, num: 'I'}
];
  
  let romanNumConvert = "";
  //const btn = document.getElementById("convert-btn");
  let output = document.getElementById("output");
  let input = document.getElementById("number");
  let currVal = input.value;
  
  
  if (currVal == "") {
    output.innerText = "Please enter a valid number";
    return;
  } else if (currVal === 0 || currVal < -1 || currVal == -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (currVal > 4000 || currVal == 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  for (let i = 0; i < romanNums.length; i++) {
   if (currVal >= romanNums[i]["value"]) {
     romanNumConvert += romanNums[i]["num"];
     currVal -= romanNums[i]["value"];
   }  output.innerText = romanNumConvert;
  }
}  
