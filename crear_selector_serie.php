<?php
    $con = mysqli_connect('localhost', 'carlos','12345');
    if (!$con)
        die('No se pudo conectar: ' . mysqli_error($con));

    mysqli_select_db($con,'registro_autos');
    $sql="SELECT num_serie FROM vehiculo";
    $result = mysqli_query($con,$sql);
    echo "<form id='form'>
        <select name='autos' id='seleccion-serie' class='form-select'> ";
    echo "<option> Selecciona el num de serie:</option>";
    while($ren = mysqli_fetch_array($result)) {
        echo "<option value='" . $ren['num_serie'] . "'>".$ren['num_serie']."</option>";
    }
    echo "</select>";
    echo "</form>";
    mysqli_close($con);
?>