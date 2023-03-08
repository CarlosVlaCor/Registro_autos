<?php
$con = mysqli_connect('localhost','carlos','12345');
if (!$con)
die('No se pudo conectar: ' . mysqli_error($con));
$placa = $_POST['placa'];
mysqli_select_db($con,'registro_autos');
$sql="DELETE FROM vehiculo Where placa='".$placa."'";
$result = mysqli_query($con,$sql);
mysqli_close($con);
?>