<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoArtist'];
    $nombreArtist=$_POST['nombreArtist'];
    $imagenArtist=$_POST['imagenArtist']; 
    $instagram=$_POST['instagram'];
$facebook=$_POST['facebook'];
$bandcamp=$_POST['bandcamp'];


    $query= "UPDATE artista SET nombre_artista='$nombreArtist', imagen_artista='$imagenArtist', instagram='$instagram', bandcamp='$bandcamp', facebook='$facebook' WHERE id_artista='$codigo'";

    $res = $MySQL->query($query);

    echo $query;