import {questions, answers} from './questions.js';
import { calculateContractedHours } from './calculateContractedHours.js';
import { calculateMinimumWage } from './calculateMinimumWage.js';




export function calculatePoints(data){
    // early return if no data
    if(!data) return 0;

    let points = 0;
    let totalAvailable = 0;

    // initialise points and total and loop through the questions - caluclate points based off of the answers.
    // If no answer we continue the loop and don't iterate available score.
    for (const question of questions) {



        // if the answer is a string, convert to lowercase for comparison to avoid miss-scoring.
        const answer = typeof data[question] ==='string' ? data[question].toLowerCase() : data[question];

    

        if(!answer || answer==="unsure") continue;
        switch (question) {
            case "enjoys_job":
                
                if (answers.positive.includes(answer)) {
                    console.log("enjoys job, awarding point");
                    points += 1;
                } 
                break;
            case "respected_by_managers":
                if (answers.positive.includes(answer)) {
                    console.log("respected by managers, awarding point");
                    points += 1;
                }
                break;
            case "good_for_carers":
                if (answers.positive.includes(answer)) {
                    console.log("good for carers, awarding point");
                    points += 1;
                } 
                break;
            case "contracted_hours":
                if(calculateContractedHours(data["contracted_hours"], data["hours_actually_worked"])){
                    console.log("contracted hours match, awarding point");
                    points += 1;
                }
                break;   
            case "unpaid_extra_work":
                if (!answers.positive.includes(answer)) { // if the answer is not positive, award a point
                    console.log("No unpaid extra work, awarding point");
                    points += 1;
                }
                break;
            case "age":
                const minWage = calculateMinimumWage(data["age"]);
                if(!minWage) continue;
                if(data["hourly_rate"] >= minWage){
                    console.log("meets minimum wage, awarding point");
                    points += 1;
                }
                break;
            default:
                break;
        }
        totalAvailable++;
    }

    return {points, totalAvailable};
}