$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function(){
	$('.nav-link').click(function(){
		if(!$(this).hasClass('active')){
			var curr = '.'+$('a.nav-link.active').attr('href').substr(1,$('a.nav-link.active').attr('href').length);
			$(curr).removeClass('active').addClass('hidden');
			$('a.nav-link.active').removeClass('active');
			$(this).addClass('active');
			var container = '.'+$(this).attr('href').substr(1,$(this).attr('href').length);
			$(container).removeClass('hidden').addClass('active');
		}
	});
});