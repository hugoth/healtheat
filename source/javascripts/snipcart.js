Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');

    var html = $("#cart-content-text").html();
    $(html).insertBefore($("#snipcart-footer"));
});

