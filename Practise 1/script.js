console.log("hello world")
// document.write(6)
// document.write("Hello World!");
// window.alert("Hello world")
// alert("Hello world")

// console.log(null + 6)
// console.log(undefined + 1)
// "use strict"
// a = 6; 
// console.log(a)

// console.log(typeof a)

// console.log(name)
// var name;
// console.log(name)

// var name;
// console.log(name)


// var carName;
// console.log(carName)
// console.log(typeof carName)


// var age;
// console.log(age)

// let student1 = Symbol("Tarun")
// let student2 = Symbol("Tarun")
// console.log(student1 == student2)
// console.log(student1)
// // alert(student1.toString())
// console.log(student1.description)

// const age = 24;
// const drink = age <= 5 ? "coffee" : "tea"
// console.log(drink)

//switch case 

// const marks = "C";
// switch(marks) {
//     case "A" : 
//          console.log("superb")
//          break;
//     case "B" :
//          console.log("Perfect")
//          break;
//     case "C" :
//          console.log("Good")
//          break;
//     case "D" : 
//          console.log("Fine")
//          break;
//     default : console.log("Check Your Result Carefully")
// }


// for(let index = 0; index<5 ; index++){
//     if(index == 2){
//         continue;
//     }
//     console.log(index, "Tarun")
// }

// let step = 0;
// while(step<5){
//     step++;
//     if(step == 1){
//         continue;
//     }
//     console.log(step, "step")
  
//     // if(step == 2){
//     //     break;
//     // }
    
// }

// let num = 6; 
// do{
//     console.log(num, "step")
//     num++;
// }while(num<5)

// let arr = ["rd Sharma", "rs agarwal", "chemistry"];
// console.log(arr)
// console.log(arr[1])
// console.log(arr[0])
// console.log(arr[2])
// arr.push("mathematics")
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift("biology")
// console.log(arr)

// arr.shift();
// console.log(arr)

// arr[2] = "Physics"
// console.log(arr)

// let arr2 = arr.slice(0,2)
// console.log(arr2)

// let arr = ["Arun", "Ankur", "Manu", "Tanu"]
// console.log(arr)

// arr.splice(1,2, "Raj", "Manoj")
// console.log(arr)

// const marks = [23, 24, 26, 28, 32];
// console.log(marks)
// const marks2 = marks;
// marks.push(48)
// console.log(marks)
// console.log(marks2)
// console.log(marks == marks2)

// const arr = [];
// const arr1 = [];

// console.log(arr == arr1)

// const arr = ["Tarun", "Ankur", "Sumer"];
// // for(let key in arr){
// //     console.log(arr[key])
// // }

// console.log(Array.isArray(arr))
// arr.sort()
// console.log(arr)

// console.log(arr1.sort((a,b) => a - b))
// console.log(arr1.sort((a,b) => b - a))
// const arr1= [84, 56, 75, 589, 875, 25, 24];

// console.log(arr1.join("and"))

//cloning of array

// const arr1 = ["item1", "item2", "item3"]
// const arr2 = ["item1", "item2", "item3"]
// const arr3 = [].concat(arr1)
// console.log(arr3)
// const arr4 = [...arr1]
// console.log(arr4)

// function greet(name, callback){
//     console.log("Hi " + name)
//     callback("Tarun kumar")
// }

// function callMe(name2) {
//     console.log("Hi i am callback function")
//     console.log(`Hi my name is ${name2}`)
// }

// greet("Tarun", callMe)

// function getCheese(callback){
//     setTimeout(() => {
//         const cheese = "🧀";
//         callback(cheese)
//     })
// }

// function makeDough(cheese, callback){
//     setTimeout(() => {
//         const dough = cheese + "🍩";
//         callback(dough)
//     })
// }

// function bakePizza(dough, callback){
//     setTimeout(() => {
//         const pizza = dough + "🍕"
//         callback(pizza)
//     })
// }

// getCheese((cheese) => {
//      makeDough(cheese, (dough) => {
//           bakePizza(dough, (pizza) => {
//             console.log("here is the pizza", pizza)
//             console.log("got the pizza", pizza)
//           })
//      })
// })


// function getCheese(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheese = "🧀";
//             resolve(cheese)
//         },1000)
//     })
    
// }

// function makeDough(cheese){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheese + "🍩";
//             resolve(dough)
//         },1000)
//     })
// }

// function bakePizza(dough){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//             resolve(pizza)
//         },1000)
//     })
// }

// getCheese()
//   .then((cheese) => {
//     console.log("here is the cheese", cheese)
//     return makeDough(cheese)
//   })
//   .then((dough)=> {
//     console.log("here is the dough", dough)
//     return bakePizza(dough)
//   })
//   .then((pizza) => {
//     console.log("here is the pizza", pizza)
//   })
//   .catch((data) => console.log("Something error occurs", error))
//   .finally(() => console.log("happy eating!!!"))


// async function orderPizza() {
//     try {
//         const cheese = await getCheese();
//         console.log("here is the cheese", cheese)

//         const dough = await makeDough(cheese)
//         console.log("here is the dough", dough)

//         const pizza = await bakePizza(dough)
//         console.log("here is the pizza", pizza)

//     } catch (error) {
//         console.log(error)
//     }
// }

// orderPizza();

// function myFunc(callback){
//     console.log("function is doing task 1")
//     return callback
// }

// function myFunc2(){
//     console.log("Function is doing task 2")
// }

// var ans = myFunc(myFunc2)
// ans()

// function calculate(a, b, operation){
//     return operation(a, b)
// }

// calculate(4, 5, (num1, num2) => {
//      console.log(num1 + num2);
// })

// // console.log(addition)

// const subtraction = (a, b) => a - b;

// const subResult = calculate(6, 2, subtraction)
// console.log(subResult)

