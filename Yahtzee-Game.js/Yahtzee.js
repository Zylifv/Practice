const rollDice = document.getElementById("roll-dice");
const playerDice = document.querySelectorAll(".player-dice");
const remainingRollsCounter = document.getElementById("curr-round-counter");
const startBtn = document.getElementById("start");
const lockBtns = document.querySelectorAll(".dice-lock");
const chooseScoreDisplay = document.getElementById("choose-score-option");
const chooseScoreBtnOptions = document.querySelectorAll(".score-option");
const scoreOptionUpper = document.querySelectorAll(".score-option-upper");
let currentScoreTotal = document.getElementById("current-score-total");
let rerollCounter = 3;
let currentDice = [];
let currentGameScore = 0;
let scoreToBeat = 220;
let remainTurns = 13;
let selectedScoreValue = 0;


for (let btn of chooseScoreBtnOptions) btn.style.display = "none";


function randomRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

startBtn.addEventListener("click", () => {
  reset();
  if (remainTurns > 0)
    {
      playerDice.forEach((dice) => {
        dice.style.border = "3px solid var(--light-grey)";
        dice.value = randomRoll(dice);
        dice.textContent = dice.value;
        dice.style.disabled = false;
      });
     startBtn.disabled = true;
     rollDice.disabled = false;
     currentDice.length = 0;
     remainingRollsCounter.textContent = "Remaining re-rolls: 3";
     rerollCounter = 3;
     remainTurns -= 1;
     selectedScoreValue = 0;
     document.getElementById("remaining-turns-left").textContent = `Turns left: ${remainTurns}`;
    }
    else
      {
        currentGameScore <= scoreToBeat ? currentScoreTotal.textContent = `You got ${currentGameScore} points, you needed to beat ${scoreToBeat}... You lose...` : currentScoreTotal.textContent = `You got ${currentGameScore} points, You Win!`;
        document.getElementById("current-score-needed").textContent = "";
        document.getElementById("remaining-turns-left").textContent = "";
      }
})


rerollCounter === 0 ? rollDice.disabled = true : rollDice.disabled = false;


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
  
  rollDice.disabled = true;
  startBtn.disabled = false;

  chance == false ? chance = true : chance = false;
  console.log(`chance ${chance}`)
  
  if (/(.)\1{4}/.test(check)) //Yahtzee check
  {
    if (!document.getElementById("yahtzee-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("yahtzee-score").style.display = "block";
    }
  }
  if (/12345|23456/.test(check)) //large straight check
  {
    if (!document.getElementById("large-straight-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("large-straight-score").style.display = "block";
    }
  }
  if (/1234|2345|3456/.test(Array.from(new Set(check.split(""))).join("").toString())) //small straight check
  {
    if (!document.getElementById("small-straight-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("small-straight-score").style.display = "block";
    }
  }
  if (/(.)\1{2}(.)\2|(.)\3(.)\4{2}/.test(check) && check.substring(0,1) !== check.substring(check.length -1)) //full house check
  {
    if (!document.getElementById("full-house-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("full-house-score").style.display = "block";
    }
  }
  if (/(.)\1{3}/.test(check)) //four of a kind check
  {
    if (!document.getElementById("four-of-a-kind-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("four-of-a-kind-score").style.display = "block";
      document.getElementById("four-of-a-kind-score").value = currentDice.reduce((a,b) => a + b, 0);
    }
    
  }
  if (/(.)\1{2}/.test(check)) //three of a kind check
  {
    if (!document.getElementById("three-of-a-kind-score").classList.contains("alreadyClicked"))
    {
      document.getElementById("three-of-a-kind-score").style.display = "block";
      document.getElementById("three-of-a-kind-score").value = currentDice.reduce((a,b) => a + b, 0);
    }
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
      if (currentDice.includes(Number(op.value)) && !op.classList.contains("alreadyClicked")) {
        op.style.display = "block";
        op.value = currentDice.filter((v) => v === Number(op.value)).reduce((a,b) => a + b, 0);
    };
  }
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

     for (let btn of chooseScoreBtnOptions) {
       btn.style.display = "none";
     };
  });
});


function reset() {
  let v = 1;
  chance = false;
  
  for (let btn of scoreOptionUpper) { //reassigns the correct initial val to each of the buttons (needs refining somehow...)
    btn.value = v;
    v += 1;
  }
}
