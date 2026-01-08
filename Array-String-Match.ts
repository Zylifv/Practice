const arr : string[] = ["A", "r", "c", "R", "a", "i", "d", "e", "r", "s"];

for (let i : number = 0; i < arr.length; i++) {
  for (let j : number = i+1; j < arr.length - 1; j++) {
    if (arr[i] === arr[j]) {
      console.log(`position ${i+1}: ${arr[i]} and position ${j+1}: ${arr[j]}`);
    }
  }
}
