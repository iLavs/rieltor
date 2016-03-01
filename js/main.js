$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      autoPlay: true,
      navigation : false, // Show next and prev buttons
      slideSpeed : 1500,
      paginationSpeed : 1400,
      rewindSpeed: 2000,
      pagination: true,
      singleItem:true
    });

  $(function() {
    $('a.anchor-link').bind('click', function(event) {
    var $anchor = $(this);
     $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top + 45
      }, 1250);
      event.preventDefault();
    });

  });

});