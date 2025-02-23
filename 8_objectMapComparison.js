// 1. Creating an Object and a Map
const obj = { name: "Alice", age: 25 };
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log("Object:", obj);
console.log("Map:", map);

// 2. Checking Key Existence
console.log("\nChecking if key exists:");
console.log("'name' in obj:", "name" in obj); // Output: true
console.log("map.has('name'):", map.has("name")); // Output: true

// 3. Getting Values
console.log("\nGetting Values:");
console.log("Object value:", obj.name); // Output: Alice
console.log("Map value:", map.get("name")); // Output: Alice

// 4. Adding and Updating Data
obj.city = "New York";
map.set("city", "New York");
console.log("\nAfter Adding 'city':");
console.log("Object:", obj);
console.log("Map:", map);

// 5. Deleting a Property or Key
delete obj.age;
map.delete("age");
console.log("\nAfter Deleting 'age':");
console.log("Object:", obj);
console.log("Map:", map);

// 6. Iterating Over an Object vs a Map
console.log("\nIterating Over Object:");
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

console.log("\nIterating Over Map:");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// 7. Getting Keys, Values, and Entries
console.log("\nObject Keys:", Object.keys(obj)); // Output: ["name", "city"]
console.log("Map Keys:", [...map.keys()]); // Output: ["name", "city"]

console.log("\nObject Values:", Object.values(obj)); // Output: ["Alice", "New York"]
console.log("Map Values:", [...map.values()]); // Output: ["Alice", "New York"]

console.log("\nObject Entries:", Object.entries(obj)); // Output: [["name", "Alice"], ["city", "New York"]]
console.log("Map Entries:", [...map.entries()]); // Output: [["name", "Alice"], ["city", "New York"]]

// 8. Comparing Object and Map
console.log("\nComparing Object and Map:");
console.log(JSON.stringify(obj) === JSON.stringify(Object.fromEntries(map))); 
// Output: true (Both have same key-value pairs)
