const talismans_display = document.getElementById("talismans_display");
const input = document.getElementById("talisman_input");
const myList = document.getElementById("myList");
const arr = [];

function getData() {
  
  fetch("https://eldenring.fanapis.com/api/talismans?limit=100", {
  
  }).then(res => res.json())
  .then(talismans => {
    for (let i = 0; i < 87; i++) {
      arr.push({id: talismans.data[i].id, name: talismans.data[i].name, image: talismans.data[i].image, description: talismans.data[i].description, effect: talismans.data[i].effect});
    }
  })
  .then(talismans => renderTalismans())
  .catch(error => console.log("Error"))
}

getData();

function renderTalismans() {
  
  for (let i = 0; i < arr.length; i++) {
    
    const div = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const effect = document.createElement("p");
    image.classList = "card-img";
    
    image.src = arr[i].image;
    name.innerText = arr[i].name;
    description.innerText = `Description: ${arr[i].description}`;
    effect.innerText = `Effect: ${arr[i].effect}`;
    div.setAttribute("class", "talisman");
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(effect);

    talismans_display.appendChild(div);
  }
}

renderTalismans();

myList.addEventListener("click", (e) => {
  if (e.target.classList.contains("talisman")) {
    const id = e.target.id;
    input.value = id;
  }
})

function datalistMatch(e) {
  
  let a = document.createElement("div");
  
  for (let i = 0; i < arr.length; i++) {
    let dropdown = document.createElement("div");
    let val = input.value;
    let talisman_name = arr[i].name;
    let img = arr[i].image;
    let description = arr[i].description;
    let effect = arr[i].effect;
    let talisman_matches = talisman_name.substr(0, val.length).toUpperCase() == val.toUpperCase() ? 1 : 0;
    let talisman_chars = talisman_name.split(" ");
      for (let j = 0; j < talisman_chars.length; j++) {
        talisman_matches += talisman_chars[j].substr(0, val.length).toUpperCase() == val.toUpperCase() ? 1 : 0;
      }
    if (input === "") {
      myList.style.display = "none";
      renderTalismans();
    }
    if (talisman_matches > 0 && input.value !== "") {
      myList.style.display = "block";
      dropdown.setAttribute("id", talisman_name);
      dropdown.setAttribute("class", "talisman")
      let index = talisman_name.toLowerCase().indexOf(val.toLowerCase());
      dropdown.innerHTML += `<img src="${img}" width="100px" alt="talisman image"> <h2>${talisman_name}</h2> <p>Description: ${description}</p> <p>Effect: ${effect}</p>`;
    } else if (talisman_matches === 0) {
      for (const x of myList.children) {
        myList.removeChild(x);
      }
    } dropdown.innerHTML += "<input type='hidden' value='talisman_name'>"
      a.appendChild(dropdown);
      myList.appendChild(a);
  }
}
