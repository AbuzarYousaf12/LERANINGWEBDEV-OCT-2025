////////// ***** VIDEO 1 JAVASCRIPT ***** //////////





// console.log("VIDEO NUMBER 1 JAVASCRIPT")

// console.log("PRACTICING JAVASCRIPT 19-JUNE-2025")

// alert("This is alert")


// var a = prompt("Enter Your First Number")

// var b = prompt("Enter Your Second Number")

// let isTrue = confirm("Are u sure you want to leave this page and burn your computer")

// console.log(a+b)

// if(isTrue){
//     console.log("YOUR COMPUTER IS BLASTING")
// }
// else {
//     console.log("YOUR COMPUTER IS NOT BLASTING")
// }

// let c = 59;

// console.log("YOU NUMBER IS ", + a)




////////// ***** VIDEO 2 JAVASCRIPT ***** //////////





// console.log("VIDEO NUMBER 2 JAVASCRIPT")

// let a = 5;

// let b = 6;

// let c = "Harry";

// var d = 19;

// // var 55a = "Rohan" // NOT ALLOWED

// {
//     let a = 16
//     console.log(a)
// }

// console.log(a)

// // * ~Block scope means that variables declared inside a block { ... } cannot be accessed from outside that block.~ * //


// {
//     var d = 15;
//     console.log(d)
// }

// console.log(d

// )

// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

// // const a1 = 16;
// // a1 = a1 + 15; // NOT ALLOWED BECAUSE a1 IS CONSTANT

// *~PRIMITIVE DATA TYPES~* //
// *~LET KA SCOPE BLOCK HOTA HE AUR US SE JO BHI VARIABLES BNTE HEN WO BLOCK SCOPE KEHLATE HEN~* //

// let e = "Harry";
// let t = 95;
// let r = 3.55;
// let o = true;
// let p = null;
// let q = undefined;

// console.log(q, e, t, r, o, p)
// console.log(typeof q,typeof e,typeof t,typeof r,typeof o,typeof p)

// // *~OBJECTS IN JAVASCRIPT~* //

// let obj = {
//     "Job role": "Programmer",
//     "Job code": 54600
// }

// console.log(obj)

// // AGR KUCH CHANGE KERNA CHAHYTE THEN

// obj.salary = "500CRORES";

// console.log(obj)

// // *~BOOLEAN VALUES~* //

// // true or false are boolean values




////////// ***** VIDEO 3 JAVASCRIPT ***** //////////





// console.log("VIDEO NUMBER 3 JAVASCRIPT")

// *~IF-ELSE CONDITION IN JAVASCRIPT~* //

// let age = 18;
// let grace = 2;

// if (age != 0) {
//     console.log("You cannot Drive")
// }
// else if (age > 18) {
//     console.log("You can Drive")
// }
// else {
//     console.log("You are eligible")
// }

// *~OPERATORS IN JAVASCRIPT~* //


// *~ARITHMETIC OPERATORS IN JAVASCRIPT~* //


// console.log(age + grace)              // ADDITION
// console.log(age - grace)              // SUBTRACTION
// console.log(age * grace)              // MULTIPLICAITON
// console.log(age / grace)              // DIVISION
// console.log(age % grace)              // MODULUS
// console.log(age ** grace)             // EXPONENTIATION
// console.log(age ++ grace)             // INCREMENT
// console.log(age -- grace)             // DECREMENT


// *~ASSIGNMENT OPERATORS IN JAVASCRIPT~* //


// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// let realAge = 19;
// age += realAge
// console.log(age)
// age -= realAge
// console.log(age)
// age *= realAge
// console.log(age)
// age /= realAge
// console.log(age)
// age %= realAge
// console.log(age)
// age **= realAge
// console.log(2 ** 3);  // 8   → 2 * 2 * 2
// console.log(age)


// *~COMPARISON OPERATORS IN JAVASCRIPT~* //


// ==	Equal to	5 == '5' ✅
// ===	Strict equal (type + value)	5 === '5' ❌
// !=	Not equal	5 != '5' ❌
// !==	Strict not equal	5 !== '5' ✅
// >	Greater than	5 > 3 ✅
// <	Less than	5 < 3 ❌
// >=	Greater than or equal to	5 >= 5 ✅
// <=	Less than or equal to	5 <= 5 ✅



