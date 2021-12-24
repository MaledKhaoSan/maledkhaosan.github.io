	if(window.location.hash) {
		// Fragment exists
		var refresh = window.localStorage.getItem('refresh');
		console.log("with Hash");
		if (refresh===null){
			window.location.reload();
			window.localStorage.setItem('refresh', "1");
		}
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
			window.requestAnimationFrame();
		}
		$(window).bind('load', function() {
			$('.overlay, body').addClass('loaded');
			setTimeout(function() {
				$('.overlay').css({'display':'none'})

			}, 2900)
		});

	  } else {
		// Fragment doesn't exist
	  }


$(document).ready(function() {
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
			if(!window.location.hash) {
				window.location = window.location + '#Introduction';
				window.scrollTo(0, 0);
				window.requestAnimationFrame();
				
				var refresh = window.localStorage.getItem('refresh');
				    console.log(refresh);
				    if (refresh===null){
					window.location.reload();
					window.localStorage.setItem('refresh', "1");
				    }
			}

		}, 2900)
	});
})

