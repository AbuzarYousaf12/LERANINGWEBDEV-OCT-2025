console.log("Hey I am Learning Javascript")

let a = 35;

if (a>15) {
console.log("Congratulations You Are Pass")    
}
else if (age>30) {
    console.log("Congratulations You Are A Topper")
}
else {
    console.log("You are Fail")
}

// var b = 5; // BLOCK SCOPE

let c = 8;

let d = "Harry"

let _t = "Shubam"

console.log(typeof c, typeof d, typeof _t)

// var 55a = "Rohan" // Not Allowed

// {
//     var b = 82;
//     console.log(b)
// }
// console.log(b)

let b = 5;

{
    let b = 14;
    console.log(b)
}
console.log(b)


let x = "Harry Bhai";
let y = 22;
let z = 33.5;
let i = true;
let o = null;
let q = undefined;

console.log(x, y, z, i, o, q)
console.log(typeof x,typeof y, typeof z, typeof i, typeof o, typeof q)


// OBJECTS IN JAVASCRIPT

let e = {
    "name": "Harry", // "name" ye key he // "Harry" ye value he
    "job code": "5600",
    "is handsome": "true"
}

console.log(e)
e.salary = "100CRORES";
console.log(e)
e.salary = "500CRORES";
console.log(e)


let age = 18;
let grace = 2;

age += grace
console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age %  grace)


if (age!=18){
    console.log("You can Drive")
}
else {
    console.log("You cannot Drive")
}


let n = 6;
let m = 8;
c = n>m ?(n-m):(n+m)
console.log(c)

// LOOPS IN JAVASCRIPT


//FOR LOOP

let p = 1;

for (let p = 0; p < 100; p++) {
    console.log(p)
}

// OBJECT

let obj = {
    "name": "Harry",
    "role": "Programmer",
    "company": "CodeWithHaryy AI"
}


//FOR IN LOOP

for (const key in obj) {
    console.log(key)
        
}

for (const r of "Harry") {
    console.log(r)
}



//WHILE LOOP IN JAVASCRIPT

let v = 3;


while (v<6){
    console.log(v)
    v++;
}



// DO WHILE LOOP iN JAVASCRIPT

let w = 1;

do {
    console.log(w)
    w++;
} while (w<6);


// FUNCTIONS IN JAVASCRIPT
console.log("FUNCTIONS IN JAVASCRIPT")

// function sum (a,b){
//     console.log (a+b)
// }

// sum(3,5)

function sum (a,b, c = 3){
    return a + b
}

result1 = sum(3, 5, 3)
result2 = sum(5, 9, 5)
result3 = sum(19, 49, 54)


console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)


function nice(name){
    console.log("Hey " + name + " You are nice!")
    console.log("Hey " + name + " You are good!")
    console.log("Hey " + name + " Your T-Shirt is nice")
    console.log("Hey " + name + " Your Course is Good!")
}

nice("Harry")


// ARROW FUNCTION IN JAVASCRIPT

const func1 = (u) => {
    console.log("I am an arrow function", u)
}

func1(34);