/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*====MENU SHOW====*/
/*Validar la existencia de las constantes*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*====MENU HIDDEN====*/
/*Validar la existencia de las constantes*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Cuando damos click en nav__link se remueve el show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    //Cuando el scroll is mayor que 50 viewport height, se añade la clase del scrollbar para el header
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Cuando el scroll es mayor que 200 del viewport añade el show-croll al tag con el escroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //Reset: true
})

sr.reveal(`.home__header,.section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay:700})
sr.reveal(`.home__img`,{delay:900,origin:'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin:'top',setInterval:100})

sr.reveal(`.specs__data, .discount__animate`,{origin:'left',setInterval:100})

sr.reveal(`.specs__img, .discount__img`,{origin:'right'})

sr.reveal(`.case__img`,{origin:'top'})
sr.reveal(`.case__data`)


