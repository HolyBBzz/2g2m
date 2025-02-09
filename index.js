function newPage() {
    anime({
        targets: text,
        opacity: [{value: 0, duration: 0},
        {value: 1, duration: 200}],
        translateY: [{value: -10, duration: 0},
        {value: 0, duration: 200}],
        easing: 'easeOutQuad'
    })
}
let backgr = document.querySelector('body')
let matext = document.querySelector('.ma-text')
let historytext = document.querySelector('.history-text')
let links = document.querySelector('.links')
let main = document.querySelector('.main')
let text = document.querySelector('.text')
let history = document.querySelector('.history')
let syn = document.querySelector('.syn')
let synimg = document.querySelector(".synimg")
let tx2 = document.querySelector(".tx2")
let treeboo = document.querySelector(".treeboo")
let gamefirst = document.querySelector(".game-first")
let gamesecondmenu = document.querySelector(".game-second-menu")
let gamefirstmenu = document.querySelector(".game-first-menu")
let gamefirstobj1 = gamefirst.querySelector('button')
let gamefirstobj2 = gamefirst.querySelector('.game-text')
let gamefirstobj3 = gamefirst.querySelector('.loading-first-game')
let gamefirstobj4 = gamefirst.querySelector("input")
let gamefirstbtn = document.querySelector(".game-first-button")
let gamesecondbtn = document.querySelector(".game-second-button")
let gamesecond = document.querySelector(".game-second")
let gamesecondobj1 = gamesecond.querySelector("img")
let gamesecondobj2 = gamesecond.querySelector("p")
let gamethirdmenu = document.querySelector(".game-third-menu")
let gamethird = document.querySelector(".game-third")
let gamethirdbtn = document.querySelector(".game-third-button")
let minigames = document.querySelector(".mini-games")
let buttonback = document.querySelector(".button-back")
let gamethirdobj1 = gamethird.querySelector("img")
let gamethirdobj2 = gamethird.querySelector("p")
let gamethirdobj3 = gamethird.querySelector("button")
var synsound = new Audio("gong.mp3")

const backgrounds = ['back1.png', 'back2.png', 'back3.png', 'back4.png', 'back5.png', 'back6.png', 'back7.png', 'back8.png']

syn.addEventListener("click", function() {
    anime({
        targets: synimg,
        opacity: 1,
        duration: 4000,
        easing: 'easeOutQuad'
    }).finished.then(function(){
        anime({
            targets: synimg,
            opacity: 0,
            duration: 4000,
            easing: 'easeOutQuad'
        })
    })

    anime({
        targets: tx2,
        opacity: 1,
        duration: 4000,
        easing: 'easeOutQuad'
    }).finished.then(function(){
        anime({
        targets: tx2,
        opacity: 0,
        duration: 4000,
        easing: 'easeOutQuad'
    })
    })

    synsound.play();
})
/*syn.addEventListener("mouseleave", function() {
    anime({
        targets: synimg,
        opacity: 0,
        duration: 10000,
        easing: 'easeOutQuad'
    })
})

syn.addEventListener("mouseenter", function() {
    anime({
        targets: tx2,
        opacity: 1,
        duration: 10000,
        easing: 'easeOutQuad'
    }).finished.then(function(){
        anime({
        targets: tx2,
        opacity: 0,
        duration: 100,
        easing: 'easeOutQuad'
    })
    })
})
syn.addEventListener("mouseleave", function() {
    anime({
        targets: tx2,
        opacity: 0,
        duration: 10000,
        easing: 'easeOutQuad'
    })
})*/

anime({
    targets: text,
    opacity: [{value: 0, duration: 0},
    {value: 1, duration: 1000}],
    translateY: [{value: -20, duration: 0},
    {value: 0, duration: 1000}],
    easing: 'easeOutQuad'
})

backgr.style.backgroundImage = "url('" + backgrounds[Math.floor(Math.random() * 7)] + "')";

links.addEventListener('click', function(){
    treeboo.style.display = "block"
    historytext.style.display = "none"
    matext.style.display = "none"
    minigames.style.display = "none"
    gamefirstmenu.style.display = "none"
    gamesecondmenu.style.display = "none"
    gamethirdmenu.style.display = "none"
    newPage()
})
main.addEventListener('click', function(){
    historytext.style.display = "none"
    treeboo.style.display = "none"
    matext.style.display = "block"
    minigames.style.display = "none"
    gamefirstmenu.style.display = "none"
    gamesecondmenu.style.display = "none"
    gamethirdmenu.style.display = "none"
    newPage()
})
history.addEventListener('click', function(){
    historytext.style.display = "block"
    minigames.style.display = "none"
    treeboo.style.display = "none"
    matext.style.display = "none"
    gamefirstmenu.style.display = "none"
    gamesecondmenu.style.display = "none"
    gamethirdmenu.style.display = "none"
    newPage()
})

buttonback.addEventListener('click', function(){
    minigames.style.display = "block"
    historytext.style.display = "none"
    treeboo.style.display = "none"
    matext.style.display = "none"
    gamefirstmenu.style.display = "none"
    gamesecondmenu.style.display = "none"
    gamethirdmenu.style.display = "none"
    newPage()
})

gamefirstbtn.addEventListener('click', function(){
    gamefirstmenu.style.display = "flex"
    minigames.style.display = "none"
    newPage()
})

gamesecondbtn.addEventListener('click', function(){
    gamesecondmenu.style.display = "flex"
    minigames.style.display = "none"
    newPage()
})

