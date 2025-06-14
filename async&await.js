async function getData(){ //// ASYNC FUNCTION KA MTLB KE YE FUNCTION BACKGROUND ME CHLTA RHEGA

    // SIMULATE GETTING DATA FROM a SERVER
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}


// async function getData(){ 

//     let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))             // 2 PROMISSES H
// }

// CONVERTING IT INTO ASYNC


async function getData() {
    
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
      return data

}

// PROMISE KE SETTLE HONE KA MTLB RESOLVE OR REJECT

// RESOLVE MEANS PROMISE HAS SETTLED SUCCESSFULLY

// REJECT MEAN PROMISE IS NOT SETTLED SUCCESSFULLY


async function main() { 
    
console.log("Loading Modules")

console.log("Do Something Else")

console.log("Load Data")

let data = await getData() // AGR ME YE CHAHTA HO KE ME ASYNC FUNCTION KA INTERZAR KERO TO ME AWAIT LAGADOGA ISKELEYE MUHE EIK FUNCTION BANANA PAREGA // AWAIT KO ASYNC FUNCTION KE ANDAR USE KIA JASKTA HE

console.log(data)

console.log("Process Data")

console.log("task 2")

}

main ()

// PROMISE
// data.then(()=>{
    
// console.log("data")

// console.log("Process Data")

// console.log("task 2")

// })




