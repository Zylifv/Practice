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
  },
  {
    name: "Chikorita",
    types: ["Grass", "None"],
    height: 0.9,
    weight: 6.4,
    generation: 2
  },
  {
    name: "Bayleef",
    types: ["Grass", "None"],
    height: 1.2,
    weight: 15.8,
    generation: 2
  },
  {
    name: "Meganium",
    types: ["Grass", "None"],
    height: 1.8,
    weight: 100.5,
    generation: 2
  },
  {
    name: "Cyndaquil",
    types: ["Fire", "None"],
    height: 0.5,
    weight: 7.9,
    generation: 2
  },
  {
    name: "Quilava",
    types: ["Fire", "None"],
    height: 0.9,
    weight: 19,
    generation: 2
  },
  {
    name: "Typhlosion",
    types: ["Fire", "None"],
    height: 1.7,
    weight: 79.5,
    generation: 2
  },
  {
    name: "Totodile",
    types: ["Water", "None"],
    height: 0.6,
    weight: 9.5,
    generation: 2
  },
  {
    name: "Croconaw",
    types: ["Water", "None"],
    height: 1.1,
    weight: 25.0,
    generation: 2
  },
  {
    name: "Feraligatr",
    types: ["Water", "None"],
    height: 2.3,
    weight: 88.8,
    generation: 2
  },
  {
    name: "Sentret",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 6.0,
    generation: 2
  },
  {
    name: "Furret",
    types: ["Normal", "None"],
    height: 1.8,
    weight: 32.5,
    generation: 2
  },
  {
    name: "Hoothoot",
    types: ["Normal", "Flying"],
    height: 0.7,
    weight: 21.2,
    generation: 2
  },
  {
    name: "Noctowl",
    types: ["Normal", "Flying"],
    height: 1.6,
    weight: 40.8,
    generation: 2
  },
  {
    name: "Ledyba",
    types: ["Bug", "Flying"],
    height: 1.0,
    weight: 10.8,
    generation: 2
  },
  {
    name: "Ledian",
    types: ["Bug", "Flying"],
    height: 1.4,
    weight: 35.6,
    generation: 2
  },
  {
    name: "Spinarak",
    types: ["Bug", "Poison"],
    height: 0.5,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Ariados",
    types: ["Bug", "Poison"],
    height: 1.1,
    weight: 33.5,
    generation: 2
  },
  {
    name: "Crobat",
    types: ["Poison", "Flying"],
    height: 1.8,
    weight: 75.0,
    generation: 2
  },
  {
    name: "Chinchou",
    types: ["Water", "Electric"],
    height: 0.5,
    weight: 12.0,
    generation: 2
  },
  {
    name: "Lanturn",
    types: ["Water", "Electric"],
    height: 1.2,
    weight: 22.5,
    generation: 2
  },
  {
    name: "Pichu",
    types: ["Electric", "None"],
    height: 0.3,
    weight: 2.0,
    generation: 2
  },
  {
    name: "Cleffa",
    types: ["Fairy", "None"],
    height: 0.3,
    weight: 3.0,
    generation: 2
  },
  {
    name: "Igglybuff",
    types: ["Normal", "Fairy"],
    height: 0.3,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Togepi",
    types: ["Fairy", "None"],
    height: 0.3,
    weight: 1.5,
    generation: 2
  },
  {
    name: "Togetic",
    types: ["Fairy", "Flying"],
    height: 0.6,
    weight: 3.2,
    generation: 2
  },
  {
    name: "Natu",
    types: ["Psychic", "Flying"],
    height: 0.2,
    weight: 2.0,
    generation: 2
  },
  {
    name: "Xatu",
    types: ["Psychic", "Flying"],
    height: 1.5,
    weight: 15.0,
    generation: 2
  },
  {
    name: "Mareep",
    types: ["Electric", "None"],
    height: 0.6,
    weight: 7.8,
    generation: 2
  },
  {
    name: "Flaffy",
    types: ["Electric", "None"],
    height: 0.8,
    weight: 13.3,
    generation: 2
  },
  {
    name: "Ampharos",
    types: ["Electric", "None"],
    height: 1.4,
    weight: 61.5,
    generation: 2
  },
  {
    name: "Bellossom",
    types: ["Grass", "None"],
    height: 0.4,
    weight: 5.8,
    generation: 2
  },
  {
    name: "Marill",
    types: ["Water", "Fairy"],
    height: 0.4,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Azumarill",
    types: ["Water", "Fairy"],
    height: 0.8,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Sudowoodo",
    types: ["Rock", "None"],
    height: 1.2,
    weight: 38.0,
    generation: 2
  },
  {
    name: "Politoed",
    types: ["Water", "None"],
    height: 1.1,
    weight: 33.9,
    generation: 2
  },
  {
    name: "Hoppip",
    types: ["Grass", "Flying"],
    height: 0.4,
    weight: 0.5,
    generation: 2
  },
  {
    name: "Skiploom",
    types: ["Grass", "Flying"],
    height: 0.6,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Jumpluff",
    types: ["Grass", "Flying"],
    height: 0.8,
    weight: 3.0,
    generation: 2
  },
  {
    name: "Aipom",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 11.5,
    generation: 2
  },
  {
    name: "Sunkern",
    types: ["Grass", "None"],
    height: 0.3,
    weight: 1.8,
    generation: 2
  },
  {
    name: "Sunflora",
    types: ["Grass", "None"],
    height: 0.8,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Yanma",
    types: ["Bug", "Flying"],
    height: 1.2,
    weight: 38.0,
    generation: 2
  },
  {
    name: "Wooper",
    types: ["Water", "Ground"],
    height: 0.4,
    weight: 8.5,
    generation: 2
  },
  {
    name: "Quagsire",
    types: ["Water", "Ground"],
    height: 1.4,
    weight: 75.0,
    generation: 2
  },
  {
    name: "Espeon",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 26.5,
    generation: 2
  },
  {
    name: "Umbreon",
    types: ["Dark", "None"],
    height: 1.0,
    weight: 27.0,
    generation: 2
  },
  {
    name: "Murkrow",
    types: ["Dark", "Flying"],
    height: 0.5,
    weight: 2.1,
    generation: 2
  },
  {
    name: "Slowking",
    types: ["Water", "Psychic"],
    height: 2.0,
    weight: 79.5,
    generation: 2
  },
  {
    name: "Misdreavus",
    types: ["Ghost", "None"],
    height: 0.7,
    weight: 1.0,
    generation: 2
  },
  {
    name: "Unown",
    types: ["Psychic", "None"],
    height: 0.5,
    weight: 5.0,
    generation: 2
  },
  {
    name: "Wobbuffet",
    types: ["Psychic", "None"],
    height: 1.3,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Girafarig",
    types: ["Normal", "Psychic"],
    height: 1.5,
    weight: 41.5,
    generation: 2
  },
  {
    name: "Pineco",
    types: ["Bug", "None"],
    height: 0.6,
    weight: 7.2,
    generation: 2
  },
  {
    name: "Forretress",
    types: ["Bug", "Steel"],
    height: 1.2,
    weight: 125.8,
    generation: 2
  },
  {
    name: "Dunsparce",
    types: ["Normal", "None"],
    height: 1.5,
    weight: 14.0,
    generation: 2
  },
  {
    name: "Gligar",
    types: ["Ground", "Flying"],
    height: 1.1,
    weight: 64.8,
    generation: 2
  },
  {
    name: "Steelix",
    types: ["Steel", "Ground"],
    height: 9.2,
    weight: 400.0,
    generation: 2
  },
  {
    name: "Snubbull",
    types: ["Fairy", "None"],
    height: 0.6,
    weight: 7.8,
    generation: 2
  },
  {
    name: "Granbull",
    types: ["Fairy", "None"],
    height: 1.4,
    weight: 48.7,
    generation: 2
  },
  {
    name: "Qwilfish",
    types: ["Water", "Poison"],
    height: 0.5,
    weight: 3.9,
    generation: 2
  },
  {
    name: "Scizor",
    types: ["Bug", "Steel"],
    height: 1.8,
    weight: 118.0,
    generation: 2
  },
  {
    name: "Shuckle",
    types: ["Bug", "Rock"],
    height: 0.6,
    weight: 20.5,
    generation: 2
  },
  {
    name: "Heracross",
    types: ["Bug", "Fighting"],
    height: 1.5,
    weight: 54.0,
    generation: 2
  },
  {
    name: "Sneasel",
    types: ["Dark", "Ice"],
    height: 0.9,
    weight: 28.0,
    generation: 2
  },
  {
    name: "Teddiursa",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 8.8,
    generation: 2
  },
  {
    name: "Ursaring",
    types: ["Normal", "None"],
    height: 1.8,
    weight: 125.8,
    generation: 2
  },
  {
    name: "Slugma",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 35.0,
    generation: 2
  },
  {
    name: "Magcargo",
    types: ["Fire", "Rock"],
    height: 0.8,
    weight: 55.0,
    generation: 2
  },
  {
    name: "Swinub",
    types: ["Ice", "Ground"],
    height: 0.4,
    weight: 6.5,
    generation: 2
  },
  {
    name: "Piloswine",
    types: ["Ice", "Ground"],
    height: 1.1,
    weight: 55.8,
    generation: 2
  },
  {
    name: "Corsola",
    types: ["Water", "Rock"],
    height: 0.6,
    weight: 5.0,
    generation: 2
  },
  {
    name: "Remoraid",
    types: ["Water", "None"],
    height: 0.6,
    weight: 12.0,
    generation: 2
  },
  {
    name: "Octillery",
    types: ["Water", "None"],
    height: 0.9,
    weight: 28.5,
    generation: 2
  },
  {
    name: "Delibird",
    types: ["Ice", "Flying"],
    height: 0.9,
    weight: 16.0,
    generation: 2
  },
  {
    name: "Mantine",
    types: ["Water", "Flying"],
    height: 2.1,
    weight: 220.0,
    generation: 2
  },
  {
    name: "Skarmory",
    types: ["Steel", "Flying"],
    height: 1.7,
    weight: 50.5,
    generation: 2
  },
  {
    name: "Houndour",
    types: ["Dark", "Fire"],
    height: 0.6,
    weight: 10.8,
    generation: 2
  },
  {
    name: "Houndoom",
    types: ["Dark", "Fire"],
    height: 1.4,
    weight: 35.0,
    generation: 2
  },
  {
    name: "Kingdra",
    types: ["Water", "Dragon"],
    height: 1.8,
    weight: 152.0,
    generation: 2
  },
  {
    name: "Phanpy",
    types: ["Ground", "None"],
    height: 0.5,
    weight: 33.5,
    generation: 2
  },
  {
    name: "Donphan",
    types: ["Ground", "None"],
    height: 1.1,
    weight: 120.0,
    generation: 2
  },
  {
    name: "Porygon two",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 32.5,
    generation: 2
  },
  {
    name: "Stantler",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 71.2,
    generation: 2
  },
  {
    name: "Smeargle",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 58.0,
    generation: 2
  },
  {
    name: "Tyrogue",
    types: ["Fighting", "None"],
    height: 0.7,
    weight: 21.0,
    generation: 2
  },
  {
    name: "Hitmontop",
    types: ["Fighting", "None"],
    height: 1.4,
    weight: 48.0,
    generation: 2
  },
  {
    name: "Smoochum",
    types: ["Ice", "Psychic"],
    height: 0.4,
    weight: 6.0,
    generation: 2
  },
  {
    name: "Elekid",
    types: ["Electric", "None"],
    height: 0.6,
    weight: 23.5,
    generation: 2
  },
  {
    name: "Magby",
    types: ["Fire", "None"],
    height: 0.7,
    weight: 21.4,
    generation: 2
  },
  {
    name: "Miltank",
    types: ["Normal", "None"],
    height: 1.2,
    weight: 75.5,
    generation: 2
  },
  {
    name: "Blissey",
    types: ["Normal", "None"],
    height: 1.5,
    weight: 46.8,
    generation: 2
  },
  {
    name: "Raikou",
    types: ["Electric", "None"],
    height: 1.9,
    weight: 178.0,
    generation: 2
  },
  {
    name: "Entei",
    types: ["Fire", "None"],
    height: 2.1,
    weight: 198.0,
    generation: 2
  },
  {
    name: "Suicune",
    types: ["Water", "None"],
    height: 2.0,
    weight: 187.0,
    generation: 2
  },
  {
    name: "Larvitar",
    types: ["Rock", "Ground"],
    height: 0.6,
    weight: 72.0,
    generation: 2
  },
  {
    name: "Pupitar",
    types: ["Rock", "Ground"],
    height: 1.2,
    weight: 152.0,
    generation: 2
  },
  {
    name: "Tyranitar",
    types: ["Rock", "Ground"],
    height: 2.0,
    weight: 202.0,
    generation: 2
  },
  {
    name: "Lugia",
    types: ["Psychic", "Flying"],
    height: 5.2,
    weight: 216.0,
    generation: 2
  },
  {
    name: "Ho oh",
    types: ["Fire", "Flying"],
    height: 3.8,
    weight: 199.0,
    generation: 2
  },
  {
    name: "Celebi",
    types: ["Psychic", "Grass"],
    height: 0.6,
    weight: 5.0,
    generation: 2
  },
  {
    name: "Treecko",
    types: ["Grass", "None"],
    height: 0.5,
    weight: 5.0,
    generation: 3
  },
  {
    name: "Grovyle",
    types: ["Grass", "None"],
    height: 0.9,
    weight: 21.6,
    generation: 3
  },
  {
    name: "Sceptile",
    types: ["Grass", "None"],
    height: 1.7,
    weight: 52.2,
    generation: 3
  },
  {
    name: "Torchic",
    types: ["Fire", "None"],
    height: 0.4,
    weight: 2.5,
    generation: 3
  },
  {
    name: "Combusken",
    types: ["Fire", "Fighting"],
    height: 0.9,
    weight: 19.5,
    generation: 3
  },
  {
    name: "Blaziken",
    types: ["Fire", "Fighting"],
    height: 1.9,
    weight: 52.0,
    generation: 3
  },
  {
    name: "Mudkip",
    types: ["Water", "None"],
    height: 0.4,
    weight: 7.6,
    generation: 3
  },
  {
    name: "Marshtomp",
    types: ["Water", "Ground"],
    height: 0.7,
    weight: 28.0,
    generation: 3
  },
  {
    name: "Swampert",
    types: ["Water", "Ground"],
    height: 1.5,
    weight: 81.9,
    generation: 3
  },
  {
    name: "Poochyena",
    types: ["Dark", "None"],
    height: 0.5,
    weight: 13.6,
    generation: 3
  },
  {
    name: "Mightyena",
    types: ["Dark", "None"],
    height: 1.0,
    weight: 37.0,
    generation: 3
  },
  {
    name: "Zigzagoon",
    types: ["Normal", "None"],
    height: 0.4,
    weight: 17.5,
    generation: 3
  },
  {
    name: "Linoone",
    types: ["Normal", "None"],
    height: 0.5,
    weight: 32.5,
    generation: 3
  },
  {
    name: "Wurmple",
    types: ["Bug", "None"],
    height: 0.3,
    weight: 3.6,
    generation: 3
  },
  {
    name: "Silcoon",
    types: ["Bug", "None"],
    height: 0.6,
    weight: 10.0,
    generation: 3
  },
  {
    name: "Beautifly",
    types: ["Bug", "Flying"],
    height: 1.0,
    weight: 28.4,
    generation: 3
  },
  {
    name: "Cascoon",
    types: ["Bug", "None"],
    height: 0.7,
    weight: 11.5,
    generation: 3
  },
  {
    name: "Dustox",
    types: ["Bug", "Poison"],
    height: 1.2,
    weight: 31.6,
    generation: 3
  },
  {
    name: "Lotad",
    types: ["Water", "Grass"],
    height: 0.5,
    weight: 2.6,
    generation: 3
  },
  {
    name: "Lombre",
    types: ["Water", "Grass"],
    height: 1.2,
    weight: 32.5,
    generation: 3
  },
  {
    name: "Ludicolo",
    types: ["Water", "Grass"],
    height: 1.5,
    weight: 55.0,
    generation: 3
  },
  {
    name: "Seedot",
    types: ["Grass", "None"],
    height: 0.5,
    weight: 4.0,
    generation: 3
  },
  {
    name: "Nuzleaf",
    types: ["Grass", "Dark"],
    height: 1.0,
    weight: 28.0,
    generation: 3
  },
  {
    name: "Shiftry",
    types: ["Grass", "Dark"],
    height: 1.3,
    weight: 59.6,
    generation: 3
  },
  {
    name: "Taillow",
    types: ["Normal", "Flying"],
    height: 0.3,
    weight: 2.3,
    generation: 3
  },
  {
    name: "Swellow",
    types: ["Normal", "Flying"],
    height: 0.7,
    weight: 19.8,
    generation: 3
  },
  {
    name: "Wingull",
    types: ["Water", "Flying"],
    height: 0.6,
    weight: 9.5,
    generation: 3
  },
  {
    name: "Pelipper",
    types: ["Water", "Flying"],
    height: 1.2,
    weight: 28.0,
    generation: 3
  },
  {
    name: "Ralts",
    types: ["Psychic", "Fairy"],
    height: 0.4,
    weight: 6.6,
    generation: 3
  },
  {
    name: "Kirlia",
    types: ["Psychic", "Fairy"],
    height: 0.8,
    weight: 20.2,
    generation: 3
  },
  {
    name: "Gardevoir",
    types: ["Psychic", "Fairy"],
    height: 1.6,
    weight: 48.4,
    generation: 3
  },
  {
    name: "Surskit",
    types: ["Bug", "Water"],
    height: 0.5,
    weight: 1.7,
    generation: 3
  },
  {
    name: "Masquerain",
    types: ["Bug", "Flying"],
    height: 0.8,
    weight: 3.6,
    generation: 3
  },
  {
    name: "Shroomish",
    types: ["Grass", "None"],
    height: 0.4,
    weight: 4.5,
    generation: 3
  },
  {
    name: "Breloom",
    types: ["Grass", "Fighting"],
    height: 1.2,
    weight: 39.2,
    generation: 3
  },
  {
    name: "Slakoth",
    types: ["Normal", "None"],
    height: 0.8,
    weight: 24.0,
    generation: 3
  },
  {
    name: "Vigoroth",
    types: ["Normal", "None"],
    height: 1.4,
    weight: 46.5,
    generation: 3
  },
  {
    name: "Slaking",
    types: ["Normal", "None"],
    height: 2.0,
    weight: 130.5,
    generation: 3
  },
  {
    name: "Nincada",
    types: ["Bug", "Ground"],
    height: 0.5,
    weight: 5.5,
    generation: 3
  },
  {
    name: "Ninjask",
    types: ["Bug", "Flying"],
    height: 0.8,
    weight: 12.0,
    generation: 3
  },
  {
    name: "Shedinja",
    types: ["Bug", "Ghost"],
    height: 0.8,
    weight: 1.2,
    generation: 3
  },
  {
    name: "Whismur",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 16.3,
    generation: 3
  },
  {
    name: "Loudred",
    types: ["Normal", "None"],
    height: 1.0,
    weight: 40.5,
    generation: 3
  },
  {
    name: "Exploud",
    types: ["Normal", "None"],
    height: 1.5,
    weight: 84.0,
    generation: 3
  },
  {
    name: "Makuhita",
    types: ["Fighting", "None"],
    height: 1.0,
    weight: 86.4,
    generation: 3
  },
  {
    name: "Hariyama",
    types: ["Fighting", "None"],
    height: 2.3,
    weight: 253.8,
    generation: 3
  },
  {
    name: "Azurill",
    types: ["Normal", "Fairy"],
    height: 0.2,
    weight: 2.0,
    generation: 3
  },
  {
    name: "Nosepass",
    types: ["Rock", "None"],
    height: 1.0,
    weight: 97.0,
    generation: 3
  },
  {
    name: "Skitty",
    types: ["Normal", "None"],
    height: 0.6,
    weight: 11.0,
    generation: 3
  },
  {
    name: "Delcatty",
    types: ["Normal", "None"],
    height: 1.1,
    weight: 32.6,
    generation: 3
  },
  {
    name: "Sableye",
    types: ["Dark", "Ghost"],
    height: 0.5,
    weight: 11.0,
    generation: 3
  },
  {
    name: "Mawile",
    types: ["Steel", "Fairy"],
    height: 0.6,
    weight: 11.5,
    generation: 3
  },
  {
    name: "Aron",
    types: ["Steel", "Rock"],
    height: 0.4,
    weight: 60.0,
    generation: 3
  },
  {
    name: "Lairon",
    types: ["Steel", "Rock"],
    height: 0.9,
    weight: 120.0,
    generation: 3
  },
  {
    name: "Aggron",
    types: ["Steel", "Rock"],
    height: 2.1,
    weight: 360.0,
    generation: 3
  },
  {
    name: "Meditite",
    types: ["Fighting", "Psychic"],
    height: 0.6,
    weight: 11.2,
    generation: 3
  },
  {
    name: "Medicham",
    types: ["Fighting", "Psychic"],
    height: 1.3,
    weight: 31.5,
    generation: 3
  },
  {
    name: "Electrike",
    types: ["Electric", "None"],
    height: 0.6,
    weight: 15.2,
    generation: 3
  },
  {
    name: "Manectric",
    types: ["Electric", "None"],
    height: 1.5,
    weight: 40.2,
    generation: 3
  },
  {
    name: "Plusle",
    types: ["Electric", "None"],
    height: 0.4,
    weight: 4.2,
    generation: 3
  },
  {
    name: "Minun",
    types: ["Electric", "None"],
    height: 0.4,
    weight: 4.2,
    generation: 3
  },
  {
    name: "Volbeat",
    types: ["Bug", "None"],
    height: 0.7,
    weight: 17.7,
    generation: 3
  },
  {
    name: "Illumise",
    types: ["Bug", "None"],
    height: 0.6,
    weight: 17.7,
    generation: 3
  },
  {
    name: "Roselia",
    types: ["Grass", "Poison"],
    height: 0.3,
    weight: 2.0,
    generation: 3
  },
  {
    name: "Gulpin",
    types: ["Poison", "None"],
    height: 0.4,
    weight: 10.3,
    generation: 3
  },
  {
    name: "Swalot",
    types: ["Poison", "None"],
    height: 1.7,
    weight: 80.0,
    generation: 3
  },
  {
    name: "Carvanha",
    types: ["Water", "Dark"],
    height: 0.8,
    weight: 20.8,
    generation: 3
  },
  {
    name: "Sharpedo",
    types: ["Water", "Dark"],
    height: 1.8,
    weight: 88.8,
    generation: 3
  },
  {
    name: "Wailmer",
    types: ["Water", "None"],
    height: 2.0,
    weight: 130.0,
    generation: 3
  },
  {
    name: "Wailord",
    types: ["Water", "None"],
    height: 14.5,
    weight: 398.0,
    generation: 3
  },
  {
    name: "Numel",
    types: ["Fire", "Ground"],
    height: 0.7,
    weight: 24.0,
    generation: 3
  },
  {
    name: "Camerupt",
    types: ["Fire", "Ground"],
    height: 1.9,
    weight: 220.0,
    generation: 3
  },
  {
    name: "Torkoal",
    types: ["Fire", "None"],
    height: 0.5,
    weight: 80.4,
    generation: 3
  },
  {
    name: "Spoink",
    types: ["Psychic", "None"],
    height: 0.7,
    weight: 30.6,
    generation: 3
  },
  {
    name: "Grumpig",
    types: ["Psychic", "None"],
    height: 0.9,
    weight: 71.5,
    generation: 3
  },
  {
    name: "Spinda",
    types: ["Normal", "None"],
    height: 1.1,
    weight: 5.0,
    generation: 3
  },
  {
    name: "Trapinch",
    types: ["Ground", "None"],
    height: 0.7,
    weight: 15.0,
    generation: 3
  },
  {
    name: "Vibrava",
    types: ["Ground", "Dragon"],
    height: 1.1,
    weight: 15.3,
    generation: 3
  },
  {
    name: "Flygon",
    types: ["Ground", "Dragon"],
    height: 2.0,
    weight: 82.0,
    generation: 3
  },
  {
    name: "Cacnea",
    types: ["Grass", "None"],
    height: 0.4,
    weight: 51.3,
    generation: 3
  },
  {
    name: "Cacturne",
    types: ["Grass", "Dark"],
    height: 1.3,
    weight: 77.4,
    generation: 3
  },
  {
    name: "Swablu",
    types: ["Normal", "Flying"],
    height: 0.4,
    weight: 1.2,
    generation: 3
  },
  {
    name: "Altaria",
    types: ["Dragon", "Flying"],
    height: 1.1,
    weight: 20.6,
    generation: 3
  },
  {
    name: "Zangoose",
    types: ["Normal", "None"],
    height: 1.3,
    weight: 40.3,
    generation: 3
  },
  {
    name: "Seviper",
    types: ["Poison", "None"],
    height: 2.7,
    weight: 52.5,
    generation: 3
  },
  {
    name: "Lunatone",
    types: ["Rock", "Psychic"],
    height: 1.0,
    weight: 168.0,
    generation: 3
  },
  {
    name: "Solrock",
    types: ["Rock", "Psychic"],
    height: 1.2,
    weight: 154.0,
    generation: 3
  },
  {
    name: "Barboach",
    types: ["Water", "Ground"],
    height: 0.4,
    weight: 1.9,
    generation: 3
  },
  {
    name: "Whiscash",
    types: ["Water", "Ground"],
    height: 0.9,
    weight: 23.6,
    generation: 3
  },
  {
    name: "Corphish",
    types: ["Water", "None"],
    height: 0.6,
    weight: 11.5,
    generation: 3
  },
  {
    name: "Crawdaunt",
    types: ["Water", "Dark"],
    height: 1.1,
    weight: 32.8,
    generation: 3
  },
  {
    name: "Baltoy",
    types: ["Ground", "Psychic"],
    height: 0.5,
    weight: 21.5,
    generation: 3
  },
  {
    name: "Claydol",
    types: ["Ground", "Psychic"],
    height: 1.5,
    weight: 108.0,
    generation: 3
  },
  {
    name: "Lileep",
    types: ["Rock", "Grass"],
    height: 1.0,
    weight: 23.8,
    generation: 3
  },
  {
    name: "Cradily",
    types: ["Rock", "Grass"],
    height: 1.5,
    weight: 60.4,
    generation: 3
  },
  {
    name: "Anorith",
    types: ["Rock", "Bug"],
    height: 0.7,
    weight: 12.5,
    generation: 3
  },
  {
    name: "Armaldo",
    types: ["Rock", "Bug"],
    height: 1.5,
    weight: 68.2,
    generation: 3
  },
  {
    name: "Feebas",
    types: ["Water", "None"],
    height: 0.6,
    weight: 7.4,
    generation: 3
  },
  {
    name: "Milotic",
    types: ["Water", "None"],
    height: 6.2,
    weight: 162.0,
    generation: 3
  },
  {
    name: "Castform",
    types: ["Normal", "None"],
    height: 0.3,
    weight: 0.8,
    generation: 3
  },
  {
    name: "Kecleon",
    types: ["Normal", "None"],
    height: 1.0,
    weight: 22.0,
    generation: 3
  },
  {
    name: "Shuppet",
    types: ["Ghost", "None"],
    height: 0.6,
    weight: 2.3,
    generation: 3
  },
  {
    name: "Banette",
    types: ["Ghost", "None"],
    height: 1.1,
    weight: 12.5,
    generation: 3
  },
  {
    name: "Duskull",
    types: ["Ghost", "None"],
    height: 0.8,
    weight: 15.0,
    generation: 3
  },
  {
    name: "Dusclops",
    types: ["Ghost", "None"],
    height: 1.6,
    weight: 30.6,
    generation: 3
  },
  {
    name: "Tropius",
    types: ["Grass", "Flying"],
    height: 2.0,
    weight: 100.0,
    generation: 3
  },
  {
    name: "Chimecho",
    types: ["Psychic", "None"],
    height: 0.6,
    weight: 1.0,
    generation: 3
  },
  {
    name: "Absol",
    types: ["Dark", "None"],
    height: 1.2,
    weight: 47.0,
    generation: 3
  },
  {
    name: "Wynaut",
    types: ["Psychic", "None"],
    height: 0.6,
    weight: 14.0,
    generation: 3
  },
  {
    name: "Snorunt",
    types: ["Ice", "None"],
    height: 0.7,
    weight: 16.8,
    generation: 3
  },
  {
    name: "Glalie",
    types: ["Ice", "None"],
    height: 1.5,
    weight: 256.5,
    generation: 3
  },
  {
    name: "Spheal",
    types: ["Ice", "Water"],
    height: 0.8,
    weight: 39.5,
    generation: 3
  },
  {
    name: "Sealeo",
    types: ["Ice", "Water"],
    height: 1.1,
    weight: 87.6,
    generation: 3
  },
  {
    name: "Walrein",
    types: ["Ice", "Water"],
    height: 1.4,
    weight: 150.6,
    generation: 3
  },
  {
    name: "Clamperl",
    types: ["Water", "None"],
    height: 0.4,
    weight: 52.5,
    generation: 3
  },
  {
    name: "Huntail",
    types: ["Water", "None"],
    height: 1.7,
    weight: 27.0,
    generation: 3
  },
  {
    name: "Gorebyss",
    types: ["Water", "None"],
    height: 1.8,
    weight: 22.6,
    generation: 3
  },
  {
    name: "Relicanth",
    types: ["Water", "Rock"],
    height: 1.0,
    weight: 23.4,
    generation: 3
  },
  {
    name: "Luvdisc",
    types: ["Water", "None"],
    height: 0.6,
    weight: 8.7,
    generation: 3
  },
  {
    name: "Bagon",
    types: ["Dragon", "None"],
    height: 0.6,
    weight: 42.1,
    generation: 3
  },
  {
    name: "Shelgon",
    types: ["Dragon", "None"],
    height: 1.1,
    weight: 110.5,
    generation: 3
  },
  {
    name: "Salamence",
    types: ["Dragon", "Flying"],
    height: 1.5,
    weight: 102.6,
    generation: 3
  },
  {
    name: "Beldum",
    types: ["Steel", "Psychic"],
    height: 0.6,
    weight: 95.2,
    generation: 3
  },
  {
    name: "Metang",
    types: ["Steel", "Psychic"],
    height: 1.2,
    weight: 202.5,
    generation: 3
  },
  {
    name: "Metagross",
    types: ["Steel", "Psychic"],
    height: 1.6,
    weight: 550.0,
    generation: 3
  },
  {
    name: "Regirock",
    types: ["Rock", "None"],
    height: 1.7,
    weight: 230.0,
    generation: 3
  },
  {
    name: "Regice",
    types: ["Ice", "None"],
    height: 1.8,
    weight: 175.0,
    generation: 3
  },
  {
    name: "Registeel",
    types: ["Steel", "None"],
    height: 1.9,
    weight: 205.0,
    generation: 3
  },
  {
    name: "Latias",
    types: ["Dragon", "Psychic"],
    height: 1.4,
    weight: 40.0,
    generation: 3
  },
  {
    name: "Latios",
    types: ["Dragon", "Psychic"],
    height: 2.0,
    weight: 60.0,
    generation: 3
  },
  {
    name: "Kyogre",
    types: ["Water", "None"],
    height: 4.5,
    weight: 352.0,
    generation: 3
  },
  {
    name: "Groudon",
    types: ["Ground", "None"],
    height: 3.5,
    weight: 950.0,
    generation: 3
  },
  {
    name: "Rayquaza",
    types: ["Dragon", "Flying"],
    height: 7.0,
    weight: 206.5,
    generation: 3
  },
  {
    name: "Jirachi",
    types: ["Steel", "Psychic"],
    height: 0.3,
    weight: 1.1,
    generation: 3
  },
  {
    name: "Deoxys",
    types: ["Psychic", "None"],
    height: 1.7,
    weight: 60.8,
    generation: 3
  }
];
