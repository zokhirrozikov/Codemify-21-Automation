

// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// Usage examples:

function palindrome(str) {
   // const cleanedStr =str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

   const reversedStr = str.split('').reverse().join('');

   return str === reversedStr;
   
}

console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true 
