// JavaScript Map Operations Examples

// 1. Creating a Map
const studentMap = new Map();

// 2. Adding Key-Value Pairs
studentMap.set("name", "John Doe");
studentMap.set("age", 20);
studentMap.set("grade", "A");

console.log("Student Map after adding keys:", studentMap);

// 3. Getting a Value
console.log("Student's Name:", studentMap.get("name")); // Output: John Doe

// 4. Checking if a Key Exists
console.log("Has 'age' key:", studentMap.has("age")); // Output: true
console.log("Has 'subject' key:", studentMap.has("subject")); // Output: false

// 5. Deleting a Key
studentMap.delete("age");
console.log("Student Map after deleting 'age':", studentMap);

// 6. Getting Map Size
console.log("Student Map Size:", studentMap.size); // Output: 2

// 7. Iterating Over a Map (Using for..of)
console.log("Iterating Over Student Map:");
for (let [key, value] of studentMap) {
    console.log(`${key}: ${value}`);
}

// 8. Converting Map to an Object
const mapToObject = Object.fromEntries(studentMap);
console.log("Converted Object from Map:", mapToObject);

// 9. Converting Object to Map
const objectToMap = new Map(Object.entries({ subject: "Math", score: 95 }));
console.log("Converted Map from Object:", objectToMap);

// 10. Clearing a Map
studentMap.clear();
console.log("Student Map after clearing:", studentMap); // Output: Map(0) {}
