$(function () {

    'use strict';



    $('.section__slider-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
    });

    $('.section__slider-5').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
    });

    $('.section__slider-6').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        fade: false,
        arrows: true,
        dots: false,
    });



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