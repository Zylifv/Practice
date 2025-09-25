//You should have a function named steamrollArray. The steamrollArray function should accept one argument: a nested array.
//The function should flatten the nested array, accounting for varying levels of nesting.
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods and global variables should not be used.

function steamrollArray(arr) {
  let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(steamrollArray(element));
        } else {
            result.push(element);
        }
    });

    return result;
}
