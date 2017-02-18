
$(document).ready(function (){

  $('.loadpageleft').css('opacity', '0');
  $(window).load(function(){
    $('.loadpageleft').delay(10000).addClass('animated fadeInLeft');
    $('.loadpageleft').css('opacity', '1');


});
});

$(document).ready(function (){

  $('.loadpageright').css('opacity', '0');
  $(window).load(function(){
    $('.loadpageright').addClass('animated fadeInRight');
    $('.bloadpageright').css('opacity', '1');


});
});
