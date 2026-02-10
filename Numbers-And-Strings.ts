/*
This self-imposed challenge was to see how i would return an array of strings and numbers but with the strings being put first.
A simple .sort() would arrange them the other way so this is to return the opposite.
*/

//SOLUTION

function stringsAndNumbers(array : (string|number)[]) {
  return array.sort((a,b) => {
    if (typeof(a) !== "number" && typeof(b) === "number") return -1;
    if (a < b) return -1;
  });
}

console.log(stringsAndNumbers(["null",1,3,2,"zero"])) //returns => ["null","zero",1,2,3] - PASS
console.log(stringsAndNumbers([-7,3,0,0,1,"zero", "one", "null", " "])) //returns => [" ","null","one","zero",-7,0,0,1,3] - PASS
