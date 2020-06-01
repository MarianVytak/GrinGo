$(function () {

    'use strict';



    $('.section__slider-3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15vw',
                }
            }
        ]
    });

    $('.section__slider-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '15vw',
                    }
                }
            ]
    });

    $('.section__slider-5').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15vw',
                }
            }
        ]
    });

    $('.section__slider-6').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15vw',
                }
            }
        ]
    });



    const scrollTop = $('.scroll-top');
    scrollTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    $(document).on('scroll', function () {
        const scrollTopStart = $('.section-5').offset().top;

        if (scrollTop.offset().top >= scrollTopStart) {
            scrollTop.addClass('active');
        } else {
            scrollTop.removeClass('active');
        }
    })



    // $('.section-1__slider_card').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     focusOnSelect: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     fade: false,
    //     arrows: false,
    //     dots: true,
    //     asNavFor: '.section-1__slider_img',
    //     appendDots: $('.section-1__slider__counter'),
    //     customPaging: function (slider, i) {
    //         return '<span class="slide-current">' + (i + 1) + '</span>' + '<span>из</span>' + '<span class="slide-length">' + slider.slideCount +'</span>';
    //     },
    //     responsive: [
    //         {
    //             breakpoint: 9999,
    //             settings: "unslick"
    //         },
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: true,
    //             }
    //         }
    //     ]
    // });



});