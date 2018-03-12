<?php  /** We're just making sure that everything saves correctly **/
$title=$_POST['project_title'];
$content=addslashes($_POST['project_content']);
$Tech=$_POST['project_tech'];
$client=$_POST['project_client'];
$url=$_POST['project_url'];
$year=$_POST['project_year'];
$status=$_POST['project_status'];
$status_show=$_POST['show_project_status'];
$show_excerpt=$_POST['project_excerpt'];
$table_work=$wpdb->prefix."dp_work";

if(isset($_FILES["project_screen"])){
$upload_screen = wp_upload_bits($_FILES["project_screen"]["name"], null, file_get_contents($_FILES["project_screen"]["tmp_name"]));
}
if(isset($_FILES["project_logo"])){
$upload_logo = wp_upload_bits($_FILES["project_logo"]["name"], null, file_get_contents($_FILES["project_logo"]["tmp_name"]));
}
if($upload_screen['error'] || $upload_logo['error'])
{
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>There is some error to upload files...</strong></p></div>";
}
else
{
	$logo_url=$upload_logo['url'];
	$screen_url=$upload_screen['url'];
} 
foreach($_POST['project_type'] as $types=>$type_id)
{ 
	$type=$type_id;
	$query="insert into $table_work (title,project_type,content,tech,logo,screen,web_url,client_name,project_year,status,status_show)  
values ('$title','$type','$content','$Tech','$logo_url','$screen_url','$url','$client','$year','$status','$status_show')";
$ok=$wpdb->query($query);

}
if($ok==0)
{
	echo mysql_error();
}
else
{
echo "<div class='updated settings-error' id='setting-error-settings_updated'> 
<p><strong>Project Saved...</strong></p></div>";	
}

?>