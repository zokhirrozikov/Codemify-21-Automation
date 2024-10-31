// Challenge 2: Multi-level conditions
// Write a function called assignGrade that takes a number score and assigns a letter grade based on the score.
// The function should return "A" for scores 90 and above, "B" for scores 80 - 89, "C" for scores 70 - 79, 
// "D" for scores 60 - 69 and "F" for scores below 60.
// Usage examples:
function assignGrade(score) {
    if (score >= 91) {
        return "A";
    } else if (score >= 83) {
        return "B";
    } else if (score >= 74) {
        return "C";
    } else if (score >= 63) {
        return "D";
    } else {
        return "F";
    }
}
console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"
