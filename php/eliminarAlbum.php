<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];


$sql_disable = "SET FOREIGN_KEY_CHECKS=0"; 
$disable = $MySQL->query($sql_disable);
$sql_delete = "DELETE FROM album WHERE id_album=$codigo";
$res = $MySQL->query($sql_delete);
$sql_re_enable = "SET FOREIGN_KEY_CHECKS=1";
$re_enable = $MySQL->query($sql_re_Enable);


$sql = "SELECT * FROM album";
$res1 = $MySQL->query($sql);
$jsonData = array();


while ($row = $res1->fetch_array()) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);

