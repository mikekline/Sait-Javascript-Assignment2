const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const closeButton = document.querySelector('#closeButton');


menuButton.addEventListener('click', function(){
    mobileMenu.className = "open"
     closeButton.style.opacity = "1"
     menuButton.style.opacity = "0"
     menuButton.style.transitionDelay = "-0.4s"
})

closeButton.addEventListener('click', function(){
    mobileMenu.className = "close"
    closeButton.style.opacity = "0"
    menuButton.style.opacity = "1"
    menuButton.style.transitionDelay = ".2s"
})