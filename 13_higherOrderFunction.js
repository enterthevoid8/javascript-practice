/** 
 * 
 * Higher-Order Functions in JavaScript
 * A Higher-Order Function is a function that:
 * 
 * Takes another function as an argument (Callback Function).
 * Returns another function as its result.
 * Higher-order functions enable functional programming, callback-based execution, and code
 * reusability.
 * 
 * Returning Functions - Functions that generate and return new functions
 * Array Methods - map(), filter(), reduce() are higher-order functions
 * 
 */

// JavaScript Higher-Order Functions Examples

// 1. Function Taking Another Function as an Argument (Callback Function)
function operate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Addition using Higher-Order Function:", operate(5, 3, add)); // Output: 8
console.log("Multiplication using Higher-Order Function:", operate(5, 3, multiply)); // Output: 15

// 2. Function Returning Another Function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log("Double of 4:", double(4)); // Output: 8

const triple = createMultiplier(3);
console.log("Triple of 4:", triple(4)); // Output: 12

// 3. Using Higher-Order Function with Array Methods
const numbers = [1, 2, 3, 4, 5];

// Using map() - Applies a function to each element
const squared = numbers.map(num => num * num);
console.log("Squared Numbers:", squared); // Output: [1, 4, 9, 16, 25]

// Using filter() - Filters elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

// Using reduce() - Accumulates values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum); // Output: 15

// 4. Function Returning Another Function with Custom Message
function greetUser(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greetUser("Hello");
console.log(sayHello("Alice")); // Output: Hello, Alice!

const sayGoodbye = greetUser("Goodbye");
console.log(sayGoodbye("Bob")); // Output: Goodbye, Bob!

// 5. Creating a Custom forEach() Higher-Order Function
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

customForEach(numbers, (num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// 6. Function that Executes Another Function Multiple Times
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, i => console.log(`Iteration ${i + 1}`)); // Output: Iterates 3 times

// 7. Delayed Execution using setTimeout() (Higher-Order Function)
setTimeout(() => {
    console.log("Executed after 2 seconds!");
}, 2000);

// 8. Chaining Higher-Order Functions (map -> filter -> reduce)
const processedNumbers = numbers
    .map(num => num * 2) // Double each number
    .filter(num => num > 5) // Keep numbers greater than 5
    .reduce((acc, num) => acc + num, 0); // Sum them up

console.log("Processed Numbers Sum:", processedNumbers); // Output: 18 (6+8+10)
