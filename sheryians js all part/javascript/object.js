// let obj = {
//     name: "Sheryians",
//     course: "JavaScript",
//     duration: "3 months"
// }

// let obj2 = {...obj};

// object.assign()
// let obj2 = Object.assign({},obj)
// console.log(obj2)

// console.log(obj.name, " ,", obj.course, obj.duration)

// let role = "admin"
// let objs = {
//     name:"Laxman Ghimire",
//     age: 22,
//     email: "ghimirelaxman2155@gmail.com",
//     detail:{
//         skills: "MERN Stack",
//         docker: "Hi"
//     },
//     [role]:"Lakxh"
// }

// optional chaining
// objs?.details?.docker

// let newObj = {...objs}
// newObj.details.skills = "Django"

// console.log(newObj)
// console.log(objs)

// let obj2 = JSON.parse(JSON.stringify(objs))
// obj2.details.skills = "LKaxkn"
// console.log(obj2)
// console.log(objs)

// console.log(objs.details.docker)

// var h1 = document.querySelector('h1');
// h1.addEventListener('click',()=>{
//     h1.innerHTML = 'Hola'
// })

// Questions

// 1. Create an object for a student with name, age, and isEnrolled

// let student = {
//     name: "Laxman",
//     age: 25,
//     isEnrolled: false,
// }
// console.log(student)

// 2. Can an Object key be a number or a bollean. Try

// let obj = {
//     true: "Lakxh",
//     1: 23,
// }
// console.log(obj)

// 3. Access the value of "first-name", from this object.
// const user = {
//     "first-name" : "Laxman Ghimire",
// }

// console.log(user.first-name) NAN
// console.log(user["first-name"]) // this is the way to do

// 4. Given a dynamic key let key = "age", how will you access user[key]

// let key = "age"
// const user = {
//    age: 25,
// }

// console.log(user[key])

// 5. From object below print the latitude
// const locations = {
//     city: "Kathmandu",
//     coordinates:{
//         lat: 22.4,
//         lon: 34.5,
//     },
// };

// locations.coordinates.lat

// 6. What will happen if coordinates is missing? How can u prevent errors?

// Ans: By going for optional chaning

// const locations = {
//     city: "Kathmandu",
//     coord:{
//         lat: 22.4,
//         lon: 34.5,
//     },
// };

// console.log(locations?.coordinates?.lat)

// 7. Destructure the city and lat from the location object from above.

// const locations = {
//     city: "Kathmandu",
//     coordinates:{
//         lat: 22.4,
//         lon: 34.5,
//     },
// };

// const {city} = locations;
// const {lat} = locations.coordinates;

// var a = lat;
// console.log(a)

// 8. Destructure the key "first-name", as a variable called firstName

// const user = {
//     "first-name" : "Laxman Ghimire",
// }

// let {"first-name": firstName} = user;

// 9. Use for in loop to log all keys in this obj
// const course = {
//     title: "JavaScript",
//     duration: "4 weeks"
// }

// for (let key in course){
//     console.log(key)
// }

// 10. Use Object.entries() to print all key-value pairs as:

// const course = {
//     title: "JavaScript",
//     duration: "4 weeks"
// }

// Object.entries(course).forEach((val)=>{
// console.log(val[0] + ":" + val[1])
// });

// 11. Copy using this obj using ... spread operator

// const original = {a:1, b:2};

// const copy = {...original}
// console.log(copy)

// 12. Deep clone obj1

// const ob1 = { info: { score: 100 } };

// let naya = JSON.parse(JSON.stringify(ob1));
// naya.info.score = 9;

// console.log(naya.info.score)
// console.log(ob1.info.score)

// 13. Use a variable to dynamically assign a property

// let key = "role";

// let obj = {
//     name: "Lakxh",
//     [key]: "admin",
// }
// console.log(obj)

