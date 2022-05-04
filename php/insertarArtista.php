<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre_artista = $_GET['nombreArtist'];
$imagen_artista= $_GET['imagenArtist'];
$instagram=$_GET['instagram'];
$facebook=$_GET['facebook'];
$bandcamp=$_GET['bandcamp'];
//$id_album=$_GET['codigoAlbum'];
//$id_producto=$_GET['codigoProducto'];
$sqlUserExiste = $MySQL->query("SELECT nombre_artista FROM artista WHERE nombre_artista='$nombre_artista'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);



if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO artista (nombre_artista, id_album, imagen_artista, id_producto, instagram, bandcamp, facebook ) VALUES ('$nombre_artista', 0, '$imagen_artista', 0, '$instagram', '$bandcamp', '$facebook')";

$res = $MySQL->query($sql_insert);

echo $NumerodeColumnas;
}else{
    echo "existe";
}