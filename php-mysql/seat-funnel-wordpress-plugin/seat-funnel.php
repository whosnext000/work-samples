<?php
/*
  Plugin Name: Seat Funnel
  Plugin URI: Unavailable
  Version: 1.0.0
  Description: A seating chart with a customer purchasing funnel.
  Author: Justin Hubbard
  Author URI: http://www.behance.net/justinhubbard
  Text Domain: seat-funnel
  Domain Path: /languages
  License: This plugin may not be used for any purposes without the written and expressed permission from Access Entertainment Events.
 */

require_once 'seat-funnel-options.php';

function sf_load_styles(){

	wp_enqueue_style( 'slider-style', plugins_url('scripts/slider/jquery.bxslider.css', __FILE__), 2 );
	wp_enqueue_style( 'seat-funnel', plugins_url('styles/seat-funnel.css', __FILE__), 1 );
}
add_action('wp_enqueue_scripts', 'sf_load_styles');

function sf_load_scripts(){

	wp_enqueue_script( "jqueryui", "http://code.jquery.com/ui/1.12.1/jquery-ui.min.js", 1 );
	wp_enqueue_script( 'slider', plugins_url('scripts/slider/jquery.bxslider.min.js', __FILE__), 2 );
	wp_enqueue_script( 'main', plugins_url('scripts/main.js', __FILE__), 100, '', true );
}
add_action('wp_enqueue_scripts', 'sf_load_scripts');

/*
Display product variation prices
*/
function variation_price($variation_id) {

global $woocommerce; 
$product = new WC_Product_Variation($variation_id);
return $product->get_price();
}

/**
* This code should be added to functions.php of your theme
**/
add_filter('woocommerce_variable_price_html', 'price_filter', 100, 2);

function price_filter( $price, $product ) {

$price = '';
if ( !$product->min_variation_price || $product->min_variation_price !== $product->max_variation_price ) $price .= _x('', 'min_price', 'woocommerce');

$priceMin .= woocommerce_price($product->get_price());

if ( $product->max_variation_price && $product->max_variation_price !== $product->min_variation_price ) {
$price .= _x('', 'max_price', 'woocommerce');

$priceMax .= woocommerce_price($product->max_variation_price);
}

$lowest_price = preg_replace('#[^\d.]#', '', $priceMin);
$highest_price = preg_replace('#[^\d.]#', '', $priceMax);

$price_filter = "<label for='price-range'>Price</label><input type='range' id='price-range' min='" 
. $lowest_price
. "' value='" 
. $lowest_price
. "' max='" 
. $highest_price
. "' step='1' oninput='priceOutput(value)'><p><output for='price-range' id='cost'>$" 
. $lowest_price
. "</output></p>";

for($i = 0; $i < 5; $i ++) {
    if($var[$i] === '')
     {  
       break;
     } else {
     	return $price_filter;
     }
}

}

function quantity_filter( $stock, $product ) {

$stock = '';
if ( !$product->min_variation_price || $product->min_variation_price !== $product->max_variation_price ) $price .= _x('', 'min_price', 'woocommerce');

$priceMin .= woocommerce_price($product->get_price());

if ( $product->max_variation_price && $product->max_variation_price !== $product->min_variation_price ) {
$stock .= _x('', 'max_price', 'woocommerce');

$priceMax .= woocommerce_price($product->max_variation_price);
}

$lowest_price = preg_replace('#[^\d.]#', '', $priceMin);
$highest_price = preg_replace('#[^\d.]#', '', $priceMax);

return "<label for='stock-range'>Quantity</label><input type='range' id='stock-range' min='" 
. $lowest_price
. "' value='" 
. $lowest_price
. "' max='" 
. $highest_price
. "' step='1' oninput='stockOutput(value)'><p><output for='stock-range' id='stock'>$" 
. $lowest_price
. "</output></p>";
}

