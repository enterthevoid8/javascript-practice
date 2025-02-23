// Sample JSON String
const jsonString = '{"name": "Lalit", "age": 30, "skills": ["JavaScript", "React", "Node.js"]}';

// 1. Parsing JSON (Convert JSON String to JavaScript Object)
const parsedData = JSON.parse(jsonString);
console.log("Parsed JSON Object:", parsedData);

// 2. Stringifying JSON (Convert JavaScript Object to JSON String)
const jsonObject = { name: "John", age: 25, city: "New York" };
const jsonStringified = JSON.stringify(jsonObject);
console.log("\nStringified JSON:", jsonStringified);

// 3. Accessing JSON Data
console.log("\nAccessing JSON Properties:");
console.log("Name:", parsedData.name);
console.log("Skills:", parsedData.skills[0]); // Output: JavaScript

// 4. Modifying JSON Data
parsedData.age = 31;
parsedData.skills.push("GraphQL");
console.log("\nModified JSON Object:", parsedData);

// 5. Looping Through JSON Data
console.log("\nLooping Through JSON Data:");
for (let key in parsedData) {
    console.log(`${key}: ${parsedData[key]}`);
}

// 6. Handling Nested JSON Objects
const nestedJSON = {
    person: {
        name: "Alice",
        details: {
            age: 28,
            city: "San Francisco"
        }
    }
};

console.log("\nAccessing Nested JSON:");
console.log("Person's Name:", nestedJSON.person.name);
console.log("Person's City:", nestedJSON.person.details.city);

// 7. Filtering JSON Data (Example: Extracting Skills with 'J')
const filteredSkills = parsedData.skills.filter(skill => skill.startsWith("J"));
console.log("\nFiltered Skills (Starting with 'J'):", filteredSkills);

// 8. Checking if a JSON String is Valid
const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

console.log("\nChecking Valid JSON:");
console.log("Is jsonString valid?", isValidJSON(jsonString)); // true
console.log("Is invalid JSON valid?", isValidJSON("{name: 'test'}")); // false

// 9. Merging Two JSON Objects
const additionalData = { country: "India", city: "Jaipur" };
const mergedData = { ...parsedData, ...additionalData };
console.log("\nMerged JSON Object:", mergedData);
