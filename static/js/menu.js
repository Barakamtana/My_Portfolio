const menuBtn = document.querySelector('.menu-btn');
const burgers = document.querySelectorAll('.menu-btn__burger');


const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if(!showMenu){
        burgers.forEach(burger => burger.classList.add('open'));
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        
        showMenu = true;
    
    }else{
        burgers.forEach(burger => burger.classList.remove('open'));
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        showMenu = false;
    }
}



// Onother method selecting a single element at a time
/*
const topBurger = menuBtn.querySelector(".menu-btn__burger.top");
const midBurger = menuBtn.querySelector(".menu-btn__burger.mid");
const bottomBurger = menuBtn.querySelector(".menu-btn__burger.bottom");

function toggleMenu() {
    if (!showMenu) {
        topBurger.classList.add('open');
        midBurger.classList.add('open');
        bottomBurger.classList.add('open');
        showMenu = true;
    } else {
        topBurger.classList.remove('open');
        midBurger.classList.remove('open');
        bottomBurger.classList.remove('open');
        showMenu = false;
    }
}
*/