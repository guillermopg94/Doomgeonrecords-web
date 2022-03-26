<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT album.id_album, nombre_album, imagen_album, artista.nombre_artista FROM album JOIN artista ON album.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);