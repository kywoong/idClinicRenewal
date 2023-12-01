let mainSlide = new Swiper(".mainSlide", {
    loop: true,
    navigation: {
        nextEl: ".visualNext",
        prevEl: ".visualPrev",
    },
    autoplay: {
        delay: 3000,
    },
});

let bestProduct = new Swiper(".bestProduct", {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".bestNext",
        prevEl: ".bestPrev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});