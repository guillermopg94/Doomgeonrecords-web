<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoCd'];
    $nombreCd=$_POST['nombre_cd'];
    $imagenCd=$_POST['img_cd']; 
    $codigo_artista= $_POST['codigoArtista']; 

    $query= "UPDATE cd SET nombre='$nombreCd', imagen_cd='$imagenCd', id_artista=$codigo_artista WHERE id=$codigo";

    $res = $MySQL->query($query);

    echo $query;