const fastDepositItem = $('.modal-deposit_grid_item');

fastDepositItem.on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        fastDepositItem.removeClass('active');
        $(this).removeClass('active');
    } else {
        fastDepositItem.removeClass('active');
        $(this).addClass('active');
    }
});