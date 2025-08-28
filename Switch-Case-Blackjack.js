//I wanted to practice more with switch/case because i feel like it wasn't somethinhg i was using enough to solve problems.
//This very simple version of Blackjack doesn't allow more cards  to be drawn as its all in the console.
//It will simply return a Win/Lose statement based on if your cards total more than the computers and can be expanded on with HTML and CSS if I wanted to do that.

const cardsArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let playerHand = [];
let computerHand = [];
let currPlayerHand = 0;
let currComputerHand = 0;
let startingHandVal = 2;


function DrawCards() {
  
  for (let i = 0; i < 2; i++) {
    
    if (playerHand.length < 2) {
      playerHand[i] = cardsArray[Math.floor(Math.random() * cardsArray.length)];
    }
    
    if (computerHand.length < 2) {
      computerHand[i] = cardsArray[Math.floor(Math.random() * cardsArray.length)];
    }
  }
}

function AssignCardValues(x) {
  
  DrawCards();
 
  let val = 0;

  for (let i = 0; i < startingHandVal; i++) {
      switch (x[i]) {
        case "A":
          val += 11;
          break;
        case "2":
          val += 2;
          break;
        case "3":
          val += 3;
          break;
        case "4":
          val += 4;
          break;
        case "5":
          val += 5;
          break;
        case "6":
          val += 6;
          break;
        case "7":
          val += 7;
          break;
        case "8":
          val += 8;
          break;
        case "9":
          val += 9;
          break;
        case "10":
          val += 10;
          break;
        case "J":
          val += 10;
          break;
        case "Q":
          val += 10;
          break;
        case "K":
          val += 10;
          break;
        default:
          break;
      }
  
      currPlayerHand <= 11 ? currPlayerHand = val : currComputerHand = val;
  }
}

AssignCardValues(playerHand);
AssignCardValues(computerHand);

console.log(`Your Cards: [${playerHand[0]}][${playerHand[1]}] Value: ${currPlayerHand}`);
console.log(`Computer Cards: [${computerHand[0]}][${computerHand[1]}] Value: ${currComputerHand}`);
console.log(currPlayerHand > currComputerHand ? "You Win!" : "You lose...");
