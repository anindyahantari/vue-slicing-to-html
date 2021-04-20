$(document).ready(function() {
    $('.testimonials').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.slider-next'),
        prevArrow: $('.slider-prev'),
        dots: true
      });

});