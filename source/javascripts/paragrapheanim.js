// $(document).ready(function (){

//   $('.paragraphe1').css('opacity', '0');

//   $('.backgroundicones').waypoint(function() {
//     $('.paragraphe1').addClass('animated fadeInUp');
//     $('.paragraphe1').css('opacity', '1');
//       $('.imagesicones').delay(400).queue(function () {
//         $(this).addClass('animated fadeInUp');
//         $(this).css('opacity', '1');
//   }, { offset: '100%' });
//   });
// });


$(document).ready(function (){

  $('.paragraphe1').css('opacity', '0');
  $('.paragraphe2').css('opacity', '0');
  $('.paragraphe3').css('opacity', '0');
  $('.paragraphe4').css('opacity', '0');




  $('.btncommander').waypoint(function() {
    $('.paragraphe1').addClass('animated fadeInUp');
    $('.paragraphe1').css('opacity', '1');

      $('.paragraphe1').delay(500).promise().done(function () {
    $('.paragraphe2').addClass('animated fadeInUp');
    $('.paragraphe2').css('opacity', '1');
    $('.paragraphe2').delay(500).promise().done(function () {
      $('.paragraphe3').addClass('animated fadeInUp');
    $('.paragraphe3').css('opacity', '1');
    $('.paragraphe3').delay(500).promise().done(function () {
      $('.paragraphe4').addClass('animated fadeInUp');
    $('.paragraphe4').css('opacity', '1');
  }, { offset: '-50%' });
  });
});
});
});


