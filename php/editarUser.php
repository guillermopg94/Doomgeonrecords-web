<?php
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();
 

    $codigo=$_POST['codigoUser'];
    $nombreUser=$_POST['nombreUser'];
    $primerapellido=$_POST['primerapellido']; 
    $segundoapellido=$_POST['segundoapellido']; 
    $user=$_POST['user']; 
    $email=$_POST['email']; 
    $tipo=$_POST['tipo']; 

    $query= "UPDATE usuario SET nombre='$nombreUser', email='$email', tipo='$tipo', primerapellido='$primerapellido', segundoapellido='$segundoapellido', user='$user' WHERE id_usuario='$codigo'";

    $res = $MySQL->query($query);

    echo $query;