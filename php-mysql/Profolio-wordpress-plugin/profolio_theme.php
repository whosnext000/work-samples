<?php
global $wpdb;
$settings_tbl=$wpdb->prefix.'dp_settings';
$work_tbl=$wpdb->prefil.'dp_work';

$i = 0;
?>
<div class="wrap">
<div class="dp_wrap widefat">
<h2>ProFolio Settings</h2>
<div id="tabs">
			<ul>
				<li><a href="#general">General</a></li>
                <li><a href="#filters">Filters</a></li>
				<li><a href="#fancybox">FancyBox</a></li> 
			</ul>
				
			<div id="general">         
<table>			
<form method="post" action="options.php">
<tr>
<?php  /** Selecting themes **/
	settings_fields("dp_folio_settings");
?>
<td><label for="theme_list">Select Theme:<span class="tip">You may add as many css styles as you like to wordpress-root/wp-content/plugins/Profolio/css/theme</span></label></td>

<td><select id="theme_list" name="dp_folio_theme">
<?php 


$theme_path=WP_PLUGIN_DIR."/".basename(dirname(__FILE__))."/css/theme";

$current_theme=get_option("dp_folio_theme");
if ($handle = opendir($theme_path)) { 
 while (false !== ($file = readdir($handle))) {
if($file!="." && $file!="..")
{
	if($file==$current_theme){
		
		$selected="selected='selected'";
	}else{
		$selected="";
	}
	$file_type=explode(".",$file);
	if($file_type[1]=="css"){
	
	echo "<option value='$file'  $selected>$file</option>";
}
}
 
} 
    closedir($handle);
}
?> 
</select></td>
</tr>
<tr>
  <!-- How many results per page to show !-->
<td> <label for="show_per_page">Result Per Page:<span class="tip">How many results do you want to show per paginated page?</span></label></td>
<td><input type="text" name="dp_per_page" value="<?php echo get_option("dp_per_page");?>" /></td>
</tr>
<tr>
<td><input type="submit" class="button-primary" value="SAVE" /></td>
<td></td>
</tr>
</form>
</table>

</div>
<div id="filters">
<!--------------------------------->
<!--------- Filter Options -------->
<!--------------------------------->
<table>
<form method="post" action="">
	<tr>
<?php
/*------------------------------------------*/
/*    We'll use this to save new filters    */
/*------------------------------------------*/
if($_POST){
	$filter=$_POST['new_filter'];
	$filter_col=$_POST['filter_cols'];
	if($filter!=""){	
	$qry="insert into ".$settings_tbl."(filter,col) values('".$filter."','".$filter_col."')";
	$wpdb->query($qry);
	/** Just letting you know that there was a successful save **/
	echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
	<p><strong>New Filter Saved.</strong></p></div>";
	}
}
/*------------------------------------------*/
/*    We'll use this to delete filters      */
/*------------------------------------------*/
if(isset($_GET['del']))
{
	$del_id=$_GET['del'];
	if($del_id!="")
	{
$qry="delete from ".$settings_tbl." where id=".$del_id;
$wpdb->query($qry);
/** Success message **/
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Filter has been Deleted.</strong></p></div>";
		
	}
}
/*------------------------------------------*/
/*    Check if the filter is active or not  */
/*------------------------------------------*/

$settings="select * from wp_dp_settings";
$filters=$wpdb->get_results($settings,ARRAY_A);

/*------------------------------------------*/
/*          Get the filter columns          */
/*------------------------------------------*/

$fquery = "DESCRIBE wp_dp_work";
$filter_cols = $wpdb->get_results($fquery,ARRAY_A);

?>
<td><label for="new_filter">Create a New Filter :<span class="tip">Must be one word</span></label></td>
<td><input type="text" name="new_filter" id="new_filter"/></td>
<td></td>
<tr>
<td><label for="choose_table">Which database column do you want to use?</label></td>
<td><select name="filter_cols" id="filter_cols">
<option selected="selected" disabled="disabled">- Select -</option>
<?php foreach ( $filter_cols as $cols ) {
	?>
    <option>
    <?php 
		echo $cols['Field'];
	?>
    </option>
    <?php
}
?>
</select></td>
<td></td>
</tr>
</tr>
<!-- Turn Filters On/Off -->
<?php $object = new stdClass(); ?>
<?php foreach( $filters as $key => $value ) {
	?>
    <tr>
    	<td><label for="show_filter_name"><?php echo $object->$key = $value['filter']; ?> Filter</label>
        <input type="hidden" name="show_filter_name" id="show_filter_name" value="<?php echo $object->$key = $value['filter'] ?>"/></td>
        <td><label for="show_filter_col">Column Used: <?php echo $object->$key = $value['col']; ?></label>
        <select style="display:none;" name="filter_cols" id="filter_cols">
            <option selected="selected" disabled="disabled">- Select -</option>
            <?php foreach ( $filter_cols as $cols ) {
                ?>
                <option>
                <?php
                echo $cols['Field'];
                ?>
                </option>
                <?php
            }
            ?>
            </select></td>
        <td><a class="button-primary" href="?page=profolio_theme&del=<?php echo $object->$key = $value['id'];?>">Delete</a></td>
    </tr>
    <?php
	$i++;
}
?>
<tr>
<td><input type="submit" class="button-primary" value="SAVE" /></td>
<td></td>
<td></td>
</tr>
</table>
</form>
</div>            
            
<div id="fancybox">
			
<!-- Settings for the fancybox !-->
<table>
<form method="post" action="options.php">
<?php 
	settings_fields("dp_fancy_settings");
?>
<!-- We want to find the title positions for fancybox !-->
<tr>
<td><label for="title_position">Title Position:<span class="tip">Choose where you want the title to be displayed inside the fancybox.</span></label></td>
<td><select id="title_position" name="dp_fancy_title">
<?php $fancy_title=get_option("dp_fancy_title");?>

<option value="outside" <?php if($fancy_title=="outside"){echo "selected='selected'";}?>>Outside</option>
<option value="inside" <?php if($fancy_title=="inside"){echo "selected='selected'";}?>>Inside</option>
<option value="over" <?php if($fancy_title=="over"){echo "selected='selected'";}?>>Over</option>
</select></td>
</tr>
<tr>
<td><input type="submit" class="button-primary" value="SAVE" /></td>
<td></td>
</tr>
</form>
</table>
</div>
			
</div>
</div>
</div>
