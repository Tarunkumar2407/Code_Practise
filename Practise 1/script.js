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

// function printABC(char, callback){
//       setTimeout(() => {
//         console.log(char)
//         callback()
//       },1000)
// }
// printABC("A", () => {
//     printABC("B", () => {
//         printABC("C", () => {
//             printABC("D", () => {
//                 console.log("Abcd is printed")
//             })
//         })
//     })
// })

function printABC(char) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(char)
        },1000)
    })
}
// printABC("A")
// .then((char) => {
//     console.log(char)
//     return printABC("B")
// })
// .then((char) => {
//     console.log(char)
//     return printABC("C")
// })
// .then((char) => {
//     console.log(char)
// })

// async function print(){
//     try{
//         const printA = await printABC("A")
//     console.log(printA)

//     const printB = await printABC("B")
//     console.log(printB)

//     const printC = await printABC("C")
//     console.log(printC)
// }
// catch(error){
//     console.log(error)
// }
// }

// print()

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.map((value, index, array) => {
//      console.log(value * 2, index, array);
//      return value * 3;
// })
// console.log(arr2)

// const arr3 = arr.filter((value) => {
//     return value % 2 == 0
// })

// console.log(arr3)

// const sum = arr.reduce((acc, curr)=> {
//     return acc + curr;
// })
// console.log(sum)

// const max = arr.reduce((acc, curr) => {
//     if(curr > acc) {
//         acc = curr;
//     }
//     return acc;
// })

// console.log(max)

// const num = [23, 54, 2, 76, 24, 21, 5];

// num.sort((a,b)=> b - a)
// console.log(num)

// const myArray = ["hello", "cat", "dog", "Apple"]
// const ans = myArray.find(string => string.length === 3)
// console.log(ans)

// const myArray = new Array(10).fill(0)

// console.log(myArray)

// myArray.fill(2, 2, 5)
// console.log(myArray)

// const number = new Set();

// number.add(1)
// number.add(2)
// number.add(6)
// number.add(9)

// console.log(number.size)
// console.log(number.delete(1))
// console.log(number.has(3))
// console.log(number)


// const person = new Map()
// person.set("name", "Tarun")
// person.set("age", 24)
// console.log(person)
// console.log(person.keys())
// console.log(person.values())
// for(let key of person.values()){
//     console.log(key)
// }

// const person2 = new Map([["name", "Ankur"], ["age", 24]])

// console.log(person2)

// for(let key of person2){
//     console.log(key)
// }

// const ticket = new Promise((resolve, reject) => {
//     const isBorded = false;
//     if(isBorded){
//         resolve("congratulations!!!, You are in the flight")
//     }
//     else{
//         reject("Your flight has been cancelled")
//     }
// })

// ticket
// .then((data) => console.log(data))
// .catch(data => console.log(data)) 
// .finally(() => console.log("It will always exexuted"))

// const obj = {
//     name : "Tarun",
//     age: 24,
//     // address: {houseNumber: 006, landmark: "Mda colony"}
// }

// // const obj2 = Object.assign({}, obj)
// // console.log(obj2)

// console.log(obj?.address?.houseNumber)

// const person = {
//     name: "Tarun",
//     age: 18,
//     about: function(){
//         console.log(`Person's name is ${this.name} and age is ${this.age}`)
//     }
// }

// const person2 = {
//     name: "Ankur",
//     age: 24
// }

// person.about();

// person.about.call(person2)

// function about(favActor, favMovie){
//     console.log(`Person's name is ${this.name} and age is ${this.age} ${favActor} and ${favMovie}`)
// }

// const person1 = {
//     name: "Tarun",
//     age: 24
// }

// const person2 = {
//     name: "Ankur",
//     age: 18
// }

// about.call(person1, "Akshay", "Article 370")
// about.call(person2, "Akshay", "Article 370")
// about.apply(person2, ["Akshay", "Article 370"])
// const ans = about.bind(person1, "Akshay", "Article 370")
// ans();

// console.log(this)
// console.log(window)
// console.log(this == window)
// console.log(this === window)

// function myFunc(){
//     "use strict"
//     console.log(this)
// }
// myFunc()

// const person1 = {
//     name: "Tarun",
//     age: 24
// }

// const person2 = Object.create(person1)

// console.log(person2.name)
// console.log(person2)


// const heading = document.getElementsByClassName("heading")
// heading[0].style.color = "Red"
// // heading.style.color = "blue"
// console.log(heading)

// heading[0].textContent = "Heading1"
// heading[0].style.border = "2px solid green"


// const link = document.getElementsByTagName("a")
// console.log(link[0])
// console.log(link[0].getAttribute("href"))
// link[0].setAttribute("type", "button")

// console.log(typeof link)
// console.log(Array.isArray(link))

// const heading2 = document.querySelector("#heading2")

// console.log(heading2)
// console.log(typeof heading2)

// const newItem = document.createElement("li")
// newItem.textContent = "A quick revision of javascript again"

// const oldItem = document.getElementsByClassName("heading")
// console.log(oldItem[0].textContent)
// oldItem.append(newItem)

// console.log(newItem)

// const allButtons = document.querySelectorAll(".btn")
// console.log(allButtons)
// // console.log(button.textContent)
// // button.addEventListener("click", function() {
// //     console.log("You clicked me!!!")
// //     console.log(this)
// // })
// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log("You clicked me!!!")
//         console.log(e.target.textContent)
//         button.style.backgroundColor = "yellow"
//     })
// })


// const body = document.body

// function randomColorGen() { 
//     const red = Math.floor(Math.random() * 256)
//     const green = Math.floor(Math.random() * 256)
//     const blue = Math.floor(Math.random() * 256)
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor
// }
// const button = document.querySelector(".btn")
// button.addEventListener('click', () => {
//      setInterval(() => {
//         const randomColor = randomColorGen()
//         body.style.backgroundColor = randomColor
//         button.textContent = randomColor
//      },1000)
    // const randomColor = randomColorGen()
    // body.style.backgroundColor = randomColor
// })

// const grandParent = document.querySelector(".grandParent")
// console.log(grandParent)

// const parent = document.querySelector(".parent")
// console.log(parent)

// const child = document.querySelector(".child")
// console.log(child)

// grandParent.addEventListener("click", (e) => {
//     console.log(e.target.textContent)
//     // console.log("capture Grand Parent!!")
// })

// parent.addEventListener("click", () => {
//     console.log("capture parent")
// },true)

// child.addEventListener("click", () => {
//     console.log("capture child")
// },true)

// grandParent.addEventListener("click", () => {
//     console.log("bubble Grand Parent!!")
// })

// parent.addEventListener("click", () => {
//     console.log("bubble parent")
// })

// child.addEventListener("click", () => {
//     console.log("bubble child")
// })


// function myPromise() {
//     return new Promise((resolve, reject) => {
//         resolve("Foo")
//     })
// }
// myPromise()
// .then((value) => {
//     console.log(value)
//     value += "baaz"
//     return value
// })
// .then((value) => {
//     console.log(value)
//     value += "man"
//     return value
// })
// .then((value) => console.log(value))


// function hello() {
//     console.log("hello world")
// }
// hello()

// console.log(hello.name)

// hello.myOwnProperty = "very unique value"
// console.log(hello.myOwnProperty)

// console.log(hello.prototype)

// hello.prototype.abc = "abc"
// hello.prototype.xyz = "xyz"

// console.log(hello.prototype)

// class Animal {
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     get name() {
//         return `${this.name}`
//     }
// }
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed;
//     }
//     isFast() {
//         if(this.speed>20){
//             return `${this.name} is fast`
//         }
//         else{
//             return `${this.name} is slow`
//         }
//     }
//     
// }


// const puppy = new Animal("Johney", 24)
// console.log(puppy)

// const rockey = new Dog("Rockey", 6, 40)
// // console.log(rockey)
// // console.log(rockey.isFast())
// console.log(rockey.get)



// class Person {
//     constructor(fname, lname, age){
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//     }

//     get fullName() {
//         return `${this.fname} ${this.lname}`
//     }

//     set setFullName(fullname) {
//         const [fname, lname] = fullname.split(" ")
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// const person1 = new Person("Tarun", "Kumar", 24)
// console.log(person1.fullName)
// person1.setFullName = "Sumer Raj"
// console.log(person1.fullName)


// function multiply(x){
//     return function(y){
//         console.log( x * y)
//     }
// }

// const multiplyTwo = multiply(2)
// multiplyTwo(3)


// const multiArgFunc = (a, b, c) => a + b + c;
// console.log(multiArgFunc(1, 2, 3))

// const curryUnaryFunc = a => b => c => a + b + c ;
// console.log(curryUnaryFunc(1))
// console.log(curryUnaryFunc(1)(2))
// console.log(curryUnaryFunc(1)(2)(3))

// document.cookie = "username: Tarun Kumar"
// let x = document.cookie;
// console.log(x);

// document.cookie = "username: Tarun; expires: Sat, 02 Mar 2024, 12:00:00 UTC"

// let y = document.cookie;
// console.log(y);
