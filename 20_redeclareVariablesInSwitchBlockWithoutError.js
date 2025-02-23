/**
 * Redeclaring Variables in a switch Block Without an Error
 * In JavaScript, switch statements do not create their own block scope like loops or if statements. 
 * This means that if you try to redeclare a variable using let or const inside multiple case blocks,
 * you will get an error.
 * 
 * To avoid this, wrap each case block in its own {} block scope.
 */

// Redeclaring Variables in a Switch Block Without Error

function checkValue(value) {
    switch (value) {
        case 1: {
            let message = "Value is One";
            console.log(message);
            break;
        }
        case 2: {
            let message = "Value is Two"; // No error due to block {}
            console.log(message);
            break;
        }
        case 3: {
            let message = "Value is Three"; // Again, no error due to separate block {}
            console.log(message);
            break;
        }
        default: {
            let message = "Unknown Value"; // Separate scope in default case
            console.log(message);
            break;
        }
    }
}

checkValue(1); // Output: "Value is One"
checkValue(2); // Output: "Value is Two"
checkValue(3); // Output: "Value is Three"
checkValue(4); // Output: "Unknown Value"

// Using const inside separate case blocks
function setConstant(value) {
    switch (value) {
        case "A": {
            const status = "Active";
            console.log(status);
            break;
        }
        case "B": {
            const status = "Blocked"; // No error due to block {}
            console.log(status);
            break;
        }
        case "C": {
            const status = "Closed"; // Again, no error due to separate block {}
            console.log(status);
            break;
        }
        default: {
            const status = "Invalid"; // Separate scope in default case
            console.log(status);
            break;
        }
    }
}

setConstant("A"); // Output: "Active"
setConstant("B"); // Output: "Blocked"
setConstant("C"); // Output: "Closed"
setConstant("D"); // Output: "Invalid"
