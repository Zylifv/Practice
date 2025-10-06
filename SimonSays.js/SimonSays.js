const array = [1,2,3,4,5];
const button1 = document.getElementById("button_1");
const button2 = document.getElementById("button_2");
const button3 = document.getElementById("button_3");
const button4 = document.getElementById("button_4");
const button5 = document.getElementById("button_5");
const buttons = document.getElementsByClassName("btn");
const startBtn = document.getElementById("start");
let currLevelInfo = document.getElementById("currLevel");
const userResult = document.getElementById("user-result");
let currLevel = 1;
let index = 0;
let delay = "";
let myInterval;
let entry = false;
let currInterval = false;
let currLevelSequence = [];
let userNumSequence = [];
let startGameBool = false;
let gameSequence = document.getElementById("game_sequence");


function getRandSequence() {
  let n = 0;
  let arrLevelLength = Number(currLevel) + 4;
   do {
     n++;
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
  console.log(currLevelSequence);
  return currLevelSequence;
}

function entryCheck() {
  entry = index !== currLevelSequence.length ? false : true;  
}

function displayCurrNums() {
  let i = index + 1;
  let array = ["/", "-", "\\", "|"];
    if (index < currLevelSequence.length) {
      gameSequence.textContent = `${array[ i % array.length]}: ` + currLevelSequence[index];
      index++;
    } else {
      gameSequence.textContent = "";
    }
  entryCheck();
}

function startGame() {
  if (startGameBool == false)
    {
      entry = false;
      userResult.textContent = "";
      userResult.style.color = "#004445";
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
  if (entry) {
    let val = this.getAttribute("value");
    userNumSequence.push(Number(val));
    gameSequence.textContent = val;
    console.log(userNumSequence);
    userResult.textContent += val;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClick);
}


function winOrLose() {
  let winCondition = 0;
  for (let i = 0; i < currLevelSequence.length; i++)
    {
    userNumSequence[i] === currLevelSequence[i] ? winCondition++ : "";
      
      //console.log(winCondition, currLevelSequence.length);
    }
  if (winCondition == currLevelSequence.length)
    {
      gameSequence.textContent = "You Win!";
      userResult.style.color = "#33a366";
      currLevel++;
    }
  else
    {
      gameSequence.textContent = "You lose...";
      userResult.style.color = "#e8401c";
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
