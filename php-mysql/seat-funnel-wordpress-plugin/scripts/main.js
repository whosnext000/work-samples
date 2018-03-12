function priceOutput(vol) {
	document.querySelector('#cost').value = vol;
	var priceRange = jQuery('#price-range').val();
    var pId = jQuery('.popup');
    var pClass = jQuery('.popup').attr('class');
    var gId = jQuery('g g');
    jQuery(pId).each(function() {
    	var vPrice = jQuery(this).find('.variation-price').attr('title');
    	var sPrice = jQuery(this).find('.simple_price').attr('title');
    	if(priceRange < vPrice || priceRange < sPrice){
    		jQuery(gId).css({
			'opacity' : '0.25',
			'cursor'  : 'crosshair'
			});
        } else if(priceRange > vPrice || priceRange > sPrice) {
        	jQuery(gId).css({
			'opacity' : '1',
			'cursor'  : 'pointer'
			});
        }
    });
	// if(product price < #cost){g.removeClass(".available").addClass(".unavailable")}
	// in css g.unavilable polygon{opacity: 0.25; fill: #CCCCCC;}
}

function stockOutput(vol) {
	document.querySelector('#stock').value = vol;
	var stockRange = jQuery('#stock-range').val();
    var pId = jQuery('.popup');
    var pClass = jQuery('.popup').attr('class');
    var gId = jQuery('g g');
    jQuery(pId).each(function() {
    	var stockQty = jQuery(this).find('.stock-quantity').attr('title');
    	if(stockRange < stockQty){
    		jQuery(gId).css({
			'opacity' : '0.25',
			'cursor'  : 'crosshair'
			});
        } else if(stockRange > stockQty) {
        	jQuery(gId).css({
			'opacity' : '1',
			'cursor'  : 'pointer'
			});
        }
    });
	// if(product price < #cost){g.removeClass(".available").addClass(".unavailable")}
	// in css g.unavilable polygon{opacity: 0.25; fill: #CCCCCC;}
}