gamethirdbtn.addEventListener('click', function(){
    gamethirdmenu.style.display = "flex"
    minigames.style.display = "none"
    newPage()
})

gamefirstobj1.addEventListener('click', function(){
    if (gamefirstobj4.value.replaceAll(" ", "") == "") {
        gamefirstobj2.style.display = "block"
        gamefirstobj3.style.display = "none"
        gamefirstobj2.style.color = "red"
        gamefirstobj2.innerHTML = "Как я тебе взломаю чела с пустым именем?"
    }
    else if (gamefirstobj4.value == "Шио" || gamefirstobj4.value == "шио" || gamefirstobj4.value == "польша"|| gamefirstobj4.value == "Польша" || gamefirstobj4.value == "фаянс" || gamefirstobj4.value == "Фаянс"){
        gamefirstobj2.style.display = "block"
        gamefirstobj3.style.display = "none"
        gamefirstobj2.style.color = "red"
        gamefirstobj2.innerHTML = "Иди нахуй"
    }
    else {
        gamefirstobj3.style.display = "block"
        gamefirstobj2.style.display = "none"
        anime({
            targets: gamefirstobj3,
            rotate: [{value: 0, duration: 0},
            {value: 5000, duration: 5000}],
            easing: "linear"
        }).finished.then(function(){
            gamefirstobj2.style.color = "black"
            gamefirstobj2.style.display = "block"
            gamefirstobj3.style.display = "none"
            gamefirstobj2.innerHTML = 'Жопа пользователя "' + gamefirstobj4.value + '" успешно взломана<br><br>Ip жопы "' + gamefirstobj4.value + '" – ' + Math.round(Math.random() * 225) + "." + Math.round(Math.random() * 225) + "." + Math.round(Math.random() * 225) + "." + Math.round(Math.random() * 225) + "."
        })
    }
})

let countfayans = 0

let watch = 0

gamesecondobj2.innerHTML = "пойманных Фаянсов: " + countfayans

let fayansdissapear = new Promise(function(resolve, reject){
    setInterval(function(){
        gamesecondobj1.src = "fayansface1.png"
        gamesecondobj1.style.transform = "translateY(" + Math.round(Math.random() * 350) + "px) translateX(" + Math.round(Math.random() * 700) + "px)"
        gamesecondobj1.style.display = "block"
        watch = 0
        resolve()
    }, Math.random() * 6000 + 1500)
})

fayansdissapear.then(function() {
    setInterval(function(){
        gamesecondobj1.style.display = "none"
    }, Math.random() * 2000 + 1000)
})

console.log(gamesecondobj1.src)

gamesecondobj1.addEventListener("click", function() {
    if (watch == 0) {
        countfayans += 1
        gamesecondobj2.innerHTML = "пойманных Фаянсов: " + countfayans
        gamesecondobj1.src = "fayansface2.png"
    }
    watch = 1
})

anime({
    targets: gamethirdobj1,
    top: [{value: "150px", duration: 0},
        {value: "145px", duration: 1000},
        {value: "150px", duration: 1000}],
    easing: "linear",
    loop: true
})

gamethirdobj1.addEventListener("mouseenter", function() {
    gamethirdobj1.src = "gamethirdobj1hover.png"
})
gamethirdobj1.addEventListener("mouseleave", function() {
    gamethirdobj1.src = "gamethirdobj1.png"
    gamethirdobj1.style.filter = "brightness(1)"
})
gamethirdobj1.addEventListener("mousedown", function() {
    gamethirdobj1.style.filter = "brightness(0.9)"
})
gamethirdobj1.addEventListener("mouseup", function() {
    gamethirdobj1.style.filter = "brightness(1)"
})

let countobjects = 1100
let clear = 0
let countclear = 0

gamethirdobj1.addEventListener("click", function(){
    if (countobjects > 0) {
        countobjects -= 1
        gamethirdobj2.innerHTML = "лимит: " + countobjects + "/" + "1100 Очищенных лимитов: " + countclear
    }
    if (countobjects == 100) {
        if (clear == 0) {
            countclear++
            gamethirdobj2.innerHTML = "лимит: " + countobjects + "/" + "1100 Очищенных лимитов: " + countclear
        }
        clear = 1
        gamethirdobj1.style.display = "none"
         gamethirdobj3.style.display = "block"
    }
    else {
        gamethirdobj1.style.display = "block"
    }
})

setInterval(function() {
    if (countobjects < 1100) {
        countobjects++
        gamethirdobj2.innerHTML = "лимит: " + countobjects + "/" + "1100 Очищенных лимитов: " + countclear
    }
    else {
        clear = 0
        gamethirdobj3.style.display = "none"
    }
    if (countobjects == 100) {
        if (clear == 0) {
            countclear++
            gamethirdobj2.innerHTML = "лимит: " + countobjects + "/" + "1100 Очищенных лимитов: " + countclear
        }
        clear = 1
        gamethirdobj1.style.display = "none"
        gamethirdobj3.style.display = "block"
    }
    else {
        gamethirdobj1.style.display = "block"
    }
}, countobjects)

gamethirdobj3.addEventListener("click", function() {
    gamethirdobj3.style.display = "none"
    gamethirdobj1.style.display = "block"
    clear = 0
    countobjects = 1100
    gamethirdobj2.innerHTML = "лимит: " + countobjects + "/" + "1100 Очищенных лимитов: " + countclear
})