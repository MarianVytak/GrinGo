$('.section-2__slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    centerPadding: '5vw',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
});