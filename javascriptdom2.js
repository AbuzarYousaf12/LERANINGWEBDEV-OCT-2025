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

document.getElementsByTagName("div") // HTML COLLECTION RETURN KERTA HE YANI JITNE BHI DIV HONGE SB KE SB SELECT HONGE

e = document.getElementsByTagName("div")

e[4].matches('#redbox') // YANI E KA 4TH INDEX MATCH KERTA HE K NAE KERTA HE ISLIE TRUE AYEGA

e[3].closest('#redbox') // YANI NEAREST ELEMENT KONSA HE JO IS CSS SELECTOR KO MATCH KERTA HE ?? PEHLE KHUD ELEMENT PR CHECK KEREGA PHIR PARENT PER JAYEGA PHRI PARENT PER JAYEGA JB TK KUCH MATCH NA HOJAY PARENT TO PARENT JATA RHEGA..

document.querySelector(".container").contains(e[2]) // HA CONTAIN KERTA HE ISLIE TRUE AJAYEGA 
document.querySelector(".container").contains(e[0]) // HA CONTAIN KERTA HE ISLIE TRUE AJAYEGA 
document.querySelector(".container").contains(document.querySelector("body")) // NAE CONTAIN KERTA HE ISLIE FALSE AYEGA
document.querySelector("body").contains(document.querySelector(".container")) // HA TRUE BATAYEGA KIOKE BODY KE ANDAR CONTAINER WALA TAG HE ISLIE
