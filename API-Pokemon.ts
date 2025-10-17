//Height is in ft
//Weight is in kg
//Split generations by number
//For reference only

const pokemon : {
  name : string;
  types : string[];
  height : number;
  weight : number;
  generation : number;
}[]= [
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 6.9,
    generation: 1
    },
  {
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 13.0,
    generation: 1
  },
  {
    name: "Venusaur",
    types: ["Grass", "Poison"],
    height: 2.0,
    weight: 100.0,
    generation: 1
  },
  {
    name: "Charmander",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 8.5,
    generation: 1
  },
  {
    name: "Charmeleon",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.0,
    generation: 1
  },
  {
    name: "Charizard",
    types: ["Fire", "Flying"],
    height: 1.7,
    weight: 90.5,
    generation: 1
  },
  {
    name: "Squirtle",
    types: ["Water", "None"],
    height: 0.5,
    weight: 9.0,
    generation: 1
  },
  {
    name: "Wartortle",
    types: ["Water", "None"],
    height: 1.0,
    weight: 22.5,
    generation: 1
  },
  {
    name: "Blastoise",
    types: ["Water", "None"],
    height: 1.6,
    weight: 85.5,
    generation: 1
  },
  {
    name: "Caterpie",
    types: ["Bug", "None"],
    height: 0.3,
    weight: 2.9,
    generation: 1
  },
  {
    name: "Metapod",
    types: ["Bug", "None"],
    height: 0.7,
    weight: 9.9,
    generation: 1
  },
  {
    name: "Butterfree",
    types: ["Bug", "Flying"],
    height: 1.1,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Weedle",
    types: ["Bug", "Poison"],
    height: 0.3,
    weight: 3.2,
    generation: 1
  },
  {
    name: "Kakuna",
    types: ["Bug", "Poison"],
    height: 0.6,
    weight: 10.0,
    generation: 1
  },
  {
    name: "Beedrill",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Pidgey",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 1.8,
    generation: 1
    },
  {
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    height: 1.1,
    weight: 30.0,
    generation: 1
    },
  {
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    height: 1.5,
    weight: 39.5,
    generation: 1
    },
  {
    name: "Rattata",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 3.5,
    generation: 1
  },
  {
    name: "Raticate",
    types: ["Normal", "None"],
    height: 0.7,
    weight: 18.5,
    generation: 1
  },
  {
    name: "Spearow",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 2.0,
    generation: 1
  },
  {
    name: "Fearow",
    types: ["Normal", "Flying"],
    height: 1.2,
    weight: 38.0,
    generation: 1
  },
  {
    name: "Ekans",
    types: ["Poison", "None"],
    height: 2.0,
    weight: 6.9,
    generation: 1
  },
  {
    name: "Arbok",
    types: ["Poison", "None"],
    height: 3.5,
    weight: 65.0,
    generation: 1
  },
  {
    name: "Pikachu",
    types: ["Electric", "None"],
    height: 0.4,
    weight: 6.0,
    generation: 1
  },
  {
    name: "Raichu",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Sandshrew",
    types: ["Ground", "None"],
    height: 0.6,
    weight: 12.0,
    generation: 1
  },
  {
    name: "Sandslash",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Nidoran♀",
    types: ["Poison", "None"],
    height: 0.4,
    weight: 7.0,
    generation: 1
  },
  {
    name: "Nidorina",
    types: ["Poison", "None"],
    height: 0.8,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    height: 1.3,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Nidoran♂",
    types: ["Poison", "None"],
    height: 0.5,
    weight: 9.0,
    generation: 1
  },
  {
    name: "Nidorino",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Nidoking",
    types: ["Poison", "Ground"],
    height: 1.4,
    weight: 62.0,
    generation: 1
  },
  {
    name: "Clefairy",
    types: ["Fairy", "None"],
    height: 0.6,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Clefable",
    types: ["Fairy", "None"],
    height: 1.3,
    weight: 40.0,
    generation: 1
  },
  {
    name: "Vulpix",
    types: ["Fire", "None"],
    height: 0.6,
    weight: 9.9,
    generation: 1
  },
  {
    name: "Ninetales",
    types: ["Fire", "None"],
    height: 1.1,
    weight: 19.9,
    generation: 1
  },
  {
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    height: 0.5,
    weight: 5.5,
    generation: 1
  },
  {
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    height: 1.0,
    weight: 12.0,
    generation: 1
  }, 
  {
    name: "Zubat",
    types: ["Poison", "Flying"],
    height: 0.8,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Golbat",
    types: ["Poison", "Flying"],
    height: 1.6,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Oddish",
    types: ["Grass", "Poison"],
    height: 0.5,
    weight: 5.4,
    generation: 1
  },
  {
    name: "Gloom",
    types: ["Grass", "Poison"],
    height: 0.8,
    weight: 8.6,
    generation: 1
  },
  {
    name: "Vileplume",
    types: ["Grass", "Poison"],
    height: 1.2,
    weight: 18.6,
    generation: 1
  },
  {
    name: "Paras",
    types: ["Bug", "Grass"],
    height: 0.3,
    weight: 5.4,
    generation: 1
  },
  {
    name: "Parasect",
    types: ["Bug", "Grass"],
    height: 1.0,
    weight: 29.5,
    generation: 1
  },
  {
    name: "Venonat",
    types: ["Bug", "Poison"],
    height: 1.0,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Venomoth",
    types: ["Bug", "Poison"],
    height: 1.5,
    weight: 12.5,
    generation: 1
  },
  {
    name: "Diglett",
    types: ["Ground", "None"],
    height: 0.2,
    weight: 0.8,
    generation: 1
  },
  {
    name: "Dugtrio",
    types: ["Ground", "None"],
    height: 0.7,
    weight: 33.3,
    generation: 1
  },
  {
    name: "Meowth",
    types: ["Normal", "None"],
    height: 0.4,
    weight: 4.2,
    generation: 1
  },
  {
    name: "Persian",
    types: ["Normal", "None"],
    height: 1.0,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Psyduck",
    types: ["Water", "None"],
    height: 0.8,
    weight: 19.6,
    generation: 1
  },
  {
    name: "Golduck",
    types: ["Water", "None"],
    height: 1.7,
    weight: 76.6,
    generation: 1
  },
  {
    name: "Mankey",
    types: ["Fighting", "None"],
    height: 0.5,
    weight: 28.0,
    generation: 1
  },
  {
    name: "Primeape",
    types: ["Fighting", "None"],
    height: 1.0,
    weight: 32.0,
    generation: 1
  },
  {
    name: "Growlithe",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 19.0,
    generation: 1
  },
  {
    name: "Arcanine",
    types: ["Fire", "None"],
    height: 1.9,
    weight: 155.0,
    generation: 1
  },
  {
    name: "Poliwag",
    types: ["Water", "none"],
    height: 0.6,
    weight: 12.4,
    generation: 1
  },
  {
    name: "Poliwhirl",
    types: ["Water", "None"],
    height: 1.0,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    height: 1.3,
    weight: 54.0,
    generation: 1
  },
  
 {
    name: "Abra",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Kadabra",
    types: ["Psychic", "None"],
    height: 1.3,
    weight: 56.5,
    generation: 1
  },
  {
    name: "Alakazam",
    types: ["Psychic", "None"],
    height: 1.5,
    weight: 48.0,
    generation: 1
  },
  {
    name: "Machop",
    types: ["Fighting", "None"],
    height: 0.8,
    weight: 19.5,
    generation: 1
  },
  {
    name: "Machoke",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 70.5,
    generation: 1
  },
  {
    name: "Machamp",
    types: ["Fighting", "None"],
    height: 1.6,
    weight: 130.0,
    generation: 1
  },
  {
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    height: 0.7,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    height: 1.0,
    weight: 6.4,
    generation: 1
  },
  {
    name: "Victreebel",
    types: ["Grass", "Poison"],
    height: 1.7,
    weight: 15.5,
    generation: 1
  },
  {
    name: "Tentacool",
    types: ["Water", "Poison"],
    height: 0.9,
    weight: 45.5,
    generation: 1
  },
  {
    name: "Tentacruel",
    types: ["Water", "Poison"],
    height: 1.6,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Geodude",
    types: ["Rock", "Ground"],
    height: 0.4,
    weight: 20.0,
    generation: 1
  },
  {
    name: "Graveler",
    types: ["Rock", "Ground"],
    height: 1.0,
    weight: 105.0,
    generation: 1
  },
  {
    name: "Golem",
    types: ["Rock", "Ground"],
    height: 1.4,
    weight: 300.0,
    generation: 1
  },
  {
    name: "Ponyta",
    types: ["Fire", "None"],
    height: 1.0,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Rapidash",
    types: ["Fire", "None"],
    height: 1.7,
    weight: 95.0,
    generation: 1
  },
  {
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    height: 1.2,
    weight: 36.0,
    generation: 1
  },
  {
    name: "Slowbro",
    types: ["Water", "Psychic"],
    height: 1.6,
    weight: 78.5,
    generation: 1
  },
  {
    name: "Magnemite",
    types: ["Electric", "Steel"],
    height: 0.3,
    weight: 6.0,
    generation: 1
  },
  {
    name: "Magneton",
    types: ["Electric", "Steel"],
    height: 1.0,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    height: 0.8,
    weight: 15.0,
    generation: 1
  },
  {
    name: "Doduo",
    types: ["Normal", "Flying"],
    height: 1.4,
    weight: 39.2,
    generation: 1
  },
  {
    name: "Dodrio",
    types: ["Normal", "Flying"],
    height: 1.8,
    weight: 85.2,
    generation: 1
  },
  {
    name: "Seel",
    types: ["Water", "None"],
    height: 1.1,
    weight: 90.0,
    generation: 1
  },
  {
    name: "Dewgong",
    types: ["Water", "Ice"],
    height: 1.7,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Grimer",
    types: ["Poison", "None"],
    height: 0.9,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Muk",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Shellder",
    types: ["Water", "None"],
    height: 0.3,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Cloyster",
    types: ["Water", "Ice"],
    height: 1.5,
    weight: 132.5,
    generation: 1
  },
  {
    name: "Gastly",
    types: ["Ghost", "Poison"],
    height: 1.3,
    weight: 0.1,
    generation: 1
  },
  {
    name: "Haunter",
    types: ["Ghost", "Poison"],
    height: 1.6,
    weight: 0.1,
    generation: 1
  },
  {
    name: "Gengar",
    types: ["Ghost", "Poison"],
    height: 1.5,
    weight: 40.5,
    generation: 1
  },
  {
    name: "Onix",
    types: ["Rock", "Ground"],
    height: 8.8,
    weight: 210.0,
    generation: 1
  },
  {
    name: "Drowzee",
    types: ["Psychic", "None"],
    height: 1.0,
    weight: 32.4,
    generation: 1
  },
  {
    name: "Hypno",
    types: ["Psychic", "None"],
    height: 1.6,
    weight: 75.6,
    generation: 1
  },
  {
    name: "Krabby",
    types: ["Water", "None"],
    height: 0.4,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Kingler",
    types: ["Water", "None"],
    height: 1.3,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Voltorb",
    types: ["Electric", "None"],
    height: 0.5,
    weight: 10.4,
    generation: 1
  },
  {
    name: "Electrode",
    types: ["Electric", "None"],
    height: 1.2,
    weight: 66.6,
    generation: 1
  },
  {
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    height: 0.4,
    weight: 2.5,
    generation: 1
  },
  {
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    height: 2.0,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Cubone",
    types: ["Ground", "None"],
    height: 0.4,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Marowak",
    types: ["Ground", "None"],
    height: 1.0,
    weight: 45.0,
    generation: 1
  },
  {
    name: "Hitmonlee",
    types: ["Fighting", "None"],
    height: 1.5,
    weight: 49.8,
    generation: 1
  },
  {
    name: "Hitmonchan",
    types: ["Fighting", "None"],
    height: 1.4,
    weight: 50.2,
    generation: 1
  },
  {
    name: "Lickitung",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 65.5,
    generation: 1
  },
  {
    name: "Koffing",
    types: ["Poison", "None"],
    height: 0.6,
    weight: 1.0,
    generation: 1
  },
  {
    name: "Weezing",
    types: ["Poison", "None"],
    height: 1.2,
    weight: 9.5,
    generation: 1
  },
  {
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    height: 1.0,
    weight: 115.0,
    generation: 1
  },
  {
    name: "Rhydon",
    types: ["Ground", "Rock"],
    height: 1.9,
    weight: 120.0,
    generation: 1
  },
  {
    name: "Chansey",
    types: ["Normal", "None"],
    height: 1.1,
    weight: 34.6,
    generation: 1
  },
  {
    name: "Tangela",
    types: ["Grass", "None"],
    height: 1.0,
    weight: 35.0,
    generation: 1
  },
  {
    name: "Kangaskhan",
    types: ["Normal", "None"],
    height: 2.2,
    weight: 80.0,
    generation: 1
  },
  {
    name: "Horsea",
    types: ["Water", "None"],
    height: 0.4,
    weight: 8.0,
    generation: 1
  },{
    name: "Seadra",
    types: ["Water", "None"],
    height: 1.2,
    weight: 25.0,
    generation: 1
  },
  {
    name: "Goldeen",
    types: ["Water", "None"],
    height: 0.6,
    weight: 15.0,
    generation: 1
  },
  {
    name: "Seaking",
    types: ["Water", "None"],
    height: 1.3,
    weight: 39.0,
    generation: 1
  },
  {
    name: "Staryu",
    types: ["Water", "None"],
    height: 0.8,
    weight: 34.5,
    generation: 1
  },
  {
    name: "Starmie",
    types: ["Water", "Psychic"],
    height: 1.1,
    weight: 80.0,
    generation: 1
  },
  {
    name: "Mr mime",
    types: ["Psychic", "Fairy"],
    height: 1.3,
    weight: 54.5,
    generation: 1
  },
  {
    name: "Scyther",
    types: ["Bug", "Flying"],
    height: 1.5,
    weight: 56.0,
    generation: 1
  },
  {
    name: "Jynx",
    types: ["Ice", "Psychic"],
    height: 1.4,
    weight: 40.6,
    generation: 1
  },
  {
    name: "Electabuzz",
    types: ["Electric", "None"],
    height: 1.1,
    weight: 30.0,
    generation: 1
  },
  {
    name: "Magmar",
    types: ["Fire", "None"],
    height: 1.3,
    weight: 44.5,
    generation: 1
  },
  {
    name: "Pinsir",
    types: ["Bug", "None"],
    height: 1.5,
    weight: 55.0,
    generation: 1
  },
  {
    name: "Tauros",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 88.4,
    generation: 1
  },
  {
    name: "Magikarp",
    types: ["Water", "None"],
    height: 0.9,
    weight: 10.0,
    generation: 1
  },
  {
    name: "Gyarados",
    types: ["Water", "Flying"],
    height: 6.5,
    weight: 235.0,
    generation: 1
  },
  {
    name: "Lapras",
    types: ["Water", "Ice"],
    height: 2.5,
    weight: 220.0,
    generation: 1
  },
  {
    name: "Ditto",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 4.0,
    generation: 1
  },
  {
    name: "Eevee",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 6.5,
    generation: 1
  },
  {
    name: "Vaporeon",
    types: ["Water", "None"],
    height: 1.0,
    weight: 29.0,
    generation: 1
  },
  {
    name: "Jolteon",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 24.5,
    generation: 1
  },
  {
    name: "Flareon",
    types: ["Fire", "None"],
    height: 0.9,
    weight: 25.0,
    generation: 1
  },
  {
    name: "Porygon",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 36.5,
    generation: 1
  },
  {
    name: "Omanyte",
    types: ["Rock", "Water"],
    height: 0.4,
    weight: 7.5,
    generation: 1
  },
  {
    name: "Omastar",
    types: ["Rock", "Water"],
    height: 1.0,
    weight: 35.0,
    generation: 1
  },
  {
    name: "Kabuto",
    types: ["Rock", "Water"],
    height: 0.5,
    weight: 11.5,
    generation: 1
  },
  {
    name: "Kabutops",
    types: ["Rock", "Water"],
    height: 1.3,
    weight: 40.5,
    generation: 1
  },
  {
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    height: 1.8,
    weight: 59.0,
    generation: 1
  },
  {
    name: "Snorlax",
    types: ["Normal", "None"],
    height: 2.1,
    weight: 460.0,
    generation: 1
  },
  {
    name: "Articuno",
    types: ["Ice", "Flying"],
    height: 1.7,
    weight: 55.4,
    generation: 1
  },
  {
    name: "Zapdos",
    types: ["Electric", "Flying"],
    height: 1.6,
    weight: 52.6,
    generation: 1
  },
  {
    name: "Moltres",
    types: ["Fire", "Flying"],
    height: 2.0,
    weight: 60.0,
    generation: 1
  },
  {
    name: "Dratini",
    types: ["Dragon", "None"],
    height: 1.8,
    weight: 3.3,
    generation: 1
  },
  {
    name: "Dragonair",
    types: ["Dragon", "None"],
    height: 4.0,
    weight: 16.5,
    generation: 1
  },
  {
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    height: 2.2,
    weight: 210.0,
    generation: 1
  },
  {
    name: "Mewtwo",
    types: ["Psychic", "None"],
    height: 2.0,
    weight: 122.0,
    generation: 1
  },
  {
    name: "Mew",
    types: ["Psychic", "None"],
    height: 0.4,
    weight: 4.0,
    generation: 1
  }];
