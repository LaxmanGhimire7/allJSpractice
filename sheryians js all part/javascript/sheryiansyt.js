// qno1. Print numbers from 1 - 10 using for loop.

// for (let i = 1; i<11; i++){
//     console.log(i)
// };

// 2. Print numbers from 10 t0 1 using for & while loop.

// for(let i=10; i>0; i--){
//     console.log(i)
// };

// let i=10;
// while(i>0){
//     console.log(i)
//     i--;

// };

// 3. Print even numbers from 1 to 20 using for loop.

// for (let i=1; i<21; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// };

//4. Print odd number from 1 to 15 using for & while loop.

// for(let i = 1; i<16; i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

// let i = 1;

// while(i<16){
// if(i % 2 !== 0){
//     console.log(i);
// };
//    i++;
// };

// 5. Print the multiplication table eg: 5 x 1 = .....

// for (let i =1; i<11; i++){
//     console.log(`5 x ${i} = ${i*5}`);
// };

// 6. Find the sum of 1 to 100 using loop.

// let sum = 0;

// for(let i=1; i<101; i++){
//     sum += i;
// };
// console.log(sum);

// 7. Print all the numbers between 1 to 50 that are all divisible by 3;

// for(let i = 1; i<51; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

//8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let lakxh = +prompt("Jati maan lagxa teti number de..");

// for(let i = 1; i<=lakxh; i++){
//     if(i % 2 === 0){
//         console.log(`${i} - Even`);
//     }else{
//         console.log(`${i} - Odd`);
//     }
// }

// 9. Count how many numbers between 1 to 100 are divisible by both 3 and 5;

// let count = 0;

// for (let i = 1; i<101; i++){
//     if(i%3 === 0 && i%5 === 0){
//         count++;
//     };
// };

// console.log(`The count is: ${count}`);

// Break ko question

// Qno.1. Stop at first multiple of 7.

// Write a loop of 1 to 100
// . Print each number.
// . Stop at the moment it finds the number that is completely divisible by 7.

// for(let i=1; i<101; i++){
//  console.log(i)
//     if(i%7 === 0){
//         break;
//     };

// }

// 2. Continue

// Skip all the number that are divisible by 3 not to stop to skip from 1 to 20;

//  for(let i = 1; i<21; i++){
//     if(i %3 === 0) continue;
//     console.log(i)
//  }

// Print odd no only from 1 to 200 but just keep 5 first value e.g: 1,3,5,7,9

// let count = 0;
// for (let i = 1; i < 201; i++) {
//   if (i % 2 === 1) {
//     count++;
//     console.log(i);
//   }

//   if (count === 5) {
//     break;
//   }
// }

// let count = 0;
// let num = 2345644987478945;

// while (num > 0){
// num = Math.floor(num/10); // yo garnu ko reason divide by 10 garda point ma ni aauna sakxa so Math.floor le if 34.5 aako xa vanye .5 lai hatayera 34 matra baki hunxa
// count++
// }
// console.log(count)    // this is to count the total numbers there = 16

// function add(a="Hello",b="Laxman"){
//   console.log(a +" "+ b)
// }

// add();

// function resy(a,b,c,...val){
// console.log(a,b,c,val)
// }

// resy(1,2,3,4,5,6,7,89)

// function abcd(v) {
//   return 12 + v;
// }
// let val = abcd(100);
// console.log(val);
  