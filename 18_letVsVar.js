/**
 * 
 * Difference Between let and var in JavaScript
 * Both let and var are used for variable declaration, but they have different behaviors regarding scope,
 * hoisting, and redeclaration.
 * 
 * 
 * Feature	            var	                                    let
 * Scope	            Function-scoped	                        Block-scoped
 * Hoisting	            Hoisted and initialized as undefined	Hoisted but not initialized (Temporal Dead Zone)
 * Redeclaration	    Allowed in the same scope	            Not allowed in the same scope
 * Reassignment	        Allowed	                                Allowed
 * Behavior in Loops	Uses the same variable instance	        Creates a new variable instance per iteration
 * Global Object	    Attaches to window (bad practice)	    Does not attach to window
 * 
 */

// JavaScript var vs let Examples

// 1. Scope Difference: var is function-scoped, let is block-scoped
function scopeExample() {
    if (true) {
        var varVariable = "I am using var";
        let letVariable = "I am using let";
    }
    console.log(varVariable); // Output: "I am using var"
//  console.log(letVariable); // ERROR: letVariable is not defined (Block-scoped)
}
scopeExample();

// 2. var Hoisting vs let Hoisting
console.log(varHoisted); // Output: undefined (var is hoisted)
// console.log(letHoisted); // ERROR: Cannot access 'letHoisted' before initialization (Temporal Dead Zone)
var varHoisted = "Hoisted with var";
let letHoisted = "Hoisted with let";

// 3. Redeclaration: var allows it, let does not
var redeclare = "First declaration with var";
var redeclare = "Redeclared with var"; // No error
console.log(redeclare); // Output: Redeclared with var

let letRedeclare = "First declaration with let";
// let letRedeclare = "Redeclared with let"; // ERROR: Cannot redeclare block-scoped variable 'letRedeclare'

// 4. var in Loops (Unexpected Behavior)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var loop:", i), 1000);
}
// Output: "var loop: 3" (printed 3 times because `var` is function-scoped)

// 5. let in Loops (Creates new instance each iteration)
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let loop:", j), 1000);
}
// Output: "let loop: 0", "let loop: 1", "let loop: 2" (Each loop iteration gets a new instance)

// 6. Function Scope Example
function varFunctionScope() {
    var localVar = "Function scoped";
}
function letFunctionScope() {
    let localLet = "Function scoped";
}
// console.log(localVar); // ERROR: localVar is not defined (Function-scoped)
// console.log(localLet); // ERROR: localLet is not defined (Function-scoped)

// 7. Reassignment (Both var and let allow reassignment)
var reassignVar = "Original var";
let reassignLet = "Original let";

reassignVar = "Updated var";
reassignLet = "Updated let";

console.log("Reassigned var:", reassignVar); // Output: Updated var
console.log("Reassigned let:", reassignLet); // Output: Updated let

// 8. var Attaches to Window Object, let Does Not
var globalVar = "I am global";
let globalLet = "I am also global";

console.log("window.globalVar:", window.globalVar); // Output: "I am global"
console.log("window.globalLet:", window.globalLet); // Output: undefined

// 9. let Prevents Issues in Nested Blocks
if (true) {
    let blockVar = "Inside block";
    console.log("Inside block:", blockVar); // Output: Inside block
}
// console.log(blockVar); // ERROR: blockVar is not defined

// 10. var Inside a Function is Confined to It
function testVarScope() {
    var functionVar = "Inside function";
}
// console.log(functionVar); // ERROR: functionVar is not defined
