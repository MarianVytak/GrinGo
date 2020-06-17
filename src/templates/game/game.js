const gameSettingsLink = $('.game__settings_link');
gameSettingsLink.on('click', function (e) {
    e.preventDefault();
    let gameSettingsContent = $(this).attr('href');
    $(this).toggleClass('active');
    $(gameSettingsContent).toggleClass('active');
    if ($('.game').hasClass('active') && $('.game__sidebar').hasClass('active')) {
        $('.game__area').addClass('active');
    } else {
        $('.game__area').removeClass('active');
    }
    if ($('.game').hasClass('active')) {
        $('body').addClass('fancybox-active');
    } else {
        $('body').removeClass('fancybox-active');
    }
});