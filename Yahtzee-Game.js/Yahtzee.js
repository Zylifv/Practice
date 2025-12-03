const rollDice = document.getElementById("roll-dice");
const playerDice = document.querySelectorAll(".player-dice");
const remainingRollsCounter = document.getElementById("curr-round-counter");
const startBtn = document.getElementById("start");
const lockBtns = document.querySelectorAll(".dice-lock");
const chooseScoreDisplay = document.getElementById("choose-score-option");
const chooseScoreBtnOptions = document.querySelectorAll(".score-option");
let rerollCounter = 3;
let currentDice = [];
let currentGameScore = 0;

let aces = false;
let twos = false;
let threes = false;
let fours = false;
let fives = false;
let sixes = false;

let chance = false;
let threeOfAKind = false;
let fourOfAKind = false;
let fullHouse = false;
let smallStraight = false;
let largeStraight = false;
let yahtzee = false;


for (let btn of chooseScoreBtnOptions) btn.style.display = "none";


function randomRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

startBtn.addEventListener("click", () => {
  playerDice.forEach((dice) => {
    dice.value = randomRoll(dice);
    dice.textContent = dice.value;
  });
  startBtn.disabled = true;
  rollDice.style.disabled = false;
  currentDice.length = 0;
  remainingRollsCounter.textContent = "Remaining re-rolls: 3";
})


rerollCounter === 0 ? rollDice.style.disabled = true : rollDice.style.disabled = false;


rollDice.addEventListener("click", () => {
  rerollCounter === 1 ? startBtn.disabled = false : startBtn.disabled = true;
  if (rerollCounter > 0)
  {
    rerollCounter -= 1;
    remainingRollsCounter.textContent = `Remaining re-rolls: ${rerollCounter}`
    playerDice.forEach((dice) => {
      if (dice.style.disabled !== true)
      {
        dice.value = randomRoll(dice);
        dice.textContent = dice.value;
      }
    });
   }
  else if (rerollCounter <= 1) {
    playerDice.forEach((dice) => {
      if (dice.style.disabled !== true) currentDice.push(dice.value); //pushes remaining dice into array that player didnt choose
    });
    checkScore();
  };
});

playerDice.forEach((dice) => {
  dice.addEventListener("click", () => {
    currentDice.push(dice.value);
    dice.style.border = "3px solid var(--gold)";
    dice.style.disabled = true;
    
    console.log(dice.id);
  })
});

console.log(randomRoll());

function checkScore() {
  let check = currentDice.sort((a,b) => a - b);
  check = check.join("");
  console.log(check);
  
  rollDice.style.disabled = true;
  startBtn.style.disabled = false;

  chance == false ? chance = true : chance = false;
  console.log(`chance ${chance}`)
  
  if (/(.)\1{4}/.test(check)) //Yahtzee check
  {
    yahtzee = true;
    document.getElementById("yahtzee-score").style.display = "block";
    console.log(`yahtzee ${yahtzee}`);
  }
  if (/12345|23456/.test(check)) //large straight check
  {
    largeStraight = true;
    document.getElementById("large-straight-score").style.display = "block";
    console.log(`large straight ${largeStraight}`);
  }
  if (/1234|2345|3456/.test(check)) //small straight check
  {
    smallStraight = true;
    document.getElementById("small-straight-score").style.display = "block";
    console.log(`small straight ${smallStraight}`)
  }
  if (/(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(check) && check.substring(0,1) !== check.substring(check.length -1)) //full house check
  {
    fullHouse = true;
    document.getElementById("full-house-score").style.display = "block";
    console.log(`full house ${fullHouse}`);
  }
  if (/(.)\1{3}/.test(check)) //four of a kind check
  {
    fourOfAKind = true;
    document.getElementById("four-of-a-kind-score").style.display = "block";
    console.log(`four of a kind ${fourOfAKind}`);
  }
  if (/(.)\1{2}/.test(check)) //three of a kind check
  {
    threeOfAKind = true;
    document.getElementById("three-of-a-kind-score").style.display = "block";
    console.log(`three of a kind ${threeOfAKind}`);
  }  
  if (!chance)
  {
    document.getElementById("chance-score").style.display = "block";
  }
  reset();
}


chooseScoreBtnOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.id);
  })
  
});


function reset() {
  aces = false;
  twos = false;
  threes = false;
  fours = false;
  fives = false;
  sixes = false;
  chance = false;
  threeOfAKind = false;
  fourOfAKind = false;
  fullHouse = false;
  smallStraight = false;
  largeStraight = false;
  yahtzee = false;
}
