/**
 * Hoisting in JavaScript
 * 
 * Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before execution.
 * Function and variable declarations are hoisted, but only var is initialized with undefined, 
 * while let and const remain in the Temporal Dead Zone (TDZ).
 * Function expressions and arrow functions assigned to variables are NOT hoisted.
 * Hoisting applies at the scope level (global or function), and within blocks for let and const.
 * 
 * Feature                      Description
 * 
 * Hoisted Variables	        var is hoisted with undefined, while let and const remain uninitialized (TDZ).
 * Hoisted Functions	        Function declarations are fully hoisted and can be called before their definition.
 * Function Expressions	        Functions assigned to variables using let, const, or var are NOT hoisted.
 * Best Practice                Declare variables and functions before using them to avoid unexpected behavior.
 *
 */

// JavaScript Hoisting Examples

// 1. Hoisting with var (Hoisted with undefined)
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted

// 2. Hoisting with let (Temporal Dead Zone - TDZ)
// console.log(hoistedLet); // ERROR: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Let is not initialized before declaration";
console.log(hoistedLet); // Output: Let is not initialized before declaration

// 3. Hoisting with const (Also TDZ)
// console.log(hoistedConst); // ERROR: Cannot access 'hoistedConst' before initialization
const hoistedConst = "Const is also not hoisted with initialization";
console.log(hoistedConst); // Output: Const is also not hoisted with initialization

// 4. Function Hoisting (Function Declarations are fully hoisted)
hoistedFunction(); // Output: Function is hoisted!
function hoistedFunction() {
    console.log("Function is hoisted!");
}

// 5. Function Expression Hoisting (Not Hoisted)
// hoistedExpression(); // ERROR: Cannot access 'hoistedExpression' before initialization
let hoistedExpression = function() {
    console.log("Function expressions are NOT hoisted!");
};
hoistedExpression(); // Output: Function expressions are NOT hoisted!

// 6. Arrow Function Hoisting (Not Hoisted)
// hoistedArrow(); // ERROR: Cannot access 'hoistedArrow' before initialization
const hoistedArrow = () => console.log("Arrow functions are also NOT hoisted!");
hoistedArrow(); // Output: Arrow functions are also NOT hoisted!

// 7. Hoisting Inside a Function Scope
function testFunctionHoisting() {
    console.log(innerVar); // Output: undefined (Hoisted inside function)
    var innerVar = "I am inside a function";
    console.log(innerVar); // Output: I am inside a function
}
testFunctionHoisting();

// 8. Hoisting Inside a Block Scope
{
    // console.log(blockVar); // ERROR: Cannot access 'blockVar' before initialization
    let blockVar = "Block scope hoisting example";
    console.log(blockVar); // Output: Block scope hoisting example
}

// 9. Function Hoisting in Conditional Statements
if (true) {
    function conditionalFunction() {
        console.log("Function inside an if statement");
    }
}
conditionalFunction(); // Output: Function inside an if statement

// 10. Hoisting in Loops (var vs let)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 1000); // Output: var i: 3 (Incorrect due to hoisting)
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 1000); // Output: let j: 0, let j: 1, let j: 2 (Correct due to block scope)
}
