// Higher order function: forEach, map, filter, reduce

// Chalang 1;
//    array       function  element
/* [1,2,3,4,5,6,7].forEach(num => {
    console.log(num);
    
    
});
// Result  1 2 3 4 5 6 7 */

// Chalang 2;

/* const numbers = [3,4,6,1,5]

numbers.forEach(num => {   
    console.log(num);

});  
// result; 3,4,6,1,5 */

// Chalang 2;

const numbers = [3,4,6,1,5]
const newArray = numbers.forEach(num => num * 2);
 // undefined this hepans becouse forEach doesnt return anythings


    console.log(newArray);
// Result 

// undefined
 