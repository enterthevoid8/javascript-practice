// Simulate an asynchronous data fetch with a callback
function fetchDataCallback(url, callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" }; // Simulated data
    callback(null, data); // Call the callback with the data
  }, 2000);
}

// Usage of the function with a callback
fetchDataCallback("https://api.example.com/user", (error, data) => {
  if (error) {
    console.error("An error occurred:", error);
  } else {
    console.log("Data fetched successfully (Callback):", data);
  }
});


// Simulate an asynchronous data fetch with a Promise
function fetchDataPromise(url) {
  console.log("Fetching data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" }; // Simulated data
      if (url) {
        resolve(data); // Resolve the promise with the data
      } else {
        reject("URL is required"); // Reject the promise with an error
      }
    }, 2000);
  });
}

// Usage of the function with a Promise
fetchDataPromise("https://api.example.com/user")
  .then((data) => {
    console.log("Data fetched successfully (Promise):", data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

//Chaining promises
fetchDataPromise("https://api.example.com/user")
  .then((data) => {
    console.log("User fetched:", data);
    return fetchDataPromise("https://api.example.com/orders");
  })
  .then((orders) => {
    console.log("Orders fetched:", orders);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
