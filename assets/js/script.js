// Slider
var swiper = new Swiper(".properties-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".brand-club-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

// Header
const headerElm = document.querySelector(".primary-header");

document.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
        headerElm.classList.add("sticy-header");
    } else {
        headerElm.classList.remove("sticy-header");
    }
});

// AOS Animation
AOS.init({
    offset: 50,
    duration: 800,
    easing: "ease",
    once: true,
});
