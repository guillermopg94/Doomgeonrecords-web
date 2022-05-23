<?php
include("conexion.php");

session_start();


if (!($_SESSION["Usuario"])) {
    echo "no";
}else{
 $user=$_SESSION["Usuario"];
 $MySQLConnection = new ConnectionDB();
 $MySQL = $MySQLConnection->getDBConnection();
 
     $sql = "SELECT * FROM usuario WHERE user='$user'";
 
 $res=$MySQL->query($sql);
 
 
 $jsonData = array();
 
 
 while ($row = mysqli_fetch_assoc($res)) {
     $jsonData[] = $row;
 }
 
 
 echo json_encode($jsonData);




}
