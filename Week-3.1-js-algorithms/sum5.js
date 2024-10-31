
// Challenge 5: Multi-level conditions III
// Write a function called isLeapYear that checks whether a year is a leap year. If the year is evenly divisible by 4, 
// it is a leap year, unless it is evenly divisible by 100. However, if it is divisible by 400, then it is.
// Usage examples:
function isLeapYear(year) {
    if (year % 400 === 0) {
        return "Leap year";
    } else if (year % 100 === 0) {
        return "Not a leap year";
    } else if (year % 4 === 0) {
        return "Leap year";
    } else {
        return "Not a leap year";
    }
}
console.log(isLeapYear(2000)); // "Leap year"
console.log(isLeapYear(1800)); // "Not a leap year"
console.log(isLeapYear(2004)); // "Leap year"
console.log(isLeapYear(2021)); // "Not a leap year"