// *~LOGICAL OPERATORS IN JAVASCRIPT~* //


// &&	Logical AND	true && false ❌ 
// ||  Logical OR false || false ❌
// !	Logical NOT	!true ❌


// *~BITWISE OPERATORS IN JAVASCRIPT~* //


// .. ?? ADVANCED NOT LEARNED NOW ?? .. //


// *~TERNARY OPERATORS IN JAVASCRIPT~* //


// condition ? valueIfTrue : valueIfFalse;

// let agee = 17;
// let result = (agee >= 18) ? 'Adult' : 'Minor';
// console.log(result)

// let z = 6;
// let l = 8;
// let w = z > l ? (z - l) : (l - z)
// console.log(w)

//  translates to:
// if (z > l)
//     let w = z - l;
// }
// else {
//     let w = l - z;
// }


// *~TYPE OPERATORS IN JAVASCRIPT~* //


// typeof 'Hello';     // "string"
// [1, 2, 3] instanceof Array; // true


// *~SPREAD & REST OPERATORS IN JAVASCRIPT~* //


// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];


// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }




////////// ***** VIDEO 4 JAVASCRIPT ***** //////////





// console.log("VIDEO 4 JAVASCRIPT")

// *~LOOPS IN JAVASCRIPT~* //

// let a = 1;

// *~FOR LOOP IN JAVASCRIPT~* //


// for (let i = 0; i < 100; i++) {
//     console.log(a + i)
// }

// *~FOR IN LOOP IN JAVASCRIPT~* //

// let obj = {
//     "name": "Harry",
//     "role": "Programmer",
//     "company": "CodeWithHarry"
//     // KEY   : // STRING
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)

//     }
// }


// *~FOR IN LOOP IN JAVASCRIPT~* //

// for (const c of "Harry") {
//     console.log(c)
// }


// *~WHILE LOOP IN JAVASCRIPT~* //

// let i = 1;
// while(i<6){
//     console.log(i)
//     i++;
// }


// *~DO WHILE LOOP IN JAVASCRIPT~* //

// let i = 19;
// do {
//     console.log(i)
//     i++;
// } while (i<6);




////////// ***** VIDEO 5 JAVASCRIPT ***** //////////





// console.log("VIDEO 5 JAVASCRIPT")

// *~FUNCTIONS IN JAVASCRIPT~* //

// function main(name){
//     console.log("Hey " + name + " You are nice!")
//     console.log("Hey " + name + " You are very tall!")
//     console.log("Hey " + name + " You are good!")
//     console.log("Hey " + name + " You tshirt is nice!")
//     console.log("Hey " + name + " You course is good too!")
// }

// main("Harry")
// main("Rohan")

// function sum(a, b){
//     console.log(a + b)
// }

// sum(19, 11)

// VALUE KO DALNE KELEYE RETURN KA USE KERTE HEN

// function addition(a, b, c = 3){
//     return a + b + c
// }

// result = addition(4, 6)

// console.log(result)

// result1 = addition(24, 16)
// result2 = addition(4, 16)
// result3 = addition(44, 16, 17)

// REUSING A FUNCTION

// console.log(result1)
// console.log(result2)
// console.log(result3)


// *~ARROW FUNCTIONS IN JAVASCRIPT~* //

// const func1 = (x) => {
//     console.log("I am an arrow function", x)
// }

// func1(34)
// func1(66)
// func1(84)




////////// ***** VIDEO 6 JAVASCRIPT ***** //////////





// console.log("VIDEO 6 JAVASCRIPT");


// *~STRINGS IN JAVASCRIPT~* //

// let name = "Alice";
// let greeting = 'Hello!';
// let message = `Welcome, ${name}!`;  // Template literals (backticks)

// let a = "Harry";

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])

// console.log(a.length)

// let real_name = "Harry"
// let friend = "Rohan"
// console.log("His name is " + real_name + " and his friend name is " + friend )

// Template literals (backticks)
//  console.log(`His name is ${real_name} and his friend name is ${friend}`)


