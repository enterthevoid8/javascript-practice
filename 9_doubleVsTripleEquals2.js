// JavaScript Equality Operators: == vs ===

// 1. Double Equals (==) - Checks value only (Performs Type Coercion)
console.log("Using == (Double Equals):");
console.log(5 == "5");  // Output: true (Number and String are converted to the same type)
console.log(0 == false); // Output: true (Boolean false is treated as 0)
console.log(null == undefined); // Output: true (Both are considered equivalent)
console.log([] == "");  // Output: true (Empty array and empty string are considered equal)
console.log(1 == true); // Output: true (Boolean true is treated as 1)

// 2. Triple Equals (===) - Checks value and type (Strict Comparison)
console.log("\nUsing === (Triple Equals):");
console.log(5 === "5");  // Output: false (Number is not equal to String)
console.log(0 === false); // Output: false (Different data types: Number vs Boolean)
console.log(null === undefined); // Output: false (Different types)
console.log([] === "");  // Output: false (Array is not the same as String)
console.log(1 === true); // Output: false (Boolean is not equal to Number)

// 3. Checking Objects and Arrays (Reference vs Value)
console.log("\nChecking Objects and Arrays:");
const obj1 = { key: "value" };
const obj2 = { key: "value" };
console.log(obj1 == obj2);  // Output: false (Different references in memory)
console.log(obj1 === obj2); // Output: false (Same reason as above)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);  // Output: false (Different memory locations)
console.log(arr1 === arr2); // Output: false (Reference comparison)

// 4. Comparing Objects by Reference
const obj3 = obj1;
console.log(obj1 == obj3);  // Output: true (Same reference)
console.log(obj1 === obj3); // Output: true (Same reference)

// 5. Special Cases with == and ===
console.log("\nSpecial Cases:");
console.log(NaN == NaN);  // Output: false (NaN is never equal to itself)
console.log(NaN === NaN); // Output: false (Same reason)
console.log([] == false); // Output: true (Empty array is coerced to false)
console.log([] === false); // Output: false (Different data types)

// 6. Best Practice
console.log("\nBest Practice: Always use === for predictable comparisons");
console.log(10 === 10);  // Output: true (Same type and value)
console.log("Hello" === "Hello"); // Output: true (Same type and value)
