$(function() {
    $('.toggles button').click(function() {
        let getID = this.id;
        let getCurrent = $('.posts .' + getID);

        $('.post').not(getCurrent).hide(500);
        getCurrent.show(500);
    });

    $('#show-all').click(function() {
        $('.post').show(500);
    });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 8
  });
});

if ($(window).width() < 640) {
    $(".owl-carousel").owlCarousel({
        items: 4
    });
}