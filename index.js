console.log("Correctly done")

let ans1 = document.getElementById("ans1")

let ans2 = document.getElementById("ans2")

let ans3 = document.getElementById("ans3")
let ans4 = document.getElementById("ans4")
let ans5 = document.getElementById("ans5")
let ans6 = document.getElementById("ans6")
let ans7 = document.getElementById("ans7")
let ans8 = document.getElementById("ans8")
let ans9 = document.getElementById("ans9")
let ans10 = document.getElementById("ans10")



let scorehtml = document.getElementById("score")
let sub = document.getElementById("subbtn")
let score = 0

sub.addEventListener("click", ()=>{
    if (ans1.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans2.value=="iii") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans3.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans4.value=="ii") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans5.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans6.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans7.value=="iii") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans8.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans9.value=="i") {
        score = score+1
    }
    else{
        score = score+0
    }
    if (ans10.value=="ii") {
        score = score+1
    }
    else{
        score = score+0
    }
    scorehtml.innerHTML = score + "/10"
})