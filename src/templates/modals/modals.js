const tabLinkModal = $('.modal-registration__tabs_link');
const tabContentModal = $('.form-registration');

tabLinkModal.on('click', function (e) {
    e.preventDefault();
    let thisTabContentModal = $(this).attr('href');
    tabLinkModal.removeClass('active');
    $(this).addClass('active');
    tabContentModal.removeClass('active');
    $(thisTabContentModal).addClass('active');
});



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