// JavaScript Array splice() Method Examples

// 1. Basic splice() usage - Removing elements
const numbers = [1, 2, 3, 4, 5, 6];
const removed = numbers.splice(2, 2); // Removes 2 elements starting from index 2
console.log("Modified Numbers:", numbers); // Output: [1, 2, 5, 6]
console.log("Removed Elements:", removed); // Output: [3, 4]

// 2. Using splice() to insert elements
const fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 0, "Blueberry", "Mango"); // Insert at index 1 without removing any element
console.log("Fruits after insertion:", fruits);
// Output: ["Apple", "Blueberry", "Mango", "Banana", "Cherry"]

// 3. Using splice() to replace elements
const colors = ["Red", "Green", "Blue"];
colors.splice(1, 1, "Yellow"); // Replace element at index 1
console.log("Colors after replacement:", colors); 
// Output: ["Red", "Yellow", "Blue"]

// 4. Removing all elements from a specific index using splice()
const animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger"];
animals.splice(2); // Removes all elements from index 2 onwards
console.log("Animals after removal:", animals); 
// Output: ["Dog", "Cat"]

// 5. Using splice() to remove elements without leaving gaps
const numbers2 = [10, 20, 30, 40, 50];
numbers2.splice(1, 2); // Removes 2 elements from index 1
console.log("Numbers after removal:", numbers2); 
// Output: [10, 40, 50]

// 6. Using splice() to insert elements at the end
const letters = ["A", "B", "C"];
letters.splice(letters.length, 0, "D", "E"); // Appending at the end
console.log("Letters after append:", letters); 
// Output: ["A", "B", "C", "D", "E"]

// 7. Using splice() to extract a subarray (modifying the original)
const nums = [1, 2, 3, 4, 5, 6];
const extracted = nums.splice(2, 3); // Removes 3 elements from index 2
console.log("Extracted Elements:", extracted); // Output: [3, 4, 5]
console.log("Remaining Numbers:", nums); // Output: [1, 2, 6]

// 8. Using splice() on an empty array (No effect)
const emptyArray = [];
emptyArray.splice(0, 2, "Inserted");
console.log("Empty Array after splice:", emptyArray); 
// Output: ["Inserted"]

// 9. Using splice() to delete elements without replacement
const courses = ["Math", "Science", "History", "Geography"];
courses.splice(1, 2); // Removes "Science" and "History"
console.log("Courses after removal:", courses); 
// Output: ["Math", "Geography"]

// 10. Using splice() to manipulate elements dynamically
function removeLastTwoElements(arr) {
    return arr.splice(-2); // Removes last two elements
}
const items = ["Pen", "Pencil", "Eraser", "Sharpener"];
console.log("Removed Items:", removeLastTwoElements(items)); 
// Output: ["Eraser", "Sharpener"]
console.log("Remaining Items:", items); 
// Output: ["Pen", "Pencil"]
