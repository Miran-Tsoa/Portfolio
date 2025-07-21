// document recovery

let discoverAnimationText = document.querySelectorAll(".home-text  li, .home-contact li")

let text="Hi! I'm Miran."
let h1 = document.querySelector(".home-text h1")
let i= 0

//event listener

window.addEventListener("load", animation)
window.addEventListener("load", typeWriter)

//function

function animation() {
    for (let i=0; i<discoverAnimationText.length; i++) {
        setTimeout(()=> {
            discoverAnimationText[i].classList.add("animation")
        }, i*200)
    }
}

function typeWriter() {
    if (i<text.length) {
        h1.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter,200)
    }
}