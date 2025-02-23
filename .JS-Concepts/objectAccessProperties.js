// objectName.property;
// objectName["property"];
// objectName[expression];

const user = {
  name: "Alice",
  "last name": "Smith",
  age: 30,
};

console.log(user.name);          // Dot notation: "Alice"
console.log(user["last name"]);  // Bracket notation: "Smith"
console.log(user["ag" + "e"]);   // Expression in bracket notation: 30
