<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre = $_GET['nombre_casete'];
$img= $_GET['img_casete'];
$codigo_artista= $_GET['codigoArtista']; 


$sqlUserExiste = $MySQL->query("SELECT nombre FROM casete WHERE nombre='$nombre'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);


if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO casete (nombre, imagen_casete, id_artista) VALUES ('$nombre','$img',$codigo_artista)";

$res = $MySQL->query($sql_insert);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);
}else{
    echo "existe";
}