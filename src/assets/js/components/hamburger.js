const hamburger = $('.hamburger');
const sideMenu = $('.side-menu');

hamburger.on('click', function(){
    hamburger.toggleClass('hamburger-active');
    sideMenu.toggleClass('active');
});