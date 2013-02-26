$(document).ready(function() {
    $("#slideToggle").pageslide({ direction: "right", modal: true });
    $('body').click(function() {
        $.pageslide.close();
    });

    $(document).ready(function() {
	   $("#myCarousel").swiperight(function() {
	      $("#myCarousel").carousel('prev');
	    });
	   $("#myCarousel").swipeleft(function() {
	      $("#myCarousel").carousel('next');
	   });
	});

	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_navigation').addClass("navbar-fixed-top");	
		} else {
			$('#sticky_navigation').removeClass("navbar-fixed-top");
		}   
	};
	
	$("#myCarousel").imagesLoaded(function(){
		// grab the initial top offset of the navigation 
		sticky_navigation_offset_top = $('#sticky_navigation').position().top;

		// run our function on load
		sticky_navigation();
		
		// and run it again every time you scroll
		$(window).scroll(function() {
			sticky_navigation();
		});
	});

	$(window).resize(function(){
		sticky_navigation_offset_top = $('#sticky_navigation').position().top;
	});

});