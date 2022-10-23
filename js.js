function download(filename, textInput){
    let element1 = document.createElement(`a`)
    element1.setAttribute(`href`, `data:text/plain;charset=uft-8, ` + encodeURIComponent(textInput))
    element1.setAttribute(`download`, filename)
    document.body.appendChild(element1)
    element1.click()
}

document.getElementById("btnCV").addEventListener("click", function(){
   let text = document.getElementById("text")
   let filename = "CV.pdf"
   download(filename, text)
}, false ) 



let img1 = document.getElementsByClassName("photo1")
let imagen1 = document.createElement(`img`)
imagen1.src = `img/photo2.jpg`
imagen1.style.display = `block`
imagen1.style.maxWidth = `70%`
imagen1.style.border = `black dotted 1px`
imagen1.style.margin = `auto`
imagen1.style.borderRadius = `5%`
document.querySelector(`.photo1`).appendChild(imagen1)

let img2 = document.getElementsByClassName("photo2")
let imagen2 = document.createElement(`img`)
imagen2.src = `img/photo42.jpg`
imagen2.style.display = `block`
imagen2.style.maxWidth = `70%`
imagen2.style.border = `black solid 1px`
imagen2.style.margin = `auto`
imagen2.style.borderRadius = `5%`
document.querySelector(`.photo2`).appendChild(imagen2)

let img3 = document.getElementsByClassName("photo3")
let imagen3 = document.createElement(`img`)
imagen3.src = `img/perfil.jpg`
imagen3.style.display = `block`
imagen3.style.maxWidth = `100%`
imagen3.style.border = `black solid 1px`
imagen3.style.margin = `1px`
imagen3.style.borderRadius = `5%`
document.querySelector(`.photo3`).appendChild(imagen3)

let img4 = document.getElementsByClassName("photo4")
let imagen4 = document.createElement(`img`)
imagen4.src = `img/photo420.jpg`
imagen4.style.display = `block`
imagen4.style.maxWidth = `100%`
imagen4.style.border = `black solid 1px`
imagen4.style.margin = `1px`
imagen4.style.borderRadius = `5%`
document.querySelector(`.photo4`).appendChild(imagen4)

let img5 = document.getElementsByClassName("photo5")
let imagen5 = document.createElement(`img`)
imagen5.src = `img/photo12.jpg`
imagen5.style.display = `block`
imagen5.style.maxWidth = `100%`
imagen5.style.border = `black solid 1px`
imagen5.style.margin = `3px`
imagen5.style.borderRadius = `5%`
document.querySelector(`.photo5`).appendChild(imagen5)
 

ScrollReveal().reveal('.figure', { duration: 3000 }, {reset: true});
ScrollReveal().reveal('#btnCV', { duration: 1000 });
ScrollReveal().reveal('.bi', {reset: true}); 
ScrollReveal().reveal('.proyect-1', { duration: 2000 , reset: true});
ScrollReveal().reveal('.proyect-2', { duration: 2000 , reset: true});
ScrollReveal().reveal('.proyect-3', { duration: 2000 , reset: true});




