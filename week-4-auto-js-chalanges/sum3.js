// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
// Usage examples:
function findDollarStrings(arr) {
    const dollarStrings = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('$')) {
            dollarStrings.push(arr[i]);
        }
    }
    return dollarStrings;
}
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []
