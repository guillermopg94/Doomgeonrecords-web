<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre_artista = $_GET['nombreArtist'];
$imagen_artista= $_GET['imagenArtist'];


$sqlUserExiste = $MySQL->query("SELECT nombre_artista FROM artista WHERE nombre_artista='$nombre_artista'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);



if($NumerodeColumnas==0)
{



$sql_insert = "INSERT INTO artista (nombre_artista, id_album, imagen_artista, id_producto ) VALUES ('$nombre_artista', 1, '$imagen_artista', 1)";

$res = $MySQL->query($sql_insert);

echo $NumerodeColumnas;
}else{
    echo "existe";
}