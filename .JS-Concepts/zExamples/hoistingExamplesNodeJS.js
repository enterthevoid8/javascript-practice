// Hoisting Examples in JavaScript

console.log("---- 1. Variable Hoisting with var ----");
console.log(a); // undefined
var a = 10;
console.log(a); // 10

console.log("---- 2. Variable Hoisting with let ----");
try {
    console.log(b); // ReferenceError
} catch (e) {
    console.log(e.message);
}
let b = 20;
console.log(b); // 20

console.log("---- 3. Variable Hoisting with const ----");
try {
    console.log(c); // ReferenceError
} catch (e) {
    console.log(e.message);
}
const c = 30;
console.log(c); // 30

console.log("---- 4. Function Declaration Hoisting ----");
greet(); // "Hello, World!"
function greet() {
    console.log("Hello, World!");
}

console.log("---- 5. Function Expression Hoisting ----");
try {
    sayHello(); // TypeError
} catch (e) {
    console.log(e.message);
}
var sayHello = function () {
    console.log("Hi!");
};
sayHello(); // "Hi!"

console.log("---- 6. Class Hoisting ----");
try {
    const obj = new MyClass(); // ReferenceError
} catch (e) {
    console.log(e.message);
}
class MyClass {
    constructor() {
        this.name = "Lalit";
    }
}

console.log("---- 7. Nested Block with let ----");
{
    let x = 5;
    {
        console.log(x); // 5
        let x = 10; // Shadows the outer `x`
        console.log(x); // 10
    }
    console.log(x); // 5
}

console.log("---- 8. Block Scope with let and const ----");
{
    let y = 40;
    const z = 50;
    console.log(y); // 40
    console.log(z); // 50
}
try {
    console.log(typeof y); // undefined
    console.log(typeof z); // undefined
} catch (e) {
    console.log(e.message);
}

console.log("---- 9. Hoisting in Loops (var) ----");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}

console.log("---- 10. Hoisting in Loops (let) ----");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 0, 1, 2
}

console.log("---- 11. Function in Block Scope ----");
{
    function blockScopedFunc() {
        console.log("Block Scoped Function");
    }
    blockScopedFunc(); // "Block Scoped Function"
}
try {
    blockScopedFunc(); // ReferenceError
} catch (e) {
    console.log(e.message);
}

console.log("---- 12. Temporal Dead Zone (TDZ) ----");
try {
    console.log(f); // ReferenceError
} catch (e) {
    console.log(e.message);
}
let f = 60;

try {
    console.log(g); // ReferenceError
} catch (e) {
    console.log(e.message);
}
const g = 70;

console.log("---- 13. Mixing var, let, const, and Functions ----");
console.log(x); // undefined
try {
    console.log(y); // ReferenceError
} catch (e) {
    console.log(e.message);
}
try {
    console.log(z); // ReferenceError
} catch (e) {
    console.log(e.message);
}
console.log(myFunc); // [Function: myFunc]

var x = 10;
let y = 20;
const z = 30;

function myFunc() {
    console.log("Function Hoisted");
}
myFunc();
