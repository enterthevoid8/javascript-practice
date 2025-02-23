const loggerFunc = (message) => {
  console.log(`Throttled Message: ${message}`);
};

const throttle = (fn, limit) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn(...args); // Pass the arguments to the original function
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const throttledLogger = throttle(loggerFunc, 2000);

throttledLogger("Hello, World!"); // Logs immediately
throttledLogger("This won't log"); // Ignored due to throttling
setTimeout(() => throttledLogger("This will log after 2 seconds"), 2500); // Logs after 2.5 seconds
