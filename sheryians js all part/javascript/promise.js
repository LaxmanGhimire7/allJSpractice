const prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

prm
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
