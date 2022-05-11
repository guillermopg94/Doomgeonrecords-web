<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoCasete'];
    $nombreCasete=$_POST['nombre_casete'];
    $imagenCasete=$_POST['img_casete']; 
    $codigo_artista= $_POST['codigoArtista']; 

    $query= "UPDATE casete SET nombre='$nombreCasete', imagen_casete='$imagenCasete', id_artista=$codigo_artista WHERE id=$codigo";

    $res = $MySQL->query($query);

    echo $query;