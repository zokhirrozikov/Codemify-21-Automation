
// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array

function countPositivesAndNegatives(arr) {
    let positiveCount = 0;
    let negativeCount = 0;

    arr.forEach(number => {
        if (number > 0) {
            positiveCount++;
        } else if (number < 0) {
            negativeCount++;
        }
    });

    return { positiveCount, negativeCount };
}

// Usage example
let arr = [10, 20, -1, 22, 99, 20, -9];
let { positiveCount, negativeCount } = countPositivesAndNegatives(arr);
console.log(`The negative numbers in the array is ${negativeCount}`); // "The negative numbers in the array is 2"
console.log(`The positive numbers in the array is ${positiveCount}`); // "The positive numbers in the array is 5"


 