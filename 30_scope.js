/**
 * Scope in JavaScript
 * 
 * Scope determines the accessibility (visibility) of variables in JavaScript.
 * JavaScript has three main types of scope:
 * Global Scope – Accessible anywhere in the script.
 * Function Scope – Variables declared inside a function are accessible only within that function.
 * Block Scope – let and const are restricted to {} blocks.
 * var is function-scoped, whereas let and const are block-scoped.
 * Scope chain allows nested functions to access variables from their parent scope.
 * 
 * Scope Type	    Description
 * Global Scope	    Variables declared outside any function are accessible everywhere.
 * Function Scope	Variables declared with var, let, or const inside a function are not accessible outside it.
 * Block Scope	    Variables declared with let or const inside {} are accessible only within that block.
 * Lexical Scope	Inner functions can access variables from their outer (parent) functions.
 * Scope Chain	    JavaScript searches for a variable in its current scope and moves outward if not found.
 * 
 *  */

// JavaScript Scope Examples

// 1. Global Scope (Accessible Anywhere)
var globalVar = "I am a global variable";
let globalLet = "I am also global";
console.log(globalVar); // Output: I am a global variable
console.log(globalLet); // Output: I am also global

// 2. Function Scope (var, let, const inside a function)
function functionScopeExample() {
    var functionVar = "Inside function";
    let functionLet = "Also inside function";
    const functionConst = "Inside function as well";
    console.log(functionVar);  // Output: Inside function
    console.log(functionLet);  // Output: Also inside function
    console.log(functionConst); // Output: Inside function as well
}
functionScopeExample();
// console.log(functionVar); // ERROR: functionVar is not defined (function scope)

// 3. Block Scope (let, const inside if block)
if (true) {
    var blockVar = "var inside block"; // Function-scoped, leaks out of block
    let blockLet = "let inside block"; // Block-scoped
    const blockConst = "const inside block"; // Block-scoped
    console.log(blockLet);  // Output: let inside block
    console.log(blockConst); // Output: const inside block
}
console.log(blockVar);  // Output: var inside block (var leaks out)
// console.log(blockLet);  // ERROR: blockLet is not defined
// console.log(blockConst); // ERROR: blockConst is not defined

// 4. Lexical Scope (Inner functions access outer function variables)
function outerFunction() {
    let outerVar = "Outer Scope";
    function innerFunction() {
        console.log(outerVar); // Output: Outer Scope (Accessing parent scope)
    }
    innerFunction();
}
outerFunction();

// 5. Scope Chain (JavaScript searches in nested scope)
function first() {
    let a = 10;
    function second() {
        let b = 20;
        function third() {
            let c = 30;
            console.log(a + b + c); // Output: 60 (Looks up in scope chain)
        }
        third();
    }
    second();
}
first();

// 6. Function Parameters and Scope
function calculateSum(a, b) {
    return a + b; // Parameters a & b exist only within this function
}
console.log(calculateSum(5, 3)); // Output: 8
// console.log(a); // ERROR: a is not defined outside the function

// 7. var Hoisting and Scope
console.log(hoistedVar); // Output: undefined (var is hoisted)
var hoistedVar = "Hoisted Variable";

// 8. let and const Hoisting (Temporal Dead Zone)
// console.log(hoistedLet); // ERROR: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Hoisted but not initialized";

// 9. Block Scope in Loops
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let loop:", i), 1000);
}
// Output: let loop: 0, let loop: 1, let loop: 2 (Each iteration gets a new i)

// 10. Global Object and Scope
var globalVarTest = "This is global";
console.log(window.globalVarTest); // Output: "This is global" (Only works with var in browsers)
