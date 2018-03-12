<?php /** We need to change the information in the database when a client is edited **/
global $wpdb;
$client_tbl=$wpdb->prefix.'dp_clients';
if(isset($_GET['edit']))
{
	$edit_id=$_GET['edit'];
	if($edit_id!="")
	{
		require("edit_client.php");
		exit;		
	}
}  /**  When deleting a client we need to delete it from the database too **/
if(isset($_GET['del']))
{
	$del_id=$_GET['del'];
	if($del_id!="")
	{
$qry="delete from ".$client_tbl." where id=".$del_id;
$wpdb->query($qry);
/** Success message **/
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Client has been Deleted.</strong></p></div>";
		
	}
} /** We'll use this to store the Clients name into the database **/
if($_POST){
$title=$_POST['client_name']; 
$title_=strtolower($title);
$slug=str_replace(" ","_",$title_);
if($title!=""){	
$qry="insert into ".$client_tbl."(slug,name) values('".$slug."','".$title."')";
$wpdb->query($qry);
	/** Just letting you know that there was a successful save **/
	echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Client Name saved.</strong></p></div>";
}
}
?>

<!-- Now we can display the form !!-->
<h2>Manage Your Clients</h2>

<table>
<form action="?page=profolio_manage_client" method="post">
    <tr>
        <td><label for="item_type">Client Name: </label></td>
        <td><input type="text" name="client_name" id="client_name" /></td>
    </tr>
    <tr>
        <td><input class="button-primary" type="submit" value="Save Client" /></td>
        <td></td>
    </tr>
</td>
</form>

<?php
/**  Oops no clients were found in the database **/
$qry="SELECT * from ".$client_tbl;
	$rows=$wpdb->get_results($qry,ARRAY_A);
if(count($rows)<1){
	echo "No Clients Found";
	exit;
}
?>
<table class="form-table widefat" border="1">
<tbody>
<tr>
<th>Client Name</th>
<th>Edit</th>
<th>Delete</th>
</tr>

<?php  /**  Just setting up the list of clients **/
foreach ($rows as $row){
?>
<tr>
<td><?php echo $row['name']; ?></td>  
<td><a href="?page=profolio_manage_client&edit=<?php echo $row['id'];?>">Edit</a></td>
<td><a href="?page=profolio_manage_client&del=<?php echo $row['id'];?>">Delete</a></td>
</tr>
<?php } ?>
</tbody>
</table>