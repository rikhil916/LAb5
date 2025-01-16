 
function getUserData(callback) {
    setTimeout(() => {
      console.log("User data fetched");
      callback();
    }, 1000);
  }
  
  function getUserPosts(callback) {
    setTimeout(() => {
      console.log("User posts fetched");
      callback();
    }, 1000);
  }
  
  function getPostComments(callback) {
    setTimeout(() => {
      console.log("Post comments fetched");
      callback();
    }, 1000);
  }
  
  // Callback hell: Nested callbacks
  getUserData(() => {
    getUserPosts(() => {
      getPostComments(() => {
        console.log("All tasks are completed!");
      });
    });
  });
  