/**
 * Closures in JavaScript
 * 
 * A closure is a function that retains access to its parent’s scope, even after the parent function has executed.
 * It allows a function to remember and access variables from its lexical scope even when executed outside of that scope.
 * Closures help in encapsulation, data hiding, and function factories.
 * They are commonly used in event handlers, callbacks, and maintaining private state in JavaScript.
 * 
 * Feature              Description
 * Scope Retention	    A function retains access to variables from its parent function even after execution.
 * Encapsulation	    Variables inside closures remain private and cannot be modified externally.
 * Use Cases	        Data hiding, function factories, event listeners, memoization.
 * Common Pitfalls	    Closures inside loops may lead to unexpected behavior if not handled properly.
 * 
 */

// JavaScript Closures Examples

// 1. Basic Closure: Inner function retains access to outer function’s variables
function outerFunction() {
    let outerVar = "I am from outer function";
    return function innerFunction() {
        console.log(outerVar); // Outer variable is accessible
    };
}
const closureFunc = outerFunction();
closureFunc(); // Output: I am from outer function

// 2. Closure with a Counter (Encapsulation)
function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        },
        decrement: function() {
            count--;
            console.log("Count:", count);
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
console.log("Final Count:", counter.getCount()); // Output: 1

// 3. Function Factory: Generating Multiple Closures
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log("Double of 4:", double(4)); // Output: 8
console.log("Triple of 4:", triple(4)); // Output: 12

// 4. Using Closures in Event Listeners
function attachEvent() {
    let message = "Hello from closure!";
    document.getElementById("btn").addEventListener("click", function() {
        console.log(message);
    });
}
// Assume a button with id="btn" exists in HTML
// attachEvent(); // Clicking the button logs "Hello from closure!"

// 5. Closures for Data Privacy (Hiding Variables)
function BankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited $${amount}. New balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Withdrew $${amount}. Remaining balance: $${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}
const account = BankAccount(100);
account.deposit(50); // Output: Deposited $50. New balance: $150
account.withdraw(30); // Output: Withdrew $30. Remaining balance: $120
console.log("Current Balance:", account.getBalance()); // Output: 120

// 6. Closure Inside a Loop (Using IIFE to Fix Issues)
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(() => console.log("Using IIFE - Iteration:", j), j * 1000);
    })(i);
}
// Output:
// Iteration: 1 (after 1 sec)
// Iteration: 2 (after 2 sec)
// Iteration: 3 (after 3 sec)

// 7. Closures in Memoization (Caching Function Results)
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Computing result for:", key);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
const memoizedFactorial = memoize(function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
});
console.log("Factorial of 5:", memoizedFactorial(5)); // Computes & caches
console.log("Factorial of 5:", memoizedFactorial(5)); // Fetches from cache

// 8. Closures to Create a Unique ID Generator
function idGenerator() {
    let id = 0;
    return function() {
        id++;
        return `ID-${id}`;
    };
}
const generateID = idGenerator();
console.log(generateID()); // Output: ID-1
console.log(generateID()); // Output: ID-2

// 9. Using Closures to Delay Execution
function delayedMessage(msg, delay) {
    return function() {
        setTimeout(() => console.log(msg), delay);
    };
}
const delayedHello = delayedMessage("Hello after 2 seconds!", 2000);
delayedHello(); // Output: "Hello after 2 seconds!" (after delay)

// 10. Simulating Private Methods in a Class with Closures
function Car(brand) {
    let mileage = 0; // Private variable
    return {
        drive: function(distance) {
            mileage += distance;
            console.log(`${brand} driven ${distance} km. Total mileage: ${mileage} km.`);
        },
        getMileage: function() {
            return mileage;
        }
    };
}
const myCar = Car("Toyota");
myCar.drive(50); // Output: Toyota driven 50 km. Total mileage: 50 km.
myCar.drive(30); // Output: Toyota driven 30 km. Total mileage: 80 km.
console.log("Total Mileage:", myCar.getMileage()); // Output: 80
