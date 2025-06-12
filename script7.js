// JAVASCRIPT ARRAYS VIDEO SIGMA WEB DEV COURSE

let a = [1, 93, 5, 6, 88]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

console.log("")


// LOOPS THROUGH ARRAY FOR EACH LOOP

// FOR EACH LOOP

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// FOR IN LOOP


console.log("")


let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key ,element)
        
    }
}


console.log("")


// FOR OF LOOP

for (const value of a) { // VALUE KI JAGA KOI BHI NAME RKH SKTE H
    console.log(value)
    
}


// MAP FILTER REDUCE . JS

let arr = [1, 13, 5, 7, 11];


//////////// IS SB KO KERNE KA DUSRA TARIQA MAP KE ZAIRA HOJAYA HE EASILY

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2) // YANI SQUARE LELEGA ELEMENTS KA
    
// }
// console.log(newArr)

//////////// IS SB KO KERNE KA DUSRA TARIQA MAP KE ZAIRA HOJAYA HE EASILY

let newArr = arr.map((e)=>{
    return e**2
})

console.log(newArr)


// FILTER IN JAVASCRIPT

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven)) // YANI WO ELEMENTS AYENGE JO 7 SE BARE HN



console.log("")

// REDUCE IN JAVASCRIPT

let arr2 = [1,2,3,4,5,6] // PEHLE 1 MULTIPLY BY 2 PHIR 2 MULTIPLY BY 3 THEN 6 MULTIPLE BY 4 YANI AGE AGE MULTIPLY KERTA JAYEGA AGR ADDITION HO TO ADD KERTA JAYEGA

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red))


// ARRAY FROM USED TO CREATE AN ARRAY FROM ANY OTHER OBJECT



console.log(Array.from("Harry"))