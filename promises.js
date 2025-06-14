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

prom1.then((a) => {
    console.log(a)
}).catch((err) => {         // ERROR CATCH KERNE SE CONSOLE.LOG ME ERROR NAE DIKHEGA.
    console.log(err)
})