// *~STRING METHODS IN JAVASCRIPT~* //


// length	Returns length of string	"Hello".length // 5
// toUpperCase()	Converts to uppercase	"hello".toUpperCase()
// toLowerCase()	Converts to lowercase	"HELLO".toLowerCase()
// indexOf()	Finds position of first occurrence	"hello".indexOf('e') // 1
// includes()	Checks if substring exists	"world".includes('or')
// slice()	Extracts part of string	"abcdef".slice(1,4) // "bcd"
// replace()	Replaces part of string	"I am Lerry".replace("Lerry", "John")
// split()	Converts to array	"a,b,c".split(',')
// trim()	Removes whitespace from start/end	" hello ".trim()

// let sentence = "  JavaScript is fun!  ";
// console.log(sentence.trim().toUpperCase());  // "JAVASCRIPT IS FUN!"


// *~CONCAT IN JAVASCRIPT~* //

// let b = "ShivamSh"

// console.log(b.concat("Aishwariya"))


// *~ARRAYS IN JAVASCRIPT~* //

// let fruits = ["apple", "banana", "mango"];
// let numbers = [1, 2, 3, 4];


// *~ESCAPE SEQUENCE CHARACTERS IN JAVASCRIPT~* //

// console.log('She said: \"Hello!\"');
// Output: She said: "Hello!"

// console.log("Path is C:\\Program Files\\JavaScript");
// Output: Path is C:\Program Files\JavaScript


// *~ARRAYS METHODS IN JAVASCRIPT~* //

// length	Number of items	fruits.length // 3
// push()	Add to end	fruits.push("grape")
// pop()	Remove last element	fruits.pop()
// shift()	Remove first element	fruits.shift()
// unshift()	Add to start	fruits.unshift("kiwi")
// includes()	Checks if item exists	fruits.includes("banana")
// indexOf()	Finds index of item	fruits.indexOf("mango")
// slice()	Returns a part of the array	fruits.slice(1, 3)
// splice()	Add/remove elements	fruits.splice(1, 1)
// join()	Joins elements into a string	fruits.join(", ")
// forEach()	Loop through elements	fruits.forEach(fruit => console.log(fruit))
// map()	Create new array from existing array	numbers.map(n => n * 2)
// filter()	Filter elements	numbers.filter(n => n > 2)

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2); 
// console.log(doubled);  // [2, 4, 6, 8, 10]




////////// ***** BUILDING A FAULTY CALCULATOR IN JAVASCRIPT ***** //////////





// console.log("BUILDING A FAULTY CALCULATOR IN JAVASCRIPT")

// let number = Math.random()

// console.log(number)

// let a = prompt("Enter Your First Number")

// let b = prompt("Enter Your Second Number")

// if (number > 0.1) {
//     console.log("The Multiplication of You Numbers Are", a * b)
//     console.log("The Addition of You Numbers Are", a + b)
//     console.log("The Subtraction of You Numbers Are", a - b)
//     console.log("The Divisiion of You Numbers Are", a / b)
// }
// else {
//     console.log("The Multiplication of You Numbers Are", a + b)
//     console.log("The Addition of You Numbers Are", a - b)
//     console.log("The Subtraction of You Numbers Are", a / b)
//     console.log("The Divisiion of You Numbers Are", a ** b)
// }




// console.log("BUILDING A FAULTY CALCULATOR IN JAVASCRIPT ~ANOTHER WAY~")






// let random = Math.random()

// console.log(random);

// let a = prompt("Enter Your First Number")

// let b = prompt("Enter Your Second Number")

// let c = prompt("Enter Operation")

// let result;

// if (random > 0.4) {
//     // CORRECT CALCULATION
//     if (c == '+') {
//         result = a + b
//     } else if (c == '-') {
//         result = a - b
//     } else if (c == '*') {
//         result = a * b
//     } else if (c == '/') {
//         result = a / b
//     } else {
//         result = "Invalid Operation";
//     }
// }
// else {
//     // WRONG CALCULATION
//     if (c == '+') {
//         result = a - b;
//     } else if (c == '-') {
//         result = a / b;
//     } else if (c == '*') {
//         result = a + b;
//     } else if (c == '/') {
//         result = a ** b;
//     } else {
//         result = "Invalid Operation";
//     }
// }

