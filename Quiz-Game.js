const questions = [
  {
    category: "Space",
    question: "How many planets are in our solar system?",
    choices: ["7", "8", "9"],
    answer: "8" 
  },
  {
    category: "Animals",
    question: "What is the best animal as a pet?",
    choices: ["Cat", "Dog", "Parrot"],
    answer: "Dog"
  },
  {
    category: "Food",
    question: "How many is a baker's dozen?",
    choices: ["11", "12", "13"],
    answer: "13"
  },
  {
    category: "Geography",
    question: "What country is famous for being shaped like a boot?",
    choices: ["Italy", "Germany", "Slovakia"],
    answer: "Italy"
  },
  {
    category: "Pokemon",
    question: "What Pokemon has the pokedex number 121?",
    choices: ["Ekans", "Starmie", "Gyarados"],
    answer: "Starmie"
  }
];

const currQuestion = [];


function getRandomQuestion(questionsArr) {
  const rand = questions[Math.floor(Math.random() * questions.length)];
  currQuestion.push(rand);
  return currQuestion[0].question;
}

let randQuestion = currQuestion[1];

console.log(getRandomQuestion(questions))

function getRandomComputerChoice(currQuestion) {
  let randChoice = currQuestion[0].choices[Math.floor(Math.random() * currQuestion.length)];
  return randChoice;
}

let randComputerChoice = getRandomComputerChoice(currQuestion);

function getResults(questionObject, computerChoice) {
  if (currQuestion[0].answer == randComputerChoice) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${currQuestion[0].answer}`
  }
}

console.log(`The computer chose: ${randComputerChoice}`, getResults(randQuestion, randComputerChoice));

console.log(window.innerWidth);
console.log(window.innerHeight);
