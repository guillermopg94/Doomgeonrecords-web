<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

    $sql = "SELECT * FROM usuario WHERE tipo='usuario' ";

$res=$MySQL->query($sql);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);