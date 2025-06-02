let arr = [1, 2, 4, 5, 7]
// Index   0, 1, 2, 3, 4

console.log(arr, typeof arr); // TYPE OF ARRAY OBJECT HOTA HE 
console.log(arr.length);

arr[0] = 5666;   // ARRAY CHANGE HOJAYEGA LEKIN YE STRING ME NAE HOTA ARRAY CHANGE HOJAYA HE STRING CHANGE NAE HOTA HE
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString()) //The .toString() method converts an array to a string, where all elements are joined with commas ,.

console.log(arr.join(" and ")) // YE HR ARRAY KE SATH AND LG JAYEGA ARRAY ALG HOJAYEGA

console.log(arr)

console.log(arr.pop()) // POP KA MTLB NIKALO YANI JO POP HE WO END WALE NUMBER KO NIKALDEGA

console.log(arr)

console.log(arr.push(100)) // END ME PUSH KERDEGA ADD KERDEGA

console.log(arr)

console.log(arr.push("Harry")) // END ME PUSH KERDEGA ADD KERDEGA

console.log(arr)

console.log(arr.shift()) //SHIFT YANI KE 1st KO REMOVE KERDEGA SHIFT KERDEGA REMOVE

console.log(arr)

console.log(arr.unshift('Jack')) //UNSHIFT JO HOTA HE WO PUSH KA BHAI HOTA AUR JO SHIFT HOTA HE WO POP KA BHAI HOTA HE 

console.log(arr)

delete arr[4]

console.log(arr)


let b1 = [1, 2, 3]
let b2 = [4, 5, 6]
let b3 = [7, 8, 9]

console.log(b1.concat(b2,b3)) // CONCAT YANI JOR DENA

let c = [7, 9, 8]
console.log(c.sort()) // YANI SORTING KERDEGA NUMBER WISE SORT KERDEGA 


let numbers = [1, 2, 3, 4, 5]

console.log(numbers.splice(1, 2)) // YANI NUMBERS ME SE 2 ELEMENTS GAYEB HOGE

let number = [1, 2, 3, 4, 5]

console.log(number.splice(1, 3)) // YANI 1 INDEX KE AGE 3 NUMBER AYENGE

let numbe = [1, 2, 3, 4, 5]

console.log(numbe.splice(1, 3, 222, 333)) // NUMBERS ADD KERNEKELEYE
console.log(numbe)