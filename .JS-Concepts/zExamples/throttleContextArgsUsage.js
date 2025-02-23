const obj = {
  counter: 0,
  incrementAndLog(message) {
    this.counter++;
    console.log(`${message}: Counter is now ${this.counter}`);
  },
};

const throttle = (fn, limit) => {
  let flag = true;
  return function (...args) {
    let context = this; // Capture `this` (context)
    if (flag) {
      fn.apply(context, args); // Use `apply` to pass both `context` and `args`
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

// Throttle the incrementAndLog method
obj.throttledIncrement = throttle(obj.incrementAndLog, 2000);

// Call the throttled function
obj.throttledIncrement("Call 1"); // Logs: "Call 1: Counter is now 1"
obj.throttledIncrement("Call 2"); // Ignored due to throttling
setTimeout(() => obj.throttledIncrement("Call 3"), 2500); // Logs: "Call 3: Counter is now 2"
