<?php /** We need to change the information in the database when a category is edited **/
global $wpdb;
$cat_tbl=$wpdb->prefix.'dp_types';

if(isset($_GET['edit']) && $_GET['edit']!="")
{
	require("edit_type.php");
	exit;
}  /**  When deleting a category we need to delete it from the database too **/
if(isset($_GET['del']))
{
	$del_id=$_GET['del'];
	if($del_id!="")
	{
$qry="delete from ".$cat_tbl." where id=".$del_id;
$wpdb->query($qry);
/** Success message **/
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Project type Deleted.</strong></p></div>";
		
	}
}  /** We'll use this to store the categories name into the database **/
if($_POST){
$title=$_POST['type'];
$desc=$_POST['item_desc'];
$title_=strtolower($title);
$slug=str_replace(" ","_",$title_);
if($title!="" && $desc!=""){	
$qry="insert into ".$cat_tbl."(slug,title,description) values('".$slug."','".$title."','".$desc."')";
$wpdb->query($qry);
	/** Success message **/
	echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Project type saved.</strong></p></div>";
}
}
?>
<style type="text/css">
label{
display:block;
}
</style>
<!-- Setting up the form !-->
<h2>Add Project Types</h2>

<table>
<form action="?page=profolio_manage_project_types" method="post">
<tr>
<td><label for="item_type">Project Type:<span class="tip">e.g. web design, logo, php application</span> </label></td>
<td><input type="text" name="type" id="item_type" /></td>
</tr>
<tr>
<td><label for="item_desc">Project Type Description: <span class="tip">You must enter a description or your project type won't save</span></label></td>
<td><textarea rows="5" cols="49" name="item_desc"></textarea></td>
<tr>
<td><input class="button-primary" type="submit" value="Add Project Type" /></td>
<td></td>
</tr>
</tr>
</form>
</table>
<?php

$qry="SELECT * from ".$cat_tbl;
	$rows=$wpdb->get_results($qry,ARRAY_A);
if(count($rows)<1){
	echo "No Project Types Found";
	exit;
}
?>
<table class="form-table widefat" border="1">
<tbody>
<tr>
<th>Project Type</th>
<th>Project Type Description</th>
<th>Edit</th>
<th>Delete</th>
</tr>

<?php  /** Setting up the list of categories **/
foreach ($rows as $row){
?>
<tr>
<td><?php echo $row['title']; ?></td>
<td><?php echo $row['description']; ?></td>  
<td><a href="?page=profolio_manage_project_types&edit=<?php echo $row['id'];?>">Edit</a></td>
<td><a href="?page=profolio_manage_project_types&del=<?php echo $row['id'];?>">Delete</a></td>
</tr>
<?php } ?>
</tbody>
</table>