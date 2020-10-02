const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar-elements");

menuIcon.addEventListener("click", () => {
    if (navBar.style.display === "") {
        navBar.style.display = "flex";
    } else {
        navBar.style.display = "";
    }
    menuIcon.classList.toggle("change");
});

/* CAROUSEL SATRT */
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
/*CAROUSEL END*/

//GALLERY START
const images = document.querySelectorAll(".gallery_imgs img");
const mainImage = document.querySelector(".main_img img");
const opacity = 0.5;

images[0].style.opacity = opacity;
images.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
    images.forEach((img) => (img.style.opacity = 1));
    mainImage.src = e.target.src;
    mainImage.classList.add("fade-in");
    setTimeout(() => mainImage.classList.remove("fade-in"), 500);
    e.target.style.opacity = opacity;
}
//GALLERY END
