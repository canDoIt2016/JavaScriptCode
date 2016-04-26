<?php
$keywordSet=array("1"=>"web","2"=>"Web","3"=>"web前端","4"=>"Web前端","5"=>"前端");
$keyword=$_GET['keyword'];
$keywordIndex=array_search($keyword,$keywordSet);

echo ($keywordSet[$keywordIndex]);
?>