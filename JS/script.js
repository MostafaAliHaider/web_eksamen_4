const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/* const menu = document.getElementById("main-menu");

const hamMenu = () =>{
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}
 */