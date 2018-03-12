<?php  /** We need to use save.php to post the correct information to the database **/
global $wpdb;
if($_POST){
require("save.php");
}
$type_table=$wpdb->prefix."dp_types";
$client_table=$wpdb->prefix."dp_clients";
$types="select * from $type_table";
$sql_client="select * from $client_table";
$project_client=$wpdb->get_results($sql_client,ARRAY_A);
$project_types=$wpdb->get_results($types,ARRAY_A);
?> 
<!-- Now we can set up the form !-->
<div class="wrap">
<div id="icon-index" class="icon-brand"><br /></div>
<h2>Add Your Project:</h2>
 
<form action="" id="add_project" name="add" method="post" enctype="multipart/form-data" >
<table border="0">
    <tr>
    <td><label for="project_title">Project Title:</label></td>
    <td><input type="text" class="validate[required,length[0,35]]" size="40" id="project_title" name="project_title" /></td>
    </tr>
    <tr>
    <td valign="top"><label for="project_type">Project Type:<span class="tip">Hold Ctrl for mutiple choices</span></label></td>
    <td><select id="project_type"  size="8" multiple="multiple"  class="validate[required]"  name="project_type[]" >
    <option value="" disabled="disabled">Choose Type</option>
    <?php  
    
    /* Listing the available categories to choose from **/
    
    foreach ($project_types as $type){
    ?>
    <option value="<?php echo $type['id'];?>"><?php echo $type['title'];?></option>
    <?php }?>
    </select></td>
    </tr>
    
    <tr>
    <td valign="top"><label for="project_logo">Project Logo (if any):<span class="tip">For best results, keep max size 250x78</span></label></td>
    <td>
    <input type="file" class="validate[required]" name="project_logo" id="project_logo" size="35" />
    </td>
    </tr>
    <tr>
    <td valign="top"><label for="project_screen">Project Screen Shot (if any):<span class="tip">For best results, keep width max 360px</span></label></td>
    <td>
    <input type="file" class="validate[required]" name="project_screen" id="project_screen" size="35" />
    </td>
    </tr>
    <tr>
    <td valign="top"><label for="project_content">Project Description:<span class="tip">Simple HTML tags accepted.<br/>No auto-formatting.</span></label></td>
    <td>
    <textarea id="project_content" class="validate[required]" name="project_content" rows="10" cols="50"></textarea>
    </td>
    </tr>
    <tr>
    <td valign="top"><label for="project_excerpt">Show Excerpt?</label></td>
    <td><input type="hidden" id="project_excerpt_no" name="project_excerpt" value="no" />
    <input <?php if($row['show_excerpt']=="yes"){?>checked="checked"<?php }?> type="checkbox" id="project_excerpt" name="project_excerpt" value="yes" /></td>
    </tr>
    
    <tr>
    <td valign="top"><label for="project_tech">Project Technologies:<span class="tip">eg: HTML, CSS, ASP, etc.</span></label></td>
    <td>
    <textarea id="project_tech" class="validate[required]" name="project_tech" rows="2" cols="50"></textarea>
    </td>
    </tr>
    <tr>
    <td><label for="project_client">Client Name:</label></td>
    <td>
    <select id="project_client" class="validate[required]" name="project_client">
    <option value="" disabled="disabled">Choose Client</option>
    <?php
    
    /** Listing the available clients to choose from **/
    
    foreach ($project_client as $client){
    ?>
    <option value="<?php echo $client['id'];?>"><?php echo $client['name'];?></option>
    <?php }?>
    </select>
    
    </td>
    </tr>
    <tr>
    <td><label for="project_url">Project Url:</label></td>
    <td><input type="text" size="40" class="validate[required]" id="project_url" name="project_url" value="" /></td>
    </tr>
    
    <tr>
    <td><label for="project_year">Project Year:<span class="tip">The year this project was created</span></label></td>
    <td><input type="text" size="40" class="validate[required,custom[onlyNumber],length[0,4]]" id="project_year" name="project_year" value="<?php echo date("Y");?>" /></td>
    </tr>
    
    <tr><td colspan="2">&nbsp;</td></tr>
    <tr><td align="right"><input class="button-primary" type="submit" value="Save Project" /></td><td><input class="button-primary" type="reset" value="Reset" /></td></tr>
</table>

</form>

</div>