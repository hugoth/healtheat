$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 50) {
                    $("nav").css('background-color', 'rgba(255, 255, 255, 0.7)')
                    $(".change").css('color', '#333333');
                } else {
                    $("nav").css('background-color', 'transparent');
                    $(".change").css('color', '#01CDA4');
                }
            });
        });





// $(document).ready(function(){
//   if (window.matchMedia("(min-width: 600px)").matches) {
//     $("nav").css('background-color', 'rgba(255, 255, 255, 0.7)')
//     } else {
//     $("nav").css('background-color', 'white');

//   }
// });
