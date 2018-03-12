jQuery(document).ready(function(e) {
	var $ = jQuery.noConflict();
	
		$i = 0;
		customCheckbox = $('.dp_wrap input[type="checkbox"]');
		
			return customCheckbox.each(function(i) {
	
				// the element
				var el = this;
	
				// Hide checkbox
				$(this).hide();
	
				// Replace element
				var rep = $('<a href="#"><span></span></a>').addClass('dp-checkbox').insertAfter(this);
	
				// default state
				if($(this).is(':checked') ) {
					$(rep).addClass('on');
				} else {
					$(rep).addClass('off');
				}
	
				// Click event
				$(rep).click(function(e) {
	
					e.preventDefault();
					
					if( $(el).is(':checked') ) {
						$(el).prop('checked', false);
						$(rep).removeClass('on').addClass('off');
					} else {
						$(el).prop('checked', true);
						$(rep).removeClass('off').addClass('on');
					}
				});
			});
});