jQuery(document).ready(function($){

	if($('svg').width() < 3100){
	   $('#filters').css('font-size', '12px');
	   $('#filters select').css('font-size', '11px');
	}

	//****** if product count > 1, addClass .available
	var id = this.id;
	//var $match = $('g.available g[id^="'+id+'"]');
	var $detail = $('.details');
	//var $full = $('.popup-full');

		/*if(matchBoth.length){
			$(idMatch).addClass('unavailable');
		}*/

	$('.popup-gallery').bxSlider({
		slideSelector: $('.popup'),
		infiniteLoop: false,
		controls: false,
		adaptiveHeight : false,
		maxSlides: 1,
		slideWidth: 300,
		slideHeight: 200,
		slideMargin: 5
	});

	$('.standard-gallery').bxSlider({
		slideSelector: $('.popup'),
		infiniteLoop: false,
		controls: false,
		adaptiveHeight : false,
		maxSlides: 1,
		slideWidth: 300,
		slideHeight: 200,
		slideMargin: 5
	});

		$("g g").each(function(e){
			var svgelement = $(this);
			var id = svgelement.attr('id');
			var $popup = $('.popup');
			if(!$popup.hasClass(id)){
				$(this).css({
					'opacity' : '0.25',
					'cursor'  : 'crosshair'
					});
				$(this).find('polygon, rect').css({
					'fill' : '#CCCCCC'
				});
			}
			return;
		});

	// Adjust font size depending on family
	if ($("div, button, section, article, p, input").css('font-family') === 'Arial')
	{
	  $("div, button, section, article, p, input").css({'color': '#00FF00'});
	}
	// Adjust position to viewport
	$('g.available g').on('click', function (e) {
		e.preventDefault();
		var $svgelement = $(this);
		var id = $svgelement.attr('id');
		var $popup = $('.popup[class*="'+id+'"]');

		var left = $svgelement.offset().left + ( $svgelement.outerWidth() / 2 ) - ( $popup.outerWidth() / 2 ),
                top  = $svgelement.offset().top - $popup.outerHeight() - 20;

        if( left < 0 )
            {
                left = $svgelement.offset().left + $svgelement.outerWidth() / 2 - 20;
            }

        if( left + $popup.outerWidth() > $( window ).width() )
            {
                pos_left = $svgelement.offset().left - $popup.outerWidth() + $svgelement.outerWidth() / 2 + 20;
            }

    	if(top <  $(window).scrollTop() ){
    		var top = $svgelement.offset().top + $svgelement.outerHeight();
    	}

    	$(window).resize($popup);

			// Show popup with matching id * Postion the popup
			$popup.css({top: top - 100, left: left + 80}).slideDown('fast').css('visibility', 'visible');//.css({ top: position.top/1.1, left: position.left});
			// Hide the inactive popup
			$('.popup').not('.popup[class*="'+id+'"]').slideUp('fast').css('visibility', 'hidden');
			// Stop looking
		return false;
	});

	// Filter tickets by availability
	/*$('button').on('click', function (e) {
		e.preventDefault();
		var cl = $(this).attr('class');
		var noMatch = $('g').attr('id') !== cl;
		var unavailable = $(noMatch).find('polygon');
		if(noMatch){
			$(unavailable).css('fill', '#CCCCCC');
			$(noMatch).unbind('click');
		}
	});*/

	$detail.click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
			// Show popup with matching id
			$('.popup-full[class*="'+id+'"]').fadeIn('fast').css('visibility', 'visible');
			// Show body overlay
			$('.cover').fadeIn('fast');
			// Hide the first popup
			$('.popup').fadeOut('fast').css('visibility', 'hidden');
			// Stop looking
		return false;
	});

	$(document).click(function(e) {
		var container = $(".popup-full");
		var pcontainer = $('.popup');
		// Hide the popup if it's not the target
		if(!container.is(e.target) && container.has(e.target).length === 0)
		{
			container.hide();
			$('.cover').fadeOut('fast');
		}
		// Hide the popup if it's not the target
		if(!pcontainer.is(e.target) && pcontainer.has(e.target).length === 0){
			pcontainer.slideUp('fast');
		}
	});

	// Dropdown section filter
	$(document).on("change", ".select_pa_section", function(e) {
		e.preventDefault();
	        var section_id = $(this).find(':selected').val();
	        var gId = $('g g');
	        $(gId).each(function() {
	        	if($(this).attr('id') !== section_id){
	        		$(this).css({
					'opacity' : '0.25',
					'cursor'  : 'crosshair'
					});
		        } else if($(this).attr('id') == section_id) {
		        	$(this).css({
					'opacity' : '1',
					'cursor'  : 'pointer'
					});
		        }
	        });
	});
	
		var variationDesc = $(".variation-desc");
		var price_id = $(".variation-price");
		var productDesc = $("product-desc");
		$(".popup").find(variationDesc).first().show();
		$(".popup-full").find(variationDesc).first().show();
		$(".popup").find(price_id).first().show();
		$(".popup-full").find(price_id).first().show();
		$("select.select_pa_row option").first(":selected");
		$(document).on("change", "select.select_pa_row", function(e) {
			e.preventDefault();
			if($(this).val()!=''){
				var option = $(this).val();
				var row_id = $(this).find(':selected').val();
				var variation_id = $("input[name='variation_id']");
				var variable_att_id = $("input[name='attribute_pa_row'].variable-att");
				var simple_att_id = $("input[name='attribute_pa_row'].simple-att");
				var price_range_value = $("input#price-range");
				$(row_id);
				if(row_id){
    				$(variation_id).val($(this).val());
    				$(variable_att_id).val($(this).find(":selected").attr('id'));
    				$(simple_att_id).val($(this).find(":selected").attr('class'));
				}
			}
			var selectValue = $("select.select_pa_row").find(":selected").val();
			
		    $(price_id).each(function(){
		    	priceMatch = $(this).hasClass(selectValue);
		    	var price_range_value = $("input#price-range");
		        if(priceMatch){
		            $(this).show(); 
		            $(price_range_value).val($(this).text()); 
		        } else {
		        	$(this).hide();
		        }
		        return;
		    });
		    $(variationDesc).each(function(){
		    	descMatch = $(this).hasClass(selectValue);
		    	if(descMatch){
		            $(this).show();  
		        } else {
		        	$(this).hide(); 
		        	$(productDesc).show();
		        }
		        return;
		    });
		});
});