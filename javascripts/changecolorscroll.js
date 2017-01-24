$(window).scroll(function() {
    if ($(".navbar-wagon").offset().top > 50) {
        $("nav > a").css('color', 'green');
    } else {
        $("nav > a").css('color', 'white');
    }
});
