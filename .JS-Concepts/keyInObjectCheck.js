const user = { name: "John", age: undefined };

// 1. Check if a key exists
console.log("name" in user); // true
console.log("nickName" in user); // false

// 2. Check if a key exists directly
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("toString")); // false

// 3. Check if a key has a value (not undefined)
console.log(user.name !== undefined); // true
console.log(user.age !== undefined); // false (key exists but value is undefined)
console.log(user.nickName !== undefined); // false (key does not exist)
