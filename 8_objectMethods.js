// JavaScript Object Operations Examples

// 1. Creating an Object
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    features: ["Airbags", "ABS", "Sunroof"]
};

// 2. Accessing Object Properties
console.log("Car Brand:", car.brand); // Output: Toyota
console.log("Car Model:", car["model"]); // Output: Corolla

// 3. Adding a New Property
car.color = "Red";
console.log("Car after adding color:", car);

// 4. Updating an Existing Property
car.year = 2023;
console.log("Updated Car Year:", car.year);

// 5. Deleting a Property
delete car.features;
console.log("After Deleting 'features':", car);

// 6. Checking if a Property Exists
console.log("'color' in car:", "color" in car); // Output: true

// 7. Looping Through an Object (Using for..in)
console.log("Looping through car properties:");
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// 8. Getting Keys, Values, and Entries
console.log("Car Keys:", Object.keys(car)); // Output: ["brand", "model", "year", "color"]
console.log("Car Values:", Object.values(car)); // Output: ["Toyota", "Corolla", 2023, "Red"]
console.log("Car Entries:", Object.entries(car)); // Output: [["brand", "Toyota"], ["model", "Corolla"], ["year", 2023], ["color", "Red"]]

// 9. Merging Objects
const additionalDetails = { fuelType: "Petrol", transmission: "Automatic" };
const updatedCar = { ...car, ...additionalDetails };
console.log("Merged Car Object:", updatedCar);

// 10. Cloning an Object (Shallow Copy)
const clonedCar = Object.assign({}, car);
console.log("Cloned Car Object:", clonedCar);
