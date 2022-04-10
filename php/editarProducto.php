<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoProducto'];
    $id_artista=$_POST['codigoArtista'];
    $nombreProducto=$_POST['nombreProducto'];
    $nombreCD=$_POST['nombreCD'];
    $cantidadCD=$_POST['cantidadCD'];
    $imagenCD=$_POST['imagenCD'];
    $nombreCasete=$_POST['nombreCasete'];
    $cantidadCasete=$_POST['cantidadCasete'];
    $imagenCasete=$_POST['imagenCasete'];
    $nombreVinilo=$_POST['nombreVinilo'];
    $cantidadVinilo=$_POST['cantidadVinilo'];
    $imagenVinilo=$_POST['imagenVinilo'];
    $nombreCamiseta=$_POST['nombreCamiseta'];
    $imagenCamiseta=$_POST['imagenCamiseta'];
    $cantidadCamiseta=$_POST['cantidadCamiseta'];
    $tallaXXL=$_POST['tallaXXL'];
    $tallaXL=$_POST['tallaXL'];
    $tallaL=$_POST['tallaL'];
  $tallaM=$_POST['tallaM'];   
  $tallaS=$_POST['tallaS']; 

    $query= "UPDATE producto SET cd_nombre='$nombreCD', casete_nombre='$nombreCasete', vinilo_nombre='$nombreVinilo', camiseta_nombre='$nombreCamiseta', cd_imagen='$imagenCD', casete_imagen='$imagenCasete', vinilo_imagen='$imagenVinilo', camiseta_imagen='$imagenCamiseta',cd_cantidad=$cantidadCD, casete_cantidad=$cantidadCasete, camiseta_cantidad=$cantidadCamiseta,vinilo_cantidad=$cantidadVinilo, id_artista=$id_artista, tallaXXL=$tallaXXL, tallaXL=$tallaXL, tallaL=$tallaL, tallaM=$tallaM, tallaS=$tallaS, nombre_producto='$nombreProducto' WHERE id_producto=$codigo";
    $res = $MySQL->query($query);

    echo $query;