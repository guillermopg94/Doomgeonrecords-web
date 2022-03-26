<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();

$codigo = $_GET['idUsuario'];



$sql_delete = "DELETE FROM album WHERE id_album=$codigo";
$res = $MySQL->query($sql_delete);


echo $codigo;

