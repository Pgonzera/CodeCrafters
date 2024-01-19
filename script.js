const navBtn = document.querySelector('.navbar-toggler');
const h1 = document.querySelector('h1');

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");
   
    const isNavbarVisible = navbarLinks.classList.contains("show");

    // Atualizar o texto do botão com base na visibilidade da barra de navegação
    navBtn.innerText = isNavbarVisible ? '✖' : '☰';



}

let indiceSlider = 0;

function voltarSlider(incremento) {
    indiceSlider = (indiceSlider - incremento + totalSlides) % totalSlides;
    exibirSlideAtual();
}

function moverSlider(incremento) {
    indiceSlider = (indiceSlider + incremento + totalSlides) % totalSlides;
    exibirSlideAtual();
}

function exibirSlideAtual() {
    const slides = document.querySelectorAll(".slider img");
    slides.forEach((slide, index) => {
        slide.style.display = index === indiceSlider ? "block" : "none";
    });
}

const totalSlides = document.querySelectorAll(".slider img").length;

// Exiba o primeiro slide ao carregar a página
document.addEventListener("DOMContentLoaded", exibirSlideAtual);
