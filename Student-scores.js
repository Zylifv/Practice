//A lab around scoring students based on their overall grades and returning the result.

let score = "";
function getAverage(array) {
  return array.reduce((a,b) => a + b) / array.length;
}

function getGrade(str) {
  
  if (str == 100) {
    score = "A+";
  } else if (str <= 99 && str >= 90) {
    score = "A";
  } else if (str <= 89 && str >= 80) {
    score = "B";
  } else if (str <= 79 && str >= 70) {
    score = "C";
  } else if (str <= 69 && str >= 60) {
    score = "D";
  } else if (str <= 59 && str >= 0) {
    score = "F";
  }
  return score;
}


function hasPassingGrade(score) {
  if (score <= 59) {
    return false;
  } else {
    return true;
  }
}

function studentMsg(scores, studentScore) {
  if (studentScore <= 59) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  }
}

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getGrade(85));
console.log(hasPassingGrade("B"));
console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 85));
