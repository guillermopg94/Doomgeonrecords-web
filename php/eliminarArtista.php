<?php


include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];

$sql_disable = "SET FOREIGN_KEY_CHECKS=0"; 
$disable = $MySQL->query($sql_disable);

$sql_delete = "DELETE FROM artista WHERE id_artista=$codigo";
$res = $MySQL->query($sql_delete);

$sql_re_enable = "SET FOREIGN_KEY_CHECKS=1";
$re_enable = $MySQL->query($sql_re_Enable);



$sql = "SELECT * FROM artista";
$res = $MySQL->query($sql);
$jsonData = array();


while ($row = $res->fetch_array()) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);

