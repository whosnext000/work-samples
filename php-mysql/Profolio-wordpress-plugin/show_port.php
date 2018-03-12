<!-- Displaying the front end of the portfolio that site visitors see !-->
<?php /** Query the database for some information that we can display **/
global $wpdb;
$cat_tbl=$wpdb->prefix."dp_types";
$work_tbl=$wpdb->prefix."dp_work";
$client_tbl=$wpdb->prefix."dp_clients";
$settings_tbl=$wpdb->prefix."dp_settings";
	
$limit=get_option("dp_per_page");
$coun="SELECT COUNT(*)/$limit as numb FROM $work_tbl INNER JOIN $client_tbl ON ($work_tbl.client_name = $client_tbl.id)INNER JOIN $cat_tbl ON ($cat_tbl.id = $work_tbl.project_type)";
$count=$wpdb->get_results($coun,ARRAY_A);
$page=$_POST['page'];
foreach($count as $ccount)
{
$total_pages=ceil($ccount['numb']);
}
if($page)
{
	$start=($page-1)*$limit;

}else{
	$start=0;

}
echo '
<form method="post" id="pages_form">
<input type="hidden" id="pages" name="page" />
</form>';
$pagination="";
for($x=1;$x<=$total_pages;$x++)
{
	if($x==$page)
	{
		$class='class="selected"';
	}
	else
	{
		$class='';
	}
$pagination.= '<a href="javascript:void(0);" '.$class.' onclick="goto_page('.$x.')">'.$x.'</a> &nbsp;';
	}



if($page)
{
	$start=($page-1)*$limit;

}else{
	$start=0;

}
$port_qry="SELECT $client_tbl.slug AS client_slug ,$client_tbl.name ,$cat_tbl.slug AS type_slug ,$cat_tbl.title ,$work_tbl.content ,$work_tbl.id ,$work_tbl.status_show,$work_tbl.web_url,$work_tbl.logo ,$work_tbl.project_year ,$work_tbl.screen ,$work_tbl.tech ,$work_tbl.show_excerpt ,$work_tbl.status AS work_status,$work_tbl.title as work_title FROM  $work_tbl INNER JOIN $client_tbl ON ($work_tbl.client_name = $client_tbl.id)INNER JOIN wp_dp_types ON ($cat_tbl.id = $work_tbl.project_type) limit $start,$limit";
$t_query="SELECT * FROM $cat_tbl";
$type_q=$wpdb->get_results($t_query,ARRAY_A);
$c_query="select DISTINCT $client_tbl.id,$client_tbl.name,$client_tbl.slug  from $client_tbl,$work_tbl where $client_tbl.id=$work_tbl.client_name";
$client_q=$wpdb->get_results($c_query,ARRAY_A);
$f_query="SELECT * FROM $settings_tbl";
$filter_q=$wpdb->get_results($f_query,ARRAY_A);

$col_sql="SELECT DISTINCT ";
foreach ( $filter_q as $cols ) {
	$col_sql .= $cols['col'] . ",";
}
$col_sql=substr($col_sql,0,-1);
$col_sql .= " FROM $work_tbl";

$filter_data =$wpdb->get_results($col_sql,ARRAY_A);
$result=$wpdb->get_results($port_qry,ARRAY_A);
$show_filter_option=get_option("dp_show_filter");

$i = 0;
$trans = array("|" => "", " " => "_", "," => "", "-" => "");
$seen = array();
?>

