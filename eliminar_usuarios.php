<?php
$con = mysqli_connect('localhost','Ramonky','123456');
if (!$con)
die('No se pudo conectar: ' . mysqli_error($con));
$id = $_POST['id'];
mysqli_select_db($con,'ramonky');
$sql="DELETE FROM datos";
$result = mysqli_query($con,$sql);
mysqli_close($con);
?>