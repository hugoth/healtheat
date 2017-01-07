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




  $(document).ready(function() {
    $('.scroll').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('#scrollcommand'); // Page cible
      var speed = 2000; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });
  });
