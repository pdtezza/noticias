const botaoAbrir=document.querySelector(".header-mobile > button")
const botaoFechar=document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoFechar.addEventListener('click',fecharMenu)
botaoAbrir.addEventListener('click',abrirMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}
