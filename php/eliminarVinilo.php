<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$nombre = $_GET['idUsuario'];



$sql_delete = "DELETE FROM vinilo WHERE nombre='$nombre'";
$res = $MySQL->query($sql_delete);


echo $codigo;

