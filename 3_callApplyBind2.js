// 1. Using call()
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Lalit" };

console.log("Using call():");
greet.call(person, "Hello", "!"); 
// Output: Hello, Lalit!

// 2. Using apply()
console.log("\nUsing apply():");
greet.apply(person, ["Hi", "!!"]);
// Output: Hi, Lalit!!

// 3. Using bind()
console.log("\nUsing bind():");
const boundGreet = greet.bind(person, "Hey", "!!!");
boundGreet(); 
// Output: Hey, Lalit!!!

// Another Example Demonstrating 'this' Manipulation
const obj = {
    num: 42,
    showNum: function() {
        console.log(this.num);
    }
};

const anotherObj = { num: 100 };

console.log("\nUsing call() to change 'this':");
obj.showNum.call(anotherObj); // Output: 100

console.log("\nUsing apply() to change 'this':");
obj.showNum.apply(anotherObj); // Output: 100

console.log("\nUsing bind() to create a new function with changed 'this':");
const boundShowNum = obj.showNum.bind(anotherObj);
boundShowNum(); // Output: 100

// Function Borrowing Example
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce(city, country) {
    console.log(`My name is ${this.name} and I live in ${city}, ${country}.`);
}

console.log("\nUsing call() for function borrowing:");
introduce.call(person1, "New York", "USA"); 
// Output: My name is Alice and I live in New York, USA.

console.log("\nUsing apply() for function borrowing:");
introduce.apply(person2, ["London", "UK"]); 
// Output: My name is Bob and I live in London, UK.

console.log("\nUsing bind() to create a function:");
const boundIntroduce = introduce.bind(person1, "Paris", "France");
boundIntroduce(); 
// Output: My name is Alice and I live in Paris, France.
