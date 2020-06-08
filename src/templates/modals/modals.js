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