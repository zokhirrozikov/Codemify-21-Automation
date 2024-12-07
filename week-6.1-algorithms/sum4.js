// Challenge 4: Find duplicates in two arrays 
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays

function findDuplicates(array1, array2) {
    const frequencyMap = new Map();
    const duplicates = new Set();

    array1.forEach(number => {
        frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
    });

    array2.forEach(number => {
        const count = frequencyMap.get(number) || 0;
        frequencyMap.set(number, count + 1);
    });

    frequencyMap.forEach((count, number) => {
        if (count > 1) {
            duplicates.add(number);
        }
    });

    return Array.from(duplicates);
}

const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];
console.log(findDuplicates(array1, array2)); // Output: [4, 5, 7]
