// // first class functions --> function lai values jasari treat garna sakinxa

// let abcd = function (val) {
//   val();
// };

// abcd(function () {
//   console.log("Laxman Ghimire");
// });

// // hof - High order function vaneko jasle arko function return garxa or accepts another function in parameter

// let lakxh = function (hof) {
//   hof();
// };

// lakxh(function () {
//   console.log(
//     "I am Laxman and lakxh is HOF because it accepts me from parameter"
//   );
// });

// // yeta chai greet hof vayo coz yesle arko function lai ni return gardai xa and ()() double bracket ko matlab function vitra arko function return hudai xa so i am calling function inside function
// let greet = function () {
//   return function () {
//     console.log("I greeted u");
//   };
// };
// greet()();

// let a = 12;

// function hehe(){
//     console.log("Jii")
// }
// hehe();

// function hihi(){
//     a++;
//     console.log(a)
// }
// hihi()
// hihi()
// hihi()
// hihi()
// hihi()
// hihi()
// hihi()
// hihi()

// Lexical Scoping
// function abcd() {
//   let a = 12;
//   function defg() {
//     let b = 13;
//     console.log(a-b)
//     function ijkl() {
//       let c = 14;
//     }
//     ijkl()
//   }
//   defg()
// }
// abcd()

// //Closure
// function hii(){
// let a = 12;

// function next(){
//     console.log(a)
// }
//  return next
// }

// let fn = hii();
// fn();

// IIFE
// (function(){
//     console.log("Hii")
// })()

//Hoisting in function
// abcd();

// function abcd(){
//     console.log("hiii")
// }

// function multiply(a,b){
//     return a*b
// }

// let multiply = (a,b)=>{
// return a *b
// }

// function getScore(...val){
//     let sum = 0;
//     val.forEach((num)=>{
//         sum = sum + num;
//     })
//     return sum;
// }

// console.log(getScore(10,20,30,40,50))

// function abcd(val){
//     val()
// }

// abcd(function(){
//     console.log("Laxman Ghimire")
// })

// Closure practice
// function outer(){
// let count = 0
//     return function(){
//    count++
//    console.log(count)
//     }
// }

// let counter = outer();
// counter()
// counter()

//convert this basic function in IIFE

// function init(){
//     console.log("Initialized")
// }

// (function(){
//     console.log("Initialized")
// })();

//write a BMI calculator

// function bmi(weight, height){
//     return weight / (height*height)
// }
// console.log(bmi(60, 1.65).toFixed(2))

// Discounter

// function discountPercent(discount) {
//   return function (price) {
//    return price - price * (discount / 100);
//   };
// }

// let discounter = discountPercent(10);
// console.log(discounter(2000));



