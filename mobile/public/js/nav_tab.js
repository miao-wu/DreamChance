$(document).ready(function() {

	$(document).scroll(function() {
		var $scltop = $(window).scrollTop();
		var $navH = $('#nav').height();
		if ($scltop > $navH) {
			//scroll
			$('#nav').addClass('nav_scroll');
            $('.nav_tab').html('<img src="public/img/nav_collpase_red.png" alt="img">');
		}else{
			//normal
			$('#nav').removeClass('nav_scroll');
			$('.nav_tab').html('<img src="public/img/nav_collpase_white.png" alt="img">');
		};
	});

	$('.nav_tab').on('click', function() {
		$('.nav_list').slideToggle('fast');
	});

});