(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['button-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<section>\n	<span><a class=\"";
  foundHelper = helpers.className;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "\" href=\"#\">Button One</a></span>\n</section>";
  return buffer;});
templates['button-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "&lt;!-- copy the following code into your html --&gt;\n&lt;span&gt;&lt;a class=&quot;";
  foundHelper = helpers.className;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "&quot; href=&quot;";
  foundHelper = helpers.linkUrl;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.linkUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "&quot;&gt;Button One&lt;/a&gt;&lt;/span&gt;\n";
  return buffer;});
templates['button-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "/* Copy the following code into your css file */\n.";
  foundHelper = helpers.className;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "{\n	/* Other and Older browsers */\n	background:url(images/btn-grey.png) repeat-x 0 0;\n	/* Chrome,Safari4+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "));\n	/* Chrome 10+,Safari */\n	background : -webkit-linear-gradient(top, #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 00%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 99%);\n	/* Firefox 4+ */ \n	background : -moz-linear-gradient(top, #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 00%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 99%);\n	/* Opera */\n	background : -o-linear-gradient(top, #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 00%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 99%);\n	/* IE 10+ */\n	background : -ms-linear-gradient(top, #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 00%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 99%); \n	/* W3C */\n	background : -linear-gradient(top, #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 00%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 99%);\n	/* IE 6-8 */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 );\n	padding: 5px 20px;\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	color: #";
  foundHelper = helpers.fontColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fontColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	text-shadow: -1px 0 #";
  foundHelper = helpers.textShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 -1px #";
  foundHelper = helpers.textShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 1px #";
  foundHelper = helpers.textShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", -1px -1px #";
  foundHelper = helpers.textShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.textShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Firefox 4+ */\n	-moz-border-radius: ";
  foundHelper = helpers.borderRadiusTopLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusTopRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px;\n	/* Chrome 10+,Safari */\n	-webkit-border-radius: ";
  foundHelper = helpers.borderRadiusTopLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusTopRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px;\n	/* W3C*/\n	border-radius: ";
  foundHelper = helpers.borderRadiusTopLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusTopRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusTopRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomRight;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomRight; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px ";
  foundHelper = helpers.borderRadiusBottomLeft;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusBottomLeft; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "px;\n	/* Firefox 4+ */\n	-moz-box-shadow: 0px 5px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 7px 1px -1px #464646, 0 7px 6px 0px #a7a7a7;\n	/* Chrome 10+,Safari */\n	-webkit-box-shadow: 0px 5px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 7px 1px -1px #464646, 0 7px 6px 0px #a7a7a7;\n	/* W3C */\n	box-shadow: 0px 5px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 7px 1px -1px #464646, 0 7px 6px 0px #a7a7a7;\n}\n\n\n.";
  foundHelper = helpers.className;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ":active{\n	/* Firefox 4+ */\n	-moz-box-shadow: 0px 4px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 5px 1px -1px #464646, 0 5px 4px 0px #a7a7a7;\n	/* Chrome 10+,Safari */\n	-webkit-box-shadow: 0px 4px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 5px 1px -1px #464646, 0 5px 4px 0px #a7a7a7;\n	/* W3C */\n	box-shadow: 0px 4px 0px -1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", 0 5px 1px -1px #464646, 0 5px 4px 0px #a7a7a7;\n	position:relative;\n	top: 3px;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}";
  return buffer;});
templates['checkbox-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"checkradio\">\n    <input type=\"checkbox\" name=\"check\" id=\"cb\" />\n    <label for=\"cb\">Check</label>\n</form>\n";});
templates['checkbox-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form class=&quot;checkradio&quot;&gt;\n    &lt;input type=&quot;checkbox&quot; name=&quot;check&quot; id=&quot;cb&quot; /&gt;\n    &lt;label for=&quot;cb&quot;&gt;Check&lt;/label&gt;\n&lt;/form&gt;\n";});
templates['checkbox-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"checkbox\"]{\n	display: none;\n}\n\ninput[type=\"checkbox\"] + label{\n	width:15px;\n    height:15px;\n	display: inline-block;\n	vertical-align: middle;\n	text-indent: 27px;\n	line-height: 1.1em;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"checkbox\"]:checked + label{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowcolor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowcolor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowcolor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowcolor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowcolor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowcolor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}\n\ninput[type=\"checkbox\"]:checked + label:before{\n	content:\"\\00a0\";\n	width: 5px;\n	height: 10px;\n	border: solid #";
  foundHelper = helpers.checkedBorderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	border-width: 0 3px 3px 0;\n	position: absolute;\n	margin-left: -23px;\n	margin-top:0;\n	-webkit-transform: rotate(45deg);\n	-moz-transform: rotate(45deg);\n	-o-transform: rotate(45deg);\n	-ms-transform: rotate(45deg);\n	transform: rotate(45deg);\n}";
  return buffer;});
