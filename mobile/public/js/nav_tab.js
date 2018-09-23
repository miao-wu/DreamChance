$(document).ready(function() {

	$(document).scroll(function() {
		var $scltop = $(window).scrollTop();
		var $navH = $('#nav').height();
		if ($scltop > $navH) {
			//scroll
			$('#nav').addClass('nav_scroll');
            $('.nav_tab').removeClass('normal').addClass('scroll');
		}else{
			//normal
			$('#nav').removeClass('nav_scroll');
			$('.nav_tab').removeClass('scroll').addClass('normal');
		};
	});

	$('.nav_tab').on('click', function() {
		$('.nav_list').slideToggle('fast');
	});

});