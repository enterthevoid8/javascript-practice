/**
 * Pure Functions in JavaScript
 * A Pure Function is a function that:
 * 
 * Always returns the same output for the same input.
 * Does not modify external state or variables (i.e., no side effects).
 * Pure functions improve code predictability, testability, and reusability.
 */

// JavaScript Pure Function Examples

// 1. A Basic Pure Function (No Side Effects)
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(5, 3)); // Output: 8

// 2. Pure Function for Squaring a Number
function square(x) {
    return x * x;
}
console.log("Square of 4:", square(4)); // Output: 16

// 3. A Pure Function that Converts to Uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log("Uppercase:", toUpperCase("hello")); // Output: "HELLO"

// 4. Pure Function for Filtering Even Numbers
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// 5. Pure Function That Returns a New Object (Does Not Modify Input)
function updatePersonName(person, newName) {
    return { ...person, name: newName };
}
const person = { name: "Alice", age: 25 };
console.log("Updated Person:", updatePersonName(person, "Bob"));
// Output: { name: "Bob", age: 25 }
console.log("Original Person:", person); // Unchanged

// 6. Pure Function to Find the Maximum of Two Numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log("Max of 10 and 20:", max(10, 20)); // Output: 20

// 7. Pure Function That Calculates Factorial
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // Output: 120

// 8. Pure Function That Calculates Sum of an Array
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Sum of Numbers:", sumArray([1, 2, 3, 4, 5])); // Output: 15

// 9. Pure Function for Checking if a String is a Palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // Output: true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // Output: false

// 10. Pure Function to Merge Two Arrays Without Mutation
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log("Merged Arrays:", mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
console.log("Original Arrays:", array1, array2); // Unchanged

/**
 * 
 * Feature	        Explanation
 * 
 * Pure Function    A function that returns the same output for the same input, without side effects.
 * No Side Effects	Does not modify global variables, DOM, or external states.
 * Immutable Data	Returns new values instead of modifying existing data.
 * 
 */