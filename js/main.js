$(document).ready(function() {
	var waypoints = $('.content').waypoint({
		handler: function() {
			$(this.element).addClass('inview');
		},
		offset: '50%'
	});

	$('#the-bomb .content').waypoint(function() {
	    $(this.element).addClass('inview');
	}, {offset: 900});

	$('.help').click(function() {
		var curSection = $(this).parents('section').attr('id');
		$('#' + curSection + '-modal').toggleClass('is-open');
	});

	$('.button').click(function() {
		$(this).parents('.modal').toggleClass('is-open');
	});
});
