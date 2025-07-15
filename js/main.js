let fixedNav = document.getElementById("fixed-nav");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 58){
        fixedNav.classList.add('header-scrolled')
    }else{
        fixedNav.classList.remove('header-scrolled');
    }
}

// faq section toggle 

const accordians = document.querySelectorAll('.accordion-item');

accordians.forEach(curElem => {
    const accordionContent = curElem.querySelector('.accordion-content');
    const icon = curElem.querySelector('.accordion-icon')

    curElem.addEventListener('click', () => {

        if(accordionContent.style.maxHeight){
            accordionContent.style.maxHeight = null;
            icon.textContent = "+";
        }else{
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            icon.textContent = "-";
        }

    })
})

// nav menu toggler

let navbarToggle = document.getElementById("nav-open--btn");
let navbarToggleClose = document.getElementById("nav-close--btn");
let navLink = document.querySelectorAll(".nav-link");
let navBar = document.getElementById("navbar");

function showNavbar(){
    navBar.classList.add("show-menu");
    navbarToggle.style.display = "none";
}

function hideNavBar() {
    navBar.classList.remove("show-menu");
    navbarToggle.style.display = "block";
}

function linkAction () {
    navBar.classList.remove("show-menu");
    navbarToggle.style.display = "none";
}

navLink.forEach(navLinks => {
    navLinks.addEventListener("click", linkAction);
})

navbarToggle.addEventListener("click", showNavbar);
navbarToggleClose.addEventListener("click", hideNavBar);
