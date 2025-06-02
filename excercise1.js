/* CREATING A FAULTY CALCULATOR USING JAVASCRIPT THIS FAULTY CALCULATOR TAKES TWO NUMBERS AS INPUT FROM THE USER AND IT PERFORMS WROND OPERATIONS AS 
+ ---> - 
* ---> +
- ---> /
/ ---> **

IT PERFORMS WRONG OPERATIONS 10% OF THE TIMES

*/

// console.log("EXERCISE 1 MAKING A FAULTY CALCULATOR")



// METHOD 1




// let random = Math.random()
// console.log(random)

// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// let c = prompt("Enter Operation")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }



// if (random > 0.1) {
//     // PERFORM CORRECT CALCUATION
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
// }
// else {
//     // PERFORM WRONG CALCULATION
//     c = obj[c] // AGR C PLUS HE TO MINUS HOJAYE
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
// }


// METHOD 2 



// function sum(a,b)
// {
//     result=a+b;
//     console.log(result);

// }
// function sub(a,b)
// {
//     result=a-b;
//     console.log(result);
    
// }
// function div(a,b)
// {
//     result=a/b;
//     console.log(result);
    
// }
// function mul(a,b)
// {
//     result=a*b;
//     console.log(result);
    
// }
// function expo(a,b)
// {
//     result=a**b;
//     console.log(result);
    
// }
// // let a= readInt("Enter the number a");
// // let b=readInt("ENter the number b");
// let a= prompt("Enter Ur Frist Number");
// let b= prompt("Enter Ur Second Number");
// if(Math.random()<0.1)
// {
//     console.log("Addition is two number is")
//     sub(a,b);
//     console.log("Multiplication is two number is")
//     sum(a,b);
//     console.log("Subration is two number is")
//     div(a,b);
//     console.log("division is two number is")
//     expo(a,b);
    

// }
// else{
//     console.log("Addition is two number is")
//     sum(a,b);
//     console.log("Multiplication is two number is")
//     mul(a,b);
//     console.log("Subraction is two number is")
//     sub(a,b);
//     console.log("division is two number is")
//     div(a,b);
// }




// METHOD 3



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function faultycalculator(operator, a, b) {
    let result;

    const isFaulty = Math.random() < 0.6;
    console.log(`isFaulty: ${isFaulty}`);

    if (isFaulty) {
        // Perform faulty operation
        switch (operator) {
            case '+':
                result = a - b; // Faulty addition (subtraction)
                break;
            case '-':
                result = a / b; // Faulty subtraction (addition)
                break;
            case '*':
                result = a + b; // Faulty multiplication (addition)
                break;
            case '/':
                result = a ** b; // Faulty division (exponential)
                break;
            default:
                console.log("Invalid operator");
                break;
        }
    } else {
        // Perform correct operation
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                console.log("Invalid operator");
                break;
        }
    }

    return result;
}

rl.question("Enter the first number: ", function (a) {
    rl.question("Enter the operator (+, -, *, /): ", function (operator) {
        rl.question("Enter the second number: ", function (b) {
            const result = faultycalculator(operator, parseFloat(a), parseFloat(b));
            console.log(`Result of ${a} ${operator} ${b} is: ${result}`);
            rl.close();
        });
    });
});




