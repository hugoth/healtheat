$(window).scroll(function() {
    if ($(".navbar-right").offset().top > 50) {
        $(".navbar-right").css('color', 'white');
        } else {
        $(".navbar-right").css('color', '$healthygreen');
    }
});
