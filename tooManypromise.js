
<script>
// Simulated functions for createPost and deletePost
function createPost() {
  return new Promise((resolve, reject) => {
    // Simulated asynchronous operation
    setTimeout(() => {
      resolve('Post created');
    }, 2000);
  });
}

function seenSomeoneMessage() {
  return new Promise((resolve, reject) => {
    // Simulated asynchronous operation
    setTimeout(() => {
      resolve('Seen message');
    }, 1000);
  });
}

function updateProfilePhoto() {
  return new Promise((resolve, reject) => {
    // Simulated asynchronous operation
    setTimeout(() => {
      resolve('Profile photo updated');
    }, 1500);
  });
}

const user = {
  username: 'praveen',
  lastActivityTime: '20th July 2023'
};

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().getTime();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function userUpdatesAPost() {
  Promise.all([createPost(), updateLastActivityTime()])
    .then(([createPostResolves, updateLastActivityTimeResolves]) => {
      console.log(createPostResolves);
      console.log('Last Activity Time:', updateLastActivityTimeResolves);
    })
    .catch(err => console.log(err));
}

// Call the function
userUpdatesAPost();
</script>
