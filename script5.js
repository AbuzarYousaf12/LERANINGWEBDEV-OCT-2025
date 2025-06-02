console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let real_name = "Harry"

let friend = "Rohan"

console.log("His name is " + real_name + " and his friends name is " + friend)

// TEMPLATE LITERALS IN JAVASCRIPT
console.log("TEMPLATE LITERALS IN JAVASCRIPT")

console.log(`His name is ${real_name} and his friends name is ${friend}`)


//STRING INTERPOLATION IN JAVASCRIPT
console.log("STRING INTERPOLATION IN JAVASCRIPT")

console.log(`His name is ${real_name} and his "Friends" name is ${friend}`)


// // // // // //

// let h = "Roh'an" // PRINT KEREGA YE 
// let h = "Roh"an" // ERROR DEGA YE 
// let h = `Roh"an`   // YE BHI SHI HE PRINT KEREGA YE BHI MOST OF CASES YE USE HOTA HE


//ESCAPE SEQUENCE SELECTION IN JAVASCRIPT

// let h = "Roh\"an" // PRINT KEREGA WITH "" 


// let h = "Roh\nan" // IS SE NEW LINE ADD HOJATI HE 
// console.log(h) 







// STRING PROPERTIES AND METHOD

console.log ("STRING PROPERTIES")

let h = "ShivamSh"

console.log(h.toUpperCase()) // () JISKELEY USE KI JAYE WO FUNCTION HOTA HE 
console.log(h.toLowerCase())
console.log(h.length) // LENGTH EIK PROPERTY HE FUCNTION KO RUN KERNE KELEY BRACKETS LAGANE PERTE HE

console.log(h.slice(1,4)) // YANI 1 SE LEKER 4 TK YE PRINT KEREGA
console.log(h.slice(1)) // 1 INDEX HE YANI 1 SE LEKER AGE WALE SARE CHARACTERS DEDEGA
console.log(h.replace("Sh", "77")) // YANI HM "Sh" ko "77" se REPLACE KERHE HN // AGR 2 MATCH HON LIKHEN JESE AGR ShivamSh ho to jo pehla wala he whi replace hoga

console.log(h.replace(/Sh/g, "77")) // IS SE SB MATCHE REPLACE HONGE JITNE BHI DAFA MATCH HOGA

console.log(h.concat(a, "Aishwariya", "Rahul", "Priya")) // a KE SATH CONCATINATE HOGYE YANI JUR GYE // JO BHI ADD KERENGE WO CONCATINATE HOJAYENGE PLUS KA B ISTEMAL KERSKTE THE LEKIN CONVENIENT YE TARIKA HE



console.log(h.charAt(0))   // YE BATAEYA KE 0 PER KONSA CHARACTER HE
console.log(h.charAt(100))




console.log(h.indexOf('ha')) // YE BATAYEGA KE YE CHARACTER KONSE NUMBER PER HE
console.log(h.indexOf('zz'))



console.log(h.startsWith('Sh')) // YANI STRING "Sh" SE START HOTI HE
console.log(h.startsWith('Ro'))




console.log(h.endsWith('Sh')) // YANI "Sh" Per End hota he?
console.log(h.endsWith('Or'))