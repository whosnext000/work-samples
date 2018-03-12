<?php
/*
 Plugin Name: ProFolio
 Plugin URI: http://profolio.elionweb.com/help
 Description: The Dynamic Portfolio that can be filtered and placed anywhere.
 Version: 2.0.0
 Author: eLIONWEB
 Author URI: http://www.elionweb.com
 */
 
 /* Table of Contents
 ---------------------*/
 /* 1. Plugin Setup
-----------------------*/
	
/*--------------------------------------
Plugin Setup
---------------------------------------*/
 /** Just some regular database queries **/
global $jal_db_version;
$jal_db_version = "1.0";
function jal_install () {
	global $wpdb;
	global $jal_db_version;
	$table_name = $wpdb->prefix . "dp_work";
	$table_name1 = $wpdb->prefix . "dp_types";
	$table_client=$wpdb->prefix."dp_clients";
	$table_settings=$wpdb->prefix."dp_settings";
	if($wpdb->get_var("show tables like '$table_client'") != $table_client) {
	
	$client_sql="CREATE TABLE $table_client (
  id SMALLINT(6) NOT NULL AUTO_INCREMENT,
  slug VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)";
	}
	if($wpdb->get_var("show tables like '$table_settings'") != $table_settings ){
		$settings_sql="CREATE TABLE $table_settings (
			id SMALLINT(6) NOT NULL AUTO_INCREMENT,
			filter VARCHAR(150) NOT NULL,
			active_filter enum('yes','no') DEFAULT 'yes',
			col VARCHAR(50) NOT NULL,
			PRIMARY KEY (id)
		)";	
	}
	if($wpdb->get_var("show tables like '$table_name'") != $table_name) {
		$sql='CREATE TABLE '.$table_name.' (
				  id smallint(6) NOT NULL AUTO_INCREMENT,
				  title varchar(150) NOT NULL,
				  project_type text,
				  content text NOT NULL,
				  tech text NOT NULL,
				  logo text,
				  screen text,
				  web_url text,
				  client_name varchar(100) NOT NULL,
				  status enum("online","offline") DEFAULT "online",
				  status_show enum("yes","no") DEFAULT "yes",
				  project_year varchar(5) NOT NULL,
				  show_excerpt enum("yes","no") DEFAULT "no",
				  date_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)				  
			)';
	}
	if($wpdb->get_var("show tables like '$table_name1'") != $table_name1) {
		$sql1='CREATE TABLE '.$table_name1.' (
  id smallint(6) NOT NULL AUTO_INCREMENT,
  slug varchar(150) NOT NULL,
  title varchar(150) NOT NULL,
  description text NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY title (title)
)';
	} /** Smoothly updates the plugin **/
	require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
	dbDelta($sql);
	dbDelta($sql1);
	dbDelta($client_sql);
	dbDelta($settings_sql);
	add_option("dp_db_version", $jal_db_version);
	add_option("dp_folio_theme","default.css");
	add_option("dp_show_filter", "yes");
	add_option("dp_fancy_title","outside");
	add_option("dp_per_page",2);  
	
}	/** So that changing settings can effect the correct part of the plugin **/
function dp_register_settings()
{
	register_setting( 'dp_folio_settings', 'dp_folio_theme' );
	register_setting( 'dp_folio_settings', 'dp_show_filter');
	register_setting( 'dp_folio_settings', 'dp_per_page' );
	register_setting( 'dp_fancy_settings', 'dp_fancy_title' );
	
}
add_action('admin_init', 'dp_register_settings' );
register_activation_hook(__FILE__,'jal_install');

