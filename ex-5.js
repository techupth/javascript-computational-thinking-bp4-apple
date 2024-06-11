let studentScores = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,

}

// Start coding here
function calculateAverage(studentScores) {
  let totalScores = 0;
  let numberOfStudents = 0;
  for (let score of Object.values(studentScores)) {
    totalScores += score; numberOfStudents++;
  }
  let average = totalScores / numberOfStudents;
  return average;
}
let averageScore = calculateAverage(studentScores);
console.log("Average score is " + averageScore.toFixed(2));

function findHighestScore(studentScores) {
  let highestScore = -Infinity;
  let highestScoreStudent = null;
  for (let [student, score] of Object.entries(studentScores)) {
    if (score > highestScore) {
      highestScore = score;
      highestScoreStudent = student;
    }
  }
  return { name: highestScoreStudent, score: highestScore };
}
let highestScoreResult = findHighestScore(studentScores);
console.log(highestScoreResult.name + " has the highest score, which is " + highestScoreResult.score + " points");

function findLowestScore(studentScores) {
  let lowestScore = Infinity;
  let lowestScoreStudent = null;
  for (let [student, score] of Object.entries(studentScores)) {
    if (score < lowestScore) {
      lowestScore = score;
      lowestScoreStudent = student;
    }
  }
  return { name: lowestScoreStudent, score: lowestScore };
}
let lowestScoreResult = findLowestScore(studentScores);
console.log(lowestScoreResult.name + " has the lowest score, which is " + lowestScoreResult.score + " points");