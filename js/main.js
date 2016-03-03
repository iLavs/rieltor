$(document).ready(function() {
   equalheight = function(container){
        var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
        $(container).each(function() {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
     } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
     }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
     }
    });
    }
    $(window).load(function() {
        equalheight('.content-wrap .content, .content-wrap .sidebar');
    });
    $(window).resize(function(){
        equalheight('.content-wrap .content, .content-wrap .sidebar');
    });

  if($(window).width() < 900){
    $('.backdrop').prependTo('body');
  }

  $('.burger').click(function(event) {
      $('.main-nav, .backdrop, .burger').toggleClass('active');
      $('body').addClass('overflow')
  });


  $('.backdrop').click(function(event) {
      $('.main-nav, .backdrop, .burger').toggleClass('active');
      $('body').removeClass('overflow')
  });

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