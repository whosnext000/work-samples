<?php
/**
	Activate Woocommerce
**/
include_once( ABSPATH . 'wp-admin/includes/plugin.php' ); 
activate_plugin(ABSPATH . 'wp-content/plugins/woocommerce/woocommerce.php');
/**
 * Initialize Seat Funnel plugin
 */

function sf_plugin_seat_init() {

	// Make plugin available for translation, you can change /languages/ to your .mo-files folder name
	load_plugin_textdomain( 'seat-funnel', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

}
// Hook to plugins_loaded
add_action( 'plugins_loaded', 'sf_plugin_seat_init' );
add_action( 'admin_menu', 'sf_add_admin_menu' );
add_action( 'admin_init', 'sf_settings_init' );


function sf_add_admin_menu(  ) { 

	add_menu_page( 'Seat Funnel', 'Seat Funnel', 'manage_options', 'seat_funnel', 'sf_options_page' );

}


function sf_settings_init(  ) { 

	register_setting( 'pluginPage', 'sf_settings' );

	add_settings_section(
		'sf_pluginPage_section', 
		__( 'Standard Gallery for Tickets', 'seat-funnel' ), 
		'sf_settings_section_callback', 
		'pluginPage'
	);
}

add_action( 'admin_footer', 'media_selector_print_scripts' );

function media_selector_print_scripts() {

	$my_saved_attachment_post_id = get_option( 'media_selector_attachment_id', 0 );

	?><script type='text/javascript'>
		jQuery( document ).ready( function( $ ) {
			// Uploading files
			var file_frame;
			var wp_media_post_id = wp.media.model.settings.post.id; // Store the old id
			var set_to_post_id = <?php echo $my_saved_attachment_post_id; ?>; // Set this
			jQuery('#upload_image_button').on('click', function( event ){
				event.preventDefault();
				// If the media frame already exists, reopen it.
				if ( file_frame ) {
					// Set the post ID to what we want
					file_frame.uploader.uploader.param( 'post_id', set_to_post_id );
					// Open frame
					file_frame.open();
					return;
				} else {
					// Set the wp.media post id so the uploader grabs the ID we want when initialised
					wp.media.model.settings.post.id = set_to_post_id;
				}
				// Create the media frame.
				file_frame = wp.media.frames.file_frame = wp.media({
					title: 'Select a image to upload',
					button: {
						text: 'Use this image',
					},
					multiple: false	// Set to true to allow multiple files to be selected
				});
				// When an image is selected, run a callback.
				file_frame.on( 'select', function() {
					// We set multiple to false so only get one image from the uploader
					attachment = file_frame.state().get('selection').first().toJSON();
					// Do something with attachment.id and/or attachment.url here
					$( '#image-preview' ).attr( 'src', attachment.url ).css( 'width', 'auto' );
					$( '#image_attachment_id' ).val( attachment.id );
					// Restore the main post ID
					wp.media.model.settings.post.id = wp_media_post_id;
				});
					// Finally, open the modal
					file_frame.open();
			});
			// Restore the main ID when the add media button is pressed
			jQuery( 'a.add_media' ).on( 'click', function() {
				wp.media.model.settings.post.id = wp_media_post_id;
			});
		});
	</script><?php
}


function sf_settings_section_callback(  ) { 

	echo __( 'Select or Upload images for the standard gallery shown on the popups.', 'seat-funnel' );

	// Save attachment ID
	if ( isset( $_POST['submit_image_selector'] ) && isset( $_POST['image_attachment_id'] ) ) :
		update_option( 'media_selector_attachment_id', absint( $_POST['image_attachment_id'] ) );
	endif;

	wp_enqueue_media();
	?>
	<form method='post'>
		<div class='image-preview-wrapper'>
			<img id='image-preview' src='<?php echo wp_get_attachment_url( get_option( 'media_selector_attachment_id' ) ); ?>' height='100'>
		</div>
		<input id="upload_image_button" type="button" class="button" value="<?php _e( 'Select/Upload image' ); ?>" />
		<input type='hidden' name='image_attachment_id' id='image_attachment_id' value='<?php echo get_option( 'media_selector_attachment_id' ); ?>'>
		<input type="submit" name="submit_image_selector" value="Save" class="button-primary">
	</form><?php

}


function sf_options_page(  ) { 

	?>
	<form action='options.php' method='post'>

		<h2>Seating Chart for Churchill Downs</h2>

		<?php
		settings_fields( 'pluginPage' );
		do_settings_sections( 'pluginPage' );
		submit_button();
		?>

	</form>
	<?php

}
