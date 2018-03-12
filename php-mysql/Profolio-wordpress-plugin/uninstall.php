<?php
if ( !defined( 'ABSPATH') && !defined('WP_UNINSTALL_PLUGIN') )
exit();
 
	global $wpdb;
	$cat_tbl=$wpdb->prefix."dp_types";
	$work_tbl=$wpdb->prefix."dp_work";
	$client_tbl=$wpdb->prefix."dp_clients";
 	$drop_table1="drop table $cat_tbl";
 	$drop_table2="drop table $client_tbl";
 	$drop_table3="drop table $work_tbl";
 	$wpdb->query($drop_table1);
 	$wpdb->query($drop_table2);
 	$wpdb->query($drop_table3);
 	
	delete_option("dp_db_version");
	delete_option("dp_folio_theme");
	delete_option("dp_client_filter");
	delete_option("dp_year_filter"); 
	delete_option("dp_fancy_title");
	delete_option("dp_per_page");  
	delete_option("dp_show_status");