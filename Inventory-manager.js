//A lab on making a product array index and manipulating the data to add/remove and edit the products and quantities

const inventory = [];

function findProductIndex(product) {
  let index = "";
  let item = inventory.find(({name}) => name === product.toLowerCase());
  index = inventory.indexOf(item);
  return index;
}

console.log(findProductIndex("grapes"));

function addProduct(product, num) {
  let item = product.name;
  let quantity = product.quantity;
  if (inventory.find(obj => obj.name === item.toLowerCase())) {
    let objIndex = inventory.findIndex(obj => obj.name === item.toLowerCase());
    let quant = inventory[objIndex].quantity;
    inventory[objIndex].quantity = Number(quant) + Number(quantity);
    console.log(`${item.toLowerCase()} quantity updated`)
  } else {
    inventory.push({name: `${item.toLowerCase()}`, quantity: Number(`${quantity}`)})
    console.log(`${item.toLowerCase()} added to inventory`);
  }
}

addProduct({name: "Bananas", quantity: 3});
addProduct({name: "Oranges", quantity: 2});
addProduct({name: "ORANGES", quantity: 2});
addProduct({name: "Apples", quantity: 5});
addProduct({name: "FlOUR", quantity: 20});
console.log("Inventory:", inventory);

function removeProduct(product, quantity) {
  let item = product.toLowerCase();
    if (!inventory.find(obj => obj.name === product.toLowerCase())) {
      console.log(`${product.toLowerCase()} not found`);
    } else if (inventory.find(obj => obj.name === product.toLowerCase())) {
      let objIndex = inventory.findIndex(obj => obj.name === product.toLowerCase());
      let quant = inventory[objIndex].quantity;
      let newQuant = Number(quant) - Number(quantity);
        if (newQuant > 0) {
          inventory[objIndex].quantity = newQuant
          console.log(`Remaining ${product.toLowerCase()} pieces: ${newQuant}`)
        } else if (newQuant === 0) {
          let index = findProductIndex(item);
          inventory.splice(index, 1);
        } else if (newQuant < 0) {
          console.log(`Not enough ${product.toLowerCase()} available, remaining pieces: ${quant}`)
        }
    }
}

removeProduct("FLOUR", 5);
