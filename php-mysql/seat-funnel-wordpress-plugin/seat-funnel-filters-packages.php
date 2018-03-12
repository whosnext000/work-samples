<?php $parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' ); 

	global $post;

	$args = array( 
		'post_type' => 'product', 
		'posts_per_page' => -1, 
		'product_cat' => 'kentucky-derby-packages' 
		);
	$loop = new WP_Query($args); 
	 ?>

<div id="filters" class="myriad">
			<!-- Filters -->
			<!-- Quantity -->
			<div>
				<label for="stock-range">Quantity</label>
				<input type="range" id="stock-range" min="1" value="1" max="16" step="1" oninput="stockOutput(value)">
				<p><output for="stock-range" id="stock">0</output></p>
			</div>
			
			<!-- Price -->
			<div>

		    	<!--<label for="price">Price</label>
				<select name="pa_price" class="select_pa_price" id="select-small">
					<option disabled="disabled" value="Select price" selected="selected">Select</option>
					<option value="500">$0-$500</option>
					<option value="1000">$501-$1000</option>
					<option value="2500">$1001-$2500</option>
					<option value="4000">$2501-$4000</option>
					<option value="10000000000000">$4001 &amp; Above</option>
				</select>-->

		    	<label for="price-range">Price</label>
		    	<input type="range" id="price-range" min="0" value="0" max="7500" step="100" oninput="priceOutput(value)">
		    	<p>$<output for="price-range" id="cost">0</output></p>
			</div>

			<!-- Section -->
			<div>
				<label for="section">Section</label>
				<select name="pa_section" class="select_pa_section" id="select-small">
					<option disabled="disabled" value="Select section" selected="selected">Select</option>
					<?php while ( $loop->have_posts() ) : $loop->the_post(); 
					global $product; 
					$sections = get_the_terms($product->id, 'pa_section');
					foreach ( $sections as $section) {
			 			echo "<option id=" . $section->term_id . " value=";
			 			echo $section->slug . ">";
			 			echo $section->name;
			 			echo "</option>";
				 	}
					?><?php endwhile; ?>
    	<?php wp_reset_query(); ?>
				</select>
			</div>

			
		</div>
	</div>
