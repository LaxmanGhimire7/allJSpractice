// let marks = [1,2,3,4,5]


// new way to create array

// let srr = new Array(1,2,3,4,5);
// console.log(srr)

//Modfying array
// let arr = [1,2,3,4]
// arr[2] = 12;
// console.log(arr);


// let fruits = ['banana', 'apple', 'orange', 'pineapple']

// // fruits.push("Lakxh")
// // fruits.pop()
// console.log(fruits)


// let arr = [1,2,3,4,5,6]

// // arr.shift()
// // arr.unshift(0)
// // arr.splice(1,3)  1 is from which index hatauna suru garne and 3 is kati ota so output vaneko 1,5,6
// // let newArr = arr.slice(2,3) output is 3

// console.log(arr)
// console.log(newArr)



// let fruits = ['banana', 'apple', 'peach', 'kiwi']
// fruits.reverse();
// console.log(fruits)


// let num = [26,67,11,89,99,55]
// let newNum = num.sort((a,b)=>{
// return b-a;
// })
// console.log(newNum)




// let num = [1,2,3,4,5,6,7,8]

// num.forEach((val)=>{
//     console.log(val+3)
// })


// let nums = [1,2,3,4,5,6,7,8]

// let neW = nums.map((num)=>{
//  return num+3;
// })
// console.log(neW)
// console.log(nums)

// let nums = [1,2,3,4,5,6,7,8]

// let newNum = nums.filter((val)=>{
//     if(val > 5) return true;
// })
// console.log(newNum)


// let arr = [1,2,3]
// let newarr = arr.reduce((acc, val)=>{
//   return acc + val;
// })
// console.log(newarr)



// let arr = [1,2,3,4,5,6];

// let [a,b,...c] = arr;
 
// a = 20;

// console.log(a,b,...c)
// console.log(arr)



// q1
// let fruits = ['apple', 'banana', 'mango']
// console.log(fruits[1])


// q2 add "mango" at the end and "pineapple" at the front of this array

// let fruits = ["Apple", "Banana"]

// fruits.push("Mango")
// fruits.unshift("Pineapple")


// q3. replace "banana" with kiwi 

// let fruits = ["Apple", "Banana"]

// fruits[1] = "kiwi"
// console.log(fruits)

//q.4 remove the last item from this array using a method

// let arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr)


// q5. Insert "Red" and "Blue" at the 1st index

// let colors = ["White", "Brown"]
// colors.splice(1,0,"Red", "Blue")

// q6. Extract only middle 3 from this element
// let numbers = [1,2,3,4,5,6]
// let newNum = numbers.slice(2,4)


//q 7. Sort this arrya in ascending order and reverse it.
// let names = ["Zara", "Arjun", "Mira", "Bhavya"]

// let asc = names.sort();
// console.log(asc)

// let rev = asc.reverse();
// console.log(rev)

// q 8. use .ap to square each number

// let arr = [1,2,3,4]

// let newArrr = arr.map((val)=>{
//     return val * val 
// })


// q.9 use .filter() to keep numbers greater than 10.

// let arr = [5,12,8,20,3]

// let nnn = arr.filter((val)=>{
//     if(val > 10) return val;
// })


// q 10. use .reduce() to find the sum of the array
//  let arr = [10,20,30]

//  let final = arr.reduce((acc, val)=>{
//   return acc + val;
//  },0)



// q . 11 use .find() to get the first number less than 10:

// let arr = [12, 15, 8, 3, 18]

// let finding =  arr.find((val)=>{
//   return val<10
// })


// q.12 use .some() to check if any student has scored below 35:

// let arr = [45, 60, 25, 90]

// let uuu = arr.some((val)=>{
//   return val < 35
// })

// q.13 Use .every() if all numbers are even
// let arr = [2,4,6,8,10]

// let j = arr.every((val)=>{
//    return val % 2 === 0;
// })


// q.14 Destructure this array to get firstName and lastName:

// let names = ["Harsh", "Sharma"]

// let[a,b] = names;
// console.log(a)
// console.log(b)


//q.15 merge 2 arrays using spread operator

// let a = [1,2]
// let b = [3,4]

// let c = [...a, ...b]
// console.log(c)


//q 16. Ass Nepal at first using spreat operator

// let countries = ["India", "USA"]
// let newCountry = ["Nepal",...countries]

// q.17 Clone this array not by reference
// let arr = [1,2,3];
// let arr2 = [...arr]
// arr2.pop()
// console.log(arr2)
// console.log(arr)
