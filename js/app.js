/* Utilicé ChatGPT para las líneas de javascript correspondientes al menu de mobile */



const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}


openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);



const menuLinks = document.querySelectorAll('.menu a[href^="#"]'); // Select all menu links

menuLinks.forEach((menuLink) => { // Use a properly named parameter
    menuLink.addEventListener("click", function() {
        const menu = document.querySelector(".menu"); // Define the menu element
        if (menu) {
            menu.classList.remove("menu_opened");
        }
    });
});