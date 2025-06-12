console.log('Harry')

document.querySelector(".box").innerHTML // ANDAR HTML HOGI JOBHI WO MILJAYEGI

document.querySelector(".container").innerText // ANDAR JO BHI TEXT HOGA WO BATAEGA

document.querySelector(".container").outerHTML // YANI HTML KE OUTER ME JO BHI HOGA SB KUCH MILJAYEGA

document.querySelector(".container").tagName // TAG NAME BATADEGA YANI KE JO CONTAINER HE WO DIV HE TO DIV BATADEGA YANI ELEMENT KONSA HE TAG NAME SRF ELEMENT KELEYE APPLICATBLE HOTA HE


document.querySelector(".container").textContent // ISKE ANDAR KA TEXT CONTENT MILJAYEGA

document.querySelector(".container").hidden // HIDDEN NAE HE ISLIE FALSE AJAYEGA

document.querySelector(".container").hidden = true // HIDDEN TRUE KIA HE ISLIE HIDE HOJAYEGA

document.querySelector(".box").innerHTML = "Hey I am Harry" // YAIN KISI BHI ELEMENT KI HTML CHANGE KERSKTE HN IS SE 

// ATTRIBUTE METHODS

document.querySelector(".box").hasAttribute("style") // FALSE AYEGA KIO KE JO ELEMENT SELECT KIA HE USEM STYLE ATTRIBUTE NAE HE

document.querySelector(".box").getAttribute("style") // YANI MUJHE DIKHAYO KIA HE STYLE KE ANDAR KIA HE ISME

document.querySelector(".box").removeAttribute("style") // YANI KISI BHI ATTRIBUTE KO REMOVE KERNE KELEYE USE HOTA HE STYLE ATTRIBUTE

document.querySelector(".box").setAttribute("style", "display: inline") // YANI STYLE ATTRIBUTE KO SET ESE KERO KE DISPLAY INLINE KERDO

document.designMode = "on" // YE KISI BHI WEBSITE ME KERNE SE KOI BHI CHEZ EDIT HOSKTI HE KERSKTE HN TEXT WAGHERA ETC

// DATA ATTRIBUTE CUSTOM ATTRIBUTE DAL SKTE HN HM 

// JESE MENE HTML ME DALA ` DATA-CREATEBY="HARRY" ` TO ISKO ACCESS KERNE KELEYE 
document.querySelector(".box").dataset


///////// INSETION METHOD 

// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>By Harry</b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div)


///////// INSERTION METHODS

// node.append // YANI CONTAINER KE ANDER AKHIR PER KERDEGA
// node.prepend // YANI CONTAINER KE ANDAR PEHLE KERDEGA
// node.before // YANI CONTAINER SE PEHLE KERDEGA
// node.after // YANI CONTAINER KE BAD KERDEGA
// node.replacewith // YANI JIS KO REPLACE KERNA HE USKO REPLACE KERDEGA


///////// INSERT ADJACENT HTML/TEXT/ELEMENT

// BEFORE BEGIN KERENGE TO PEHLE INSERT HOGA

// AFTERBEGIN KERENGE TO ELEMENT KI BEGINNING ME INSERT HOGA

// BEFOREEND KERENGE TO HTML ELEMENT KE END PER HOGA

// AFTEREND KERENGE TO HTML ELEMENT KE BAD IMMEDIATELY AFTER ELEMENT INSERT HOGA

// THE SECOND ELEMENT IN AN HTML STRING



let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b> I am under the water. Please help me here too much raining.... iuuuuooooo</b>")

///////// CLASSNAME & CLASSLIST

document.getElementsByClassName(".container")

document.querySelector(".container").classList // MUJHE SARE CLASS KI LIST DEDEGA 

document.querySelector(".container").className // JO CLASS ATTRIBUTE HE USKE ANDAR KI VALUE DEDEGA MUJHE

document.querySelector(".container").className.add("harry") // YANI HARRY CLASS ADD HOJAYEGI AUR MULTIPLE TIMES EIK CLASS ADD ANE HOGI

document.querySelector(".container").className.remove("harry") // YANI HARRY CLASS REMOVE HOJAYEGI

document.querySelector(".container").className.toggle("harry") // YANI KHULA HE TO BND KERDO BND HE TO KHOL DO













