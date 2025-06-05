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
    // $(this).closest('.single-faq').toggleClass(' open ');
    //$(this).siblings().removeClass(' active ');

    if ($(this).closest('.single-faq').hasClass('open')) {
        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideUp();
        $(this).closest('.single-faq').removeClass('open');
    } else {
        $('.single-faq.open').find('.single-faq__cont').stop().slideUp();
        $('.single-faq.open').removeClass('open');

        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideDown();
        $(this).closest('.single-faq').addClass('open');

    }

    return false;
});
let hh = $('header').outerHeight();
// control footer
function updateHeaderHeight() {
    hh = $('header').outerHeight();
    document.body.style.setProperty('--headerheight', `${hh}px`);
}
updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);


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
        document.querySelector('.footer').style.setProperty('--mt', `${(heightTop / 2) * (-1)}px`);
    }
}

footerTopControl();



let footerMen = [...document.querySelectorAll('.footer-column')];

function controlFooterMenu() {
    if (footerMen.length) {
        footerMen.forEach((block) => {
            let btn = block.querySelector('span');
            btn.addEventListener('click', () => {
                block.classList.toggle('open');
            })
        })
    }
}

controlFooterMenu();
// control footer
// footer

let menuOption = [...document.querySelectorAll('.header-menu >ul li.menu-item-has-children>a')];

function controlMenuOpen() {
    if (menuOption.length) {
        menuOption.forEach((btn) => {
            let newArrMob = document.createElement('div');
            newArrMob.classList.add('arr');
            btn.appendChild(newArrMob);

            newArrMob.addEventListener('click', (e) => {

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

let heroSlider2 = [...document.querySelectorAll('.home-hero-section__slider-mob')];

function startheroSlider2() {
    if (heroSlider2.length) {
        heroSlider2.forEach((sld) => {
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

startheroSlider2();

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
                    slidesPerView: 2,
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
                    breakpoints: {
                        767: {
                            slidesPerView: amount,
                        }
                    }


                });

            }
        })
    }
}

startRowSlider1();

let articleSlider = [...document.querySelectorAll('.row-block__slider_in__post')];

function startArticleSlider1() {
    if (articleSlider.length) {
        articleSlider.forEach((sld) => {



                let sldCont = sld.querySelector('.swiper');
                let sldPrev = sld.querySelector('.slider-btn--prev');
                let sldNext = sld.querySelector('.slider-btn--next');
                let pagin = sld.querySelector('.dots');
                let amount = 3;
                if (sld.querySelector('.home-hero-section__item')) {
                    amount = 4;
                }
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    grabCursor: true,
                    slidesPerView: 2,
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
                    spaceBetween: 10,
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
                    breakpoints: {
                        767: {
                            slidesPerView: amount,
                            spaceBetween: 20,
                        }
                    }


                });

        })
    }
}

startArticleSlider1();

let cartSlider = [...document.querySelectorAll('.cart-slider__wrap')];

function startCartSlider1() {
    if (cartSlider.length) {
        cartSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldNext = sld.querySelector('.slider-btn--next');
            let pagin = sld.querySelector('.dots');
            let amount = 6;

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 2,
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
                spaceBetween: 20,
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
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }


            });


        })
    }
}

startCartSlider1();

let categorySlider = [...document.querySelectorAll('.category-page__head')];

function startCategorySlider1() {
    if (categorySlider.length) {
        categorySlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldNext = sld.querySelector('.slider-btn--next');
            let pagin = sld.querySelector('.dots');
            let amountDesk = 9;
            if (sld.closest('.category-page').classList.contains('category-page--row')) {
                amountDesk = 5;
            }
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 'auto',
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
                spaceBetween: 5,
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
                breakpoints: {
                    767: {
                        slidesPerView: amountDesk,
                        spaceBetween: 10,
                    }
                }


            });


        })
    }
}

startCategorySlider1();


