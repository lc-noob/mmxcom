<?php
	$name=$_REQUEST["name"];
	$tableName=$_REQUEST["tableName"];
	$dataBaseName=$_REQUEST["dataBase"];
	$limit=$_REQUEST["limit"];
	$resultArr=[];
	$conn=mysqli_connect("localhost","root","",$dataBaseName,3306);
	mysqli_query($conn,"SET NAMES UTF8;");
	// echo("SELECT * FROM `$tableName` WHERE `name`='$name' LIMIT $Num,$limit;");
	// echo("SELECT COUNT(*) FROM `$tableName` WHERE `name`='$name';");
	$rowNum=mysqli_query($conn,"SELECT COUNT(*) FROM `$tableName` WHERE `name`='$name';");
	$rowNum=mysqli_fetch_row($rowNum);
	$Num=$rowNum[0]-$limit;
	$result=mysqli_query($conn,"SELECT * FROM `$tableName` WHERE `name`='$name' LIMIT $Num,$limit;");
	while(($key=mysqli_fetch_row($result)) != null){
		array_push($resultArr,$key);
	}
	echo json_encode($resultArr);
	mysqli_close($conn);
?>