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

// 1. Print all numbers from 1–100 but:
//    if divisible by 3 → print "Fizz",
//    if divisible by 5 → print "Buzz",
//    if both → print "FizzBuzz".

// for(let i = 1; i<101; i++){

//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} - FizzBuzz`);
//     }else if(i % 3 === 0){
//         console.log(`${i} - Fizz`);
//     }else if(i % 5 === 0){
//         console.log(`${i} - Buzz`);
//     }else{
//         console.log(i);
//     }
// }

// 2. Count how many numbers are there;

// let number = 9861833371;
// let count = 0;

// while(number > 0){
//     number = Math.floor(number/10);
//     count++
// };
// console.log(count)

// 3.  Reverse a number (like 1234 → 4321).

// let number = 1234567;
// let reverse = 0;

// while(number > 0){
//     let digit = number % 10;
//     reverse = reverse * 10 + digit;
//     number = Math.floor(number/10)

// };
// console.log(reverse)

// let number = 123456789;
// let reverse = 0;

// while(number > 0){

//     let anything = number % 10;
//     reverse = reverse * 10 + anything;
//     number = Math.floor(number/10)
// };
// console.log(reverse)

// 4. Find the sum of digits of any number (e.g. 1234 → 1+2+3+4=10).

// let number = 1234567890;
// let sum = 0;

// while(number > 0){
//     let singleNumber = number % 10;
//     sum = sum + singleNumber;
//     number = Math.floor(number / 10)
// };
// console.log(sum);

// 5. Count how many digits are in a given number

// let number = 9861833371;
// let count = 0;

// while(number > 0){
//   number = Math.floor(number/10);
//   count++;
// };
// console.log(count);

// 6. 3️⃣ Check if a number is palindrome (e.g. 121 → same backward)

// let number = 111;
// let original = number;
// let reverse = 0;

// while(number > 0){

//     let digit = number % 10;
//     reverse = reverse * 10 + digit;
//     number = Math.floor(number/10);
// };
// if(original === reverse){
//     console.log(`The ${original} & ${reverse} is palindrome.`)
// }else{
//    console.log(`The ${original} & ${reverse} is not palindrome.`)
// }

// 7. Find the factorial of a number (e.g. 5! = 1×2×3×4×5)

// let number = 3;
// let result = 1;

// for(i =1; i<=number; i++){
//     result = result * i;
// };
// console.log(result);

//5️⃣ Check if a number is prime

// let number = 1;
// let isPrime = true;

// for (let i = 2; i <= number - 1; i++) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("Prime yeyey");
// } else {
//   console.log("Prime nono");
// }

// Print the first 10 prime numbers.

// let count = 0;

// for(let i = 2; i<100; i++){
//     let isPrime = true;

//     for(let j = 2; j<i; j++){
//         if(i % j === 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(i);
//         count++
//     }
//     if(count === 10) break;
// }

//7️⃣ Fibonacci Series (first 10 terms) eg: 0,1,1,2,3,5,8,13

// let a = 0;
// let b= 1;
// console.log(a);
// console.log(b);


// for (let i = 3; i<11; i++){
    
//     let next = a + b;
//     console.log(next);

//     a = b;
//     b = next;
// }



// 8️⃣ Reverse Triangle Pattern;

let num = 5;


for (let i = num; i>0; i--){

    let star = "";
    for(let j =1 ; j<=i; j++ ){
   star = star + "*"
    }
    console.log(star)
}
