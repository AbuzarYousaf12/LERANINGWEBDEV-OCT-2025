// console.log("This is Course of Javascript By Bro Code")

// window.alert("This is course of javascript by bro code")

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = `I am a Paragraph`

// VARIABLES IN JAVASCRIPT

// let x; // declaration
// x = 100; // assignment

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`You are ${age} years old`)
// console.log(`The Price is $${price}`)
// console.log(`Your GPA is: ${gpa}`)


// console.log(typeof age)


// BOOLEANS

// let online = false;

// console.log(typeof online)

// console.log(`Bro is Online? ${online}`)


// let forSale = false;

// console.log(`Is this car for Sale? ${forSale}`)

// let username;

// username = window.prompt("Whats' Your Username")

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
//     console.log(username)
// }


// LETS MAKE A COUNTER PROGRAM IN JAVASCRIPT

// const addition = document.getElementById("plus");
// const subtraction = document.getElementById("minus");
// const reset = document.getElementById("reset");
// const number = document.getElementById("number");
// let count = 0;

// addition.onclick = function(){
//     count++;
//     number.textContent = count;
// }

// subtraction.onclick = function(){
//     count--;
//     number.textContent = count;
// }

// reset.onclick = function (){
//     count = 0;
//     number.textContent = count;
// }



// LETS MAKE A NUMBER GUESSING GAME IN JAVASCRIPT

// let minNumber = 1;
// let maxNumber = 100;

// let answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = prompt(`Guess a number between ${minNumber} - ${maxNumber}`)
//     guess = Number(guess)

//     if (isNaN(guess)) {
//         window.alert("Please enter a valid number")
//     }
//     else if (guess < minNumber || guess > maxNumber) {
//         window.alert("Please enter a valid number")
//     }
//     else {
//         attempts++
//         if (guess < answer) {
//             window.alert("TOO LOW! TRY AGAIN!")
//         }
//         else if (guess > answer) {
//             window.alert("TOO HIGH! TRY AGAIN!")
//         }
//         else {
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`)
//             running = false
//         }
//     }
// }


// LETS MAKE A RANDOM COLOR GENERATOR IN JAVASCRIPT FOR BOX

