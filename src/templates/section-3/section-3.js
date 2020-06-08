// Scroll Section 3
const scrollSection3 = $('.section-3');
const scrollSection3OffsetTop = scrollSection3.offset().top;
const headerHeight = $('.header').height();

$(document).on('scroll', function () {
    let thisScroll = $(this).scrollTop();
    if (thisScroll > scrollSection3OffsetTop - headerHeight) {
        scrollSection3.addClass('active');
    } else {
        scrollSection3.removeClass('active');
    }
});