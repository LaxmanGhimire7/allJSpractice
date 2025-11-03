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

let age = prompt("What's your age?");

if (age === null) {
  console.log("You cancelled!");
} else {
  if (age.trim() === "") {
    console.log("Enter anything dont keep null value");
  } else {
    age = Number(age);

    if (age < 0) {
      console.log("age cant be in negative value");
    }else if (age >= 18) {
      console.log("You can vote");
    } else console.log("Cant vote");
  }
}
