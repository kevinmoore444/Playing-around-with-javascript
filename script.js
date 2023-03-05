var animalimage = document.querySelector("#animal")
var deletethisline =document.querySelector("#linetodelete")

var cattotalvotes = 0
var dogtotalvotes = 0
var mousetotalvotes = 0

var catcountdisplay = document.querySelector("#catcount")
var dogcountdisplay = document.querySelector("#dogcount")
var mousecountdisplay = document.querySelector("#mousecount")

function pickcat(){
    animalimage.src = "cat.jpg"
    cattotalvotes++
    catcountdisplay.innerText = "cat count " + cattotalvotes
    deletethisline.remove()
}


function pickdog(){
    animalimage.src = "dog.jpg"
    dogtotalvotes++
    dogcountdisplay.innerText = "dog count " + dogtotalvotes
}


function pickmouse(){
    animalimage.src = "mouse.jpg"
    mousetotalvotes++
    mousecountdisplay.innerText = "mouse count " + mousetotalvotes
}
