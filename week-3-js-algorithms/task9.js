
function compareAge(name, age) {
    const myAge = 30; // Replace with your actual age

    if (age > myAge) {
        return `${name} is older than me.`; // If the person is older
    } else if (age < myAge) {
        return `${name} is younger than me.`; // If the person is younger
    } else {
        return `${name} is the same age as me.`; // If the person is the same age
    }
}

console.log(compareAge("Joel", 36)); // ➞ "Joel is older than me."
console.log(compareAge("Samuel", 24)); // ➞ "Samuel is younger than me."
console.log(compareAge("Lily", 28)); // ➞ "Lily is younger than me."
