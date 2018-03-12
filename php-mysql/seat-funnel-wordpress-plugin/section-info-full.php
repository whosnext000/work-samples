<?php $parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' ); 

	global $post;

	$args = array( 'post_type' => 'product', 'posts_per_page' => 200, 'product_cat' => 'kentucky-derby-tickets' );
	$loop = new WP_Query($args); 
	$comments = get_comments(); ?>

		<div class="cover"></div>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
		global $product;
		$simple_products = $product->product_type == 'simple';
		$variable_products = $product->product_type == 'variable'; 
		$rows = get_the_terms($product->id, 'pa_row'); 
		if($variable_products){
			$product_variations = $product->get_available_variations();
		}
		$arr_variations_id = array();
?>
			<!-- Add to cart -->
		<!-- Popup for ticket information -->
		<div class="popup-full myriadGlobal sct-<?php echo $product->get_attribute( 'section' ); ?>" id="<?php echo $product->get_attribute( 'section' ); ?>">
			  <div class="wrapper">
			    <div class="bottomSep">
			    <h1>Kentucky Derby: May 7th, 2017</h1>
			    	<section class="seatArea col_two">
			    		<section class="col_two">
				      <header>
				        <h2>Section <?php echo $product->get_attribute( 'section' ); ?></h2>
				        <h3 id="row">Row

				        <?php if (isset($_POST['pa_row']) || $_SESSION['pa_row']){
						   exit;
						}?>
				        	<select name="pa_row" class="select_pa_row" id="select-big">
				        		<?php foreach ( $rows as $row) {
				        				foreach ($product_variations as $variation){
				        					$the_variation = $variation['attributes']['attribute_pa_row'];
											$the_variation_slug = $row->slug;
											$product_variation_id = $variation['variation_id'];
											$product_price = variation_price($product_variation_id);
											if($variable_products){
												if($the_variation == $the_variation_slug){
					        			 			echo "<option id=" . $the_variation_slug . " value=";
					        			 			echo $product_variation_id . ">";
					        			 			echo $row->name;
					        			 			echo "</option>";
					        			 		} 
					        			 	}
				        			 	}
				        			 	if($simple_products) {
			        			 			echo "<option class=" . $the_variation_slug . " value=" . $row->term_id . ">" . $row->name . "</option>";
			        			 		}
				        			 } ?>
				        	</select>
				        </h3>
				      </header>
				      </section>
				      <section class="col_two">
				      <p><strong>Available Tickets:</strong> <?php echo $product->get_stock_quantity(); ?></p>
				      <p><strong>Price:</strong>
				      <?php 
				      if($simple_products) { 
				      		echo "<span class='simple_price'>" . $product->get_price() . "";
				      		} ?>
				      		</span>
				      <?php  ///Display actively selected variant price
						foreach ($product_variations as $variation) {
						    	$product_variation_id = $variation['variation_id'];
						    	$the_variation = $variation['attributes']['attribute_pa_row'];
								$the_variation_slug = $row->slug;
						    //var_dump($row_id);
						    //$is_active = $variation['variation_is_active'];
						    $product_price = variation_price($product_variation_id);
						    //var_dump($variation['variation_id']);
						   	//var_dump($row);
						    if($variable_products){ echo '<span class="variation-price '.$product_variation_id.'" style="display: none;">$' . $product_price . '</span>';}
						    //var_dump($is_active);
						}?></p>

						   
						   </section>
			      </section>

			      <section class="col_two">
				      <section class="prdExcerpt">
				      <section class="buy">
				      <form class="cart" method="post" action="<?php //echo $woocommerce->cart->get_cart_url(); ?>" enctype="multipart/form-data">

						    <input type="hidden" name="add-to-cart" value="<?php echo get_the_ID(); ?>">
							<?php if($variable_products) { ?>
								<input type="hidden" name="variation_id" value="" />
								<input class="variable-att" type="hidden" name="attribute_pa_row" value="" />
							<?php } ?>
							<?php if($simple_products) { ?>
								<input class="simple-att" type="hidden" name="attribute_pa_row" value="" /> 
							<?php } ?>

						    <button type="submit" class="single_add_to_cart_button button alt" <?php echo apply_filters('single_add_to_cart_text', __('Buy this Ticket', 'woocommerce'), $product->product_type); ?>><i class="fa fa-cart-plus" aria-hidden="true"></i>Buy this Ticket</button>

						   <div class="qty">QTY<br/><?php echo woocommerce_quantity_input(); ?></div>
						</form>
						</section>
			      <article class="sectionExcerpt">
					<?php
					foreach ($product_variations as $variation) {
						    	$product_variation_id = $variation['variation_id'];
						    	$the_variation = $variation['attributes']['attribute_pa_row'];
								$the_variation_slug = $row->slug;
								$the_att_desc = $row->description;
								$the_variation_desc = $variation['variation_description'];
								if($variable_products && $the_variation_desc){ echo '<span class="variation-desc '.$product_variation_id.'" style="display: none;">' . $the_variation_desc . '</span>';
								} 
					} if($variable_products){
						echo '<span class="product-desc" style="display: none;">';
					} else {
						echo '<span class="product-desc">';
					}
					echo the_excerpt() . '</span>'; ?>
			        <!-- if row has description else show product short description -->
			      </article>
			      	</section>
			      </section>
			    </div>

			    <div class="topSep">
			        <section class="prdDescription">
			        	<article>
			        		<div class="col_two">
			        			<h4>Product Desctription</h4>
			        			<header>
			        				<h5>
			        					<?php $product->name = get_the_title($product->ID); echo $product->name; ?>
			        				</h5>
			        			</header>
			        		</div>
			        		<div class="col_two">
			        			<header>
			        				<h6>Latest Testimonial</h6>
			        			</header>
			        			<p><?php echo latest_review(); ?></p>
			        		</div>
			        		<div class="prdContent">
			        			<p><?php echo the_content(); ?></p>
			        		</div>
			        	</article>
			        </section>
			    </div>
			  </div>
		</div>
		<!-- /.popup-full -->
		<?php endwhile; ?>
    	<?php wp_reset_query(); ?>