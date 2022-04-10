<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();


$nombre_cd = $_GET['nombreCD'];
$imagen_cd = $_GET['imagenCD'];
$nombre_producto = $_GET['nombreProducto'];
$nombre_casete = $_GET['nombreCasete'];
$imagen_casete = $_GET['imagenCasete'];
$nombre_vinilo = $_GET['nombreVinilo'];
$imagen_vinilo = $_GET['imagenVinilo'];
$nombre_camiseta = $_GET['nombreCamiseta'];
$imagen_camiseta = $_GET['imagenCamiseta'];
$cantidad_camiseta = $_GET['cantidadCamiseta'];
$cantidad_cd = $_GET['cantidadCD'];
$cantidad_casete = $_GET['cantidadCasete'];
$cantidad_vinilo = $_GET['cantidadVinilo'];
$tallaXXL = $_GET['tallaXXL'];
$tallaXL = $_GET['tallaXL'];
$tallaL = $_GET['tallaL'];
$tallaM = $_GET['tallaM'];
$tallaS = $_GET['tallaS'];
$codigo_artista = $_GET['codigoArtista'];


$sqlUserExiste = $MySQL->query("SELECT cd_nombre FROM producto WHERE cd_nombre='$nombre_cd'");
$NumerodeColumnas = mysqli_num_rows($sqlUserExiste);

$sqlUserExiste1 = $MySQL->query("SELECT casete_nombre FROM producto WHERE casete_nombre='$nombre_casete'");
$NumerodeColumnas1 = mysqli_num_rows($sqlUserExiste1);

$sqlUserExiste2 = $MySQL->query("SELECT vinilo_nombre FROM producto WHERE vinilo_nombre='$nombre_vinilo'");
$NumerodeColumnas2 = mysqli_num_rows($sqlUserExiste2);

$sqlUserExiste3 = $MySQL->query("SELECT camiseta_nombre FROM producto WHERE camiseta_nombre='$nombre_camiseta'");
$NumerodeColumnas3 = mysqli_num_rows($sqlUserExiste3);


if ($NumerodeColumnas == 0 || $NumerodeColumnas1 == 0 || $NumerodeColumnas2 == 0 || $NumerodeColumnas3 == 0) {

    $sql_insert = "INSERT INTO producto (cd_nombre, casete_nombre, vinilo_nombre, camiseta_nombre, cd_imagen, casete_imagen, vinilo_imagen, camiseta_imagen, cd_cantidad, casete_cantidad, camiseta_cantidad, vinilo_cantidad, id_artista, tallaXXL, tallaXL, tallaL, tallaM, tallaS, nombre_producto) VALUES ('$nombre_cd','$nombre_casete','$nombre_vinilo', '$nombre_camiseta', '$imagen_cd', '$imagen_casete', '$imagen_vinilo', '$imagen_camiseta', $cantidad_cd, $cantidad_casete, $cantidad_camiseta, $cantidad_vinilo, $codigo_artista, $tallaXXL, $tallaXL, $tallaL, $tallaM, $tallaS, $nombre_producto)";

    $res = $MySQL->query($sql_insert);


   echo $res;
} else {
    echo "existe";
}