templates['color-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"valignMid\">\n	<input type=\"color\" />\n</form>";});
templates['color-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form class=&quot;valignMid&quot;&gt;\n	&lt;input type=&quot;color&quot; /&gt;\n&lt;/form&gt;";});
templates['color-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"color\"]{\n	padding: 0 10px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	cursor: pointer;\n}\n\ninput[type=\"color\"]:hover, input[type=\"color\"]:active, input[type=\"color\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}";
  return buffer;});
templates['figure-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<figure>\n	<a href=\"#\"><img src=\"images/envato_4_large.jpg\" align=\"\" /></a>\n    <figcaption>\n    <br>\n		Say something awesome in this caption.\n    </figcaption>\n</figure>";});
templates['figure-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;figure&gt;\n	&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;YOUR_IMAGE_NAME_HERE.EXT&quot; align=&quot;&quot; /&gt;&lt;/a&gt;\n    &lt;figcaption&gt;\n    &lt;br&gt;\n		Say something awesome in this caption.\n    &lt;/figcaption&gt;\n&lt;/figure&gt;";});
templates['figure-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "figure{\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	width: auto;\n	display: inline-block;\n	border: solid 20px #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	padding: 5px;\n	-moz-box-shadow: 0 0 0px 2px #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", inset 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 0px 2px #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", inset 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 0px 2px #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ", inset 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}\n\nfigcaption{\n	padding: 10px;\n	background: #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	width: auto;\n	-moz-box-shadow: 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 2px 0px #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}";
  return buffer;});
templates['file-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;input type=&quot;file&quot; name=&quot;file&quot; id=&quot;cf&quot; /&gt;\n&lt;label for=&quot;cf&quot;&gt;Browse...&lt;/label&gt;";});
templates['form-button-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form method=\"post\" action=\"index.html\">\n	<input type=\"button\" value=\"BUTTON\" name=\"b\" id=\"b\" />\n</form>";});
templates['form-button-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form method=&quot;post&quot; action=&quot;index.html&quot;&gt;\n	&lt;input type=&quot;button&quot; value=&quot;BUTTON&quot; name=&quot;b&quot; id=&quot;b&quot; /&gt;\n&lt;/form&gt;\n";});
templates['form-button-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"button\"]{\n	padding: 5px 20px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"button\"]:hover, input[type=\"button\"]:active, input[type=\"button\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}\n";
  return buffer;});
templates['form-file-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<input type=\"file\" name=\"file\" id=\"cf\" />\n<label for=\"cf\">Browse...</label>";});
templates['form-file-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;input type=&quot;file&quot; name=&quot;file&quot; id=&quot;cf&quot; /&gt;\n&lt;label for=&quot;cf&quot;&gt;Browse...&lt;/label&gt;";});
templates['form-file-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"file\"]{\n	display: none;\n}\ninput[type=\"file\"] + label{\n	padding: 3px 20px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	cursor: pointer;\n}\n\ninput[type=\"file\"] + label:hover, input[type=\"file\"] + label:active, input[type=\"file\"] + label:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}\n";
  return buffer;});
templates['img-preview-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<section class=\"imgPrev\">\n	<a href=\"#\"><img src=\"images/envato_4_small.jpg\" alt=\"\"></a>\n	<div class=\"imgFull\">\n		<img src=\"images/envato_4_large.jpg\" alt=\"\">\n		<span class=\"imgCap\">Here's an image caption<br><small>You can add whatever you want here.</small></span>\n	</div>\n</section>\n";});
templates['img-preview-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;section class=&quot;imgPrev&quot;&gt;\n	&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;YOUR_IMAGE_THUMB_NAME_HERE.EXT&quot; alt=&quot;&quot;&gt;&lt;/a&gt;\n	&lt;div class=&quot;imgFull&quot;&gt;\n		&lt;img src=&quot;YOUR_IMAGE_NAME_HERE.EXT&quot; alt=&quot;&quot;&gt;\n		&lt;span class=&quot;imgCap&quot;&gt;Here's an image caption&lt;br&gt;&lt;small&gt;You can add whatever you want here.&lt;/small&gt;&lt;/span&gt;\n	&lt;/div&gt;\n&lt;/section&gt;\n";});
templates['img-preview-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "section.imgPrev:hover div.imgFull, section.imgPrev:focus div.imgFull, section.imgPrev:active div.imgFull{\n	display: block;\n	background-repeat: no-repeat;\n	background-position: center center;\n	position: absolute;\n	background-color: #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	border: 5px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	margin-top: -331px;\n	margin-left: 69px;\n	-moz-box-shadow: 0 -7px 22px -7px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow:0 -7px 22px -7px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 -7px 22px -7px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}\n\nsection.imgPrev span.imgCap, section.imgPrev div.imgFull{\n	display: none;\n}\n\nsection.imgPrev:hover span.imgCap{\n	display: block;\n	text-align: center;\n	z-index: 999;\n	position:relative;\n	background-color: #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	padding-bottom:10px;\n	padding-top:10px;\n}\n\nsection.imgPrev a>img{\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\nsection.imgPrev a>img:hover, section.imgPrev a>img:focus, section.imgPrev a>img:active{\n	-webkit-opacity: 0.5;\n	-moz-opacity: 0.5;\n	filter:alpha(opacity=50);\n	opacity: 0.5;\n}";
  return buffer;});
templates['number-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<input type=\"number\" value=\"\" name=\"num\" id=\"num\" />";});
templates['number-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;input type=&quot;number&quot; value=&quot;&quot; name=&quot;num&quot; /&gt;";});
templates['number-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "/*** Number Input ***/\ninput[type=\"number\"]{\n	padding: 5px 20px 5px 10px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"number\"]:active, input[type=\"number\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}";
  return buffer;});
templates['preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "section.imgPrev:hover div.imgFull, section.imgPrev:focus div.imgFull, section.imgPrev:active div.imgFull{\n	display: block;\n	background-repeat: no-repeat;\n	background-position: center center;\n	position: absolute;\n	background-color: #FFFFFF;\n	border: 5px solid #FFFFFF;\n	margin-top: -331px;\n	margin-left: 69px;\n	-moz-box-shadow: 0 -7px 22px -7px #464646;\n	-webkit-box-shadow:0 -7px 22px -7px #464646;\n	box-shadow: 0 -7px 22px -7px #464646;\n}\n\nsection.imgPrev span.imgCap, section.imgPrev div.imgFull{\n	display: none;\n}\n\nsection.imgPrev:hover span.imgCap{\n	display: block;\n	text-align: center;\n	z-index: 999;\n	position:relative;\n	background-color: #FFFFFF;\n	padding-bottom:10px;\n	padding-top:10px;\n}\n\nsection.imgPrev a>img{\n	/* Chrome 10+,Safari */\n	-webkit-transition: all 140ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all 140ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all 140ms ease-in-out;\n	/* Opera */\n	-o-transition: all 140ms ease-in-out;\n	/* W3C */\n	transition: all 140ms ease-in-out;\n}\n\nsection.imgPrev a>img:hover, section.imgPrev a>img:focus, section.imgPrev a>img:active{\n	-webkit-opacity: 0.5;\n	-moz-opacity: 0.5;\n	filter:alpha(opacity=50);\n	opacity: 0.5;\n}";});
templates['radio-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"checkradio\">\n    <input type=\"radio\" name=\"radio\" id=\"rb\" />\n    <label for=\"rb\">Radio</label>\n</form>";});
templates['radio-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form class=&quot;checkradio&quot;&gt;\n    &lt;input type=&quot;radio&quot; name=&quot;radio&quot; id=&quot;rb&quot; /&gt;\n    &lt;label for=&quot;rb&quot;&gt;Radio&lt;/label&gt;\n&lt;/form&gt;";});
templates['radio-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"radio\"]{\n	display: none;\n}\n\ninput[type=\"radio\"] + label{\n	width:15px;\n    height:15px;\n	display: inline-block;\n	vertical-align: middle;\n	text-indent: 27px;\n	line-height: 1.1em;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	-moz-border-radius: 100%;\n	-webkit-border-radius: 100%;\n	border-radius: 100%;\n}\n\ninput[type=\"radio\"]:checked + label{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.checkedShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.checkedShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}\n\ninput[type=\"radio\"]:checked + label:before{\n	content:\"\\00a0\";\n	width: 11px;\n	height: 11px;\n	background-color: #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	position: absolute;\n	margin-left: -25px;\n	margin-top:2px;\n	-moz-border-radius: 100%;\n	-webkit-border-radius: 100%;\n	border-radius: 100%;\n}";
  return buffer;});
templates['reset-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form>\n	<input type=\"reset\" value=\"Reset Form\" />\n</form>";});
templates['reset-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form&gt;\n	&lt;input type=&quot;reset&quot; value=&quot;Reset Form&quot; /&gt;\n&lt;/form&gt;";});
templates['reset-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"reset\"]{\n	padding: 5px 20px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"reset\"]:hover, input[type=\"reset\"]:active, input[type=\"reset\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}\n";
  return buffer;});
templates['search-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form method=\"post\" action=\"index.html\">\n	<input type=\"search\" value=\"Search\" onFocus=\"if (this.value =='Search'); this.value = '';\" onBlur=\"if (this.value == ''); this.value = 'Search';\" />\n</form>";});
templates['search-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form method=&quot;post&quot; action=&quot;index.html&quot;&gt;\n	&lt;input type=&quot;search&quot; value=&quot;Search&quot; onFocus=&quot;if (this.value =='Search'); this.value = '';&quot; onBlur=&quot;if (this.value == ''); this.value = 'Search';&quot; /&gt;\n&lt;/form&gt;";});
templates['search-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"search\"]{\n	padding: 5px 20px 5px 10px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	-webkit-appearance: none;\n}\n\ninput[type=\"search\"]:active, input[type=\"search\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}";
  return buffer;});
templates['select-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form id=\"select-style\"><!-- This is necessary to style select -->\n	<select>\n        <option value=\"choose\" selected disabled>Choose One</option>\n        <option value=\"opt1\">Option 1</option>\n        <option value=\"opt2\">Option 2</option>\n	</select>\n</form>";});
templates['select-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form id=&quot;select-style&quot;&gt;&lt;!-- This is necessary to style select --&gt;\n	&lt;select&gt;\n        &lt;option value=&quot;choose&quot; selected disabled&gt;Choose One&lt;/option&gt;\n        &lt;option value=&quot;opt1&quot;&gt;Option 1&lt;/option&gt;\n        &lt;option value=&quot;opt2&quot;&gt;Option 2&lt;/option&gt;\n	&lt;/select&gt;\n&lt;/form&gt;";});
templates['select-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "select{\n	padding: 5px;\n	padding-right: 30px;\n	width: auto;\n	background-image:url(images/selectArrow.png);\n	background-repeat: no-repeat;\n	background-position: 90% center;\n	background-color: transparent;\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	-moz-border-radius: 0 0 1px 0 #";
  foundHelper = helpers.borderRadiusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-border-radius: 0 0 1px 0 #";
  foundHelper = helpers.borderRadiusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	border-radius: 0 0 1px 0 #";
  foundHelper = helpers.borderRadiusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderRadiusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-appearance:none;\n}\n\nselect:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}\n\nselect option{\n	background-color:#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	border: 1px solid #";
  foundHelper = helpers.optionBorderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.optionBorderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n}\n\n#select-style{\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	overflow: hidden;\n	display: table;\n}\n";
  return buffer;});
templates['submit-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form method=\"post\" action=\"index.html\">\n	<input type=\"submit\" value=\"SUBMIT\" name=\"s\" id=\"s\" />\n</form>";});
templates['submit-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form method=&quot;post&quot; action=&quot;index.html&quot;&gt;\n	&lt;input type=&quot;submit&quot; value=&quot;SUBMIT&quot; name=&quot;s&quot; id=&quot;s&quot; /&gt;\n&lt;/form&gt;";});
templates['submit-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"submit\"]{\n	padding: 5px 20px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	cursor: pointer;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"submit\"]:hover, input[type=\"submit\"]:active, input[type=\"submit\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.hoverShadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hoverShadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}";
  return buffer;});
templates['text-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form>\n	<input type=\"text\" value=\"Text...\" onFocus=\"if (this.value == 'Text...'); this.value = '';\" onBlur=\"if (this.value == ''); this.value = 'Text...';\" />\n</form>";});
templates['text-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;form&gt;\n	&lt;input type=&quot;text&quot; value=&quot;Text...&quot; onFocus=&quot;if (this.value == 'Text...'); this.value = '';&quot; onBlur=&quot;if (this.value == ''); this.value = 'Text...';&quot; /&gt;\n&lt;/form&gt;";});
templates['text-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "input[type=\"text\"]{\n	padding: 5px 20px 5px 10px;\n	background: #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "; /* Old browsers */\n	background: -moz-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%, #";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* FF3.6+ */\n	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "), color-stop(100%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ")); /* Chrome,Safari4+ */\n	background: -webkit-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Chrome10+,Safari5.1+ */\n	background: -o-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* Opera 11.10+ */\n	background: -ms-linear-gradient(top,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* IE10+ */\n	background: linear-gradient(to bottom,  #";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 0%,#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " 100%); /* W3C */\n	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#";
  foundHelper = helpers.colorOne;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorOne; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "', endColorstr='#";
  foundHelper = helpers.colorTwo;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colorTwo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "',GradientType=0 ); /* IE6-9 */\n	border: 1px solid #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-moz-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 1px 0 #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\ninput[type=\"text\"]:active, input[type=\"text\"]:focus{\n	-moz-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 4px 0px #";
  foundHelper = helpers.focusColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.focusColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	outline: none;\n}";
  return buffer;});
templates['thumb-code'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<figure class=\"thumb\">\n	<a href=\"#\"><img src=\"images/envato_4_large.jpg\" align=\"\" /></a>\n    <figcaption>\n    	Say something awesome in this caption.\n    </figcaption>\n</figure>";});
templates['thumb-preview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "&lt;figure class=&quot;thumb&quot;&gt;\n	&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;YOUR_IMAGE_NAME_HERE.EXT&quot; align=&quot;&quot; /&gt;&lt;/a&gt;\n    &lt;figcaption&gt;\n    	Say something awesome in this caption.\n    &lt;/figcaption&gt;\n&lt;/figure&gt;";});
templates['thumb-style'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "figure.thumb{\n	width: 200px;\n}\n\nfigure.thumb img{\n	width: 100%;\n	position:relative;\n	/* Chrome 10+,Safari */\n	-webkit-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Firefox 4+ */\n	-moz-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* IE 9,10 */\n	-ms-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* Opera */\n	-o-transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n	/* W3C */\n	transition: all ";
  foundHelper = helpers.transitionTime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transitionTime; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + "ms ease-in-out;\n}\n\nfigure.thumb img:hover, figure.thumb img:focus, figure.thumb img:active{\n	width: 300%;\n	left: -100%;\n	border: #";
  foundHelper = helpers.borderColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.borderColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + " solid 5px;\n	-moz-box-shadow: 0 0 15px 1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	-webkit-box-shadow: 0 0 15px 1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	box-shadow: 0 0 15px 1px #";
  foundHelper = helpers.shadowColor;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.shadowColor; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1) + ";\n	z-index: 9999;\n}\n\nfigure.thumb a:hover:before, figure.thumb a:focus:before, figure.thumb a:active:before{\n	content:\"\\00a0\";\n	width: 10%;\n	height: 10px;\n	background-color: transparent;\n	position: absolute;\n	box-shadow: 0 0 0 10000px #464646;\n	top: 0;\n	left: 0;\n	opacity: 0.75;\n}\n";
  return buffer;});
})();