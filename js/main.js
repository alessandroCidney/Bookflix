$('.owl-carousel').owlCarousel({
    loop:true, // Ativa/Desativa o efeito de loop
    margin:10, // Margem entre filmes
    nav:false,  // Ativar botões de navegação
    responsive:{    // Número de itens em cada tipo de tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const popupContainer = document.querySelector(".popup-container"); 
const popupButton = document.querySelector(".popup-button");

popupButton.addEventListener('click', ()=>{
    popupContainer.classList.remove("active");
    popupContainer.classList.add("disabled");
})
