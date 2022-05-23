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
    $pass=$_POST['pass']; 
    $query= "UPDATE usuario SET nombre='$nombreUser', email='$email', tipo='usuario', primerapellido='$primerapellido', segundoapellido='$segundoapellido', user='$user', pass='$pass' WHERE id_usuario='$codigo'";

    $res = $MySQL->query($query);
    mail($email, 'Detalles de cuenta Doomgeon Records modificados', 'Su nuevo nombre es '. $nombreUser . ' '. $primerapellido .' '. $segundoapellido .'. ' . 'Su nombre de usuario es '. $user .'. ' . 'Su contraseña es '. $pass .'.');
    echo $query;