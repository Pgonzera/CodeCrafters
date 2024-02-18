const navBtn = document.querySelector('.navbar-toggler');
const h1 = document.querySelector('h1');

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");
   
    const isNavbarVisible = navbarLinks.classList.contains("show");

    // Atualizar o texto do botão com base na visibilidade da barra de navegação
    navBtn.innerText = isNavbarVisible ? '✖' : '☰';
}

//Animações 
const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showX');
        }else{
            entry.target.classList.remove('showX');
        }
    })
})

const elements = document.querySelectorAll('.hiddenX');

elements.forEach((element)=> myObserver.observe(element));


const myObserverV = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showV');
        }else{
            entry.target.classList.remove('showV');
        }
    })
})

const elementsV = document.querySelectorAll('.hiddenV');

elementsV.forEach((elementV)=> myObserverV.observe(elementV));