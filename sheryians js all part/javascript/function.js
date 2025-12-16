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

