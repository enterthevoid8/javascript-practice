/**
 * Temporal Dead Zone (TDZ) in JavaScript
 * 
 * TDZ is the period between variable creation and its initialization in which accessing the variable causes a ReferenceError.
 * let and const remain uninitialized in TDZ, unlike var, which is hoisted with undefined
 * TDZ starts from the beginning of the enclosing block until the variable is declared.
 * Avoid using variables before declaration to prevent errors.
 * Function declarations are hoisted and do not have a TDZ, but function expressions with let do.
 * 
 */

// JavaScript Temporal Dead Zone (TDZ) Examples

// 1. Accessing a let variable before declaration causes a ReferenceError
// console.log(name); // ERROR: Cannot access 'name' before initialization
let name = "Alice"; 
console.log("Declared Name:", name); // Output: Alice

// 2. const also has a Temporal Dead Zone
// console.log(age); // ERROR: Cannot access 'age' before initialization
const age = 25;
console.log("Declared Age:", age); // Output: 25

// 3. var does not have a TDZ (Hoisting with undefined)
console.log("Var Hoisted:", city); // Output: undefined
var city = "New York";

// 4. TDZ inside a block scope
{
    // console.log(blockVar); // ERROR: Cannot access 'blockVar' before initialization
    let blockVar = "Inside Block";
    console.log("Block Variable:", blockVar); // Output: Inside Block
}

// 5. Function parameters also have TDZ when using let/const
function testTDZ(x = value) {
    // let value = 10; // ERROR: Cannot access 'value' before initialization
    console.log(x);
}
let value = 20;
testTDZ(); // Output: 20

// 6. TDZ with typeof operator (Unlike var, typeof does not prevent ReferenceError for let/const)
// console.log(typeof undeclaredVar); // Output: "undefined"
 // console.log(typeof undeclaredLet); // ERROR: Cannot access 'undeclaredLet' before initialization
let undeclaredLet = "Some Value";

// 7. TDZ in loops
// for (let i = 0; i < 1; i++) {
//     console.log(x); // ERROR: Cannot access 'x' before initialization
//     let x = 10;
// }

// 8. Accessing function before declaration is allowed (Function Hoisting)
hoistedFunction(); // Output: Function is hoisted!
function hoistedFunction() {
    console.log("Function is hoisted!");
}

// 9. Function Expression using let (TDZ applies)
// hoistedExpression(); // ERROR: Cannot access 'hoistedExpression' before initialization
let hoistedExpression = function() {
    console.log("Function expression with let");
};
hoistedExpression(); // Output: Function expression with let

// 10. Using let in an if block (TDZ applies)
if (true) {
    // console.log(a); // ERROR: Cannot access 'a' before initialization
    let a = "Inside If Block";
    console.log(a); // Output: Inside If Block
}
