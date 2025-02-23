/**
 * Currying Function in JavaScript
 * 
 * Currying is a technique in JavaScript where a function takes multiple arguments one at a time
 * instead of all at once.
 * 
 * It transforms a function with multiple arguments into a series of nested unary functions, where
 * each function returns another function until all arguments are received.
 * 
 * It is widely used in functional programming.
 * 
 */

// JavaScript Currying Function Examples

// 1. Basic Currying Function (Transforming f(a, b) into f(a)(b))
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5); // Partially applied function
console.log("5 + 3:", addFive(3)); // Output: 8
console.log("5 + 10:", addFive(10)); // Output: 15

// 2. Using Arrow Functions for Currying
const multiply = a => b => a * b;

const double = multiply(2);
console.log("Double of 4:", double(4)); // Output: 8
console.log("Double of 7:", double(7)); // Output: 14

// 3. Multi-Level Currying
const volume = length => width => height => length * width * height;
console.log("Volume of 2x3x4:", volume(2)(3)(4)); // Output: 24

// 4. Currying a Function with More Arguments
function discount(rate) {
    return function(price) {
        return price - price * (rate / 100);
    };
}

const tenPercentOff = discount(10);
console.log("Price after 10% discount on 200:", tenPercentOff(200)); // Output: 180

// 5. Converting a Normal Function to Curried Function
function normalFunction(a, b, c) {
    return a + b + c;
}

// Converting to Curried Function
const curriedFunction = a => b => c => a + b + c;
console.log("Curried Sum of 1, 2, 3:", curriedFunction(1)(2)(3)); // Output: 6

// 6. Using Currying with Array Methods
const filterBy = key => value => array => array.filter(item => item[key] === value);
const people = [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Developer" }
];

const filterByRole = filterBy("role")("Developer");
console.log("Filtered Developers:", filterByRole(people)); 
// Output: [{ name: "Alice", role: "Developer" }, { name: "Charlie", role: "Developer" }]

// 7. Partial Application Using Currying
const log = level => message => `[${level.toUpperCase()}]: ${message}`;

const infoLog = log("info");
console.log(infoLog("System started")); // Output: [INFO]: System started

const errorLog = log("error");
console.log(errorLog("Something went wrong!")); // Output: [ERROR]: Something went wrong!

// 8. Auto-Currying Function Using a Helper Function
const curry = fn => (...args) =>
    args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log("Curried Sum:", curriedSum(2)(3)(4)); // Output: 9
console.log("Curried Sum (Partial):", curriedSum(2, 3)(4)); // Output: 9

// 9. Un-Currying a Curried Function
function unCurry(fn) {
    return (...args) => args.reduce((acc, arg) => acc(arg), fn);
}

const normalSum = unCurry(curriedSum);
console.log("Uncurried Sum:", normalSum(2, 3, 4)); // Output: 9

// 10. Currying to Format Messages
const formatMessage = prefix => suffix => message => `${prefix} ${message} ${suffix}`;
const excitedMessage = formatMessage("Wow!")("🎉");
console.log(excitedMessage("You won!")); // Output: Wow! You won! 🎉

/** 
 * 
 * Feature	Explanation
 * 
 * Currying     Transforms a function so it takes arguments one at a time (f(a, b, c) → f(a)(b)(c)).
 * Benefits     Improves reusability, function composition, and partial application.
 * Use Cases	Filtering, logging, formatting, mathematical operations, and function composition.
 * Libraries	ramda, lodash/fp, and rambda provide utilities for currying and functional programming.
 * 
 */