<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoVinilo'];
    $nombreVinilo=$_POST['nombre_vinilo'];
    $imagenVinilo=$_POST['img_vinilo']; 
    $codigo_artista= $_POST['codigoArtista']; 

    $query= "UPDATE vinilo SET nombre='$nombreVinilo', imagen_vinilo='$imagenVinilo', id_artista=$codigo_artista WHERE id=$codigo";

    $res = $MySQL->query($query);

    echo $query;