// 1. Object Literal
const personLiteral = {
    name: "Lalit",
    age: 30,
    greet: function() {
        console.log("Hello from Object Literal!");
    }
};
personLiteral.greet();

// 2. Using Object.create()
const proto = {
    greet() {
        console.log("Hello from Prototype!");
    }
};
const personCreate = Object.create(proto);
personCreate.name = "Lalit";
personCreate.age = 30;
personCreate.greet();

// 3. Using a Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello from Constructor Function!");
    };
}
const personConstructor = new Person("Lalit", 30);
personConstructor.greet();

// 4. Using Class (ES6)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello from Class!");
    }
}
const personClass = new PersonClass("Lalit", 30);
personClass.greet();

// 5. Using Object() Constructor
const personObject = new Object();
personObject.name = "Lalit";
personObject.age = 30;
personObject.greet = function() {
    console.log("Hello from Object Constructor!");
};
personObject.greet();

// 6. Using Factory Function
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log("Hello from Factory Function!");
        }
    };
}
const personFactory = createPerson("Lalit", 30);
personFactory.greet();

// 7. Using Object.assign()
const baseProto = { greet() { console.log("Hello from Object.assign()!"); } };
const personAssign = Object.assign({}, baseProto, { name: "Lalit", age: 30 });
personAssign.greet();

// 8. Using Spread Operator
const basePerson = { greet() { console.log("Hello from Spread Operator!"); } };
const personSpread = { ...basePerson, name: "Lalit", age: 30 };
personSpread.greet();