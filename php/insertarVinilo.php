<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre = $_GET['nombre_vinilo'];
$img= $_GET['img_vinilo'];
$codigo_artista= $_GET['codigoArtista']; 


$sqlUserExiste = $MySQL->query("SELECT nombre FROM vinilo WHERE nombre='$nombre'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);


if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO vinilo (nombre, imagen_vinilo, id_artista) VALUES ('$nombre','$img',$codigo_artista)";

$res = $MySQL->query($sql_insert);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);
}else{
    echo "existe";
}