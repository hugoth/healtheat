//jQuery to collapse the navbar on scroll


$(window).scroll(function() {
    if ($(".navbar-wagon").offset().top > 50) {
        $(".navbar-wagon").css('background-color', 'white');
        $(".navbar-wagon").css('box-shadow', '0 1px 5px 0 rgba(0,0,0,0.07)');
    } else {
        $(".navbar-wagon").css('background-color', 'transparent');
    }
});

