//	object initializer

var initObject = { a: "John", b: 50, c: {} };

console.log(initObject.a); // John

//	constructor method

class Employee {
  constructor() {
    this.name = "John";
  }
}

var employeeObject = new Employee();

console.log(employeeObject.name); // John

//	defining constructor more than once in a class

 class Employee {
   constructor() {
     this.name = "John";
   }
   constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
     this.age = 30;
   }
 }

 var employeeObject = new Employee();

 console.log(employeeObject.name);