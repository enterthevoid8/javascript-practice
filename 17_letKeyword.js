/**
 * Purpose of the let Keyword in JavaScript
 * 
 * The let keyword is used to declare block-scoped variables in JavaScript.
 * It allows variables to be reassigned but not redeclared within the same scope.
 * 
 * Key Features of let:
 * 
 * Block Scope: Variables declared with let are only accessible within the block {} in which they are defined.
 * Can Be Reassigned: Unlike const, let allows reassignment of values.
 * Cannot Be Redeclared in the Same Scope: Prevents accidental redeclaration of variables.
 * Not Hoisted Like var: let variables are hoisted but not initialized.
 * 
 */


// JavaScript let Keyword Examples

// 1. Declaring and Reassigning a Variable with let
let name = "Alice";
console.log("Name before reassignment:", name); // Output: Alice

name = "Bob"; // Reassigning value
console.log("Name after reassignment:", name); // Output: Bob

// 2. Block Scope Demonstration
{
    let blockScoped = "I exist only in this block";
    console.log("Inside block:", blockScoped); // Output: I exist only in this block
}
// console.log("Outside block:", blockScoped); // ERROR: blockScoped is not defined

// 3. let vs var (Scope Difference)
if (true) {
    let letScoped = "Block Scoped";
    var varScoped = "Function Scoped";
}
// console.log(letScoped); // ERROR: letScoped is not defined
console.log(varScoped); // Output: Function Scoped (Accessible globally)

// 4. Cannot Redeclare let in the Same Scope
let fruit = "Apple";
// let fruit = "Banana"; // ERROR: Cannot redeclare variable 'fruit'

// 5. Using let in Loops (Block Scope Example)
for (let i = 0; i < 3; i++) {
    console.log("Loop iteration:", i);
}
// console.log(i); // ERROR: i is not defined (let is block-scoped)

// 6. let in Function Scope
function testLet() {
    let functionScoped = "Available only inside this function";
    console.log("Inside function:", functionScoped);
}
testLet();
// console.log(functionScoped); // ERROR: functionScoped is not defined

// 7. let and Temporal Dead Zone (TDZ)
console.log("Before declaration:", typeof someVar); // Output: undefined
// console.log(someLet); // ERROR: Cannot access 'someLet' before initialization

var someVar = "I am declared with var";
let someLet = "I am declared with let";

// 8. let with Objects (Mutable Properties)
let user = { name: "Alice", age: 25 };
user.age = 30; // Allowed (let does not freeze objects)
console.log("Updated User:", user); // Output: { name: "Alice", age: 30 }

// 9. let in Nested Blocks
{
    let outer = "Outer Block";
    {
        let inner = "Inner Block";
        console.log("Inner Scope:", inner); // Output: Inner Block
        console.log("Access Outer:", outer); // Output: Outer Block
    }
    // console.log(inner); // ERROR: inner is not defined
}

// 10. let in Asynchronous Code (Using setTimeout)
for (let j = 1; j <= 3; j++) {
    setTimeout(() => {
        console.log("Delayed Execution:", j);
    }, j * 1000);
}
// Output: Prints 1, 2, 3 in separate delays (Because let is block-scoped)


/**
 * 
 * Feature	Explanation
 * 
 * Block Scope	            Variables declared with let are confined to {}.
 * Reassignment             Allowed	let allows changing values but prevents redeclaration in the same scope.
 * Not Hoisted Like var	    Accessing before declaration leads to ReferenceError due to Temporal Dead Zone (TDZ).
 * Loop Behavior	        Each loop iteration gets a new instance of let, making it great for async tasks.
 * 
 */