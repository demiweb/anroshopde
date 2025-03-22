var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


//video


$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);

});


$('.single-faq__head').click(function () {
    $(this).closest('.single-faq').toggleClass(' open ');
    //$(this).siblings().removeClass(' active ');

    if ($(this).closest('.single-faq').hasClass('open')) {
        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideDown();
    } else {
        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideUp();
    }

    return false;
});
// control footer
let hh = $('header').outerHeight();
document.body.style.setProperty('--headerheight', `${hh}px`);


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

// header

let menuHovering = [...document.querySelectorAll('.header-menu > ul > li.menu-item-has-children')];

function hoveringMenuDesk() {
    if (menuHovering.length) {
        let back = document.querySelector('.header-backplate');

        menuHovering.forEach((men) => {
            men.addEventListener('mouseover', () => {
                back.classList.add('show');
            });
            men.addEventListener('mouseout', () => {
                back.classList.remove('show');
            });
        })
    }
}

hoveringMenuDesk();
// header

// footer

let footerTopMargin = document.querySelector('.footer-top');

function footerTopControl() {
    if (footerTopMargin) {
        let heightTop = footerTopMargin.offsetHeight;
        console.log(heightTop);
        footerTopMargin.style.setProperty('--mt', `${(heightTop / 2) * (-1)}px`);
    }
}

footerTopControl();
// footer

let menuOption = [...document.querySelectorAll('.header-menu .menu>ul>li.menu-item-has-children>a')];

function controlMenuOpen() {
    if (menuOption.length) {
        menuOption.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.menu-item-has-children').classList.toggle('open');
            })
        })
    }
}

controlMenuOpen();

let heroSlider1 = [...document.querySelectorAll('.home-hero-section__slider')];

function startheroSlider1() {
    if (heroSlider1.length) {
        heroSlider1.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldNext = sld.querySelector('.slider-btn--next');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: 10,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: false,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 14,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                }


            });


        })
    }
}

startheroSlider1();

let rowSlider = [...document.querySelectorAll('.row-block')];

function startRowSlider1() {
    if (rowSlider.length) {
        rowSlider.forEach((sld) => {
            if (sld.querySelector('.row-block__slider')) {


                let sldCont = sld.querySelector('.swiper');
                let sldPrev = sld.querySelector('.slider-btn--prev');
                let sldNext = sld.querySelector('.slider-btn--next');
                let pagin = sld.querySelector('.dots');
                let amount = 6;
                if (sld.querySelector('.home-hero-section__item')) {
                    amount = 4;
                }
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    grabCursor: true,
                    slidesPerView: amount,
                    slidesPerGroup: 1,
                    speed: 600,

                    followFinger: true,
                    allowTouchMove: true,
                    threshold: 10,
                    touchMoveStopPropagation: false,
                    touchStartPreventDefault: true,
                    touchStartForcePreventDefault: false,

                    resistance: true,
                    resistanceRatio: 0.3,
                    cssMode: false,
                    navigation: {
                        nextEl: sldNext,
                        prevEl: sldPrev,
                    },
                    autoplay: false,
                    spaceBetween: 0,
                    pagination: {
                        el: pagin,
                        type: 'bullets',
                        bulletActiveClass: 'active',
                        bulletClass: 'single-dot',
                        bulletElement: 'div',
                        clickable: true,
                        currentClass: 'current',
                        spaceBetween: 0,
                    },
                    breakPoints: {
                        767: {
                            slidesPerView: 2,
                        }
                    }


                });

            }
        })
    }
}

startRowSlider1();



