const rollDice = document.getElementById("roll-dice");
const playerDice = document.querySelectorAll(".player-dice");
const remainingRollsCounter = document.getElementById("curr-round-counter");
const startBtn = document.getElementById("start");
const lockBtns = document.querySelectorAll(".dice-lock");
const chooseScoreDisplay = document.getElementById("choose-score-option");
const chooseScoreBtnOptions = document.querySelectorAll(".score-option");
let currentScoreTotal = document.getElementById("current-score-total");
let rerollCounter = 3;
let currentDice = [];
let currentGameScore = 0;

//possibly dead-weight, will have to refine first
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
    dice.style.border = "3px solid var(--light-grey)";
    dice.value = randomRoll(dice);
    dice.textContent = dice.value;
    dice.style.disabled = false;
  });
  startBtn.disabled = true;
  rollDice.style.disabled = false;
  currentDice.length = 0;
  remainingRollsCounter.textContent = "Remaining re-rolls: 3";
  rerollCounter = 3;
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
    startBtn.disabled = false;
    checkScore();
  };
});

//improved visibility for players to see what dice have already been locked in
playerDice.forEach((dice) => {
  dice.addEventListener("click", () => {
    currentDice.push(dice.value);
    dice.style.border = "3px solid var(--gold)";
    dice.style.disabled = true;
  })
});

console.log(randomRoll());

//allows comparisons to be made between the section boxes and the score buttons
function trim(str) {
  return str.substring(0, str.length - 6);
}

//check what options are available to the player once all rolls have been made
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
    document.getElementById("four-of-a-kind-score").value = currentDice.reduce((a,b) => a + b, 0);
    console.log(`four of a kind ${fourOfAKind}`);
  }
  if (/(.)\1{2}/.test(check)) //three of a kind check
  {
    threeOfAKind = true;
    document.getElementById("three-of-a-kind-score").style.display = "block";
    document.getElementById("three-of-a-kind-score").value = currentDice.reduce((a,b) => a + b, 0);
    console.log(`three of a kind ${threeOfAKind}`);
  }  
  if (chance)
  {
    if (!document.getElementById("chance-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("chance-score").style.display = "block";
      document.getElementById("chance-score").value = currentDice.reduce((a,b) => a + b, 0);
    }
  }
  // works for each of the upper section scores, now to find a way to disable them once already selected
    for (let op of document.querySelectorAll(".score-option-upper")) {
      console.log(op.value)
      if (currentDice.includes(Number(op.value))) {
        op.style.display = "block";
        op.value = currentDice.filter((v) => v === Number(op.value)).reduce((a,b) => a + b, 0);
    };
  }
  reset();
}

//select which score option to take, will remove the option from future hands
chooseScoreBtnOptions.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("alreadyClicked");
    console.log(btn.id);
    console.log(btn.value);
    currentGameScore += Number(btn.value);
    currentScoreTotal.textContent = `Current total score: ${currentGameScore}`;
    document.getElementById(trim(btn.id)).textContent += ` ${Number(btn.value)}`;
    for (let btn of chooseScoreBtnOptions) btn.style.display = "none";
  });
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
