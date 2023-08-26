let openMenu = document.querySelector(".navbar-toggler");
let closeMenu = document.querySelector(".close-btn");
let navbar = document.querySelector(".navbar-nav");

openMenu.addEventListener("click",()=>{
    navbar.classList.add("active")
});
closeMenu.addEventListener("click",()=>{
    navbar.classList.remove("active")
})