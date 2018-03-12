<?php  /** Telling the database that we're updating the following details **/
if($_POST)
{	
$title=$_POST['project_title'];
$content=addslashes($_POST['project_content']);
$Tech=$_POST['project_tech'];
$client=$_POST['project_client'];
$url=$_POST['project_url'];
$year=$_POST['project_year'];
$status=$_POST['project_status'];
$status_show=$_POST['show_project_status'];
$show_excerpt=$_POST['project_excerpt'];
$type=$_POST['project_type'];
$table_work=$wpdb->prefix."dp_work";
$id=$_GET['edit'];
$upload_item=",";

if($_FILES["project_logo"]['error']==0){

$upload_logo = wp_upload_bits($_FILES["project_logo"]["name"], null, file_get_contents($_FILES["project_logo"]["tmp_name"]));
$upload_item.="logo='".$upload_logo['url']."',";
} 
if($_FILES["project_screen"]['error']==0){
$upload_screen = wp_upload_bits($_FILES["project_screen"]["name"], null, file_get_contents($_FILES["project_screen"]["tmp_name"]));
$upload_item.="screen='".$upload_screen['url']."',";
} 
echo $upload_screen['error'];
if($upload_screen['error'] || $upload_logo['error'])
{ /** Error message **/
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>There is some error to upload files...</strong></p></div>";
}
 
 $update="update $table_work set title='$title',show_excerpt='$show_excerpt',project_type='$type',content='$content',tech='$Tech' $upload_item web_url='$url',client_name='$client',project_year='$year',status='$status', status_show='$status_show' where id=".$id;	
$ok=$wpdb->query($update);

if($ok==0)
{
	echo mysql_error();
}
else
{ 
	header("Location: admin.php?page=profolio_manage_project");
}
}
$qry="select *,$work_table.id AS pid,$types_table.title as cat_title from $types_table,$work_table,$client_table where $types_table.id=$work_table.project_type AND $client_table.id=$work_table.client_name and $work_table.id=".$_GET['edit'];
$result=$wpdb->get_results($qry,ARRAY_A);
$types="select * from $types_table";
$sql_client="select * from $client_table";
$project_client=$wpdb->get_results($sql_client,ARRAY_A);
$project_types=$wpdb->get_results($types,ARRAY_A);
foreach($result as $row){
?>
<style type="text/css">
label{
display:block;
}
</style>
<!-- Here's the form !-->
<h2>Update Your Project Details:</h2>

<form action="" method="post" enctype="multipart/form-data">

<table border="0" cellpadding="2" cellspacing="2">

<tr>
<td><label for="project_title">Project Title:</label></td>
<td><input type="text" class="validate[required,length[0,35]]" size="40" id="project_title" value="<?php echo $row['title'];?>" name="project_title" /></td>
</tr>
<tr>
<td valign="top"><label for="project_type">Project Type:</label></td>
<td><select id="project_type"  size="4" style="height: 100px;" class="validate[required]"  name="project_type" >
<option value="">Choose Type</option>
<?php 

 /** Listing the categories that are available **/
 
foreach ($project_types as $type){
?>
<option value="<?php echo $type['id'];?>" <?php if($row['project_type']==$type['id']){echo "selected='selected'";}?>><?php echo $type['title'];?></option>
<?php }?>
</select></td>
</tr>

<tr>
<td valign="top"><label for="project_logo">Project Logo (if new):</label></td>
<td>
<input type="file" class="validate[required]" name="project_logo" id="project_logo" size="35" />
<img src="<?php if ( $row['logo'] ) { echo $row['logo']; } ?>" alt="<?php if ( $row['title'] ) { echo $row['title']; } ?>" />
</td>
</tr>
<tr>
<td valign="top"><label for="project_screen">Project Screen Shot (if new):</label></td>
<td>
<input type="file" class="validate[required]" name="project_screen" id="project_screen" size="35" />
<img src="<?php if ( $row['screen'] ) { echo $row['screen']; } ?>" alt="<?php if ( $row['title'] ) { echo $row['title']; } ?>" />
</td>
</tr>
<tr>
<td valign="top"><label for="project_content">Project Description:</label></td>
<td>
<textarea id="project_content" class="validate[required]" name="project_content" rows="10" cols="50">
<?php echo $row['content'];?> 
</textarea>
</td>
</tr>
<tr>
<td valign="top"><label for="project_excerpt">Show Excerpt?</label></td>
<td><input type="hidden" id="project_excerpt_no" name="project_excerpt" value="no" />
<input <?php if($row['show_excerpt']=="yes"){?>checked="checked"<?php }?> type="checkbox" id="project_excerpt" name="project_excerpt" value="yes" /></td>
</tr>

<tr>
<td valign="top"><label for="project_tech">Project Technologies:</label></td>
<td>
<textarea id="project_tech" class="validate[required]" name="project_tech" rows="2" cols="50">
<?php echo $row['tech'];?>
</textarea>
</td>
</tr>
<tr>
<td><label for="project_client">Client Name:</label></td>
<td>
<select id="project_client" class="validate[required]" name="project_client">
<option value="">Choose Client</option>
<?php

/** Finding the list of available clients **/

foreach ($project_client as $client){
?>
<option value="<?php echo $client['id'];?>" <?php if($row['client_name']==$client['id']){echo "selected='selected'";}?>><?php echo $client['name'];?></option>
<?php }?>
</select>

</td>
</tr>
<tr>
<td><label for="project_url">Project Url:</label></td>
<td><input type="text" size="40" class="validate[required]" id="project_url" name="project_url" value="<?php echo $row['web_url'];?>" /></td>
</tr>

<tr>
<td><label for="project_year">Project Year:</label></td>
<td><input type="text" size="40" class="validate[required,custom[onlyNumber],length[0,4]]" id="project_year" name="project_year" value="<?php echo $row['project_year'];?>" /></td>
</tr>

<tr>
<td><label for="project_status">Project Status:<span class="tip">Is this project Online of Offline?</span></label></td>
<td>
<input type="hidden" id="project_status_off" name="project_status" value="offline" />
<input <?php if($row['status']=="online"){?>checked="checked"<?php }?> type="checkbox" id="project_status" name="project_status" value="online" />
</td>
</tr>
<tr>
<td><label for="project_status">Show Project Status:</label></td>
<td>
<input <?php if($row['status_show']=="yes"){?>checked="checked"<?php }?> type="checkbox" id="show_project_status" name="show_project_status" value="yes" />
</td>
</tr>

<tr><td colspan="2">&nbsp;</td></tr>
<tr><td align="right">
<input class="button-primary" type="submit" value="Update Project" /></td><td>
<input class="button-primary" type="button" onclick="window.location='<?php echo $_SERVER['PHP_SELF']."?page=profolio_manage_project";?>'" value="Cancel" /></td></tr>
</table>
</form>
<?php }?>