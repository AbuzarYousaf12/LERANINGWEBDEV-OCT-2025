let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")

// let sum = a + b              // ISTARAHA YE USKO ADD NAE KEREGA JOR DEGA YANI 14 + 14 = 1414


// YE ERROR KELEYE LAGARHE HE JAVASCRIPT FORGIVING NATURE HE ISLIE KABHI KABHI HM CHAHYTE HE KE JAVASCRIPT IGNORE NA KERE HAME ERROR DE 
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is Not Allowed")
}
else {

}


// EK HOTA HE AP ERROR DOGE YANI THROW KEROGE AUR EIK HOTA HE KE AP ERROR HANDLE KEROGE


let sum = parseInt(a) + parseInt(b)

let x = 1;

// try {
//     console.log("The Sum Is", sum * x)   // ISKO HANDLE KERENGE

// } catch (error) {
//     console.log("ERROR AGYA HE BHAI")
//     // alert(error.name)
//     // alert(error.message)
//     // alert(error.stack)
// }


// FINALY CLAUSE IN JAVASCRIPT



function main() {


    ///////////////////////// * JAB BHI HAM KOI RETURN KERTE HEN TO USKE BAD KA CODE NAE CHLTA HE * /////////////////////// * FINALLY ISLIE LAGATE HEN KE FUNCTION KE ANDAR HI AGR RETURN HO TO USKE BAD CODE CHLE * ////////////////////

    try {
        console.log("The Sum Is", sum * x)
        return true

    } catch (error) {
        console.log("ERROR AGYA HE BHAI")
        return false
    }

    finally {
        console.log("Files are being closed and db connection is being closed")
    }

}

let c = main()















