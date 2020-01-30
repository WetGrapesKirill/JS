let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 4,
    slidesOffsetBefore: 115,
    spaceBetween: 44,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        756: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 44
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 44
        }
    }

})