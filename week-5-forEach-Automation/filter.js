/* // Chalang 3;

const numbers = [3,4,6,1,5]
 
 const newArray = numbers.filter(num => num > 4);
// we can filter by num to find biger one
    console.log(newArray);
// Result 
// [ 6, 5 ]  */


 /* // Chalang 4;

const friends = ['zahir', 'Abdulhamid', 'Aminahjon', 'Khalidboy']

const newArray = friends.filter(friend => friend.length > 4);

    console.log(newArray);
// Result 
// [ 'zahir', 'Abdulhamid', 'Aminahjon', 'Khalidboy' ] */

/* // Chalang 5;

const friends = ['zahir', 'Abdulhamid', 'Aminahjon', 'Khalidboy']

const newArray = friends.filter(friend => friend.length > 9);
// if you wana find longer one we going to incres number to find long name
    console.log(newArray);
// Result 
// [ 'Abdulhamid' ] */ 

/*// Chalang 6;

const friends = ['zahir', 'Abdulhamid', 'Aminahjon', 'Khalidboy']

const newArray = friends.filter(friend => friend.includes('b'));
// by using ".includes" you can filter by letter e.g. ('a'), to ("z")
    console.log(newArray);
// Result 
// [ 'Abdulhamid', 'Khalidboy' ] */

/* // Chalang 7;

const numbers = [3,5,7,8,9,10]

const newArray = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
// here you can + or -
    console.log(newArray);
// Result 
// 42 */