// 🟠 Medium Level (10 Questions)
// (Need condition + pattern + counters)

// 1. Print all perfect squares (like 1, 4, 9, 16...) up to 100.

// for (let i=1; i<101; i++){
// console.log(i**2)
// }

// 2. Print numbers from 10 to 1 (reverse order).

// for(let i = 10; i>0; i--){
//     console.log(i)
// }

// 3. Ask user for a number and print from 1 to that number.

// let num = +prompt("Tell any number");

// for(let i =1; i<=num; i++){
//     console.log(i)
// };

// 4. Count how many numbers between 1–100 are divisible by 3.

// let count = 0;

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0) {
//     count++;
//   }
// }
// console.log(count);

// 5. Print numbers from 1–50, but if number is 25, print "Halfway!" instead.

// for (let i=1; i<51; i++){
//     if(i===25) console.log(`${i} - Halfway`);
//    else console.log(i)
// };

// 6. Count how many numbers between 1–50 are not divisible by 2 and 3.

// let count = 0;

// for (let i = 1; i < 51; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     count++;
//   }
// }
// console.log(count);

// 7. Print a countdown from 10 to 1 and at the end print "Blast Off!".

// for (let i = 10; i > 0; i--) {
//   console.log(i);
//   if (i <= 1) console.log("Blast Off");
// }

// 8. Ask user for 5 numbers (prompt), count how many are positive.

// let count = 0;

// for (i = 1; i<6; i++){
//     let num = +prompt("5 ota num vaan....");
//     if(num > 0){
//         count++
//     };
// }
// console.log(count)


// 9. Ask user for 5 numbers, find the largest one.

// let largest;

// for (i = 1 ; i<6; i++){
//     let user = +prompt("Number any 5");

//  if(i === 1){ 
//     largest = user;
//  };

//  if(user > largest){
//     largest = user;
//  }


// }
// console.log(largest)


// let bigger;

// for (i = 1 ; i<6; i++){
//     let deko = +prompt("number de");

//     if(i ===1 ){
//        bigger = deko;
//     };


//     if(deko > bigger){
//         bigger = deko;
//     }
// }
// console.log(`The largest number is ${bigger}`)



// let largest = 0;

// for(i=1; i<6; i++){
//     let userInput = +prompt("Tell any natural number..");

//     if(i === 1){
//         largest = userInput;
//     };


//     if(userInput > largest){
//         largest = userInput;
//     };
// };

// console.log(largest)



//🔴 Hard / Advanced Logic (10 Questions)

//(Pure loop logic — no arrays, just math + brain use)

// Print all numbers from 1–100 but:

// if divisible by 3 → print "Fizz",

// if divisible by 5 → print "Buzz",

// if both → print "FizzBuzz".


for(let i = 1; i<101; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} - FizzBuzz`);
    }else if(i % 3 === 0){
        console.log(`${i} - Fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} - Buzz`);
    }else{
        console.log(i);
    }
}