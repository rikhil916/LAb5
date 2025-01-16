// A function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      const success = true; // This will simulate whether the operation succeeds or fails
  
      setTimeout(() => {
        if (success) {
          resolve('Data fetched successfully!');
        } else {
          reject('Error fetching data');
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result); // Logs 'Data fetched successfully!' if resolved
    })
    .catch((error) => {
      console.log(error); // Logs 'Error fetching data' if rejected
    });
  