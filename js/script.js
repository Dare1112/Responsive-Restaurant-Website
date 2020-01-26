$(document).ready(function () {

  $('.navbar-toggler').click(function () {

    $('.navbar-toggler').toggleClass('change')

  })

  $(window).scroll(function(){

    let position = $(this).scrollTop();
    
    if(position>= 718){
      $('.nvabar').addClass('navbar-background');
      $('.nvabar').addClass('fixed-top');
    }
    else{
      $('.nvabar').removeClass('navbar-background');
      $('.nvabar').removeClass('fixed-top');
    }
  })

  $('.nava-item a .header-link, #back-to-top').click(function(link){ 
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    },3000);

  })

  $(window).scroll(function(){

    let position = $(this).scrollTop();
    
    if(position>= 718){
      $('#back-to-top').addClass('scrollTop');
      
    }
    else{
      $('#back-to-top').removeClass('scrollTop');
     
    }
  })


  $("header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6,

  });

  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery: {
      enabled: true
    }


  });


});



