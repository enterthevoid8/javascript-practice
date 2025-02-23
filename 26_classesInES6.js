/**
 * Classes in ES6 (ECMAScript 2015)
 * 
 * 
 * Classes in ES6 provide a cleaner, more structured way to create objects and implement inheritance.
 * They are syntactical sugar over JavaScript’s prototype-based inheritance but offer a more intuitive, OOP-style structure.
 * Classes support constructors, methods, getters, setters, and inheritance using the extends keyword.
 * Unlike function constructors, ES6 classes are not hoisted and must be declared before use.
 * 
 * Feature	            Description
 * Syntax	            Uses class keyword to define classes.
 * Constructor	        Special method called when an object is created.
 * Methods	            Defined inside the class, no need for function keyword.
 * Getters/Setters	    Provide controlled access to properties using get and set.
 * Inheritance	        Achieved using extends and super().
 * Encapsulation	    Private properties and methods can be used (since ES2020).
 * Hoisting	            Classes are not hoisted, so they must be declared before use.
 * 
 * */

// JavaScript ES6 Classes Examples

// 1. Basic Class with a Constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// 2. Class with Default Values
class Animal {
    constructor(name = "Unknown", species = "Unknown") {
        this.name = name;
        this.species = species;
    }
    describe() {
        console.log(`${this.name} is a ${this.species}.`);
    }
}

const animal1 = new Animal("Tiger", "Mammal");
animal1.describe(); // Output: Tiger is a Mammal.
const animal2 = new Animal();
animal2.describe(); // Output: Unknown is a Unknown.

// 3. Using Getters and Setters
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price; // Private variable convention (_)
    }
    get price() {
        return `$${this._price.toFixed(2)}`;
    }
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("Price must be a positive value.");
        }
    }
}

const product1 = new Product("Laptop", 999.99);
console.log(product1.price); // Output: $999.99
product1.price = 1200;
console.log(product1.price); // Output: $1200.00
product1.price = -5; // Output: Price must be a positive value.

// 4. Inheritance (Extending a Class)
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Calls the parent constructor
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

const employee1 = new Employee("Bob", 30, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Bob and I am 30 years old.
employee1.work(); // Output: Bob is working as a Software Engineer.

// 5. Static Methods (Methods That Do Not Require an Instance)
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3)); // Output: 8

// 6. Private Properties and Methods (ES2020+)
class BankAccount {
    #balance; // Private property

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    getBalance() {
        return `Balance: $${this.#balance}`;
    }
}

const account = new BankAccount("Charlie", 500);
account.deposit(200); // Output: Deposited $200. New balance: $700
console.log(account.getBalance()); // Output: Balance: $700
// console.log(account.#balance); // ERROR: Private field '#balance' must be declared in an enclosing class

// 7. Class Expressions (Anonymous and Named)
const Vehicle = class {
    constructor(type, brand) {
        this.type = type;
        this.brand = brand;
    }
    info() {
        return `This is a ${this.brand} ${this.type}.`;
    }
};

const car = new Vehicle("Sedan", "Toyota");
console.log(car.info()); // Output: This is a Toyota Sedan.

// 8. Using `super` in Methods (Extending Parent Methods)
class Manager extends Employee {
    constructor(name, age, jobTitle, department) {
        super(name, age, jobTitle);
        this.department = department;
    }
    work() {
        super.work();
        console.log(`${this.name} manages the ${this.department} department.`);
    }
}

const manager1 = new Manager("Eve", 35, "Project Manager", "IT");
manager1.work();
// Output:
// Eve is working as a Project Manager.
// Eve manages the IT department.

// 9. Overriding Methods
class Parent {
    greet() {
        console.log("Hello from Parent class!");
    }
}
class Child extends Parent {
    greet() {
        console.log("Hello from Child class!");
    }
}

const child1 = new Child();
child1.greet(); // Output: Hello from Child class!

// 10. Checking if an Object is an Instance of a Class
console.log(person1 instanceof Person); // Output: true
console.log(employee1 instanceof Person); // Output: true
console.log(employee1 instanceof Employee); // Output: true
console.log(employee1 instanceof BankAccount); // Output: false
