if (!Array.prototype.includes) {
  Array.prototype.includes = function (element, fromIndex = 0) {
    // Convert the array-like object to an array
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    const arr = Object(this);
    const length = arr.length >>> 0; // Ensure length is a non-negative integer

    // Handle negative fromIndex
    let start = Math.max(fromIndex >= 0 ? fromIndex : length + fromIndex, 0);

    // Iterate over the array to check for the element
    for (let i = start; i < length; i++) {
      if (arr[i] === element || (typeof arr[i] === "number" && isNaN(arr[i]) && isNaN(element))) {
        return true; // Element found
      }
    }
    return false; // Element not found
  };
}

// Test the polyfill
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
