<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre_artista = $_GET['nombreArtist'];
$imagen_artista= $_GET['imagenArtist'];
$instagram=$_GET['instagram'];
$facebook=$_GET['facebook'];
$bandcamp=$_GET['bandcamp'];
$sqlUserExiste = $MySQL->query("SELECT nombre_artista FROM artista WHERE nombre_artista='$nombre_artista'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);



if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO artista (nombre_artista, imagen_artista, instagram, bandcamp, facebook, genero, propias ) VALUES ('$nombre_artista', '$imagen_artista', '$instagram', '$bandcamp', '$facebook', 'punk', 'si')";

$res = $MySQL->query($sql_insert);

echo $NumerodeColumnas;
}else{
    echo "existe";
}