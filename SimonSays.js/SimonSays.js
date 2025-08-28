const array = [1,2,3,4,5];
const button1 = document.getElementById("button_1");
const button2 = document.getElementById("button_2");
const button3 = document.getElementById("button_3");
const button4 = document.getElementById("button_4");
const button5 = document.getElementById("button_5");
const buttons = document.getElementsByClassName("btn");
const startBtn = document.getElementById("start");
let currLevelInfo = document.getElementById("currLevel");
let currLevel = 1;
let index = 0;
let delay = "";
let myInterval;
let currInterval = false;
let currLevelSequence = [];
let userNumSequence = [];
let startGameBool = false;
let gameSequence = document.getElementById("game_sequence");

function getRandSequence() {
  let arrLevelLength = Number(currLevel) + 4;
   do {
     currLevelSequence.push(array[Math.floor(Math.random() * (array.length))])
     console.log(currLevelSequence);
     for (let i = 0; i < currLevelSequence.length; i++)
       {
          if (currLevelSequence[i+1] === currLevelSequence[i])
          {
              currLevelSequence[i+1] = 5 ? currLevelSequence[i+1] = 1 : currLevelSequence[i+1] - 1;
          }
       }  
    } while (currLevelSequence.length < (currLevel + 3));
  
  return currLevelSequence;
}

function displayCurrNums() {
    gameSequence.textContent = currLevelSequence[index];
    index++;
}

function startGame() {
  if (startGameBool == false)
    {
      startBtn.textContent = "Next level";
      startBtn.disabled = true;
      startBtn.style.opacity = "0.5";
      currLevelInfo.textContent = `Current Level: ${currLevel}`;
      document.getElementById("check").disabled = false;
      
      getRandSequence();
      
      myInterval = setInterval(displayCurrNums, 1500);
      startGameBool == true;
      userNumSequence.length = 0;
      document.getElementById("start_game").style.display = "none";
    }
}

let buttonClick = function() {
  let val = this.getAttribute("value");
  userNumSequence.push(Number(val));
  gameSequence.textContent = val;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}

function winOrLose() {
  let winCondition = 0;
  for (let i = 0; i < currLevelSequence.length; i++)
    {
       userNumSequence[i] === currLevelSequence[i] ? winCondition++ : "";
    }
    if (winCondition == currLevelSequence.length)
    {
       gameSequence.textContent = "You Win!";
       currLevel++; 
    }
    else
    {
      gameSequence.textContent = "You lose...";
      currLevel = 1;
      startBtn.textContent = "Click to start";
    }
    document.getElementById("check").disabled = true;
    startGameBool == false;
    clearInterval(myInterval);
    currLevelSequence.length = 0;
    userNumSequence.length = 0;
    index = 0;
    startBtn.disabled = false;
    startBtn.style.opacity = "1.0";
}
