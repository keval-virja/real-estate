// Slider
var swiper1 = new Swiper(".properties-slider", {
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

var swiper2 = new Swiper(".brand-club-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
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

var swiper3 = new Swiper(".prop-details-thumb-slider", {
    slidesPerView: 4,
    spaceBetween: 6,
    watchSlidesProgress: true,
});

var swiper4 = new Swiper(".property-details-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper3,
    },
});

var swiper3 = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
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
            slidesPerView: 2,
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

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 169900, 170000, 1000);
    counter("count2", 4400, 4500, 1000);
    counter("count3", 794, 894, 1000);
    counter("count4", 2902, 3002, 1000);
});
