$(function() {
	// Constants used for finding target elements to
	// output preview code and fetching templates
	var OUTPUT_PANEL_CSS = "-output-panel-css",
	OUTPUT_PANEL_HTML = "-output-panel-html",
	OUTPUT_PANEL_STYLE = "-preview-style",
	OUTPUT_PANEL_HTML_PREVIEW = "-preview-pane",
	CSS_TEMPLATE = "-style",
	HTML_TEMPLATE = "-code",
	HTML_PREVIEW_TEMPLATE = "-preview",
	LIGHT_COLOR_KEY = "light-color-key",
	DARK_COLOR_KEY = "dark-color-key",
	ADJUSTED_DARK_COLOR_KEY = "shadowColor",
	TEXT_SHADOW_COLOR = "textShadowColor",
	TEXT_SHADOW_SELECTOR = "textShadowColorSelector",
	OUTPUT_CACHE = {},
	$FORMS = $('form'),
	TAB_SETTINGS = {	heightStyleType: 'auto', hide: false };

	$("#figure-tabs").tabs(TAB_SETTINGS);
	$("#form-tabs").tabs(TAB_SETTINGS);
  $("#tabs").tabs(TAB_SETTINGS);

	
	// reverseColorsInput.click(function(){swapInputValues(colorOneInput, colorTwoInput);});
	// formFileReverColorButton.click(function(){swapInputValues(formFileColorOneInput, formFileColorTwoInput);});

	// Builds caches of output targets so they don't have to be found at execution
	$FORMS.each(function() {
		var $form = $(this),
		elementName = $form.data("element-type"),
		currentCache = OUTPUT_CACHE[elementName] = {},
		data = {},
		colors = [],
		styleTemplateName	= elementName + CSS_TEMPLATE,
		htmlTemplateName = elementName + HTML_TEMPLATE,
		htmlPreviewTemplateName = elementName + HTML_PREVIEW_TEMPLATE,
		outputTargets = OUTPUT_CACHE[elementName],
		parentControl = $form.find('.parent'),
		childControls = $form.find('.child'),
		reverseButton = $form.find('input[type=button].reverse-trigger'),
		reverseFields = $form.find('input.reverse-field'),
		codeBlocks = $form.closest('section.tab').find('code'),
		name, value, finalKey, resultStyle, resultHtml, resultHtmlPreview;
	
		currentCache.styleTarget = $("#" + elementName + OUTPUT_PANEL_STYLE),
		currentCache.previewTarget = $("#" + elementName + OUTPUT_PANEL_HTML_PREVIEW),
		currentCache.styleCodeTarget = $("#" + elementName + OUTPUT_PANEL_CSS),
		currentCache.htmlCodeTarget = $("#" + elementName + OUTPUT_PANEL_HTML);

		parentControl.change(function() {
			$form.data('processing', true);
			childControls.val(parentControl.val());
			$form.data('processing', false);
			$form.submit();
		});

		reverseButton.click(function(){swapInputValues(reverseFields.eq(0), reverseFields.eq(1));});

		$form.submit(function(ev) {
			ev.preventDefault();
			
			if ($form.data('processing')) {
				return;
			}

			var formData = $form.serializeArray();
			colors = [];

			for (var i = 0; i < formData.length; i++) {
				name = formData[i].name,
				value = formData[i].value,
				defaultValue = "";

				if ( /url/i.test(name) ) {
					defaultValue = "#";
				}
				else if ( /className/.test(name) ) {
					defaultValue = "custom" + elementName;
				}

				if ( /^color/.test(name) ) {
					colors.push(value);
				}


				data[name] = formData[i].value || defaultValue;
			}

			if ( colors.length && !data.hasOwnProperty('shadowColor') ) {
				var  processedColors = processColors(colors);
				for (var key in processedColors) {
					if (processedColors.hasOwnProperty(key)) {
						data[key] = processedColors[key];
					}
				}
			}

			if ( data.hasOwnProperty(TEXT_SHADOW_SELECTOR) ) {
				var selectedColor = "";
				if ( data[TEXT_SHADOW_SELECTOR] == "1" ) {
					selectedColor = data[LIGHT_COLOR_KEY];
				}
				else {
					selectedColor = data[DARK_COLOR_KEY];
				}

				data[TEXT_SHADOW_COLOR] = selectedColor;
			}

			resultStyle = Handlebars.templates[styleTemplateName](data);
			resultHtml = Handlebars.templates[htmlTemplateName](data);
			resultHtmlPreview = Handlebars.templates[htmlPreviewTemplateName](data);

			outputTargets.styleTarget.html(resultStyle);
			outputTargets.previewTarget.html(resultHtml);
			outputTargets.styleCodeTarget.html(resultStyle);
			outputTargets.htmlCodeTarget.html(resultHtmlPreview);
			codeBlocks.each(function(i, e) {hljs.highlightBlock(e);});
		});
	});

	// Highlights code blocks when clicked on
	$('code').click(function(){
		var text = this, range, selection;

		if (document.body.createTextRange) { //ms
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  });

  $('form input').change(function(){ $(this).closest('form').trigger('submit'); });

  $FORMS.trigger('submit');

	/* Utility Functions */
	function adjustColor(hex, lum) {
		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		// convert to decimal and change luminosity
		var rgb = "", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
		return rgb;
	}

	function lighterColor(color1, color2) {
		var i1, i2, r1, r2, g1, g2, b1, b2;
		r1 = parseInt(color1.substr(0,2), 16);
		g1 = parseInt(color1.substr(2,2), 16);
		b1 = parseInt(color1.substr(4,2), 16);
		r2 = parseInt(color2.substr(0,2), 16);
		g2 = parseInt(color2.substr(2,2), 16);
		b2 = parseInt(color2.substr(4,2), 16);

		i1 = (r1 + g1 + b1)/3;
		i2 = (r2 + g2 + b2)/3;

		if (i1 < i2)
			return color2;
		else if (i1 > i2)
			return color1;
		else
			return color1;
	}

	function processColors(colors) {
		var c0 = colors[0],
				c1 = colors[1],
				lightColor = lighterColor( c0, c1 ),
				darkerColor = c0 == lightColor ? c1 : c0,
				adjustedDarkColor = adjustColor(darkerColor, -0.175),
				tempColors = {};

				tempColors[DARK_COLOR_KEY] = darkerColor;
				tempColors[LIGHT_COLOR_KEY] = lightColor;
				tempColors[ADJUSTED_DARK_COLOR_KEY] = adjustedDarkColor;
				return tempColors;
	}

	function swapInputValues(input1, input2) {
		var val1 = input1.val(),
				val2 = input2.val();

		input1.val(val2);
		input2.val(val1);
		input1.closest('form').trigger('submit');
	}
});