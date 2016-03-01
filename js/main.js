$(document).ready(function() {
  $('a[href="#"]').click(function (e){
    e.preventDefault();
  });

  // menu

  $('.burger').click(function() {
  	$('.navbar, .burger').toggleClass('active');
    $('.backdrop').toggle();
  });

  $('.backdrop').click(function(event) {
     $('.navbar, .burger').removeClass('active');
     $(this).fadeOut();
  });


  $('.portfolio-pager a').click(function(e) {
    e.preventDefault();
    $('.portfolio-single .img-wrap').removeClass('fadeInLeft').addClass('fadeOutLeft');
    $('.portfolio-single .box').removeClass('fadeInRight').addClass('fadeOutRight');
    var href = $(this).attr('href');
    setTimeout(function() {
      window.location = href;
    }, 700);
  });


 // gallery show hide

  $('.gallery-btn').click(function() {
     
    $('#gallery').fadeIn(800);
 
  });

  $('#gallery-close').click(function() {
    $('#gallery').fadeOut(800);
  });

  $('#lightbox-close').click(function() {
    $('.lightbox').removeClass('active');
    $('#gallery').hide();
  });


  if($(window).width() > 767){
    $('.gallery-list a').click(function(e){
    		e.preventDefault();
        setTimeout(function(){
    		  $('.lightbox').addClass('active');		
        }, 380);
     });
  }


});