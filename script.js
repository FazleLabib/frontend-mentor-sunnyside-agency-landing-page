const mobileNavIcon = document.getElementById('mobile-nav-icon');
const modalNavMenu = document.getElementById('mobile-menu');

function showMenu() {
    if(modalNavMenu.style.display == "none"){
        modalNavMenu.style.display = "flex";
    }
    else{
        modalNavMenu.style.display = "none";
    }
}

mobileNavIcon.addEventListener('click', showMenu);

