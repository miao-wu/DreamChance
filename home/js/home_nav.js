$(document).ready(function() {

	$('.nav_this_page').addClass('normal_hover');
    $('.nav_wrap').css({
    	'background-color':'#fff',
    	'border-bottom':'1px solid #D1D1D1'
    });
    $('.nav_list_wrap').removeClass('nav_normal').addClass('nav_scroll');
    TabScrollNav();

	function TabScrollNav(){
		$('.nav_this_page').removeClass('normal_hover').addClass('scroll_hover');
		$.each($('.nav_list'), function() {
			$(this).on('mouseenter', function() {
				$(this).removeClass('normal_hover').addClass('scroll_hover');
			}).on('mouseleave', function() {
				$(this).removeClass('scroll_hover');
				$('.nav_this_page').removeClass('normal_hover').addClass('scroll_hover');
			});
		});
	};

	$('.ft_icons').on('mouseenter',function() {
		$(this).prev('div').toggleClass('hidden');
	}).on('mouseleave', function() {
		$(this).prev('div').addClass('hidden');
	});
});