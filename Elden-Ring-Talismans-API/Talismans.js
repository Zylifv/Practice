const display = document.querySelector("#display");
const list = document.getElementById("list");

function getData() {
  
  fetch("https://eldenring.fanapis.com/api/talismans", {
    
  }).then(res => res.json())
  .then(talismans => {
    console.log(talismans.data);
    renderTalismans(talismans.data);
  })
  .catch(error => console.log("Error"))
}

getData();

function renderTalismans(talismans) {
  talismans.forEach(talisman => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const effect = document.createElement("p");
    
    image.classList = "card-img";
    
    image.src = talisman.image;
    name.innerText = `Name: ${talisman.name}`;
    description.innerText = `Description: ${talisman.description}`;
    effect.innerText = `Effect: ${talisman.effect}`;
    
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(effect);
    display.appendChild(div);
  });
}