let productPageSlider = [...document.querySelectorAll('.product-main__cont')];
let swiperProd1 = '';
function startProductPageSlider() {
    if (!productPageSlider.length) {
        console.log('nema slider');

    } else {
        console.log('e slider');
        productPageSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.product-main__slider .swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');
            let sldThumb = sld.querySelector('.product-main__thumbs .swiper');
            let classIs = 'solo-';
            let desktopGap = 6;
            let desktopAmount = 2;
            let cntr = true;
            let haveArrows = false;
            let thumbsSlider = false;
            var swiperThumb = new Swiper(sldThumb, {
                speed: 600,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                direction: 'horizontal',
                grabCursor: false,
                loop: false,
                draggable: true,
                allowTouchMove: true,
                centeredSlides: false,
                spaceBetween: 5,
                resistance: true,
                resistanceRatio: 0.3,
                centeredSlidesBounds: true,
                // initialSlide: 2,
                slideToClickedSlide: true,
                cssMode: false,
                breakpoints: {
                    767: {
                        slidesPerView: 9,
                        direction: 'vertical',
                        spaceBetween: 15,
                    }
                }

            });

            swiperProd1 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                thumbs: {
                    swiper: swiperThumb,
                },
                effect: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: haveArrows,
                centeredSlides: cntr,
                autoplay: false,
                spaceBetween: 10,
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

                breakpoints: {
                    767: {
                        spaceBetween: 10,
                    }
                }


            });


        })


    }
}

startProductPageSlider();


let aboutSlider = [...document.querySelectorAll('.other-shops__list')];

function startAboutSlider1() {
    if (aboutSlider.length) {
        aboutSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let sldNext = sld.querySelector('.slider-btn--next');
            let pagin = sld.querySelector('.dots');
            if (window.innerWidth < 768) {
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    grabCursor: true,
                    slidesPerView: 2,
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
                    spaceBetween: 20,
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


                });
            }
        })
    }
}


startAboutSlider1();

// scrollbtn
let scrlBtn = [...document.querySelectorAll('.scroll-to')];

function controlScrollBtn() {
    scrlBtn.forEach((btn) => {
        let lnk = btn.dataset.to;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`.${lnk}`).offset().top - hh
            }, 600);

        })
    })
}

controlScrollBtn();


// dropdown
let dropBlock = [...document.querySelectorAll('.prod-drop')];

function controlDrop() {
    if (dropBlock.length) {
        dropBlock.forEach((block) => {
            let hd = block.querySelector('.prod-drop__head');
            hd.addEventListener('click', () => {
                block.classList.toggle('open');
            })
        })
    }
}

controlDrop();

let accBlock = [...document.querySelectorAll('.woocommerce-MyAccount-navigation')];

function controlAccOpen() {
    if (accBlock.length) {
        accBlock.forEach((block) => {
            let hd = block.querySelector('.acc-menu-opener');
            let listMenus = block.querySelector('.is-active a');
            hd.innerHTML = listMenus.innerHTML;
            hd.addEventListener('click', () => {
                block.classList.toggle('open');
            })
        })
    }
}

controlAccOpen();

function ifHaveShips(elem, list) {
    if (document.querySelector(elem) && document.querySelector(list)) {
        const sections = document.querySelectorAll(elem);
        const menuItems = document.querySelectorAll(`${list} li a`);
        let hb = document.querySelector('.block-fixed-menu').offsetHeight;
        if (hb) {

        } else {
            hb = 0;
        }
        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = window.scrollY + sec.getBoundingClientRect().top;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset - 300 && top < offset + height - 200) {

                        const target = menuItems[index];
                        activeLink(target);
                        if (index === 0) {
                            document.querySelector('.block-fixed-menu').classList.add('hide');
                        } else {
                            document.querySelector('.block-fixed-menu').classList.remove('hide');
                        }

                    } else {
                    }
                })
            };
            sections.forEach((sec, index) => {
                let top = window.scrollY;
                let offset = window.scrollY + sec.getBoundingClientRect().top;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top >= offset - 300 && top < offset + height - 200) {
                    const target = menuItems[index];
                    activeLink(target);
                    if (index === 0) {
                        document.querySelector('.block-fixed-menu').classList.add('hide');
                    } else {
                        document.querySelector('.block-fixed-menu').classList.remove('hide');
                    }
                } else {
                }
            })
        }

        function activeLink(li) {
            menuItems.forEach((item) => item.classList.remove('active'));

            if (li) {
                li.classList.add('active');
            }

        }


        onScroll2();
        $(document).on("scroll", onScroll2);
// Get all sections that have an ID defined


// Add an event listener listening for scroll
        menuItems.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let link = sections[k];
                document.body.classList.remove('no-scroll');
                header.classList.remove('active');
                burger.forEach((brg) => {
                    brg.classList.remove('active');
                });
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top - hh - hb - 20
                }, 600);
            })
        });
    }
}

ifHaveShips('.page-section', '.block-fixed-menu__cont');
// ifHaveShips();

// cart
let btnCart = [...document.querySelectorAll('.btn-cart')];

