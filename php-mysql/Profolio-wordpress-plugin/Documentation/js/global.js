jQuery(document).ready(function(e) {
    var $j = jQuery.noConflict();
	var $i = 0;
	
	var submenu = '.sub-menu li';
	$j('#main-menu li').not('.sub-menu > li').click(function(e) {
		
		if($j(this).find(submenu).is(':visible')) {
			$j(this).find(submenu).slideUp();
			return;
		}
		
		if($j(submenu).is(':visible') === true ){
			$j(submenu).slideUp();
			$j(this).find(submenu).slideDown();
		} else {
			$j(this).find(submenu).slideDown();
		}
		
			$j('#main-menu > li > ul > li').click(function(e){
				e.stopPropagation();	
			}
		);
	});
	$j('#main-menu li a').click(function(e){
		e.preventDefault();
		$j('html,body').animate({
			scrollTop: $j("" + $j(this).attr('href')).offset().top},
			'slow');
			  
		if($j(this).hasClass('current')){
			$j(this).removeClass('current');
			return;
		} else {
			$j('#main-menu li a').removeClass('current');
			$j(this).addClass('current');
		}
	});
	jQuery('#main-menu').children('li').each(function(length){
		if(jQuery('li').length > 8){
        	jQuery(this).addClass('foot-overflow');
		}
	});
		
});