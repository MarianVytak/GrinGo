$('.section-1__slider').slick({
    centerMode: true,
    centerPadding: '10vw',
    slidesToShow: 1,
    arrows: false,
    dots: true,
    focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerPadding: '0'
                }
            }
        ]
});