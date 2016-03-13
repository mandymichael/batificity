$(document).ready(function() {
	var waypoints = $('.content').waypoint({
		handler: function(direction) {
			$(this.element).addClass('inview');
		},
		offset: '50%'
	});

	   $('#the-bomb .content').waypoint(function(event, direction) {
	    $(this.element).addClass('inview');
	  }, {offset: 900});

	$('.help').click(function() {
		var curSection = $(this).parents('section').attr('id');
		$('#' + curSection + '-modal').fadeIn().addClass('is-visible');

	});

	$('.button').click(function() {
		$('.is-visible').fadeOut().removeClass('is-visible');
		var item = $(this).attr('href');

		$('html, body').animate({
	        scrollTop: $(item).offset().top
	    }, 1000);
	})
});
