/**
 *  
 * First-Class Functions in JavaScript
 * In JavaScript, functions are first-class citizens, meaning:
 * 
 * They can be assigned to variables.
 * They can be passed as arguments to other functions.
 * They can be returned from functions.
 * They can be stored in arrays or objects.
 * This allows for higher-order functions, callbacks, and functional programming techniques.
 * 
 */

// 1. Assigning a Function to a Variable
const greet = function() {
    return "Hello, World!";
};
console.log("Function Assigned to Variable:", greet()); // Output: Hello, World!

// 2. Passing a Function as an Argument (Callback Function)
function executeFunction(fn) {
    console.log("Executing Passed Function:", fn());
}
executeFunction(greet); // Output: Executing Passed Function: Hello, World!

// 3. Returning a Function from Another Function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = createMultiplier(2);
console.log("Double of 5:", double(5)); // Output: 10

// 4. Storing Functions in an Array
const functionsArray = [
    () => "Function 1",
    () => "Function 2",
    () => "Function 3"
];
console.log("Calling Function from Array:", functionsArray[1]()); // Output: Function 2

// 5. Storing Functions in an Object
const mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
console.log("Addition using Object Function:", mathOperations.add(5, 3)); // Output: 8

// 6. Using Function as a Parameter in Array Methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 7. Function Returning Another Function
function sayHello(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}
const greetAlice = sayHello("Alice");
greetAlice(); // Output: Hello, Alice!

// 8. Using Higher-Order Functions
function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}
const result = operateOnNumbers(10, 5, mathOperations.subtract);
console.log("Result of Higher-Order Function:", result); // Output: 5

// 9. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed immediately!"); // Output: IIFE executed immediately!
})();

// 10. Function Returning a Function for Delayed Execution
function delayedGreeting(delay) {
    return () => setTimeout(() => console.log("Hello after delay!"), delay);
}
const greetLater = delayedGreeting(2000);
greetLater(); // Executes after 2 seconds


/**
 *  Conclusion
 * 
 * First-class functions allow JavaScript to be highly functional and dynamic.
 * They enable callbacks, higher-order functions, and functional programming.
 * This is the foundation of event handling, array methods, and functional design patterns.
 * 
 */