// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 3000);
// });

// prm
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

// fetch((`https://dummyjson.com/products`)=>{})
let data = fetch(`https://dummyjson.com/products`)
  .then((raw) => raw.json())
  .then((fresh) => console.log(fresh.products[4].title));
