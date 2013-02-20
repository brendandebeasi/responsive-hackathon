$(document).ready(function() {
    $("#slideToggle").pageslide({ direction: "right", modal: true });
    $('body').click(function() {
        $.pageslide.close();
    });

	$(".carousel-vertical").carouFredSel({
		direction: "up",
		scroll: "linear",
		width: "variable"
	});

});