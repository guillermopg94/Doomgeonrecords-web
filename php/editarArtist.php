<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoArtist'];
    $nombreArtist=$_POST['nombreArtist'];
    $imagenArtist=$_POST['imagenArtist']; 


    $query= "UPDATE artista SET nombre_artista='$nombreArtist', imagen_artista='$imagenArtist' WHERE id_artista='$codigo'";

    $res = $MySQL->query($query);

    echo $query;