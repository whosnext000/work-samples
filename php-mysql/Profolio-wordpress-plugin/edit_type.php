<?php  /** We need to tell the database what we're editing **/
if($_POST)
{
$title=$_POST['type'];
$desc=$_POST['item_desc'];
$title_=strtolower($title);
$slug=str_replace(" ","_",$title_);
if($title!="" && $desc!=""){	
$qry="update $cat_tbl set slug='$slug',title='title',description=$desc where id=".$_GET['edit'];
$wpdb->query($qry);
header("Location: admin.php?page=profolio_manage_project_types");
}
}
$edit_show="select * from $cat_tbl where id=".$_GET['edit'];
$result=$wpdb->get_results($edit_show,ARRAY_A);
?>

<style type="text/css">
label{
display:block;
}
</style>
<!-- Displaying the form !-->
<h2>Add Project Types</h2>

<table>
<form action="?page=profolio_manage_project_types" method="post">
	<?php foreach($result as $row){?>
    <tr>
    	<td><label for="item_type">Project Type: <span class="tip">e.g. web design, logo, php application</span></label></td>
    	<td><input type="text" name="type" id="item_type" value="<?php echo $row['title'];?>"/></td>
    </tr>
    <tr>
    	<td><label for="item_desc">Project Type Description: <span class="tip">You must enter a description or your project type won't save</span></label></td>
    	<td><textarea rows="5" cols="49" name="item_desc"><?php echo $row['description'];?></textarea></td>
    </tr>
    <?php }?>
    <tr>
    	<td><input class="button-primary" type="submit" value="Update Type" /></td>
    	<td><input class="button-primary" type="button" onclick="window.location='<?php echo $_SERVER['PHP_SELF']."?page=profolio_manage_project_types";?>'" value="Cancel" /></td>
    </td>
</form>
</table>