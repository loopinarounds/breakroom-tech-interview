export function calculateContractedHours(contractedHours, hoursWorked){
    // do not award point if contracted hours are not set or hours worked are not set (omitted)
    if(!contractedHours || !hoursWorked) return false;

    if(hoursWorked > contractedHours + 8){
      return false;
    }

    return true;
}