$(document).ready(function() {

	$('.nav_this_page').addClass('normal_hover');
    TabNormalNav();
	$(document).scroll(function() {
		var $scltop = $(window).scrollTop();
		if ($scltop >100) {
			//scroll
			$('#nav').css({
				'background-color':'#fff',
				'border-bottom':'1px solid #D1D1D1'
			});
			$('.nav_list_wrap').removeClass('nav_normal').addClass('nav_scroll');
			TabScrollNav();
		}else{
			//normal
			$('#nav').css({
				'background-color':'transparent',
				'border-bottom':'none'
			});
			$('.nav_list_wrap').removeClass('nav_scroll').addClass('nav_normal');
			TabNormalNav();
		};
	});

	function TabScrollNav(){
		$('.nav_this_page').removeClass('normal_hover').addClass('scroll_hover');
		$.each($('.nav_list'), function() {
			$(this).on('mouseenter', function() {
				$(this).removeClass('normal_hover').addClass('scroll_hover');
			}).on('mouseleave', function() {
				$(this).removeClass('scroll_hover');
				$('.nav_this_page').addClass('scroll_hover');
			});
		});
	};

	function TabNormalNav(){
		$.each($('.nav_list'), function() {
			$('.nav_this_page').removeClass('scroll_hover').addClass('normal_hover');
			$(this).on('mouseenter', function() {
				$(this).removeClass('scroll_hover').addClass('normal_hover');
			}).on('mouseleave', function() {
				$(this).removeClass('normal_hover');
				$('.nav_this_page').addClass('normal_hover');
			});
		});
	};

	$('.ft_icons').on('mouseenter',function() {
		$(this).prev('div').toggleClass('hidden');
	}).on('mouseleave', function() {
		$(this).prev('div').addClass('hidden');
	});
});