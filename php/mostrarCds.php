<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT cd.nombre, cd.imagen_cd, cd.id, artista.nombre_artista, artista.id_artista FROM cd JOIN artista ON cd.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo  json_encode($jsonData);