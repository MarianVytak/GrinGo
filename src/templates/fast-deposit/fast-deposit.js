$(function () {

    'use strict'

    const fastDepositLink = $('.fast-deposit__dropdown_link .fast-deposit__dropdown_item');
    const fastDepositContent = $('.fast-deposit__dropdown_content');
    const fastDepositItem = $('.fast-deposit__dropdown_content .fast-deposit__dropdown_item');

    fastDepositLink.on('click', function (e) {
        e.preventDefault();
        fastDepositContent.show();
    });
    fastDepositItem.on('click', function (e) {
        e.preventDefault();
        fastDepositContent.hide();
        let thisItem = $(this).html();
        fastDepositLink.html(thisItem);
    });
    $(document).mouseup(function (e) {
        if (fastDepositContent.has(e.target).length === 0){
            fastDepositContent.hide();
        }
    });

});