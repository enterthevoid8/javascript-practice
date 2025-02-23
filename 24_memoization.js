/**
 * Memoization in JavaScript
 * 
 * Memoization is an optimization technique that caches the results of expensive function calls to improve performance.
 * When a function is called with the same arguments, it returns the cached result instead of recomputing it.
 * It is useful for recursive functions, expensive calculations, and reducing redundant computations.
 * Memoization is commonly used in dynamic programming, caching, and performance optimization.
 * 
 * Feature	            Description
 * Purpose	            Improves performance by caching results of expensive function calls.
 * How It Works	        Stores function results in an object/map, reuses them on repeated calls.
 * Use Cases	        Recursive functions (e.g., Fibonacci), mathematical calculations, API calls.
 * Best Storage	        Uses objects ({}) or Map() for better key-value storage.
 */

// JavaScript Memoization Examples

// 1. Basic Memoization Function (Manual Caching)
function memoize(fn) {
    const cache = {}; // Object to store results
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Computing result for:", key);
        const result = fn(...args);
        cache[key] = result; // Store result in cache
        return result;
    };
}

// 2. Memoized Factorial Function
const factorial = memoize(function(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
});

console.log("Factorial of 5:", factorial(5)); // Computes and stores
console.log("Factorial of 5:", factorial(5)); // Fetches from cache

// 3. Memoized Fibonacci Function
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log("Fibonacci(10):", fibonacci(10)); // Computes
console.log("Fibonacci(10):", fibonacci(10)); // Fetches from cache

// 4. Memoization Using Map for Better Performance
function memoizeWithMap(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            console.log("Fetching from cache:", key);
            return cache.get(key);
        }
        console.log("Computing result for:", key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// 5. Memoized Function for Expensive Computation
const slowFunction = memoizeWithMap(function(x) {
    console.log("Expensive computation running...");
    return x * x;
});

console.log("Square of 10:", slowFunction(10)); // Computes and caches
console.log("Square of 10:", slowFunction(10)); // Fetches from cache

// 6. Memoizing an API Call (Simulating Network Latency)
async function fetchData(id) {
    console.log("Fetching data for ID:", id);
    return new Promise(resolve => setTimeout(() => resolve(`Data for ID ${id}`), 2000));
}

const memoizedFetchData = memoizeWithMap(fetchData);

(async function() {
    console.log(await memoizedFetchData(1)); // Fetches from API
    console.log(await memoizedFetchData(1)); // Fetches from cache
})();

// 7. Memoization Using Closure for Function Calls
function closureMemoize(fn) {
    const cache = {};
    return function(x) {
        if (cache[x] !== undefined) {
            console.log("Fetching from cache:", x);
            return cache[x];
        }
        console.log("Computing result for:", x);
        return (cache[x] = fn(x));
    };
}

const doubleNumber = closureMemoize(x => x * 2);
console.log("Double of 8:", doubleNumber(8)); // Computes
console.log("Double of 8:", doubleNumber(8)); // Fetches from cache

// 8. Memoization in Higher-Order Functions
const memoizedAdd = memoize((a, b) => a + b);
console.log("Sum of (5, 3):", memoizedAdd(5, 3)); // Computes
console.log("Sum of (5, 3):", memoizedAdd(5, 3)); // Fetches from cache

// 9. Clearing Cache in Memoization
const memoizedMultiply = memoize((a, b) => a * b);
console.log("Product of (4, 6):", memoizedMultiply(4, 6)); // Computes
console.log("Product of (4, 6):", memoizedMultiply(4, 6)); // Fetches from cache
memoizedMultiply.cache = {}; // Clearing cache
console.log("Product of (4, 6) after cache clear:", memoizedMultiply(4, 6)); // Computes again

// 10. Using WeakMap for Automatic Garbage Collection
function memoizeWithWeakMap(fn) {
    const cache = new WeakMap();
    return function(obj) {
        if (cache.has(obj)) {
            console.log("Fetching from cache:", obj);
            return cache.get(obj);
        }
        console.log("Computing result for:", obj);
        const result = fn(obj);
        cache.set(obj, result);
        return result;
    };
}

const userData = { id: 1, name: "Alice" };
const memoizedUserData = memoizeWithWeakMap(obj => `User: ${obj.name}`);

console.log(memoizedUserData(userData)); // Computes
console.log(memoizedUserData(userData)); // Fetches from cache
