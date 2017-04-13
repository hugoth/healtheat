$(document).ready(function (){

  $('.fadeleft').css('opacity', '0');

  $('.backgroundicones').waypoint(function() {
    $('.fadeleft').addClass('animated fadeInLeft');
    $('.fadeleft').css('opacity', '1');
      $('.imagesicones').delay(300).queue(function () {
        $(this).addClass('animated fadeInLeft');
        $(this).css('opacity', '1');
  }, { offset: '100%' });
  });
});

