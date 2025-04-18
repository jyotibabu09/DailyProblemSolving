function isCenturyYear(year){
    if (year%100==0) {
        return true;
    } else {
        return false;
    }
}
const year = parseInt(prompt("Enter the year"));//for asking
console.log(isCenturyYear(year));