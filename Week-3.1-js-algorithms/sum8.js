
// Challenge 8: Temperature Checker
// Write a function called checkTemp that takes a temperature in Fahrenheit as an argument.
// If the temperature is below 32, return "Freezing". If it's 32 - 50, return "Cold". 
// If it's 51 - 70, return "Mild". If it's 71 - 90, return "Warm". If it's above 90, return "Hot".
// Usage examples:

function checkTemp(temperature) {
    if (temperature < 32) {
        return "Freezing";
    } else if (temperature >= 32 && temperature <= 50) {
        return "Cold";
    } else if (temperature >= 51 && temperature <= 70) {
        return "Mild";
    }else if (temperature >= 71 && temperature <= 90) {
        return "Warm";
    } else {
        return "Hot";
    }
}
console.log(checkTemp(30)); // "Freezing"
console.log(checkTemp(45)); // "Cold"
console.log(checkTemp(65)); // "Mild"
console.log(checkTemp(75)); // "Warm"
console.log(checkTemp(95)); // "Hot"