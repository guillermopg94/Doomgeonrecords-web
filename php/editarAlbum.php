<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoAlbum'];
    $nombreAlbum=$_POST['nombreAlbum'];
    $imagenAlbum=$_POST['imagenAlbum']; 
    $codigo_artista= $_POST['codigoArtista']; 

    $query= "UPDATE album SET nombre_album='$nombreAlbum', imagen_album='$imagenAlbum', id_artista=$codigo_artista WHERE id_album=$codigo";

    $res = $MySQL->query($query);

    echo $query;