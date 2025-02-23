/** 
 * First-Order Functions in JavaScript
 * 
 * A First-Order Function is a function that does not accept another function as an argument and does
 * not return another function. It operates on data directly.
 * 
 * This is different from higher-order functions, which either take functions as arguments or return
 * functions.
 * 
 */

// 1. Basic First-Order Function (Takes and Returns a Value)
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(5, 3)); // Output: 8

// 2. Function for Checking Even Number (Returns a Boolean)
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 10 Even?", isEven(10)); // Output: true
console.log("Is 7 Even?", isEven(7)); // Output: false

// 3. First-Order Function for Finding Maximum of Two Numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log("Max of 10 and 20:", max(10, 20)); // Output: 20

// 4. First-Order Function That Modifies a String
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Capitalized String:", capitalize("hello")); // Output: "Hello"

// 5. Function to Calculate Area of a Rectangle
function rectangleArea(length, width) {
    return length * width;
}
console.log("Rectangle Area:", rectangleArea(5, 4)); // Output: 20

// 6. Function to Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed String:", reverseString("hello")); // Output: "olleh"

// 7. Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("Celsius to Fahrenheit:", celsiusToFahrenheit(30)); // Output: 86

// 8. Function to Count Words in a Sentence
function wordCount(sentence) {
    return sentence.split(" ").length;
}
console.log("Word Count:", wordCount("JavaScript is fun!")); // Output: 3

// 9. Function to Generate a Random Number in a Range
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Number Between 1 and 100:", randomInRange(1, 100));

// 10. Function to Check if a Year is a Leap Year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a Leap Year?", isLeapYear(2024)); // Output: true
console.log("Is 2023 a Leap Year?", isLeapYear(2023)); // Output: false
