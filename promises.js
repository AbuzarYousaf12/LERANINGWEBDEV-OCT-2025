console.log("PROMISES IN JAVASCRIPT")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.1) {
        reject("No random runmber was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {         // ERROR CATCH KERNE SE CONSOLE.LOG ME ERROR NAE DIKHEGA.
//     console.log(err)
// })



let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.1) {
        reject("No random runmber was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry")
        }, 3000);
    }
})

// PROMISE KE SETTLE HONE KA MTLB HE AGR ALLSETTLED USE KERENGE TO CHAHYE RESOLVE HO YA REJECT PROMISES CHLJAYENGE PROMISE RACE YE HE KE JO BHI VALUE SETTLE HOGYI USKI VALUE MILEGI

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err)=> {
    console.log(err)
})
