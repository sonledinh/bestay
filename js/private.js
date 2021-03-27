
$('.slide-part').slick({
    autoplay: true,
    arrow: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 1,
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

$('.slide-style').slick({
    autoplay: true,
    arrow: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
}); 


$( ".clc-child" ).click(function() {
  $(this).next().toggle();
});

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});



$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $( window ).height() - 70;
         if ($(window).scrollTop() > 50) {
             $('.header-top, .sub-menu').addClass('fixed');
         }
         else {
             $('.header-top, .sub-menu').removeClass('fixed');
         }
    });
});