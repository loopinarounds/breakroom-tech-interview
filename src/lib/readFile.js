import fs from 'fs';
import path from 'path';

export function readFile() {
    // read the file name from the command line arguments
    const args = process.argv.slice(2); 

    if (args.length < 1) {
        console.error("Please provide a path to the answers file.");
        process.exit(1);
    }

    const filePath = path.resolve(args[0]); 
    console.log("Reading file from path:", filePath);

    return fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
                reject(err); 
                return;
            }
            const quizData = JSON.parse(data); 
            resolve(quizData);
        });
    }