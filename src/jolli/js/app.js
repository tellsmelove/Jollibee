var overlay = document.getElementById('overlay');
$(document).ready(() => {
    var navbar = $('#navbar');
    var toggle = $('[data-toggle]');
    var close = $('.fa-times');

    toggle.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });
    close.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });
    
    var swiper = new Swiper('.swiper-main', {
        spaceBetween: 30,
        effect: 'fade',
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });
    var person_slider = new Swiper('.swiper-person', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.pagination-person',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-toi',
            prevEl: '.swiper-button-lui',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        }
    });
    var person_slider = new Swiper('.swiper-newfood', {
        simulateTouch: false,
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 40,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.swiper-button-toi',
                    prevEl: '.swiper-button-lui',
                },
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.swiper-button-toi',
                    prevEl: '.swiper-button-lui',
                },
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.swiper-button-toi',
                    prevEl: '.swiper-button-lui',
                },
            },
        }
    });

    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
    $('.number-spinner button').on('click', function (e) {
        e.preventDefault();
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });
})
