<?php /** The database needs to know what we're updating **/
if(isset($_POST['client_name']))
{
	$name=$_POST['client_name'];
	$title_=strtolower($name);
$slug=str_replace(" ","_",$title_);
	
	$update="update $client_tbl set name='$name', slug='$slug' where id=".$edit_id;
	$wpdb->query($update);
	header("Location: ?page=profolio_manage_client");
}
$qry="SELECT * from ".$client_tbl." where id=".$edit_id;
$rows=$wpdb->get_results($qry,ARRAY_A);
?>
<style type="text/css">
label{
display:block;
}
</style>
<!-- Here's the form fo updating clients !-->
<h2>Update Your Client Details:</h2>

<table>
<form action="" method="post">
    <tr>
    	<td><label for="item_type">Client Name: </label></td>
    	<td><input type="text" value="<?php echo $rows[0][name];?>" name="client_name" id="client_name" /></td>
    </td>
    <tr>
    	<td><input class="button-primary" type="submit" value="Update Client" /></td>
    	<td></td>
    </tr>
</form>
</table>