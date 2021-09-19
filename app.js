let baslik = document.querySelector("h1");
function degis(onclick) {
    baslik.classList.toggle("red");
}

let body = document.querySelector("body");
let text = document.querySelector("*");
let check = document.querySelector("#dark");
let label = document.querySelector("#label1");
let container = document.querySelector("#container")

function darkMode(onclick) {
    body.classList.toggle("bg-black");
    text.classList.toggle("text-white");
    check.classList.toggle("mx-20");
    check.classList.toggle("transition-all");
    check.classList.toggle("bg-yellow-400");
    check.classList.add("duration-700");
    label.classList.toggle("border-white");
    
}