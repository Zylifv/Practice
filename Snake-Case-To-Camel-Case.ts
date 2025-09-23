//A small challenge to take a "snake-case" string and return the same string but in Camel-case instead.
//Example => this_is_an_example > thisIsAnExample

function snakeCaseToCamelCase(value : string) {
  let arr = [];
  let result = "";
  const temp = value.split("_");
  
  for (const el of temp) {
    arr.push(el.charAt(0).toUpperCase() + el.slice(1).toLowerCase());
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result.charAt(0).toLowerCase() + result.slice(1).toString();
}

console.log(snakeCaseToCamelCase("hello_world_with_types"));
console.log(snakeCaseToCamelCase("HELLO_WORLD_WITH_TYPES"));
