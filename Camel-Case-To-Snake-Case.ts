//A follow on from the snake-case to camel-case exercise, i wanted to give myself a small challenge and see if i could do it the other way around.
//I wanted to take advantage of regex to identify where to replace the capital letters which worked out great and i am happy with the result.

function camelCaseToSnakeCase(value : string) {
  
  const regex = /(?=[A-Z])/g;
  let result = "";
  
  if (value === "")
  {
    return "";
  }
  else if (value.length === 1)
  {
    return value.toLowerCase();
  }
  else
  {
    let temp = value.split(regex);
    return result = temp.join("_").toLowerCase();
  }
}

console.log(camelCaseToSnakeCase("pleasePrintHelloWorld"));
console.log(camelCaseToSnakeCase("snakeCaseToCamelCase"));
