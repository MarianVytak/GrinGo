// Preloader
$(window).on("load", function() {
    $(".preloader__load").fadeOut();
    $(".preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
        "overflow": "visible"
    });
});