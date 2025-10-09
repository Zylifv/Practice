const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  element.innerHTML = "";
  for (const el of arr) {
    element.innerHTML += `<span>${el}</span>`;
  }
}

function isOrdered(num1, num2) {
  return num1 <= num2 ? true : false;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index],arr[index+1])) {
    let swap = arr[index];
    arr[index] = arr[index+1];
    arr[index+1] = swap;
  }
}

function highlightCurrentEls(element, index) {
  element.children[index].style.border = "2px dashed red";
  element.children[index + 1].style.border = "2px dashed red";
}

generateBtn.addEventListener("click", () => {
  const startingArray = document.getElementById("starting-array");
  const arrayContainer = document.getElementById("array-container");

  if (startingArray.textContent || arrayContainer.textContent) {
    startingArray.innerHTML = "";
    arrayContainer.innerHTML = "";
    arrayContainer.appendChild(startingArray);
  }
  let array = generateArray();
  fillArrContainer(startingArray, array);
});

sortBtn.addEventListener("click", () => {
  const startingArray = document.getElementById("starting-array");
  const arrayContainer = document.getElementById("array-container");
  let spanArray = Array.from(startingArray.children);
  let array = spanArray.map((span) => parseInt(span.textContent));

  if (startingArray.textContent || arrayContainer.textContent) {
    startingArray.innerHTML = "";
    arrayContainer.innerHTML = "";
  }

    fillArrContainer(startingArray, array);
    highlightCurrentEls(startingArray, 0);
    arrayContainer.appendChild(startingArray);

  let swap = true;
  let count = 0;
  while (swap) {
  swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      const stepContainer = generateContainer();
	    if (count != 0) {
		    fillArrContainer(stepContainer, array);
		    highlightCurrentEls(stepContainer,i);
		    arrayContainer.appendChild(stepContainer);
	    }
    
      if (!isOrdered(array[i],array[i+1])) {
        swapElements(array,i);
        swap = true;
      }
	  count++;
  }
}

  const finalDivContainer = generateContainer();
  fillArrContainer(finalDivContainer, array);
  arrayContainer.appendChild(finalDivContainer);
  finalDivContainer.style.border = "4px solid green";
});
