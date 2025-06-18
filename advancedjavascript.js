// **** ADVANCED JAVASCRIPT ~ DESTRUCTURING ~ SPREAD OPERATOR ~ IIFE ~ HOSTING **** //

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// *** IIFE KIA HOTA KE EIK FUNCTION BANAYO AUR USKO IMMEDIATELY EVOKE KERDO *** //



///// **** SPREAD SYNTAX **** /////

function sum(t, y, u) {
    return t + y + u;
}


// IMMEDIATELY EVOKE FUNCTION IN JAVASCRIPT
(async function main() {
    console.log(a1)



    let e = await sleep();
    console.log(e)
    let h = await sleep();
    console.log(h)




    //// *** DESTRUCTURING IN JAVASCRIPT *** ////

    let [x, y, ...rest] = [1, 5, 7, 8, 9, 12] // ... LAGAYA HE ISLIE BAKI ARHE HE AGR REST KHALI LIKHTE TO NAE 7 HI ANA THA..
    console.log(x, y, rest)




    //// **** SIMILARLY OBJECTS KO BHI DESTRUCTURE KERSKTE HN **** ////

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let { a, b } = obj
    console.log(a, b)



    let arr = [1, 4, 6]
    console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(...arr))
    ////// * TRIPLE DOT JAB USE KERTE HE TO MTLB ARR KO KHOLDO SPREAD OPERATOR ISKI VALUES KO SPREAD KERDO * //////


    ///////// ********* HOSTING IN JAVASCRIPT ********** //////////

    //// *** AGR VAR USE KIA HE WO UPER JAYEGA SRF VAR a1 UPER JAYEGA VALUE UPER NAE JAYEGI *** ////
    
    var a1 = 6;  /// ** LET SE YE OPER NAE JAYEGA YANI ISKE NICHE HI WORK ** //
})()





