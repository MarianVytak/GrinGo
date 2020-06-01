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



    // Scroll Top
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



    // Dropdown
    let dropdownLink = $('.js-dropdown-link');
    let dropdownContent = $('.js-dropdown-content');

    dropdownLink.on('click', function (e) {
        e.preventDefault();
        let thisDropdownContent = $(this).attr('href');
        if ($(thisDropdownContent).hasClass('active')) {
            dropdownContent.removeClass('active');
            $(thisDropdownContent).removeClass('active');
        } else {
            dropdownContent.removeClass('active');
            dropdownContent.removeClass('active');
            $(thisDropdownContent).addClass('active');
            $(thisDropdownContent).addClass('active');
        }
    });

    // Sort Label
    let sortLabel = $('.sort-label');
    let sortItem = $('.modal-search__settings_list_item_link');

    sortItem.on('click', function (e) {
        e.preventDefault();
        let sortItemText = $(this).text();
        sortItem.removeClass('active');
        $(this).addClass('active');
        sortLabel.text(sortItemText)
    });



});