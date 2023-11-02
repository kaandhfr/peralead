var entrySliderThumbs = new Swiper(".entry-slider-thumbs", {
    centeredSlidesBounds: true,
    slidesPerView: 2,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 5
        },
        // when window width is >= 640px
        1600: {
            slidesPerView: 6
        }
    }
});

var entrySlider = new Swiper(".entry-slider", {
    autoplay: {
        delay: 5000,
    },
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: entrySliderThumbs
    }
});

entrySlider.on('slideChangeTransitionStart', function () {
    entrySliderThumbs.slideTo(entrySlider.activeIndex);
});

entrySliderThumbs.on('transitionStart', function () {
    entrySlider.slideTo(entrySliderThumbs.activeIndex);
});

var sidebar = new StickySidebar('#sidebar-wrapper', {
    containerSelector: '#blog-list-section',
    innerWrapperSelector: '#blog-sidebar',
    topSpacing: document.querySelector("#header").offsetHeight + 20,
    bottomSpacing: 20
});

sticky();

function sticky() {
    (window.innerWidth > 1199) ? sidebar.updateSticky() : sidebar.destroy();
}

window.addEventListener("resize", function () {
    sticky();
})