// console.log("Result is: ", result)





// console.log("BUILDING A FAULTY CALCULATOR IN JAVASCRIPT ~EASY AND SHORT WAY USING EVAL~")






// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.1) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
//     // EVAL CALCULATIONS KO SOLVE KERKE DETA HE 
// }

// else {
//     // Perform wrong calculation
//     c = obj[c] // OPERATOR KO CHANGE KERDENGE OBJECT KI HISAB SE YANI AGR C PLUS HE TO MINUS HOJAYE
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }




////////// ***** BUILDING A BUSINESS NAME GENERATOR IN JAVASCRIPT ***** //////////





// console.log("BUILDING A BUSINESS NAME GENERATOR IN JAVASCRIPT")

// rand = Math.random()
// let first, second, third;
// // 0 0.33 0.66 1


// // lets generate the first word

// if (rand < 0.33) {
//     first = "Crazy"
// }
// else if (rand < 0.66 && rand >= 0.33) {
//     first = "Amazing"
// }
// else {
//     first = "Fire"

// }


// // lets generate the second word

// rand = Math.random()

// if (rand < 0.33) {
//     second = "Engine"
// }
// else if (rand < 0.66 && rand >= 0.33) {
//     second = "Foods"
// }
// else {
//     second = "Garments"
// }


// // lets generate the third word

// rand = Math.random()

// if (rand < 0.33) {
//     third = "Bros"
// }
// else if (rand < 0.66 && rand >= 0.33) {
//     third = "Limited"
// }
// else {
//     third = "Hub"
// }


// console.log(`${first} ${second} ${third}`)




// console.log("BUILDING A BUSINESS NAME GENERATOR IN JAVASCRIPT USING ~ARRAYS~")





// const firstWords = ["Crazy", "Amazing", "Fire"];
// const secondWords = ["Engine", "Foods", "Garments"];
// const thirdWords = ["Bros", "Limited", "Hub"];

// const randomWord = (arr) => arr[Math.floor(Math.random() * arr.length)];

// console.log(`${randomWord(firstWords)} ${randomWord(secondWords)} ${randomWord(thirdWords)}`);





// console.log("BUILDING A BUSINESS NAME GENERATOR IN JAVASCRIPT USING ~OBJECTS~")





// let obj1 = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire"
// };
// let obj2 = {
//     1: "Engine",
//     2: "Foods",
//     3: "Garments"
// };
// let obj3 = {
//     1: "Bros",
//     2: "Limited",
//     3: "Hub"
// };

// var ran1 = Math.floor(Math.random() * 3) + 1;
// var ran2 = Math.floor(Math.random() * 3) + 1;
// var ran3 = Math.floor(Math.random() * 3) + 1;

// console.log(obj1[ran1] + " " + obj2[ran2] + " " + obj3[ran3]);





////////// ***** BUILDING A FACTORIAL CALCULATOR IN JAVASCRIPT ***** //////////





// console.log("BUILDING A FACTORIAL CALCULATOR IN JAVASCRIPT")




// let number = parseInt(prompt("Enter Your Number For Factorial"));
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial *= i
// }

// console.log(`Factorial of ${number} is ${factorial}`)


// console.log("BUILDING A FACTORIAL CALCULATOR IN JAVASCRIPT ~WITH ARRAYS~")




// let a = 6

// function factorial(number) {
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1,).reduce((a, b) => {
//         return a*b
//     })
//     console.log(c)
// }

// factorial(a)


// console.log("BUILDING A FACTORIAL CALCULATOR IN JAVASCRIPT ~WITH ARRAYS~")




// let a = 6;

// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }

// console.log(facFor(a))





////////// ***** BUILDING RANDOM COLOR GENERATOR FOR 5 BOXES USING DOM CONCEPTS IN JAVASCRIPTT ***** //////////





// console.log("BUILDING RANDOM COLOR GENERATOR FOR 5 BOXES USING DOM CONCEPTS IN JAVASCRIPT")





// console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")

// // let boxes = document.querySelector(".container").children


// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }


// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })



