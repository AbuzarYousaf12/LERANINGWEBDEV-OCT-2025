console.log("EVENTS EVENT BUBBLING SET INTERVAL & SET TIMEOUT IN JAVASCRIPT")

    /// LIST OF ALL EVENTS /// https://developer.mozilla.org/en-US/docs/Web/Events   

let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert('I was clicked') 
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Hack Us By Right Click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e)
})


document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})


