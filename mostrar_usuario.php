<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>aaa</title>
 
</head>

<body>

<?php
               

    /*Abre la conexion con el servidor de la BD
       Dominio: localhost
       usuario: israel
       password: abc123 */
    $con = mysqli_connect('localhost','carlos','12345');                 

    if (!$con) {
        // imprime un mensaje de error y sale del script
        die('No se pudo conectar: ' . mysqli_error($con)); 
                                                         
    }

    // Selecciona la BD
    mysqli_select_db($con,'registro_autos');                

    // Prepara  la consulta SQL
    $sql="SELECT * FROM vehiculo";   
    
    // Realiza la consulta
    $result = mysqli_query($con,$sql);                     

    /*************  Genera la tabla respuesta ************************/
    echo "<table class='table table-dark table-striped mt-5 mb-2'>
        <tr>
            <th>Placa</th>
            <th>Tipo de vehículo</th>
            <th>Marca</th>   
            <th>Modelo</th>
            <th>Versión del modelo</th>
            <th>Número de serie</th>
        </tr>";

        // Obtiene cada fila (arreglo) de resultados
        while($ren = mysqli_fetch_array($result)) { 
            $placa = $ren['placa'];  
            echo "<tr>";
                echo '<td id="placaren">' . $placa. '</td>';
                echo "<td>" . $ren['tipo_vehiculo'] . "</td>";
                echo "<td>" . $ren['marca'] . "</td>";
                echo "<td>" . $ren['modelo'] . "</td>";
                echo "<td>" . $ren['version_modelo'] . "</td>";
                echo "<td>" . $ren['num_serie'] . "</td>";
            echo "</tr>";
        }
    echo "</table>";

    //Cierra la conexion
    mysqli_close($con);
?>

</body>

</html>
