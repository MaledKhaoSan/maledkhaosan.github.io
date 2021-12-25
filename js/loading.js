
$(document).ready(function() {
	// Will remove overlay for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
		window.location.reload();
	}, 2900);

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
			window.location.reload();
			
		}, 2900)
	})
})




window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Introduction';
		window.location.reload();
	}
}
