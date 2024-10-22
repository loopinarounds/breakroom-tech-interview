import { calculatePoints } from "../utils/calculatePoints.js";
import { readFile } from "../utils/readFile.js";


function handleQuiz() {


const quizData = readFile();

const result = calculatePoints(quizData);

const percentage = (result.points / result.totalAvailable) * 100;

console.log(`Score:  ${result.points}/${result.totalAvailable} (${percentage}%)`);   

}

handleQuiz();



