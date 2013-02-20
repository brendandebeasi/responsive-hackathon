$(document).ready(function() {
    $("#slideToggle").pageslide({ direction: "right", modal: true });
    $('body').click(function() {
        $.pageslide.close();
    });

    $("#myCarousel").swiperight(function() {
        $("#myCarousel").carousel('prev');
    });
    $("#myCarousel").swipeleft(function() {
        $("#myCarousel").carousel('next');
    });
});