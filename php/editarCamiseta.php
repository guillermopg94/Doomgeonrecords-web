<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();


$codigo = $_POST['codigoCamiseta'];
$nombreCamiseta = $_POST['nombre_camiseta'];
$imagenCamiseta = $_POST['img_camiseta'];
$codigo_artista = $_POST['codigoArtista'];

$query = "UPDATE camiseta SET nombre='$nombreCamiseta', imagen_camiseta='$imagenCamiseta', id_artista=$codigo_artista WHERE id=$codigo";

$res = $MySQL->query($query);

echo $query;
