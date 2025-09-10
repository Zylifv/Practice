//create a function that removes all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

let array = [false, null, 0, "", undefined, NaN];

function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9])); //should return [ 7, 'ate', 9 ]
