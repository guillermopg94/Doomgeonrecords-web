<?php


include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];


$sql_delete = "DELETE FROM artista WHERE id_artista=$codigo";
$res = $MySQL->query($sql_delete);


$sql = "SELECT * FROM artista";
$res = $MySQL->query($sql);
$jsonData = array();


while ($row = $res->fetch_array()) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);

