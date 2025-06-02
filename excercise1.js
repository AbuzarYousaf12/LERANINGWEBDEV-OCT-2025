/* CREATING A FAULTY CALCULATOR USING JAVASCRIPT THIS FAULTY CALCULATOR TAKES TWO NUMBERS AS INPUT FROM THE USER AND IT PERFORMS WROND OPERATIONS AS 
+ ---> - 
* ---> +
- ---> /
/ ---> **

IT PERFORMS WRONG OPERATIONS 10% OF THE TIMES

*/

console.log("EXERCISE 1 MAKING A FAULTY CALCULATOR")





let random = Math.random()

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter Operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}



if (random > 0.1) {
    // PERFORM CORRECT CALCUATION

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // PERFORM WRONG CALCULATION
    c = obj[c] // AGR C PLUS HE TO MINUS HOJAYE
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
}