// 1. Basic Prototype Chain Example
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.

// 2. Inheriting from another Constructor Function
function Mammal(name) {
    this.name = name;
}

Mammal.prototype.walk = function () {
    console.log(`${this.name} is walking.`);
};

function Dog(name, breed) {
    Mammal.call(this, name);
    this.breed = breed;
}

// Inherit prototype methods from Mammal
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log(`${this.name} is barking!`);
};

const myDog = new Dog("Max", "Golden Retriever");
myDog.walk(); // Output: Max is walking.
myDog.bark(); // Output: Max is barking.

// 3. Using Class Syntax (ES6) with Prototype Chain
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Developer extends Person {
    constructor(name, skill) {
        super(name);
        this.skill = skill;
    }

    code() {
        console.log(`${this.name} is coding in ${this.skill}`);
    }
}

const dev = new Developer("Lalit", "JavaScript");
dev.greet(); // Output: Hello, my name is Lalit
dev.code(); // Output: Lalit is coding in JavaScript

// 4. Modifying the Prototype Chain Dynamically
function Car(brand) {
    this.brand = brand;
}

Car.prototype.drive = function () {
    console.log(`${this.brand} is driving.`);
};

const myCar = new Car("Tesla");
myCar.drive(); // Output: Tesla is driving.

// Adding a new method dynamically
Car.prototype.charge = function () {
    console.log(`${this.brand} is charging.`);
};

myCar.charge(); // Output: Tesla is charging.

// 5. Prototype Chain Lookup
const obj = { a: 1 };
const childObj = Object.create(obj);
childObj.b = 2;

console.log(childObj.a); // Output: 1 (inherited from obj)
console.log(childObj.b); // Output: 2 (own property)
console.log(childObj.hasOwnProperty("a")); // Output: false
console.log(childObj.hasOwnProperty("b")); // Output: true

// 6. Overriding Prototype Methods
function Bird(name) {
    this.name = name;
}

Bird.prototype.fly = function () {
    console.log(`${this.name} is flying.`);
};

const parrot = new Bird("Parrot");
parrot.fly(); // Output: Parrot is flying.

// Overriding fly method
Bird.prototype.fly = function () {
    console.log(`${this.name} is soaring high!`);
};

parrot.fly(); // Output: Parrot is soaring high!


/** 
 * Key Concepts Covered:
 * 
 * Basic Prototype Chain (Animal.prototype)
 * Prototype Inheritance (Dog inherits from Mammal)
 * ES6 Classes & Inheritance (Developer extends Person)
 * Dynamic Prototype Modification (Car.prototype.charge)
 * Prototype Lookup Mechanism (Object.create)
 * Overriding Prototype Methods (Bird.prototype.fly) 
 * 
 */