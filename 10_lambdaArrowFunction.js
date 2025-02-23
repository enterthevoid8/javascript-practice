// 1. Basic Arrow Function (Single Parameter, Implicit Return)
const square = x => x * x;
console.log("Square of 4:", square(4)); // Output: 16

// 2. Arrow Function with Multiple Parameters
const add = (a, b) => a + b;
console.log("Sum of 5 and 3:", add(5, 3)); // Output: 8

// 3. Arrow Function with No Parameters
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

// 4. Multi-line Arrow Function (Explicit Return Required)
const multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log("Multiplication of 6 and 7:", multiply(6, 7)); // Output: 42

// 5. Arrow Function Returning an Object (Need Parentheses)
const createPerson = (name, age) => ({ name, age });
console.log("Created Person:", createPerson("Alice", 25)); 
// Output: { name: 'Alice', age: 25 }

// 6. Using Arrow Functions in Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled); // Output: [2, 4, 6, 8, 10]

// 7. Arrow Function as a Callback in `setTimeout`
setTimeout(() => console.log("Executed after 2 seconds"), 2000);

// 8. Lexical `this` in Arrow Functions (Arrow functions don’t bind their own `this`)
const person = {
    name: "John",
    sayHello: function() {
        setTimeout(() => console.log(`Hello, I am ${this.name}`), 1000);
    }
};
person.sayHello(); // Output: Hello, I am John (this refers to person)

// 9. Arrow Function Inside `filter()`
const ages = [18, 20, 15, 22, 30];
const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults); // Output: [18, 20, 22, 30]

// 10. Arrow Function Inside `reduce()`
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // Output: 15
