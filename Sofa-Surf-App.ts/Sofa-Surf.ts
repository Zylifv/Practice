let myBasket = document.getElementById("basket");
let currentBasket = document.getElementById("current-basket");
currentBasket.style.display = "none";
const reviewsTotalDisplay = document.getElementById("reviews");
const reviews : {
  name : string;
  stars : boolean;
  loyaltyUser : boolean;
  date : string;
  
} = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 4,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Leon',
        stars: 4.2,
        loyaltyUser: false,
        date: '28-03-2023'
    },
    {
        name: 'Omar',
        stars: 4.6,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

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
  contact : string;
  isAvailable : boolean;
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
      contact: "BobDylan@email.com",
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
      contact: "LilyPettingsworth@email.com",
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
      contact: "CityScapesLondon@email.com",
      isAvailable: true,
    }
];


function numOfReviews(value : number, reviewer : string, stars : number, loyalty : boolean) {
  const loyaltyCheck = loyalty ? "⭐ - Loyal user" : "";
  reviewsTotalDisplay.innerHTML = "Reviews: " + value.toString() + " | Last reviewed by: " + reviewer;
  reviewsTotalDisplay.innerHTML += `<br> ${reviewer} rated ${stars} stars! ${loyaltyCheck}`
}

  for (let i = 0; i < reviews.length; i++) {
    setInterval(
  numOfReviews(reviews.length, reviews[i % reviews.length].name, reviews[i % reviews.length].stars, reviews[i % reviews.length].loyaltyUser), 1500);
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
    card.setAttribute("class", "property-cards");
    card.classList.add('card')
    card.innerHTML = `<h3>${properties[i].title}</h3>`
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    image.setAttribute("width", "400px");
    card.appendChild(image);
    propertyDisplay.appendChild(card)
    card.innerHTML += `
    <p id="price">Price Per Night: £-${properties[i].price}</p>
    <button id=${properties[i].location.code} class="add-btn"><span>Find out more</span></button>
    <p id="availability">Availability: ${properties[i].isAvailable == false ? "No" : "Yes"}</p>
    <p id="contact">Contact: ${properties[i].contact}</p>`
}

const allBtns = document.querySelectorAll(".add-btn");

allBtns.forEach((el) => {
  console.log(`${el.id}`);
})
