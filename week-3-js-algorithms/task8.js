// Your code here
function checkEquality(value1, value2) {
   return value1 === value2;
}

console.log(checkEquality(1, true)) // ➞ false. A number and a boolean: the value and type are different
console.log(checkEquality(0, "0")) // ➞ false. A number and a string: the type is different
console.log(checkEquality(1, 1)) // ➞ true. A number and a number: the type and value are equal

