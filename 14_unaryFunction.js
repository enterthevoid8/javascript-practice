/**
 * Unary Function in JavaScript
 * A Unary Function is a function that takes exactly one argument. It has the signature:
 * 
 * 1. function unaryFunction(x) { ... }
 * 2. const unaryFunction = x => { ... };
 * 
 * Examples	        square(x), isEven(x), toUpperCase(str), stringLength(str).
 * Array Methods	Works well with map(), filter(), and reduce().
 */

// JavaScript Unary Function Examples

// 1. Basic Unary Function (Takes One Argument)
function square(x) {
    return x * x;
}
console.log("Square of 5:", square(5)); // Output: 25

// 2. Unary Function using Arrow Syntax
const cube = x => x * x * x;
console.log("Cube of 3:", cube(3)); // Output: 27

// 3. Unary Function that Converts to Uppercase
const toUpperCase = str => str.toUpperCase();
console.log("Uppercase:", toUpperCase("hello")); // Output: "HELLO"

// 4. Checking if a Number is Even (Unary Predicate Function)
const isEven = x => x % 2 === 0;
console.log("Is 8 Even?", isEven(8)); // Output: true
console.log("Is 7 Even?", isEven(7)); // Output: false

// 5. Unary Function That Returns Length of a String
const stringLength = str => str.length;
console.log("Length of 'JavaScript':", stringLength("JavaScript")); // Output: 10

// 6. Unary Function for Absolute Value
const absoluteValue = x => Math.abs(x);
console.log("Absolute of -10:", absoluteValue(-10)); // Output: 10

// 7. Unary Function That Extracts the First Character
const firstChar = str => str.charAt(0);
console.log("First character of 'Hello':", firstChar("Hello")); // Output: "H"

// 8. Unary Function That Converts a Number to String
const numberToString = num => num.toString();
console.log("Number to String:", numberToString(100)); // Output: "100"

// 9. Unary Function Used in Array Map Method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log("Doubled Numbers:", doubled); // Output: [2, 4, 6, 8, 10]

// 10. Unary Function That Extracts the First Word from a Sentence
const firstWord = sentence => sentence.split(" ")[0];
console.log("First Word:", firstWord("JavaScript is awesome!")); // Output: "JavaScript"
