const navBtn = document.querySelector('.navbar-toggler');

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");

    const isNavbarVisible = navbarLinks.classList.contains("show"); // Adiciona ou remove a classe .close para o botão de menu

    navBtn.innerText = isNavbarVisible ? '✖' : '☰';

}

//Animações

const myObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showContent');
        }else{
            entry.target.classList.remove('showContent');
        }
    })
})


const elements = document.querySelectorAll('.hidden');

elements.forEach((element)=> myObserver.observe(element));


























const myObserverV = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showContentV');
        }else{
            entry.target.classList.remove('showContentV');
        }
    })
})

const elementsV = document.querySelectorAll('.hiddenV');

elementsV.forEach((element)=> myObserverV.observe(element));


