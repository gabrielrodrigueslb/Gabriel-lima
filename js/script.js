// Efeito header

window.addEventListener("scroll", function(){
    let header = document.querySelector("#header") 
    header.classList.toggle("rolagem", window.scrollY > 60)
})

// EFEITO DIGITAÇÃO

const textElement = document.querySelector(".sec-text");
const words = ["Programador", "UX/UI Designer", "Web Designer", "Freelancer"];
let index = 0; // Índice da palavra
let charIndex = 0; // Índice do caractere atual
let isDeleting = false; // Controla se está apagando

const typeSpeed = 100; // Velocidade da digitação (ms)
const deleteSpeed = 50; // Velocidade de apagar (ms)
const delayBetweenWords = 1500; // Tempo de pausa entre palavras (ms)

const type = () => {
    const currentWord = words[index]; // Palavra atual
    const visibleText = isDeleting
        ? currentWord.substring(0, charIndex) // Mostra até o índice atual
        : currentWord.substring(0, charIndex + 1); // Mostra até o próximo índice

    textElement.textContent = visibleText;

    if (!isDeleting && charIndex === currentWord.length - 1) {
        // Palavra completa, inicia o apagamento após uma pausa
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        // Palavra apagada, passa para a próxima
        isDeleting = false;
        index = (index + 1) % words.length; // Incrementa o índice
        setTimeout(type, typeSpeed);
    } else {
        // Continua digitando ou apagando
        charIndex += isDeleting ? -1 : 1; // Incrementa ou decrementa o índice
        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    }
};

// Inicia o efeito de digitação
type();


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


// Animação
if(window.SimpleAnime){
    new SimpleAnime();
    }
    