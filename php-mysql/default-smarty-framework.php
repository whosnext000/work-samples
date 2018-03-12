<?PHP
	
	error_reporting(E_ALL ^ E_NOTICE);
	
	if(strtoupper(MonetarySoft_Core_HTTP_Initiated)	==	"YES")
	{
		@include(Root_Path."includes/template_engine.php");
		required_file(Root_Path."includes/template_engine.php", true);
		@include(Root_Path."includes/template_variables.php");
		required_file(Root_Path."includes/template_variables.php", true);
		
		$Plans_SQL	=	mysql_query("SELECT * FROM plans ORDER BY id ASC");
		$Plans_Rows	=	mysql_num_rows($Plans_SQL);
		$Plans	=	Array();
		
		if($Plans_Rows	>=	1)
		{
			while($Plan	=	mysql_fetch_array($Plans_SQL))
			{
				array_push($Plans, $Plan);
			}
		}
		
		$Page_Title	=	$Translations[$Language["code"]]["page"]["default"];
		
		$smarty->assign("Plans", $Plans);
		$smarty->assign("Page_Title", $Page_Title);
		$smarty->display("default.tpl");
		exit();
	}
	else
	{
		exit();
	}
	
?>