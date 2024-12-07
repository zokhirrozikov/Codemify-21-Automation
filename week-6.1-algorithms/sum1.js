

// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// Usage examples:
// console.log(getLargestPalindrome(1000));; // 906609

function getLargestPalindrome(maxNumber){
    let largestPalindrome = 0;

    for (let i = 0; i <= maxNumber; i++) {
        //1
        for (let j = 0; j <= maxNumber; j++) {
           //2
           const result = i * j; // 100, '100', ['1', '0', '0'] ['0','0','1'] '001'
           if(result.toString() === result.toString().split('').reverse().join('')){
            console.log(result);
            
           }
           // check if it palindrom
           // check if palindrom is larger than largestPalindrom
            
        }
        
    }
    return largestPalindrome;
}



console.log(getLargestPalindrome(1000))