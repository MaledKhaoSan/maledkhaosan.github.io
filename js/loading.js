
$(document).ready(function() {
	// Will remove overlay for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
		document.getElementById("loading").style.display = "none";
	}, 9900);

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 9900)
	})
})

window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#Introduction';
		window.location.reload();
	}
}

function Reloading() {
	window.location.reload();
}

var refresh = window.localStorage.getItem('refresh');
console.log(refresh);
if (refresh===null){
	window.location.reload();
	window.localStorage.setItem('refresh', "1");
}
    
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  window.requestAnimationFrame();
}
