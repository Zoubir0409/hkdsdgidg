let active = false
let langimg = document.getElementById("bottomlang")
function langsel(){
    if(active){
        langimg.style.transform = "translateY(" + -40 + "px)"
        console.log("Test")
        active = false
    }
    else{
        langimg.style.transform = "translateY(" + 0 + "px)"
        console.log("TEst1")
        active = true
    }
}
function Change(bot){
    let top = document.getElementById("top")
    let bot2 = document.getElementById("bot2")
    let tops = top.src 
    top.src = bot.src
    bot.src = tops
    langimg.style.transform = "translateY(" + -40 + "px)"
    bot2.style.width = "26px"
    bot2.style.height = "13px"
}