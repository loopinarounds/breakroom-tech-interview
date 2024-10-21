export function calculateMinimumWage(age) {

    // return null if no age provided or if age is negative so we do not award any points  
    if( age < 0 || typeof age !== "number") return null;
    
    switch (true) {
        case (age>0 && age < 18):
            return 6.40;
        case (age >= 18 && age <= 20):
            return 8.60;
        case (age >= 21):
            return 11.44;
        default:
            return null;
      }
    }