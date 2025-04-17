function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = parseInt(prompt("Enter a year:")); // For local testing
console.log(isLeap(year)); // Will print true or false
