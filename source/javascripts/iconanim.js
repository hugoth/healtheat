$(document).ready(function (){

  $('.paragraphe').css('opacity', '0');

  $('.backgroundicones').waypoint(function() {
    $('.paragraphe').addClass('animated fadeInUp');
    $('.paragraphe').css('opacity', '1');
      $('imagesicones').delay(100).queue(function () {
        $(this).addClass('animated fadeInUp');
        $(this).css('opacity', '1');
  }, { offset: '100%' });
  });
});
