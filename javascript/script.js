//Função para mudar Navbar ao descer na pagina

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.borderBottom = "solid 0px rgba(255,255,255,0)";
    document.getElementById("navbar").style.background = "var(--color-black)";
    document.getElementById("navbar").style.boxShadow = "0 1rem 2rem rgba(0, 0, 0, 0.2)";
    document.getElementById("logo").style.height = "5rem";
    document.getElementsByClassName('navbar__button')[0].style.top = "1.7rem"

    //document.getElementById("navbar__logo__text").style.display = "none";
  } else {
    document.getElementById("navbar").style.borderBottom = "solid 1px rgba(255,255,255,0.3)";
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.boxShadow = "0 1rem 2rem rgba(0, 0, 0, 0)";   
    document.getElementById("logo").style.height = "8rem";
    document.getElementsByClassName('navbar__button')[0].style.top = "3.3rem"

    //document.getElementById("navbar__logo__text").style.display = "initial";
  }
}

//Função da Navbar Responsiva

const navButton = document.getElementsByClassName('navbar__button')[0]
const navIcon = document.getElementsByClassName('navbar__icon')[0]
const navLinks = document.getElementsByClassName('navbar__group')[0]
const navLink = document.querySelectorAll('.navbar__link')
const navOverlay = document.getElementsByClassName('navbar__overlay')[0]

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('navbar__group--active');
  navOverlay.classList.toggle('navbar__overlay--active');
  navIcon.classList.toggle('bi-x');
});

navOverlay.addEventListener('click', () => {
  navLinks.classList.toggle('navbar__group--active');
  navOverlay.classList.toggle('navbar__overlay--active');
  navIcon.classList.toggle('bi-x');
})

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (document.documentElement.clientWidth <= 1000){
      navLinks.classList.toggle('navbar__group--active')
      navOverlay.classList.toggle('navbar__overlay--active')
      navIcon.classList.toggle('bi-x');
    }
  })
});


//Função para filtrar obras no portfólio

let btnFilter = document.querySelectorAll('.btn-filter');
let portItems = document.querySelectorAll('.portfolio__item');

for(let i = 0; i<btnFilter.length; i++){
  btnFilter[i].addEventListener('click', function(){
    for(let j = 0; j<btnFilter.length; j ++){
      btnFilter[j].classList.remove('btn-filter-active');
    }
    this.classList.add('btn-filter-active');

    const dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k<portItems.length; k++){
      portItems[k].classList.remove("filter-active");
      portItems[k].classList.add('filter-hide')

      if(portItems[k].getAttribute('data-item') == dataFilter 
      || dataFilter == 'filter-todas'){
        portItems[k].classList.remove("filter-hide")
        portItems[k].classList.add("filter-active");
      }
    }
  })
}