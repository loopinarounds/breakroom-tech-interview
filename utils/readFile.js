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

    const data = fs.readFileSync(filePath, 'utf8');

  
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Error parsing JSON data:", e.message);
        process.exit(1);
    }
    }