<?php
$placa = $_POST["placa"];
$tipo = $_POST["tipo"];
$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$version = $_POST["version"];
$serie = $_POST["serie"];
$con = mysqli_connect('localhost','carlos','12345');
 if (!$con)
 die('No se pudo conectar: ' . mysqli_error($con));
 mysqli_select_db($con,'registro_autos');
 $sql="insert into vehiculo(placa, tipo_vehiculo, marca, modelo, version_modelo, num_serie)";
 $sql=$sql." values('".$placa."', '".$tipo."','".$marca."','".$modelo."','".$version."','".$serie."')";
 $result = mysqli_query($con,$sql);
 mysqli_close($con);
?>