<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT vinilo.nombre, vinilo.imagen_vinilo, artista.nombre_artista, vinilo.id, artista.id_artista  FROM vinilo JOIN artista ON vinilo.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);