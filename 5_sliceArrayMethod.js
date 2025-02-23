// JavaScript Array slice() Method Examples

// 1. Basic slice() usage - Extracting a portion of an array
const numbers = [1, 2, 3, 4, 5, 6];
const slicedNumbers = numbers.slice(2, 5); // Extracts index 2 to 4 (end index is excluded)
console.log("Sliced Numbers:", slicedNumbers); // Output: [3, 4, 5]

// 2. Using slice() without end index - Extracts from the start index to the end of the array
const slicedFromIndex = numbers.slice(3);
console.log("Sliced from Index 3:", slicedFromIndex); // Output: [4, 5, 6]

// 3. Using slice() with negative indexes - Extracts elements from the end
const slicedNegative = numbers.slice(-3, -1); // Last 3rd to last 1st (excluding last)
console.log("Sliced with Negative Indexes:", slicedNegative); // Output: [4, 5]

// 4. Using slice() with only one negative index - Extracts from that index to the end
const slicedSingleNegative = numbers.slice(-2);
console.log("Sliced with One Negative Index:", slicedSingleNegative); // Output: [5, 6]

// 5. Cloning an array using slice()
const clonedArray = numbers.slice();
console.log("Cloned Array:", clonedArray); // Output: [1, 2, 3, 4, 5, 6]

// 6. Slicing an array of strings
const fruits = ["Apple", "Banana", "Cherry", "Dates", "Elderberry"];
const slicedFruits = fruits.slice(1, 4);
console.log("Sliced Fruits:", slicedFruits); // Output: ["Banana", "Cherry", "Dates"]

// 7. Using slice() on an array-like object (NodeList, arguments)
function sliceArguments() {
    const argsArray = Array.prototype.slice.call(arguments, 1, 3);
    console.log("Sliced Arguments:", argsArray);
}
sliceArguments(10, 20, 30, 40); // Output: [20, 30]

// 8. Using slice() on Strings (via split)
const str = "HelloWorld";
const slicedString = str.split("").slice(2, 7).join("");
console.log("Sliced String:", slicedString); // Output: "lloWo"

// 9. Using slice() in a function to return a portion of an array
function getLastElements(arr, count) {
    return arr.slice(-count);
}
console.log("Last 3 Elements:", getLastElements(numbers, 3)); // Output: [4, 5, 6]

// 10. Avoiding mutation with slice() when removing elements
const colors = ["Red", "Green", "Blue", "Yellow"];
const newColors = colors.slice(1, 3); // Extract without modifying original array
console.log("Original Colors:", colors); // Output: ["Red", "Green", "Blue", "Yellow"]
console.log("Sliced Colors:", newColors); // Output: ["Green", "Blue"]
