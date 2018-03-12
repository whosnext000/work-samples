<?PHP
	
	error_reporting(E_ALL ^ E_NOTICE);
	
	if(strtoupper(MonetarySoft_Core_HTTP_Initiated)	==	"YES")
	{
		@include(Root_Path."includes/template_engine.php");
		required_file(Root_Path."includes/template_engine.php", true);
		@include(Root_Path."includes/template_variables.php");
		required_file(Root_Path."includes/template_variables.php", true);
		
		if(strtoupper($Config["signup_status"])	==	"DISABLED")
		{
			$Page_Title	=	$Translations[$Language["code"]]["page"]["disabled"];
			$Message	=	$Translations[$Language["code"]]["1023"];
			
			$smarty->assign("Message", $Message);
			$smarty->assign("Page_Title", $Page_Title);
			$smarty->display("error.tpl");
			exit();
		}
		
		if(strtoupper($Member_Status)	==	"YES")
		{
			$Page_Title	=	$Translations[$Language["code"]]["page"]["disabled"];
			$Message	=	$Translations[$Language["code"]]["1024"];
			
			$smarty->assign("Message", $Message);
			$smarty->assign("Page_Title", $Page_Title);
			$smarty->display("error.tpl");
			exit();
		}
		
		if(strtoupper($Phase)	==	"DONE"	||	strtoupper($Sub_Phase)	==	"DONE")
		{
			$Redirect_To_Signup	=	false;
			
			if(strtoupper($_SESSION["PTV_Signup_Completed"])	==	"YES")
			{
				$User_ID	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_SESSION["PTV_Signup_ID"])));
				$User_SQL	=	mysql_query("SELECT * FROM users WHERE id='$User_ID'");
				$User_Rows	=	mysql_num_rows($User_SQL);
				
				if($User_Rows	==	1)
				{
					$User	=	mysql_fetch_array($User_SQL);
					$User["account_id"]	=	strtoupper($ACCOUNTS_PREFIX.$User["id"]);
					$User["password"]	=	base64_decode($_SESSION["PTV_Signup_Password"]);
					
					$Page_Title	=	$Translations[$Language["code"]]["page"]["open_account"];
				
					$smarty->assign("User", $User);
					$smarty->assign("Page_Title", $Page_Title);
					$smarty->display("open_account_done.tpl");
					exit();
				}
				else
				{
					$Redirect_To_Signup	=	true;
				}
			}
			else
			{
				$Redirect_To_Signup	=	true;
			}
			
			if($Redirect_To_Signup	==	true)
			{
				header("{$Config[url]}{$Language[code]}/open_account/");
				exit();
			}
		}
		
		##########################
		# Functions
		
			function _check_numbers($String)
			{
				$_Numbers_Found	=	0;
				$_First_Char	=	substr($String, 0, 1);
				
				$_Position_0	=	strpos($String, "0");
				$_Position_1	=	strpos($String, "1");
				$_Position_2	=	strpos($String, "2");
				$_Position_3	=	strpos($String, "3");
				$_Position_4	=	strpos($String, "4");
				$_Position_5	=	strpos($String, "5");
				$_Position_6	=	strpos($String, "6");
				$_Position_7	=	strpos($String, "7");
				$_Position_8	=	strpos($String, "8");
				$_Position_9	=	strpos($String, "9");
				
				if(is_numeric($_First_Char))
				{
					if($_First_Char	==	0)
					{
						$_Position_0++;
					}
					
					if($_First_Char	==	1)
					{
						$_Position_1++;
					}
					
					if($_First_Char	==	2)
					{
						$_Position_2++;
					}
					
					if($_First_Char	==	3)
					{
						$_Position_3++;
					}
					
					if($_First_Char	==	4)
					{
						$_Position_4++;
					}
					
					if($_First_Char	==	5)
					{
						$_Position_5++;
					}
					
					if($_First_Char	==	6)
					{
						$_Position_6++;
					}
					
					if($_First_Char	==	7)
					{
						$_Position_7++;
					}
					
					if($_First_Char	==	8)
					{
						$_Position_8++;
					}
					
					if($_First_Char	==	9)
					{
						$_Position_9++;
					}
				}
				
				if($_Position_0	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_1	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_2	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_3	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_4	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_5	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_6	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_7	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_8	>=	1)
				{
					$_Numbers_Found++;
				}
				
				if($_Position_9	>=	1)
				{
					$_Numbers_Found++;
				}
				
				return $_Numbers_Found;
			}
			
		##########################
		# Translations
		
		$Signup_Translation	=	Array();
		
		if(strtoupper($Language["code"])	==	"DU")
		{
			$Signup_Translation["001"]	=	"Vereiste Parameter";
			$Signup_Translation["002"]	=	"Ten minste 1 creditrekening is vereist";
			$Signup_Translation["003"]	=	"Naam";
			$Signup_Translation["004"]	=	"E-Mail-Adresse";
			$Signup_Translation["005"]	=	"Bevestig uw e-mailadres";
			$Signup_Translation["006"]	=	"Account";
			$Signup_Translation["007"]	=	"Accountnaam";
			$Signup_Translation["008"]	=	"Type";
			$Signup_Translation["009"]	=	"Toegang Wachtwoord";
			$Signup_Translation["010"]	=	"Gewenst wachtwoord";
			$Signup_Translation["011"]	=	"Bevestig Gewenst Wachtwoord";
			$Signup_Translation["012"]	=	"Turing";
			$Signup_Translation["013"]	=	"Vernieuwen";
			$Signup_Translation["014"]	=	"Doorgaan naar stap 2";
			$Signup_Translation["015"]	=	"Complete Registratie";
			$Signup_Translation["016"]	=	"Security Code";
			$Signup_Translation["017"]	=	"Herhaal Security Code";
		}
		elseif(strtoupper($Language["code"])	==	"ES")
		{
			$Signup_Translation["001"]	=	"Requiere de parámetros";
			$Signup_Translation["002"]	=	"Al menos 1 cuentas de abono se requiere";
			$Signup_Translation["003"]	=	"Nombre";
			$Signup_Translation["004"]	=	"Correo electrónico";
			$Signup_Translation["005"]	=	"Vuelve a escribir E-mail";
			$Signup_Translation["006"]	=	"Cuenta";
			$Signup_Translation["007"]	=	"Nombre de cuenta";
			$Signup_Translation["008"]	=	"Tipo";
			$Signup_Translation["009"]	=	"Clave de acceso";
			$Signup_Translation["010"]	=	"Contraseña deseada";
			$Signup_Translation["011"]	=	"Volver a escribir";
			$Signup_Translation["012"]	=	"Turing";
			$Signup_Translation["013"]	=	"Actualizar";
			$Signup_Translation["014"]	=	"Continuar al paso 2";
			$Signup_Translation["015"]	=	"Registro completo";
			$Signup_Translation["016"]	=	"Código de Seguridad";
			$Signup_Translation["017"]	=	"Vuelve a escribir el código de seguridad";
		}
		elseif(strtoupper($Language["code"])	==	"FR")
		{
			$Signup_Translation["001"]	=	"Paramètre requis";
			$Signup_Translation["002"]	=	"Au moins 1 bénéficiaire est tenu compte";
			$Signup_Translation["003"]	=	"Nom";
			$Signup_Translation["004"]	=	"Adresse de courriel";
			$Signup_Translation["005"]	=	"Confirmer adresse e-mail";
			$Signup_Translation["006"]	=	"Compte";
			$Signup_Translation["007"]	=	"Nom du compte";
			$Signup_Translation["008"]	=	"Type";
			$Signup_Translation["009"]	=	"Mot de passe d'accès";
			$Signup_Translation["010"]	=	"Mot de passe souhaité";
			$Signup_Translation["011"]	=	"Retapez le mot de passe";
			$Signup_Translation["012"]	=	"Turing";
			$Signup_Translation["013"]	=	"Refresh";
			$Signup_Translation["014"]	=	"Continuer à l'étape 2";
			$Signup_Translation["015"]	=	"Enregistrement complet";
			$Signup_Translation["016"]	=	"Code de la sécurité";
			$Signup_Translation["017"]	=	"Retapez le code de sécurité";
		}
		elseif(strtoupper($Language["code"])	==	"RU")
		{
			$Signup_Translation["001"]	=	"Требуется Параметр";
			$Signup_Translation["002"]	=	"По меньшей мере 1 счет получателя требуется";
			$Signup_Translation["003"]	=	"Имя";
			$Signup_Translation["004"]	=	"Электронная почта";
			$Signup_Translation["005"]	=	"Повторите E-почта";
			$Signup_Translation["006"]	=	"описание";
			$Signup_Translation["007"]	=	"Имя учетной записи";
			$Signup_Translation["008"]	=	"Печатать";
			$Signup_Translation["009"]	=	"Пароль доступа";
			$Signup_Translation["010"]	=	"Желаемый пароль";
			$Signup_Translation["011"]	=	"Повторите новый пароль";
			$Signup_Translation["012"]	=	"Тьюринга";
			$Signup_Translation["013"]	=	"Обновить";
			$Signup_Translation["014"]	=	"Перейдите к шагу 2";
			$Signup_Translation["015"]	=	"Полная регистрация";
			$Signup_Translation["016"]	=	"Секретный код";
			$Signup_Translation["017"]	=	"Повторите секретный код";
		}
		else
		{
			$Signup_Translation["001"]	=	"Required Parameter";
			$Signup_Translation["002"]	=	"At least 1 payee account is required";
			$Signup_Translation["003"]	=	"Name";
			$Signup_Translation["004"]	=	"Email Address";
			$Signup_Translation["005"]	=	"Retype Email Address";
			$Signup_Translation["006"]	=	"Account";
			$Signup_Translation["007"]	=	"Account Name";
			$Signup_Translation["008"]	=	"Type";
			$Signup_Translation["009"]	=	"Access Password";
			$Signup_Translation["010"]	=	"Desired Password";
			$Signup_Translation["011"]	=	"Retype Desired Password";
			$Signup_Translation["012"]	=	"Captcha";
			$Signup_Translation["013"]	=	"Refresh";
			$Signup_Translation["014"]	=	"Continue to Step 2";
			$Signup_Translation["015"]	=	"Complete Registration";
			$Signup_Translation["016"]	=	"Security Code";
			$Signup_Translation["017"]	=	"Retype Security Code";
		}
		
		##########################
		# Work
		
		$Signup_Code	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["code"])));
		$Signup_Code_Two	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["code_two"])));
		$Signup_Account_Name	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["account_name"])));
		$Signup_Name	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["name"])));
		$Signup_Email	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["email"])));
		$Signup_Email_Retype	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["confirm_email"])));
		$Signup_Password	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["password"])));
		$Signup_Password_Retype	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["confirm_password"])));
		$Signup_Security_Code	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["sec_code"])));
		$Signup_Security_Code_Retype	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["confirm_sec_code"])));
		$Signup_Captcha_Code	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["captcha_code"])));
		$Signup_Captcha_Value	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST["captcha"])));
		
		if(strtolower($Signup_Code)	==	"monetarysoft")
		{
			$Continue	=	true;
			
			$Email_SQL	=	mysql_query("SELECT * FROM users WHERE email='$Signup_Email' AND status='active'");
			$Email_Rows	=	mysql_num_rows($Email_SQL);
			
			$Username_SQL	=	mysql_query("SELECT * FROM users WHERE account_name='$Signup_Account_Name'");
			$Username_Rows	=	mysql_num_rows($Username_SQL);
			
			if(strlen($Signup_Name)	<=	3)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1001"];
				$Continue	=	false;
			}
			else if(strlen($Signup_Email)	<=	7	||	strlen(strstr($Signup_Email, "@"))	<=	4)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1002"];
				$Continue	=	false;
			}
			else if($Signup_Email	!=	$Signup_Email_Retype)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1003"];
				$Continue	=	false;
			}
			else if(strlen($Signup_Account_Name)	<=	5	||	strlen($Signup_Account_Name)	>=	13)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1004"];
				$Continue	=	false;
			}
			else if(strpos($Signup_Account_Name, " ")	>=	1)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1004"];
				$Continue	=	false;
			}
			else if(strlen($Signup_Password)	<	8	||	strlen($Signup_Password)	>	24)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1005"];
				$Continue	=	false;
			}
			else if(md5($Signup_Password)	!=	md5($Signup_Password_Retype))
			{
				$Error_Message	=	$Translations[$Language["code"]]["1006"];
				$Continue	=	false;
			}
			else if(strlen(_remove_numeric($Signup_Password))	<=	0)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1010"];
				$Continue	=	false;
			}
			else if(_check_numbers($Signup_Password)	<=	0)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1010"];
				$Continue	=	false;
			}
			else if(strlen($Signup_Security_Code)	<	6	||	strlen($Signup_Security_Code)	>	24)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1018"];
				$Continue	=	false;
			}
			else if(md5($Signup_Security_Code)	!=	md5($Signup_Security_Code_Retype))
			{
				$Error_Message	=	$Translations[$Language["code"]]["1020"];
				$Continue	=	false;
			}
			else if(strtoupper(base64_decode($Signup_Captcha_Code))	!=	strtoupper($Signup_Captcha_Value))
			{
				$Error_Message	=	$Translations[$Language["code"]]["1007"];
				$Continue	=	false;
			}
			else if($Email_Rows	>=	1)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1008"];
				$Continue	=	false;
			}
			else if($Username_Rows	>=	1)
			{
				$Error_Message	=	$Translations[$Language["code"]]["1019"];
				$Continue	=	false;
			}
			
			if($Continue	==	true)
			{
				$Continue	=	false;
				$Collected_Accounts	=	0;
				$Collected_Data	=	Array();
				
				$Processors_SQL	=	mysql_query("SELECT * FROM processors WHERE status='public'");
				$Processors_Rows	=	mysql_num_rows($Processors_SQL);
				$Processors	=	Array();
				
				if($Processors_Rows	>=	1)
				{
					while($Processor	=	mysql_fetch_array($Processors_SQL))
					{
						array_push($Processors, $Processor);
					}
				}
					
				if(strlen($Signup_Code_Two)	>=	1)
				{
					$Processors_SQL	=	mysql_query("SELECT * FROM processors WHERE status='public'");
					$Processors_Rows	=	mysql_num_rows($Processors_SQL);
					
					if($Processors_Rows	>=	1)
					{
						while($Processor	=	mysql_fetch_array($Processors_SQL))
						{
							$This_Field	=	"payee_".$Processor["id"];
							$This_Account	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($_POST[$This_Field])));
							
							if(strlen($This_Account)	>=	3)
							{
								$Collected_Accounts++;
								$Collection	=	Array("processor" => $Processor["id"], "account" => $This_Account);
								
								array_push($Collected_Data, $Collection);
							}
						}
					}
					
					if($Collected_Accounts	>=	1)
					{
						$Continue	=	true;
					}
					else
					{
						$Error_Message	=	$Translations[$Language["code"]]["1009"];
						$Continue	=	false;
					}
					
					if($Continue	==	true)
					{
						$Unix_Stamp	=	mktime();
						$Initial_Balance	=	_ms_encode(false, 32, _ms_integer_convert(false, 0));
						$Encoded_Password	=	_ms_encode(false, 64, md5($Signup_Password));
						$Encoded_Security_Code	=	md5($Signup_Security_Code);
						
						$Insert_User	=	mysql_query("INSERT INTO users (referrer, referrer_unix_stamp, status, account_name, name, email, password, sec_code, balance_one, balance_two, recent_ip_address, recent_unix_stamp, ip_address, unix_stamp) VALUES ('$Referrer[id]', '$Unix_Stamp', 'pending', '$Signup_Account_Name', '$Signup_Name', '$Signup_Email', '$Encoded_Password', '$Encoded_Security_Code', '$Initial_Balance', '$Initial_Balance', '$CLIENT_IP', '$Unix_Stamp', '$CLIENT_IP', '$Unix_Stamp')");
						$Inserted_User	=	mysql_insert_id();
						
						if($Inserted_User	>=	1)
						{
							$Activation_Code	=	substr($Signup_Email, 0, 4);
							$Activation_Code	=	base64_encode(md5($Inserted_User.$Activation_Code));
							$Activation_Code	=	substr($Activation_Code, 0, 16);
							
							$Account_ID	=	strtoupper($ACCOUNTS_PREFIX.$Inserted_User);
							
							$_SESSION["PTV_Signup_Completed"]	=	"YES";
							$_SESSION["PTV_Signup_ID"]	=	$Inserted_User;
							$_SESSION["PTV_Signup_Password"]	=	base64_encode($Signup_Password);
							
							$Open_Account_Email	=	read_source(Root_Path."templates/emails/open_account.txt");
							$Open_Account_Email	=	str_replace("[[SITE_TITLE]]", $Config["title"], $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[SITE_URL]]", $Config["url"], $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[ACCOUNT_ID]]", $Account_ID, $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[ACCOUNT_NAME]]", $Signup_Account_Name, $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[ACTIVATION_CODE]]", $Activation_Code, $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[PASSWORD]]", $Signup_Password, $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[NAME]]", $Signup_Name, $Open_Account_Email);
							$Open_Account_Email	=	str_replace("[[EMAIL]]", $Open_Account_Email, $Open_Account_Email);
							
							$Open_Account_Email	=	explode("--- Email ---", $Open_Account_Email);
							
							$Subject	=	$Open_Account_Email[0];
							$Message	=	$Open_Account_Email[1];
							
							//@mail($Signup_Email, $Subject, $Message, generate_email_header($Config["title"], $Config["noanswer_email"], 3));
							@mail($Signup_Email, $Subject, $Message, generate_email_header($Config["title"], $Config["noanswer_email"], 3));
							
							@_record_log($Inserted_User, "Registration Completed");
							
							while(list(, $Payee_Account)	=	@each($Collected_Data))
							{
								$Insert_Account	=	@mysql_query("INSERT INTO users_processors (user, processor, account) VALUES ('$Inserted_User', '$Payee_Account[processor]', '$Payee_Account[account]')");
							}
							
							header("Location: {$Config[url]}{$Language[code]}/open_account//done");
							exit();
						}
						else
						{
							$Error_Message	=	$Translations[$Language["code"]]["1011"];
						}
					}
				}
				
				$Page_Title	=	$Translations[$Language["code"]]["page"]["open_account"];
				
				$smarty->assign("Error_Message", $Error_Message);
				$smarty->assign("Processors", $Processors);
				$smarty->assign("Page_Title", $Page_Title);
				$smarty->assign("Signup_Translation", $Signup_Translation);
				$smarty->display("open_account_step_two.tpl");
				exit();
			}
		}
		
		$Page_Title	=	$Translations[$Language["code"]]["page"]["open_account"];
		
		$Countries_List	=	read_source(Root_Path."includes/countries.txt");
		$Countries_List	=	str_replace("\r", "", $Countries_List);
		$Countries_List	=	explode("\n", $Countries_List);
		$Countries	=	Array();
		
		while(list(, $Country_Name)	=	each($Countries_List))
		{
			$Country_Name	=	_escape_and_protect_string(_escape_html_tags(_remove_slashes($Country_Name)));
			$Country_Name	=	Array("name" => $Country_Name);
			
			array_push($Countries, $Country_Name);
		}
		
		$smarty->assign("Referrer", $Referrer);
		$smarty->assign("Countries", $Countries);
		$smarty->assign("Error_Message", $Error_Message);
		$smarty->assign("Processors", $Processors);
		$smarty->assign("Signup_Translation", $Signup_Translation);
		$smarty->assign("Page_Title", $Page_Title);
		$smarty->display("open_account_step_one.tpl");
		exit();
	}
	else
	{
		exit();
	}
	
?>