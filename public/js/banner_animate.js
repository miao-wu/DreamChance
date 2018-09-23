$(document).ready(function() {
	$('.banner_white').clone().appendTo('.banner_white_wrap');
	
	startAnimate();
	function startAnimate() {
		banAnimate();
		baniconsAnimate();
	}

	function banAnimate() {
		$('.banner_white_wrap').animate({
			'left': '-100%',},
			12000, 'linear',function() {
			$(this).css('left', '0');
			banAnimate();
		});
	};

	function baniconsAnimate() {
		$('.banner_icons').animate({
				'top': '25%',},
				2000, 'linear',function() {
				$(this).animate({'top':'35%'}, 2000,'linear');
				baniconsAnimate();
			});
	};
});