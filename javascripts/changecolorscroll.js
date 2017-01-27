$(window).scroll(function() {
    if ($(".navbar-wagon").offset().top > 50) {
        $(".test").css('color', 'green');
    } else {
        $(".test").css('color', 'white');
    }
});
