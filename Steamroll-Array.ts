//You should have a function named steamrollArray. The steamrollArray function should accept one argument: a nested array.
//The function should flatten the nested array, accounting for varying levels of nesting.
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods and global variables should not be used.

function steamrollArray(arr : (string | number)[]) {
  let result = [];
  
  arr.forEach(el => {
    if (Array.isArray(el)) {
      result = result.concat(steamrollArray(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

console.log(steamrollArray([[1],[2],[["34"]],"five"]));
