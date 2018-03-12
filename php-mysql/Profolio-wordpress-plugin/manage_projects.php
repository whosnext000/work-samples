<?php /** Getting the list of projects to edit **/
global $wpdb;
$types_table=$wpdb->prefix."dp_types";
$work_table=$wpdb->prefix."dp_work";
$client_table=$wpdb->prefix."dp_clients";
if(isset($_GET['del']))
{
	$delete="delete from $work_table where id=".$_GET['del'];
	$wpdb->query($delete);
	header("Location: admin.php?page=profolio_manage_project");
}
if(isset($_GET['edit']) && $_GET['edit']!="")
{
	require("edit_item.php");
	exit;
}
$show_proj="select *,$work_table.id AS pid,$types_table.title as cat_title from $types_table,$work_table,$client_table where $types_table.id=$work_table.project_type AND $client_table.id=$work_table.client_name";
$result=$wpdb->get_results($show_proj,ARRAY_A);

?>
<!-- Here's the form !-->
<h2>Manage Your Projects:</h2>
 <?php 
 if(count($result)<1){
	echo "No Projects  Found";
	exit;
}else{
	
 ?>
 <table class="form-table widefat" border="1">
 <tr>
 
 <th>Logo</th>
 <th>Title</th>
 <th>Client</th>
 <th>Category</th>
 <th>Status</th>
 <th>Edit</th>
 <th>Delete</th>
  </tr>
 <?php 
 foreach($result as $row){
 ?>
 <tr>
 <td><img src="<?php echo $row['logo'];?>" alt="<?php echo $row['title']; ?>" /></td>
 <td valign="top"><h3><?php echo $row['title'];?></h3></td>
 <td valign="top"><h3><?php echo $row['name'];?></h3></td>
 <td valign="top"><h3><?php echo $row['cat_title'];?></h3></td>
 <td valign="top">
 <?php 
 if($row['status']=="online"){
 	$color="green";
 }else{
 	$color="red";
 }?>
 <h3><font color="<?php echo $color;?>"><?php echo $row['status'];?></font></h3></td>
 <td valign="middle"><h3><a href="<?php echo $_SERVER['PHP_SELF']."?page=profolio_manage_project&edit=".$row['pid'];?>">Edit</a></h3></td>
 <td valign="middle"><h3><a href="javascript:void(0);" onclick="delete_project(<?php echo $row['pid'];?>,'<?php echo $row['title'];?>');">Delete</a></h3></td>
 
 </tr>
 <?php }?>
 </table>
 
 
 <?php }?>