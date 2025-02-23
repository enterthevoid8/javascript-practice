/**
 * Definition & Explanation:
 * An IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after it is defined. 
 * It is wrapped inside parentheses to prevent polluting the global scope
 * and is commonly used for encapsulation, module patterns, and avoiding variable conflicts.
 * 
 * Feature	                Description
 * 
 * Execution	            Runs immediately after being defined.
 * Syntax	                Wrapped inside () and invoked using ().
 * Scope	                Creates a private scope to prevent variable leaks.
 * Use Cases	            Encapsulation, module patterns, preventing global pollution.
 * Arrow Function Support	Can also be written using arrow functions.
 * 
 */

// JavaScript IIFE (Immediately Invoked Function Expression) Examples

// 1. Basic IIFE (Function Expression Executed Immediately)
(function() {
    console.log("IIFE executed immediately!"); // Output: IIFE executed immediately!
})();

// 2. IIFE with Parameters
(function(name) {
    console.log("Hello,", name); // Output: Hello, Alice
})("Alice");

// 3. IIFE using Arrow Function
(() => {
    console.log("Arrow Function IIFE Executed!"); // Output: Arrow Function IIFE Executed!
})();

// 4. IIFE Returning a Value
const result = (function() {
    return "Returned from IIFE";
})();
console.log(result); // Output: Returned from IIFE

// 5. IIFE for Avoiding Global Variable Pollution
const counter = (function() {
    let count = 0; // Private variable
    return {
        increment: function() { count++; console.log("Count:", count); },
        decrement: function() { count--; console.log("Count:", count); }
    };
})();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

// 6. IIFE Used for Module Pattern
const userModule = (function() {
    let username = "Guest"; // Private variable
    return {
        setName: function(name) { username = name; },
        getName: function() { return username; }
    };
})();
console.log(userModule.getName()); // Output: Guest
userModule.setName("Alice");
console.log(userModule.getName()); // Output: Alice

// 7. Asynchronous IIFE (Using async/await)
(async function() {
    const data = await Promise.resolve("Fetched Data");
    console.log(data); // Output: Fetched Data
})();

// 8. IIFE Inside a Loop (Avoiding Closure Issues)
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(() => console.log("Loop iteration:", j), j * 1000);
    })(i);
}
// Output:
// Loop iteration: 1 (after 1 sec)
// Loop iteration: 2 (after 2 sec)
// Loop iteration: 3 (after 3 sec)

// 9. Using IIFE to Initialize Configuration
const config = (function() {
    return { appName: "MyApp", version: "1.0.0" };
})();
console.log(config.appName); // Output: MyApp

// 10. IIFE with Multiple Statements
(function() {
    const message = "Executing multiple lines in an IIFE";
    console.log(message);
    console.log("This keeps the global scope clean!");
})();
// Output:
// Executing multiple lines in an IIFE
// This keeps the global scope clean!
