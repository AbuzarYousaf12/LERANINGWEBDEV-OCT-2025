// CALLBACK FUNTION IS LIE ISTEMAL HOTA HE JB AP EIK FUNCTION KO CALL KERNA CHAHTE HO JB WO EXECUTE HO
// PROMISE BHT IMPORTANT CONCEPT HE ASYNC ME

console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000);


const fn = () => {
  console.log("Nothing")
}


const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry")
  document.head.append(sc)


}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

console.log("The End")