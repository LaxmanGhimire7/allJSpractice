// for(let i=10; i>0; i--){
//  console.log(i)
// }

// i = 1;

// console.log(++i);
// console.log(i++)

// prompt("Scissors, paper, rock")

// function rps(user, computer){

// if(user === computer) return "draw";

// if(user === "rock" && computer === "scissor") return "user won";
// if(user === "paper" && computer === "rock") return "user won";
// if(user === "scissor" && computer === "paper") return "user won";

// else return "computer won";
// }
// console.log(rps("", "paper"));

// for(let i=1; i<10; i++){
//     console.log(`The multiplication of 5 x ${i} = ${5*i}`)
// }

// let count = 0;

// for (let i=1; i<=15; i++){
//     if(i>8){
//         count++
//     }
// }
// console.log(`The count is ${count}`);

// Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("What's your age?");

// if (age === null) {
//   console.log("You cancelled!");
// } else {
//   if (age.trim() === "") {
//     console.log("Enter anything dont keep null value");
//   } else {
//     age = Number(age);

//     if (age < 0) {
//       console.log("age cant be in negative value");
//     }else if (age >= 18) {
//       console.log("You can vote");
//     } else console.log("Cant vote");
//   }
// }

//12. Ask user for words until they type “stop”. Count how many times they typed “yes”
//Loop until "stop" is typed. Count "yes".

// let count = 0;

// let word = prompt("Tell any word (hint: tell 'stop' to stop this loop....)");

// while (word !== "stop") {
//   if (word === "yes") count++;
//   word = prompt("Tell any word (hint: tell 'stop' to stop this loop....)");

// }

// console.log(count);

// 13. Print numbers divisible by 7 from 1 to 50
//Use modulo % and loop.

// for (let i=1; i<51; i++){
//   if(i%7 === 0){
//     console.log(i)
//   }
// }

//14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;

// for (let i=1; i<31; i++){
//   if(i%2 !== 0){
//     sum = sum + i;
//   };

// };

// console.log(sum);

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;

// for (let i = 1; i < 21; i++) {
//   if (count === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let counter = 0;

for (let i = 1; i < 6; i++) {
  let num = +prompt("Write any natural number");

  if (num > 0) {
    counter++;
  }
}
console.log(counter);
