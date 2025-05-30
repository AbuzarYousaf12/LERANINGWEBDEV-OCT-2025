console.log ("Hello I am conditional tutorial")


// let age = 5;

// if (age>6){
//     console.log ("You can Drive")
// }
// else if (age=5){
//     console.log ("You can Drive")
// }
// else {
//     console.log ("You cannot Drive")
// }


let age = 17;
let grace = 2;

age += grace // INCREMENT OPERATOR

//ARITHMETICS OPERATORS

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

if (age!=18){
    console.log ("You can Drive")
}
else if (age==18){
    console.log ("You can Drive")
}
else {
    console.log ("You cannot Drive")
}



let numbers = 60;

if (numbers>60){
    console.log("You are Good")
}
else if (numbers==60){
    console.log("You are Pass")
}
else if (numbers<50 && number>40){
    console.log("You Are Just Passed")
}
else {
    console.log("You Failed")
}

// LOGICAL OPERATORS
// && USE KERENGE LOGICAL AND TO DONO STATEMENTS TRUE HONE CHAHYE
// || LOGICAL OR USE KERENGE TO DONO ME SE EIK TRUE HONA CHAHYE
// ! LOGICAL NOT VALUE KO ULTA KERDETA HE YANI AGR LOGGEDIN = FALSE HE TO !LOGGEDIN TRUE HOJAYEGA



// JAVASCRIPT TERNARY OPERATOR

// Condition ? exp 1 : exp 2

y = 12;
s = 8;

u = y>s ?(y-s):(s-y) // AGR A BRA HE B SE TO A-B HOGA AGE A CHOTA HE B SE TO B-A HOGA


/*
TRANSLATES TO:
if(a>b){
let u = y - s;
}
else {
let u = s - y;
}
*/
console.log(u)



