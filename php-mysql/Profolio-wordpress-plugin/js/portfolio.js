jQuery(function($){
	filterClass = $("ul[class^='show-filter-']");
	toggleId = $("a[id^='show-toggle-']");
	
	filterClass.hide();
	
	toggleId.click(function(e){
		
		e.preventDefault();
		
		var currentNumber = $(this).attr('id').replace('show-toggle-','');
		var currentFilter = $('.show-filter-' + currentNumber);
		
		filterClass.not(currentFilter).slideUp();
		$(this).removeClass('profolio-current');

		if(currentFilter.is(':hidden')){
			currentFilter.stop().slideDown();
			$(this).addClass('profolio-current');
			toggleId.not(this).removeClass('profolio-current');
		}
	});
});

function goto_page(page_id)
{
	$("#pages").val(page_id);
	$("#pages_form").submit();
}