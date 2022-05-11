<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT camiseta.nombre, camiseta.imagen_camiseta, artista.nombre_artista, camiseta.id FROM camiseta JOIN artista ON camiseta.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);