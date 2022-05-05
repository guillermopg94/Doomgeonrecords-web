<?php

include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();



$nombre = $_GET['nombreUser'];
$user = $_GET['user'];
$primerApellido = $_GET['primerapellido'];
$segundoApellido = $_GET['segundoapellido'];
$tipo = $_GET['tipo'];
$email = $_GET['email'];

$pass = md5($_GET['pass']);

$sqlUserExiste = $MySQL->query("SELECT user FROM usuario WHERE user='$user'");
$NumerodeColumnas=mysqli_num_rows($sqlUserExiste);

if($NumerodeColumnas==0)
{

$sql_insert = "INSERT INTO usuario (nombre, email, pass, tipo, primerapellido, segundoapellido, user) VALUES ('$nombre', '$email', '$pass', '$tipo', '$primerApellido', '$segundoApellido','$user')";

$res = $MySQL->query($sql_insert);



echo $res;
}else{
    echo "existe";
}