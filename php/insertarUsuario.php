<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();



$nombre = $_GET['nombre'];
$user = $_GET['user'];
$primerApellido = $_GET['primerapellido'];
$segundoApellido = $_GET['segundoapellido'];
$email = $_GET['email'];

$pass = md5($_GET['pass']);

$sqlUserExiste = $MySQL->query("SELECT user FROM usuario WHERE user='$user'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);

if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO usuario (nombre, email, pass, tipo, primerapellido, segundoapellido, user) VALUES ('$nombre','$email', '$pass', 'usuario', '$primerApellido', '$segundoApellido','$user')";

$res = $MySQL->query($sql_insert);


echo $NumerodeColumnas;
}else{
    echo "existe";
}