<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT producto.id_producto, cd_nombre, casete_nombre, vinilo_nombre, camiseta_nombre, cd_imagen, casete_imagen, vinilo_imagen, camiseta_imagen, cd_cantidad, casete_cantidad, camiseta_cantidad, vinilo_cantidad, tallaXXL, tallaXL, tallaL, tallaM, tallaS, artista.nombre_artista FROM producto JOIN artista ON producto.id_artista=artista.id_artista";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);