add_action('admin_menu', 'profolio_menu');
/**  Now we're going to show the different menu items in the control panel **/
function profolio_menu() {
	add_menu_page('elionweb Portfolio Manager', 'ProFolio', 'manage_options', 'elionweb', 'main_page','/wp-content/plugins/Profolio/images/crest.png',1);
	add_submenu_page( 'elionweb', 'Add Projects', 'Add Projects', 'manage_options', 'profolio_add_project', 'add_projects');
	add_submenu_page( 'elionweb', 'Manage Clients', 'Manage Clients', 'manage_options', 'profolio_manage_client', 'profolio_manage_client');
	add_submenu_page( 'elionweb', 'Manage Projects', 'Manage Projects', 'manage_options', 'profolio_manage_project', 'profolio_manage_project');
	add_submenu_page( 'elionweb', 'Manage Project Types', 'Manage Project Types', 'manage_options', 'profolio_manage_project_types', 'manage_cat');
	$page_hook_suffix = add_submenu_page( 'elionweb', 'Settings', 'Settings', 'manage_options', 'profolio_theme', 'profolio_theme');
	
add_action('admin_print_styles', 'dp_load_styles');
add_action('admin_print_scripts-' . $page_hook_suffix, 'dp_load_script');
add_action('admin_print_scripts', 'dp_load_scripts');
}  /**  We need to pull information from the correct files **/
function profolio_manage_client()
{
	?><div class="dp_wrap wrap">
	<?php require("add_client.php");?>
	</div>
<?php }
function profolio_manage_project()
{
	?><div class="dp_wrap wrap" style="padding-left: 20px;">
	<?php require("manage_projects.php");?>
	</div>
<?php }
function main_page()
{
	?>
	<div class="dp_wrap wrap"><?php require("general.php");?></div>
	<?php 
}
function manage_cat()
{

	?>
<div class="dp_wrap wrap"><?php require("add_project_type.php");?></div>
	<?php
}
function add_projects()
{

	?>
<div class="dp_wrap wrap" style="padding-left: 20px;"><?php require("add_projects.php");?>
</div>
	<?php
}
function load_scripts(){
	global $wp_version;
	
	if($wp_version >= 3.6){
		wp_enqueue_script('jquery');
	}
}
add_action('wp_enqueue_scripts', 'load_scripts');
function portfolio_libs()
{
	global $wp_version;
	/** We just need to load some external files to make this all work **/
echo "<link href='".path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/css/theme/".get_option("dp_folio_theme"))."' rel='stylesheet' />";
if ($wp_version > 3.4 && $wp_version < 3.6){
	echo "<script type='text/javascript' src='".path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/jquery.js")."'></script>";
}
echo "<script type='text/javascript' src='".path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/fancybox.js")."'></script>";
echo "<script type='text/javascript' src='".path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/filterable.pack.js")."'></script>";	
echo "<script type='text/javascript' src='".path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/portfolio.js")."'></script>";
?>
  <!-- Here we'll define some options for the fancybox !-->
<script type="text/javascript">
jQuery(function(){
$("a.fancyinline").fancybox({
	'transitionIn'	:	'fade',
	'transitionOut'	:	'elastic',
	'speedIn'		:	600, 
	'speedOut'		:	200, 
	'overlayShow'	:	true,
	'titlePosition'		:	'<?php echo get_option("dp_fancy_title");?>'

});
});
</script>
<?php 	
}
function profolio_theme()
{
	require("profolio_theme.php");
	exit;
} 
function show_portfolio()
{
	ob_start();
	
	require("show_port.php");
	
	$output = ob_get_contents();
	
	ob_end_clean();
	
	return $output;
}
add_shortcode("portfolio",show_portfolio);
add_action("wp_head",portfolio_libs);
 
function dp_load_styles() /**  We need to load some files here to make everything work ok **/
{
	wp_enqueue_style("validate_css",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/css/validationEngine.jquery.css"));
	wp_enqueue_style("admin_css",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/css/admin.css"));
}
function dp_load_script()
{
	wp_enqueue_script("framework2",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/framework.js"),array("jquery"));
}
function dp_load_scripts()
{
	wp_enqueue_script("framework",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/jquery.validationEngine.js"),array("jquery"));
	wp_enqueue_script("framework1",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/jquery.validationEngine-en.js"));
	wp_enqueue_script("framework3",path_join(WP_PLUGIN_URL,basename(dirname(__FILE__))."/js/admin.js"),array("jquery"));
}
?>