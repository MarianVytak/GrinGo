const hamburger = $('.hamburger');
const sideMenu = $('.side-menu');
const fastDeposit = $('.fast-deposit');

hamburger.on('click', function(){
    hamburger.toggleClass('hamburger-active');
    sideMenu.toggleClass('active');
    fastDeposit.toggleClass('active');
});