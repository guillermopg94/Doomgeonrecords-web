<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];



$sql_delete = "DELETE FROM producto WHERE id_producto=$codigo";
$res = $MySQL->query($sql_delete);


echo $codigo;