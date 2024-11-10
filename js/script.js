// Efeito header

window.addEventListener("scroll", function(){
    let header = document.querySelector("#header") 
    header.classList.toggle("rolagem", window.scrollY > 60)
})

// EFEITO DIGITAÇÃO

const text = document.querySelector(".sec-text")
const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "UX/UI Designer"
    }, 0);
    setTimeout(() =>{
        text.textContent = "Freelancer"
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Web Designer"
    }, 8000);
    setTimeout(() =>{
        text.textContent = "Programador"
    }, 12000);
}

textLoad();
setInterval(textLoad, 12000)

// menu hamburguer

const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".navbar")
const navItems = document.querySelectorAll(".menu a");

hamburguer.addEventListener('click', () =>
    nav.classList.toggle("active")
)

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove("active"); // Remove a classe 'active' para fechar o menu
    });
});