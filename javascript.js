let menu =document.querySelector("#menu-icon");
let navbar= document.querySelector(".navbar");

menu.addEventListener("click", function (){
    navbar.classList.toggle("active");
});
window.onscroll = ()=>{
    navbar.classList.remove("active")
};

ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-text, .about-img, .footer-text', { origin: 'left' });
ScrollReveal().reveal('.home-img, .about-text, .footer-icon-top', { origin: 'right' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.box, .col', { origin: 'bottom' });