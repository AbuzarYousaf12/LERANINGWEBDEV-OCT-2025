console.log("I am a tutorial on FUNCTIONS")
console.log("")


// console.log("Hey Harry You are nice!")
// console.log("Hey Harry You are good!")
// console.log("Hey Harry Your T-Shirt is nice!")
// console.log("Hey Harry Your course is good too!")

//FUCNTIONS IN JAVASCRIPT

function nice(name) {
    console.log("Hey " + name + " You are nice!")
    console.log("Hey " + name + " You are good!")
    console.log("Hey " + name + " Your T-Shirt is nice!")
    console.log("Hey " + name + " Your course is good too!")
}

nice("Rohan") // YANI AB SRF NAME CHANGE KERNE SE KISIKELEYE BHI HOJAYEGI
nice("Shivam")

console.log("")



// BASIC FUNCTION SIMPLE



// function sum(a, b) {
//     console.log(a + b)

// }

// sum (3, 5)



// FUNCTION WITH RETURN



// function sum(a, b) {
//     // console.log(a + b) 
//     return a + b         // BECAUSE JAVASCRIPT KO NAE PATA KE KIA VALUE DALNE HE VALUE KO DALNE KELEYE HM RETURN KEYWORD KA ISTEMAL KERTE HN RETURN KEYWORD SE VALUE WAPIS DEDI JATI HE 
// }

// result = sum (3, 5)

// console.log("The Sum of these numbers is: ", result)



// AGR SUM KO BAR BAR SUM KERNA HE TO FUNCITON

// function sum(a, b) {
//     // console.log(a + b) 
//     return a + b
// }

// result1 = sum(3, 5)
// result2 = sum(31, 15)
// result3 = sum(43, 25)

// console.log("The Sum of these numbers is: ", result1)
// console.log("The Sum of these numbers is: ", result2)
// console.log("The Sum of these numbers is: ", result3)


function sum(a, b, c = 3) { // C JO HE WO DEFAULT HE YANI USKI VALUE DEFAULT HOGI
    // console.log(a + b) 
    return a + b + c
}

result1 = sum(3, 5) // AGR B  KISI KO PASS NAE KERENGE YANI YAHA SE AGR 5 REMOVE KERDO TO NaN DEGA YANI NOT A NUMBER
result2 = sum(31, 15)
result3 = sum(43, 25, 1) // OPTIONS VALUE THIS YANI AGR KISI ME CHANGE KERNI HOTO

console.log("The Sum of these numbers is: ", result1)
console.log("The Sum of these numbers is: ", result2)
console.log("The Sum of these numbers is: ", result3)


console.log ("")

// ARROW FUNCTION // YANI KIS TARA SE VARIABLE KE ANDAR DAL SKTE HN FUNCITON KO KIS TARA SE SYNTAX KA ISTEMAL KER SKTE HN



// VARIABLE KE ANDAR KED KARNA HO FUNCTION KO TO ARROW FUNCTION SE EASILY KERSKTE HN
// ARROW FUNCTION
const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(34); // FUNCTION INNOVATION // YANI CALLING THE FUNCTION
func1(66);
func1(84);