<?php
session_start();
include("conexion.php");

$MySQLConnection = new ConnectionDB();
$MySQL = $MySQLConnection->getDBConnection();


$user = $_POST["user"];
$pass = md5($_POST["pass"]);  

    $sql = "SELECT * FROM usuario WHERE user='$user'";

$res=$MySQL->query($sql);

$row = mysqli_fetch_assoc($res);

if(isset($row["pass"]) == $pass && $user == "admin" && $row["tipo"]=="admin" ){
    $_SESSION["Usuario"] = $user;
 echo "admin";
} else if(isset($row["pass"]) == $pass && $user != "admin"){
    $_SESSION["Usuario"] = $user;

    echo "entra";
}else{
    echo "mal";
}

//contraseña admin: guille1234