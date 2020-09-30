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
