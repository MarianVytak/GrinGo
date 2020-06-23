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

    $('.balance-3__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        fade: false,
        arrows: false,
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



    // View All Cards
    const viewAll = $('.view-all__link');

    viewAll.on('click', function (e) {
        e.preventDefault();
        let thisViewAll = $(this).attr('href');
        let thisViewAllText = $(this).children('.view-all__text');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(thisViewAll + ' ' + '.card').hide();
            thisViewAllText.text('Показать больше');
        } else {
            $(this).addClass('active');
            $(thisViewAll + ' ' + '.card').show();
            thisViewAllText.text('Показать меньше');
        }
    });



    // Scroll Top
    const scrollTop = $('.scroll-top');
    if (scrollTop.length > 0) {
        scrollTop.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });
        $(document).on('scroll', function () {
            const scrollTopStart = $('.all-games').offset().top;

            if (scrollTop.offset().top >= scrollTopStart) {
                scrollTop.addClass('active');
            } else {
                scrollTop.removeClass('active');
            }
        })
    }



    // Dropdown
    const dropdownLink = $('.js-dropdown-link');
    const dropdownContent = $('.js-dropdown-content');

    dropdownLink.on('click', function (e) {
        e.preventDefault();
        let thisDropdownContent = $(this).attr('href');
        if ($(thisDropdownContent).hasClass('active')) {
            $('body').removeClass('dropdown-active');
            $(this).removeClass('active');
            dropdownContent.removeClass('active');
            $(thisDropdownContent).removeClass('active');
        } else {
            $('body').addClass('dropdown-active');
            $(this).addClass('active');
            dropdownContent.removeClass('active');
            $(thisDropdownContent).addClass('active');
        }
        $(document).mouseup(function (e) {
            let container = $('.dropdown');
            if (container.has(e.target).length === 0){
                dropdownContent.removeClass('active');
                $(thisDropdownContent).removeClass('active');
            }
        });
    });

    $('.dropdown__content_close').on('click', function (e) {
        e.preventDefault();
        let thisDropdownContent = $(this).attr('href');
        $(thisDropdownContent).removeClass('active');
        $('body').removeClass('dropdown-active');
    });



    // Sort Label
    const sortItem = $('.dropdown__content_list_item_link');

    sortItem.on('click', function (e) {
        e.preventDefault();
        let sortItemText = $(this).html();
        let thisSortLabel = $(this).attr('data-target');
        console.log(thisSortLabel);
        sortItem.removeClass('active');
        $(this).addClass('active');
        $(thisSortLabel).html(sortItemText);
    });



    // Accordion
    const accordionLink = $('.accordion__link');

    accordionLink.on('click', function (e) {
        e.preventDefault();
        let thisAccordionContent = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisAccordionContent).slideToggle();
    });



    // Custom Scroll
    $('.custom-scroll').mCustomScrollbar({
        theme:"minimal"
    });



});