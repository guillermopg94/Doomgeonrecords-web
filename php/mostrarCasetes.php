<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT casete.nombre, casete.imagen_casete, artista.nombre_artista, casete.id, artista.id_artista FROM casete JOIN artista ON casete.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);