<div id="profolio-port">
<?php foreach ( $filter_q as $show ) : ?>
		<h3 class="filter"><a href="#" id="show-toggle-<?php echo $show['id']; ?>">Filter By <?php echo $show['filter']; ?></a></h3>
        <div class="port-gutter"></div>
        <ul id="portfolio-filter" class="show-filter-<?php echo $show['id']; ?>">
            <?php if( $show['col'] == "client_name") : ?>
				<?php foreach($client_q as $row) : ?>
                	<li><a href="<?php echo "#".$row['slug']; ?>" rel="<?php echo $row['slug']; ?>"><?php echo $row['name']; ?></a></li>
                <?php $i++; endforeach; ?>
                
            <?php elseif ( $show['col'] == "project_type" ) : ?>
				<?php foreach($type_q as $type) : ?>
                	<li><a href="<?php echo "#".$type['slug']; ?>" rel="<?php echo $type['slug']; ?>"><?php echo $type['title']; ?></a></li>
                <?php $i++; endforeach; ?>
                
            <?php else : ?>
                <?php foreach($filter_data as $data) : ?>
                	<?php if(array_key_exists($data[$show['col']], $seen)) { continue; } ?>
                    <?php $seen[$data[$show['col']]] = NULL; ?>
                	<li><a href="<?php echo "#".strtr($data[$show['col']],$trans); ?>" rel="<?php echo strtr($data[$show['col']],$trans); ?>"><?php echo $data[$show['col']]; ?></a></li>
                <?php $i++; endforeach; ?>
            <?php endif; ?>
        </ul>
        <div class="port-gutter"></div>
<?php $i++; endforeach; ?>

<span class="paginate">
<?php echo $pagination; ?>
</span>
<ul id="portfolio-list">
<?php  
foreach($result as $res){
?>
			<li style="display: block;" class="<?php echo $res['type_slug'];?> <?php echo $res['project_year'];?> <?php echo $res['client_slug'];?> <?php echo $res['id']; ?> <?php echo $res['work_status']; ?> <?php echo strtr($res['tech'],$trans); ?>">
			<a class="fancyinline" href="#inline<?php echo $res['id'];?>" title="<?php echo $res['work_title'];?>"><img src="<?php echo $res['screen'];?>" style="width:100%;" alt="<?php echo $res['work_title'];?>"><span class="plus"></span></a>
				<p>
					<?php echo $res['work_title'];?>
					<font color="<?php if($res['work_status']=="online"){echo "green";}else{echo "red";}?>"><?php echo $res['work_status'];?></font>
				</p>
                <?php if($res['show_excerpt'] == "yes") : ?>
                <span class="p-excerpt"><p><?php $excerpt = $res['content']; $limit = substr($excerpt,0,100); echo $limit; ?>...</p></span>
                <?php endif; ?>
			</li>

<?php }

?>
</ul>

<?php foreach($result as $res){?>
<div style="display: none;">
<div class="fancysize" id="inline<?php echo $res['id'];?>">
<div class="portfolio_top">
<?php 
$status=$res['status_show'];
if($status=="yes") :?>
<div style="float:right; color:<?php if($res['status']=="online"){echo "green";}else{echo "red";}?>">
<?php echo $res['status'];?>
</div>
<?php endif;?>
<a title="<?php echo $res['work_title'];?>" href="<?php echo $res['web_url'];?>">
<img width="312" height="125" class="alignleft size-full wp-image-828" title="<?php echo $res['work_title'];?>" alt="<?php echo $res['work_title'];?>" src="<?php echo $res['logo'];?>"></a>
</div>
<div class="portfolio_details">
<div class="portfolio_description">
<a title="<?php echo $res['work_title'];?>" href="<?php echo $res['web_url'];?>">
<img class="alignleft size-medium wp-image-614" title="<?php echo $res['tech'];?> for <?php echo $res['work_title'];?>" alt="<?php echo $res['tech'];?> for <?php echo $res['title'];?>" src="<?php echo $res['screen'];?>"></a>
<p>
<?php echo $res['content'];?>
</p>
<div class="mainBtn"><a title="<?php echo $res['work_title'];?>" href="<?php echo $res['web_url'];?>">View Project</a></div>

</div>
<ul class="portfolio-tags">
<li>
<div class="key">Type of Project:</div>
<div class="key-val"><?php echo $res['title'];?></div>
</li>
<li>
<div class="key">Created:</div>
<div class="key-val"><?php echo $res['project_year'];?></div>
</li>
<li>
<div class="key">Client:</div>
<div class="key-val"><?php echo $res['name'];?></div>
</li>
<li>
<div class="key">Technologies Used:</div>
<div class="key-val"><?php echo $res['tech'];?></div>
</li>
</ul>
</div>
</div>
</div>
		<?php }?>
</div><!-- #profolio-port -->	
		