//This task asks you to reurn a new condensed array that contains all elements of n number of arrays passed as arguments.
//This must be completed while removing any duplicates and not changing the order in which they appear in their respectives arrays.
//For example: uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6]


function uniteUnique(arr : (string | number)[]) {
  let newArr = [];
  for (const arg of arguments) {
    for (const n of arg) {
      newArr.push(n);
    }
  }
  let result = [...new Set(newArr)];
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //returns [ 1, 3, 2, 5, 4 ]
console.log(uniteUnique(["a", "b"], ["a", "c"], ["e", "d", "a"])); //returns [ 'a', 'b', 'c', 'e', 'd' ]


