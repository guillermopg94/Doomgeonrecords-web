<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre_album = $_GET['nombreAlbum'];
$imagen_album= $_GET['imagenAlbum'];
$codigo_artista= $_GET['codigoArtista']; 


$sqlUserExiste = $MySQL->query("SELECT nombre_album FROM album WHERE nombre_album='$nombre_album'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);


if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO album (nombre_album, imagen_album, id_artista) VALUES ('$nombre_album','$imagen_album',$codigo_artista)";

$res = $MySQL->query($sql_insert);


$jsonData = array();


while ($row = mysqli_fetch_assoc($res)) {
    $jsonData[] = $row;
}


echo json_encode($jsonData);
}else{
    echo "existe";
}