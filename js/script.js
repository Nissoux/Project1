/*const slider = document.querySelector('#selection');
const content = document.querySelector('.slider')
const nextBtn = document.querySelector('.btn__carousel__next');
const prevBtn = document.querySelector('.btn__caousel__prev');

let counter = 0;
nextBtn.addEventListener('click', () => {
    content.style.transform = 'translateX(-300px)';
    counter++;
    console.log(counter);
});*/

const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.navbar-elements');

menuIcon.addEventListener('click', () => {
    if (navBar.style.display === "") {
        navBar.style.display = "flex";
    } else {
        navBar.style.display = "";
    }
    menuIcon.classList.toggle('change');
});
