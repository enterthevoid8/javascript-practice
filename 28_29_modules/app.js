import { add, multiply, PI } from './modules/mathUtils.js';
import subtract from './modules/mathUtils.js';
import { sayHello, sayGoodbye } from './modules/greetings.js';
import createBankAccount from './modules/bankAccount.js';

console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(4, 2));
console.log("Value of PI:", PI);
console.log("Subtraction:", subtract(10, 4));

console.log(sayHello("Alice"));
console.log(sayGoodbye("Bob"));

const myAccount = createBankAccount("Alice", 100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log("Balance:", myAccount.getBalance());

document.getElementById("loadModule").addEventListener("click", async () => {
    const mathModule = await import('./modules/dynamicImport.js');
    mathModule.loadMathModule();
});