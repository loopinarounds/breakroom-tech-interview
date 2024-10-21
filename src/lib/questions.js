// included this file to store the questions/answers data to consider if somebody does not have access to a test json file. 
// also: can use this to enforce types if this were in typescript.
export const questions = [
    "enjoys_job",
    "respected_by_managers",
    "good_for_carers",
    "contracted_hours",
    "hours_actually_worked",
    "unpaid_extra_work",
    "age",
    "hourly_rate",
    "submitted_date"
];


// will always convert to lowercase for comparison to avoid miss-scoring
export const answers = {
    positive: ["yes", "y"],
    negative: ["no", "n",]
};