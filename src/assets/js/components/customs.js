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



    // View All Cards
    const viewAll = $('.view-all__link');
    const viewAllText = $('.view-all__text');

    viewAll.on('click', function (e) {
        e.preventDefault();
        let thisViewAll = $(this).attr('href');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(thisViewAll + ' ' + '.card').hide();
            viewAllText.text('Показать больше');
        } else {
            $(this).addClass('active');
            $(thisViewAll + ' ' + '.card').show();
            viewAllText.text('Показать меньше');
        }
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



    // Accordion
    let accordionLink = $('.accordion__link');
    // let accordionContent = $('.accordion__content');

    accordionLink.on('click', function (e) {
        e.preventDefault();
        let thisAccordionContent = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisAccordionContent).slideToggle();
    });



});