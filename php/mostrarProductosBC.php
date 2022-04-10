<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT * FROM producto WHERE nombre_producto='Bloody Crom'";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);