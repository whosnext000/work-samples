<?php  /** We need to find the correct directory to use when setting our themes **/
$theme_path=realpath("css/theme/");
$theme_path;

if ($handle = opendir($theme_path)) { 

    /* This is the correct way to loop over the directory. */
    while (false !== ($file = readdir($handle))) {
if($file!="." && $file!="..")
{

	echo "$file\n";
}
    } 

	
    closedir($handle);
}
?> 
