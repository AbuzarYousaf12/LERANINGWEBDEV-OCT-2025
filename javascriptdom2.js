console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"; // YAHA PER 2ND INDEX WALE ELEMENT KO SELECT KERHE HN


// document.getElementById("redbox").style.backgroundColor = "red" 

document.querySelector(".box").style.backgroundColor = "green"; // YANI PEHLA .BOX JO HE USKA COLOR GREEN HOGA INLINE CSS ADD KERI USING JAVASCRIPT PEHLE JO BHI SELECTOR MATCH KEREGA USPR KEREGA

console.log(document.querySelectorAll(".box")) // HTML SELECTION HOGA ARRAY YA STRING KA HOJAYEGA LEKING SELECTION KA NAE HOTA ?? ERROR DEGA YE

// ISKO SHI TARA SE KERNE KA YEH TARIKA HOGA

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

