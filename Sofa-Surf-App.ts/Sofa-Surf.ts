const myBasket = document.getElementById("basket");
const currentBasket = document.getElementById("current-basket");
const currentLocation = document.getElementById("current-location");
const hideLocationBtn = document.getElementById("hide-curr-location");
const time = new Date().toLocaleTimeString();

currentBasket.style.display = "none";

console.log(window.innerWidth);

document.getElementById("form-submit").addEventListener("click", (e) => {
   e.preventDefault()
});

const properties : {
  image : string;
  title : string;
  price : number;
  location : {
    firstLine : (string | number);
    city : string;
    code : (string | number);
    country : string;
  }
  contact : [number, string];
  isAvailable : boolean;
  array : string[];
}[] = [
    {
      image: "https://media.istockphoto.com/id/471826199/photo/french-brittany-typical-house.jpg?s=612x612&w=0&k=20&c=Izy6Ms8WytO21jJ2gtuUlylIDl38TMgZYcFZTncFAcM=",
      title: "Suburb Cottage",
      price: 400,
      location: {
        firstLine: 24 + " Gooseberry Lane",
        city: "London",
        code: "LW13AB",
        country: "England"
      },
      contact: [675849, "Cottages.getaway@email.com"],
      isAvailable: true,
    },
    {
      image: "https://t4.ftcdn.net/jpg/00/49/73/77/360_F_49737747_jFKzX6unp3bQgAJCInYtNUY3Y8J1A1Ij.jpg",
      title: "Terraced Getaway",
      price: 200,
      location: {
        firstLine: 45 + " Perrywinkle Road",
        city: "Reading",
        code: "RG31YZ",
        country: "England"
      },
      contact: [394857, "LilyPettingsworth@email.com"],
      isAvailable: false,
    },
    {
      image: "https://static.standard.co.uk/2025/06/13/17/42/Opus-at-Bankside-Yards--Photo-credit_-Native-Land-(4).jpeg?trim=146,0,147,0&quality=75&auto=webp&width=1000",
      title: "City Central Skyline",
      price: 375,
      location: {
        firstLine: 69 + " ScraperTower Street",
        city: "London",
        code: "LW39EZ",
        country: "England"
      },
      contact: [291658, "CityScapesLondon@email.com"],
      isAvailable: true,
    }
];

console.log(properties[0].array);

const reviewsTotalDisplay = document.getElementById("reviews");

enum UserLoyaltyLevel {
  GOLD_USER,
  SILVER_USER,
  BRONZE_USER
} 

const reviews : {
  name : string;
  stars : boolean;
  loyaltyUser : UserLoyaltyLevel;
  date : string;
  
} = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserLoyaltyLevel.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 4,
        loyaltyUser: UserLoyaltyLevel.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4.2,
        loyaltyUser: UserLoyaltyLevel.SILVER_USER,
        date: '28-03-2023'
    },
    {
        name: 'Nikita',
        stars: 4.6,
        loyaltyUser: UserLoyaltyLevel.GOLD_USER,
        date: '27-03-2021'
    },
  {
        name: 'Ottilie',
        stars: 4.9,
        loyaltyUser: UserLoyaltyLevel.GOLD_USER,
        date: '23-06-2024'
    },
]

function numOfReviews(value : number, reviewer : string, stars : number, loyalty : UserLoyaltyLevel) {
  
   const loyaltyCheck = loyalty == UserLoyaltyLevel.GOLD_USER ? " | ⭐ - Verified user" : "";
   reviewsTotalDisplay.innerHTML = "Reviews: " + value.toString() + " | Last reviewed by: " + reviewer;
   reviewsTotalDisplay.innerHTML += `<br> ${reviewer} rated ${stars} stars! ${loyaltyCheck}`
}

numOfReviews(reviews.length, reviews[reviews.length - 2].name, reviews[reviews.length - 2].stars, reviews[reviews.length - 2].loyaltyUser);

for (let i = 0; i < reviews.length; i++) {
  setInterval(function() {
      numOfReviews(reviews.length, reviews[i].name, reviews[i].stars, reviews[i].loyaltyUser);
      i++;
      i %= reviews.length;
    }, 8500);    
}



myBasket.addEventListener("click", () => {
  if (currentBasket.style.display === "none") {
    currentBasket.style.display = "block";
  } else {
    currentBasket.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (e.target !== myBasket) {
    currentBasket.style.display = "none";
  }
  currentBasket.style.backgroundColor = "#fbfbfb";
  currentBasket.style.color = "#424548";
})


const propertyDisplay = document.getElementById("property-page");

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    const button = document.createElement('button');
    const image = document.createElement('img');
        card.setAttribute("class", "property-cards");
        card.classList.add('card')
        card.innerHTML = `<h3>${properties[i].title}</h3>`
        image.setAttribute('src', properties[i].image)
        image.setAttribute("width", "365px");
        card.appendChild(image);
        propertyDisplay.appendChild(card)
        card.innerHTML += `
    <p id="price">Price Per Night: £-${properties[i].price}</p>
    <button id=${properties[i].location.code} class="add-btn"><span>Find out more</span></button>
    <p id="availability">Availability: ${properties[i].isAvailable == false ? "No" : "Yes"}</p>
    <p id="contact">Contact: +${properties[i].contact[0]} or ${properties[i].contact[1]}</p>`
}

const allBtns = document.querySelectorAll(".add-btn");

allBtns.forEach((el) => {
  console.log(`${el.id}`);
});


//TUPLE//
const currLocationData : [string, string, number] = ["London", `${time}`, 17];

currentLocation.innerHTML += `Current location - ${currLocationData[0]}<br>
Time: ${Number(currLocationData[1].substring(0, 2)) > 12 ? currLocationData[1] + " PM" : currLocationData[1] + " AM"}<br>
Current Temperature in ${currLocationData[0]}: ${currLocationData[2]}°C`


function toggleLocationData() {
  let x = document.getElementById("current-location");
  if (x.style.display === "none") {
    x.style.display = "block";
    hideLocationBtn.textContent = "X";
    hideLocationBtn.style.fontSize = "0.9em";
  } else {
    x.style.display = "none";
    hideLocationBtn.textContent = "^";
    hideLocationBtn.style.fontSize = "1.2em";
  } 
}
