// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them

function mostFrequent(arr, n) {
    if (n === 0) return null; // Handle empty array case

    const frequencyMap = new Map();
    let maxCount = 0;
    let mostFrequentElement = arr[0];

    for (let i = 0; i < n; i++) {
        const element = arr[i];
        const count = (frequencyMap.get(element) || 0) + 1;
        frequencyMap.set(element, count);

        if (count > maxCount) {
            maxCount = count;
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

// Usage example
let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;
console.log(mostFrequent(arr, n)); // Output: 40