function controlCart() {
    if (btnCart.length) {
        let cartSection = document.querySelector('.cart-section');
        let close1 = cartSection.querySelector('.cls');
        let close2 = cartSection.querySelector('.cart-section__back');
        btnCart.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                cartSection.classList.add('visible');
                document.querySelector('body').classList.add('no-scroll');
            })
        });
        close1.addEventListener('click', () => {
            cartSection.classList.remove('visible');
            document.querySelector('body').classList.remove('no-scroll');
        });
        close2.addEventListener('click', () => {
            cartSection.classList.remove('visible');
            document.querySelector('body').classList.remove('no-scroll');
        });

    }
}

controlCart();

// tabs

let ownerTabs = [...document.querySelectorAll('.tabs-owner')];

function controlTabs() {
    if (ownerTabs.length) {
        ownerTabs.forEach((tab) => {
            let tabOpen = [...tab.querySelectorAll('.tab-btn')];
            let singleTab = [...tab.querySelectorAll('.single-tab')];

            tabOpen.forEach((btn, k) => {
                btn.addEventListener('click', () => {
                    if (!btn.classList.contains('active')) {
                        tabOpen.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        singleTab.forEach((btn3) => {
                            btn3.classList.remove('active');
                        });
                        btn.classList.add('active');
                        singleTab[k].classList.add('active');
                    }
                })
            });
            singleTab.forEach((tab, l) => {
                if (tab.querySelector('.single-tab__head')) {
                    tab.querySelector('.single-tab__head').addEventListener('click', () => {
                        tabOpen[l].click();
                    })
                }

            })
        })
    }
}

controlTabs();

// tabs


//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let btnClose = [...document.querySelectorAll('.btn-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();


                modals.forEach((mod) => {

                    if (mod.dataset.modal === data) {
                        header.classList.remove('active');
                        document.body.classList.add('no-scroll');
                        if (document.querySelector('.modal-window.visible')) {
                            document.querySelector('.modal-window.visible').classList.remove('visible');
                        }
                        mod.classList.add('visible');
                        burger.forEach((brg) => {
                            brg.classList.remove('active');
                        })

                    }
                });

            })
        });


        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }

            })
        });

        btnClose.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');


            })
        });

        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

            })
        });


    }
}

controlModal();
$('body').on('click', '.btn-close', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.modal-window.visible').removeClass('visible');
    document.body.classList.remove('no-scroll');
})

//modal
let filterOpener = document.querySelector('.filter-open');
function controlFilterOpener() {
    if (filterOpener) {
        let filt = document.querySelector('.category-page-content__left');
        let filtClose = document.querySelector('.category-page-content__left .bot-filt .btn-cls');
        let filtApply = document.querySelector('.category-page-content__left .bot-filt .btn-app');

        filterOpener.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            filt.classList.add('open');
            document.querySelector('body').classList.add('no-scroll');
        });
        filtClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            filt.classList.remove('open');
            document.querySelector('body').classList.remove('no-scroll');
        });
        filtApply.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            filt.classList.remove('open');
            document.querySelector('body').classList.remove('no-scroll');
            document.querySelector('.woof_submit_search_form').click();
        });
    }
}

controlFilterOpener();

let canvasPage = document.querySelector('.canvasproduct');

function controlCanvasPage() {
    if (canvasPage) {
        if (document.querySelector('.product-main__form form.cart .pewc-product-extra-groups .pewc-option-list .pewc-item-field-wrapper p.pewc-description')) {
            let alink = document.querySelector('.product-main__form form.cart .pewc-product-extra-groups .pewc-option-list .pewc-item-field-wrapper p.pewc-description a').cloneNode(true);
            document.querySelector('.product-main__form form.cart .pewc-product-extra-groups .pewc-option-list .pewc-field-label').appendChild(alink);
        }
    }
}
controlCanvasPage();


let linkRateBtn = [...document.querySelectorAll('.rate-link')];

function controlLinkRateBtn() {
    linkRateBtn.forEach((btn) => {
        let lnk = 0;
        let lnkTab = 0;
        if (document.querySelector('.rate-block')) {
             lnk = document.querySelector('.rate-block');
            lnkTab = document.querySelector('.rate-tab');

        } else {
            lnk = document.querySelector('#reviews');
            lnkTab = document.querySelector('.block-fixed-menu__cont');
        }



        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            lnkTab.click();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(lnk).offset().top - hh
            }, 600);

        })
    })
}

controlLinkRateBtn();