/*
Add variation to cart
*/
//Store the custom field
add_filter( 'woocommerce_add_cart_item_data', 'add_cart_item_custom_data_vase', 10, 2 );
function add_cart_item_custom_data_vase( $cart_item_meta, $product_id ) {
  global $woocommerce;
  $cart_item_meta['term_id'] = $_POST['term_id'];
  return $cart_item_meta; 
}

//Get it from the session and add it to the cart variable
function get_cart_items_from_session( $item, $values, $key ) {
    if ( array_key_exists( 'term_id', $values ) )
        $item[ 'cart-row' ] = $values['term_id'];
    return $item;
}
add_filter( 'woocommerce_get_cart_item_from_session', 'get_cart_items_from_session', 1, 3 );
/*
Load comments
*/
function latest_review(){
	global $post;

	$related_post = $post->ID;

	$args = array(
	   // args here
		'post_id' => $related_post,
		'status' => 'approve',
		'number' => 1
	);

	// The Query
	$comments_query = new WP_Comment_Query;
	$comments = $comments_query->query( $args );

	// Comment Loop
	if ( $comments ) {
		foreach ( $comments as $comment ) {
			echo '<p>' . $comment->comment_content . '</p>';
		}
	} else {
		echo 'No comments found.';
	}
}

function seat_funnel_galleries() { 
	global $woocommerce;
	global $post;
	global $product;

$attachment_ids = $product->get_gallery_attachment_ids(); ?>
<?php if($attachment_ids){ ?>
<ul class="popup-gallery">
<?php
	foreach( $attachment_ids as $attachment_id ) 
	{
	?>
	 <li><img src="<?php echo $image_link = wp_get_attachment_url( $attachment_id ); ?>" alt=""/></li>
	<?php
	}
	?>
</ul>
<?php } ?>

<ul class="standard-gallery">
	<li><img src="<?php echo plugins_url("images/sample1.jpg", __FILE__); ?>" alt=""></li>
	<li><img src="<?php echo plugins_url("images/sample2.jpg", __FILE__); ?>" alt=""></li>
	<li><img src="<?php echo plugins_url("images/sample3.jpg", __FILE__); ?>" alt=""></li>
</ul>

<?php
	return;
}

/**
 * Initialize Seat Funnel plugin
 */
function sf_seat_funnel() {  ?>

	<!-- Render the seating chart -->
	<div id="sf">
		<?php echo file_get_contents(plugins_url('seating-chart.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('section-info.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('section-info-full.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('seat-funnel-filters.php', __FILE__)); ?>
		<a style="float: right;" target="_blank" href="http://www.copyscape.com/"><img src="http://banners.copyscape.com/img/copyscape-stamp-gray-90x90.png" width="90" height="90" border="0" alt="Protected by Copyscape" title="Protected by Copyscape Plagiarism Checker - Do not copy content from this page." /></a>
	</div>
	<script type="text/javascript">
		jQuery(document).ready(function($){

			var $svgel = $('g.available');
			var idMatch = $svgel.attr('id');
			var popupClass = $('.popup').attr('class').length == idMatch;

			console.log(popupClass.length);
		});
	</script>

<?php 
}
add_shortcode('seating_chart_funnel', 'sf_seat_funnel');

/**
 * Initialize Seat Funnel Packages
 */
function sf_seat_funnel_packages() {  ?>

	<!-- Render the seating chart -->
	<div id="sf">
		<?php echo file_get_contents(plugins_url('seating-chart-packages.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('section-info-packages.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('section-info-full-packages.php', __FILE__)); ?>
		<?php echo file_get_contents(plugins_url('seat-funnel-filters-packages.php', __FILE__)); ?>
	</div>
	<script type="text/javascript">
		jQuery(document).ready(function($){

			var $svgel = $('g.available');
			var idMatch = $svgel.attr('id');
			var popupClass = $('.popup').attr('class').length == idMatch;

			console.log(popupClass.length);
		});
	</script>

<?php 
}
add_shortcode('seating_chart_funnel_packages', 'sf_seat_funnel_packages');