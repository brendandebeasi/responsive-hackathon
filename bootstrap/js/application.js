$(document).ready(function() {
    $("#slideToggle").pageslide({ direction: "right", modal: true });
    $('body').click(function() {
        $.pageslide.close();
    })
});